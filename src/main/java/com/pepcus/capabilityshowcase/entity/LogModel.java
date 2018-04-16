package com.pepcus.capabilityshowcase.entity;

import com.pepcus.capabilityshowcase.entity.log.DebugModel;
import com.pepcus.capabilityshowcase.entity.log.ErrorModel;
import com.pepcus.capabilityshowcase.entity.log.InfoModel;
import com.pepcus.capabilityshowcase.entity.log.TraceModel;
import com.pepcus.capabilityshowcase.entity.log.WarnModel;

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
	private DebugModel debug;

	private InfoModel info;

	private ErrorModel error;

	private WarnModel warn;
	
	private TraceModel trace;
}
