import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { authpage } from '../pages/authpage';
import { DashboardPage } from '../pages/DashboardPage';
import { orgpage} from '../pages/orgpage';
import { projectpage } from '../pages/projectpage';
import { testpage } from '../pages/testpage';
import { testmasterpage } from '../pages/testmasterpage';
import { observationpage } from '../pages/observationpage';
import { masterchecklist } from '../pages/masterchecklist';




export type Fixtures = {
  LoginPage: LoginPage;
  Authpage: authpage;
  Dashboardpages: DashboardPage;
  Orgizationpage: orgpage;
  Projectpage: projectpage;
  Testpage: testpage;
  TestMaster: testmasterpage;
  Observationpage: observationpage;
  Masterchecklist: masterchecklist;
 
  
};

export const test = base.extend<Fixtures>({
  LoginPage: async({page},use) => {
    await use(new LoginPage(page));
  },
  Authpage: async({page},use)=>{
    await use(new authpage(page))
  },
  Dashboardpages: async({page},use)=>{
    await use(new DashboardPage(page))
  },
  Orgizationpage: async({page},use)=> {
    await use(new orgpage(page))
  }, 
  Projectpage: async({page},use)=>{
    await use(new projectpage(page))
  }, 
  Testpage: async({page},use)=>{
    await use(new testpage(page))
  },
  TestMaster: async({page}, use)=>{
    await use(new testmasterpage(page))
  },
  Observationpage: async({page},use)=>{
    await use(new observationpage(page))
  },
  Masterchecklist: async({page},use)=>{
    await use(new masterchecklist(page))
  }
  
});

