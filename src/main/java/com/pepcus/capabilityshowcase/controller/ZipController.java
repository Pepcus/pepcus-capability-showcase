
package com.pepcus.capabilityshowcase.controller;

import static com.pepcus.capabilityshowcase.ApplicationConstants.ZIP_NAME;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	private static File responseZip;
	
	/**
	 * 
	 * @param files
	 * @param key
	 * @return
	 */
	@PostMapping
	public ResponseEntity<String> zip(@RequestParam("key") String key,@RequestParam("file") MultipartFile[] files) 
	{
		responseZip = zS.getZip(new ArrayList<MultipartFile>(Arrays.asList(files)), key);
		return new ResponseEntity<String>("Zip created successfully",HttpStatus.CREATED);
	}
	
	/**
	 * Download the protected zip 
	 * @param request
	 * @param response
	 * @throws IOException
	 */
	@GetMapping
	public void zip(HttpServletRequest request, HttpServletResponse response) throws IOException
	{
        response.setHeader("Content-disposition","attachment; filename="+ZIP_NAME); // Used to name the download file and its format

        OutputStream out = response.getOutputStream();
        FileInputStream in = new FileInputStream(responseZip);
        byte[] buffer = new byte[4096];
        int length;
        while ((length = in.read(buffer)) > 0){
           out.write(buffer, 0, length);
        }
        in.close();
        out.flush();
	}
}
