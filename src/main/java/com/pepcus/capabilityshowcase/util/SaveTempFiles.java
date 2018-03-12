package com.pepcus.capabilityshowcase.util;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

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
	 * @param path
	 * @return
	 */
	public ArrayList<File> saveZipFile(List<MultipartFile> file,String path)
	{
			ArrayList<File> filesToAdd = new ArrayList<>();
			
			IntStream.range(0, file.size()).forEach(i -> {
				String filename=file.get(i).getOriginalFilename();
				File f=new File(path+"\\"+filename);
				try
				{
					file.get(i).transferTo(f);
				}
				catch (Exception e) 
				{
					throw new BadRequestException("Files cannot be saved");
				} 
				filesToAdd.add(f);	//files added
			});
			
			return filesToAdd;
	}
}
