import { expect, Locator, Page } from '@playwright/test';
import { promises } from 'dns';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("testmasterpage")
export class testmasterpage{
    readonly page: Page;
    readonly testurl: Locator;
    readonly clickoncount: Locator;
    readonly executesummary: Locator;
    readonly testintro: Locator;
    readonly businesscriticality : Locator;
    readonly highlevel: Locator;
    readonly recommendation: Locator;
    readonly save: Locator;
    readonly checkbox: Locator;
    readonly passrev: Locator;
    readonly commenticon: Locator;
    readonly entercomment: Locator;
    readonly savechangesbtn: Locator;
    readonly cancelbutton: Locator;
    readonly checklistlink: Locator;
    readonly addchecklistbtn: Locator;
    readonly checklistuser: Locator;
    readonly checklistrole: Locator;
    readonly checklistselect: Locator;
    readonly checklistoption: Locator;
    readonly closechecklistoptn : Locator;
    readonly statusopen: Locator;
    readonly statusselect: Locator;
    readonly closestatusbtn: Locator;
    readonly savebuttonchecklist: Locator;
    readonly checklistInprogress: Locator;
    readonly checklistsavebtn: Locator;
    readonly checklistpassrev: Locator;
    readonly checklistcomment: Locator;
    readonly checklistaddcomment:Locator;
    readonly checklistbtnchanges: Locator;
    readonly checklistsavebutton: Locator;
    readonly checklistcancelbtn: Locator;
    readonly resourcelink: Locator;
    readonly resourceuploadbtn: Locator;
    readonly resourceinprogress: Locator;
    readonly resourcesave: Locator;
    readonly resourcepassrev:Locator;
    readonly resourceiconbtn: Locator;
    readonly resourcecomment:Locator;
    readonly resourcesavechanges:Locator;
    readonly resourcesavebtn:Locator;
    readonly resourcecancelbtn: Locator;
    readonly walkthroughlink:Locator;
    readonly walkthroughimportbtn: Locator;
    readonly walkthroughprogress: Locator;
    readonly walkthroughsavebtn: Locator;
    readonly walkthroughpassrev: Locator;
    readonly walkthroughicon:Locator;
    readonly walkthroughreviewcomm:Locator;
    readonly walkthroughsavechangesbtn:Locator;
    readonly walkthroughquestionarriessavebtn: Locator;
    readonly walkthroughcancelbtn: Locator;
    readonly businesslink: Locator;
    readonly businessaddbtn: Locator;
    readonly businessfunctionality: Locator;
    readonly businessposibilityfield: Locator;
    readonly businesstc: Locator;
    readonly businessdrpoptn: Locator;
    readonly businessselectoptn: Locator;
    readonly businessclosedrpdown: Locator;
    readonly businesssavebtn:Locator;
    readonly businessinprogress: Locator;
    readonly businesslogicsavebtn: Locator;
    readonly businesslogicpassrev:Locator;
    readonly businesslogicicon:Locator;
    readonly businesslogiccomment: Locator;
    readonly businesssavechangesbtn: Locator;
    readonly businesslogicsavebutton:Locator;
    readonly businesslogiccancelbtn:Locator;
    
