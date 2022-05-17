import {
    createDocumentRepo,
    deleteDocumentRepo,
    getAllDocumentsRepo,
    getDocumentByIdRepo,
} from '../repository/DocumentRepository';


export const createDocumentService = (document: Document) => {
    return createDocumentRepo(document);
}

export const getAllDocumentService = () => {
    return getAllDocumentsRepo();
}

export const getDocumentByIdService = (id: number) => {
    return getDocumentByIdRepo(id);
}

export const deleteDocumentService = (document: Document) => {
    return deleteDocumentRepo(document);
}


