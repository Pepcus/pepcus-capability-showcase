package com.pepcus.capabilityshowcase.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import static com.pepcus.capabilityshowcase.ApplicationConstants.SAMPLE_LOG;
import com.pepcus.capabilityshowcase.exception.GenericException;

/**
 * Class for using sample log file
 * @author SHUBHAM
 * @since 03-04-2018
 */
public class UseSampleLogger 
{
	/**
	 * Returns the sample file data
	 * @return
	 */
	public List<String> getSampleData()
	{
		try 
		{
	    	Resource resource = new ClassPathResource(SAMPLE_LOG);		    
			BufferedReader br = new BufferedReader(new InputStreamReader(resource.getInputStream()));
			return br.lines().collect(Collectors.toList());
		}
		catch (Exception e) 
		{
			throw new GenericException(e.getMessage());
		}
	}
}
