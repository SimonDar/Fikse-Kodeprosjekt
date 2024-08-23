import React, { useEffect, useState } from "react";

import ProfileCard from "./components/ProfileCard";
import RepairDashboard from "./components/RepairDashboard";
import Auth from "./components/auth";
import FiksePage from "./Page/FiksePage";
import AboutPage from "./Page/OmOss";
import HvaSkjer from "./Page/HvaSkjer";
import DeliveryPage from "./Page/HerErVi";
import RetailPage from "./Page/ForRetail";
import { db } from "./assets/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface Repair {
  id: string;
  UID: string;
  status: string;
  time: {
    seconds: number;
    nanoseconds: number;
  };
  type: string;
}

const convertTimestampToDate = (seconds: number) => {
  const date = new Date(seconds * 1000); // Convert seconds to milliseconds
  return date.toLocaleString("en-GB"); // Convert to a human-readable string
};

const App: React.FC = () => {
  const [repariList, setRepairList] = useState<Repair[]>([]);

  const [newRepair, setNewRepair] = useState<Repair>({} as Repair);
  const [userUID, setUserUID] = useState<string | null>(null);
  const [repairType, setRepairType] = useState<string | null>(null);
  const [changeRepairType, setChangeRepairType] = useState<string | null>(null);

  const repairCollection = collection(db, "reparasjon");

  const getRepairList = async () => {
    try {
      const data = await getDocs(repairCollection);
      const repairList = data.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          UID: docData.UID as string,
          status: docData.status as string,
          time: {
            seconds: docData.time.seconds as number,
            nanoseconds: docData.time.nanoseconds as number,
          },
          type: docData.type as string,
        };
      });
      console.log(repairList);
      setRepairList(repairList);
    } catch (error) {
      console.error("Error fetching repair list:", error);
    }
  };

  useEffect(() => {
    getRepairList();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUID(user.uid);
        setNewRepair((prevRepair) => ({
          ...prevRepair,
          UID: user.uid,
        }));
      } else {
        setUserUID(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(userUID);

  const onSumbitRepair = async () => {
    try {
      await addDoc(repairCollection, {
        UID: userUID,
        status: "pending",
        time: new Date(),
        type: repairType,
      });
      getRepairList();
      console.log("Repair added successfully");
    } catch (error) {
      console.error("Error adding repair:", error);
    }
  };

  const deleteRepair = async (id: string) => {
    try {
      const docRef = doc(repairCollection, id);
      await deleteDoc(docRef);
      getRepairList();
      console.log("Repair deleted successfully");
    } catch (error) {
      console.error("Error deleting repair:", error);
    }
  };

  const changeStatusRepair = async (id: string, changeRepairType: string | null) => {
    try {
      const docRef = doc(repairCollection, id);
      await updateDoc(docRef, { status: changeRepairType });
      getRepairList();
      console.log("Repair deleted successfully");
    } catch (error) {
      console.error("Error deleting repair:", error);
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Auth />
      <div className="flex space-x-6 items-center justify-center">
        <input
          type="text"
          placeholder="type"
          className="border border-gray-300 p-2 rounded shadow-md mb-4"
          onChange={(e) => setRepairType(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded mb-4"
          onClick={onSumbitRepair}
        >
          Legg til
        </button>
      </div>
      <div>
        {repariList.map((repairEvent) => ( 
          <ul
            key={repairEvent.id}
            className="border border-gray-300 p-4 rounded shadow-md mb-4"
          >
            <li className="font-bold">{repairEvent.id}</li>
            <li>{repairEvent.type}</li>
            <li>{repairEvent.status}</li>
            <li>{convertTimestampToDate(repairEvent.time.seconds)}</li>
            <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded mb-4 left"
          onClick={() => deleteRepair(repairEvent.id)}
        >
          slett
        </button>

        <input
          type="text"
          placeholder="endre status"
          className="border border-gray-300 p-2 rounded shadow-md mb-4"
          onChange={(e) => setChangeRepairType(e.target.value)}
        />       
                  <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded mb-4 left"
          onClick={() => changeStatusRepair(repairEvent.id, changeRepairType)}
        >
          endre
        </button>
        
          </ul>

        ))}
      </div>
    </div>
  );
};

export default App;