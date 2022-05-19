import {createDocument, deleteDocument, getAllDocuments} from '../../modules/CRUD-api/controllers/DocumentController';
import {onlyAsciiCharacters} from '../esc-pos-parser/util';
import {esc_pos_parser} from '../esc-pos-parser/esc-pos-parser';
import Document from '../../modules/CRUD-api/models/Document';

export const registerDocumentEvent = async (document: string) => {
    const currentDate = new Date();
    const toSave = new Document(undefined, currentDate, document, onlyAsciiCharacters(esc_pos_parser(document)))
    return await createDocument(toSave);
}

export const deleteDocumentEvent = async (document: Document) => {
    return await deleteDocument(document);
}

export const getAllDocumentsEvent = async () => {
    return await getAllDocuments();
}
