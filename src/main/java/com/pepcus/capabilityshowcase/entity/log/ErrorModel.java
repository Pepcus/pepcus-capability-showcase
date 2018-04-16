package com.pepcus.capabilityshowcase.entity.log;

import java.util.List;

import lombok.Data;

/**
 * Class for computing Error data
 * @author SHUBHAM
 * @since 12-04-2018
 */
@Data
public class ErrorModel 
{
	private List<Model> model;

	public ErrorModel(List<Model> list) 
	{
		this.model = list;
	}
}
