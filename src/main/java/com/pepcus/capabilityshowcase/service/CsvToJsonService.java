package com.pepcus.capabilityshowcase.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;


import org.apache.commons.io.FileUtils;
import org.simpleflatmapper.csv.CsvParser;
import org.simpleflatmapper.csv.CsvReader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.pepcus.capabilityshowcase.exception.FileNotSupportedException;
import com.pepcus.capabilityshowcase.util.ExtensionChecker;

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
	static File jsonFile;
	/**
	 * Method to get file
	 * @param file
	 * @return
	 * @throws IOException 
	 */
	public String getFile(MultipartFile file) throws IOException
	{
		if(ExtensionChecker.checkFile(file, "csv")) 
		{
			CSVtoJSONParser(new String(file.getBytes()));	//Parsing CSV data into JSON file	
			return readJson();
		}
		return null;
	}
	
	/**
	 * Converting CSV to JSON
	 * @throws IOException
	 */
	public void CSVtoJSONParser(String CSVData) throws IOException 
    {	
		jsonFile = File.createTempFile("fileResponse", "json");
    	BufferedWriter output = new BufferedWriter(new FileWriter(jsonFile));
	
        CsvReader reader = CsvParser.reader(CSVData);

        JsonFactory jsonFactory = new JsonFactory();
        Iterator<String[]> iterator = reader.iterator();
        String[] headers = iterator.next();

        try (JsonGenerator jsonGenerator = jsonFactory.createGenerator(output)) // System.out
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
            jsonGenerator.writeEndArray();;
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
		String jsonData = FileUtils.readFileToString(jsonFile);
        if(jsonData.contains("�") || jsonData.contains("")) 
        {
        	throw new FileNotSupportedException("File not correctly coded");
        }
        return jsonData;
	}
}
