import { AngualrPage } from './app.po';

describe('angualr App', () => {
  let page: AngualrPage;

  beforeEach(() => {
    page = new AngualrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
