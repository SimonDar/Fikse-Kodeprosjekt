import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import RepairDashboard from "./components/RepairDashboard";
import Auth from "./components/auth";
import FiksePage from "./Page/FiksePage";
import AboutPage from "./Page/OmOss";
import HvaSkjer from "./Page/HvaSkjer";
import DeliveryPage from "./Page/HerErVi";
import RetailPage from "./Page/ForRetail";
import RepairServicePage from "./Page/ForRepearis";
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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Bestille from "./Page/Bestille";




const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState('ItemsList');


  const auth = getAuth();
  const user = auth.currentUser;
  console.log("CONSOLE LOGG APP ");
  console.log(user);

  useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1); // Remove the '#' from the hash
    switch (hash) {
      case 'bestille':
        setCurrentPage('bestille');
        break;
      case 'hvaskjer':
        setCurrentPage('HvaSkjer');
        break;
      case 'herervi':
        setCurrentPage('DeliveryPage');
        break;
      case 'omoss':
        setCurrentPage('AboutPage');
        break;
      case 'retail':
        setCurrentPage('RetailPage');
        break;
      case 'reperator':
        setCurrentPage('AboutPage');
        break;
      case 'itemlist':
          setCurrentPage('ItemsList');
          break;
          case 'reperator':
            setCurrentPage('ForReparis');
            break;
      case 'FiksePage':
      default:
        setCurrentPage('FiksePage');
    }
  };

  // Run this function when the component mounts
  handleHashChange();

  // Add an event listener for hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
}, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'bestille':
        return  <Bestille/>;
      case 'AboutPage':
        return <AboutPage />;
      case 'HvaSkjer':
        return <HvaSkjer />;
      case 'DeliveryPage':
        return <DeliveryPage />;
      case 'RetailPage':
        return <RetailPage />;
      case 'FiksePage':
        return <FiksePage />;
        case 'ItemsList':
          return <ItemsList />;
          case 'ForReparis':
            return <RepairServicePage />
        
      default:
        return <FiksePage />;    
    }
  };



  return (
    <div className="flex flex-col items-center min-h-screen ">
    <div className="border border-black">
      <div className="flex justify-between items-center p-4">
        <div className="h-10">
       <a href="" className="hover:underline" onClick={() => setCurrentPage('FiksePage')}> <img 
  src="https://www.fikse.co/images/logo.svg" 
  alt="FiksePage" 
  className="h-full size-14 cursor-pointer" 
/>  </a>      </div>
        <div className="flex space-x-8 text-lg mx-10 ">
        <a href="#bestille" className="hover:underline" onClick={() => setCurrentPage('bestille')}>Bestille</a>
        <a href="#hvaskjer" className="hover:underline" onClick={() => setCurrentPage('HvaSkjer')}>Hva skjer?</a>
        <a href="#herervi" className="hover:underline" onClick={() => setCurrentPage('DeliveryPage')}>Her er vi</a>
        <a href="#omoss" className="hover:underline" onClick={() => setCurrentPage('AboutPage')}>Om oss</a>
        <a href="#retail" className="hover:underline" onClick={() => setCurrentPage('RetailPage')}>For retail</a>
        <a href="#reperator" className="hover:underline" onClick={() => setCurrentPage('ForReparis')}>For reparatører</a>
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
      case 'bestille':
        return  <ItemsList/>;


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