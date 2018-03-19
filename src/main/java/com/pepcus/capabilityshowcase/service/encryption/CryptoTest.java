package com.pepcus.capabilityshowcase.service.encryption;

import org.apache.log4j.Logger;
import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_DECRYPTED;
import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_ENCRYPTED;
import static com.pepcus.capabilityshowcase.ApplicationConstants.CRYPTO_CIPHER;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.security.Key;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
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
	 * @param outputFile
	 * @return
	 */
    static String fileProcessor(int cipherMode,String key,File inputFile,File outputFile)
    {
        try (FileInputStream inputStream = new FileInputStream(inputFile);FileOutputStream outputStream = new FileOutputStream(outputFile))
        {
        	Key secretKey = new SecretKeySpec(key.getBytes(), CRYPTO_CIPHER);
            Cipher cipher = Cipher.getInstance(CRYPTO_CIPHER);
            cipher.init(cipherMode, secretKey);

            byte[] inputBytes = new byte[(int) inputFile.length()];
            inputStream.read(inputBytes);

            byte[] outputBytes = cipher.doFinal(inputBytes);

            outputStream.write(outputBytes);

            return "Success";
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
     * @param storeFile
     * @return
     */
    public EncryptDecryptFile encryptCrypto(String key,String storeFile,String filename) 
    {
    	EncryptDecryptFile ed=new EncryptDecryptFile();
    	MD5Encryption m=new MD5Encryption();
    	String secretKey=m.enc(key);
    	File inputFile = new File(storeFile);
		File encryptedFile = new File(STORE_FILE_TO_BE_ENCRYPTED+"//"+filename);
		
		ed.setMessage(CryptoTest.fileProcessor(Cipher.ENCRYPT_MODE,secretKey,inputFile,encryptedFile));
		return ed;
    }
    
    /**
     * Decrypting file using key
     * @param key
     * @param encryptedFile
     * @return
     */
    public EncryptDecryptFile decryptCrypto(String key,String encryptedFile,String filename) 
    {
    	EncryptDecryptFile ed=new EncryptDecryptFile();
    	MD5Encryption m=new MD5Encryption();
    	String secretKey=m.enc(key);
    	File inputFile = new File(encryptedFile);
    	File decryptedFile = new File(STORE_FILE_TO_BE_DECRYPTED+"//"+filename);
		
    	ed.setMessage(CryptoTest.fileProcessor(Cipher.DECRYPT_MODE,secretKey,inputFile,decryptedFile));
    	return ed;
    }
	
}