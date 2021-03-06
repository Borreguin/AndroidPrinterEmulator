import {Hex2Str} from './util';

const s = require('./symbols');
const {EscPosCommands} = require('./commands');
import rc from './regexConstants';

// Basic control command
export const ESC_AT = new EscPosCommands(s.ESC.symbol + s.AT.symbol, '', 'Initialize printer');
export const FF = new EscPosCommands(s.FF.symbol, '\n', 'Print and feed paper 1 lines');
export const SO = new EscPosCommands(s.SO.symbol, '\n', 'Print and paper feed to the right black bar');
export const LF = new EscPosCommands(s.LF.symbol, '\n', 'Line feed');
export const CR = new EscPosCommands(s.CR.symbol, '\n', 'Print and carriage return');
export const ESC_J_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x4A) + rc.nPositions1, '', 'Print and Paper Feed n vertical');
export const ESC_d_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x64) + rc.nPositions1, '', 'Print and feed paper n lines');
export const HT = new EscPosCommands(s.HT.symbol, '', 'Horizontal tab');
export const GS_FF = new EscPosCommands(s.GS.symbol + s.FF.symbol, '', 'Print and paper feed to the label gap');
export const GS_x99 = new EscPosCommands(s.GS.symbol + Hex2Str( 0x99), '', 'Read the printer status');
export const basicControlCommand = [ESC_AT, FF, SO, LF, CR, ESC_J_n, ESC_d_n, HT, GS_FF, GS_x99];

// Character parameter set command
export const ESC_EXCLAMATION_MARK_N = new EscPosCommands(s.ESC.symbol + s.EXCLAMATION_MARK_CLOSE.symbol + rc.nPositions1, '', 'Select character printing mode');
export const GS_EXCLAMATION_MARK_N = new EscPosCommands(s.GS.symbol + s.EXCLAMATION_MARK_CLOSE.symbol + rc.nPositions1, '', 'Select character size');
export const ESC_M_n = new EscPosCommands(s.ESC.symbol + s.M.symbol + rc.nPositions1, '', 'Select character font');
export const ESC_HYPHEN_n = new EscPosCommands(s.ESC.symbol + s.HYPHEN.symbol + rc.nPositions1, '', 'Specify/cancels underline mode');
export const ESC_E_n = new EscPosCommands(s.ESC.symbol + s.E.symbol + rc.nPositions1, '', 'Specify/cancel emphasized printing');
export const GS_B_n = new EscPosCommands(s.GS.symbol + s.B.symbol + rc.nPositions1, '', 'Specify/cancel emphasized printing');
export const ESC_V_n = new EscPosCommands(s.ESC.symbol + s.V.symbol + rc.nPositions1, '', 'Specify/cancel char. 90 deg. clockwise rotation');
export const charecterParameterSetCommand = [ESC_EXCLAMATION_MARK_N, GS_EXCLAMATION_MARK_N, ESC_M_n, ESC_HYPHEN_n, ESC_E_n, GS_B_n, ESC_V_n];

// Print layout parameters set command
export const ESC_DOL_nL_nH = new EscPosCommands(s.ESC.symbol + s.DOL.symbol + rc.nPositions2, '', 'Specify absolute position');
export const ESC_D_nL_nk = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x44) + rc.nPositions2 + s.NULL, '', 'Set horizontal tab position');
export const ESC_2 = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x32), '', 'Set default line spacing');
export const ESC_3n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x33) + rc.nPositions1, '', 'Set line feed amount');
export const ESC_SP_n = new EscPosCommands(s.ESC.symbol + s.SP.symbol + rc.nPositions1, '', 'Set line feed amount');
export const ESC_a_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x61) + rc.nPositions1, '', 'Position alignment');
export const GS_L_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x4C) + rc.nPositions2, '', 'Set left margin');
export const printLayoutParameters = [ESC_DOL_nL_nH, ESC_D_nL_nk, ESC_2, ESC_3n, ESC_SP_n, ESC_a_n, GS_L_n];

