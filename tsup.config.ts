// tsup.config.ts
import { defineConfig } from "tsup";
import { exec } from "child_process";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  tsconfig: "tsconfig.build.json",
  // 👇 The correct configuration for esbuild's JSX transform
  esbuildOptions(options) {
    options.jsx = 'automatic'; // Use 'automatic' instead of 'react-jsx'
    return options;
  },
  
  async onSuccess() {
    // Your existing onSuccess logic for Tailwind CSS
    return new Promise((resolve) => {
      exec(
        "npx tailwindcss -i ./src/app/globals.css -o ./dist/index.css",
        (error, stdout, stderr) => {
          if (error) {
            console.error(`Tailwind CSS build error: ${error}`);
            return;
          }
          if (stderr) {
            console.error(`Tailwind CSS stderr: ${stderr}`);
            return;
          }
          console.log(`Tailwind CSS build successful: ${stdout}`);
          resolve();
        }
      );
    });
  },
});