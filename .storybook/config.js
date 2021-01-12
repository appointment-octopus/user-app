import { addParameters, configure } from "@storybook/react";
import { create } from '@storybook/theming';
import './addons';

const theme = create({ base: 'dark', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD' });
addParameters({ options: { theme } });

// automatically import all files ending in *.stories.js
configure(require.context("../app", true, /\.stories\.[tj]sx?$/), module);
