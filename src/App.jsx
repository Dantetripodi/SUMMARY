import { useState  } from 'react'
import './index.css'
 


const App = () => {
// const [log,setLog]=useState(false)

  const [text ,setText]= useState(null)
  // const [ message ,setMessage]=useState(null);

  ;


  async function requestApi() {
     const options = {
      method: 'POST',
      body: JSON.stringify({
       text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch('http://localhost:3000/', options)
      const data = await response.json()
      console.log(data);
      
    } catch (e) {
      console.log(e)
    }
  }
 
 return (
  <>
   {/* {!log && <Login setLog={setLog} />}  */}
   {/* {log &&  */}
  
    <div className='app'>
        <section className='side-bar'>
        <button>+ Nuevo Resumen</button>
        <ul className='history'>
          <li>
            
          </li>
        </ul>
        <nav>
          <p>Hecho por Dante</p>
        </nav>
        </section>
        <section className='main'>
          <h1>RESUMEN GPT</h1>
        <ul className='feed'>
        </ul>
         <div className='bottom-section'>

          <div className='input-container'>
            <input onChange={(e) => setText(e.target.value)}/>
            <div id='submit' onClick={requestApi}>➤</div>
          </div>

          <p className='info'>
            ----Haz tu resumenes favoritos----
          </p>
         </div>
        </section>
      </div>
    {/* } */}
    
     </>
   
  )
}

export default App