// Graphics / image print command 
export const ESC_ASTERISK_m_nL_nH_dk = new EscPosCommands(s.ESC.symbol + "\\" + s.ASTERISK.symbol + rc.nPositions4, '', 'Specify bit image mode');
export const GS_ASTERISK_x_y_dk = new EscPosCommands(s.GS.symbol + "\\" + s.ASTERISK.symbol + rc.nPositions3, '', 'Define download bit images');
export const GS_SLASH_n = new EscPosCommands(s.GS.symbol + s.SLASH.symbol + rc.nPositions1, '', 'Print download bit images');
export const FS_P_n = new EscPosCommands(s.FS.symbol + s.P.symbol + rc.nPositions1, '', 'Print NV bit image');
export const graphicsPrintCommand = [ESC_ASTERISK_m_nL_nH_dk, GS_ASTERISK_x_y_dk, GS_SLASH_n, FS_P_n];

// Bar code printing command
export const GS_h_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x68) + rc.nPositions1, '', 'Set bar code height');
export const GS_w_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x77) + rc.nPositions1, '', 'Set bar code horizontal size');
export const GS_H_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x48) + rc.nPositions1, '', 'Select HRI character print position');
export const GS_f_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x66) + rc.nPositions1, '', 'Select HRI character font');
export const GS_k_m = new EscPosCommands(s.GS.symbol + Hex2Str( 0x6B) + rc.nPositions1, '', 'Print bar code');
export const GS_Z_n = new EscPosCommands(s.GS.symbol + Hex2Str( 0x5A) + rc.nPositions1, '', 'Select the 2D bar code');
export const ESC_Z_m_n_k_sL_sH = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x5A) + rc.nPositions5, '', 'Print the 2D bar code');
export const barCodePrintingCommand = [GS_h_n, GS_w_n, GS_H_n, GS_f_n, GS_k_m, GS_Z_n, ESC_Z_m_n_k_sL_sH];

// Curve the print command  -----> TO DO

// Print specials characters command
export const FS_AMP = new EscPosCommands(s.FS.symbol + s.AMP.symbol, '', 'Specify Chinese character mode');
export const FS_DOT = new EscPosCommands(s.FS.symbol + s.DOT.symbol, '', 'Cancel Chinese character mode');
export const FS_U_nL_nH = new EscPosCommands(s.FS.symbol + Hex2Str( 0x55) + rc.nPositions2, '', 'Print Unicode code character');
export const ESC_t_n = new EscPosCommands(s.ESC.symbol + Hex2Str( 0x74) + rc.nPositions1, '', 'Select character code page');
export const ESC_R_n = new EscPosCommands(s.ESC.symbol + Hex2Str(0x52) + rc.nPositions1, '', 'Select international characters');
export const US_f_id_nL_nH = new EscPosCommands(s.US.symbol + Hex2Str(0x66) + rc.nPositions3, '', 'In frame mode data transmission');
export const US_q_id = new EscPosCommands(s.US.symbol + Hex2Str(0x71) + rc.nPositions1, '', 'Frame status query');
export const chineseCharacterCommand = [FS_AMP, FS_DOT, FS_U_nL_nH, ESC_t_n, ESC_R_n, US_f_id_nL_nH, US_q_id];

// Especial command
export const US_S_B_R_P = new EscPosCommands(s.US.symbol + s.S.symbol + s.B.symbol + s.R.symbol + s.P.symbol, '', 'Read the Bluetooth password');
export const US_S_B_S_P = new EscPosCommands(s.US.symbol + s.S.symbol + s.B.symbol + s.S.symbol + s.P.symbol, '', 'Setup the Bluetooth password');
export const especialCommand = [US_S_B_R_P, US_S_B_S_P];

export const commandList = [].concat(basicControlCommand, charecterParameterSetCommand, printLayoutParameters, graphicsPrintCommand, barCodePrintingCommand, chineseCharacterCommand, especialCommand)

