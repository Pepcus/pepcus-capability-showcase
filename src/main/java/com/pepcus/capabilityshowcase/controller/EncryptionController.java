package com.pepcus.capabilityshowcase.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.entity.Encryption;
import com.pepcus.capabilityshowcase.service.EncryptService;
import com.pepcus.capabilityshowcase.util.DeleteTempFile;

import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_ENCRYPTED;

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
	public ResponseEntity<EncryptDecryptFile> ef(@RequestParam("file") MultipartFile file,@RequestParam("key")String key,HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		return new ResponseEntity<EncryptDecryptFile>(eS.encryptFile(file, key), HttpStatus.CREATED);
	}
	
	/**
	 * Download the encrypted file
	 * @param request
	 * @param response
	 * @param fileName
	 * @throws IOException
	 */
	@GetMapping(value="/file")
	public void ee(HttpServletRequest request, HttpServletResponse response, @RequestParam("filename") String fileName) throws IOException
	{
        response.setHeader("Content-disposition","attachment; filename="+fileName); // Used to name the download file and its format

        File my_file = new File(STORE_FILE_TO_BE_ENCRYPTED+"\\E"+fileName); // We are downloading .txt file, in the format of doc with name check - check.doc

        OutputStream out = response.getOutputStream();
        FileInputStream in = new FileInputStream(my_file);
        byte[] buffer = new byte[4096];
        int length;
        while ((length = in.read(buffer)) > 0){
           out.write(buffer, 0, length);
        }
        in.close();
        out.flush();
        DeleteTempFile.deleteTempFiles(STORE_FILE_TO_BE_ENCRYPTED);
	}
}
