package com.pepcus.capabilityshowcase.util;

import java.io.InputStream;

import org.apache.commons.io.IOUtils;
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
	public String getSampleData()
	{
		try 
		{
	    	Resource resource = new ClassPathResource(SAMPLE_LOG);		    
			InputStream data = resource.getInputStream();
			return IOUtils.toString(data);
		}
		catch (Exception e) 
		{
			throw new GenericException(e.getMessage());
		}
		
	}
}
