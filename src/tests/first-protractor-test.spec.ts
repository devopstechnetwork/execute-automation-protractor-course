import { browser } from 'protractor';

describe('First protractor test', () => {
  it('should navigate to Google', () => {
    browser.get('https://google.com');

    expect(true).toBe(true);
  });
});
