export class EscPosCommands {
  command;
  description;
  replaceWith;
  constructor(command, replaceWith, description) {
    this.command = new RegExp(command, 'g');
    this.replaceWith = replaceWith;
    this.description = description;
  }
}

