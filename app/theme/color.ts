let color = {
    primary: {
        dark: '#111D42',
        purple: '#423E94',
        blue: '#270B96',
        green: '#0B963A'
    },
    highlight: {
        green: '#96FF4E',
        yellow: '#FFF55A',
        cyan: '#1BB6EC',
    },
    gray: {
        light: {
            1: '#F2F5FF',
            2: '#C3CBE5',
            3: '#99A2BF'
        },
        dark: {
            1: '#7480A6',
            2: '#54618C',
            3: '#333F66'
        }
    },
    control: {
        green: '#0E9594',
        red: '#780116'
    }
}

color['bg'] = `linear-gradient(131.35deg, ${color.gray.light[2]} -8.86%, ${color.gray.light[2]} -8.84%, ${color.gray.light[1]} 100%)`;

export default color;