export class TextDependentVoice {
    public audio: string;
    public auditToken: string;
    public params: VoiceParams = new VoiceParams();
    public phraseId: number;
}

export class VoiceParams {
    public minDuration = 1500;
    public minLevel = 0.05;
    public useCache = true;
}
