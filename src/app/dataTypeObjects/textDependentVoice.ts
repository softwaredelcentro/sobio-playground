export class TextDependentVoice {
    public audio: string;
    public auditToken: string;
    public params: VoiceParams = new VoiceParams();
    public phraseId: number;
}

export class VoiceParams {
    public minDuration: number;
    public minLevel: number;
    public useCache: boolean;
}
