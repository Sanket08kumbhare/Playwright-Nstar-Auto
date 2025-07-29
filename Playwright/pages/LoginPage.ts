import { test,expect, type Locator, type Page } from '@playwright/test';
import {Fixture} from "playwright-bdd/decorators";

@Fixture("LoginPage")
export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("#emailId");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('.btn-primary');
  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto('http://10.13.90.80/auth/login', { timeout: 30000 }); 
  }

  async enterEmail(): Promise<void> {
    await this.page.waitForTimeout(10000);
    await this.emailInput.fill('sanket.kumbhare@harriersys.com');
  }

  async enterPassword(): Promise<void> {
    await this.passwordInput.fill('N*sanket@2025');
  }
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  // async wrongEmail(): Promise<void> {
  //   await this.emailInput.fill('Testnewuser@gmail.com');
  // }

  // async wrongPassword(): Promise<void> {
  //   await this.passwordInput.fill('SanketTest@123');
  // }
}
