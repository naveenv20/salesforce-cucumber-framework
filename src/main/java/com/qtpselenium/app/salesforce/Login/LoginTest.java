package com.qtpselenium.app.salesforce.Login;





import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

//Step
public class LoginTest extends WebConnector{

	


	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_salesforce(String url,String browser){
		
		System.out.println("I am going to salesforce"+url+"    "+browser);
		openbrowser(browser);
		navigate(url);
	}	
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text){
		System.out.println("Entering obj"+object+" and text :"+text);
		type(object, text);
		
	}
	
	@And("^I click on the \"([^\"]*)\"")
public void I_clickonbutton(String object){
	System.out.println("clicking button"+object);
	click(object);
	}
	
	@Then("^\"([^\"]*)\" Text box should present$")
	public void then_login_should_be(String object_identifier) throws InterruptedException{
		Thread.sleep(10000);
		System.out.println("then login should be"+object_identifier);
		boolean actual=elementcount(object_identifier);
		boolean expected=false;
		Assert.assertEquals(expected, actual);
	}
	
}
