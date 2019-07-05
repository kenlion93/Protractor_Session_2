import { async } from "q";
import { browser, element, by } from "protractor";

describe("Bank Manager", function(){
    it ("Create and delete acount in bank manager", async function(){
        await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        await browser.manage().window().maximize();

        await element(by.xpath("//button[text()='Bank Manager Login']")).click();
        await element(by.xpath("//button[@ng-click='addCust()']")).click();
        await element(by.xpath("//input[@ng-model='fName']")).sendKeys("Phuong");
        await element(by.xpath("//input[@ng-model='lName']")).sendKeys("Dang");
        await element(by.xpath("//input[@ng-model='postCd']")).sendKeys("70000");
        await element(by.xpath("//button[@type='submit']")).click();
        
        var EC = browser.ExpectedConditions;
        // Waits for an alert pops up.
        browser.wait(EC.alertIsPresent(), 5000);

        var alertDialog = browser.switchTo().alert();
        await expect(alertDialog.getText()).toContain("Customer added successfully with customer id :");

        await alertDialog.accept();

        await element(by.xpath("//button[@ng-click='openAccount()']")).click();
        await element(by.id("userSelect")).click();
        await element(by.xpath("//option[text()='Phuong Dang']")).click();

        await element(by.id("currency")).click();
        await element(by.xpath("//option[text()='Dollar']")).click();
        await element(by.xpath("//button[@type='submit']")).click();
        
        var alertDialog = browser.switchTo().alert();
        await expect(alertDialog.getText()).toContain("Account created successfully with account Number :");
        await alertDialog.accept();

        await element(by.xpath("//button[@ng-click='showCust()']")).click();

        await element(by.xpath("//td[text()='Phuong']/following-sibling::td[button]")).click();
    });
});