import brownDog from '../assets/brownDog.png'
import arrowR from '../assets/ArrowRight.png'


function Sectionfive(){
    return(
        

            <section className="section-five">

                <div className="sec-five-img">
                    <img src={brownDog} alt="dog"/>
                </div>

                <div className="sec-five-info">
                    <h3>Subscribe & Get Pet Updatenews</h3>
                    <input type="email" placeholder="Mail"/>
                    <button type="submit">
                        <img src={arrowR} alt="arrow"/>
                    </button>
                    <hr/>
                </div>

            </section>
  
        
    )
};

export default Sectionfive;
