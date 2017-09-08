import { AirpeenpeeRealFrontendPage } from './app.po';

describe('airpeenpee-real-frontend App', () => {
  let page: AirpeenpeeRealFrontendPage;

  beforeEach(() => {
    page = new AirpeenpeeRealFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
