const s = require('./symbols');
const {EscPosCommands} = require('./commands');

// Basic control command
export const ESC_AT = new EscPosCommands(s.ESC + s.AT, '', 'Initialize printer');
export const GS_FF = new EscPosCommands(s.GS + s.FF, '', 'Print and paper feed to the label gap');
export const GS_x99 = new EscPosCommands(s.GS + s.x99, '', 'Read the printer status');

// Print layout parameters set command
export const ESC_2 = new EscPosCommands(s.ESC + s.x32, '', 'Set default line spacing');

// Print Chinese characters command
export const FS_AMP = new EscPosCommands(s.FS + s.AMP, '', 'Specify Chinese character mode');
export const FS_DOT = new EscPosCommands(s.FS + s.DOT, '', 'Cancel Chinese character mode');

