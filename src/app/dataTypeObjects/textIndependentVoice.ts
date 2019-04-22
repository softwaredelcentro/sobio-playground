import { VoiceParams } from './textDependentVoice';

export class TextIndependentVoice {
    public audio: string;
    public auditToken: string;
    public params: VoiceParams = new VoiceParams();
}