    constructor (page:Page){
        this.page= page;
        this.testurl= page.getByRole("link", {name:'Tests'});
        this.clickoncount= page.locator("(//span[@class='textRight'][normalize-space()='0'])[1]");
        this.executesummary= page.locator("(//td[normalize-space()='Executive Summary'])[1]");
        this.testintro= page.locator("//div[@data-placeholder='Enter test introduction']");
        this.businesscriticality= page.locator("//div[@data-placeholder='Enter business criticality']");
        this.highlevel= page.locator("//div[@data-placeholder='Enter High-Level business risks']");
        this.recommendation= page.locator("//div[@data-placeholder='Enter recommendations for management']");
        this.save= page.getByRole("button", {name:'Save'});
        this.checkbox= page.locator("//input[@id= 'inProgress']");
        this.passrev= page.locator("//input[@id= 'passReview']");
        this.commenticon= page.locator("//span[contains(text(),'Ist')]//*[name()='svg']");
        this.entercomment= page.getByPlaceholder("Enter reviewer Comment");
        this.savechangesbtn = page.getByRole("button", {name:' Save changes '});
        this.cancelbutton= page.getByRole("button", {name:'Cancel'});
        this.checklistlink= page.locator("//td[normalize-space()='Checklist']");
        this.addchecklistbtn= page.locator("(//button[@nztype='primary'])[2]");
        this.checklistuser= page.getByPlaceholder("username");
        this.checklistrole= page.getByPlaceholder("role");
        this.checklistselect= page.locator("//ng-select[@placeholder='Select Checked']//span[@class='ng-arrow-wrapper']");
        this.checklistoption= page.locator("//span[text()='NA']");
        this.closechecklistoptn = page.locator("//ng-select[@placeholder='Select Checked']//span[@class='ng-arrow-wrapper']");
        this.statusopen= page.locator("//ng-select[@placeholder='Select Status']//span[@class='ng-arrow-wrapper']");
        this.statusselect= page.locator("//span[text()= 'Compliant']");
        this.closestatusbtn= page.locator("//ng-select[@placeholder='Select Status']//span[@class='ng-arrow-wrapper']");
        this.savebuttonchecklist =page.locator(".anticon-save");
        this.checklistInprogress= page.locator("(//input[@type='checkbox'])[1]");
        this.checklistsavebtn= page.getByRole("button", {name:"Save"});
        this.checklistpassrev = page.locator("//input[@formcontrolname='iReviewedPass']");
        this.checklistcomment= page.locator("//span[contains(text(),'Ist')]//*[name()='svg']");
        this.checklistaddcomment =page.locator("//textarea[@placeholder='Enter reviewer Comment']")
        this.checklistbtnchanges= page.getByRole("button", {name:' Save changes '});
        this.checklistsavebutton = page.getByRole("button", {name:"Save"});
        this.checklistcancelbtn= page.getByRole("button", {name:'Cancel'});
        this.resourcelink= page.locator("//td[normalize-space()='Resource List']");
        this.resourceuploadbtn = page.getByRole("button", {name:' Import CSV File '});
        this.resourceinprogress = page.locator("//label [@formcontrolname='isInProgressPass']");
        this.resourcesave= page.locator("div.save-button-container");
        this.resourcepassrev= page.locator("//input[@formcontrolname='iReviewedPass']");
        this.resourceiconbtn= page.locator("label[class='form-label fw-semibold page-item ng-star-inserted'] span[class='ng-star-inserted'] svg");
        this.resourcecomment= page.locator("//textarea[@placeholder='Enter reviewer Comment']");
        this.resourcesavechanges= page.getByRole("button", {name:" Save changes "});
        this.resourcesavebtn= page.getByRole("button", {name:'Save'});
        this.resourcecancelbtn= page.getByRole("button", {name:'Cancel'});
        this.walkthroughlink= page.locator("//td[normalize-space()='Walkthrough Questionnaire']");
        this.walkthroughimportbtn = page.getByRole("button", {name:' Import CSV File '});
        this.walkthroughprogress= page.locator("//label[@formcontrolname='isInProgressPass']");
        this.walkthroughsavebtn= page.getByRole("button", {name:'Save'});
        this.walkthroughpassrev= page.locator("//input[@formcontrolname='iReviewedPass']");
        this.walkthroughicon= page.locator("label[class='form-label fw-semibold page-item ng-star-inserted'] span[class='ng-star-inserted'] svg");
        this.walkthroughreviewcomm= page.locator("//textarea[@placeholder='Enter reviewer Comment']");
        this.walkthroughsavechangesbtn= page.getByRole("button", {name:' Save changes '});
        this.walkthroughquestionarriessavebtn= page.getByRole("button", {name:'Save'});
        this.walkthroughcancelbtn= page.getByRole("button", {name:'Cancel'});
        this.businesslink= page.locator("//td[normalize-space()='Business Logic']");
        this.businessaddbtn= page.locator("//span[@nztype='plus']");
        this.businessfunctionality= page.locator("//input[@formcontrolname='functionality']");
        this.businessposibilityfield = page.locator("//input[@formcontrolname='possibleThreat']");
        this.businesstc= page.locator("//input[@formcontrolname='testCase']");
        this.businessdrpoptn= page.locator("//span[@class='ng-arrow-wrapper']");
        this.businessselectoptn= page.locator("//span[text()='Not-Checked']");
        this.businessclosedrpdown = page.locator("//span[@class='ng-arrow-wrapper']");
        this.businesssavebtn= page.locator("span[class='anticon anticon-save ng-star-inserted'] svg");
        this.businessinprogress= page.locator("//label[@formcontrolname= 'isInProgressPass']");
        this.businesslogicsavebtn= page.getByRole("button", {name:'Save'}); 
        this.businesslogicpassrev= page.locator("//input[@formcontrolname='iReviewedPass']");
        this.businesslogicicon= page.locator("label[class='form-label fw-semibold page-item ng-star-inserted'] span[class='ng-star-inserted'] svg");
        this.businesslogiccomment =page.locator("textarea[placeholder='Enter reviewer Comment']");
        this.businesssavechangesbtn= page.getByRole("button",{name:' Save changes '})
        this.businesslogicsavebutton= page.locator("//button[normalize-space()='Save']");
        this.businesslogiccancelbtn= page.getByRole("button", {name:'Cancel'});
        

    }

