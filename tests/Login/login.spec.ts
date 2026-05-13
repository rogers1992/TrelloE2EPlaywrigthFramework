import { test, expect } from "@playwright/test";
import { TrelloLoginPage } from "../../src/pages/trelloLoginPage";
import { PublicMainPage } from "../../src/pages/PublicMainPage";


test("should navigate to the login and login with valid credentials", async ({ page }) => {
    /** Creatinig a new instance for PublicMainPage 
     * Going to Login Page
    */
    const publicMainPage = new PublicMainPage(page);
    await publicMainPage.navigateToPublicMainPage(`${process.env.TRELLO_URL}`);
    await publicMainPage.clickLoginButton();
    /** Filling username and password */
    const trelloLoginPage = new TrelloLoginPage(page);
    await trelloLoginPage.enterEmail(`${process.env.TRELLO_USERNAME}`);
    await trelloLoginPage.clickContinueButton();
    await trelloLoginPage.enterPassword(`${process.env.TRELLO_PASSWORD}`);
    await trelloLoginPage.clickLoginButton();

    
});
