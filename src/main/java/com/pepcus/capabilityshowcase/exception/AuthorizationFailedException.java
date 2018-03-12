package com.pepcus.capabilityshowcase.exception;

public class AuthorizationFailedException extends RuntimeException 
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AuthorizationFailedException(String message) 
	{
		super(message);
	}

}