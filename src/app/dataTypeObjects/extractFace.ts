export class ExtractFace {
    auditToken: string;
    params: Params = new Params();
}

export class FacePoseSensibility {
    lookingDownwardsPitchAngle = -20.0;
    lookingFront = 8.0;
    lookingLeftYawAngle = -20.0;
    lookingRightYawAngle = 20.0;
    lookingUpwardsPitchAngle = 10.0;
}

export class Params {
    blinkSensibility = 0.3;
    detectAge = false;
    detectEmotion = false;
    detectExpression = false;
    detectGender = false;
    detectOnlyMajorFace = false;
    detectTraitsAndActions = false;
    facePoseSensibility: FacePoseSensibility = new FacePoseSensibility();
    maxCLAHE = 10;
    maxRoll = 90;
    maxYaw = 90;
    minCLAHE = 4;
    minConfidence = 80;
    minIOD = 30;
    minQuality = 10;
    scaleH = 0;
    thumbnailWidth = 128;
    useCLAHE = true;
    useCache = true;
    videoFramesSeq = 1;
}
