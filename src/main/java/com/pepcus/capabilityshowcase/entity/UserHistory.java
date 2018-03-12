package com.pepcus.capabilityshowcase.entity;

import static javax.persistence.TemporalType.TIMESTAMP;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

/**
 * Audited table   
 * @author SHUBHAM
 * @since 12-03-2018
 */
@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@Table(name="PCS_Audit")
public class UserHistory 
{
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "FK_file_history_file"))
    private User user;

    @CreatedBy
    private String usedBy;

    @CreatedDate
    @Temporal(TIMESTAMP)
    private Date createdDate;
    
    private String action;
    
    public UserHistory() {
    }

    public UserHistory(User file, String action) 
    {
        this.user = file;
        this.action = action;
    }

}
