package com.pepcus.capabilityshowcase.service.encryption;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.IntStream;

import static com.pepcus.capabilityshowcase.ApplicationConstants.SECURE_GENERATION;
import static com.pepcus.capabilityshowcase.ApplicationConstants.ALGORITHM_SHA;;
/**
 * SHA algorithm
 * @author SHUBHAM
 * @since 07-03-2018
 */
public class SHA 
{
	/**
	 * Returning generated password
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String encrypt(String data) throws NoSuchAlgorithmException 
	{
        byte[] salt = getSalt();
         
        return get_SHA_512_SecurePassword(data, salt);
    }
 
	/**
	 * Encrypting password
	 * @param passwordToHash
	 * @param salt
	 * @return
	 */
    private static String get_SHA_512_SecurePassword(String passwordToHash, byte[] salt)
    {
        String generatedPassword = null;
        try 
        {
            MessageDigest md = MessageDigest.getInstance(ALGORITHM_SHA);
            md.update(salt);
            byte[] bytes = md.digest(passwordToHash.getBytes());
            StringBuilder sb = new StringBuilder();
            IntStream.range(0, bytes.length).forEach(i -> sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1)));
            generatedPassword = sb.toString();
        }
        catch (NoSuchAlgorithmException e)
        {
        	Logger.getLogger(SHA.class.getName()).log(Level.SEVERE, null, e);
        }
        return generatedPassword;
    }
    
    //Add salt
    /**
     * Adding salt to the password
     * @return
     * @throws NoSuchAlgorithmException
     */
    private static byte[] getSalt() throws NoSuchAlgorithmException
    {
        SecureRandom sr = SecureRandom.getInstance(SECURE_GENERATION);
        byte[] salt = new byte[16];
        sr.nextBytes(salt);
        return salt;
    }
}
