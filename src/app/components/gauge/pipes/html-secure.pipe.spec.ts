import { HtmlSecurePipe } from './html-secure.pipe';

describe('HtmlSecurePipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlSecurePipe();
    expect(pipe).toBeTruthy();
  });
});
