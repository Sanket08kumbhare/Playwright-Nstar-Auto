import { expect, Locator, Page, ElementHandle } from '@playwright/test';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("DashboardPage")
export class DashboardPage{
    readonly page: Page;
    readonly Verifythedashboardpagelink :Locator;
    readonly verifythename :Locator;
    
    
    constructor(page: Page) {
    this.page = page;
    this.Verifythedashboardpagelink = page.locator("//a[@href='/main/dashboard']")
    this.verifythename= page.getByText("Welcome to Nstar Dashboard");
}
async dashlink():Promise<void>{
  await this.page.waitForLoadState('domcontentloaded');
  
  //await this.Verifythedashboardpagelink.click()   
}
async checkthedashname(): Promise<void>{
  await this.page.waitForTimeout(4000);
  await expect(this.verifythename).toHaveText("Welcome to Nstar Dashboard")
  //await this.verifythename.highlight()
  console.log('Welcome to Nstar Dashboard')
  await this.page.screenshot({path:'Dashboard-page.png', fullPage: true})
  
}
}