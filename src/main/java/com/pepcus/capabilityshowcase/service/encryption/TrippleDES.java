package com.pepcus.capabilityshowcase.service.encryption;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;

import com.pepcus.capabilityshowcase.exception.BadRequestException;

import static com.pepcus.capabilityshowcase.ApplicationConstants.CRYPTO_CIPHER;

/**
 * DES Algorithm
 * @author SHUBHAM
 * @since 07-03-2018
 */
public class TrippleDES 
{
	static Cipher cipher;  
	static SecretKey secretKey;
	
	/**
	 * Returning Encrypting data
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException 
	 * @throws NoSuchPaddingException 
	 * @throws BadPaddingException 
	 * @throws IllegalBlockSizeException 
	 * @throws InvalidKeyException 
	 * @throws Exception
	 */
    public String enc(String data) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException 
    {
        KeyGenerator keyGenerator = KeyGenerator.getInstance(CRYPTO_CIPHER);
        keyGenerator.init(128); // block size is 128bits
        secretKey = keyGenerator.generateKey();
        
        cipher = Cipher.getInstance(CRYPTO_CIPHER); //SunJCE provider AES algorithm, mode(optional) and padding schema(optional)  

        return encrypt(data, secretKey);
    }
    
    /**
     * returning Decrypting data
     * @param encryptedText
     * @return
     * @throws BadPaddingException 
     * @throws IllegalBlockSizeException 
     * @throws InvalidKeyException 
     * @throws Exception
     */
    public String dec(String encryptedText) 
    {
    	return decrypt(encryptedText, secretKey);
    }
    
    /**
     * Encryption algorithm 
     * @param plainText
     * @param secretKey
     * @return
     * @throws InvalidKeyException 
     * @throws BadPaddingException 
     * @throws IllegalBlockSizeException 
     * @throws Exception
     */
    public static String encrypt(String plainText, SecretKey secretKey) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException 
    {
        byte[] plainTextByte = plainText.getBytes();
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedByte = cipher.doFinal(plainTextByte);
        Base64.Encoder encoder = Base64.getEncoder();
         
        return encoder.encodeToString(encryptedByte);	//encryptedText 
    }

    /**
     * Decryption algorithm
     * @param encryptedText
     * @param secretKey
     * @return
     * @throws InvalidKeyException 
     * @throws BadPaddingException 
     * @throws IllegalBlockSizeException 
     * @throws Exception
     */
    public static String decrypt(String encryptedText, SecretKey secretKey) 
    {
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] encryptedTextByte = decoder.decode(encryptedText);
        try 
        {
        	cipher.init(Cipher.DECRYPT_MODE, secretKey);
        	byte[] decryptedByte = cipher.doFinal(encryptedTextByte);
        	return new String(decryptedByte);				//decryptedText
        }
        catch(Exception e) 
        {
        	throw new BadRequestException("Invalid encrypted string");
        }
    }
}
