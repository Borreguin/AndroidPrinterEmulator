export class EscPosCommands {
  command;
  description;
  replaceWith;
  constructor(command, replaceWith, description) {
    this.command = new RegExp(command);
    this.replaceWith = replaceWith;
    this.description = description;
  }
}

