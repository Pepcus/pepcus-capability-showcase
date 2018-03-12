package com.pepcus.capabilityshowcase.service;

import static com.pepcus.capabilityshowcase.ApplicationConstants.storeFileToBeDecrypted;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.service.encryption.CryptoTest;

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
	 * Method to decrypt an uploaded file with given key
	 * @param file
	 * @param key
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	public EncryptDecryptFile decryptFile(MultipartFile file,String key) throws IllegalStateException, IOException 
	{
		CryptoTest cT=new CryptoTest();
		String filename=file.getOriginalFilename();
		file.transferTo(new File(storeFileToBeDecrypted+filename));
		return cT.decryptCrypto(key, storeFileToBeDecrypted+filename);
	}
}
