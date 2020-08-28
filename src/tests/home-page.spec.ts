import { HomePage } from './pages/home-page.po';

describe('Test everything on the home page', () => {
  const homePage: HomePage = new HomePage();

  it('should navigate to the home page', () => {
    homePage.navigate();
  });

  it('should navigate to the home page and print out all headings', () => {
    homePage.navigate();
    homePage.getAllHeadings();
  });

  it('should navigate to the home page and click on Selenium Framework development heading', () => {
    homePage.navigate();
    const heading = homePage.getSeleniumFrameworkDevelopmentHeading();
    homePage.click(heading);
  });

  it('should navigate to the home page and click on Coded UI Framework development heading', () => {
    homePage.navigate();
    const heading = homePage.getHeadingByText('Coded UI Framework development');
    homePage.click(heading);
  });
});
