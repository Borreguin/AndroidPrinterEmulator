import {createDocument} from '../../modules/CRUD-api/controllers/DocumentController';
import {onlyAsciiCharacters} from '../esc-pos-parser/util';
import {esc_pos_parser} from '../esc-pos-parser/esc-pos-parser';

export const registerDocumentEvent = async (document: string) => {
    const currentDate = new Date();
    const toSave = {
        printedDate: currentDate,
        rawDocument: document,
        parsedDocument: onlyAsciiCharacters(esc_pos_parser(document))
    }
    await createDocument(toSave);
}
