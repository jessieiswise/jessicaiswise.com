import { Jessicaiswise.ComPage } from './app.po';

describe('jessicaiswise.com App', () => {
  let page: Jessicaiswise.ComPage;

  beforeEach(() => {
    page = new Jessicaiswise.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
