const {EscPosCommands} = require('./commands');
const {ESC, AT} = require('./symbols');

// Basic control command
const ESC_AT = new EscPosCommands(ESC + AT, '', 'Initialize printer');
