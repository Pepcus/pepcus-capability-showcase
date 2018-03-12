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
	 * Using BCRYPT
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String bcryptE(String data) throws NoSuchAlgorithmException 
	{
		BcryptEnc b=new BcryptEnc();
		return b.Bcrypt(data);
	}
	
	/**
	 * Using BASE64
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String base64E(String data) throws NoSuchAlgorithmException 
	{
		Base64Encoding b=new Base64Encoding();
		return b.mimeEncoding(data);
	}
	
	/**
	 * Using PBKDE
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String pbkdE(String data) throws NoSuchAlgorithmException, InvalidKeySpecException 
	{
		PBKD p=new PBKD();
		return p.enc(data);
	}
	
	/**
	 * Using DES
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String desE(String data) throws Exception 
	{
		TrippleDES t=new TrippleDES();
		return t.enc(data);
	}
	
	/**
	 * Using MD5
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String md5E(String data) 
	{
		MD5Encryption m=new MD5Encryption();
		return m.enc(data);
	}
	
	/**
	 * Using SHA-512
	 * @param data
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public String shaE(String data) throws NoSuchAlgorithmException
	{
		SHA s=new SHA();
		return s.encrypt(data);
	}

}
