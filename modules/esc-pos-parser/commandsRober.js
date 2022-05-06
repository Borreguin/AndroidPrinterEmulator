const s = require('./symbols');
const {EscPosCommands} = require('./commands');

// Basic control command
export const ESC_AT = new EscPosCommands(s.ESC + s.AT, '', 'Initialize printer');
export const FF = new EscPosCommands(s.FF, '', 'Print and feed paper 1 lines');
export const SO = new EscPosCommands(s.SO, '', 'Print and paper feed to the right black bar');
export const LF = new EscPosCommands(s.LF, '', 'Line feed');
export const CR = new EscPosCommands(s.CR, '', 'Print and carriage return');
export const ESC_J_n = new EscPosCommands(s.ESC + s.Jx4A + '\\d', '', 'Print and Paper Feed n vertical');
export const ESC_d_n = new EscPosCommands(s.ESC + s.dx64 + '\\d', '', 'Print and feed paper n lines');
export const HT = new EscPosCommands(s.HT , '', 'Horizontal tab');
export const GS_FF = new EscPosCommands(s.GS + s.FF, '', 'Print and paper feed to the label gap');
export const GS_x99 = new EscPosCommands(s.GS + s.x99, '', 'Read the printer status');

// Print layout parameters set command
export const ESC_DOL_nL_nH = new EscPosCommands(s.ESC)
export const ESC_2 = new EscPosCommands(s.ESC + s.x32, '', 'Set default line spacing');


// Print Chinese characters command
export const FS_AMP = new EscPosCommands(s.FS + s.AMP, '', 'Specify Chinese character mode');
export const FS_DOT = new EscPosCommands(s.FS + s.DOT, '', 'Cancel Chinese character mode');

