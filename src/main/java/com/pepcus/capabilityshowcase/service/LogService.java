package com.pepcus.capabilityshowcase.service;

import static org.apache.commons.lang3.StringUtils.substringAfter;
import static org.apache.commons.lang3.StringUtils.substringBeforeLast;
import static org.apache.commons.lang3.StringUtils.substringBetween;

import java.io.IOException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.checker.ExtensionChecker;
import com.pepcus.capabilityshowcase.checker.SizeChecker;
import com.pepcus.capabilityshowcase.entity.LogModel;
import com.pepcus.capabilityshowcase.exception.BadRequestException;

/**
 * 
 * Controller to generate Log report 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class LogService 
{
	/**
	 * Method to check which type of Sorting is to be done
	 * @param file
	 * @param allRequestParams
	 * @return
	 * @throws IOException 
	 */
	public LogModel generateLogger(MultipartFile file,Map<String,String> allRequestParams)
	{
		String completeData=validateFileAndReturnData(file);
		
		if(allRequestParams.keySet().isEmpty()) 
		{
			return generateAll(completeData);
		}
		if(allRequestParams.containsKey("startdate") && !allRequestParams.get("startdate").isEmpty() || allRequestParams.containsKey("starttime") && !allRequestParams.get("starttime").isEmpty()) 
		{
			String start="";
			if(allRequestParams.get("startdate")!=null) 
			{
				start=allRequestParams.get("startdate");
			}
			if(allRequestParams.get("starttime")!=null) 
			{
				start=allRequestParams.get("starttime");
			}
			return generateSortedStart(completeData,start);
		}
		if(allRequestParams.containsKey("enddate") && !allRequestParams.get("enddate").isEmpty() || allRequestParams.containsKey("endtime") && !allRequestParams.get("endtime").isEmpty()) 
		{
			String end="";
			if(allRequestParams.get("enddate")!=null) 
			{
				end=allRequestParams.get("enddate");
			}
			if(allRequestParams.get("endtime")!=null) 
			{
				end=allRequestParams.get("endtime");
			}
			return generateSortedEnd(completeData,end);
		}
		if(allRequestParams.containsKey("startdate") && !allRequestParams.get("startdate").isEmpty() &&  allRequestParams.containsKey("enddate") && !allRequestParams.get("enddate").isEmpty() || allRequestParams.containsKey("starttime") && !allRequestParams.get("starttime").isEmpty() && allRequestParams.containsKey("endtime") && !allRequestParams.get("endtime").isEmpty()) 
		{
			String start="";
			String end="";
			
			if(allRequestParams.get("startdate")!=null && allRequestParams.get("enddate")!=null) 
			{
				start=allRequestParams.get("startdate");
				end=allRequestParams.get("enddate");
			}
			if(allRequestParams.get("starttime")!=null && allRequestParams.get("endtime")!=null) 
			{
				start=allRequestParams.get("starttime");
				end=allRequestParams.get("endtime");
			}
			return generateSortedInInterval(completeData, start, end);
		}
		throw new BadRequestException("No such mapping exists");
	}
	
	/**
	 * Generating report for complete file
	 * @param file
	 * @return
	 */
	private LogModel generateAll(String completeData) 
	{
		return generateLogs(completeData);
	}
	
	/**
	 * Generating report for a specific Interval
	 * @param completeData2
	 * @param start
	 * @param end
	 * @return
	 */
	private LogModel generateSortedInInterval(String completeData,String start,String end) 
	{
		return generateLogs(generateSortedLog(completeData,start,end));
	}
	
	/**
	 * Generating report from a starting point
	 * @param file
	 * @param start
	 * @return
	 */
	private LogModel generateSortedStart(String completeData,String start) 
	{
		return generateLogs(generateSortedLogStart(completeData,start));
	}
	
	/**
	 * Generating report from a ending point
	 * @param file
	 * @param end
	 * @return
	 */
	private LogModel generateSortedEnd(String completeData,String end) 
	{
		return generateLogs(generateSortedLogEnd(completeData,end));
	}
	
	/**
	 * Counting the Logs from the data
	 * @param completeData
	 * @return
	 */
	private LogModel generateLogs(String completeData) 
	{
		LogModel logModel=new LogModel();
        logModel.setDebug(StringUtils.countOccurrencesOf(completeData, "DEBUG"));
        logModel.setError(StringUtils.countOccurrencesOf(completeData, "ERROR"));
        logModel.setInfo(StringUtils.countOccurrencesOf(completeData, "INFO"));
        logModel.setTrace(StringUtils.countOccurrencesOf(completeData, "TRACE"));
        logModel.setWarn(StringUtils.countOccurrencesOf(completeData, "WARN"));
        return logModel;
	}
	
	/**
	 * Sorting on the basis of starting and ending point
	 * @param completeData
	 * @param start
	 * @param end
	 * @return
	 */
	private String generateSortedLog(String completeData,String start,String end) 
	{
		return substringBetween(completeData,start,end);
	}
	
	/**
	 * Sorting on the basis of starting point
	 * @param completeData
	 * @param start
	 * @return
	 */
	private String generateSortedLogStart(String completeData,String start) 
	{
        return substringAfter(completeData, start);
	}
	
	/**
	 * Sorting on the basis of Ending point
	 * @param completeData
	 * @param end
	 * @return
	 */
	private String generateSortedLogEnd(String completeData,String end) 
	{
		return substringBeforeLast(completeData, end);
	}
	
	/**
	 * Validating file by extension and size 
	 * and returning the logger file data
	 * @param file
	 * @return
	 * @throws IOException 
	 */
	private String validateFileAndReturnData(MultipartFile file) 
	{
		try 
		{
			if(file.isEmpty() && ExtensionChecker.checkFile(file,"log") && SizeChecker.checkSize(file)) 
			{
				byte[] bytes = file.getBytes();
	            return new String(bytes);		//returning the complete data from the given file
			}
		}
		catch(Exception e) 
		{
			Logger.getLogger(LogService.class.getName()).log(Level.SEVERE, null, e);
		}
		throw new BadRequestException("File is not valid");
	}
	
}
