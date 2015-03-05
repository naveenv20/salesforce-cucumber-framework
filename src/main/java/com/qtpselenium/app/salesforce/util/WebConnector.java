package com.qtpselenium.app.salesforce.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Hashtable;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class WebConnector {

	//Logging
	//Intial properties file
	//intial test data reading
	//Selenium layer
	//similar to hybrid framework..... we can this as ketwords.java
	Properties OR=null;
	Properties config=null;
	public Hashtable<String,String> objdata;
	Object[][] data;
	
	public  WebConnector(){
		if(OR==null){
			System.out.println("12345");
			OR= new Properties();
			try {
				FileInputStream fs= new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\config\\environment.properties");
				OR.load(fs);
				objdata=util.getobjectdata("LoginTest", "Suite");
				data=util.getdata("LoginTest", "Suite");
			} catch (Exception e) {
				System.out.println("Error in intialisin the prop and objdata file");
				e.printStackTrace();
			}	
		System.out.println(objdata.get("Login_Button"));
		Hashtable<String,String>abc=(Hashtable<String, String>) data[0][0];
		System.out.println(abc.get("Username"));
		
		
		}
	}
	
	
	public void openbrowser(){
		
	}
	
	public void navigate(){
		
	}
public void click(String identifier, WebDriver d1){
		
		d1.findElement(By.xpath(objdata.get(identifier))).click();
		
	}
	
public void type(String identifier, String datatotype,WebDriver d1){
	d1.findElement(By.xpath(objdata.get(identifier))).clear();
	d1.findElement(By.xpath(objdata.get(identifier))).sendKeys(datatotype);
}

public void select(String identifier, String valuetoselect,WebDriver d1){
WebElement 	e=d1.findElement(By.xpath(objdata.get(identifier)));
Select element= new Select(e);
element.selectByVisibleText(valuetoselect);
}

public void selectradio(String identifier, String valuetoselect,WebDriver d1){
	//not implemented fully , check this *****
	d1.findElement(By.xpath(objdata.get(identifier))).click();
}
	
	
}
