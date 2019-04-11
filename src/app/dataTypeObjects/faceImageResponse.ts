export class FaceImageResponse {
    public exception: boolean;
    public extractedFaces: ExtractedFaces[];
    public txId: string;
}


export class ExtractedFaces {
    public face: Face;
    public status: string;
}

export class Face {
    public image: string;
    public template: string;
}

