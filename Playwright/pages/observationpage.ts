import { expect, Locator, Page } from '@playwright/test';
import { promises } from 'dns';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("observationpage")
export class observationpage{
    readonly page: Page;
    readonly observationlink: Locator;
    readonly addobservation: Locator;
    readonly obbtitle:Locator;
    readonly opentesttitle:Locator;
    readonly selecttesttitle:Locator;
    readonly closetesttitle:Locator;
    readonly obbcve:Locator;
    readonly obbvalcat: Locator;
    readonly obbvalcategselect: Locator;
    readonly obbclosevalcat:Locator;
    readonly obbvalumtonext:Locator;
    readonly obersvationname: Locator;
    readonly obbresoaffected:Locator;
    readonly obbparaaffected:Locator;
    readonly obbthroughproj:Locator;
    readonly obbthroprojname:Locator;
    readonly obbtechnical:Locator;
    readonly obbbusines:Locator;
    readonly observationdetailmovetonext:Locator;
    readonly obbaddstep:Locator;
    readonly firststep:Locator;
    readonly uploadstepimage: Locator;
    readonly Obssavebutton:Locator;
    readonly choosefile: Locator;
    readonly secondstep:Locator;
    readonly boldtext:Locator;
    readonly secondchoosefile:Locator;
    readonly savestep:Locator;
    readonly addappendix:Locator;
    readonly addappendixdata:Locator;
    readonly saveappendix:Locator;
    readonly btnIdentificationbtn:Locator;
    readonly idtoolname:Locator;
    readonly toolversion:Locator;
    readonly lictype:Locator;
    readonly selectlicoption:Locator;
    readonly Obstestrecommendation:Locator;
    readonly movetotop:Locator;
    readonly Onlysavebutton:Locator;
    readonly cancelbtn: Locator;

constructor (page:Page){
        this.page= page;
        this.observationlink= page.locator("//span[normalize-space()='Observations']");
        this.addobservation= page.getByRole("button", {name:' Add Observation '});
        this.obbtitle= page.locator("//input[@formcontrolname='findingTitle']");
        this.opentesttitle= page.locator("//ng-select[@placeholder='Select Test title']//span[@class='ng-arrow-wrapper']");
        this.selecttesttitle= page.locator("//span[text()='Check the login functionality for denmark web application']");
        this.closetesttitle= page.locator("//ng-select[@placeholder='Select Test title']//span[@class='ng-arrow-wrapper']");
        this.obbcve= page.getByPlaceholder("Enter a new tag");
        this.obbvalcat= page.locator("span.dropdown-multiselect__caret");
        this.obbvalcategselect= page.locator("//div[normalize-space()='Select Vulnerability Category']");
        this.obbclosevalcat= page.locator("span.dropdown-multiselect__caret");
        this.obbvalumtonext= page.locator("//div[@class='col-md-2 mb-1 d-flex align-items-end justify-content-end']//button[@class='btn btn-primary btn-sm'][normalize-space()='Move to next']");
        this.obersvationname= page.locator("//div[@data-placeholder='Enter observation']");
        this.obbresoaffected= page.locator("//textarea[@formcontrolname='resourceAffected']");
        this.obbparaaffected= page.locator("//textarea[@formcontrolname='parameterAffected']");
        this.obbthroughproj= page.locator("//input[@formcontrolname= 'throughoutApplication']");
        this.obbthroprojname= page.locator("//textarea[@formcontrolname= 'throughoutApplicationDesc']");
        this.obbtechnical=page.locator("//div[@data-placeholder='Enter technical impact']");
        this.obbbusines= page.locator("//div[@data-placeholder='Enter business impact']");
        this.observationdetailmovetonext= page.locator("//div[@class='col-md-4 mb-1 d-flex align-items-end justify-content-end']//button[@class='btn btn-primary btn-sm'][normalize-space()='Move to next']");
        this.obbaddstep =page.getByRole("button", {name:'Add Step'});
        this.firststep= page.locator("//div[@data-placeholder='Enter pre content']");
        this.uploadstepimage= page.locator("input#UploadImage0");
        this.choosefile= page.locator("//input[@type='file']");
        this.Obssavebutton= page.getByRole("button", {name:'Save Step'});
        this.secondstep=page.locator("//div[@data-placeholder='Enter pre content']");
        this.boldtext=page.locator("(//button[@aria-label='bold'])[4]")
        this.secondchoosefile= page.locator("//input[@value='uploadTextFile']");
        this.savestep= page.getByRole("button", {name:'Save Step'});
        this.addappendix= page.getByRole("button", {name:"Add Appendix"});
        this.addappendixdata= page.locator("//textarea[@formcontrolname='appContent']");
        this.saveappendix= page.getByRole("button", {name:' Save Appendix '});
        this.btnIdentificationbtn=page.getByRole("button", {name:" Add Identification Validation "})
        this.idtoolname= page.locator("//input[@formcontrolname='toolName']");
        this.toolversion= page.locator("//input[@formcontrolname='toolVersion']");
        this.lictype= page.locator("div[class='ng-select-container'] span[class='ng-arrow-wrapper']");
        this.selectlicoption= page.locator("//span[text()='Open Source']");
        this.Obstestrecommendation= page.locator("//div[@data-placeholder='Enter recommendation']");
        this.movetotop= page.getByRole("button", {name:' Move to Top '});
        this.Onlysavebutton= page.locator("//button[normalize-space()='Save']")
        this.cancelbtn= page.getByRole("button", {name:'Cancel'});
     }
     //observation
    async ObservationLink():Promise<void>{
        await this.page.waitForLoadState('domcontentloaded');
        await this.observationlink.click();
        await this.page.waitForLoadState('load');
        await this.addobservation.click();
        await this.page.waitForLoadState('domcontentloaded');
       // this.page.waitForLoadState('load');
    }
    async AddObservationPage():Promise<void>{
        await this.page.waitForTimeout(4000)
        const obbtitletext = "Create New Observation for the Info scenario & validate the Denmark web application"
        try{
            await expect(this.obbtitle).toBeVisible();
            await this.obbtitle.fill(obbtitletext);
            await expect(this.obbtitle).toHaveText(obbtitletext);
            console.log("Added textvalue in observation title field");
        }catch(error){
            console.log("Error throwing Value not present in title field:", error);
        }
        await this.page.waitForTimeout(1000);
        await this.opentesttitle.click();
        await this.selecttesttitle.click();
        //await this.closetesttitle.click();
        await this.page.waitForTimeout(2000);
        await this.obbcve.click();
        const obbcvevalue= "CVE-2025-29174,CWE-27164"
        try{
            await expect(this.obbcve).toBeVisible();
            await this.obbcve.fill(obbcvevalue);
            await expect(this.obbcve).toHaveText(obbcvevalue);
            console.log("Mentioned the CVE/CWE value in field ");
        }catch(error){
            console.log("Error throwing CVE/CWE not present:", error);
        }
       
        await this.obbvalcat.click();
        await this.obbvalcategselect.click();
       // await expect(this.obbvalcategselect).toBeVisible();
        await this.obbclosevalcat.click();
        await this.obbvalumtonext.click();
        await this.page.waitForTimeout(2000);
    }

