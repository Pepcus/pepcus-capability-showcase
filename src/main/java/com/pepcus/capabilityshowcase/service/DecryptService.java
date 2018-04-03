package com.pepcus.capabilityshowcase.service;

import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_DECRYPTED;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.entity.Encryption;
import com.pepcus.capabilityshowcase.exception.BadRequestException;
import com.pepcus.capabilityshowcase.service.encryption.AESPassword;
import com.pepcus.capabilityshowcase.service.encryption.Base64Encoding;
import com.pepcus.capabilityshowcase.service.encryption.CryptoTest;
import com.pepcus.capabilityshowcase.service.encryption.TrippleDES;
import com.pepcus.capabilityshowcase.util.CreateDirectory;

/**
 * 
 * Service for Decryption
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class DecryptService 
{
	/**
	 * Takes a string and encrypt it
	 * @param user
	 * @return
	 * @throws Exception
	 */
	public Encryption decryptString(Encryption user) 
	{
		Encryption enc = new Encryption();
		if(user.getAlgorithm().equalsIgnoreCase("aes")) 
		{
			enc.setPassword(AESPassword.decrypt(user.getPassword(), user.getKey()));
			return enc;
		}
		if(user.getAlgorithm().equalsIgnoreCase("TripleDES")) 
		{
			enc.setPassword(TrippleDES.dec(user.getPassword()));
			return enc;
		}
		if(user.getAlgorithm().equalsIgnoreCase("base64")) 
		{
			enc.setPassword(Base64Encoding.mimeDecoding(user.getPassword()));
			return enc;
		}
		throw new BadRequestException("No such Algorithm exists");
	}
	
	/**
	 * Method to decrypt an uploaded file with given key
	 * @param file
	 * @param key
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	public EncryptDecryptFile decryptFile(MultipartFile file,String key) throws IllegalStateException, IOException 
	{
		CreateDirectory.CreateDirectoryIfNotExist(STORE_FILE_TO_BE_DECRYPTED);
		CryptoTest cT=new CryptoTest();
		String filename=file.getOriginalFilename();
		File f=new File(STORE_FILE_TO_BE_DECRYPTED+"//"+filename);
		file.transferTo(f);
		
		return cT.decryptCrypto(key, f,filename);
	}
}
