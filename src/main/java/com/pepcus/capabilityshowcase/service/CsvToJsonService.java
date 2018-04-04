package com.pepcus.capabilityshowcase.service;

import static com.pepcus.capabilityshowcase.ApplicationConstants.TEMP;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.simpleflatmapper.csv.CloseableCsvReader;
import org.simpleflatmapper.csv.CsvParser;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.pepcus.capabilityshowcase.exception.FileNotSupportedException;
import com.pepcus.capabilityshowcase.util.CreateDirectory;
import com.pepcus.capabilityshowcase.util.DeleteTempFile;
import com.pepcus.capabilityshowcase.util.ExtensionChecker;
import com.pepcus.capabilityshowcase.util.SaveTempFiles;

/**
 * 
 * Service for converting CSV to JSON
 * @author SHUBHAM JAIN
 * @since 07-03-2018
 *
 */
@Service
public class CsvToJsonService 
{
	static String C2J="";	//file name
	
	/**
	 * Method to get file
	 * @param file
	 * @return
	 * @throws IOException 
	 */
	public String getFile(MultipartFile file) throws IOException
	{
		CreateDirectory.CreateDirectoryIfNotExist(TEMP);
		
		C2J =StringUtils.substringBefore( file.getOriginalFilename(), ".");		//getting original file name
		
		if(ExtensionChecker.checkFile(file, "csv")) 
		{
			SaveTempFiles save=new SaveTempFiles();
			
			List<MultipartFile> files=new ArrayList<>(Arrays.asList(file));	
			
			save.saveZipFile(files,TEMP);
			
			CSVtoJSONParser();	//Creating JSON file
			
			return readJson();
		}
		return null;
	}
	
	/**
	 * Converting CSV to JSON
	 * @throws IOException
	 */
	public void CSVtoJSONParser() throws IOException 
    {
		File csvFile=new File(TEMP+"//"+C2J+".csv");		//csv
		
        File jsonFile = new File(TEMP+"//"+C2J+".json");	//json
    	BufferedWriter output = new BufferedWriter(new FileWriter(jsonFile));
	
        CloseableCsvReader reader = CsvParser.reader(csvFile);

        JsonFactory jsonFactory = new JsonFactory();
        Iterator<String[]> iterator = reader.iterator();
        String[] headers = iterator.next();

        try (JsonGenerator jsonGenerator = jsonFactory.createGenerator(output)) 
        {
            jsonGenerator.writeStartArray();
    
            while (iterator.hasNext()) 
            {
                jsonGenerator.writeStartObject();
                String[] values = iterator.next();
                int nbCells = Math.min(values.length, headers.length);
                for(int i = 0; i < nbCells; i++) 
                {
                    jsonGenerator.writeFieldName(headers[i]);
                    jsonGenerator.writeString(values[i]);
                }
                jsonGenerator.writeEndObject();
            }
            jsonGenerator.writeEndArray();
        }
        catch(Exception e) 
        {
        	throw new FileNotSupportedException("This file cannot be parsed : "
        			+ "Either corrupted or not compatible to be parsed");
        }
    }
	
	/**
	 * Method to read JSON from the saved file 
	 * @return
	 * @throws IOException 
	 */
	public String readJson() throws IOException 
	{
    	BufferedReader br = new BufferedReader(new FileReader(TEMP+"//"+C2J+".json"));
        StringBuilder sb = new StringBuilder();
        String line = br.readLine();	
        sb.append(line);
        br.close();
        
        //Checking for unsupported file
        if(sb.toString().contains("�")) 
        {
        	throw new FileNotSupportedException("File not correctly coded");
        }
        
        DeleteTempFile.deleteTempFiles(TEMP);
        return sb.toString();
	}
}
