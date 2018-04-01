package com.pepcus.capabilityshowcase;

import static com.pepcus.capabilityshowcase.ApplicationConstants.TEMP;
import static com.pepcus.capabilityshowcase.ApplicationConstants.ZIP_FILES;
import static com.pepcus.capabilityshowcase.ApplicationConstants.PROTECTED_ZIP;
import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_ENCRYPTED;
import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_DECRYPTED;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pepcus.capabilityshowcase.util.CreateDirectory;
import com.pepcus.capabilityshowcase.util.DeleteTempFile;

/**
 * 
 * Starting Point of the Application
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@SpringBootApplication
public class PepcusCapabilityApplication
{
	public static void main(String[] args) 
	{
		SpringApplication.run(PepcusCapabilityApplication.class, args);
	}
	
	/**
	 * Method to delete Temporary files if they exists
	 */
	@Bean
	public CommandLineRunner run() throws Exception 
	{
		return args -> {
//			DeleteTempFile.deleteTempFiles(TEMP);
//			DeleteTempFile.deleteTempFiles(ZIP_FILES);
//			DeleteTempFile.deleteTempFiles(PROTECTED_ZIP);
//			DeleteTempFile.deleteTempFiles(STORE_FILE_TO_BE_ENCRYPTED);
//			DeleteTempFile.deleteTempFiles(STORE_FILE_TO_BE_DECRYPTED);
			CreateDirectory.CreateDirectoryIfNotExist(TEMP);
			CreateDirectory.CreateDirectoryIfNotExist(ZIP_FILES);
			CreateDirectory.CreateDirectoryIfNotExist(PROTECTED_ZIP);
			CreateDirectory.CreateDirectoryIfNotExist(STORE_FILE_TO_BE_ENCRYPTED);
			CreateDirectory.CreateDirectoryIfNotExist(STORE_FILE_TO_BE_DECRYPTED);
		};
	}
}
