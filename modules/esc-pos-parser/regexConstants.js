
const NUMBER_1_TO_255 = '\\b(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?){1}';
const NUMBER_0_TO_2 = '\\b(0|1|2){1}';
const nPositions1 = '(\\W|\\d|\\w){1}';
const nPositions2 = '(\\W|\\d|\\w){2}';
const nPositions3 = '(\\W|\\d|\\w){3}';
const nPositions4 = '(\\W|\\d|\\w){4}';
const nPositions5 = '(\\W|\\d|\\w){5}';

export default {
    NUMBER_1_TO_255,
    NUMBER_0_TO_2,
    nPositions1,
    nPositions2,
    nPositions3,
    nPositions4,
    nPositions5
}
