const coral = {
    name: 'coral',
    colors: {
        text: {
            default: 'black',
        },
        ui: {
            bodyBackground: '#ede9d8',
            headerBackground: '#ffaaab',
        }
    },
    fonts: {
        mainFont: `'Abril Fatface', cursive`,
        secondaryFont: `'Quicksand', sans-serif`,
    }
};

const digital = {
    name: 'digital',
    colors: {
        text: {
            default: 'white',
        },
        ui: {
            bodyBackground: 'transparent',
            headerBackground: 'transparent',
        }
    },
    fonts: {
        mainFont: `'Titillium Web', sans-serif;`,
        secondaryFont: `'Pathway Extreme', sans-serif;`,
    }
};

export default {
    coral,
    digital
};

export { coral, digital };