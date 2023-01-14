import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'
function UsingInstruction() {
    const lpar = "("
    const ppar =")"
  return (
    <div>
      <section className="about">
            <article className="main__article">
                <h1 className="article__title">
                    Application was created to help you and your friends organise secret santa party
                </h1>
                <p className="article__subtitle">
                    Now absence of one person won't interrupt you during drawing.
                    You just have to create event and add your friends by typing their names!
                    GiftDrawer will genarate for you a unique id number.
                    Using this number you will be able to log into your event page.
                    Where all the magic happens <FontAwesomeIcon icon={solid("wand-magic-sparkles")}/>.
                </p>
                <section className="instruction">
                    <ul className="instruction__list">
                        <li className="instruction__point">
                            <h3 className="instruction__point--title"> 
                                Give a name to your event
                            </h3>
                            Add a name and click create
                        </li>
                        <li className="instruction__point">
                            <h3 className="instruction__point--title">
                                Fill the event creation form
                            </h3>
                            Enter maximal price for the gift {lpar}it is not required{ppar} date of the party and create password.
                            Later add members to the party by typing their names{lpar}Names must be unique{ppar}. Rembember to insert your
                            name if you are taking part in the event
                        </li>
                        <li className="instruction__point">
                            <h3 className="instruction__point--title"> 
                                Log into your event page
                            </h3>
                            After the creation of the event you will be transferred to the log in page. Id number will be automatically
                            entered. <b>Save this number because you won't be able to change or retrieve it in case of forgetting it</b>.
                            Enter your name and password {lpar}Do not log into other user account!! If you don't want to spoil all the fun{ppar}
                        </li>
                        <li className="instruction__point">
                            <h3 className="instruction__point--title">
                                Draw!!
                            </h3>
                            After logging in you will see a green button. You can click it and our system will choose random person for you.
                            You can also add your own wishlist and check other pepole lists
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    </div>
  )
}

export default UsingInstruction
