import dogAndgirl from '../assets/dogWithGirl.png';


function Sectionthree(){
    return(
        

            <section className="section-three">

                <div class="sec-three-img">
                    <img src={dogAndgirl}alt=""/>
                </div>

                <div class="sec-three-info">
                    <h3>Making pet parenting easy for everyone</h3>
                    <p>Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence</p>
                    <ul>
                        <li>Adoption</li>
                        <li>Frozen Raw</li>
                        <li>Next Day Delivery</li>
                    </ul>
                    <button>Explore</button>
                </div>                    

            </section>
  
        
    );
};

export default Sectionthree;