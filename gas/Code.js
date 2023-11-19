const APP_NAME = "WebAppVue"

function doGet() {
  return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
}

function includes(filename){
  return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

