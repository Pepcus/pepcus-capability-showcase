package com.pepcus.capabilityshowcase.service;

import org.springframework.stereotype.Service;

import com.pepcus.capabilityshowcase.entity.MailingToolModel;
import com.pepcus.capabilityshowcase.exception.GenericException;
import com.pepcus.capabilityshowcase.util.MailProcessor;

import static com.pepcus.capabilityshowcase.ApplicationConstants.GREETINGS_TEMPLATE;
import static com.pepcus.capabilityshowcase.ApplicationConstants.NOTIFICATION_TEMPLATE;

/**
 * Service class for mail
 * @author SHUBHAM
 * @since 02-04-2018
 * 
 */
@Service
public class MailService 
{
	public MailingToolModel sendEmail(String template, MailingToolModel user) 
	{
		try 
		{
			MailProcessor mail = new MailProcessor();
			if(template.equalsIgnoreCase("Greetings")) 
			{
				mail.sendMail(user.getRecieversEmail(), user.getRecieversName().toUpperCase(), template, GREETINGS_TEMPLATE.replaceAll("Something Name", user.getRecieversName().toUpperCase()), null);
			}
			if(template.equalsIgnoreCase("Notification")) 
			{
				mail.sendMail(user.getRecieversEmail(), user.getRecieversName().toUpperCase(), template, NOTIFICATION_TEMPLATE.replaceAll("Something Name", user.getRecieversName().toUpperCase()).replaceAll("senderName", user.getSenderName().toUpperCase()).replaceAll("designation", user.getSenderDesignation().toUpperCase()), null);
			}
		}
		catch (Exception e) 
		{
			throw new GenericException("Mail cannot be sent : "+ e.toString());
		}
		return user;
	}
}
