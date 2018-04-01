package com.pepcus.capabilityshowcase.service.encryption;

import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import com.pepcus.capabilityshowcase.exception.BadRequestException;

import static com.pepcus.capabilityshowcase.ApplicationConstants.BASE_64_ENCODING_UTF;
import static com.pepcus.capabilityshowcase.ApplicationConstants.CIPHER_INSTANCE;
import static com.pepcus.capabilityshowcase.ApplicationConstants.CRYPTO_CIPHER;
import static com.pepcus.capabilityshowcase.ApplicationConstants.MESSAGE_DIGEST_INSTANCE;

/**
 * 
 * Encryption / Decryption with AES 
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
public class AESPassword 
{
   private static SecretKeySpec secretKey;
   private static byte[] key;
   
   private static void setKey(String myKey)
   {
       try 
       {
           key = myKey.getBytes(BASE_64_ENCODING_UTF);
           MessageDigest sha = MessageDigest.getInstance(MESSAGE_DIGEST_INSTANCE);
           key = sha.digest(key);
           key = Arrays.copyOf(key, 16);
           secretKey = new SecretKeySpec(key, CRYPTO_CIPHER);
       }
       catch (Exception e) 
       {
    	   Logger.getLogger(AESPassword.class.getName()).log(Level.SEVERE, null, e);
       }
   }

   public static String encrypt(String strToEncrypt, String secret)
   {
       try
       {
           setKey(secret);
           Cipher cipher = Cipher.getInstance(CIPHER_INSTANCE);
           cipher.init(Cipher.ENCRYPT_MODE, secretKey);
           return Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes(BASE_64_ENCODING_UTF)));
       }
       catch (Exception e)
       {
           throw new BadRequestException("String cannot be encrypted : " + e.getMessage());
       }
   }

   public static String decrypt(String strToDecrypt, String secret)
   {
       try
       {
           setKey(secret);
           Cipher cipher = Cipher.getInstance(CIPHER_INSTANCE);
           cipher.init(Cipher.DECRYPT_MODE, secretKey);
           return new String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
       }
       catch (Exception e)
       {
    	   throw new BadRequestException("String cannot be decrypted : Invalid String or incorrect password" + e.getMessage());
       }
   }
}