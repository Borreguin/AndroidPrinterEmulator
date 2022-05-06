import rc from './regexContants';
const s = require('./symbols');

const { EscPosCommands } = require('./commands');

// Basic control command
export const ESC_EXCLAMATION_MARK_N = new EscPosCommands(s.ESC.symbol + s.EXCLAMATION_MARK_CLOSE.symbol + rc.NUMBER_0_TO_255, '', 'Select character printing mode');
