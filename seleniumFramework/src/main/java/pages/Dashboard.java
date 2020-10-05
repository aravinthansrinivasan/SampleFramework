package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Dashboard extends WebdriverSetup {
		
	public Dashboard(WebDriver driver) {
        super(driver);
    }

	public String GetCurrentPageTitle() {
		return driver.getTitle();
	}
	
	
}
