import { Face } from './faceImageResponse';
import { GenericRespone } from './genericResponse';
export class FaceVideoResponse extends GenericRespone {
    public detectedActions: DetectedActions[];
    public face: Face;
}

export class DetectedActions {
    public frameNum: number;
    public type: string;
}
