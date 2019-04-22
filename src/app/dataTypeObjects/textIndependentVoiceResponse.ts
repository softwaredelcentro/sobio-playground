import { GenericRespone } from './genericResponse';

export  class TextIndependentVoiceResponse extends GenericRespone {
    voice: TIVoice;
}

export class TIVoice {
    audio: string;
    template: string;
}
