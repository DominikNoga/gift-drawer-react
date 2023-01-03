function UsingInstruction() {
  return (
    <div>
      <section className="about">
            <article className="main__article">
                <h1 className="article__title">
                    Aplikacja powstała z myślą o tym, by ułatwić Ci zorganizowanie losowania w gronie Twoich znajomych
                </h1>
                <p className="article__subtitle">
                    Teraz brak jednej osoby nie przeszkodzi Wam w dobraniu się na Mikołajki. 
                    Wystarczy utworzyć wydarzenie, dodać jego uczestników wpisując ich imiona! 
                    GiftDrawer wygeneruje dla was unikalną grupę. Wewnątrz, której każdy będzie mógł wylosować swoją parę,
                    jak również dodać listę swoich życzeń
                </p>
                <section className="instruction">
                    <ul className="instruction__list">
                        <li className="instruction__point">
                            <h3 className="instruction__point--title"> 
                                Opisz wydarzenie
                            </h3>
                            Wpisz nazwę i opis wydarzenia, które zobaczą Twoi znajomi po otrzymaniu zaproszenia do losowania.
                            Na przykład takim tytułem może być “Mikołajki klasy 6b”, a opis “Maksymalna kwota prezentu 50zł. Nie kupujemy słodyczy!
                        </li>
                        <li className="instruction__point">
                            <h3 className="instruction__point--title">
                                Dodaj uczestników
                            </h3>
                            Wpisz nazwy uczestników (np imię i nazwisko). Powinna to być unikalna nazwa oraz na tyle czytelna by było wiadomo o kogo chodzi.
                            Pamiętaj by wpisać siebie jeśli bierzesz udział.
                        </li>
                        <li className="instruction__point">
                            <h3 className="instruction__point--title"> 
                                Prześlij linki
                            </h3>
                            Wyślij unilakny link uczestnika do swojego znajomego za pomocą komunikatora, którego używacie np messanger, email czy sms.
                            Uważaj, by nie wysłać linku do niewłaściwej osoby.
                        </li>
                        <li className="instruction__point">
                            <h3 className="instruction__point--title">
                                Losuj!
                            </h3>
                            Po rozesłaniu linków zacznijcie losować swoją parę. Po wejściu na unikalny link zostaniesz zaproszony do losowania.
                            Po kliknięciu w losuj wyświetli się osoba, która została przypisana do Ciebie.
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    </div>
  )
}

export default UsingInstruction
