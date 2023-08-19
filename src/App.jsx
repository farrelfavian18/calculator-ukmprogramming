// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react'
// import logo from '../public/genshin-genshin-impact.gif'

// function CalculatorPenjumlahan() {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);

//   const Penjumlahan = number1 + number2;

//   return (
//     <div>
//       <div>
//       <img src={logo} alt='gif'/>
//     </div>
//       <h2>Calculator Penjumlahan</h2>
//       <input
//         value={number1}
//         onChange={(e) => setNumber1(parseInt(e.target.value))}
//       />
//     <div>
//       <input
//           value={number2}
//           onChange={(e) => setNumber2(parseInt(e.target.value))}
//         />
//     </div>
//     <div>
//       <p>Hasil = {Penjumlahan}</p>
//     </div>
    
//   </div>
//   );
// }

// export default CalculatorPenjumlahan;
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [quotes, setQuotes] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get("https://strapi-rygs.onrender.com/api/quotes")
      setQuotes(res.data.data)
    }

    fetchData()

  }, []);

  return (
    <div>
      {quotes?.map((item, index) => (
        
        <div>
          {item.attributes.Quote}
          <br />
          - {item.attributes.Author}
          <br />
        </div>

      ))}


    </div>
  );
}
export default App