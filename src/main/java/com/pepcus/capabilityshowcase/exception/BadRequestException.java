package com.pepcus.capabilityshowcase.exception;

public class BadRequestException extends RuntimeException
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 758342286647924480L;
	
	public BadRequestException(String message) 
	{
		super(message);
	}
	
}
