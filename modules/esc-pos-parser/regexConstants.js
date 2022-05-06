
const NUMBER_0_TO_255 = '\\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
const NUMBER_1_TO_255 = '\\b(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?){1}';
const NUMBER_0_TO_2 = '\\b(0|1|2){1}';
const nPositions1 = '(\\w){1}';
const nPositions2 = '(\\w){2}';
const nPositions5 = '(\\w){5}';

export default {
    NUMBER_0_TO_255,
    NUMBER_1_TO_255,
    NUMBER_0_TO_2,
    nPositions1,
    nPositions2,
    nPositions5
}
