package com.pepcus.capabilityshowcase.entity;

import java.time.LocalTime;

import lombok.Data;

/**
 * 
 * Class for User verifying with otp
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Data
public class User
{
	private String email;
	
	private String name;
	
	private String number;
	
	private String passwod;
	
	private String otp;
	
	private LocalTime expiryTime;
}
