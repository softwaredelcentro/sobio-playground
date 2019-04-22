import { GenericRespone } from './genericResponse';

export class TextDependentVoiceResponse extends GenericRespone {
    voice: TDVoice;
}

export class TDVoice {
    audio: string;
    phraseId: number;
    template: string;
}
