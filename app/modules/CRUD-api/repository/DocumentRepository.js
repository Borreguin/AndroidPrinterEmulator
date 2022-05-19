import Message from '../models/Message';
import Document from '../models/Document';

const {getConnection} = require('./DBConfig');


let sqlite = getConnection();

export const createDocumentRepo = (document: Document) => {
    return new Promise((resolve, reject) => {
        let msg = new Message();
        if (!document) {
            msg.result = false;
            msg.message = 'Invalid Document input!';
            resolve({result: msg.result, message: msg.message});
        }
        sqlite.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO document_registry(printed_date, raw_document, parsed_document, hex_document) VALUES (?,?,?,?)',
                [document.printedDate, document.rawDocument, document.parsedDocument, document.hexDocument],
                (tx, results) => {
                    const success = results.rowsAffected > 0;
                    msg.result = success;
                    msg.message = 'Create new Document ' + (success ? 'successfully!' : 'failed!');
                    resolve({result: msg.result, message: msg.message, id: results.insertId});
                }, (error) => {
                    msg.result = false;
                    msg.message = `${error.message}`;
                    resolve({result: msg.result, message: msg.message});
                });
        });
    });
};

export const createDocumentTable = () => {

    return new Promise((resolve, reject) => {
        let msg = new Message();

        const sqlTable = 'CREATE TABLE "document_registry" (' +
            ' "id" INTEGER NOT NULL, ' +
            ' "printed_date" TEXT, ' +
            ' "raw_document" TEXT, ' +
            ' "parsed_document" TEXT, ' +
            ' "hex_document" TEXT, ' +
            ' PRIMARY KEY("id" AUTOINCREMENT) ' +
            ');';
        sqlite.transaction((tx) => {
            tx.executeSql(
                sqlTable,
                [],
                (tx, results) => {
                    const success = results.rowsAffected > 0;
                    msg.result = success;
                    msg.message = 'Create new Document Table successfully!';
                    resolve({result: msg.result, message: msg.message, id: results.insertId});
                }, (error) => {
                    msg.result = false;
                    msg.message = `${error.message}`;
                    resolve({result: msg.result, message: msg.message});
                });
        });
    });
};

export const getAllDocumentsRepo = () => {
    return new Promise((resolve, reject) => {
        let msg = new Message();
        msg.result = [];
        sqlite.transaction((tx) => {
            tx.executeSql('SELECT * FROM document_registry', [], (tx, results) => {
                for (let i = 0; i < results.rows.length; i++) {
                    let item = results.rows.item(i);
                    let document = new Document(item.id, new Date(item.printed_date), item.raw_document,
                        item.parsed_document, item.hex_document);
                    msg.result.push(document);
                }
                msg.message = 'Get all Documents successfully!';
                resolve({result: msg.result, message: msg.message});
            }, (error) => {
                msg.result = [];
                msg.message = `${error.message}`;
                resolve({result: msg.result, message: msg.message});
            });
        });
    });

};

export const getDocumentByIdRepo = (id: number) => {

    return new Promise((resolve, reject) => {
        let msg = new Message();
        sqlite.transaction((tx) => {
            tx.executeSql('SELECT * FROM document_registry WHERE id=?', [id], (tx, results) => {
                if (results.rows.length > 0) {
                    let item = results.rows.item(0);
                    msg.result = new Document(item.id, item.printedDate, item.rawDocument, item.parsedDocument);
                    msg.message = `Found 1 Analytics Event with id=${id}`;
                } else {
                    msg.result = null;
                    msg.message = `Not found Analytics Event with id=${id}`;
                }
                resolve({result: msg.result, message: msg.message});
            }, (error) => {
                msg.result = null;
                msg.message = `${error.message}`;
                resolve({result: msg.result, message: msg.message});
            });
        });
    });
};

export const deleteDocumentRepo = (document: Document) => {
    return new Promise((resolve, reject) => {
        let msg = new Message();
        if (!document) {
            msg.result = false;
            msg.message = 'Invalid document input!';
            resolve({result: msg.result, message: msg.message});
        }

        sqlite.transaction((tx) => {
            tx.executeSql('DELETE FROM document_registry WHERE id=?',
                [document.id],
                (tx, results) => {
                    const success = results.rowsAffected > 0;
                    msg.result = success;
                    msg.message = success ? `Delete Analytics Event with id=${document.id} successfully!` :
                        `Not found Analytics Event with id=${document.id}`;
                    resolve({result: msg.result, message: msg.message});
                }, (error) => {
                    msg.result = false;
                    msg.message = `${error.message}`;
                    resolve({result: msg.result, message: msg.message});
                });
        });
    });
};
