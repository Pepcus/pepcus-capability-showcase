package com.pepcus.capabilityshowcase.service.encryption;

import org.apache.log4j.Logger;
import static com.pepcus.capabilityshowcase.ApplicationConstants.decryptedFileName;
import static com.pepcus.capabilityshowcase.ApplicationConstants.encryptedFileName;
import static com.pepcus.capabilityshowcase.ApplicationConstants.storeFileToBeDecrypted;
import static com.pepcus.capabilityshowcase.ApplicationConstants.storeFileToBeEncrypted;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.security.Key;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.exception.GenericException;

public class CryptoTest 
{
	static Logger log = Logger.getLogger(CryptoTest.class.getName());
	
    static String fileProcessor(int cipherMode,String key,File inputFile,File outputFile)
    {
        try 
        {
        	Key secretKey = new SecretKeySpec(key.getBytes(), "AES");
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(cipherMode, secretKey);

            FileInputStream inputStream = new FileInputStream(inputFile);
            byte[] inputBytes = new byte[(int) inputFile.length()];
            inputStream.read(inputBytes);

            byte[] outputBytes = cipher.doFinal(inputBytes);

            FileOutputStream outputStream = new FileOutputStream(outputFile);
            outputStream.write(outputBytes);

            inputStream.close();
            outputStream.close();
            
            return "Success";
        }
        catch (Exception e) 
        {
        	log.error(e.getMessage());
            throw new GenericException(e.getMessage());
        }
    }
	
    public EncryptDecryptFile encryptCrypto(String key,String tempZip) 
    {
    	EncryptDecryptFile ed=new EncryptDecryptFile();
    	MD5Encryption m=new MD5Encryption();
    	String secretKey=m.enc(key);
    	File inputFile = new File(tempZip);
		File encryptedFile = new File(storeFileToBeEncrypted+encryptedFileName);
		
		ed.setMessage(CryptoTest.fileProcessor(Cipher.ENCRYPT_MODE,secretKey,inputFile,encryptedFile));
	    return ed;
	
    }
    
    public EncryptDecryptFile decryptCrypto(String key,String encryptedFile) 
    {
    	EncryptDecryptFile ed=new EncryptDecryptFile();
    	MD5Encryption m=new MD5Encryption();
    	String secretKey=m.enc(key);
    	File inputFile = new File(encryptedFile);
    	File decryptedFile = new File(storeFileToBeDecrypted+decryptedFileName);
		
    	ed.setMessage(CryptoTest.fileProcessor(Cipher.DECRYPT_MODE,secretKey,inputFile,decryptedFile));
		return ed;
	   
    }
	
}