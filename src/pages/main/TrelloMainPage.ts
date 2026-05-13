import { Page, Locator } from "@playwright/test";

export class TrelloMainPage {

    readonly trelloMainPage : Page;
    
    constructor(trelloMainPage: Page){
        this.trelloMainPage = trelloMainPage;
    }
    

}