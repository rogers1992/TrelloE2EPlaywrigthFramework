/*
 * Trello Login Page Object
 * This file contains the page object model for interacting with the Trello login page.
 * It provides methods to perform actions like entering email, clicking buttons, etc.
 */

import { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for Trello Login page.
 * Provides methods to interact with login elements and flows.
 */
export class TrelloLoginPage {
    /** The Playwright page instance for interacting with the browser */
    readonly trelloLoginPage: Page;
    
    /** Email input field locator property */
    readonly email: Locator;
    
    /** Continue button locator property */
    readonly continueButton: Locator;

    /** Password input field locator property */   
    readonly password: Locator;

    /** Login button locator property */
    readonly loginButton: Locator;

    /**
     * Initializes the TrelloLoginPage with a page instance
     * @param trelloLoginPage The Playwright page instance
     */
    constructor(trelloLoginPage: Page){
        this.trelloLoginPage = trelloLoginPage;
        this.email = this.trelloLoginPage.getByTestId('username');
        this.continueButton = this.trelloLoginPage.getByRole('button', { name: 'Continue' });
        this.password = this.trelloLoginPage.getByTestId('password');
        this.loginButton = this.trelloLoginPage.getByRole('button', { name: 'Log in' });
    }

    /**
     * Navigates to the Trello login page
     * @param url The URL to navigate to
     */
    async navigateToTrelloLoginPage(url: string) {
        await this.trelloLoginPage.goto(url);
    }
    
    /**
     * Enters the email address into the email input field
     * @param email The email address to enter
     */
    async enterEmail(email: string) {
        // Using getByTestId to target the email input field
        await this.email.fill(email);
    }
    
    /**
     * Clicks the Continue button on the login page
     */
    async clickContinueButton() {
        await this.continueButton.click();
    }

    /**
     * Enters the password into the password input field
     * @param password The password to enter
     */
    async enterPassword(password: string) {
        // Using getByTestId to target the password input field
        await this.password.fill(password);
    }
    
    /**
     * Clicks the Login button on the login page
     */
    async clickLoginButton() {
        await this.loginButton.click();
    }
}