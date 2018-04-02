package com.pepcus.capabilityshowcase.entity;

import lombok.Data;

/**
 * 
 * Class for sending Mail
 * @author SHUBHAM JAIN
 * @since 02-04-2018
 */
@Data
public class MailingToolModel 
{
	private String recieversEmail;

	private String recieversName;
	
	private String senderName;
	
	private String senderDesignation;
}
