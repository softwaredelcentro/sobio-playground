export class UUID {

    static create(tpl?: string): string {
        if (!tpl) {
            tpl = 'xxxxxxxx';
        }
        let dt = new Date().getTime();
        const uuid = tpl.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line:no-bitwise
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            // tslint:disable-next-line:no-bitwise
            return (c === 'x' ? r : (r & 0x3 | 0x8) ).toString(16);
        });
        return uuid;
    }
}
