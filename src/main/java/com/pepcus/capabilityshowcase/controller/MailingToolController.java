package com.pepcus.capabilityshowcase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.pepcus.capabilityshowcase.entity.MailingToolModel;
import com.pepcus.capabilityshowcase.service.MailService;

/**
 * Controller for mailing tool component
 * @author SHUBHAM
 * @since 01-04-2018
 */
@RestController
@RequestMapping("/mailingtool")
public class MailingToolController 
{
	@Autowired
	private MailService mailService;
	
	@PostMapping 
	public ResponseEntity<MailingToolModel> sendMail(@RequestParam("template") String template, @RequestBody MailingToolModel user) 
	{
		return new ResponseEntity<MailingToolModel>(mailService.sendEmail(template,user),HttpStatus.OK);
	} 
}
