import { MaxResolutionsDNIExtraction } from './MaxResolutionsDNIExtraction';

export class DniArParameters {

    public extractPDF417 = true;
    public extractMRZ = true;
    public extractFace = true;
    public useCache = true;
    public extractAddress = false;
}

export class DniAr {
    auditToken: string;
    backImage: string;
    frontImage: string;
    maxImageResolution: MaxResolutionsDNIExtraction = MaxResolutionsDNIExtraction.UNLIMITED;
    params: DniArParameters = new DniArParameters();
}