    //Executive summary
 async TestCount(): Promise<void>{
    await this.testurl.click();
    await this.page.waitForLoadState("load");
    await this.clickoncount.click();
    await this.page.waitForLoadState("load");
 }
 async ExecuteSummary(): Promise<void>{
    await this.executesummary.click();
    await this.page.waitForLoadState("load");
 }
 async TestIntroduction(): Promise<void> {
  const introText = "Test the login functionality for the Denmark web application.";
  try {
    await expect(this.testintro).toBeVisible();
    await this.testintro.fill(introText);
    await expect(this.testintro).toHaveText(introText);
  } catch (error) {
    console.error("Error filling Test Introduction:", error);
    throw error;
  }
}
 async BusinessCriticality(): Promise<void>{
    const testbusiness= "Test the business criticality for the Denamrk web application.";
    try{
        await expect(this.businesscriticality).toBeVisible();
        await this.businesscriticality.fill(testbusiness);
        await expect(this.businesscriticality).toHaveText(testbusiness);
    }catch(error){
        console.error("Error filling Business criticality:", error);
    }
 }
 async HighlevelBusiness(): Promise<void>{
    const highlevels= "Test the high level scenarios for the Denmark web application.";
    try{
        await expect(this.highlevel).toBeVisible();
        await this.highlevel.fill(highlevels);
        await expect(this.highlevel).toHaveText(highlevels)
    }catch(error){
        console.error("Error filling on High-Level Business criticality:", error);
    }
 }
async RecommendationManage(): Promise<void>{
   const recommanage ="Test the Denmark recommendations flow.";
   try{
    await expect(this.recommendation).toBeVisible();
    await this.recommendation.fill(recommanage);
    await expect(this.recommendation).toHaveText(recommanage);
   }catch(error){
    console.log("Error filling on Recommendation manage:", error);
   }
}
async SaveButton(): Promise<void>{
    await this.save.click();
    await this.page.waitForLoadState("load");
    //await this.page.screenshot({path: 'Screenshot/TestMaster/Executesummary-inprogress.png'});
}
async INProgress(): Promise<void>{
    await this.checkbox.uncheck();
    await this.page.waitForLoadState("load");
    await this.save.click();
    await this.page.waitForLoadState("load");
}
async FirstReview(): Promise<void>{
    await this.passrev.click()
    await expect(this.passrev).toBeVisible();
    await this.page.waitForLoadState("load");
    await this.commenticon.click();
    const reviewerComment = "Tested by the 1st reviewer for testing purpose.";

try {
    await expect(this.entercomment).toBeVisible();
    await this.page.waitForTimeout(2000);
    await this.entercomment.fill(reviewerComment);
    await expect(this.entercomment).toHaveText(reviewerComment);
} catch (error) {
    console.error("Error while interacting with the comment section:", error);
}
    
    await this.page.waitForTimeout(2000);
    await this.savechangesbtn.click();
    await this.page.waitForTimeout(2000);
    await this.save.click();
    await this.page.waitForTimeout(4000);
    //await this.page.screenshot({path: 'Screenshot/TestMaster/Execute-summary.png'});
    await this.page.waitForTimeout(3000);
    //await this.page.screenshot({path: 'Screenshot/TestMaster/Execute-summary-first-review.png', fullPage:true});
    await this.cancelbutton.click();
    await this.page.waitForLoadState('load');
}

//Checklist
async ChecklistLink(): Promise<void>{
    await this.checklistlink.click();
    await this.page.waitForLoadState("load");
}
async AddChecklistbutton(): Promise<void>{
    await this.addchecklistbtn.click();
}
async AddChecklistField(): Promise<void>{
    
    const userfield= "Verify the positve & negative scenario."
    try{
    await expect(this.checklistuser).toBeVisible();
    await this.checklistuser.fill(userfield);
    await expect(this.checklistuser).toHaveText(userfield);
    }catch(error){
        console.log("Username not mentioned.. Add new username:", error);
    }
    const rolename= "Tester"
    try{
        await expect(this.checklistrole).toBeVisible();
        await this.checklistrole.fill(rolename);
        await expect(this.checklistrole).toHaveText(rolename);
    }catch(error)
    {
        console.log("Role not avaiable.. Please add new role:", error);
    }

    await this.checklistselect.click();
    await this.checklistoption.click();
    await expect(this.checklistoption).toHaveText('NA');
    await this.closechecklistoptn.click();
    

    await this.statusopen.click();
    await this.statusselect.click();
    await expect(this.statusselect).toHaveText('Compliant');
    await this.closestatusbtn.click();
}
async AddSavebutton(): Promise<void>{
    await this.savebuttonchecklist.click();
    await this.page.waitForLoadState('domcontentloaded');
    //await this.page.screenshot({path: 'Screenshot/TestMaster/Checklist/Save-checklist.png'});
}
async ChecklistINProgress(): Promise<void>{
    await this.page.waitForTimeout(2000);
    await this.checklistInprogress.uncheck();
    await this.checklistsavebtn.click();
    await this.page.waitForLoadState('load');
    await this.checklistpassrev.click();
    await this.checklistcomment.click();

    const checkComment = "Tested by the 1st reviewer.";

try {
  await expect(this.checklistaddcomment).toBeVisible();
  await this.checklistaddcomment.fill(checkComment);
  await expect(this.checklistaddcomment).toHaveValue(checkComment);

  console.log("First reviewer comment entered successfully.");
} catch (error) {
  console.error("Error entering the 1st reviewer comment:", error);
}
    await this.checklistbtnchanges.click();
    await this.page.waitForLoadState('load');
    await this.checklistsavebutton.click();
    await this.page.waitForTimeout(5000);
    //await this.page.screenshot({path: 'Screenshot/TestMaster/Checklist/Checklist-Updated.png', fullPage: true });
    await this.checklistcancelbtn.click();
}
//resource-list
async ResourceLink():Promise<void>{
    await this.resourcelink.click();
    await this.page.waitForLoadState('load');
}
async Selectfile(): Promise<void> {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.resourceuploadbtn.click()
    ]);
    await fileChooser.setFiles('/Users/sanketkumbhare/Documents/Nstar Documents/Resource-List/NStar-Prod-Resource-list.csv');
  }
