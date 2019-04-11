export class ExtractFace {
    auditToken: string;
    params: Params = new Params();
}

export class FacePoseSensibility {
    lookingDownwardsPitchAngle: boolean;
    lookingFront: boolean;
    lookingLeftYawAngle: boolean;
    lookingRightYawAngle: boolean;
    lookingUpwardsPitchAngle: boolean;
}

export class Params {
    blinkSensibility: number;
    detectAge: boolean;
    detectEmotion: boolean;
    detectExpression: boolean;
    detectGender: boolean;
    detectOnlyMajorFace: boolean;
    detectTraitsAndActions: boolean;
    facePoseSensibility: FacePoseSensibility = new FacePoseSensibility();
    maxCLAHE: number;
    maxRoll: number;
    maxYaw: number;
    minCLAHE: number;
    minConfidence: number;
    minIOD: number;
    minQuality: number;
    scaleH: number;
    thumbnailWidth: number;
    useCLAHE: boolean;
    useCache: boolean;
    videoFramesSeq: number;
}


