import blueOrnament from '../assets/blueOrnament1.png';
import dogInhoody from '../assets/doginHoody.png';
import arrowUp from '../assets/arrowUp.png';
import sliderBtn from '../assets/sliderButtons.png';
import arrowDown from '../assets/arrowDown.png';

function Main(){
  return(
    
      <main>

        <div className="main-box-one">

          <div className="main-box-one-heading">
            <img className="main-box-arrow" src={blueOrnament} alt="blueOrnament1"/>
            <h2 className="main-box-heading">Available in select states</h2>
          </div>

          <h1>A pet-first<br/><span className="main-approach">approach to</span><br/>wellness</h1>

          <button className="main-btn">Learn More</button>
        </div>

        <div className="main-box-two">
          <img className="main-dogimg" src={dogInhoody} alt="doginHoody"/>
          <div className="main-box-two-slider">
            <img className="main-slider-one" src={arrowUp} alt="arrowup"/>
            <img className="main-slider-two" src={sliderBtn} alt="sliderButtons"/>
            <img className="main-slider-three" src={arrowDown} alt="arrowDown"/>
          </div>
        </div>
        
      </main>
    
  );
};

export default Main;