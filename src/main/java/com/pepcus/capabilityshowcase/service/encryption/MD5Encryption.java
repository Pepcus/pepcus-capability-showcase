package com.pepcus.capabilityshowcase.service.encryption;

import java.security.MessageDigest;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.pepcus.capabilityshowcase.exception.GenericException;

public class MD5Encryption 
{
	public String enc(String password)
	{
        try 
        {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(password.getBytes());
            byte[] bytes = md.digest();
            StringBuilder sb = new StringBuilder();
            for(int i=0; i< bytes.length ;i++)
            {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
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
