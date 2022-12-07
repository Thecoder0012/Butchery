import React from "react"
import "../css/About.css";
import ButcherImage from "../images/Butcher.jpg"



export const About = () => {

    return (
        <div className="body-about">
            <section className="about-section">
                <div className="main">
            <img className="about-image" src={ButcherImage} alt="Butcher" />
        <div className="about-text">
  <h1> Hvem er vi?</h1>


  
    <h2>Vores historie</h2>
    <p>Hos slagteren har vi siden 1955 leveret kød til mange glade kunder!
        Fra Nørrebrogade 22 hvor Hr. Hansen åbnede den første butik, udaf i dag over 12 butikker
        i hele København og Nordsjælland! Vi bestræber os altid efter at yde det bedste service
        til alle vores kunder.
    </p>
    
  
    <h3>Økologisk kød</h3>
    <p>Hos Slagteren vælger vi med omhu! Derfor har vi i over 10år haft en fast aftale
       med Økologigården Nordsjælland, for at levere frisk kød af dyr, der er blevet behandlet ordenligt!</p>
  
       <h4>Kontakt os i dag!</h4>
       <p>Tøv ikke med at kontakte os!</p>
       <p>Du kan skrive til os på vores mail: slagteren@hotmail.com og vi vil bestræbe os efter at svare så hurtigt som muligt!</p>
  
            <p>Du kan også fange os på tlf. nr.: 123456789 alle hverdage fra 09-15 og weekender fra 10-13.</p>
            <p>Vi glæder os til at høre fra dig!</p>
            <p>Bedste hilsner, dit slagter team hos Slagteren.</p>
            
            </div>
            </div>
  </section>
                </div>
                


        
    );
}
export default About;




