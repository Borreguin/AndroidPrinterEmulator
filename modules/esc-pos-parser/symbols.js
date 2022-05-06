class SpecialSymbol {
  symbol;
  description;
  replaceWith;
  constructor(symbol, replaceWith, description) {
    this.symbol = symbol;
    this.replaceWith = replaceWith;
    this.description = description;
  }
}

export const STX = new SpecialSymbol(String.fromCharCode(0x02), '', 'STX');
export const DLE = new SpecialSymbol(String.fromCharCode(0x10), '', 'DLE');
export const ESC = new SpecialSymbol(String.fromCharCode(0x1b), '', 'SCAPE');
export const FS = new SpecialSymbol(String.fromCharCode(0x1c), '', 'FS');
export const GS = new SpecialSymbol(String.fromCharCode(0x1d), '', 'GS');

export const CAN = new SpecialSymbol(String.fromCharCode(0x18), '', 'CAN');
export const FF = new SpecialSymbol(String.fromCharCode(0x0C), '', 'Print and feed paper 1 lines');
export const SO = new SpecialSymbol(String.fromCharCode(0x0E), '', 'Print and paper feed to the right black bar');
export const LF = new SpecialSymbol(String.fromCharCode(0x0A), '', 'Line feed',);
export const CR = new SpecialSymbol(String.fromCharCode(0x0D), '', 'Print and carriage return');
export const HT = new SpecialSymbol(String.fromCharCode(0x09), '', 'Horizontal tab');
export const x99 = new SpecialSymbol(String.fromCharCode(0x99), '', 'x99');
export const x30 = new SpecialSymbol(String.fromCharCode(0x99), '', 'x30');
export const x31 = new SpecialSymbol(String.fromCharCode(0x99), '', 'x31');
export const x32 = new SpecialSymbol(String.fromCharCode(0x99), '', 'x32');
export const AMP = new SpecialSymbol(String.fromCharCode(0x26), '', '& ampersand');
export const DOT = new SpecialSymbol(String.fromCharCode(0x2E), '', '. dot');
export const US = new SpecialSymbol(String.fromCharCode(0x1F), '', 'US')

export const SP = new SpecialSymbol(String.fromCharCode(0x20), ' ', 'Space');

export const AT = new SpecialSymbol(String.fromCharCode(0x40), '', '@ at');

export const C_EOT = new SpecialSymbol(String.fromCharCode(0x04), '', 'C_EOT');
export const C_END = new SpecialSymbol(String.fromCharCode(0x05), '', 'C_END');
export const C_DC4 = new SpecialSymbol(String.fromCharCode(0x14), '', 'C_DC4');

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
