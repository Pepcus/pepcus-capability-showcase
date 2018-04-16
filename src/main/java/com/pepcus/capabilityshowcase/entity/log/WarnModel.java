package com.pepcus.capabilityshowcase.entity.log;

import java.util.List;

import lombok.Data;

/**
 * Class for computing Warn data
 * @author SHUBHAM
 * @since 12-04-2018
 */
@Data
public class WarnModel 
{
	private List<Model> model;
	
	public WarnModel(List<Model> list) 
	{
		this.model = list;
	}
}