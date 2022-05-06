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

const STX = new SpecialSymbol(String.fromCharCode(0x02), '', 'STX');
const DLE = new SpecialSymbol(String.fromCharCode(0x10), '', 'DLE');
const ESC = new SpecialSymbol(String.fromCharCode(0x1b), '', 'SCAPE');
const FS = new SpecialSymbol(String.fromCharCode(0x1c), '', 'FS');
const GS = new SpecialSymbol(String.fromCharCode(0x1d), '', 'GS');

const CAN = new SpecialSymbol(String.fromCharCode(0x18), '', 'CAN');
const FF = new SpecialSymbol(
  String.fromCharCode(0x0c),
  '',
  'Print and feed paper 1 lines',
);
const SP = new SpecialSymbol(String.fromCharCode(0x20), ' ', 'Space');

const AT = new SpecialSymbol(String.fromCharCode(0x40), '', '@');

const C_EOT = new SpecialSymbol(String.fromCharCode(0x04), '', 'C_EOT');
const C_END = new SpecialSymbol(String.fromCharCode(0x05), '', 'C_END');
const C_DC4 = new SpecialSymbol(String.fromCharCode(0x14), '', 'C_DC4');

// const C_DC41 = C_DC4 + '1';
// const C_DC42 = C_DC4 + '2';
// const C_DC48 = C_DC4 + '8';

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


