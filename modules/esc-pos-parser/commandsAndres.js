import rc from './regexConstants';
const s = require('./symbols');

const { EscPosCommands } = require('./commands');

// Basic control command
export const ESC_EXCLAMATION_MARK_N = new EscPosCommands(s.ESC.symbol + s.EXCLAMATION_MARK_CLOSE.symbol + rc.nPositions1, '', 'Select character printing mode');
