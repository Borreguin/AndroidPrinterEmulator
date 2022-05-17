import {
    createDocumentService,
    deleteDocumentService,
    getAllDocumentService,
    getDocumentByIdService,
} from '../services/DocumentService';

// result: boolean
export const createDocument = (document: Document) => {
    return createDocumentService(document);
}

// result: realm objects
export const getAllDocuments = () => {
    return getAllDocumentService();
}

export const getDocumentById = (id: number) => {
    return getDocumentByIdService(id);
}

export const deleteDocument = (document: document) => {
    return deleteDocumentService(document);
}