    async ObservationDetails():Promise<void>{
        await this.page.waitForTimeout(2000);
        const obsname= "Add new Observation for the Info module";
        try{
            await expect(this.obersvationname).toBeVisible();
            await this.obersvationname.fill(obsname);
            await expect(this.obersvationname).toHaveText(obsname);
            console.log("Add the textvalue in observation field");
        }catch(error){
            console.log("Error Throwing Observation not added:", error);

        }
        await this.page.waitForTimeout(2000);
        const obbresource= "New Resources added for the Info module & validate it to the Denmark application."
        try{
            await expect(this.obbresoaffected).toBeVisible();
            await this.obbresoaffected.fill(obbresource);
            await expect(this.obbresoaffected).toHaveText(obbresource);
            console.log("Resources added for Denmark application");
        }catch(error){
            console.log("Error throwing Resources not added:", error);
        }
        await this.page.waitForTimeout(2000);
        const obbparameter= "New parameter added for the Info module & validate it for the Denmark application"
        try{
            await expect(this.obbparaaffected).toBeVisible();
            await this.obbparaaffected.fill(obbparameter);
            await expect(this.obbparaaffected).toHaveText(obbparameter);
        }catch(error){
            console.log("Error throwing Parameter not added:", error);
        }
        await this.obbthroughproj.check()
        await expect(this.obbthroughproj).toBeChecked();
        await this.page.waitForTimeout(2000);
        const observationthroughname = "New project details added for the Info module & validate to Denmark web application"
        try{
            await expect(this.obbthroprojname).toBeVisible();
            await this.obbthroprojname.fill(observationthroughname);
            await expect(this.obbthroprojname).toHaveText(observationthroughname);
            console.log("New Through project file added for denmark application")
        }catch(error){
            console.log("Error throwing through project:", error);
        }
        await this.page.waitForTimeout(2000);
        const obbtechnicalname= "New Technical observation added to the Info module & validate it for the Denmark application."
        try{
            await expect(this.obbtechnical).toBeVisible();
            await this.obbtechnical.fill(obbtechnicalname);
            await expect(this.obbtechnical).toHaveText(obbtechnicalname);
            console.log("Technical Impact added by the Denmark application");
        }catch(error){
            console.log("Error throwing while added Technical Impact:", error);
        }
        await this.page.waitForTimeout(2000);
        const obbBusinessImpact= "Business Impact added successfully for Denmark web application"
        try{
            await expect(this.obbbusines).toBeVisible();
            await this.obbbusines.fill(obbBusinessImpact)
            await expect(this.obbbusines).toHaveText(obbBusinessImpact);
        }catch(error){
            console.log("Error throwing while adding business impact:", error);
        }
        await this.observationdetailmovetonext.click()
    }

