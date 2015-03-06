package com.qtpselenium.app.salesforce.Login;



import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

//Step
public class LoginTest {

WebConnector W1= new WebConnector();


	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_salesforce(String url,String browser){
		
		System.out.println("I am going to salesforce"+url+"    "+browser);
		W1.openbrowser(browser);
		W1.navigate(url);
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text){
		System.out.println("Entering obj"+object+" and text :"+text);
	}
	
	@And("^I click on the \"([^\"]*)\"")
public void I_clickonbutton(String object){
	System.out.println("clicking button"+object);	
	}
	
	@Then("^Login should be \"([^\"]*)\"$")
	public void then_login_should_be(String mess){
		System.out.println("then login should be"+mess);	
	}
	
}
