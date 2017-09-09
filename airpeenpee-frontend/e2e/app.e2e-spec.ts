import { AirpeenpeeFrontendPage } from './app.po';

describe('airpeenpee-frontend App', () => {
  let page: AirpeenpeeFrontendPage;

  beforeEach(() => {
    page = new AirpeenpeeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
