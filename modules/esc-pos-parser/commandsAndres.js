const s = require('./symbols');
const rc = require('./regexContants');

const { EscPosCommands } = require('./commands');

// Basic control command
export const ESC_EXCLAMATION_MARK_N = new EscPosCommands(s.ESC + s.EXCLAMATION_MARK + rc.NUMBER_0_TO_255, '', 'Select character printing mode');
