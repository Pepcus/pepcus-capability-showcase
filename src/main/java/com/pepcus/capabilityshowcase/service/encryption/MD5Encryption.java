package com.pepcus.capabilityshowcase.service.encryption;

import java.security.MessageDigest;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.IntStream;

import com.pepcus.capabilityshowcase.exception.GenericException;
import static com.pepcus.capabilityshowcase.ApplicationConstants.ALGORITHM_MD5;

/**
 * Encryption using MD5 algorithm
 * @author SHUBHAM
 * @since 07-03-2018
 */
public class MD5Encryption 
{
	/**
	 * Encryption
	 * @param password
	 * @return
	 */
	public static String enc(String password)
	{
        try 
        {
            MessageDigest md = MessageDigest.getInstance(ALGORITHM_MD5);
            md.update(password.getBytes());
            byte[] bytes = md.digest();
            StringBuilder sb = new StringBuilder();
            IntStream.range(0, bytes.length).forEach(i -> sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1)));
            //Get complete hashed password in hex format
            return sb.toString();
        }
        catch (Exception e)
        {
        	Logger.getLogger(MD5Encryption.class.getName()).log(Level.SEVERE, null, e);
            throw new GenericException(e.getMessage());
        }
	}
}
