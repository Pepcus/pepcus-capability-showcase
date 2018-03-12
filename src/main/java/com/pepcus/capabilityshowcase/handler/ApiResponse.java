package com.pepcus.capabilityshowcase.handler;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.entity.Encryption;
import com.pepcus.capabilityshowcase.entity.LogModel;
import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.entity.Zip;

import lombok.Data;

/**
 * Class used when API return response
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 */
@Data
@JsonInclude(Include.NON_EMPTY)
public class ApiResponse 
{	
	private String status;
	private String code;
	private Encryption user;
	private LogModel log;
	private Zip zip;
	private User use;
	private EncryptDecryptFile ed;
	private String message;
}
