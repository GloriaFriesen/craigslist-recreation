import { CraigslistRecreationPage } from './app.po';

describe('craigslist-recreation App', function() {
  let page: CraigslistRecreationPage;

  beforeEach(() => {
    page = new CraigslistRecreationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
