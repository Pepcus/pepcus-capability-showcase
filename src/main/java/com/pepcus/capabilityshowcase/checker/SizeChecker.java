package com.pepcus.capabilityshowcase.checker;

import static com.pepcus.capabilityshowcase.ApplicationConstants.FILE_SIZE;

import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.exception.FileTooLargeException;

/**
 * 
 * Checking size
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class SizeChecker 
{	
	/**
	 * Checking Size of the file
	 * @param file
	 * @return
	 */
	public static boolean checkSize(MultipartFile file) 
	{
		if(FILE_SIZE<=file.getSize()) 
		{
			throw new FileTooLargeException("File size should be less than 2MB i.e., "+FILE_SIZE+" bytes");
		}
		return true;
	}
}
