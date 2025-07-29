import { expect, Locator, Page, ElementHandle } from '@playwright/test';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("orgpage")
export class orgpage{
   readonly page : Page;
   readonly clickonlink : Locator;
   readonly addbutton : Locator;
   readonly orgname : Locator;
   readonly orgshortname: Locator;
   readonly orgdesp : Locator;
   readonly contprs: Locator;
   readonly desgination : Locator;
   readonly emailid: Locator;
   readonly headquater: Locator;
   readonly country :Locator;
   readonly countryoptn: Locator;
   readonly industrysector: Locator;
   readonly selectindustryoptn: Locator;
   readonly regularstandard: Locator;
   readonly submit : Locator;
   readonly onorganizationpage: Locator;
   readonly verifyorgizationname: Locator;

   constructor(page: Page) {
    this.page = page;
    this.clickonlink= page.getByRole("link", {name: "Organizations"});
    this.addbutton= page.getByRole("button", {name: "Add Organization"});
    this.orgname= page.getByPlaceholder("Enter organization name");
    this.orgshortname= page.locator("//input[@formcontrolname= 'orgShortName']");
    this.orgdesp= page.getByPlaceholder("Enter organization description");
    this.contprs= page.getByPlaceholder("Enter contact person");
    this.desgination= page.getByPlaceholder("Enter designation");
    this.emailid= page.getByPlaceholder("Enter your Email-ID");
    this.headquater= page.getByPlaceholder("Enter headquarter location");
    this.country= page.getByPlaceholder("Select Country");
    this.countryoptn= page.getByText("India");
    this.industrysector= page.locator("//ng-select[@formcontrolname= 'industrySector']");
    this.selectindustryoptn= page.getByText("Software Testing");
    this.regularstandard= page.getByPlaceholder("Enter regular standard");
    this.submit = page.getByRole("button", {name: " Submit"})
    this.onorganizationpage= page.getByText("Organizations Management");
    this.verifyorgizationname= page.getByText(" Denmark Private Limited ");
   }

async orglink(): Promise<void>{
    await this.page.waitForTimeout(3000);
    await this.clickonlink.click();
}
async Addorgbtn(): Promise<void>{
    await this.page.waitForTimeout(2000);
    await this.addbutton.click()  
}
async organizationname(): Promise<void>{
    await this.orgname.fill("Denmark Private Limited");
}
async orgshortdescription(): Promise<void>{
    await this.orgshortname.fill("Denmark IT company");
}
async organizationdescription(): Promise<void>{
    await this.orgdesp.fill("Denmark is a MNC company, It cover hardware and software related projets");
}
async contactperson(): Promise<void>{
    await this.contprs.fill("9098778329");
}
async design(): Promise<void>{
    await this.desgination.fill("Quality analysis");
}
async email(): Promise<void>{
    await this.emailid.fill("sanket.kumbhare@harriersys.com");
}
async headquaters(): Promise<void>{
    await this.headquater.fill("Mumbai");
}
async selectcountry(): Promise<void>{
    await this.country.click()
    await this.page.waitForTimeout(2000)
    await this.countryoptn.click()
}
async selectindustry(): Promise<void>{
    await this.industrysector.click();
    await this.page.waitForTimeout(2000);
    await this.selectindustryoptn.click();
}
async regstandard(): Promise<void>{
    await this.regularstandard.fill("Test regular standard");
}
async submitbtn(): Promise<void>{
    await this.submit.click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({path: 'Screenshot/Organization/Organization-already-exists!.png'});
}
async verifypage():Promise<void>{
    await this.onorganizationpage.isVisible();
    await expect(this.verifyorgizationname).toHaveText("Denmark Private Limited");
    await console.log("Denmark Private Limited");
    await this.page.screenshot({path: "Screenshot/Organization/Create-new-Organization-page!.png"});
}  
}