    async ObservationfirsSteps():Promise<void>{
        await this.obbaddstep.click();
        const addfirststep= "Test the login module for the Info module for the denmark application check the screenshot of the login module"
        try{
            await expect(this.firststep).toBeVisible();
            await this.firststep.fill(addfirststep);
            await expect(this.firststep).toHaveText(addfirststep);
            console.log("data is available in the first step data field")
        }catch(error){
            console.log("Error throwing when data is not available:", error);
        }

        await expect(this.uploadstepimage).toBeVisible();
        await this.uploadstepimage.click();
    }

    async SelectfirstStepfile():Promise<void>{
    const [selectfile]=await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.choosefile.click()
    ]);
     await selectfile.setFiles('/Users/sanketkumbhare/Pictures/Loginpage.png');
     await this.Obssavebutton.click();
    }

async AddAppendix():Promise<void>{
    await this.addappendix.click();
    const addapendixtext= "Check the functionality for the Info module & validate it for the Denamrk application"
    try{
        await expect(this.addappendixdata).toBeVisible();
        await this.addappendixdata.fill(addapendixtext);
        await expect(this.addappendixdata).toHaveText(addapendixtext);
        console.log("Add new appendix for the module");
    }catch(error){
        console.log("Error throwing while appendix showing an error:",error);
    }
    await this.saveappendix.click();
}

async IdentificationValidation():Promise<void>{
    await this.btnIdentificationbtn.click()
const Toolname= "Manual"
        try{
            await expect(this.idtoolname).toBeVisible();
            await this.idtoolname.fill(Toolname);
            await expect(this.idtoolname).toHaveText(Toolname);
            console.log("New tool name is added successfully!!!");
        }catch(error){
            console.log("Error throwing while adding tool name:", error);
        }
const Toolversion= "ManualT1.24"
    try{
        await expect(this.toolversion).toBeVisible();
        await this.toolversion.fill(Toolversion);
        await expect(this.toolversion).toHaveText(Toolversion);
        console.log("check the tool version is available or not?")
    }catch(error){
        console.log("Error throwing wjile adding tool version:", error);
    }

    await expect(this.lictype).toBeVisible();
    await this.lictype.click();
    await expect(this.selectlicoption).toBeVisible();
    await this.selectlicoption.click();
}
async EnterRecommendation():Promise<void>{
   const testrecommend= "New observation added for the Info module for the login functionality"
   try{
    await expect(this.Obstestrecommendation).toBeVisible();
    await this.Obstestrecommendation.fill(testrecommend)
    await expect(this.Obstestrecommendation).toHaveText(testrecommend);
    console.log("Add the Test recommendation value for new observation");
   }catch(error){
    console.log("Error throwing while adding new Test recommendation page:", error);
   }
}
async MoveToTop():Promise<void>{
  await this.movetotop.click();
  await this.page.waitForTimeout(4000);
  await this.Onlysavebutton.click();
  await this.page.screenshot({path:'Screenshot/TestMaster/Observations/save-observation.png'});
  await this.cancelbtn.click();
  await this.page.screenshot({path: 'Screenshot/TestMaster/Observations/New-Observation.png'})
}

}
