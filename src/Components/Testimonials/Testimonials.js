import React, { useRef} from 'react'
import "./Testimonials.css"
import user_1 from "../../assets/6.png"
import user_2 from "../../assets/2.png"
import user_3 from "../../assets/s2.png"
import user_4 from "../../assets/4.png"
import user_5 from "../../assets/user-1.png"
import user_6 from "../../assets/3.png"
import back_icon from "../../assets/back-icon.png"
import next_icon from "../../assets/next-icon.png"
import Ratting from './Ratting'
//import star from "../../assets/icon/star-18-.png"
const Testimonials = () => {
    const slider =useRef();
    //const [starRate,setStarRate] = useState(5)
    let tx=0;
    function next(){
      if(tx>-50)
      {
        tx-=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`
    }
    function back(){
      if (tx < 0) {
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={() => next()} />
      <img src={back_icon} alt="" className="back-btn" onClick={() => back()} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" width="200px" height="170px" />
                <div>
                  <h4>Bright Future Group Trust</h4>
                  {/* <span>Profession</span> */}

                  {/* <p className='ratting'>
            {Array.from ({ length : Math.round(starRate)}, (_,index) => (
               <img src={star}  key = {index} alt='star-yellow' width="5px" height="5px"/>
            ))}
           </p> */}
                  <Ratting />
                </div>
              </div>
              <p>
                Hurryep's expertise in developing websites and software is
                evident in the seamless functionality
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt=""/>
                <div>
                  <h4>The Simple Works</h4>
                  {/* <span>Profession</span> */}
                  <Ratting />
                </div>
              </div>
              <p>
                I decided to go with Hurryep because of the glowing
                recommendations I received from colleagues. It's clear 
                 professionalism 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h4>S2 Tiles & Ceremics </h4>
                  {/* <span>Profession</span> */}
                  <Ratting />
                </div>
              </div>
              <p>
                The team at Hurryep consistently impressed us with their
                professionalism and dedication. It's clear 
                 professionalism 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt=""/>
                <div>
                  <h4>Ads HandCrafts</h4>
                  {/* <span>Profession</span> */}
                  <Ratting />
                </div>
              </div>
              <p>
                Working with Hurryep on our web development project was great from planning to implementation. The end result was
                a powerful,
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt=""/>
                <div>
                  <h4>MRM Trading</h4>
                  {/* <span>Profession</span> */}
                  <Ratting />
                </div>
              </div>
              <p>
                I chose Hurryep for our website redesign because of their
                reputation for creating visually stunning and innovative
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_6} alt=""/>
                <div>
                  <h4>Parvathi Tradings</h4>
                  {/* <span>Profession</span> */}
                  <Ratting />
                </div>
              </div>
              <p>
                I chose Hurryep for our website redesign because of their
                reputation for creating visually stunning and innovative
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials