package com.pepcus.capabilityshowcase.entity;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import com.pepcus.capabilityshowcase.audit.EntityListener;
import lombok.Data;

/**
 * 
 * Class for User verifying with otp
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Entity
@EntityListeners(EntityListener.class)
@Table(name = "UserOTP")
@Data
public class User
{
	@Id
	private String email;
	
	private String name;
	
	private String number;
	
	private String otp;
	
	@Column(name="expiry_time")
	private LocalTime expiryTime;
}
