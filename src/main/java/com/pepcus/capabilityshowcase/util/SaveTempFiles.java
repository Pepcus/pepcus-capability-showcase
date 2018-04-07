package com.pepcus.capabilityshowcase.util;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.exception.BadRequestException;

/**
 * 
 * Saving the uploaded files
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class SaveTempFiles 
{
	/**
	 * Taking list of files and adding them to a list
	 * @param file
	 * @return
	 */
	public ArrayList<File> saveZipFile(List<MultipartFile> file)
	{
			ArrayList<File> filesToAdd = new ArrayList<>();
			
			IntStream.range(0, file.size()).forEach(i -> {
				
				String filename=file.get(i).getOriginalFilename();
				try
				{
					File f = File.createTempFile(FilenameUtils.removeExtension(filename), "."+FilenameUtils.getExtension(filename));
		            FileUtils.writeByteArrayToFile(f, file.get(i).getBytes());
					filesToAdd.add(f);	//files added
				}
				catch (Exception e) 
				{
					throw new BadRequestException("Files cannot be saved : "+ e.getMessage());
				}
			});
			
			return filesToAdd;
	}
}
