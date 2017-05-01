import { NgReact2Page } from './app.po';

describe('ng-react2 App', () => {
  let page: NgReact2Page;

  beforeEach(() => {
    page = new NgReact2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
