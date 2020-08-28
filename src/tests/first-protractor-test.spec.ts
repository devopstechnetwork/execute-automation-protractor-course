import { browser, element, by, ElementFinder, ElementArrayFinder, $$ } from 'protractor';

xdescribe('First protractor test', () => {
  it('should navigate to our application', () => {
    // Navigate to application
    browser.get('http://localhost:4200');

    // const headings: ElementArrayFinder = element.all(by.css('.well.hoverwell.thumbnail>h2'));
    const headings: ElementArrayFinder = $$('.well.hoverwell.thumbnail>h2');

    // Holds an array of all elements found by the css selector
    headings.getText()
      // headingTexts is an array of strings containing the heading texts
      .then(headingTexts => console.log('Headings: ', headingTexts));

    // Find a specific heading and click it
    const heading: ElementFinder = element(by.xpath('//app-course-thumbnail/div/h2[text()=\' Selenium Framework development \']'));

    // Find a specific element within an element
    const fourthQuarterElement: ElementFinder = heading.element(by.xpath('//span[contains(text(), \'4th\')]'));
    fourthQuarterElement.getText()
      .then(text => console.log(text));

    heading.click();
  });
});