async ResourceInProgress(): Promise<void>{
    await this.page.waitForTimeout(2000);
    await this.resourceinprogress.click();
    await this.page.waitForTimeout(2000);
    await this.resourcesave.click();
    await this.page.waitForTimeout(2000);
    //await this.page.screenshot({path:'Screenshot/TestMaster/Resourcelist/save-resource.png'})
}
async ResourePassRev():Promise<void>{
    await this.resourcepassrev.isVisible();
    await this.resourcepassrev.click();
    await this.resourceiconbtn.click();
    const passcomment= "Tested by the 1st reviewer";
    try{
        await this.resourcecomment.isVisible();
        await this.resourcecomment.fill(passcomment);
        await expect(this.resourcecomment).toHaveText(passcomment);
        console.log("resource comment is added successfully!!");
    }catch(error)
    {
        console.log("Error throwing not added successfully!:", error);
    }
    await this.resourcesavechanges.click();
    await this.page.waitForLoadState('load');
    await this.resourcesavebtn.click();
    await this.page.waitForTimeout(5000);
    //await this.page.screenshot({path: 'Screenshot/TestMaster/Resourcelist/Resource-List.png'});
    await this.resourcecancelbtn.click();
}

//Walkthrough-questionnaries
async Walkthroughlink():Promise<void>{
   // await expect(this.walkthroughlink).toHaveAttribute('href',"http://10.13.90.80/main/walkThrough_management/test_walkThrough");
    await this.walkthroughlink.click();
}

  async WalkthroughImport(): Promise<void>{
    const [WalkThroughfile]= await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.walkthroughimportbtn.click()
    ]);
    await WalkThroughfile.setFiles('/Users/sanketkumbhare/Documents/Nstar Documents/Questionnaire_updated.csv');
  }
