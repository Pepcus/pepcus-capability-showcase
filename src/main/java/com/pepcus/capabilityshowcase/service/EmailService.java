package com.pepcus.capabilityshowcase.service;

import static com.pepcus.capabilityshowcase.ApplicationConstants.EMAIL_MESSAGE;
import static com.pepcus.capabilityshowcase.ApplicationConstants.EMAIL_SUBJECT;
import static com.pepcus.capabilityshowcase.ApplicationConstants.EXP_MIN;

import java.security.NoSuchAlgorithmException;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.exception.AuthorizationFailedException;
import com.pepcus.capabilityshowcase.repository.UserRepository;
import com.pepcus.capabilityshowcase.util.OTPGeneration;

/**
 * 
 * Service to Send and verify OTP 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class EmailService 
{
	
	@Autowired
	private UserRepository userRepository;
	
    private JavaMailSender javaMailSender;
    
    @Autowired
    public EmailService(JavaMailSender javaMailSender) 
    {
        this.javaMailSender = javaMailSender;
    }
    
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
    	
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		
		mailMessage.setTo(user.getEmail());
		mailMessage.setSubject(EMAIL_SUBJECT);
		mailMessage.setText("Hey! "+user.getName()+ EMAIL_MESSAGE +" Your OTP : "+otp);
		
		javaMailSender.send(mailMessage);
		
		return userRepository.save(user);
    }
    
    /**
     * Method to verify the OTP
     * @param user
     * @return
     */
    public User verifyEmail(User user) 
    {
    	User u=userRepository.findByEmail(user.getEmail());
    	
    	if(u==null) 
    	{
    		throw new AuthorizationFailedException("Email does not match !!!");
    	}
    	
    	LocalTime Time=java.time.LocalTime.now();	//Time at which user enters otp
    	//LocalTime endingTime=u.getExpiryTime();		//Expiry time of otp
    								
    	if(Time.isAfter(u.getExpiryTime())) 
    	{
    		throw new AuthorizationFailedException("OTP Expired!!! Please login again ");
    	}
    	
    	if(!user.getOtp().equals(u.getOtp())) 
    	{
    		throw new AuthorizationFailedException("OTP does not match !!!");
    	}
    	
    	return u;
    }
}