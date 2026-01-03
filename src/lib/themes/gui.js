// This file defines all GUI themes available in the Scratch GUI

// The GUI pulls from here, you only need to update this file to add a new GUI theme

import * as guiLight from './gui/light';
import * as guiDark from './gui/light';
import * as guiMidnight from './gui/light';

const GUI_LIGHT = 'light';
const GUI_DARK = 'dark';
const GUI_MIDNIGHT = 'midnight';

const GUI_MAP = {
    [GUI_LIGHT]: guiLight,
    [GUI_DARK]: guiDark,
    [GUI_MIDNIGHT]: guiMidnight
};

for (let i = 0; i < 100; i ++) {
    GUI_MAP[`${GUI_LIGHT}-${i}`] = guiLight;
}
const GUI_DEFAULT = GUI_LIGHT;

export {
    GUI_MAP,
    GUI_DEFAULT
};
