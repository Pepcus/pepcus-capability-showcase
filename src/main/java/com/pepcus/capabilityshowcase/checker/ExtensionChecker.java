package com.pepcus.capabilityshowcase.checker;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.exception.BadRequestException;

/**
 * 
 * Checking
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class ExtensionChecker 
{
	/**
	 * Method to check file extension
	 * @param file
	 * @param extension
	 * @return
	 */
	public static boolean checkFile(MultipartFile file,String extension) 
	{
		String ext1 = FilenameUtils.getExtension(file.getOriginalFilename());
		if(!ext1.equals(extension)) 
		{
			throw new BadRequestException("Only "+extension+" file allowed");
		}
		return true;
	}
}