async WalkInprogress():Promise<void>{
    await this.walkthroughprogress.click();
    await this.walkthroughsavebtn.click();
    await this.page.waitForTimeout(4000);
    //await this.page.screenshot({path:'Screenshot/TestMaster/Walkthrought-Questionarries/Walkthrough-save.png'});
}
async WalkThroughpassrev():Promise<void>{
await this.walkthroughpassrev.check();
await expect(this.walkthroughpassrev).toBeChecked();
await this.walkthroughicon.click()
await expect(this.walkthroughicon).toBeVisible();
const walkthroughtext= "Tested by the 1st reviewer"
    try{
    await expect(this.walkthroughreviewcomm).toBeVisible();
    await this.walkthroughreviewcomm.fill(walkthroughtext);
    await expect(this.walkthroughreviewcomm).toContainText(walkthroughtext);
    console.log("walkthrough comment added successfully!");
    }
catch(error){
    console.log("Error throwing Walkthrough comment not added!:", error);
    }
    await this.walkthroughsavechangesbtn.click();
    await expect(this.walkthroughsavechangesbtn).toBeVisible();
    await this.walkthroughquestionarriessavebtn.click();
    await this.page.waitForTimeout(5000);
    //await this.page.screenshot({path:'Screenshot/TestMaster/Walkthrought-Questionarries/walkthrough.png'});
    await this.walkthroughcancelbtn.click();
    }
//business-logic
async BusinessLink():Promise<void>{
    await this.businesslink.click();
    await this.page.waitForLoadState('load');       
    }
async AddBusinessButton():Promise<void>{
    await this.businessaddbtn.click();
    //await expect(this.businessaddbtn).toBeVisible();
    }

 async BusinessField():Promise<void>{
    const functfield= "Add new business logic for denmark web application";
    try{
        await expect(this.businessfunctionality).toBeVisible();
        await this.businessfunctionality.fill(functfield)
        await expect(this.businessfunctionality).toHaveText(functfield);
        console.log("Textvalue is present in functionality field");
    }catch(error){
        console.log("Error Throwing form the functionality field:", error);
    }

    const possiblethreat= "Mentioned the proper logic for positive scenario"
    try{
        await expect(this.businessposibilityfield).toBeVisible();
        await this.businessposibilityfield.fill(possiblethreat)
        await expect(this.businessposibilityfield).toHaveText(possiblethreat);
        console.log("Text value present for the possibilty field");
    }catch(error){
        console.log("Error throwing value not present in possibility field:", error);
     }
    }   
   async BusinessTestcases():Promise<void>{
        const testcase= "For positive flow"
      try{
          await expect(this.businesstc).toBeVisible();
          await this.businesstc.fill(testcase);
          await expect(this.businesstc).toHaveText(testcase);
          console.log("Mentioned the testcase as a textvalue or integer value")
      }catch(error){
        console.log("Error throwing while Testcases field shows empty:", error)
      }
    }
    async BusinessDropdown():Promise<void>{
        await this.businessdrpoptn.click();
        await expect(this.businessselectoptn).toBeVisible();
        await this.businessselectoptn.click();
        await expect(this.businessselectoptn).toHaveText("Not-Checked");
        await this.businessclosedrpdown.click();
    } 
    async BusinessSavebutton():Promise<void>{
        await this.businesssavebtn.click();
        await this.page.waitForTimeout(3000);
        //await this.page.screenshot({path:'Screenshot/TestMaster/Businesslogic/Save-logics.png'});
    }
    async BusinessINProgress():Promise<void>{
        await this.businessinprogress.uncheck();
        await this.businesslogicsavebtn.click();
        await this.page.waitForLoadState('load');

    }
    async BusinesslogicPassrev():Promise<void>{
        await this.businesslogicpassrev.click();
        await expect(this.businesslogicpassrev).toBeVisible();
        await this.businesslogicicon.click();
        const businesslogiccomment= "Tested by the 1st reviewer"
        try{
            await expect(this.businesslogiccomment).toBeVisible();
            await this.businesslogiccomment.fill(businesslogiccomment);
            await expect(this.businesslogiccomment).toHaveText(businesslogiccomment);
        }catch(error){
            console.log("error throwing comment not added in business logic:", error);
        }
        await this.businesssavechangesbtn.click();
        await this.businesslogicsavebutton.click();
        await this.page.waitForTimeout(3000)
        //await this.page.screenshot({path:'Screenshot/TestMaster/Businesslogic/Business-logic.png', fullPage:true});
        await this.businesslogiccancelbtn.click();
    }

}



