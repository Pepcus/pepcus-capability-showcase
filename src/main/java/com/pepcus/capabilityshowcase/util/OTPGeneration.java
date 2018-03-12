package com.pepcus.capabilityshowcase.util;

import static com.pepcus.capabilityshowcase.ApplicationConstants.OTP_LENGTH;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.stream.IntStream;
import static com.pepcus.capabilityshowcase.ApplicationConstants.SECURE_GENERATION;
/**
 * 
 * OTP generation
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class OTPGeneration 
{
	/**
	 * Method to generate OTP  
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public static String otpGeneration() 
	{
		StringBuilder otp=new StringBuilder();
		try 
		{
			SecureRandom r=SecureRandom.getInstance(SECURE_GENERATION);	
			IntStream.range(0, OTP_LENGTH).forEach(i -> otp.append(r.nextInt(10)));
		}
		catch(Exception e) {}
		return otp.toString();
	}
}
