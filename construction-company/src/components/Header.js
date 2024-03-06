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
    <div className="header">
      {
       data && data.length > 0 ? (
        data.map((item, i) => (
          <p key={i}>
            {item.Header1 && <h1 style={{  fontWeight: 'bold' }}>{item.Header1}</h1>}
          </p>
        ))
      ) : (
        <p>No data available</p>
      )
      }
    </div>
  );
}
