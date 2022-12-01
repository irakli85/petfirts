import scope from '../assets/scope.png'
import scissors from '../assets/scissors.png'
import arrows from '../assets/arrows.png'

function Sectiontwo(){
    return(
        

            <section className="section-two">

                <h2>Our Service</h2>
                <div className="sec-two-box">

                    <div class="sec-two-box-item item-1">
                        <div className="boxtwoicon-box">
                            <img src={scope} alt="scope"/>
                        </div>
                        <h3>Pharmacy</h3>
                        <p>Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation</p>
                        <button className="boxtwo-btn-one">Explore</button>
                    </div>

                    <div class="sec-two-box-item item-2">
                        <div className="boxtwoicon-box iconbox-two">
                            <img src={scissors} alt="scissors"/>
                        </div>
                        <h3>Breed-specific Haircuts</h3>
                        <p>Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting.</p>
                        <button className="boxtwo-btn-two">Explore</button>
                    </div>      
                
                </div>

                <div className="sec-two-arrows">
                    <img src={arrows} alt="arrows"/>
                </div>    

            </section>
  
        
    )
};

export default Sectiontwo;