package com.pepcus.capabilityshowcase.entity.log;

import java.util.List;

import lombok.Data;

/**
 * Class for computing Debug data
 * @author SHUBHAM
 * @since 12-04-2018
 */
@Data
public class DebugModel 
{
	private List<Model> model;
	
	public DebugModel(List<Model> model) 
	{
		this.model = model;
	}
}