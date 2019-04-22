export class DniAr {
    auditToken: string;
    backImage: string;
    frontImage: string;
    extractParams: DniArParameters = new DniArParameters();
}

export class DniArParameters {

    public extractPDF417 = true;
    public extractMRZ = true;
    public extractFace = true;
    public useCache = true;

}
