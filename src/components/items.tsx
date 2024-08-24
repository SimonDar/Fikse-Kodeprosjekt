import React, { useEffect, useState } from "react";

import { db } from "../assets/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query, where
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";



//Slett
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

const ItemsList: React.FC = () => {
  const [repairList, setRepairList] = useState<Repair[]>([]);
  const [newRepair, setNewRepair] = useState<Repair>({
    id: "",
    UID: "",
    status: "pending",
    time: {
      seconds: 0,
      nanoseconds: 0,
    },
    type: "",
  });
  const [userUID, setUserUID] = useState<string | null>(null);
  const [repairType, setRepairType] = useState<string | null>(null);
  const [changeRepairType, setChangeRepairType] = useState<string | null>(null);

  const repairCollection = collection(db, "reparasjon");

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
 
  const getRepairList = async () => {
    console.log("Fetching repair list..." + userUID);
    if (!userUID) {
      console.error("User is not authenticated.");
      return;
    }
    try {
      console.log("Fetching query list start...");
      const q = query(repairCollection, where("UID", "==", userUID));
      console.log("Querying repair list...");
        const data = await getDocs(q);

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
      setRepairList(repairList);
    } catch (error) {
      console.error("Error fetching repair list:", error);
    }
  };

  useEffect(() => {
    getRepairList();
  }, [userUID]);

  const onSubmitRepair = async () => {
    try {
      if (userUID && repairType) {
        await addDoc(repairCollection, {
          UID: userUID,
          status: "pending",
          time: new Date(),
          type: repairType,
        });
        getRepairList();
        console.log("Repair added successfully");
      } else {
        console.error("User is not authenticated or repair type is not set.");
      }
    } catch (error) {
      console.error("Error adding repair:", error);
    }
  };

  const deleteRepair = async (id: string) => {
    try {
      const repairToDelete = repairList.find((repair) => repair.id === id);
      if (repairToDelete?.UID === userUID) {
        const docRef = doc(repairCollection, id);
        await deleteDoc(docRef);
        getRepairList();
        console.log("Repair deleted successfully");
      } else {
        console.log("Unauthorized to delete this repair");
      }
    } catch (error) {
      console.error("Error deleting repair:", error);
    }
  };

  const changeStatusRepair = async (
    id: string,
    changeRepairType: string | null
  ) => {
    try {
      const repairToUpdate = repairList.find((repair) => repair.id === id);
      if (repairToUpdate?.UID === userUID && changeRepairType) {
        const docRef = doc(repairCollection, id);
        await updateDoc(docRef, { status: changeRepairType });
        getRepairList();
        console.log("Repair status updated successfully");
      } else {
        console.log("Unauthorized to update this repair or new status not set");
      }
    } catch (error) {
      console.error("Error updating repair status:", error);
    }
  };

  const authGlobal = getAuth();
const userGlobal = authGlobal.currentUser;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

                <div className="flex space-x-6 items-center justify-center">
                  <h1>{userGlobal?.displayName}'s orders</h1>
                  <input
                    type="text"
                    placeholder="type"
                    className="border border-gray-300 p-2 rounded shadow-md mb-4"
                    onChange={(e) => setRepairType(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded mb-4"
                    onClick={onSubmitRepair}
                  >
                    Legg til
                  </button>
                </div>
                <div>
                  {repairList.map((repairEvent) => (
                    <ul
                      key={repairEvent.id}
                      className="border border-gray-300 p-4 rounded shadow-md mb-4"
                    >
                      <li className="font-bold">ordre: {repairEvent.id}</li>
                      <li>type: {repairEvent.type}</li>
                      <li>Status: {repairEvent.status}</li>
                      <li>dato: {convertTimestampToDate(repairEvent.time.seconds)}</li>
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
                        onClick={() =>
                          changeStatusRepair(repairEvent.id, changeRepairType)
                        }
                      >
                        endre
                      </button>
                    </ul>
                  ))}
                </div>
    </div>
  );
};

export default ItemsList;
