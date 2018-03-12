package com.pepcus.capabilityshowcase.audit;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * Class configuring the JPA Audit 
 * @author SHUBHAM
 * @since 12-03-2018
 */
@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class JPAConfig {
	/**
	 * Returning the Currently logged user name
	 * @return
	 */
    @Bean
    public AuditorAware<String> auditorAware() {
        return new AuditorAwareImpl();
    }
}

/**
 * Instantiates the Currently logged User
 * Useful with spring security
 * @author SHUBHAM
 * @since 12-03-2018
 */
class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public String getCurrentAuditor() {
        return "Shubham";
        // Can use Spring Security to return currently logged in user
        // return ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()
    }
}