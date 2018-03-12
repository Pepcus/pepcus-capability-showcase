package com.pepcus.capabilityshowcase.entity;

import static javax.persistence.TemporalType.TIMESTAMP;

import java.util.Date;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

/**
 * Generic Auditable class which can be mapped to any class(user defined) by extending it 
 * @author SHUBHAM
 * @since 12-03-2018
 * @param <T>
 */
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Data
abstract class Auditable<T> {

    @CreatedBy
    private T createdBy;

    @CreatedDate
    @Temporal(TIMESTAMP)
    private Date createdDate;

    @LastModifiedDate
    @Temporal(TIMESTAMP)
    private Date lastModifiedDate;

}