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
export const FF = new SpecialSymbol(
  String.fromCharCode(0x0c),
  '',
  'Print and feed paper 1 lines',
);
export const SP = new SpecialSymbol(String.fromCharCode(0x20), ' ', 'Space');

export const AT = new SpecialSymbol(String.fromCharCode(0x40), '', '@');

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
