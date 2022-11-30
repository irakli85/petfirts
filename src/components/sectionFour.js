import avatar from '../assets/avatar.png'
import quote from '../assets/quote.png'
import slider from '../assets/slider.png'
import arrows from '../assets/arrows.png'

function Sectionfour(){
    return(
        <div className="SectionFour">

            <section className="section-four">

                <div className="sec-four-img">
                    <img className="sec-four-avatar" src={avatar} alt="avatar"/>
                    <div>   
                        <img src={quote} alt="quote"/>
                    </div>
                    <img className="sec-four-slider" src={slider} alt="slider"/>
                </div>
                
                <div className="sec-four-info">
                    <h3>Customer Reviews</h3>
                    <p>As we continue to push for better regulation in the Australian pet food industry it can be hard to trust many pet food brands. Our 2021 Best Cat Food in Australia list will offer you a great starting point in deciding what to feed your cat.</p>
                    <img src={arrows} alt="arrows"/>
                </div>     

            </section>
  
        </div>
    )
};

export default Sectionfour;