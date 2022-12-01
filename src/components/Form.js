import "../css/Home.css";

export const Form = () =>  {

  return (
    <div>

        <form  className="order-form" method="POST">
        <h1>Opret din bestilling</h1>

     <div className="inputs">


          
        <label>Kunde navn</label>
        <input type={"text"} name="customerName" />

        <label>Afhentningstid</label>
        <input type={"datetime-local"} name="pickUpTime" />


        <label>Vælg produkt</label>
        <select name="products">
            <option value="1">Kylling</option>
            <option value="2">Oksekød</option>
            <option value="3">Kalvekød</option>
        </select>

        <label>Antal</label>
        <input type={"number"} name="quantityOfProducts" />

        <input className="submit" type="submit" value={"Bestil"}/>
        </div>
        </form>
    </div>
  )
}
