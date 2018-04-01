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
	public static final int OTP_LENGTH=6;	
	public static final long EXP_MIN=5;		//OTP validity
	public static final String SECURE_GENERATION="SHA1PRNG";
	
	/**
	 * Sending Email subject and message  
	 */
	public static final String EMAIL_SUBJECT="OTP Validation";
	public static final String EMAIL_MESSAGE=" Verify your email. : "
			+ "`this otp is valid for 5 miniutes . . `";
	
	/**
	 * For CSV to JSON controller 
	 */
	public static final String TEMP="C:\\pcs\\temp\\csv";		//For CSV to JSON 
	
	/**
	 * For protected Zip  
	 */
	public static final String ZIP_FILES="C:\\pcs\\temp\\zipfiles";	//Storing temporary uploading file
	public static final String PROTECTED_ZIP="C:\\pcs\\temp\\protectedzip";	//Storing protected Zip

	/**
	 * For Encrypted file
	 */
	public static final String STORE_FILE_TO_BE_ENCRYPTED="C:\\pcs\\temp\\Encrypt";
	public static final String STORE_FILE_TO_BE_DECRYPTED="C:\\pcs\\temp\\Decrypt";
	//public static final String ENCRYPTED_FILE_NAME="\\file.encrypted";
	//public static final String DECRYPTED_FILE_NAME="\\file.decrypted";
	
	/**
	 * For Logger file 
	 */
	public static final Integer FILE_SIZE=2000000;	//2mb
	
	/**
	 * Encryption/Decryption techniques
	 */
	public static final String BASE_64_ENCODING_UTF = "utf-8";
	public static final String CRYPTO_CIPHER = "AES";
	public static final String ALGORITHM_MD5 ="MD5";
	public static final String ALGORITHM_SHA ="SHA-512";
	public static final String ALGORITHM_PBKD ="PBKDF2WithHmacSHA1";
	public static final String CIPHER_INSTANCE = "AES/ECB/PKCS5Padding";
	public static final String MESSAGE_DIGEST_INSTANCE = "SHA-1";
	
	public static final String TEMPLATE = "Dear Something Name,"

			+"Pepcus wishes you a very Happy Diwali..!!"

			+"May the festival of lights be the harbinger of joy and prosperity. As the holy occasion of Diwali is here and the atmosphere is filled with the spirit of mirth and love, here's hoping this festival of beauty brings your way, bright sparkles of contentment, that stay with you through the days ahead."

			+"Corporate Office"
			+"Pepcus Software Services Pvt. Ltd."
			+"201, Balaji Corporate, New Palasia"
			+"Indore, Madhya Pradesh"
			+"452001, India. Contact us" 
			+"You can call us at:"
			+"Mobile : +91-9754550505"
			+"Phone : +91-731-4218554"
			+"Email: info@pepcus.com"
			+"www.pepcus.com";
}
