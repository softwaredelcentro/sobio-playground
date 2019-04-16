import { Face } from './faceImageResponse';
export class DniArResponse {
    additionalInfo: string;
    documentInfo: DocumentInfo = new DocumentInfo();
}

export class DocumentInfo {
    address: string;
    addressConfidence: number;
    code1: string;
    code2: string;
    dateOfBrith: DateSplitted;
    documentNumber: string;
    documentType: string;
    documentVersion: string;
    expirationDate: DateSplitted;
    face: Face;
    givenNames: string;
    issuingCountry: string;
    issuingDate: DateSplitted;
    nationality: string;
    order: string;
    sequence: string;
    sex: string;
    surname: string;
    validComposite: boolean;
    validDateOfBirth: boolean;
    validDocumentNumber: boolean;
    validExpirationDate: boolean;
}

export class DateSplitted {
    day: number;
    month: number;
    year: number;
}

