export class DownZipBiodataResponse {
    description: string;
    file: FileZip;
    filename: string;
    inputStream: any;
    readable: boolean;
    uri: URIZip;
    url: URLZip;
}

export class FileZip {
    absolute: boolean;
    absolutePath: string;
    canonicalPath: string;
    directory: boolean;
    file: boolean;
    freeSpace: number;
    hidden: boolean;
    name: string;
    parent: string;
    path: string;
    totalSpace: number;
    usableSpace: number;
}

export class URIZip {
    absolute: boolean;
    authority: string;
    fragment: string;
    host: string;
    opaque: boolean;
    path: string;
    port: number;
    query: string;
    rawAuthority: string;
    rawFragment: string;
    rawPath: string;
    rawQuery: string;
    rawSchemeSpecificPort: string;
    rawUserInfo: string;
    scheme: string;
    schemeSpecificPart: string;
    userInfo: string;
}

export class URLZip {
    authority: string;
    content: any;
    defaultPort: number;
    file: string;
    host: string;
    path: string;
    port: number;
    protocol: string;
    query: string;
    ref: string;
    userInfo: string;
}
