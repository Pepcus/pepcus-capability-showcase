package com.pepcus.capabilityshowcase.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Global exception handler for all APIs
 * 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@ControllerAdvice 
@RestController
public class ApiExceptionHandler 
{
	/**
	 * Method used to handle {@link BadRequestException}
	 * 
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ BadRequestException.class })
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ApiErrorResponse handleBadRequestException(HttpServletRequest req, BadRequestException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.BAD_REQUEST.name());
		response.setStatus(HttpStatus.BAD_REQUEST.value());
		response.setUrl(req.getRequestURI());
		return response;
	}
	
	/**
	 * Method used to handle {@link DataNotFoundException}
	 * 
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ DataNotFoundException.class })
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ResponseBody
	public ApiErrorResponse handleDataNotFoundException(HttpServletRequest req, DataNotFoundException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.NOT_FOUND.name());
		response.setStatus(HttpStatus.NOT_FOUND.value());
		response.setUrl(req.getRequestURI());
		return response;
	}

	/**
	 * Method used to handle {@link FileNotSupportedException}
	 * 
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ FileNotSupportedException.class })
	@ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
	@ResponseBody
	public ApiErrorResponse handleFileNotSupportedException(HttpServletRequest req, FileNotSupportedException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.METHOD_NOT_ALLOWED.name());
		response.setStatus(HttpStatus.METHOD_NOT_ALLOWED.value());
		response.setUrl(req.getRequestURI());
		return response;
	}
	
	/**
	 * Method used to handle {@link FileTooLargeException}
	 * 
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ FileTooLargeException.class })
	@ResponseStatus(HttpStatus.PAYLOAD_TOO_LARGE)
	@ResponseBody
	public ApiErrorResponse handleFileTooLargeException(HttpServletRequest req, FileTooLargeException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.PAYLOAD_TOO_LARGE.name());
		response.setStatus(HttpStatus.PAYLOAD_TOO_LARGE.value());
		response.setUrl(req.getRequestURI());
		return response;
	}
	
	/**
	 * Method used to handle {@link AuthorizationFailedException}
	 * 
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ AuthorizationFailedException.class })
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ApiErrorResponse handleAuthorizationFailedException(HttpServletRequest req, AuthorizationFailedException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.UNAUTHORIZED.name());
		response.setStatus(HttpStatus.UNAUTHORIZED.value());
		response.setUrl(req.getRequestURI());
		return response;
	}
	
	/**
	 * Method used to handle {@link GenericException}
	 * 
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ GenericException.class })
	@ResponseStatus(HttpStatus.FORBIDDEN)
	@ResponseBody
	public ApiErrorResponse handleGenericException(HttpServletRequest req, GenericException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.FORBIDDEN.name());
		response.setStatus(HttpStatus.FORBIDDEN.value());
		response.setUrl(req.getRequestURI());
		return response;
	}
	
	/**
	 * Method used to handle {@link IllegalArgumentException}
	 * @param req
	 * @param ex
	 * @return
	 */
	@ExceptionHandler({ IllegalArgumentException.class })
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ResponseBody
	public ApiErrorResponse IllegalArgumentException(HttpServletRequest req, IllegalArgumentException ex) 
	{
		ApiErrorResponse response = new ApiErrorResponse();
		response.setMessage(ex.getMessage());
		response.setError(HttpStatus.NO_CONTENT.name());
		response.setStatus(HttpStatus.NO_CONTENT.value());
		response.setUrl(req.getRequestURI());
		return response;
	}
}
