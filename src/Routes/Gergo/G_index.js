import React from 'react'
import "./G_index.css"
import p1 from "./assets/474923330_1685447045342770_7798102984512985406_n.jpg"
import p2 from "./assets/476386637_1136788998118664_7014420533502227881_n.jpg"
import p3 from "./assets/477248936_483092181322232_4099367182794330065_n.jpg"
import p4 from "./assets/images (1).jpg"
import p5 from "./assets/images.jpg"
import { Link } from 'react-router-dom'

function G_index() {
  return (
    <div className='body h-full w-full'>
      <div className="doboz">
          <h1 className='text-center text-4xl p-5'>Üdvözöllek a Gergő oldalon!</h1>
          <h2 id='h2' className="text-center text-2xl p-10"> <u>20 érdekesség rólam</u>(13)</h2 >
          
          <p>Származásom: <b> Pogány</b>, régen Pécsben kertvárosba laktunk  ( <strong>Nem</strong> , nem vagyok sem <s> afrikai </s>, <s> indiai</s> vagy <s> pakisztáni</s> !!)</p>
          <br></br>
          <p>Egyéb adatok:</p>
          <table className='table'>
              <tr>
                  <th>magasságom</th>
                  <th>súly (kg)</th>
                  <th>BMI:</th>
              </tr>
              <tr>
                  <td>190cm</td>
                  <td>67kg</td>
                  <td>18.6</td>
              </tr>
          </table>
          <p className='mt-5'>Szabadidős tevékenységeim: 
            <li>alszok</li> 
            <li>erőnlét fenntartása</li> 
            <li>videójáték</li> 
            
            <p className="kék mt-5">
              Szeretem a rendelkezésre álló időmet hasznosan eltölteni, ha tanulok effektíven, ha alszok akkor sokat, és ha marad időm a játékra akkor, azt megbecsülöm.
              </p>
          </p>
          
          <p class="barna mt-5">Állatok: Van egy kutyám
            <strong> Bütyök</strong> van négy lába és barna. 
            <strong>Faja:</strong>  ismeretlen (keveréknek a keveréke)  
            <br></br> 
            <div className='flex justify-evenly items-center mt-5'>
              <img class="kutya" src={p1} alt="Bütyök" title="Bütyök" /> 
              <img class="kutya2" src={p2} alt="Bütyök" title="Bütyök" /> 
              <img src={p3} alt="Bütyök" title="Bütyök" />
            </div>
          </p>
          <br></br>
          <p> 
            <i>Hobbi:</i>  Röplabda a 
            <a href="https://peac.pte.hu/szakosztalyok/ropalda" target="_blank">PEAC</a> 
            u17, u20A csapatában vagyok jelen
          </p>
          <p>
            <h3 className='mt-5 text-xl'><strong> Célok:</strong></h3> 
            <u>Éretségizni</u> (optimális), munkát szerezni tisztességes jövelemben részesülni, lehetőleg szeressem valamelyest
          </p>
          <p> 
            <u>Elköltözés</u> otthonról és egy új életet kezdeni meghatározott hely nélkül
          </p>
          <p> 
            <h2 className='text-left text-2xl mt-5 mb-5'> 
              <mark> <b>Sok sütit enni</b>, megtanulni a mamám <i>titkos recepteit</i>  
              </mark>
            </h2> 
            <div className='w-full flex justify-evenly items-center'>
              <a href="https://cookpad.com/hu/kereses/s%C3%BCtem%C3%A9ny" target="_blank">
                <img src={p4} alt="süti" title="süti"/>
              </a> 
              <a href="https://cookpad.com/hu/kereses/s%C3%BCtem%C3%A9ny" target="_blank" > 
                <img src={p5} alt="süti" title="süti" />
              </a>
            </div>
            </p>
          <br></br>
          <p class="züd">Nagyjából összefoglaltam az érdekességeket magamról, ennyi lett volna.</p>
          <p class="link"> <Link to={"/school_portfolio_web"}>Vissza a menübe</Link></p>
      </div>
    </div>
  )
}

export default G_index