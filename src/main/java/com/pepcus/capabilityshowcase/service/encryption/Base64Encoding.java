package com.pepcus.capabilityshowcase.service.encryption;

import java.util.Base64;

import com.pepcus.capabilityshowcase.exception.BadRequestException;

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
	public static String mimeEncoding(String data)
    {
        try 
        {
            return Base64.getMimeEncoder().encodeToString(data.getBytes(BASE_64_ENCODING_UTF));
        }
        catch (Exception ex) 
        {
        	throw new BadRequestException("String cannot be encrypted :" + ex.getMessage());
        }
    }
	
	/**
	 * Decoding using 'mime'
	 * @param encryptedString
	 * @return
	 */
	public static String mimeDecoding(String encryptedString) 
	{
		try 
		{
			byte[] mi=Base64.getMimeDecoder().decode(encryptedString);
	        return new String(mi,BASE_64_ENCODING_UTF);
		}
		catch (Exception ex) 
        {
            throw new BadRequestException("Invalid encrypted string");
        }
	}
}
