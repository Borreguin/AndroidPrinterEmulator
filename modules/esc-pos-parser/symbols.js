class SpecialSymbol {
  symbol;
  description;
  replaceWith;
  constructor(symbolHex, replaceWith, description) {
    const convertToString = JSON.stringify(String.fromCharCode(symbolHex));
    this.symbol = convertToString.substring(1, convertToString.length-1);
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
export const x99 = new SpecialSymbol(0x99, '', 'x99');
export const x30 = new SpecialSymbol(0x99, '', 'x30');
export const x31 = new SpecialSymbol(0x31, '', 'x31');
export const x32 = new SpecialSymbol(0x32, '', 'x32');
export const x33 = new SpecialSymbol(0x33, '', 'x33');
export const AMP = new SpecialSymbol(0x26, '', '& ampersand');
export const DOT = new SpecialSymbol(0x2E, '', '. dot');
export const US = new SpecialSymbol(0x1F, '', 'US');
export const Jx4A = new SpecialSymbol(0x4A, '', 'J');
export const dx64 = new SpecialSymbol(0x64, '', 'd');
export const DOL = new SpecialSymbol(0x24, '', '$');
export const Dx44 = new SpecialSymbol(0x44, '', 'D');
export const NULL = new SpecialSymbol(0xFF, '', 'FF');
export const ax61 = new SpecialSymbol(0xFF, '', 'a');
export const Lx4C = new SpecialSymbol(0x4C, '', 'L');
export const hx68 = new SpecialSymbol(0x68, '', 'h');
export const wx77 = new SpecialSymbol(0x77, '', 'w');
export const Hx48 = new SpecialSymbol(0x48, '', 'H');
export const fx66 = new SpecialSymbol(0x66, '', 'f');
export const kx6B = new SpecialSymbol(0x6B, '', 'k');
export const Zx5A = new SpecialSymbol(0x5A, '', 'Z');

export const SP = new SpecialSymbol(0x20, ' ', 'Space');

export const AT = new SpecialSymbol(0x40, '', '@ at');

export const C_EOT = new SpecialSymbol(0x04, '', 'C_EOT');
export const C_END = new SpecialSymbol(0x05, '', 'C_END');
export const C_DC4 = new SpecialSymbol(0x14, '', 'C_DC4');

export const EXCLAMATION_MARK_CLOSE = new SpecialSymbol(0x21, '', '!');

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
