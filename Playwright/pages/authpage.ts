import { expect, Locator, Page, ElementHandle } from '@playwright/test';
import { Fixture } from 'playwright-bdd/decorators';

@Fixture("authpage")
export class authpage {
  readonly page: Page;
  readonly authenticaticationpage: Locator;
  readonly loginbtn :Locator;

  constructor(page: Page) {
    this.page = page;
    this.authenticaticationpage= page.getByPlaceholder("Enter your verification code");
    this.loginbtn= page.locator(".btn-primary");

  }

          async authenticaticationpages(): Promise<void>{
            await this.page.pause();
             //await this.page.waitForTimeout(12000);

          }

          async loginbutton(): Promise<void>{
            await this.loginbtn.click();
          }

    
  }