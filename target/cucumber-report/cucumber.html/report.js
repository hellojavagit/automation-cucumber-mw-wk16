$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("onlineshopping.feature");
formatter.feature({
  "line": 1,
  "name": "SignUp, Sign In and Purchase Product",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12835610400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "TC-001 Create New User/SignUp",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-001-create-new-user/signup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to SignUp page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "create an account with random username",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 11359298700,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.navigateToSignUpPage()"
});
formatter.result({
  "duration": 5172213799,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.createAnAccountWithRandomUsername()"
});
formatter.result({
  "duration": 20073828601,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027email_create\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.62)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [428982d0238d5699dbc210896cf994b0, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027email_create\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.62, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53802}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53802/devtoo..., se:cdpVersion: 102.0.5005.62, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 428982d0238d5699dbc210896cf994b0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat au.com.automation.utility.Utility.sendTextToElement(Utility.java:79)\r\n\tat au.com.automation.pages.AuthPage.enterEmailAddressToCreateAnAccount(AuthPage.java:132)\r\n\tat au.com.automation.steps.OnlineShoppingTestSteps.createAnAccountWithRandomUsername(OnlineShoppingTestSteps.java:26)\r\n\tat ✽.And create an account with random username(onlineshopping.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 819024200,
  "status": "passed"
});
formatter.before({
  "duration": 12938586699,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "TC-002 Sign In with newly created user credentials",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-002-sign-in-with-newly-created-user-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I shall verify the address information in my address section",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 15400,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 20046196200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027form-group form-error\u0027]//input[@name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.62)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [48b4b16473a17a88f1fdb6616b001ea3, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027form-group form-error\u0027]//input[@name\u003d\u0027email\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.62, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53871}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53871/devtoo..., se:cdpVersion: 102.0.5005.62, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 48b4b16473a17a88f1fdb6616b001ea3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat au.com.automation.utility.Utility.sendTextToElement(Utility.java:79)\r\n\tat au.com.automation.pages.AuthPage.enterEmailAddress(AuthPage.java:169)\r\n\tat au.com.automation.steps.OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials(OnlineShoppingTestSteps.java:54)\r\n\tat ✽.When Login using newly create credentials(onlineshopping.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallVerifyTheAddressInformationInMyAddressSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1136146099,
  "status": "passed"
});
formatter.before({
  "duration": 13338373500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "TC-003 Add product to Online Cart and checkout",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-003-add-product-to-online-cart-and-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I add below product to cart",
  "rows": [
    {
      "cells": [
        "category",
        "subCategory",
        "name",
        "model",
        "quantity"
      ],
      "line": 17
    },
    {
      "cells": [
        "Dresses",
        "CASUAL DRESSES",
        "Printed Dress",
        "demo_3",
        "2"
      ],
      "line": 18
    },
    {
      "cells": [
        "Women",
        "TOPS",
        "Faded Short Sleeve T-shirts",
        "demo_1",
        "3"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I shall validate shopping cart as below",
  "rows": [
    {
      "cells": [
        "name",
        "model",
        "quantity"
      ],
      "line": 21
    },
    {
      "cells": [
        "Printed Dress",
        "SKU : demo_3",
        "2"
      ],
      "line": 22
    },
    {
      "cells": [
        "Faded Short Sleeve T-shirts",
        "SKU : demo_1",
        "3"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I shall be able to Buy the product",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I shall be able to Buy using cheque payment",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 20021750200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027form-group form-error\u0027]//input[@name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.62)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c0e175dc3ca5959bfe7dcfcc337035d8, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027form-group form-error\u0027]//input[@name\u003d\u0027email\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.62, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53928}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53928/devtoo..., se:cdpVersion: 102.0.5005.62, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c0e175dc3ca5959bfe7dcfcc337035d8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat au.com.automation.utility.Utility.sendTextToElement(Utility.java:79)\r\n\tat au.com.automation.pages.AuthPage.enterEmailAddress(AuthPage.java:169)\r\n\tat au.com.automation.steps.OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials(OnlineShoppingTestSteps.java:54)\r\n\tat ✽.When Login using newly create credentials(onlineshopping.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAddBelowProductToCart(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallValidateShoppingCartAsBelow(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallBeAbleToBuyTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallBeAbleToBuyUsingChequePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1070660300,
  "status": "passed"
});
formatter.before({
  "duration": 1394742100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC-004 Contact customer service for the previous successful order",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-004-contact-customer-service-for-the-previous-successful-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I am on the contact page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I send refund request to customer care for previous order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 20009967201,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027form-group form-error\u0027]//input[@name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.62)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1867137eab9548fdbfbd1857bd356327, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027form-group form-error\u0027]//input[@name\u003d\u0027email\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.62, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53983}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53983/devtoo..., se:cdpVersion: 102.0.5005.62, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1867137eab9548fdbfbd1857bd356327\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat au.com.automation.utility.Utility.sendTextToElement(Utility.java:79)\r\n\tat au.com.automation.pages.AuthPage.enterEmailAddress(AuthPage.java:169)\r\n\tat au.com.automation.steps.OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials(OnlineShoppingTestSteps.java:54)\r\n\tat ✽.When Login using newly create credentials(onlineshopping.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheContactPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iSendRefundRequestToCustomerCareForPreviousOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 749747500,
  "status": "passed"
});
});