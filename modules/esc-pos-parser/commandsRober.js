const s = require('./symbols');
const {EscPosCommands} = require('./commands');
const n1_exp = '(\\d){1}';
const n2_exp = '(\\d){2}';
const n5_exp = '(\\d){5}';

// Basic control command
export const ESC_AT = new EscPosCommands(s.ESC + s.AT, '', 'Initialize printer');
export const FF = new EscPosCommands(s.FF, '', 'Print and feed paper 1 lines');
export const SO = new EscPosCommands(s.SO, '', 'Print and paper feed to the right black bar');
export const LF = new EscPosCommands(s.LF, '', 'Line feed');
export const CR = new EscPosCommands(s.CR, '', 'Print and carriage return');
export const ESC_J_n = new EscPosCommands(s.ESC + s.Jx4A + n1_exp, '', 'Print and Paper Feed n vertical');
export const ESC_d_n = new EscPosCommands(s.ESC + s.dx64 + n1_exp, '', 'Print and feed paper n lines');
export const HT = new EscPosCommands(s.HT, '', 'Horizontal tab');
export const GS_FF = new EscPosCommands(s.GS + s.FF, '', 'Print and paper feed to the label gap');
export const GS_x99 = new EscPosCommands(s.GS + s.x99, '', 'Read the printer status');

// Print layout parameters set command
export const ESC_DOL_nL_nH = new EscPosCommands(s.ESC + s.DOL + n2_exp, '', 'Specify absolute position');
export const ESC_D_nL_nk = new EscPosCommands(s.ESC + s.Dx44 + n2_exp + s.NULL, '', 'Set horizontal tab position');
export const ESC_2 = new EscPosCommands(s.ESC + s.x32, '', 'Set default line spacing');
export const ESC_3n = new EscPosCommands(s.ESC + s.x33 + n1_exp, '', 'Set line feed amount');
export const ESC_SP_n = new EscPosCommands(s.ESC + s.SP + n1_exp, '', 'Set line feed amount');
export const ESC_a_n = new EscPosCommands(s.ESC + s.ax61 + n1_exp, '', 'Position alignment');
export const GS_L_n = new EscPosCommands(s.GS + s.Lx4C + n2_exp, '', 'Set left margin');

// Bar code printing command
export const GS_h_n = new EscPosCommands(s.GS + s.hx68 + n1_exp, '', 'Set bar code height');
export const GS_w_n = new EscPosCommands(s.GS + s.wx77 + n1_exp, '', 'Set bar code horizontal size');
export const GS_H_n = new EscPosCommands(s.GS + s.Hx48 + n1_exp, '', 'Select HRI character print position');
export const GS_f_n = new EscPosCommands(s.GS + s.fx66 + n1_exp, '', 'Select HRI character font');
export const GS_k_m = new EscPosCommands(s.GS + s.kx6B+ n1_exp, '', 'Print bar code');
export const GS_Z_n = new EscPosCommands(s.GS + s.Zx5A + n1_exp, '', 'Select the 2D bar code');
export const ESC_Z_m_n_k_sL_sH = new EscPosCommands(s.ESC + s.Zx5A + n5_exp, '', 'Print the 2D bar code');

// Print Chinese characters command
export const FS_AMP = new EscPosCommands(s.FS + s.AMP, '', 'Specify Chinese character mode');
export const FS_DOT = new EscPosCommands(s.FS + s.DOT, '', 'Cancel Chinese character mode');

