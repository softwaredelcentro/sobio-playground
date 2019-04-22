import { GenericRespone } from './genericResponse';
import { FingerPrints } from './verifyT2t';

export class FingerPrintImageResponse extends GenericRespone {
    fingerPrint: FingerPrints;
}
