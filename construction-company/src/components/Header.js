import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";

import "./Header.css";
import { CarouselHeader } from "./CarouselHeader";

export const Header = () => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Main"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
      console.log(newData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    // <div className="text-center">
    
    //     {data && data.length > 0 ? (
    //       data.map((item, i) => (
    //         <div key={i} className="mb-4">
    //           {item.Header1 && (
    //             <div className="header1-text">
    //               {/* <h1 style={{ fontWeight: "bold", fontSize: "36px" }}>
    //                 {item.Header1}
    //               </h1> */}
    //             </div>
    //           )}

             
                
<CarouselHeader/>


//               <div className="header-text">
//                 {item.Header2 && (
//                   <h1 style={{ fontWeight: "bold" }}>{item.Header2}</h1>
//                 )}
//                 {item.Header3 && (
//                   <h1 style={{ fontWeight: "bold" }}>{item.Header3}</h1>
//                 )}
//                 {item.Header4 && (
//                   <h1 style={{ fontWeight: "bold" }}>{item.Header4}</h1>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No data available</p>
//         )}
     
//     </div>
  );
};
