package com.pepcus.capabilityshowcase.controller;

import java.io.IOException;

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
import com.pepcus.capabilityshowcase.service.DecryptService;

/**
 * 
 * Controller to Decrypt a file
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@RestController
@RequestMapping("/decrypt")
public class DecryptionController 
{
	@Autowired
	private DecryptService dS;
	
	/**
	 * Method which decrypt an encrypted string
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@PostMapping
	public ResponseEntity<Encryption> decrypt(@RequestBody Encryption user)  
	{
		return new ResponseEntity<Encryption>(dS.decryptString(user), HttpStatus.CREATED);
	}
	
	/**
	 * Method which takes encrypted file and decrypt it
	 * @param file
	 * @param key
	 * @return
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */
	@PostMapping(value="/file")
	public ResponseEntity<EncryptDecryptFile> decryptFile(@RequestParam("file") MultipartFile file,@RequestParam("key")String key) throws IllegalStateException, IOException 
	{
		return new ResponseEntity<EncryptDecryptFile>(dS.decryptFile(file, key), HttpStatus.CREATED);
	}
	
}
