package com.qtpselenium.app.salesforce.util;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;


public class util {
	
	
	
	
	
	
	public static List<Hashtable<String,String>> getdata(String testcasename, String suitename){
		
		
		
		Xls_Reader xls_suite_testcase=new Xls_Reader(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\testdata\\"+suitename+".xlsx");
		int rnum;
		for(rnum=1;rnum<=xls_suite_testcase.getRowCount("Data");rnum++){
			if(xls_suite_testcase.getCellData("Data", 0, rnum).equalsIgnoreCase(testcasename)){
				System.out.println("Test case found   :"+testcasename);
				break;
		}
			
		}	
				int testdataheaderrownum=rnum+1;
				int testdatacolumnstart=0;
				int  testdatacolumnend=0;
				int testdatastartnum=testdataheaderrownum+1;
				int testdataendnum=testdatastartnum+1;
				int rowsofdata=0;
			
				
				
				//no.of columsn calculating
				while(!(xls_suite_testcase.getCellData("Data", testdatacolumnend, testdataheaderrownum)=="")){
				testdatacolumnend++;
				}
				System.out.println("Total columns of test data are  ::"+testdatacolumnend);
				//no of. rows of test data for each test case
				while(!(xls_suite_testcase.getCellData("Data", 0,testdataendnum)=="")){
					rowsofdata++;	testdataendnum++;
				}
				System.out.println("Total rows of test data are  ::"+(rowsofdata+1));
				
				List<Hashtable<String,String>> data1=new ArrayList<Hashtable<String,String>>();
				int r=0;
		
			
			for(int rownum=testdataheaderrownum ;rownum<testdatastartnum+rowsofdata;rownum++){
				Hashtable<String,String> datarow=new Hashtable<String,String>();
				for(int colnum=testdatacolumnstart;colnum<testdatacolumnend;colnum++){
					
					//System.out.println(xls_suite_testcase.getCellData("Data", colnum, testdataheaderrownum));
				//	System.out.println(xls_suite_testcase.getCellData("Data", colnum, rownum+1));
				
				datarow.put(xls_suite_testcase.getCellData("Data", colnum, testdataheaderrownum), xls_suite_testcase.getCellData("Data", colnum, rownum+1));
			
			}
			data1.add(datarow);
				//data1[r][0]=datarow;
				r++;
			}
				
				
				
			System.out.println("Hello");	
				
	
			return data1;
			}	
			
		

		
		
	public static Hashtable<String, String> getobjectdata(String testcasename, String suitename){
		Xls_Reader xls_suite_testcase=new Xls_Reader(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\testdata\\"+suitename+".xlsx");
		
		int rownum;
		for( rownum=0;rownum<xls_suite_testcase.getRowCount("ObjectData");rownum++){
			if(xls_suite_testcase.getCellData("ObjectData", 0, rownum).equalsIgnoreCase(testcasename))
				break;
			
		}
		
		int objectstartrownum=rownum+2;
		int objectendrownum=objectstartrownum;
		int objectscount=0;
		
		while(!(xls_suite_testcase.getCellData("ObjectData", 0, objectendrownum).equalsIgnoreCase(""))){
			objectscount++;objectendrownum++;
		}
		
		Hashtable<String, String> objecthash=new Hashtable<String, String>();
		for(int rnum=objectstartrownum;rnum<objectendrownum;rnum++){
			objecthash.put(xls_suite_testcase.getCellData("ObjectData", 0, rnum), xls_suite_testcase.getCellData("ObjectData", 1, rnum));
		}
		
		
	System.out.println(objecthash);	
		return objecthash;
		
		
	}


}
