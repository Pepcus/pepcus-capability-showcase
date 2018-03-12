package com.pepcus.capabilityshowcase.service.encryption;

import java.security.NoSuchAlgorithmException;

public class BcryptEnc 
{
	public String Bcrypt(String data) throws NoSuchAlgorithmException
    {
        return BCrypt.hashpw(data, BCrypt.gensalt(12));
    }
}
