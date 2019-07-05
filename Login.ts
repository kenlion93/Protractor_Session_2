import {browser, by, element} from 'protractor'
//suite
describe("Login page ", function (){
    // testcase
    it("should be navigated to HomePage when login with valid account", async function(){
        // automate each step
        await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        await browser.manage().window().maximize()
        await browser.sleep(1000)
       
        //verify result
        await element(by.xpath("//input[@id='username']")).sendKeys("angular");
        await element(by.xpath("//input[@id='password']")).sendKeys("password");
        await element(by.xpath("//input[@id='formly_1_input_username_0']")).sendKeys("ABC");        
        await element(by.xpath("//button[normalize-space()='Login']")).click();
        
        await expect(element(by.xpath("//h1[text()='Home']")).getText()).toEqual("Home"); // khong nen xai
        await expect(element(by.xpath("//h1[text()='Home']")).isDisplayed()).toBe(true);
        await expect(element(by.xpath("//p[1]")).getText()).toEqual("You're logged in!!");
    })
})