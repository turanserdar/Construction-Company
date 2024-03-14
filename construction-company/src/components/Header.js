import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useState, useEffect } from 'react';


export const Header = () => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Main"));
      const newData = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(newData);
      console.log(newData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div style={{
      backgroundImage: "url('./images/people-renovating-house-concept.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "80vh",
      width: "100%",
    }}>
      <div className="text-center">
    {
     data && data.length > 0 ? (
      data.map((item, i) => (
         <div key={i} className="mb-4">
          {item.Header1 && <h1 style={{  fontWeight: 'bold'}}>{item.Header1}</h1>}
          {item.Header2 && <h1 style={{  fontWeight: 'bold'}}>{item.Header2}</h1>}
        </div>
         
        ))
      ) : (
        <p>No data available</p>
      )
      }
      </div>
    </div>
  );
}
