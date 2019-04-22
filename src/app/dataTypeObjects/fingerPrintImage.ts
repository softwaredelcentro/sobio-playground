export class FingerPrintImage {
    public auditToken: string;
    public image: string;
    public params: FingerPrintParams = new FingerPrintParams();
}

export class FingerPrintParams {
    public determinePatternClass = true;
    public evaluateNFIQ = true;
    public imageSource = 'LIVE_FINGERPRINT';
    public maxRotation = 0;
    public minQuality = 0;
    public position = 'RIGHT_THUMB';
    public useCache = true;
    public useOnlyAnsi378 = true;
}
