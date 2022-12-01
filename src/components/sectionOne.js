import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import pet3 from '../assets/pet3.png';
import pet4 from '../assets/pet4.png';
import pet5 from '../assets/pet5.png';
import pet6 from '../assets/pet6.png';
import pet7 from '../assets/pet7.png';
import pet8 from '../assets/pet8.png';
import pet9 from '../assets/pet9.png';
import pet10 from '../assets/pet10.png';
import pet11 from '../assets/pet11.png';
import pet12 from '../assets/pet12.png';
import different from '../assets/differentCategory.png';
import jasper from '../assets/dogJasper.png';

function Sectionone(){
    return(
        

            <section className="section-one">

                <img className="sec-one-different" src={different} alt="different"/>

                <div className="sec-one-box-one">
                    <img src={pet1} alt="pet1"/>
                    <img src={pet2} alt="pet2"/>
                </div>

                <div className="sec-one-box-two">
                    <p>Dog (JASPER)</p>
                    <img src={jasper} alt="dogjasper"/>
                </div>

                <div className="sec-one-box-three">
                    <div>
                        <img src={pet3} alt="pet3"/>
                        <img src={pet4} alt="pet4"/>
                        <img src={pet5} alt="pet5"/>
                        <img src={pet6} alt="pet6"/>
                        <img src={pet11} alt="pet11"/>
                    </div>
                    <div className='petbox-two'>
                        <img src={pet8} alt="pet8"/>
                        <img src={pet9} alt="pet9"/>
                        <img src={pet10} alt="pet10"/>
                        <img src={pet7} alt="pet7"/>
                        <img src={pet12}alt="pet12"/>
                    </div>
                </div>                

            </section>
            
        
    );
};

export default Sectionone;