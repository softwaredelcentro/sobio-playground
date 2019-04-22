import { GenericRespone } from './genericResponse';
export class VerifyResponse extends GenericRespone {
    confidence: number;
    faP: number;
    score: number;
}
