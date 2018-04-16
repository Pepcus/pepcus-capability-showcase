package com.pepcus.capabilityshowcase.entity.log;

import lombok.Data;

/**
 * Class with log Details 
 * @author SHUBHAM
 * @since 13-04-2018
 */
@Data
public class Model 
{
	private Integer Id;
	private String heading;
	private String message;
	
	public Model(Integer Id, String heading, String message) 
	{
		this.Id = Id;
		this.heading = heading;
		this.message = message;
	}
}
