package com.pepcus.capabilityshowcase.util;

import java.io.File;

import com.pepcus.capabilityshowcase.exception.GenericException;

/**
 * 
 * Deleting temporary files
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class DeleteTempFile 
{
	/**
	 * Deleting files from the specified folder
	 * @param pathFolder
	 */
	public static void deleteTempFiles(String pathFolder) 
	{
		try 
		{
			File folder = new File(pathFolder);
			for (File file : folder.listFiles()) 
			{
				file.delete();
		  	}
		}
		catch(Exception e) 
		{
			throw new GenericException("File not found");
		}
		//Files.deleteIfExists(Paths.get(tempZip));
	}
}
