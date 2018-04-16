package com.pepcus.capabilityshowcase.entity.log;


import java.util.List;

import lombok.Data;

/**
 * Class for computing Info data
 * @author SHUBHAM
 * @since 12-04-2018
 */
@Data
public class InfoModel 
{
	private List<Model> model;

	public InfoModel(List<Model> list) 
	{
		this.model = list;
	}
}