package com.pepcus.capabilityshowcase.audit;

import static javax.transaction.Transactional.TxType.MANDATORY;

import javax.persistence.EntityManager;
import javax.persistence.PrePersist;
import javax.transaction.Transactional;

import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.entity.UserHistory;
import com.pepcus.capabilityshowcase.service.BeanUtil;

/**
 * It listens whenever there is an interaction b/w database   
 * @author SHUBHAM
 * @since 12-03-2018
 */
public class EntityListener 
{
	/**
	 * Method runs before the data is persisted
	 * @param target
	 */
	@PrePersist
    public void prePersist(User target) {
        perform(target, "INSERTED");
    }

    /**
     * Performs the transaction of saving audit data
     * @param target
     * @param action
     */
    @Transactional(MANDATORY)
    private void perform(User target, String action) 
    {
        EntityManager entityManager = BeanUtil.getBean(EntityManager.class);
        entityManager.persist(new UserHistory(target, action));
    }
}
