import { BasePage, ElementLocator, ElementIdentificationType, formatString } from './base-page.po';
import { ElementArrayFinder, $$, ElementFinder, element, by } from 'protractor';

export class HomePage extends BasePage {
  readonly SELENIUM_FRAMEWORK_DEVELOPMENT = 'Selenium Framework development';

  elementLocators: { [key: string]: ElementLocator } = {
    seleniumFrameworkDevelopmentHeading: {
      type: ElementIdentificationType.Xpath,
      value: `//app-course-thumbnail/div/h2[text()='${this.SELENIUM_FRAMEWORK_DEVELOPMENT}']`
    },
    heading: {
      type: ElementIdentificationType.Xpath,
      value: '//app-course-thumbnail/div/h2[text()=\'{0}\']'
    },
    allHeadings: {
      type: ElementIdentificationType.Css,
      value: '.well.hoverwell.thumbnail>h2'
    }
  };

  constructor() {
    super();

    this.slug = '';
  }

  getAllHeadings(): void {
    // const headings: ElementArrayFinder = element.all(by.css('.well.hoverwell.thumbnail>h2'));
    // const headings: ElementArrayFinder = $$('.well.hoverwell.thumbnail>h2');
    const headings = this.locateElements(this.elementLocators.allHeadings);

    // Holds an array of all elements found by the css selector
    headings.getText()
      // headingTexts is an array of strings containing the heading texts
      .then(headingTexts => console.log('Headings: ', headingTexts));
  }

  getHeadingByText(text: string): ElementFinder {
    // Find a specific heading
    // const heading: ElementFinder = element(by.xpath(`//app-course-thumbnail/div/h2[text()='${text}']`));
    const elementLocator = {
      ...this.elementLocators.heading,
      value: formatString(this.elementLocators.heading.value, text)
    };

    const heading: ElementFinder = this.locateElement(elementLocator);

    return heading;
  }

  getSeleniumFrameworkDevelopmentHeading(): ElementFinder {
    return this.locateElement(this.elementLocators.seleniumFrameworkDevelopmentHeading);
  }

  click(htmlElement: ElementFinder): void {
    htmlElement.click();
  }
}
