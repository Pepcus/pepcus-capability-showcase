package com.pepcus.capabilityshowcase.handler;

import org.springframework.core.MethodParameter;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import com.pepcus.capabilityshowcase.controller.EncryptionController;
import com.pepcus.capabilityshowcase.entity.EncryptDecryptFile;
import com.pepcus.capabilityshowcase.entity.Encryption;
import com.pepcus.capabilityshowcase.entity.LogModel;
import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.entity.Zip;
import com.pepcus.capabilityshowcase.exception.ApiErrorResponse;

/**
 * Global response handler for all APIs
 * 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@ControllerAdvice(basePackageClasses=EncryptionController.class)
public class ResponseHandler implements ResponseBodyAdvice<Object> 
{
	/**
	 * 
	 * @param methodParameter
	 * @param request
	 * @return
	 */
	@Override
	public boolean supports(MethodParameter methodParameter, Class<? extends HttpMessageConverter<?>> request) 
	{
		return true;
	}
	
	/**
	 * 
	 * @param body
	 * @param returnType
	 * @param selectedContentType
	 * @param selectedConverterType
	 * @param request
	 * @param response
	 * @return
	 */
	@Override
	public Object beforeBodyWrite(Object body, MethodParameter returnType, MediaType selectedContentType,
			Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request,
			ServerHttpResponse response) 
	{
		if (body instanceof ApiErrorResponse || body instanceof Exception) 
		{
			return body;
		}

		ServletServerHttpRequest httpRequest = (ServletServerHttpRequest) request;
		ServletServerHttpResponse httpResponse = (ServletServerHttpResponse) response;

		ApiResponse apiResponse = new ApiResponse();
		
		int statusCode = httpResponse.getServletResponse().getStatus();
		apiResponse.setCode(String.valueOf(statusCode));
		apiResponse.setStatus(HttpStatus.valueOf(statusCode).name());

		if (httpRequest.getMethod().equals(HttpMethod.POST) && body instanceof Encryption) 
		{
			return body;
		}
		if (httpRequest.getMethod().equals(HttpMethod.POST) && body instanceof EncryptDecryptFile) 
		{
			apiResponse.setMessage("Encryted file successfully created");
			apiResponse.setEd((EncryptDecryptFile) body);
		}
		if (httpRequest.getMethod().equals(HttpMethod.POST) && body instanceof LogModel) 
		{
			apiResponse.setMessage("Log successfully created");
			apiResponse.setLog((LogModel) body);
		}
		
		if (httpRequest.getMethod().equals(HttpMethod.POST) && body instanceof Zip) 
		{
			apiResponse.setMessage("Zip created");
			apiResponse.setZip((Zip) body);
		}
		
		if (httpRequest.getMethod().equals(HttpMethod.POST) && body instanceof User) 
		{
			apiResponse.setMessage("OTP has been Sent to your email : verify it");
			apiResponse.setUse((User) body);
		}
		
		if (httpRequest.getMethod().equals(HttpMethod.POST) && body instanceof String) 
		{
			return body;
		}
		
		return apiResponse;
	}

}