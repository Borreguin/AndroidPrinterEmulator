const {EscPosCommands} = require('./commands');
const {ESC, AT} = require('./symbols');

// Basic control command
export const ESC_AT = new EscPosCommands(ESC + AT, '', 'Initialize printer');
// export const
