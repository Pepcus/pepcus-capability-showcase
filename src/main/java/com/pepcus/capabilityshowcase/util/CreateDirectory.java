package com.pepcus.capabilityshowcase.util;

import java.io.File;

import com.pepcus.capabilityshowcase.exception.GenericException;

/**
 * Class to create directory for storing temporary files
 * @author SHUBHAM
 * @since 19-03-2018
 */
public class CreateDirectory 
{
	/**
	 * Method which creates directory if not exists
	 * @param folderPath
	 */
	public static void CreateDirectoryIfNotExist(String folderPath) 
    {
		File files = new File(folderPath);
		try  
		{
			files.mkdirs();
		}
		catch(Exception e) 
		{
			throw new GenericException("Directory cannot be created");
		}
    }
}
