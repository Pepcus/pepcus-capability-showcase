package com.pepcus.capabilityshowcase.entity;

import lombok.Data;

/**
 * 
 * Class for Logger
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Data
public class LogModel 
{
	private Integer debug;

	private Integer info;

	private Integer error;

	private Integer warn;
	
	private Integer trace;
}
