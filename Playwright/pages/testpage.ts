import { expect, Locator, Page } from '@playwright/test';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("testpage")
export class testpage {
  readonly page: Page;
  readonly testlink: Locator;
  readonly addTest: Locator;
  readonly selectproj: Locator;
  readonly selectprojoptn: Locator;
  readonly testtitle: Locator;
  readonly testdescrption: Locator;
  readonly contactperson: Locator;
  readonly contactnumber: Locator;
  readonly emailid: Locator;
  readonly testtype: Locator;
  readonly testtypeoptn: Locator;
  //readonly entertesttype:Locator;
  readonly testtypeclose: Locator;
  readonly reporttitle: Locator;
  readonly hourslocate: Locator;
  readonly credentails: Locator;
  readonly compcred: Locator;
  readonly selectcompliance: Locator;
  readonly closecomplaince:Locator;
  readonly selectfile: Locator;
  readonly assestspage: Locator;
  readonly teamleader: Locator;
  readonly selectteamleader: Locator;
  readonly secondrev: Locator;
  readonly selectsecondrev: Locator;
  readonly clickbtn: Locator;
  readonly selectanalysist: Locator;
  readonly selectanalysistoptn: Locator;
  readonly closebtn: Locator;
  readonly addengscope: Locator;
  readonly asdescription: Locator;
  readonly criticality: Locator;
  readonly selectcriticality: Locator;
  readonly closebutton: Locator;
  readonly internalip: Locator;
  readonly publicip: Locator;
  readonly url: Locator;
  readonly version: Locator;
  readonly submitbutton: Locator;
  readonly veriftTestManag: Locator;

  constructor(page: Page) {
    this.page = page;
    this.testlink = page.getByRole("link", { name: " Tests" });
    this.addTest = page.getByRole("button", { name: "Add Test" });
    this.selectproj = page.locator("//ng-select[@bindlabel='projectName']");
    this.selectprojoptn = page.getByText("Test the login functionality for the Denmark web application");
    this.testtitle = page.getByPlaceholder("Enter Test title");
    this.testdescrption = page.locator("//div[@data-placeholder='Enter test description']");
    this.contactperson = page.locator("//input[@formcontrolname='contactPerson']");
    this.contactnumber = page.locator("//input[@formcontrolname='contactNumber']");
    this.emailid = page.locator("//input[@formcontrolname='emailId']");
    this.testtype = page.locator("//ng-select[@formcontrolname='testNameId']");
    this.testtypeoptn = page.locator("//span[normalize-space()='NStar Product']");
    //this.entertesttype = page.locator("//div[text()='Select test type']");
    this.testtypeclose= page.locator("//ng-select[@placeholder='Select test type']//span[@class='ng-arrow-wrapper']");
    this.reporttitle = page.getByPlaceholder("Enter Report title");
    this.hourslocate = page.locator("//input[@formcontrolname='hoursAllocated']");
    this.credentails = page.locator("//textarea[@formcontrolname='credential']");
    this.compcred= page.locator("//span[text()='Select compliance requirement']");
    this.selectcompliance= page.locator("//div[text()='Industry Sector']");
    this.closecomplaince= page.locator("(//span[@class= 'dropdown-multiselect__caret'])[1]");
    this.selectfile = this.page.locator("//input[@id='formFile']");
    this.assestspage = page.locator("//input[@formcontrolname='totalPages']");
    this.teamleader = page.locator("//ng-select[@formcontrolname='teamLeaderId']");
    this.selectteamleader = page.locator("//span[text()='SK']");
    this.secondrev = page.locator("//span[text()='Select II reviewer']");
    this.selectsecondrev = page.locator("//ng-multiselect-dropdown[@placeholder='Select II reviewer']//div[contains(text(),'VedantK')]");
    this.clickbtn = page.locator("(//span[@class='dropdown-multiselect__caret'])[2]");
    this.selectanalysist = page.locator("//span[text()='Select assign analyst']");
    this.selectanalysistoptn = page.locator("(//div[normalize-space()='SK'])[1]");
    this.closebtn = page.locator("(//span[@class='dropdown-multiselect__caret'])[3]");
    this.addengscope = page.getByRole("button", { name: " Add Engagement Scope " });
    this.asdescription = page.locator("//input[@formcontrolname='assetDesc']");
    this.criticality = page.locator("//ng-select[@placeholder='Select criticality of asset']");
    this.selectcriticality = page.locator("//div[text()='High (Level 2)']");
    this.closebutton = page.locator("//ng-select[@formcontrolname='criticalityOfAsset']");
    this.internalip = page.locator("//input[@formcontrolname='internalIP']");
    this.publicip = page.locator("//input[@formcontrolname='publicIP']");
    this.url = page.locator("//input[@formcontrolname='url']");
    this.version = page.locator("//input[@formcontrolname='version']");
    this.submitbutton = page.getByRole("button", { name: "Submit" });
    this.veriftTestManag = page.getByText(" Check the login functionality for denmark web application ");
  }

