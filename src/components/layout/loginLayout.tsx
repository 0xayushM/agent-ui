"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Define the shape for OAuth providers to make it scalable
interface OAuthProvider {
  id: string; // e.g., 'google', 'zoho', 'github'
  label: string;
  icon?: React.ReactNode;
}

// Define the props for our new, flexible component
interface LoginLayoutProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  oauthProviders?: OAuthProvider[];
  onOAuthSubmit: (providerId: string) => void | Promise<void>;
  
  showCredentialsLogin?: boolean;
  onCredentialsSubmit: (formData: FormData) => void | Promise<void>;
  credentialsSubmitLabel?: string;
  
  dividerText?: string;
  
  forgotPasswordLink?: {
    href: string;
    label?: string;
  };
  
  signUpLink?: {
    href: string;
    text?: string;
    label?: string;
  };

  legalFooter?: React.ReactNode;
}

export function LoginLayout({
  className,
  title,
  description,
  oauthProviders = [],
  onOAuthSubmit,
  showCredentialsLogin = true,
  onCredentialsSubmit,
  credentialsSubmitLabel = "Login",
  dividerText = "Or continue with",
  forgotPasswordLink,
  signUpLink,
  legalFooter,
  ...props
}: LoginLayoutProps) {
  return (
    <div className={cn("w-full max-w-md", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* OAuth Provider Buttons */}
            {oauthProviders.length > 0 && (
              <div className="flex flex-col gap-4">
                {oauthProviders.map((provider) => (
                  <form key={provider.id} action={() => onOAuthSubmit(provider.id)}>
                    <Button type="submit" variant="outline" className="w-full">
                      {provider.icon}
                      {provider.label}
                    </Button>
                  </form>
                ))}
              </div>
            )}

            {/* Divider */}
            {oauthProviders.length > 0 && showCredentialsLogin && (
              <div className="relative text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  {dividerText}
                </span>
              </div>
            )}

            {/* Credentials Form */}
            {showCredentialsLogin && (
              <form action={onCredentialsSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      {forgotPasswordLink && (
                        <a href={forgotPasswordLink.href} className="ml-auto text-sm underline-offset-4 hover:underline">
                          {forgotPasswordLink.label || "Forgot your password?"}
                        </a>
                      )}
                    </div>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    {credentialsSubmitLabel}
                  </Button>
                </div>
              </form>
            )}
            
            {signUpLink && (
              <div className="text-sm text-center">
                {signUpLink.text || "Don't have an account? "}
                <a href={signUpLink.href} className="underline underline-offset-4">
                  {signUpLink.label || "Sign up"}
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {legalFooter && (
        <div className="mt-4 text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          {legalFooter}
        </div>
      )}
    </div>
  );
}