package com.pepcus.capabilityshowcase.service.encryption;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Base64Encoding 
{
	public String mimeEncoding(String data)
    {
        try 
        {
            return Base64.getMimeEncoder().encodeToString(data.getBytes("utf-8"));
        }
        catch (UnsupportedEncodingException ex) 
        {
            Logger.getLogger(Base64Encoding.class.getName()).log(Level.SEVERE, null, ex);
            return ex.getMessage();
        }
    }
	
	public String mimeDecoding(String encryptedString) 
	{
		try 
		{
			byte[] mi=Base64.getMimeDecoder().decode(encryptedString);
	        return new String(mi,"utf-8");
		}
		catch (UnsupportedEncodingException ex) 
        {
            Logger.getLogger(Base64Encoding.class.getName()).log(Level.SEVERE, null, ex);
            return ex.getMessage();
        }
	}
	
	
}
