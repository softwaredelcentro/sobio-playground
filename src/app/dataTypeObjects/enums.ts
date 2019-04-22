export enum ImageSource {
    LIVE_FINGERPRINT,
    SCANNED_FINGERPRINT_IMAGE,
    UNKNOWN
}

export enum Positions {
    RIGHT_THUMB,
    LEFT_THUMB,
    RIGHT_INDEX_FINGER,
    LEFT_INDEX_FINGER,
    RIGHT_MIDDLE_FINGER,
    LEFT_MIDDLE_FINGER,
    RIGHT_RING_FINGER,
    LEFT_RING_FINGER,
    RIGHT_LITTLE_FINGER,
    LEFT_LITTLE_FINGER,
    UNKNOWN
}

export enum Nfiq {
    NOT_EVALUATED,
    EXCELLENT,
    VERY_GOOD,
    GOOD,
    FAIR,
    POOR,
    UNKNOWN
}

export enum Pattern {
    NOT_EVALUATED,
    UNKNOWN
}

export enum Gender {
    MALE,
    FEMALE,
    NOT_DETECTED,
    UNSPECIFIED
}

export enum FormatoTemplate {
    ANSI378,
    SOBIO
}

export enum IdentifyResult {
    IDENTIFY_OK,
    NOT_IDENTIFIED,
    MATCHING_NODE_UNAVAILABLE,
    WITHOUT_TEMPLATE,
    IDENTIFY_UNSUPPORTED
}

export enum ResultStatus {
    OK,
    INEXISTENT
}

export enum UpdateResult {
    UPDATE_OK,
    DUPLICATED_FINGERPRINTS,
    DUPLICATED_SUBJECT,
    INEXISTENT,
    WITHOUT_TEMPLATE,
    MATCHING_NODE_UNAVAILABLE,
    DUPLICATE_SEARCH_UNSUPPORTED
}

export enum DocumentType {
    PASSPORT,
    TYPE_I,
    TYPE_A,
    CREWMEMBER,
    TYPE_C,
    VISA,
    MIGRANT,
    UNKNOWN
}

export enum DocumentVersion {
    UNKNOWN,
    ARGENTINA_ID_V1,
    ARGENTINA_ID_V2
}

