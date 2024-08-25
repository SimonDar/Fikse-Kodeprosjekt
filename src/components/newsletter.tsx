import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    query, where
  } from "firebase/firestore";
  import { db } from "../assets/firebase";
  import React, { useEffect, useState } from "react";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  const repairCollection = collection(db, "newsletter");
 
  export const onSubmiteNewsletter = async (inputType: string) => {

  const authGlobal = getAuth();
  const userGlobal = authGlobal.currentUser;

    try {
      if (userGlobal?.uid) {
        await addDoc(repairCollection, {
          email: inputType,
          time: new Date()
        });
        console.log("email added successfully");
      } else {
        console.error("email User is not authenticated or repair type is not set.");
      }
    } catch (error) {
      console.error("Error adding repair:", error);
    }
  };