export default class Document {
    id: number;
    printedDate: Date;
    rawDocument: string;
    parsedDocument: string;

    constructor(id: number, printedDate: number, rawDocument: string, parsedDocument) {
        this.id = id
        this.printedDate = printedDate
        this.rawDocument = rawDocument
        this.parsedDocument = parsedDocument
    }

    clone(){
        return new Document(this.id, this.printedDate, this.rawDocument, this.parsedDocument)
    }
}
