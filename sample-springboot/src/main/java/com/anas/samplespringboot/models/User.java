package com.anas.samplespringboot.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
public class User {
  @Id
  public ObjectId _id;
 
  public String name;
  public String email;
 
  // Constructors
  public User() {}
 
  public User(ObjectId _id, String name, String email) {
    this._id = _id;
    this.name = name;
    this.email = email;
  }
 
  // ObjectId needs to be converted to string
  public String get_id() { return _id.toHexString(); }
  public void set_id(ObjectId _id) { this._id = _id; }
 
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
 
  public String getEmail() { return email; }
  public void setEmail(String email) { this.email = email; }
}