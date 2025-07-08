import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../src/stories/**/*.stories.@(ts|tsx)"],
  addons: [],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../src')
          }
        ]
      },
    });
  },
};

export default config;
