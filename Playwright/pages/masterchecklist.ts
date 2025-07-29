import { expect, Locator, Page } from '@playwright/test';
import { promises } from 'dns';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("masterchecklist")
export class masterchecklist{
    readonly page: Page;
    readonly checklistlink: Locator;
    readonly clearfield: Locator;
    readonly addtesttype: Locator;
    readonly edittesttype:Locator;
    readonly opentestingtype:Locator;
    readonly selecttestingtypeoption:Locator;
    readonly testdescription:Locator;
   // readonly savebtn:Locator;

    

    constructor (page:Page){
        this.page= page;
        this.checklistlink= page.locator("//span[normalize-space()='Checklist']");
        this.clearfield= page.locator("span.ng-clear-wrapper");
        this.addtesttype= page.getByRole("button", {name:'Add Test Type'});
        this.edittesttype= page.locator("//input[@formcontrolname='testName']");
        this.opentestingtype= page.locator("//ng-select[@formcontrolname='testType']//span[@class='ng-arrow-wrapper']");
        this.selecttestingtypeoption= page.locator("(//ng-dropdown-panel[@aria-label='Options list']//span)[1]");
        this.testdescription= page.locator("//textarea[@formcontrolname='testNameDesc']");
        //this.savebtn= page.locator("(//div[@class='modal-footer']//button)[2]");
    }
    async Checklink():Promise<void>{
        await this.page.waitForLoadState('domcontentloaded');
        await this.checklistlink.click();
    }

    async ClearText():Promise<void>{
        await this.clearfield.click();
        await this.page.waitForTimeout(2000);
    }
    async AddTestTypeBtn():Promise<void>{
        await this.addtesttype.click();
    }
    async TesttypeForm():Promise<void>{
        await this.page.waitForTimeout(1000);
        const testtypeedit = "Automation-Testtype";
        try{
            await this.edittesttype.fill(testtypeedit);
            await expect(this.edittesttype).toHaveText(testtypeedit);
            console.log("Testtype added successfully!!!");
        }catch(error){
            console.log("Error throwing Test type nit added!!", error);
        }

        await this.opentestingtype.click();
        await this.selecttestingtypeoption.click();
        const Testdescp ="Add new checklist for the Automation testing module"
        try{
          await this.testdescription.fill(Testdescp);
          await expect(this.testdescription).toHaveText(Testdescp);
          console.log("Test Description added successfully!!!")
        }catch(error){
            console.log("Error Throwing while adding description", error)
        }
       // await this.savebtn.click();
    }
}
