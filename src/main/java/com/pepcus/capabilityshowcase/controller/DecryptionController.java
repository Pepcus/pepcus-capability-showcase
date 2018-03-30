package com.pepcus.capabilityshowcase.controller;

import static com.pepcus.capabilityshowcase.ApplicationConstants.STORE_FILE_TO_BE_DECRYPTED;

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
import com.pepcus.capabilityshowcase.service.DecryptService;
import com.pepcus.capabilityshowcase.util.DeleteTempFile;

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
	
	/**
	 * Download the decrypted/original file
	 * @param request
	 * @param response
	 * @param fileName
	 * @throws IOException
	 */
	@GetMapping(value="/file")
	public void ee(HttpServletRequest request, HttpServletResponse response, @RequestParam("filename") String fileName) throws IOException
	{
        response.setHeader("Content-disposition","attachment; filename="+fileName); 

        File my_file = new File(STORE_FILE_TO_BE_DECRYPTED+"\\D"+fileName); 

        OutputStream out = response.getOutputStream();
        FileInputStream in = new FileInputStream(my_file);
        byte[] buffer = new byte[4096];
        int length;
        while ((length = in.read(buffer)) > 0){
           out.write(buffer, 0, length);
        }
        in.close();
        out.flush();
        DeleteTempFile.deleteTempFiles(STORE_FILE_TO_BE_DECRYPTED);
	}
	
}
