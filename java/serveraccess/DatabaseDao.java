// Copyright 2016-2018 Diffblue limited. All rights reserved.

package io.ponicode.javademo.serveraccess;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import java.lang.String;

public class DatabaseDao {

  private static DatabaseDao instance;
  private MongoDatabase mongoDatabase;

  private String hostname = "localhost";
  private int port = 27017;
  private String dbName = "java-demo";

  private DatabaseDao() {
    // There must only be one connection to the DB.
  }

  /**
   * Ensure that there is only one connection to the Database.
   * @return the current connection
   */
  public static DatabaseDao getInstance() {

    if (instance == null) {
      instance = new DatabaseDao();
      instance.connectToDb();
    }
    return instance;
  }

  /**
   * Setup the connection to the database.
   */
  private void connectToDb() {
    MongoClient mongoClient = new MongoClient( hostname, port);
    mongoDatabase = mongoClient.getDatabase(dbName);
  }

  /**
   * Get the number of records from the query.
   * @param collectionName collection in DB that is being searched
   * @param searchFor BSON document to match
   * @return contents of the last row
   */
  public int getCountFromDb(String collectionName, Document searchFor) {
    MongoCollection<Document> collection = mongoDatabase.getCollection(collectionName);
    return (int) collection.count(searchFor);
  }
}
