import React from 'react'
import { config, withDesign } from 'storybook-addon-designs';

import BigButton from './BigButton';
export { BigButton };
BigButton.story = {
    parameters: {
        design: config([
            {
                name: 'Figma',
                type: 'figma',
                url:
                    'https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=47%3A6'
            },
            {
                name: 'Link',
                type: 'link',
                url:
                    'https://www.figma.com/file/jvLCps7aAuxsvHVv1j9x7D/Appointment-Octopus?node-id=47%3A6'
            }
        ])
    }
}

export default {
    title: 'Atoms',
    decorators: [withDesign],
    // parameters: {
    // docs: { page: Docs }
    // }
}
