package com.pepcus.capabilityshowcase.service.encryption;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import com.pepcus.capabilityshowcase.service.encryption.EncryptionService;

/**
 * Different types of encryption based on the algorithm
 * @author SHUBHAM
 * @since 07-03-2018	
 */
public class EncryptionService 
{
	/**
	 * Using AES 
	 * @param data
	 * @param key
	 * @return
	 */
	public String aesE(String data,String key)
	{
		return AESPassword.encrypt(data, key);
	}
	
	/**
	 * Using BCRYPT
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String bcryptE(String data) throws NoSuchAlgorithmException 
	{
		return BcryptEnc.Bcrypt(data);
	}
	
	/**
	 * Using BASE64
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String base64E(String data)
	{
		return Base64Encoding.mimeEncoding(data);
	}
	
	/**
	 * Using PBKDE
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String pbkdE(String data) throws NoSuchAlgorithmException, InvalidKeySpecException 
	{
		return PBKD.enc(data);
	}
	
	/**
	 * Using DES
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String desE(String data) throws Exception 
	{
		return TrippleDES.enc(data);
	}
	
	/**
	 * Using MD5
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String md5E(String data) 
	{
		return MD5Encryption.enc(data);
	}
	
	/**
	 * Using SHA-512
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String shaE(String data) throws NoSuchAlgorithmException
	{
		return SHA.encrypt(data);
	}

}
