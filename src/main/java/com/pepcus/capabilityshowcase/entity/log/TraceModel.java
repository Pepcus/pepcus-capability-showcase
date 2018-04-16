package com.pepcus.capabilityshowcase.entity.log;

import java.util.List;

import lombok.Data;

/**
 * Class for computing Trace data
 * @author SHUBHAM
 * @since 12-04-2018
 */
@Data
public class TraceModel 
{
	private List<Model> model;
	
	public TraceModel(List<Model> list) 
	{
		this.model = list;
	}
}
