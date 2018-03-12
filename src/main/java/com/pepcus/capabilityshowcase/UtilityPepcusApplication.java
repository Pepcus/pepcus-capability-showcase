package com.pepcus.capabilityshowcase;

import static com.pepcus.capabilityshowcase.ApplicationConstants.TEMP;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.pepcus.capabilityshowcase.repository.UserRepository;
import com.pepcus.capabilityshowcase.util.DeleteTempFile;

/**
 * 
 * Starting Point of the Application
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class UtilityPepcusApplication implements CommandLineRunner
{
	
	public static void main(String[] args) 
	{
		SpringApplication.run(UtilityPepcusApplication.class, args);
	}
	
	/**
	 * Method to delete Temporary files if they exists
	 */
	@Override
	public void run(String... args) throws Exception {
		DeleteTempFile.deleteTempFiles(TEMP);	//uploaded CSV file
        //d.deleteTempFiles(zipFiles);
        //d.deleteTempFiles(protectedZip);	
	}
	
}
