import { TestNewInboxForwarderOptionsFromJSONTyped } from "mailslurp-client";
import { authpage } from "../pages/authpage";
import { DashboardPage } from "../pages/DashboardPage";
import { orgpage } from "../pages/orgpage";
import { projectpage } from "../pages/projectpage";
import { testmasterpage } from "../pages/testmasterpage";
import { observationpage } from "../pages/observationpage";
import { masterchecklist } from "../pages/masterchecklist";
import { test } from "../utility/fixtures";
import { createBdd } from "playwright-bdd";
const {Given,When, Then} = createBdd(test);


Given('User navigate to the login page', async ({LoginPage}) => {
    await LoginPage.gotoLoginPage();
  
  });
  
  When('User enter the email', async ({LoginPage}) => {
    await LoginPage.enterEmail();
  });
  
  When('User enter the password', async ({LoginPage}) => {
    await LoginPage.enterPassword();
  });
  
  When('User click the login button', async ({LoginPage}) => {
    await LoginPage.clickLogin();
  });

  When('I navigate to the application and verify the code', async ({Authpage}) => {
 await Authpage.authenticaticationpages()
});

Then('I should see the success message', async ({Authpage}) => {
  await Authpage.loginbutton();
});

When('user click on login button it will re-direct to the Dashboard page',async ({Dashboardpages})=>{
  await Dashboardpages.dashlink(); 

});

Given ('User can re-direct to the oragization page', async ({Orgizationpage})=> {
await Orgizationpage.orglink();
await Orgizationpage.Addorgbtn();
});

Then('User can add new Orgaization and mentioned all the details for the page', async({Orgizationpage})=>{
await Orgizationpage.organizationname();
await Orgizationpage.orgshortdescription();
await Orgizationpage.organizationdescription();
await Orgizationpage.contactperson();
await Orgizationpage.design();
await Orgizationpage.email();
await Orgizationpage.headquaters();
await Orgizationpage.selectcountry();
await Orgizationpage.selectindustry();
await Orgizationpage.regstandard();
});

Then ('User can click on submit button', async({Orgizationpage})=>{
await Orgizationpage.submitbtn();
}); 

Then ('User can verify the Orgaization management list page', async({Orgizationpage})=>{
await Orgizationpage.verifypage();
}); 

Given('the user navigates to the Projects page', async ({Projectpage}) => {
  await Projectpage.Projectlink();
});

When('the user clicks on the {string} button', async ({Projectpage}, arg: string) => {
  await Projectpage.Addprojectbutton();
});

When('the user enters the project details', async ({Projectpage}) => {
 await Projectpage.Projname();
 await Projectpage.Projectshtname();
 await Projectpage.Projectdescription();
 await Projectpage.selectorganization();
 await Projectpage.Networkplace();
 await Projectpage.Dateselection();
 await Projectpage.setdeafultvalue();
});

Then('the newly added project should be visible in the Project Management list', async ({Projectpage}) => {
  await Projectpage.submit();
  await Projectpage.Verifytheproject();
});

Given('the user clicks on Total Test count to start creating a new Test', async ({Testpage}) => {
  await Testpage.Testlink();
});

When('the user is redirected to the Test Management page and selects {string} button', async ({Testpage}, arg: string) => {
 await Testpage.AddTest();
});

Then('the user enters all essential and mandatory details', async ({Testpage}) => {
  await Testpage.Selectproject();
  await Testpage.Testtitle();
  await Testpage.TestDescription();
  await Testpage.Contactperson();
  //await Testpage.SelectCountry();
  await Testpage.ContactNumber();
  await Testpage.EmailId();
  await Testpage.Testtype();
  await Testpage.Reporttitle();
  await Testpage.HoursLocate();
  await Testpage.Credentials();
  await Testpage.ComplianceRequirement();
  await Testpage.Selectfile();
  await Testpage.Assestpage();
  await Testpage.TeamLeader();
  await Testpage.SecondRev();
  await Testpage.SelectAnayysist();
  await Testpage.AddengScope();
  await Testpage.ASDescription();
  await Testpage.Criticality();
  await Testpage.InternalIP();
  await Testpage.PublicIP();
  await Testpage.URL();
  await Testpage.Version();
});

Then('the user submits the Test after filling in the data', async ({Testpage}) => {
  await Testpage.Submitbutton();
});

Then('the user verifies that the Test appears in the Test Management list page', async ({Testpage}) => {
await Testpage.VerifyTestManage();
});

Given('the user creates a new test and clicks on the Total Observation count', async ({TestMaster}) => {
  await TestMaster.TestCount();
  
});

Then('the user is redirected to the Test Masters page and fills in the Execute Summary', async ({TestMaster}) => {
  await TestMaster.ExecuteSummary();
  await TestMaster.TestIntroduction();
  await TestMaster.BusinessCriticality();
  await TestMaster.HighlevelBusiness();
  await TestMaster.RecommendationManage();
  await TestMaster.SaveButton();
  await TestMaster.INProgress();
  await TestMaster.FirstReview();
});

Then('the user uploads or adds items in the Checklist', async ({TestMaster}) => {
 await TestMaster.ChecklistLink();
 await TestMaster.AddChecklistbutton();
 await TestMaster.AddChecklistField();
 await TestMaster.AddSavebutton();
 await TestMaster.ChecklistINProgress();
});

Then('the user uploads a CSV file in the Resource List', async ({TestMaster}) => {
  await TestMaster.ResourceLink();
  await TestMaster.Selectfile();
  await TestMaster.ResourceInProgress();
  await TestMaster.ResourePassRev();
});

Then('the user uploads a CSV file in the Walkthrough Summary', async ({TestMaster}) => {
  await TestMaster.Walkthroughlink();
  await TestMaster.WalkthroughImport();
  await TestMaster.WalkInprogress();
  await TestMaster.WalkThroughpassrev();
});

Then('the user enters data in Business Logic', async ({TestMaster}) => {
  await TestMaster.BusinessLink();
  await TestMaster.AddBusinessButton();
  await TestMaster.BusinessField();
  await TestMaster.BusinessTestcases();
  await TestMaster.BusinessDropdown();
  await TestMaster.BusinessSavebutton();
  await TestMaster.BusinessINProgress();
  await TestMaster.BusinesslogicPassrev();
});

Given('the user adds a new Observation and saves it', async ({Observationpage}) => {
  await Observationpage.ObservationLink();
  await Observationpage.AddObservationPage();
  await Observationpage.ObservationDetails();
  await Observationpage.ObservationfirsSteps();
  await Observationpage.SelectfirstStepfile();
  await Observationpage.AddAppendix();
  await Observationpage.IdentificationValidation();
  await Observationpage.EnterRecommendation();
  await Observationpage.MoveToTop();
});

Given('the user navigates to the Master module and clicks on the {string} sub-module', async ({Masterchecklist}, arg: string) => {
  await Masterchecklist.Checklink();
});

Then('the user should first clear any existing content before adding a new checklist', async ({Masterchecklist}) => {
  await Masterchecklist.ClearText();
});

Then('click on the {string} button to add a new checklist and complete the form', async ({Masterchecklist}, arg: string) => {
  await Masterchecklist.AddTestTypeBtn();
  await Masterchecklist.TesttypeForm();
});

Then('verify that the checklist is successfully added', async ({Masterchecklist}) => {
  
});

Then('the user can import a checklist using the {string} option, ensuring the file is uploaded correctly', async ({Masterchecklist}, arg: string) => {
  
});





