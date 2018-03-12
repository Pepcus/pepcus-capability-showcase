package com.pepcus.capabilityshowcase.checker;

import static com.pepcus.capabilityshowcase.ApplicationConstants.otpLength;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.stream.IntStream;

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
			SecureRandom r=SecureRandom.getInstance("SHA1PRNG");	
			IntStream.range(0, otpLength).forEach(i -> otp.append(r.nextInt(10)));
		}
		catch(Exception e) {}
		return otp.toString();
	}
}
