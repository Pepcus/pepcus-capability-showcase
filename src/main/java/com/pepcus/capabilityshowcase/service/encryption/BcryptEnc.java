package com.pepcus.capabilityshowcase.service.encryption;

import java.security.NoSuchAlgorithmException;

/**
 * Encryption using Bcrypt of JAVA
 * @author SHUBHAM
 * @since 12-03-2018
 */
public class BcryptEnc 
{
	/**
	 * taking user string and return encrypted string 
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String Bcrypt(String data) throws NoSuchAlgorithmException
    {
        return BCrypt.hashpw(data, BCrypt.gensalt(12));
    }
}
