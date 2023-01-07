import { useState } from "react"
import {Link, useNavigate } from "react-router-dom";
import UsingInstruction from "../components/UsingInstruction";

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
                <h2 className="section__title">
                    Thanks to GiftDrawer throwing a secret santa party
                    will never again cause you any problems
                </h2>
                <div className="inputField">
                    <input 
                        type="text" 
                        className="main__input" 
                        placeholder="Give a name to your event ..."
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
                    <Link className="joinEventLink" to="/joinEvent">Join existing event</Link>
                </div>
            </section>
        </header>
        <UsingInstruction/>
        <footer className="footer">Merry X-mas !!</footer>    
    </main>
    </>
  )
}

export default Home