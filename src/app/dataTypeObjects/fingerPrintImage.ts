export class FingerPrintImage {
    public auditToken: string;
    public image: string;
    public params: FingerPrintParams = new FingerPrintParams();
}

export class FingerPrintParams {
    public determinePatternClass = false;
    public evaluateNFIQ = false;
    public imageSource = 'LIVE_FINGERPRINT';
    public maxRotation = 45;
    public minQuality = 25;
    public position = 'UNKNOWN';
    public useCache = true;
    public useOnlyAnsi378 = false;
}
