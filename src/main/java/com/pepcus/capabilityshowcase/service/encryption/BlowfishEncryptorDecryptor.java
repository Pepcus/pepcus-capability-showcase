package com.pepcus.capabilityshowcase.service.encryption;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import com.pepcus.capabilityshowcase.exception.GenericException;

import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

import static com.pepcus.capabilityshowcase.ApplicationConstants.BLOWFISH_ALGO;
import static com.pepcus.capabilityshowcase.ApplicationConstants.SECURE_GENERATION;

/**
 * Class for encrypting and decrypting String using Blowfish algorithm
 * @author SHUBHAM
 * @since 04-03-2018
 */
public class BlowfishEncryptorDecryptor 
{
	byte[] skey = new byte[1000];
    String skeyString;
    static byte[] raw;
    String inputMessage, encryptedData, decryptedMessage;
    
    public BlowfishEncryptorDecryptor() 
    {
    	generateSymmetricKey();
    }
    
    /**
     * Encrypting user data 
     * @param userPassword
     * @return
     */
    public String encryptData(String userPassword) 
    {
    	try
        {
            byte[] ibyte = userPassword.getBytes();
            byte[] ebyte = encrypt(raw, ibyte);
            return new String(ebyte);
        }
        catch(Exception e) 
        {
        	Logger.getLogger(BlowfishEncryptorDecryptor.class.getName()).log(Level.SEVERE, null, e);
        	throw new GenericException("Error in encrypting data : " + e.getMessage());
        }
    }
    
    /**
     * Decrypting user data 
     * @param userPassword
     * @return
     */
    public String decryptData(String encryptedPassword) 
    {
    	try 
    	{
    		byte[] dbyte = decrypt(raw, encryptedPassword.getBytes());
            return new String(dbyte);
    	}
    	catch(Exception e) 
    	{
    		Logger.getLogger(BlowfishEncryptorDecryptor.class.getName()).log(Level.SEVERE, null, e);
        	throw new GenericException("Error in decrypting data : " + e.getMessage());
    	}
    }
    
    /**
     * Generating Secret Symmetric key
     */
    private void generateSymmetricKey() 
    {
        try 
        {
            Random r = new Random();
            String knum = String.valueOf(r.nextInt(10000));
            byte[] knumb = knum.getBytes();
            skey = getRawKey(knumb);
            skeyString = new String(skey);
        }
        catch (Exception e) 
        {
        	Logger.getLogger(BlowfishEncryptorDecryptor.class.getName()).log(Level.SEVERE, null, e);
        }
    }
    
    /**
     * Getting raw key (default bytes for encoding and decoding)
     * @param seed
     * @return
     * @throws NoSuchAlgorithmException
     */
    private static byte[] getRawKey(byte[] seed) throws NoSuchAlgorithmException
    {
        KeyGenerator kgen = KeyGenerator.getInstance(BLOWFISH_ALGO);
        SecureRandom sr = SecureRandom.getInstance(SECURE_GENERATION);
        sr.setSeed(seed);
        kgen.init(128, sr); // 128, 256 and 448 bits may not be available
        SecretKey skey = kgen.generateKey();
        raw = skey.getEncoded();
        return raw;
    }
    
    /**
     * Creating an encrypt byte array
     * @param raw
     * @param clear
     * @return
     * @throws NoSuchAlgorithmException
     * @throws NoSuchPaddingException
     * @throws InvalidKeyException
     * @throws IllegalBlockSizeException
     * @throws BadPaddingException
     */
    private static byte[] encrypt(byte[] raw, byte[] clear) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException
    {
        SecretKeySpec skeySpec = new SecretKeySpec(raw, BLOWFISH_ALGO);
        Cipher cipher = Cipher.getInstance(BLOWFISH_ALGO);
        cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
        byte[] encrypted = cipher.doFinal(clear);
        return encrypted;
    }
    
    /**
     * Creating a byte array for decryption
     * @param raw
     * @param encrypted
     * @return
     * @throws Exception
     */
    private static byte[] decrypt(byte[] raw, byte[] encrypted) throws Exception 
    {
        SecretKeySpec skeySpec = new SecretKeySpec(raw, BLOWFISH_ALGO);
        Cipher cipher = Cipher.getInstance(BLOWFISH_ALGO);
        cipher.init(Cipher.DECRYPT_MODE, skeySpec);
        byte[] decrypted = cipher.doFinal(encrypted);
        return decrypted;
    }
}
