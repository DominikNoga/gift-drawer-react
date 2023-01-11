function GiftList({wishes, wishFuction, other}) {
    return (
        <section className="wishes">
            {
                wishes.map((wish, i) =>(
                   <div className={i%2 === 0 ? "wish--white" : "wish--gray"} key={i}>
                        {other && wish.bought && <div className='line'></div>}
                        <span className="wish__description">{wish.description}</span>
                        <span className="wish__links">
                            {wish.links.map((link, i) =>(
                                link.length > 0 && <span key={i} className="link"><a rel="noreferrer" target="_blank" href={link}>Link</a></span>
                            ))}
                        </span>
                        <button onClick={() => {wishFuction(i)}} title={"delete this wish"} className="btn--circle">x</button>
                    </div>
                ))
            }
        </section>
    )
}

export default GiftList