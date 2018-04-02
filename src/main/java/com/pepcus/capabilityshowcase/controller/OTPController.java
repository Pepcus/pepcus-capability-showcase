package com.pepcus.capabilityshowcase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.service.OTPService;

/**
 * 
 * Controller to Send and verify OTP
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@RestController
@RequestMapping("/mail")
public class OTPController 
{
	@Autowired
	private OTPService emailService;
	
	/**
	 * Sending Email 
	 * @param user
	 * @return
	 */
	@PostMapping
	public ResponseEntity<User> sendMail(@RequestBody User user) 
	{
		return new ResponseEntity<User>(emailService.sendMail(user),HttpStatus.OK);
	}	
	
	/**
	 * Verifying OTP
	 * @param user
	 * @return
	 */
	@PostMapping(value="/verify")
	public ResponseEntity<User> verify(@RequestBody User user) 
	{
		return new ResponseEntity<User>(emailService.verifyEmail(user),HttpStatus.ACCEPTED);
	}
}
