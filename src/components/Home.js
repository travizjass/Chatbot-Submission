import React from 'react';
import { useState, useEffect } from 'react';
import './homestyle.scss';
function Home() {




  const [colortheme, setcolortheme] = useState('theme-purple');
  const [data,setData]=useState([])
         
  //  const data=[];
      const fetchApi=async()=>{
        const res = await fetch('https://cryptic-beyond-91383.herokuapp.com/api/theme/getcolor');

        if (res.ok) {
            const d = await res.json();
                setData(d.theme)
            console.log(d.theme);
        }
    };
      

  useEffect(()=>{
    const currenttheme = localStorage.getItem('theme-color');
    if(currenttheme){
      setcolortheme(currenttheme);
    }
     fetchApi();
  }, [])
  const handleClick = (theme) => {
    // console.log(theme)
    setcolortheme(theme.Element);
    localStorage.setItem('theme-color', theme.Element);
  }
  return (
    <div className={`Home-${colortheme}`}>
 
     <div className="theme-options">
     { data.map((Element,i)=><div className="themebox"  key={i} id={Element}
      onClick={()=>handleClick({Element})}
     ></div> )}
      {/* <div className="themebox" id='theme-blue'
        onClick={()=>handleClick('theme-blue')}
     />
     <div className="themebox" id='theme-green'
        onClick={()=>handleClick('theme-green')}
     />
     <div className="themebox" id='theme-purple'
        onClick={()=>handleClick('theme-purple')}
     /> */}
     </div>

     <div className="bubble">
      <h3>Hii!!👋👋</h3>
     </div>
     <div className="bubble">
      <h3>Hey There! This is Wsya's Chatbot!! 🤖</h3>
     </div>
     <div className="bubble">
      <h3>Nice to meet you ❤️</h3>
     </div>
    </div>
  );
}

export default Home;
