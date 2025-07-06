# 🧩 @0xayushm/agentui — Dashboard UI Component Library

> Reusable, composable, and accessible dashboard components powered by [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), and [Tailwind CSS](https://tailwindcss.com/).


## 🚀 Why AgentUI?

After building multiple dashboards for our product [BrewMyAgent](https://brewmyagent.com) and side projects, I realized I was recreating the same components over and over — buttons, cards, toasts, layouts... the whole drill.

So I created this library to:
- 📦 Package the components I was using again and again
- 🧱 Provide a solid base for any AI or analytics dashboard
- 🔁 Save dev hours with reusable UI logic
- 🌙 Support dark/light mode by default


## ✨ Features

- Built with **Next.js** + **shadcn/ui**
- Styled using **TailwindCSS**
- Composed using **Radix Primitives**
- Shipped via **tsup** in both ESM and CJS formats
- **TypeScript-first** with auto-generated `.d.ts`
- Works with **Storybook** for isolated previews
- Easily customizable — bring your own theme

## 📦 Installation

```bash
npm install @0xayushm/agentui
```
Then import components in your app:

```tsx
import { DashboardShell, AgentCard } from "@0xayushm/agentui"
```

## 🧪 Storybook

```bash
npm run storybook
```
Browse your components locally at: http://localhost:6006

## 📁 Usage Example

```tsx
import { DashboardShell, AgentCard } from "@0xayushm/agentui"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <AgentCard
        name="Finance Agent"
        description="Categorizes your transactions"
        status="active"
      />
    </DashboardShell>
  )
}
```

## 🛠️ Development

Clone and build locally:
```bash
git clone https://github.com/0xayushm/agentui.git
cd agentui
npm install
npm run build
```

## 📚 Docs & Contribution
This library is under active development and open to contributions!

🧩 Browse components in Storybook

📖 Read the [Blog Post](https://0xayushm.hashnode.dev/custom-ui-library) on how it was built

🙌 PRs are welcome!

Planning to add: Charts, Tables, AI prompts UI, Settings Panels — and more.
```
git clone https://github.com/0xayushm/agentui.git
cd agentui
npm install
npm run build
```

## 📚 Docs & Contribution
This library is under active development and open to contributions!

- 🧩 Browse components in Storybook
- 📖 Read the Blog Post on how it was built
- 🙌 PRs are welcome!

Planning to add: Charts, Tables, AI prompts UI, Settings Panels — and more.

## ⭐ Found it useful?

- 🌟 Star this repo
- 📥 Share with dev friends
- 💡 Contribute your own component!

Let’s build clean UIs, together. 🚀
