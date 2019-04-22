import { GenericRespone } from './genericResponse';

export class IdentifyResponse extends GenericRespone {
    confidence: number;
    faP: number;
    score: number;
    subjectId: string;
}
