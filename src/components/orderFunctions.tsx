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

  const repairCollection = collection(db, "reparasjon");
 

  const authGlobal = getAuth();
  const userGlobal = authGlobal.currentUser;

  export const onSubmitRepair = async (inputType: string, inputPrice: number) => {
    try {
      if (userGlobal?.uid) {
        await addDoc(repairCollection, {
          UID: userGlobal.uid,
          status: "begained",
          time: new Date(),
          type: inputType,
          price: inputPrice,
          events: [],
          internalNotes: "",
        });
        console.log("Repair added successfully");
      } else {
        console.error("User is not authenticated or repair type is not set.");
      }
    } catch (error) {
      console.error("Error adding repair:", error);
    }
  };