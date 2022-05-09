import {basicControlCommand} from './commandsRober';

export const esc_pos_parser = (to_parse) =>{
    let resp = to_parse;
    console.log("Command:", to_parse);
    const regexExp = new RegExp('e', 'g');
    to_parse = to_parse.replace(regexExp, "*");
    console.log("Command:", basicControlCommand[0].command);
    console.log(to_parse);
    for(const command of basicControlCommand){
        resp = resp.replace(command.command, "");
    }
    console.log("resp:", resp);
}
