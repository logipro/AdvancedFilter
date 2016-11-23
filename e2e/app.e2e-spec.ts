import { AdvancedFilterPage } from './app.po';

describe('advanced-filter App', function() {
  let page: AdvancedFilterPage;

  beforeEach(() => {
    page = new AdvancedFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
