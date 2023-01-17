import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import {Link, useNavigate } from "react-router-dom";
import UsingInstruction from "../components/UsingInstruction";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

function Home() {
  const [eventName, setEventName] = useState("");
  const navigate = useNavigate();
  const startEventCreation = (eventName) =>{
    sessionStorage.setItem("eventName", eventName)
    navigate("/createEvent");
  }
  return (
    <>
      <main className="main">
        <header className="header">
            <section className="main__section">
                <h1 className="section__title">
                    Thanks to GiftDrawer throwing a secret santa party
                    will never cause you any problems again 
                </h1>
                <div className="inputField">
                    <input 
                        type="text" 
                        className="main__input"
                        placeholder="Event name..."
                        value={eventName}
                        onChange={(e)=>{
                            setEventName(e.target.value)
                        }}
                    />
                    <button 
                        className="insideBtn"
                        onClick={
                            () =>{
                                startEventCreation(eventName)
                            }
                        }
                    >
                        Create
                    </button>
                </div>       
                <Link className="joinEventLink" to="/joinEvent">Join existing event</Link>
                <a title="See how to use our app" className="scrollToInstruction" href="#about">
                    See how to use our app
                    <br />
                    <FontAwesomeIcon icon={solid("chevron-down")} />
                </a>         
            </section>
            <img src={require('../img/santa.png')} className="leftDownImg" alt="" />
            <img src={require('../img/reindeer.png')} className="topRightImg" alt="" />
        </header>
        <UsingInstruction/>
        <footer className="footer">Merry X-mas !!</footer>    
    </main>
    </>
  )
}

export default Home