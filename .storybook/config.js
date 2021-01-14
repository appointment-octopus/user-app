import { addParameters, configure } from "@storybook/react";
import { create } from '@storybook/theming';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import './addons';
const customViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
    iphone8: {
        name: 'Iphone 8',
        styles: {
            width: '375px',
            height: '667px'
        }
    }
};

const theme = create({ base: 'dark', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD' });
addParameters({ 
    options: { theme }, 
    viewport: {
        viewports: { ...MINIMAL_VIEWPORTS, ...customViewports}
    }
});

// automatically import all files ending in *.stories.js
configure(require.context("../app", true, /\.stories\.[tj]sx?$/), module);
