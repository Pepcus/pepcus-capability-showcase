package com.pepcus.capabilityshowcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pepcus.capabilityshowcase.entity.User;

/**
 * Repository for User entity
 * 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public interface UserRepository extends JpaRepository<User, String> 
{
	public User findByEmail(String email);
}
