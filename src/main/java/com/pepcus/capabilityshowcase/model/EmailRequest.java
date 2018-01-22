package com.pepcus.capabilityshowcase.model;


import java.util.List;



public class EmailRequest {
	
	
	private String fromEmail;
	    private List<String> toEmail;
	    private String subject;
	    private String body;
	   // private List<KeyValuePair> parameters;
		/**
		 * @return the fromEmail
		 */
		public String getFromEmail() {
			return fromEmail;
		}
		/**
		 * @param fromEmail the fromEmail to set
		 */
		public void setFromEmail(String fromEmail) {
			this.fromEmail = fromEmail;
		}
		/**
		 * @return the toEmail
		 */
		public List<String> getToEmail() {
			return toEmail;
		}
		/**
		 * @param toEmail the toEmail to set
		 */
		public void setToEmail(List<String> toEmail) {
			this.toEmail = toEmail;
		}
		/**
		 * @return the subject
		 */
		public String getSubject() {
			return subject;
		}
		/**
		 * @param subject the subject to set
		 */
		public void setSubject(String subject) {
			this.subject = subject;
		}
		/**
		 * @return the body
		 */
		public String getBody() {
			return body;
		}
		/**
		 * @param body the body to set
		 */
		public void setBody(String body) {
			this.body = body;
		}
}
