export default class Document {
    id: number;
    printedDate: string;
    rawDocument: string;
    parsedDocument: string;

    constructor(id: number, printedDate: Date, rawDocument: string, parsedDocument) {
        this.id = id
        this.printedDate = printedDate.toString()
        this.rawDocument = rawDocument
        this.parsedDocument = parsedDocument
    }

    clone(){
        return new Document(this.id, this.printedDate, this.rawDocument, this.parsedDocument)
    }
}
