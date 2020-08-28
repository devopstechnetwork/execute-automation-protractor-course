import { browser, element, ElementFinder, by, ElementArrayFinder } from 'protractor';

export enum ElementIdentificationType {
  Id,
  Name,
  Css,
  Xpath,
  LinkText,
  ClassName
}

export interface ElementLocator {
  type: ElementIdentificationType;
  value: string;
}

// Allows you to inject variables into strings.
// '//app-course-thumbnail/div/h2[text()=\'{0}\']', 'Hello'
export function formatString(str: string, ...val: string[]): string {
  for (let index = 0; index < val.length; index++) {
    str = str.replace(`{${index}}`, val[index]);
  }
  return str;
}

export class BasePage {
  baseUrl = 'http://localhost:4200';
  slug: string;

  locateElement(elementLocator: ElementLocator): ElementFinder {
    switch (elementLocator.type) {
      case ElementIdentificationType.Xpath:
        return element(by.xpath(elementLocator.value));
      case ElementIdentificationType.Css:
        return element(by.css(elementLocator.value));
      default:
        throw new Error(`Element Identifier, ${elementLocator.type}, not catered for as yet`);
    }
  }

  locateElements(elementLocator: ElementLocator): ElementArrayFinder {
    switch (elementLocator.type) {
      case ElementIdentificationType.Xpath:
        return element.all(by.xpath(elementLocator.value));
      case ElementIdentificationType.Css:
        return element.all(by.css(elementLocator.value));
      default:
        throw new Error(`Element Identifier, ${elementLocator.type}, not catered for as yet`);
    }
  }

  navigate(): void {
    browser.get(`${this.baseUrl}/${this.slug}`);
  }
}
