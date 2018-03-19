package com.pepcus.capabilityshowcase.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.LogModel;
import com.pepcus.capabilityshowcase.service.LogService;

/**
 * 
 * Controller to Generate log report
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@RestController
@RequestMapping("/log")
public class LogController 
{
	@Autowired
	LogService lS;
	
	/**
	 * Takes a log file and sorting parameters (if given)
	 * @param file
	 * @param allRequestParams
	 * @return
	 */
	@PostMapping
	public ResponseEntity<LogModel> createLogs(@RequestParam("file") MultipartFile file,@RequestParam Map<String,String> allRequestParams) 
	{
		return new ResponseEntity<LogModel>(lS.generateLogger(file,allRequestParams), HttpStatus.CREATED);
	}
	
}