  async Testlink(): Promise<void> {
    await this.testlink.click();
    await expect(this.addTest).toBeVisible();
  }

  async AddTest(): Promise<void> {
    await this.addTest.click();
    await expect(this.selectproj).toBeVisible();
  }

  async Selectproject(): Promise<void> {
    await this.selectproj.click();
    await this.selectprojoptn.click();
    await expect(this.testtitle).toBeVisible();
  }

  async Testtitle(): Promise<void> {
    await this.testtitle.fill("Check the login functionality for denmark web application");
    await expect(this.testtitle).toHaveValue(/Check the login/i);
  }

  async TestDescription(): Promise<void> {
    await this.testdescrption.fill("Check the login functionality with both scenarios");
  }

  async Contactperson(): Promise<void> {
    await this.contactperson.fill("SanketK");
    await expect(this.contactperson).toHaveValue("SanketK");
  }

  async ContactNumber(): Promise<void> {
    await this.contactnumber.fill("9903715639");
  }

  async EmailId(): Promise<void> {
    await this.emailid.fill("sanket.kumbhare@harriersys.com");
    await expect(this.emailid).toHaveValue("sanket.kumbhare@harriersys.com");
  }

  async Testtype(): Promise<void> {
    await this.testtype.click();
    await this.page.waitForLoadState('load');
    await this.testtypeoptn.click();
    await this.testtypeclose.click();
  }

  async Reporttitle(): Promise<void> {
    await this.reporttitle.fill("Check login positive flow");
  }

  async HoursLocate(): Promise<void> {
    await this.hourslocate.fill("6");
  }

  async Credentials(): Promise<void> {
  await this.credentails.fill('Testuser01@gmail.com / Test@123, Testuser02@gmail.com/ Test@786, Testuser03@gmail.com/Test@980');

  }

  async ComplianceRequirement(): Promise<void>{
    await this.compcred.click();
    await this.selectcompliance.click();
    await this.closecomplaince.click();
  }

  async Selectfile(): Promise<void> {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.selectfile.click()
    ]);
    await fileChooser.setFiles('/Users/sanketkumbhare/Downloads/Kajal_Shah_ Report.docx');
  }

  async Assestpage(): Promise<void> {
    await this.assestspage.fill("2");
  }

  async TeamLeader(): Promise<void> {
    await this.teamleader.click();
    await this.selectteamleader.click();
    await expect(this.teamleader).toContainText('SK');
  }

  async SecondRev(): Promise<void> {
    await this.secondrev.click();
    await this.selectsecondrev.click();
    await this.clickbtn.click();
  }

  async SelectAnayysist(): Promise<void> {
    await this.selectanalysist.click();
    await this.selectanalysistoptn.click();
    await this.closebtn.click();
      await expect(this.teamleader).toContainText('SK');
  }

  async AddengScope(): Promise<void> {
    await this.addengscope.click();
  }

  async ASDescription(): Promise<void> {
    await this.asdescription.fill("Test the Denmark web application scope");
  }

  async Criticality(): Promise<void> {
    await this.criticality.click();
    await this.selectcriticality.click();
    await this.closebutton.click();
  }

  async InternalIP(): Promise<void> {
    await this.internalip.fill("192.168.1.11");
  }

  async PublicIP(): Promise<void> {
    await this.publicip.fill("192.168.1.12");
  }

  async URL(): Promise<void> {
    await this.url.fill("https://www.goveva.com/goveva-360-sustainability-management-suite/");
  }

  async Version(): Promise<void> {
    await this.version.fill("10.12.1");
  }

  async Submitbutton(): Promise<void> {
    await this.submitbutton.click();
    await this.page.waitForTimeout(2000);
    //await this.veriftTestManag.hover();
    //await this.page.screenshot({ path: 'Screenshot/Test/Test-already-exist.png' });
    //await expect(this.veriftTestManag).toBeVisible();
    
  }

  async VerifyTestManage(): Promise<void> {
    //await expect(this.veriftTestManag).toBeVisible();
    //await this.veriftTestManag.hover();
    await this.page.screenshot({ path: 'Screenshot/Test/Test-Creation.png' });
  }
}
