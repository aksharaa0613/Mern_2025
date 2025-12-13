const Chocolate = (ch) =>{
    return(
        <div>
            <p>Favorite chocolates</p>
            <ol>
                <ul>
                    <li>{ch.choc1}</li>
                    <li>{ch.choc2}</li>
                    <li>{ch.choc3}</li>
                </ul>
            </ol>
        </div>
    )
}
export default Chocolate;