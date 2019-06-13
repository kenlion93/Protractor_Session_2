# Protractor_Session_2
Async and await

async function d(){
await function1()
};

Protractor FW: https://github.com/AnhPhamIT/Protractor
- Missing some libary, using command line "npm install" to update
- Install Protractor "npm install protractor -g"
- Update webdriver manager "webdriver-manager update" and "node node_modules/protractor/bin/webdriver-manager update"

Run protractor
- Go to config.js and check "specs: ['Testcases/Login.ts'],"
- Go to terminal, run "protractor config.js"

Page: http://www.way2automation.com/angularjs-protractor/registeration/#/login
Get xpath: //input[@id='username']


describe = switch
Each TC start with 'it'
