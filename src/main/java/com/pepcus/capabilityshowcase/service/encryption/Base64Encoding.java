package com.pepcus.capabilityshowcase.service.encryption;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;
import static com.pepcus.capabilityshowcase.ApplicationConstants.BASE_64_ENCODING_UTF;

/**
 * 
 * Encryption / Decryption with Base64Encoding 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class Base64Encoding 
{
	/**
	 * Encoding using 'mime'
	 * @param data
	 * @return
	 */
	public String mimeEncoding(String data)
    {
        try 
        {
            return Base64.getMimeEncoder().encodeToString(data.getBytes(BASE_64_ENCODING_UTF));
        }
        catch (UnsupportedEncodingException ex) 
        {
            Logger.getLogger(Base64Encoding.class.getName()).log(Level.SEVERE, null, ex);
            return ex.getMessage();
        }
    }
	
	/**
	 * Decoding using 'mime'
	 * @param encryptedString
	 * @return
	 */
	public String mimeDecoding(String encryptedString) 
	{
		try 
		{
			byte[] mi=Base64.getMimeDecoder().decode(encryptedString);
	        return new String(mi,BASE_64_ENCODING_UTF);
		}
		catch (UnsupportedEncodingException ex) 
        {
            Logger.getLogger(Base64Encoding.class.getName()).log(Level.SEVERE, null, ex);
            return ex.getMessage();
        }
	}
}
