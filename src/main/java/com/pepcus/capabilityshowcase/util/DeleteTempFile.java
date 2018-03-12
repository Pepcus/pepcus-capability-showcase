package com.pepcus.capabilityshowcase.util;

import java.io.File;

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
		File folder = new File(pathFolder);
		for (File file : folder.listFiles()) 
		{
			file.delete();
	  	}
		//Files.deleteIfExists(Paths.get(tempZip));
	}
}
