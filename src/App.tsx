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
  query, where
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailForm from "./components/emailtest";
import ItemsList from "./components/items";
import TopBar from "./components/topBar";




const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState('ItemsList');

  const renderPage = () => {
    switch (currentPage) {
      case 'FiksePage':
        return <FiksePage />;
      case 'AboutPage':
        return <AboutPage />;
      case 'HvaSkjer':
        return <HvaSkjer />;
      case 'DeliveryPage':
        return <DeliveryPage />;
      case 'RetailPage':
        return <RetailPage />;
      default:
        return     <ItemsList/>;
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="border border-black">
      <div className="flex justify-between items-center p-4">
        <div className="h-10">
          <img src="https://www.fikse.co/images/logo.svg" alt="Fikse" className="h-full size-14" />
        </div>
        <div className="flex space-x-8 text-lg mx-10">
        <a href="#a" className="hover:underline" onClick={() => setCurrentPage('FiksePage')}>Bestille</a>
        <a href="#b" className="hover:underline" onClick={() => setCurrentPage('HvaSkjer')}>Hva skjer?</a>
        <a href="#c" className="hover:underline" onClick={() => setCurrentPage('DeliveryPage')}>Her er vi</a>
        <a href="#d" className="hover:underline" onClick={() => setCurrentPage('AboutPage')}>Popup bedrift</a>
        <a href="#e" className="hover:underline" onClick={() => setCurrentPage('RetailPage')}>For retail</a>
        <a href="#f" className="hover:underline" onClick={() => setCurrentPage('AboutPage')}>For reparatører</a>
        </div>
        <Auth />
      </div>
    </div>
    {renderPage()}
    </div>
  );
};

export default App;
      //<EmailForm />

      /*



const convertTimestampToDate = (seconds: number) => {
  const date = new Date(seconds * 1000); // Convert seconds to milliseconds
  return date.toLocaleString("en-GB"); // Convert to a human-readable string
};
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
 */