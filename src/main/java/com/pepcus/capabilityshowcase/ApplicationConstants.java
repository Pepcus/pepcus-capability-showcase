package com.pepcus.capabilityshowcase;

/**
 * 
 * All the Constants used in the Application
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class ApplicationConstants 
{
	/**
	 * For OTP controller 
	 */
	public static final int otpLength=6;	
	public static final long exp_min=5;		//OTP validity
	
	/**
	 * Sending Email subject and message  
	 */
	public static final String emailSubject="OTP Validation";
	public static final String emailMessage=" Verify your email. : "
			+ "`this otp is valid for 5 miniutes . . `";
	
	/**
	 * For CSV to JSON controller 
	 */
	public static final String temp="E:\\Boot\\UtilityPepcus\\logs\\temp\\csv";		//For CSV to JSON 
	
	/**
	 * For protected Zip  
	 */
	public static final String zipFiles="E:\\Boot\\UtilityPepcus\\logs\\temp\\zipFiles";	//Storing temporary uploading file
	public static final String protectedZip="E:\\Boot\\UtilityPepcus\\logs\\temp\\protectedZip";	//Storing protected Zip

	/**
	 * For Encrypted file
	 */
	public static final String storeFileToBeEncrypted="E:\\Boot\\UtilityPepcus\\logs\\temp\\Enc\\";
	public static final String storeFileToBeDecrypted="E:\\Boot\\UtilityPepcus\\logs\\temp\\Enc\\";
	public static final String encryptedFileName="zip.encrypted";
	public static final String decryptedFileName="decrypted.zip";
	
	/**
	 * For Logger file 
	 */
	public static final Integer FILE_SIZE=2000000;	//2mb
}
