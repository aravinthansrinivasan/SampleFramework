package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends WebdriverSetup
{
	public LoginPage(WebDriver driver) {
		super(driver);
	}

	By TxtUserName = By.id("username");
	By TxtPassword = By.id("password");
	By BtnLogin = By.id("Login");
	By TxtErrorMsg = By.id("error");

	public String GetCurrentPageTitle() {
		return driver.getTitle();
	}

	public String GetInvalidUserErrorMsg() {
		return driver.findElement(TxtErrorMsg).getText();
	}
	public void SendKeysUserName(String value) {
		driver.findElement(TxtUserName).sendKeys(value);
	}

	public void SendKeysPassword(String value) {
		driver.findElement(TxtPassword).sendKeys(value);
	}

	public void ClickLoginButton() {
		driver.findElement(BtnLogin).click();
	}


}
