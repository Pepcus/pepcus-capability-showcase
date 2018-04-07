package com.pepcus.capabilityshowcase.service.encryption;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.log4j.Logger;
import static com.pepcus.capabilityshowcase.ApplicationConstants.CRYPTO_CIPHER;

import java.io.File;
import java.security.Key;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import com.pepcus.capabilityshowcase.exception.GenericException;

/**
 * Encrypting / Decrypting file using Crypto - cipher method 
 * @author SHUBHAM
 * @since 12-03-2018
 */
public class CryptoTest 
{
	static Logger log = Logger.getLogger(CryptoTest.class.getName());
	
	/**
	 * Method performing Encryption and Decryption of file
	 * @param cipherMode
	 * @param key
	 * @param inputFile
	 * @param outputFileExtension
	 * @return
	 */
    static File fileProcessor(int cipherMode,String key,byte[] inputFile,String outputFileExtension)
    {
        try
        {
        	File responseFile = File.createTempFile("fileResponse", outputFileExtension);
        	Key secretKey = new SecretKeySpec(key.getBytes(), CRYPTO_CIPHER);
            Cipher cipher = Cipher.getInstance(CRYPTO_CIPHER);
            cipher.init(cipherMode, secretKey);

            byte[] outputBytes = cipher.doFinal(inputFile);
            FileUtils.writeByteArrayToFile(responseFile, outputBytes);
            
            return responseFile;
        }
        catch (Exception e) 
        {
        	log.error(e.getMessage());
            throw new GenericException("File not valid");
        }
    }
	
   /**
    * Encrypting file using a key
    * @param key
    * @param inputFileBytes
    * @param filename
    * @return
    */
    public File encryptCrypto(String key,byte[] inputFileBytes,String filename) 
    {
		return CryptoTest.fileProcessor(Cipher.ENCRYPT_MODE,MD5Encryption.enc(key),inputFileBytes,FilenameUtils.getExtension(filename));
    }
    
    /**
     * Decrypting file using key
     * @param key
     * @param inputFileBytes
     * @param filename
     * @return
     */
    public File decryptCrypto(String key,byte[] inputFileBytes,String filename) 
    {
    	return CryptoTest.fileProcessor(Cipher.DECRYPT_MODE,MD5Encryption.enc(key),inputFileBytes,FilenameUtils.getExtension(filename));
    }
	
}