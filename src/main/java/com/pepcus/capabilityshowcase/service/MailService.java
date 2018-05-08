package com.pepcus.capabilityshowcase.service;

import org.apache.commons.lang3.StringUtils;
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
				mail.sendMail(user.getRecieversEmail(),user.getRecieversName().toUpperCase(), "", GREETINGS_TEMPLATE.replaceAll("Something Name", StringUtils.capitalize(user.getRecieversName().toLowerCase())), null);
			}
			if(template.equalsIgnoreCase("Notification")) 
			{
				mail.sendMail(user.getRecieversEmail(), user.getRecieversName().toUpperCase(), "", NOTIFICATION_TEMPLATE.replaceAll("Something Name", StringUtils.capitalize(user.getRecieversName().toLowerCase())).replaceAll("senderName", StringUtils.capitalize(user.getSenderName().toLowerCase())).replaceAll("designation", user.getSenderDesignation().toUpperCase()), null);
			}
		}
		catch (Exception e) 
		{
			throw new GenericException("Mail cannot be sent : "+ e.toString());
		}
		return user;
	}
}
