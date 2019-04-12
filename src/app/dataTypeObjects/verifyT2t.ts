export class FingerPrintMatchingParams {
    maxRotation = 45;
    useOnlyAnsi378 = true;
}

export class T2tParams {
    faceMatchingParams: any;
    far = 1;
    fingerPrintMatchingParams: FingerPrintMatchingParams = new FingerPrintMatchingParams();
    voiceMatchingParams: any;
}

export class CompositeFingerPrints {
    dedo = 'RIGHT_THUMB';
    images: any[];
    source = 'LIVE_FINGERPRINT';
    template: string;
}

export class Faces {
    image: string;
    template: string;
}

export class FingerPrints {
    formatoTemplate = 'ANSI378';
    image: string;
    imageSource = 'LIVE_FINGERPRINT';
    position = 'RIGHT_THUMB';
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
    compositeFingerPrints: CompositeFingerPrints[] = [];
    faces: Faces[] = [new Faces()];
    fingerPrints: FingerPrints[] = [];
    textDependentVoices: TextDependentVoices[] = [];
    textIndependentVoice: TextIndependentVoice = new TextIndependentVoice();
}

export class VerifyT2t {
    auditToken: string;
    bioInfo1: BioInfo = new BioInfo();
    bioInfo2: BioInfo = new BioInfo();
    params: T2tParams = new T2tParams();
}
