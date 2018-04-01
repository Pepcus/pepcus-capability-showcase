package com.pepcus.capabilityshowcase.entity;

import lombok.Data;

/**
 * 
 * Class for Encrypt String
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Data
public class Encryption 
{
	private String password;
	private String algorithm;
	private String key;		// In case of AES encoding or decoding
}
