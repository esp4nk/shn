import { useState } from 'react'
import { Nav } from './components/nav/nav.jsx'
import { Page01 } from './components/page01/page01.jsx'
import { Page02 } from './components/page02/page02.jsx'


import { useEffect } from 'react'


function App() {



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://databit.online/api?token=3eaf82ca-0a30-4f14-8313-937c8b26a0f1&type=cpftype&query=39157460884');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('zx', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);


  return (
    <>
      <Nav />
      <Page02 />
    </>
  )
}

export default App
