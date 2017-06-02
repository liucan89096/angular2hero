import { Angular2heroPage } from './app.po';

describe('angular2hero App', () => {
  let page: Angular2heroPage;

  beforeEach(() => {
    page = new Angular2heroPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
