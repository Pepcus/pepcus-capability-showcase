package com.pepcus.capabilityshowcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.Zip;
import com.pepcus.capabilityshowcase.service.ZipService;

/**
 * 
 * Controller to Zip a file
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@RestController
@RequestMapping("/zip")
public class ZipController 
{
	@Autowired
	ZipService zS;
	
	/**
	 * 
	 * @param files
	 * @param key
	 * @return
	 */
	@PostMapping
	public ResponseEntity<Zip> zip(@RequestParam("key") String key,@RequestParam("file") List<MultipartFile> files) 
	{
		return new ResponseEntity<Zip>(zS.getZip(files, key),HttpStatus.CREATED);
	}
}
