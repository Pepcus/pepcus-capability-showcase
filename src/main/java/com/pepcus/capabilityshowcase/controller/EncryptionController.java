package com.pepcus.capabilityshowcase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.entity.Encryption;
import com.pepcus.capabilityshowcase.service.EncryptService;

/**
 * 
 * Controller to Encrypt a file
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@RestController
@RequestMapping("/encrypt")
public class EncryptionController 
{
	@Autowired
	EncryptService eS;
	
	/**
	 * Takes a string and encrypt it
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@PostMapping
	public ResponseEntity<Encryption> e(@RequestBody Encryption user) throws Exception 
	{
		return new ResponseEntity<Encryption>(eS.saveUser(user), HttpStatus.CREATED);
	}
	
	/**
	 * Takes a file and password , and encrypt it
	 * @param file
	 * @param key
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value="/file")
	public ResponseEntity<EncryptDecryptFile> ef(@RequestParam("file") MultipartFile file,@RequestParam("key")String key) throws Exception 
	{
		return new ResponseEntity<EncryptDecryptFile>(eS.encryptFile(file, key), HttpStatus.CREATED);
	}
	
}
