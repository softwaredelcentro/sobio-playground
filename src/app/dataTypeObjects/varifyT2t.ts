export class FingerPrintMatchingParams {
    maxRotation: number;
    useOnlyAnsi378: boolean;
}

export class T2tParams {
    faceMatchingParams: any;
    far: number;
    fingerPrintMatchingParams: FingerPrintMatchingParams = new FingerPrintMatchingParams();
    voiceMatchingParams: any;
}

export class CompositeFingerPrints {
    dedo: string;
    images: any[];
    source: string;
    template: string;
}

export class Faces {
    image: string;
    template: string;
}

export class FingerPrints {
    formatoTemplate: string;
    image: string;
    imageSource: string;
    position: string;
    template: string;
}

export class TextDependentVoices {
    audio: string;
    phaseID: number;
    template: string;
}

export class TextIndependentVoice {
    audio: string;
    template: string;
}

export class BioInfo {
    compositeFingerPrints: CompositeFingerPrints[] = [new CompositeFingerPrints()];
    faces: Faces[] = [new Faces()];
    fingerPrints: FingerPrints[] = [new FingerPrints()];
    textDependentVoices: TextDependentVoices[] = [new TextDependentVoices()];
    textIndependentVoice: TextIndependentVoice[] = [new TextIndependentVoice()];
}

export class VerifyT2t {
    auditToken: string;
    bioInfo1: BioInfo = new BioInfo();
    bioInfo2: BioInfo = new BioInfo();
    params: T2tParams = new T2tParams();
}
