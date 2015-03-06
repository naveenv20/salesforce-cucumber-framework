package com.qtpselenium.app.salesforce.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Hashtable;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
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
	List<Hashtable<String,String>> data;
	WebDriver d1;
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
		
		System.out.println(data.get(0).get("Username"));
		
		
		}
	}
	
	
	public void openbrowser(String browser){
		if(data.get(0).get(browser).equalsIgnoreCase("Mozilla")){
			d1=new FirefoxDriver();
			d1.manage().window().maximize();
			d1.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}
	
	public void navigate(String URL){
		d1.get(data.get(0).get(URL));
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
