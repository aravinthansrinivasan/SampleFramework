package steps;

import static org.testng.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Dashboard;
import pages.LoginPage;
import tests.TestBase;

public class LoginSteps extends TestBase{
	
	
	Dashboard dashboard = new Dashboard(getDriver());
	LoginPage loginPage= new LoginPage(getDriver());;

	@Given("^I am on the Login page of the Sales Force Application$")
    public void i_am_on_the_login_page_of_the_sales_force_application()  {
		String CurrentPageTitle = loginPage.GetCurrentPageTitle();
	assertEquals(CurrentPageTitle, "Login | Salesforce", "Successfully Navigated to Login Page");
    }

	
	 @When("^I enter valid username (.+)$")
	    public void i_enter_valid_username(String username) throws Throwable {
		 loginPage.SendKeysUserName(username);
	    }

	    @When("^I enter valid password (.+)$")
	    public void i_enter_valid_password(String password) throws Throwable {
	    	loginPage.SendKeysPassword(password);
	    }

	    @When("^I enter invalid username(.+)$")
	    public void i_enter_invalid_username(String username) throws Throwable {
	    	loginPage.SendKeysUserName(username);
	    }

	    @When("^I enter invalid password (.+)$")
	    public void i_enter_invalid_password(String password) throws Throwable {
	    	loginPage.SendKeysPassword(password);
	    }
   
    @Then("^I will be navigated to the DashBoard Page$")
    public void i_will_be_navigated_to_the_dashboard_page()  {
    	assertEquals(dashboard.GetCurrentPageTitle(), "Recently Viewed | Contacts | Salesforce", "Successfully Navigated to Dashboard Page");
    }

   
       @Then("^Contacts tab will be displayed by default$")
    public void contacts_tab_will_be_displayed_by_default() {
    	assertEquals(dashboard.GetCurrentPageTitle(), "Recently Viewed | Contacts | Salesforce", "Successfully Navigated to Dashboard Page");
    }
    
   
    @Then("^I will receive the error message \"([^\"]*)\"$")
    public void i_will_receive_the_error_message_something(List<String> list1) throws Throwable {
    	assertEquals(loginPage.GetInvalidUserErrorMsg(), "Please check your username and password. If you still can't log in, contact your Salesforce administrator.", "Error Msg Displayed");
    }

    

}
