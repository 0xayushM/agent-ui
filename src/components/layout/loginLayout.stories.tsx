import type { Meta, StoryObj } from "@storybook/react";
import { LoginLayout } from "./loginLayout";
import { Github, Mail } from "lucide-react"; // Use icons for the story

const meta: Meta<typeof LoginLayout> = {
  title: "Layouts/LoginLayout",
  component: LoginLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // This allows us to see the actions being called in the Storybook UI
    onOAuthSubmit: { action: "onOAuthSubmit" },
    onCredentialsSubmit: { action: "onCredentialsSubmit" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Log in to Your Dashboard",
    description: "Enter your credentials or use a social provider to continue.",
    oauthProviders: [
      { id: "github", label: "Continue with GitHub", icon: <Github className="mr-2 size-4" /> },
      { id: "google", label: "Continue with Google", icon: <Mail className="mr-2 size-4" /> },
    ],
    showCredentialsLogin: true,
    forgotPasswordLink: { href: "#" },
    signUpLink: { href: "#" },
    legalFooter: (
      <>
        By signing in, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
      </>
    ),
  },
};

export const CredentialsOnly: Story = {
  args: {
    ...Default.args,
    description: "Enter your email and password to log in.",
    oauthProviders: [], // No OAuth providers
  },
};

export const OAuthOnly: Story = {
  args: {
    ...Default.args,
    title: "Sign in",
    description: "Use one of the following providers to access your account.",
    showCredentialsLogin: false, // No credentials form
    signUpLink: undefined,
    forgotPasswordLink: undefined,
  },
};

export const Minimal: Story = {
  args: {
    title: "Access Your Account",
    description: "Please log in to continue.",
    showCredentialsLogin: true,
    oauthProviders: [],
    signUpLink: undefined,
    forgotPasswordLink: undefined,
    legalFooter: undefined,
  },
};