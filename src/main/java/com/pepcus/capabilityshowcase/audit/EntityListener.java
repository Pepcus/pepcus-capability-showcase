package com.pepcus.capabilityshowcase.audit;

import static javax.transaction.Transactional.TxType.MANDATORY;

import javax.persistence.EntityManager;
import javax.persistence.PrePersist;
import javax.transaction.Transactional;

import com.pepcus.capabilityshowcase.entity.User;
import com.pepcus.capabilityshowcase.entity.UserHistory;
import com.pepcus.capabilityshowcase.service.BeanUtil;

public class EntityListener 
{
	@PrePersist
    public void prePersist(User target) {
        perform(target, "INSERTED");
    }

   
    @Transactional(MANDATORY)
    private void perform(User target, String action) 
    {
        EntityManager entityManager = BeanUtil.getBean(EntityManager.class);
        entityManager.persist(new UserHistory(target, action));
    }
}
