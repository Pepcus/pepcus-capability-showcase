package com.pepcus.capabilityshowcase.service;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.Encryption;
import com.pepcus.capabilityshowcase.exception.BadRequestException;
import com.pepcus.capabilityshowcase.service.encryption.CryptoTest;
import com.pepcus.capabilityshowcase.service.encryption.EncryptionService;

import org.apache.log4j.Logger;
/**
 * 
 * Controller to Zip a file
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class EncryptService 
{
	static Logger log = Logger.getLogger(EncryptService.class.getName());
	
	/**
	 * Method to check which algorithm is to be used for hashing
	 * @param user
	 * @return
	 */
	public Encryption saveUser(Encryption user) 
	{
		EncryptionService eS=new EncryptionService();
		
		String algorithm=user.getAlgorithm();
		String data=user.getPassword();
		String encryptedPassword="";
		try 
		{
			if(algorithm.equalsIgnoreCase("aes"))
			{
				encryptedPassword=eS.aesE(data,user.getKey());
			}
			if(algorithm.equalsIgnoreCase("base64")) 
			{
				encryptedPassword=eS.base64E(data);
			}
			if(algorithm.equalsIgnoreCase("bcrypt"))
			{
				encryptedPassword=eS.bcryptE(data);
			}
			if(algorithm.equalsIgnoreCase("blowfish")) 
			{
				encryptedPassword=eS.blow(data);
			}
			if(algorithm.equalsIgnoreCase("TripleDES"))
			{
				encryptedPassword=eS.desE(data);
			}
			if(algorithm.equalsIgnoreCase("PBKD")) 
			{
				encryptedPassword=eS.pbkdE(data);
			}
			if(algorithm.equalsIgnoreCase("md5")) 
			{
				encryptedPassword=eS.md5E(data);
			}
			if(algorithm.equalsIgnoreCase("sha")) 
			{
				encryptedPassword=eS.shaE(data);
			}
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
		}
		if(encryptedPassword.isEmpty()) 
		{
			throw new BadRequestException("No such algorithm Available");
		}
		user.setPassword(encryptedPassword);
		return user;

	}
	
	/**
	 * Method to encrypt a file with the given password
	 * @param file
	 * @param key
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	public File encryptFile(MultipartFile file,String key) throws IllegalStateException, IOException 
	{
		return new CryptoTest().encryptCrypto(key, file.getBytes(),file.getOriginalFilename());
	}
	
}
