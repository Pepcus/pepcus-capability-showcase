package com.pepcus.capabilityshowcase.controller;

import java.io.IOException;

import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.service.CsvToJsonService;

/**
 * 
 * Controller to convert from csv to json
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@RestController
@RequestMapping("/csv")
public class CSVController 
{
	@Autowired
	private CsvToJsonService csv;
	
	/**
	 * 
	 * @param file
	 * @return
	 * @throws IOException 
	 */
	@PostMapping(produces=MediaType.APPLICATION_JSON)
	 public String handleCSVUpload(@RequestParam("file") MultipartFile file) throws IOException
	 {
		return csv.getFile(file);
	 }
}
