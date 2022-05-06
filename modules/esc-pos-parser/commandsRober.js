import {Hex2Str} from './util';

const s = require('./symbols');
const {EscPosCommands} = require('./commands');
const rc = require('./regexConstants')

// Basic control command
export const ESC_AT = new EscPosCommands(s.ESC.symbol + s.AT.symbol, '', 'Initialize printer');
export const FF = new EscPosCommands(s.FF.symbol, '', 'Print and feed paper 1 lines');
export const SO = new EscPosCommands(s.SO.symbol, '', 'Print and paper feed to the right black bar');
export const LF = new EscPosCommands(s.LF.symbol, '', 'Line feed');
export const CR = new EscPosCommands(s.CR.symbol, '', 'Print and carriage return');
export const ESC_J_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x4A) + rc.nPositions1, '', 'Print and Paper Feed n vertical');
export const ESC_d_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x64) + rc.nPositions1, '', 'Print and feed paper n lines');
export const HT = new EscPosCommands(s.HT, '', 'Horizontal tab');
export const GS_FF = new EscPosCommands(s.GS.symbol + s.FF.symbol, '', 'Print and paper feed to the label gap');
export const GS_x99 = new EscPosCommands(s.GS.symbol + Hex2Str( 0x99), '', 'Read the printer status');

// Print layout parameters set command
export const ESC_DOL_nL_nH = new EscPosCommands(s.ESC.symbol + s.DOL.symbol + rc.nPositions2, '', 'Specify absolute position');
export const ESC_D_nL_nk = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x44) + rc.nPositions2 + s.NULL, '', 'Set horizontal tab position');
export const ESC_2 = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x32), '', 'Set default line spacing');
export const ESC_3n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x33) + rc.nPositions1, '', 'Set line feed amount');
export const ESC_SP_n = new EscPosCommands(s.ESC.symbol + s.SP.symbol + rc.nPositions1, '', 'Set line feed amount');
export const ESC_a_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x61) + rc.nPositions1, '', 'Position alignment');
export const GS_L_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x4C) + rc.nPositions2, '', 'Set left margin');

// Bar code printing command
export const GS_h_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x68) + rc.nPositions1, '', 'Set bar code height');
export const GS_w_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x77) + rc.nPositions1, '', 'Set bar code horizontal size');
export const GS_H_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x48) + rc.nPositions1, '', 'Select HRI character print position');
export const GS_f_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x66) + rc.nPositions1, '', 'Select HRI character font');
export const GS_k_m = new EscPosCommands(s.GS.symbol + Hex2Str( 0x6B) + rc.nPositions1, '', 'Print bar code');
export const GS_Z_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x5A) + rc.nPositions1, '', 'Select the 2D bar code');
export const ESC_Z_m_n_k_sL_sH = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x5A) + rc.nPositions5, '', 'Print the 2D bar code');

// Print Chinese characters command
export const FS_AMP = new EscPosCommands(s.FS.symbol + s.AMP.symbol, '', 'Specify Chinese character mode');
export const FS_DOT = new EscPosCommands(s.FS.symbol + s.DOT.symbol, '', 'Cancel Chinese character mode');

