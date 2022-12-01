import image from "../images/frontpage.jpeg"
import background from "../images/background.jpeg"
import "../css/FrontPageImage.css";


export function FrontPageImage() {
 return(

        <div>
            

                <div className="image-container">

                <img className="background" src={background} alt="FrontPage Image" />
                <img className="frontpage-image" src={image} alt="FrontPage Image" />
                </div>
      
                <div className="frontpage-text">
                <h2>
                      Velkommen Til Vores Slagter
                 </h2>
                </div>
       

                <div className="popular-products">
                <h2>
                      Vores Mest Populære Produkter
                 </h2>
                </div>

          </div>


 );
  
}

export default FrontPageImage;