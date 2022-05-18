import {Hex2Str, notPrintableAsciiCharacters, toHex} from '../../../shared/esc-pos-parser/util';

export default class Document {
    id: number;
    printedDate: string;
    rawDocument: string;
    parsedDocument: string;
    hexDocument: string;

    constructor(id: number, printedDate: Date, rawDocument: string, parsedDocument, hexDocument) {
        // this is because the raw data is not saved as is original
        // in that case is better to use the HexDocument
        let onlyPrintable = rawDocument;
        let hexValues = hexDocument;
        if(hexDocument === undefined){
            onlyPrintable = rawDocument.toString().replace(notPrintableAsciiCharacters, Hex2Str(0xA4));
            hexValues = toHex(rawDocument)
        }

        this.id = id
        this.printedDate = printedDate.toString()
        this.rawDocument = onlyPrintable
        this.parsedDocument = parsedDocument
        this.hexDocument = hexValues
    }

    clone(){
        return new Document(this.id, this.printedDate, this.rawDocument, this.parsedDocument)
    }
}
