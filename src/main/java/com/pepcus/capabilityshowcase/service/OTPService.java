package com.pepcus.capabilityshowcase.service;

import static com.pepcus.capabilityshowcase.ApplicationConstants.EMAIL_MESSAGE;
import static com.pepcus.capabilityshowcase.ApplicationConstants.EMAIL_SUBJECT;
import static com.pepcus.capabilityshowcase.ApplicationConstants.EXP_MIN;

import java.security.NoSuchAlgorithmException;
import java.time.LocalTime;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.exception.GenericException;
import com.pepcus.capabilityshowcase.util.MailProcessor;
import com.pepcus.capabilityshowcase.util.OTPGeneration;
import static com.pepcus.capabilityshowcase.ApplicationConstants.OTP_TEMPLATE;
/**
 * 
 * Service to Send and verify OTP 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class OTPService 
{
    /**
     * Method to send Email with OTP in it
     * @param user
     * @return
     * @throws NoSuchAlgorithmException
     */
    public User sendMail(User user) 
    {
    	String otp = OTPGeneration.otpGeneration();
    	user.setOtp(otp);
    	LocalTime endTime=java.time.LocalTime.now().plusMinutes(EXP_MIN);
    	user.setExpiryTime(endTime);
    	try 
    	{
    		MailProcessor mail = new MailProcessor();
    		mail.sendMail(user.getEmail(), EMAIL_SUBJECT, EMAIL_MESSAGE, OTP_TEMPLATE.replaceAll("0000", otp).replaceAll("UserName", StringUtils.capitalize(user.getName().toLowerCase())), null);
    	}
    	catch(Exception e) 
    	{
    		throw new GenericException("OTP cannot be sent : "+e.toString());
    	}
    	return user;
    }
}