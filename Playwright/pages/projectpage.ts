import { expect, Locator, Page, ElementHandle } from '@playwright/test';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("projectpage")
export class projectpage{
    readonly page: Page;
    readonly clickonprolink: Locator;
    readonly clickonaddbtn: Locator;
    readonly projectname: Locator;
    readonly Proshortname: Locator;
    readonly prodescp: Locator;
    readonly selectorg: Locator;
    readonly selectorgoption: Locator;
    readonly netplace: Locator;
    readonly netplaceoptn: Locator;
    readonly datecreation: Locator;
    readonly selectdate: Locator;
    readonly defaultvalues: Locator;
    readonly submitbtn: Locator;
    readonly verifytheorgname: Locator;

    constructor (page: Page){
        this.page = page;
        this.clickonprolink= page.getByRole("link", {name: "Projects"});
        this.clickonaddbtn= page.getByRole("button", {name: " Add Project "})
        this.projectname= page.getByPlaceholder("Enter project name");
        this.Proshortname= page.getByPlaceholder("Enter project short name");
        this.prodescp= page.getByPlaceholder("Enter project description");
        this.selectorg= page.locator("//ng-select[@bindlabel= 'orgName']");
        this.selectorgoption = page.getByText("Denmark Private Limited");
        this.netplace= page.locator("//ng-select[@bindlabel= 'nwPlacementName']");
        this.netplaceoptn= page.getByText("Internal");
        this.datecreation= page.locator(".icon-calendar");
        this.selectdate= page.locator("//div[@aria-label='Friday, July 4, 2025']");
        this.defaultvalues= page.getByText("Set default value");
        this.submitbtn= page.getByRole("button", {name: "Submit"})
        this.verifytheorgname= page.getByText(" Denmark Private Limited ");
    }

async Projectlink(): Promise<void>{
    await this.page.waitForTimeout(3000);
    await this.clickonprolink.click();
}
async Addprojectbutton(): Promise<void>{
    await this.clickonaddbtn.click();
}
async Projname(): Promise<void>{
    await this.projectname.fill("Test the login functionality for the Denmark web application");
}
async Projectshtname(): Promise<void>{
    await this.Proshortname.fill("Demark Login application");
}   
async Projectdescription(): Promise<void>{
    await this.prodescp.fill("Test the Login application for the Denmark web application test the entire positive & negative scenarios");
}
async selectorganization(): Promise<void>{
    await this.selectorg.click();
    await this.page.waitForTimeout(2000);
    await this.selectorgoption.click();
    await expect(this.selectorgoption).toHaveText("Denmark Private Limited");
}
async Networkplace(): Promise<void>{
    await this.netplace.click();
    await this.page.waitForTimeout(2000);
    await this.netplaceoptn.click();
    await expect(this.netplaceoptn).toHaveText("Internal")
}
async Dateselection(): Promise<void>{
    await this.datecreation.click();
    await this.page.waitForTimeout(2000);
    await this.selectdate.click();
    
}
async setdeafultvalue(): Promise<void>{
    await this.defaultvalues.click();
    await this.page.waitForTimeout(2000);
}
async submit(): Promise<void>{
    await this.submitbtn.click();
    await this.page.waitForTimeout(2000);
    
   
}
async Verifytheproject(): Promise<void>{
    await expect(this.verifytheorgname).toBeVisible();
    await this.page.screenshot({path: 'Screenshot/Project/Project-already-exists.png'}); 
   // await expect(this.verifytheorgname).toHaveText("Denmark Private Limited")
}
}