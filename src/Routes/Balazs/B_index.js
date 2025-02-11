import React from 'react'
import "./B_index.css"
import VID from "./assets/VID_20250211_085454_467.mp4"
import PFP from "./assets/IMG_20250211_173045_992.jpg"

function B_index() {
  return (
    <>
    <div className='p-5'>

    </div>
    <div className='body_g'>
      
    <header className=''>
        <h1 className='h1_b'>20 dolog rólam</h1>
        <nav>
            <ul>
                <li><a href="#about">Rólam</a></li>
                <li><a href="#interests">Érdeklődési kör</a></li>
                <li><a href="#future">Jövőbeli tervek</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2 className='h2_b'>1. Rólam</h2>
        <p><span class="bold">Név:</span> Stier Balázs</p>
        <p><span class="bold">Kor:</span> 16</p>
        <p><span class="bold">Lakóhely:</span> Pécs</p>

        <h3>1. Család</h3>
        <ul>
            <li>Édesanyám: Hajnika</li>
            <li>Édesapám: Petike</li>
            <li>Öcsém: Gergő</li>
            <li>Hugom: Anna</li>
            <li>Nővérem: Ezter(Jolán)</li>
        </ul>

        <h3>2. Barátok</h3>
        <p><span class="italic">Legjobb barátom:</span> Dominik. Együtt nőttünk fel, 1 eves korom óta ismerem.</p>

        <h3>3. Amit szeretek</h3>
        <ul>
            <li><span class="bold">Zene:</span> Pop </li>
            <li><span class="bold">Könyvek:</span> Max ha unatkozok akkor szoktam a bünetetőjogról olvasni</li>
            <li><span class="bold">Hobbi:</span>Motorozás, Motorozás ja és még egyet kihagytam a Motorozás.</li>
        </ul>
    </section>

    <section id="interests">
        <h2 className='h2_b'>2. Érdeklődési kör</h2>
        <p><span class="underline">Zene</span>: A legjobban a pop zenéket szeretem főleg Shawn Mendest.</p>
        <p><span class="underline">Filmek:</span> Búnügyi és nyomozós filmeket kedvelem.</p>

        <h3>1. Kedvenc állataim</h3>
        <ul>
            <li>Kutya</li>
            <li>Oroszlán</li>
        </ul>

        <h3>2.Egy Kép és Videó </h3>
        <img src={PFP}
            alt="Kép rólam" />
        <p>Ez egy kép rólam.</p>
        <video controls>
            <p>Egy videó ahol Dr.Csont felköszönt.</p>
            <source src={VID} type="video/mp4" />
        </video>
        <p>Egy videó ahol Dr.Csont felköszönt.</p>
    </section>

    <section id="future">
        <h2 className='h2_b'>3. Jövőbeli tervek</h2>
        <p>Szeretném befejezni az egyetemet, és elhelyezkedni egy jó munkahelyen a programozás területén, de lehet hogy joggal kapcsolatos ágon tanulok tovább.</p>
        <p>A jövőben szeretnék külföldre költözni (spanyolország) és ott folytatni  a kariert, családot alapítani.</p>

        <h3>1. Táblázat a tervekről</h3>
        <div class="table-container">
            <table className='table'>
                <tr>
                    <th className='table_th'>Év</th>
                    <th className='table_th'>Tervezett cél</th>
                </tr>
                <tr>
                    <td className='table_td'>2028</td>
                    <td className='table_td'>érettsgi megszerzése</td>
                </tr>
                <tr>
                    <td className='table_td'>2031</td>
                    <td className='table_td'>Az elő diploma megszerzése</td>
                </tr>
                <tr>
                    <td className='table_td'>2032</td>
                    <td className='table_td'>Karrierépítés</td>
                </tr>
            </table>
        </div>
    </section>

    </div>
    </>
  )
}

export default B_index