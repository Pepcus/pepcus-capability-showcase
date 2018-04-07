package com.pepcus.capabilityshowcase;

/**
 * 
 * All the Constants used in the Application
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class ApplicationConstants 
{
	/**
	 * For OTP controller 
	 */
	public static final int OTP_LENGTH=6;	
	public static final long EXP_MIN=5;		//OTP validity
	public static final String SECURE_GENERATION="SHA1PRNG";
	
	/**
	 * Sending Email subject and message  
	 */
	public static final String EMAIL_SUBJECT="OTP Validation.";
	public static final String EMAIL_MESSAGE=" Verify your email ";
	public static final String OTP_TEMPLATE = "<table cellpadding=\"0px\" cellspacing=\"0px\" border=\"0\" width=\"100%\" style=\"max-width:550px;margin:0 auto\"\r\n" + 
			"       bgcolor=\"#f0f4f5\">\r\n" + 
			"  <tbody>\r\n" + 
			"  <tr>\r\n" + 
			"    <td style=\"text-align:center;\"><img\r\n" + 
			"      src=\"http://www.pepcus.com/images/logo/logonew.png\"\r\n" + 
			"      width=\"100%\" style=\"max-width:140px\" class=\"CToWUd\"></td>\r\n" + 
			"  </tr>\r\n" + 
			"  <tr>\r\n" + 
			"    <td align=\"center\"><h2\r\n" + 
			"      style=\"margin:0px;padding:0px;font-size:70px;line-height:70px;font-weight:bold;color:#818181;margin-top:20px;font-family:Helvetica,Arial,sans-serif;font-weight:600\">\r\n" + 
			"      0000</h2>     <span\r\n" + 
			"      style=\"margin:0px;padding:0px;font-size:10px;font-family:Helvetica,Arial,sans-serif;font-weight:300;color:#818181\">ONE TIME VERIFICATION CODE</span>\r\n" + 
			"    </td>\r\n" + 
			"  </tr>\r\n" + 
			"  <tr>\r\n" + 
			"    <td>\r\n" + 
			"      <table cellpadding=\"0px\" cellspacing=\"25px\" border=\"0\" width=\"100%\">\r\n" + 
			"        <tbody>\r\n" + 
			"        <tr>\r\n" + 
			"          <td>\r\n" + 
			"            <table cellpadding=\"0px\" cellspacing=\"0px\" border=\"0\" width=\"100%\"\r\n" + 
			"                   align=\"center\">\r\n" + 
			"              <tbody>\r\n" + 
			"              <tr>\r\n" + 
			"                <td align=\"center\"><p\r\n" + 
			"                  style=\"margin:0px;padding:0px;padding-bottom:20px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#818181;line-height:22px\">\r\n" + 
			"                  Dear UserName, <br> Please use this one-time verification code to login.\r\n" + 
			"                </p></td>\r\n" + 
			"              </tr>\r\n" + 
			"              <tr>\r\n" + 
			"                <td style=\"padding-left:10px;padding-right:10px\">\r\n" + 
			"                  <table cellpadding=\"0px\" cellspacing=\"0px\" border=\"0px\" width=\"100%\"\r\n" + 
			"                         style=\"border-bottom:solid 1px #ccc\">\r\n" + 
			"                    <tbody>\r\n" + 
			"                    <tr>\r\n" + 
			"                      <td align=\"left\"><p\r\n" + 
			"                        style=\"font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#818181;margin:0px;padding-bottom:15px\">\r\n" + 
			"                        Valid for 5 minutes</p></td>\r\n" + 
			"                      <td></td>\r\n" + 
			"                    </tr>\r\n" + 
			"                    </tbody>\r\n" + 
			"                  </table>\r\n" + 
			"                </td>\r\n" + 
			"              </tr>\r\n" + 
			"              <tr>\r\n" + 
			"                <td><p\r\n" + 
			"                  style=\"font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:300;line-height:20px;color:#818181;margin:0px;padding:0px;padding-left:10px;padding-top:10px\">\r\n" + 
			"                  1. Do not share your credentials or <span class=\"il\">otp</span> with\r\n" + 
			"                  anyone on call, email or sms.<br> 2. Pepcus never asks you for\r\n" + 
			"                  your credentials or <span class=\"il\">otp</span>.<br> 3. Always\r\n" + 
			"                  create a strong password and keep different passwords for different\r\n" + 
			"                  websites.</p></td>\r\n" + 
			"              </tr>\r\n" + 
			"              <tr>\r\n" + 
			"                <td style=\"padding-left:10px\"><p\r\n" + 
			"                  style=\"margin:0px;padding:0px;padding-top:20px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#818181;line-height:22px\">\r\n" + 
			"                  For any queries or concerns, write to us at <a\r\n" + 
			"                  href=\"mailto:info@pepcus.com\"\r\n" + 
			"                  style=\"font-weight:bold;color:#818181;text-decoration:none\"\r\n" + 
			"                  target=\"_blank\">info@pepcus.com</a></p>\r\n" + 
			"                  <p\r\n" + 
			"                    style=\"margin:0px;padding:0px;margin-top:30px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#818181;line-height:18px\">\r\n" + 
			"                    Best,<br> Team Pepcus </p></td>\r\n" + 
			"              </tr>\r\n" + 
			"              <tr>\r\n" + 
			"                <td style=\"padding-left:10px;padding-right:10px\">\r\n" + 
			"                  <table cellpadding=\"0px\" cellspacing=\"0px\" border=\"0px\" width=\"100%\"\r\n" + 
			"                         style=\"margin-top:20px\">\r\n" + 
			"                    <tbody>\r\n" + 
			"                    <tr>\r\n" + 
			"                      <td align=\"left\" width=\"40%\"></td>\r\n" + 
			"                      <td width=\"60%\" align=\"right\" valign=\"middle\"><p\r\n" + 
			"                        style=\"margin:0px;padding:0px;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:300;color:#818181;line-height:18px\">\r\n" + 
			"                        Pepcus Software Services Private Limited.\r\n" + 
			"                        <br> Copyright @ 2018, pepcus.com. All rights reserved.</p></td>\r\n" + 
			"                    </tr>\r\n" + 
			"                    </tbody>\r\n" + 
			"                  </table>\r\n" + 
			"                </td>\r\n" + 
			"              </tr>\r\n" + 
			"              </tbody>\r\n" + 
			"            </table>\r\n" + 
			"          </td>\r\n" + 
			"        </tr>\r\n" + 
			"        </tbody>\r\n" + 
			"      </table>\r\n" + 
			"    </td>\r\n" + 
			"  </tr>\r\n" + 
			"  </tbody>\r\n" + 
			"</table>\r\n" + 
			"";
	
	/**
	 * For protected Zip  
	 */
	public static final String ZIP_NAME = "protected.zip";
	
	/**
	 * For Logger file 
	 */
	public static final Integer FILE_SIZE = 2000000;	//2mb
	public static final String SAMPLE_LOG = "sample.log";
	
	/**
	 * Encryption/Decryption techniques
	 */
	public static final String BASE_64_ENCODING_UTF = "utf-8";
	public static final String CRYPTO_CIPHER = "AES";
	public static final String ALGORITHM_MD5 ="MD5";
	public static final String ALGORITHM_SHA ="SHA-512";
	public static final String ALGORITHM_PBKD ="PBKDF2WithHmacSHA1";
	public static final String CIPHER_INSTANCE = "AES/ECB/PKCS5Padding";
	public static final String MESSAGE_DIGEST_INSTANCE = "SHA-1";
	public static final String BLOWFISH_ALGO = "Blowfish";
    
	/**
	 * Mailing tool templates
	 */
	public static final String NOTIFICATION_TEMPLATE = "<table id=\"TemplateData\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"margin:auto;width:600px;background-color:#f5eded;padding-top: 15px;outline:none;border-radius: 30px;\">\r\n" + 
			"    <tr align=\"center\" style=\"margin:auto;width:100%;padding-bottom:20px;\">\r\n" + 
			"        <td >\r\n" + 
			"            <a href= \"http://www.pepcus.com\" target=\"_blank\" style=\"outline:none;\">\r\n" + 
			"            <img src=\"http://www.pepcus.com/images/logo/logonew.png\" style=\"width:80px;padding-top:5px;\"/>\r\n" + 
			"            </a>\r\n" + 
			"        </td>\r\n" + 
			"    </tr>\r\n" + 
			"    \r\n" + 
			"    <tr style=\"background-color:#f1efec;\">\r\n" + 
			"    <td align=\"left\" style=\"font-family: Verdana, Geneva, sans-serif; color:white;background-color:red; font-size:13px; line-height:21px;padding-left: 25px;padding-right: 25px;text-align: justify;\">\r\n" + 
			"    <br><br><hr>\r\n" + 
			"    <p>Dear <span id=\"reciverTemplate\" style=\"font-size:15px\"> Something Name</span>,</p>\r\n" + 
			"    <p>\r\n" + 
			"    With reference to your email regarding the job of senior sales manager, I am happy to inform you that your resume has been shortlisted for an interview with our manager.\r\n" + 
			"    </p>\r\n" + 
			"    <p>\r\n" + 
			"    We were highly pleased with your qualifications and experience and believes that you are an ideal candidate for this post. Our company is looking to expanding and wants a person who is not only good at field work but can also supervise and coordinated sales teams under him.\r\n" + 
			"    </p>\r\n" + 
			"    <p>\r\n" + 
			"    I am attaching the schedule of the interview and the documents that you need to bring along with you.\r\n" + 
			"    </p>\r\n" + 
			"    <p>\r\n" + 
			"    Regards and best wishes,\r\n" + 
			"    </p>\r\n" + 
			"    <p>\r\n" + 
			"    <span id=\"senderTemplate\">senderName</span><br>\r\n" + 
			"    <span id=\"designationTemplate\">designation</span>\r\n" + 
			"    </p>\r\n" + 
			"    <hr><br><br>\r\n" + 
			"    </td>\r\n" + 
			"    </tr>\r\n" + 
			"    \r\n" + 
			"    <tr >\r\n" + 
			"    <td style=\"color:black;font-size: 12px;\">\r\n" + 
			"    <p style=\"text-align:left;padding-left:20px;width:40%;float:left;\">\r\n" + 
			"    <b>Corporate Office</b> <br>\r\n" + 
			"    Pepcus Software Services Pvt. Ltd.<br>\r\n" + 
			"    201, Balaji Corporate, New Palasia<br>\r\n" + 
			"    Indore, Madhya Pradesh<br>\r\n" + 
			"    452001, India.\r\n" + 
			"    </p>\r\n" + 
			"    \r\n" + 
			"    <p style=\"text-align:right;padding-right:20px;width:40%;float:right;\">\r\n" + 
			"    <b>Contact us</b> <br>\r\n" + 
			"    You can call us at:<br>\r\n" + 
			"    Mobile : +91-9754550505<br>\r\n" + 
			"    Phone : +91-731-4218554<br>\r\n" + 
			"    Email: <a href=\"mailto:info@pepcus.com\" style=\"color:black; text-decoration:none;\">info@pepcus.com</a><br>\r\n" + 
			"    </p>\r\n" + 
			"    <p style=\"text-align:center;padding-bottom: 0px;margin-bottom: -12px;position: relative;top: -15px;\">\r\n" + 
			"    </p>\r\n" + 
			"    </td>\r\n" + 
			"    </tr>\r\n" + 
			"    \r\n" + 
			"</table>\r\n" + 
			"  ";
	
	public static final String GREETINGS_TEMPLATE = "\r\n" + 
			"<table id=\"TemplateData\" width=\"600\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\r\n" + 
			"<tr>\r\n" + 
			"    <!--Upper Banner-->\r\n" + 
			"    <td align=\"left\" valign=\"top\" style=\"\"><img src=\"http://www.umiyamataji.com/images/kids_corner/diwali_banner.jpg\" width=\"600\" height=\"106\" style=\"display:block;border-radius:30px 30px 0 0;\"></td>\r\n" + 
			"</tr>\r\n" + 
			"<tr>\r\n" + 
			"<!--Middle background-->\r\n" + 
			"<td style=\"height:400px;text-align:center;vertical-align:top;background-image:url('https://s3.amazonaws.com/media.dpn/54336_4021549307_bb5bd6cbb0_bf.jpg');color:white;\">\r\n" + 
			"<!--Pepcus Logo-->\r\n" + 
			"    <a href=\"http://www.pepcus.com\" target=\"_blank\" style=\"outline:none;\">\r\n" + 
			"        <img src=\"http://www.pepcus.com/images/logo/logonew.png\" style=\"width: 120px;padding-top: 40px;\">\r\n" + 
			"    </a>\r\n" + 
			"<p style=\"padding-top:30px;padding-left:10px;font-size:14px\">Dear <span id=\"reciverTemplate\" style=\"font-size:18px\"> Something Name</span>,</p>\r\n" + 
			"<p style=\"padding-top:0px;font-size:25px;\">Pepcus wishes you a very<span style=\"font-size:35px;font-family: 'Brush Script MT', cursive;\"> Happy Diwali..!!</span></p>\r\n" + 
			"<p style=\"font-family: 'Brush Script MT', cursive;font-size: 18px;width: 350px;margin: auto;\">May the festival of lights be the harbinger of joy and prosperity. As the holy occasion of Diwali is here and the atmosphere is filled with the spirit of mirth and love, here's hoping this festival of beauty brings your way, bright sparkles of contentment, that stay with you through the days ahead.</p>\r\n" + 
			"</tr>\r\n" + 
			"<!--Bottom background-->\r\n" + 
			"<tr ><td style=\"color:#333;background-image:url('https://png.pngtree.com/photos/sm/2017-12-23/e3c66c7822a18db3de256517cb0cf94a.jpg');border-radius: 0 0 30px 30px;\">\r\n" + 
			"\r\n" + 
			"<p style=\"margin-top:20px;text-align:left;padding-left:20px;width:40%;float:left;\">\r\n" + 
			"<b>Corporate Office</b> <br>\r\n" + 
			"Pepcus Software Services Pvt. Ltd.<br>\r\n" + 
			"201, Balaji Corporate, New Palasia<br>\r\n" + 
			"Indore, Madhya Pradesh<br>\r\n" + 
			"452001, India.\r\n" + 
			"</p>\r\n" + 
			"\r\n" + 
			"<p style=\"margin-top:20px;text-align:right;padding-right:20px;width:40%;float:right;\">\r\n" + 
			"<b>Contact us</b> <br>\r\n" + 
			"You can call us at:<br>\r\n" + 
			"Mobile : +91-9754550505<br>\r\n" + 
			"Phone : +91-731-4218554<br>\r\n" + 
			"Email: <a href=\"mailto:info@pepcus.com\" style=\"color:red; text-decoration:none;\">info@pepcus.com</a><br>\r\n" + 
			"</p>\r\n" + 
			"\r\n" + 
			"</td>\r\n" + 
			"</tr>\r\n" + 
			"</table>";
}