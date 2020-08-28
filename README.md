# Protractor Course

[Github repo](https://github.com/jarrod-kallis/execute-automation-protractor-course)

## Running tests locally

`npm run start-webdriver`
`npm start`
`npm run protractor-test`

## Finding single/multiple css elements

Instead of: `element.all(by.css(".well.hoverwell.thumbnail > div"))`
You can use (this is only applicable to <b>by.css</b>):
Single/first element matching CSS selector (<b>element(by.css)</b>):
`$(".well.hoverwell.thumbnail > div")`
Multiple elements (<b>element.all(by.css)</b>):
`$$(".well.hoverwell.thumbnail > div")`

## Finding an element within an element

```
element(by.xpath("//..."))
  .element(by.xpath("//...")).click()
```
