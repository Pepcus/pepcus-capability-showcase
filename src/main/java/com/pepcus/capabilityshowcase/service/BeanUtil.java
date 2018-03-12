package com.pepcus.capabilityshowcase.service;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

/**
 * Used to Bean factory methods for accessing application components.
 * The ability to publish events to registered listeners.
 * The ability to resolve messages to support internationalization.
 * @author SHUBHAM
 */
@Service
public class BeanUtil implements ApplicationContextAware {

    private static ApplicationContext context;
    
    /**
     * Set the ApplicationContext that this object runs in.
	 * Normally this call will be used to initialize the object.
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context = applicationContext;
    }
    
    /**
     * Returning Bean of the Generic class
     * @param beanClass
     * @return
     */
    public static <T> T getBean(Class<T> beanClass) {
        return context.getBean(beanClass);
    }

}