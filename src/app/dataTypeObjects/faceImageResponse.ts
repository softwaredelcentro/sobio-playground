export class FaceImageResponse {
    public exception: boolean;
    public extractedFaces: ExtractedFaces[];
    public txId: string;
}


export class ExtractedFaces {
    public face: Face;
    public properties: ExtractedFacesProperties;
    public status: string;
}

export class Face {
    public image: string;
    public template: string;
}

export class ExtractedFacesProperties {
    position: any;
    clahe: number;
    thumbnail: string;
    confidence: number;
    traits: any;
    expression: any;
    emotion: any;
    gender: any;
    age: number;
}
