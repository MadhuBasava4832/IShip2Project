// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './togetLF.css';

// export const ToGetLF = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from the backend API
//     axios.get('http://localhost:9001/LF/togetLF')
//       .then((response) => {
//         setUsers(response.data); // Assuming response.data contains the users array
//         console.log(users);
        
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>LF Data</h1>
//       <ul>
//         {users.length > 0 ? (
//           users.map(user => (
//             <li key={user._id}>
              
//               <div> 
//                 <strong>Name:</strong> {user.name} <br />
//                 {/* Display the uploaded image if available */}
//                 {user.photo ? (
//                   <img src={`http://localhost:9001${user.photo}`} alt="User" className='image'/>                
//                 ) : (
//                   <div>No image available</div>
//                 )}
//               </div>
//             </li>
//           ))
//         ) : (
//           <div style={{ textAlign: 'center' }}>
//             <h1>No data available</h1>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// };






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './togetLF.css';

// export const ToGetLF = () => {
//   const [users, setUsers] = useState([]);
//   console.log(users)

//   // Function to fetch data based on filter
//   const fetchUsers = (filterType) => {
//     let url = 'http://localhost:9001/LF/togetLF';
//     if (filterType) {
//       url += `?type=${filterType}`; // Append query parameter for filtering
//     }

//     axios.get(url)
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the data!', error);
//       });
//   };

//   // Fetch all users on initial render
//   useEffect(() => {
//     fetchUsers(); // Fetch all data by default
//   }, []);

//   return (
//     <div>
//       <h1>LF Data</h1>

//       {/* Buttons for filtering */}
//       <div className="button-group">
//         <button onClick={() => fetchUsers()}>Show All</button>
//         <button onClick={() => fetchUsers('lost')}>Filter Lost</button>
//         <button onClick={() => fetchUsers('found')}>Filter Found</button>
//       </div>

//       <ul>
//         {users.length > 0 ? (
//           users.map((user) => (
            
//             <li key={user._id}>
//               <div>
//                 <strong>Name:</strong> {user.name}
//                 <p>{user.photo}</p>
//                  <br />
//                 {user.photo ? (
//                 // Assuming user.photo is "/images/filename.jpeg"
// <>
// <img src="http://localhost:9001/public/images/1729783952434.jpeg" alt="" />


//                 <img src={`http://localhost:9001${user.photo}`} alt="User" className="image" />              
// </>
//                 ) : (
//                   <div>No image available</div>
//                 )}
//               </div>
//             </li>
//           ))
//         ) : (
//           <div style={{ textAlign: 'center' }}>
//             <h1>No data available</h1>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// };






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './togetLF.css';

export const ToGetLF = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // Fetch users from the backend API




  //   axios.get('http://localhost:9001/LF/togetLF')
  //     .then((response) => {
  //       setUsers(response.data); // Assuming response.data contains the users array
  //       console.log(users);
        
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // }, []);


  const fetchUsers = (filterType) => {
    let url = 'http://localhost:9001/LF/togetLF';
    if (filterType) {
      url += `?type=${filterType}`; // Append query parameter for filtering
    }

    axios.get(url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  };

  // Fetch all users on initial render
  // useEffect(() => {
  //   fetchUsers(); // Fetch all data by default
  // }, []);



  return (
    <div>
      <h1>LF Data</h1>



      <div className="button-group">
       <button onClick={() => fetchUsers()}>Show All</button>
       <button onClick={() => fetchUsers('lost')}>Filter Lost</button>
       <button onClick={() => fetchUsers('found')}>Filter Found</button>
       </div>

      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user._id}>
              
              <div> 
                <strong>Name:</strong> {user.name} <br />
                {/* Display the uploaded image if available */}
                {user.photo ? (
                  <img src={`http://localhost:9001${user.photo}`} alt="User" className='image'/>                
                ) : (
                  <div>No image available</div>
                )}
              </div>
            </li>
          ))
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h1>No data available</h1>
          </div>
        )}
      </ul>
    </div>
  );
};


