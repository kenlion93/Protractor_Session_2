import { async } from "q";
import { browser, element, by, protractor } from "protractor";

describe("New User", function(){
    it ("Create and delete a new user", async function(){
        await browser.get("http://www.way2automation.com/angularjs-protractor/webtables/")
        await browser.manage().window(). maximize()

        //create new user
        await browser.element(by.xpath("//button[@type='add']")).click()
        var firstName = await browser.element(by.xpath("//input[@name='FirstName']"))
        await browser.wait(protractor.ExpectedConditions.visibilityOf(firstName),3000,"Element FirstName is not inter")
        firstName.sendKeys("Jason")

        await browser.element(by.xpath("//input[@name='LastName']")).sendKeys("Le")
        await browser.element(by.xpath("//input[@name='UserName']")).sendKeys("jasonle")
        await browser.element(by.xpath("//input[@name='Password']")).sendKeys("123456")
        await browser.element(by.xpath("//input[@type='radio' and @value='15']")).click()
        await browser.sleep(1000)
        await browser.element(by.xpath("//select[@name='RoleId']")).click()
        await browser.element(by.xpath("//option[text()='Sales Team']")).click()
        await browser.element(by.xpath("//input[@name='Email']")).sendKeys("jasonle@gmail.com")
        await browser.element(by.xpath("//input[@name='Mobilephone']")).sendKeys("097775566")

        await browser.sleep(2000)
        var saveUser = browser.element(by.xpath("//button[@ng-click='save(user)']"))
        await browser.wait(protractor.ExpectedConditions.visibilityOf(saveUser),3000,"Element Save is not inter")
        saveUser.click()
        await browser.sleep(2000)

        //verify user information
        var fName = await browser.element(by.xpath("//tr/td[contains(text(),'Jason')]"))
        var lName = await browser.element(by.xpath("//tr/td[contains(text(),'Le')]"))
        var userName = await browser.element(by.xpath("//tr/td[contains(text(),'jasonl')]"))
        var customer = await browser.element(by.xpath("//tr/td[contains(text(),'Company AAA')]"))
        var role = await browser.element(by.xpath("//tr/td[contains(text(),'Sales Team')]"))
        var email = await browser.element(by.xpath("//tr/td[contains(text(),'jasonle@gmail.com')]"))
        var phone = await browser.element(by.xpath("//tr/td[contains(text(),'097775566')]"))
        await browser.wait(protractor.ExpectedConditions.visibilityOf(fName),3000,"First Name is not display")
        await browser.wait(protractor.ExpectedConditions.visibilityOf(lName),3000,"Last Name is not display")
        await browser.wait(protractor.ExpectedConditions.visibilityOf(userName),3000,"New user is not display")
        await browser.wait(protractor.ExpectedConditions.visibilityOf(customer),3000,"Customer is not display")
        await browser.wait(protractor.ExpectedConditions.visibilityOf(role),3000,"Role is not display")
        await browser.wait(protractor.ExpectedConditions.visibilityOf(email),3000,"Email is not display")
        await browser.wait(protractor.ExpectedConditions.visibilityOf(phone),3000,"Cell phone is not display")
        
        
        //select Delete action
        await browser.element(by.xpath("//tr/td[contains(text(),'jasonl')]/following-sibling::td/button[@ng-click='delUser()']")).click()
        var confirmDelete = await browser.element(by.xpath("//button[@ng-click='close(btn.result)' and contains(text(),'OK')]"))
        await browser.wait(protractor.ExpectedConditions.visibilityOf(confirmDelete),3000,"Element OK is not inter")
        confirmDelete.click()


        await browser.sleep(3000)

    })
})
