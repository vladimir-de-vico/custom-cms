import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['../public'],
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};
export default config;
