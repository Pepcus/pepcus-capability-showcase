package com.pepcus.capabilityshowcase.service;

import static com.pepcus.capabilityshowcase.ApplicationConstants.protectedZip;
import static com.pepcus.capabilityshowcase.ApplicationConstants.zipFiles;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.checker.DeleteTempFile;
import com.pepcus.capabilityshowcase.checker.SaveTempFiles;
import com.pepcus.capabilityshowcase.entity.Zip;
import com.pepcus.capabilityshowcase.exception.GenericException;

import net.lingala.zip4j.core.ZipFile;
import net.lingala.zip4j.exception.ZipException;
import net.lingala.zip4j.model.ZipParameters;
import net.lingala.zip4j.util.Zip4jConstants;

/**
 * 
 * Controller to Zip a file
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class ZipService 
{
	/**
	 * Method takes the files and process them
	 * @param files
	 * @param key
	 * @return
	 */
	public Zip getZip(List<MultipartFile> files,String key) 
	{
		Zip z=new Zip();
		SaveTempFiles save=new SaveTempFiles();
		ArrayList<File> filesToAdd=save.saveZipFile(files, zipFiles);
		if(!filesToAdd.isEmpty()) 
		{
			String zipping=createProtectedZip(key,filesToAdd);
			
			DeleteTempFile.deleteTempFiles(zipFiles);
			//delete.deleteTempFiles(protectedZip);
			
			z.setMessage(zipping);
			return z;
		}
		z.setMessage("Zip cannot be created");
		return z;
	}
	
	/**
	 * Create the Protected Zip 
	 * @param key
	 * @param addedFiles
	 * @return
	 */
	private String createProtectedZip(String key,ArrayList<File> addedFiles) 
	{
		try 
        {
			//This is name and path of zip file to be created
            ZipFile zipFile = new ZipFile(protectedZip+"//temp.zip");
            
            //Initiate Zip Parameters which define various properties
            ZipParameters parameters = new ZipParameters();
            
            parameters.setCompressionMethod(Zip4jConstants.COMP_DEFLATE); // set compression method to deflate compression
            
            //DEFLATE_LEVEL_FASTEST     - Lowest compression level but higher speed of compression
            //DEFLATE_LEVEL_FAST        - Low compression level but higher speed of compression
            //DEFLATE_LEVEL_NORMAL  - Optimal balance between compression level/speed
            //DEFLATE_LEVEL_MAXIMUM     - High compression level with a compromise of speed
            //DEFLATE_LEVEL_ULTRA       - Highest compression level but low speed
            parameters.setCompressionLevel(Zip4jConstants.DEFLATE_LEVEL_NORMAL);
            
            //Set the encryption flag to true
            parameters.setEncryptFiles(true);
            
            //Set the encryption method to AES Zip Encryption
            parameters.setEncryptionMethod(Zip4jConstants.ENC_METHOD_AES);
            
            //AES_STRENGTH_128 - For both encryption and decryption
            //AES_STRENGTH_192 - For decryption only
            //AES_STRENGTH_256 - For both encryption and decryption
            //Key strength 192 cannot be used for encryption. But if a zip file already has a
            //file encrypted with key strength of 192, then Zip4j can decrypt this file
            parameters.setAesKeyStrength(Zip4jConstants.AES_STRENGTH_256);
            
            //Setting password
            parameters.setPassword(key);
             
            //Now add files to the zip file
            zipFile.addFiles(addedFiles, parameters);
        }
        catch (ZipException e)
        {
        	Logger.getLogger(ZipService.class.getName()).log(Level.SEVERE, null, e);
            throw new GenericException(e.getMessage());
        }
		return "Successfully Created";
	}
	
}
