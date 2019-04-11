import { Face } from './faceImageResponse';
export class FaceVideoResponse {
    public detectedActions: DetectedActions[];
    public exception: boolean;
    public face: Face;
    public status: string;
    public txId: string;
}

export class DetectedActions {
    public frameNum: number;
    public type: string;
}
