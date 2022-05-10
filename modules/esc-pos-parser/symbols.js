import {Hex2Str} from './util';

class SpecialSymbol {
  symbol;
  description;
  replaceWith;
  constructor(symbolHex, replaceWith, description) {
    this.symbol = Hex2Str(symbolHex);
    this.replaceWith = replaceWith;
    this.description = description;
  }
}

export const STX = new SpecialSymbol(0x02, '', 'STX');
export const DLE = new SpecialSymbol(0x10, '', 'DLE');
export const ESC = new SpecialSymbol(0x1b, '', 'SCAPE');
export const FS = new SpecialSymbol(0x1c, '', 'FS');
export const GS = new SpecialSymbol(0x1d, '', 'GS');

export const CAN = new SpecialSymbol(0x18, '', 'CAN');
export const FF = new SpecialSymbol(0x0C, '', 'Print and feed paper 1 lines');
export const SO = new SpecialSymbol(0x0E, '', 'Print and paper feed to the right black bar');
export const LF = new SpecialSymbol(0x0A, '', 'Line feed',);
export const CR = new SpecialSymbol(0x0D, '', 'Print and carriage return');
export const HT = new SpecialSymbol(0x09, '', 'Horizontal tab');
export const AMP = new SpecialSymbol(0x26, '', '& ampersand');
export const DOT = new SpecialSymbol(0x2E, '', '. dot');
export const US = new SpecialSymbol(0x1F, '', 'US');
export const DOL = new SpecialSymbol(0x24, '', '$');
export const NULL = new SpecialSymbol(0xFF, '', 'FF');

export const SP = new SpecialSymbol(0x20, ' ', 'Space');
export const HYPHEN = new SpecialSymbol(0x2D, ' ', '-');
export const ASTERISK = new SpecialSymbol(0x2A, ' ', '*' );
export const SLASH = new SpecialSymbol(0x2F, ' ', '/' );
export const MARK = new SpecialSymbol(0x20, ' ', '‘');

export const AT = new SpecialSymbol(0x40, '', '@ at');

export const C_EOT = new SpecialSymbol(0x04, '', 'C_EOT');
export const C_END = new SpecialSymbol(0x05, '', 'C_END');
export const C_DC4 = new SpecialSymbol(0x14, '', 'C_DC4');

export const EXCLAMATION_MARK_CLOSE = new SpecialSymbol(0x21, '', '!');

export const B = new SpecialSymbol(0x42, '', 'B');
export const E = new SpecialSymbol(0x45, '', 'E');
export const M = new SpecialSymbol(0x4D, '', 'M');
export const P = new SpecialSymbol(0x50, '', 'P');
export const R = new SpecialSymbol(0x72, '', 'R');
export const S = new SpecialSymbol(0x73, '', 'S');
export const V = new SpecialSymbol(0x56, '', 'V');

export const EscCharacters = [
  STX.symbol,
  DLE.symbol,
  ESC.symbol,
  FS.symbol,
  GS.symbol,
  CAN.symbol,
  FF.symbol,
  AT.symbol,
  C_EOT.symbol,
  C_END.symbol,
  C_DC4.symbol,
];
