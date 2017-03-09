import { PlayweatherPage } from './app.po';

describe('playweather App', function() {
  let page: PlayweatherPage;

  beforeEach(() => {
    page = new PlayweatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
