package com.anas.samplespringboot.repositories;

import com.anas.samplespringboot.models.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<User, String> {
  User findBy_id(ObjectId _id);
}