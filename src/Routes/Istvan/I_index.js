import React from 'react';
import PFP from "./assets/ISTI.jpeg"

function I_index() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-8">
      <header className="bg-blue-800 p-6 text-center rounded-lg mb-8 shadow-lg mt-10">
        <h1 className="text-4xl font-extrabold">20 dolog rólam</h1>
      </header>

      <section id="about" className="mb-10 p-10 bg-white text-gray-900 rounded-lg shadow-lg">
        <p className="text-lg mb-6 text-justify">
          A mozgás, a sport és az új kihívások mindig is fontos szerepet játszottak az életemben, de emellett szeretek kikapcsolódni a számítógépes játékokkal is. Ez a két világ – az aktív sport és a gaming – tökéletes egyensúlyt teremt az életemben. Ebben az írásban megosztok 20 dolgot magamról, amelyek jellemzőek rám és az életmódomra.
        </p>
        <ul className="list-inside space-y-4 text-lg">
          <li><span className="font-bold text-purple-700">1. A röplabda a szenvedélyem:</span> Gyerekkorom óta imádom a röplabdát. A csapatjáték, a dinamizmus és a versenyzés mind-mind motiválnak benne.</li>
          <li><span className="font-bold text-purple-700">2. Rendszeresen kondizok:</span> Az edzőterem a második otthonom. A kondizás segít abban, hogy erősebb legyek és jobb teljesítményt nyújtsak a pályán is.</li>
          <li><span className="font-bold text-purple-700">3. Fontos számomra a mozgás:</span> Nem telhet el nap valamilyen mozgás nélkül. Ha nem sportolok, akkor is igyekszem aktív maradni.</li>
          <li><span className="font-bold text-purple-700">4. Szeretek új dolgokat kipróbálni:</span> Mindig keresem az új kihívásokat, legyen szó egy új edzésformáról, sportról vagy akár egy új hobbiról.</li>
          <li><span className="font-bold text-purple-700">5. Célorientált vagyok:</span> Ha kitűzök egy célt, addig dolgozom érte, amíg el nem érem. Legyen szó edzésről, versenyről vagy más életterületről, mindig előre tekintek.</li>
          <li><span className="font-bold text-purple-700">6. A csapatmunka fontos számomra:</span> A röplabdában és az életben is hiszek abban, hogy együtt mindig többre vagyunk képesek.</li>
          <li><span className="font-bold text-purple-700">7. Szeretem feszegetni a határaimat:</span> Mindig keresem a módját, hogy jobb legyek, erősebb legyek, és kihozzam magamból a maximumot.</li>
          <li><span className="font-bold text-purple-700">8. Szeretek lábazni:</span> A láberő és a robbanékonyság fejlesztése elengedhetetlen a röplabdához, ezért az egyik legfontosabb napom a kondiban.</li>
          <li><span className="font-bold text-purple-700">9. Az állóképességem folyamatosan fejlesztem:</span> Nemcsak erősnek, hanem kitartónak is kell lennem, ezért a kardió és az intervallumos edzések is részei az edzéstervemnek.</li>
          <li><span className="font-bold text-purple-700">10. Imádok versenyezni:</span> A versenyhelyzetek motiválnak és arra sarkallnak, hogy mindig a legjobb formámat hozzam.</li>
          <li><span className="font-bold text-purple-700">11. A természetben is szeretek sportolni:</span> Futni, túrázni vagy akár szabadtéri edzést végezni mindig feltölt energiával.</li>
          <li><span className="font-bold text-purple-700">12. Nyitott vagyok az új sportra:</span> Ha valaki egy új sportág kipróbálására invitál, ritkán mondok nemet.</li>
          <li><span className="font-bold text-purple-700">13. Fontos számomra az egészséges életmód:</span> A sport mellett az étkezésre is odafigyelek, hiszen tudom, hogy ez is kulcsfontosságú a teljesítményhez.</li>
          <li><span className="font-bold text-purple-700">14. Inspirál mások fejlődése:</span> Szeretem látni, ha valaki eléri a célját és fejlődik, mert ez engem is motivál.</li>
          <li><span className="font-bold text-purple-700">15. A pihenést is komolyan veszem:</span> Bár szeretek aktív lenni, tudom, hogy a regeneráció is kulcsfontosságú.</li>
          <li><span className="font-bold text-purple-700">16. Mindig tanulok valamit a sportból:</span> A sport megtanított kitartásra, önfegyelemre és arra, hogy a kemény munka mindig meghozza a gyümölcsét.</li>
          <li><span className="font-bold text-purple-700">17. A csapattársaim második családom:</span> A röplabda nemcsak egy sport, hanem egy közösség is, amelyben mindig számíthatunk egymásra.</li>
          <li><span className="font-bold text-purple-700">18. A kudarcokból is tanulok:</span> Minden vereség egy új lehetőség arra, hogy fejlődjek és jobb legyek.</li>
          <li><span className="font-bold text-purple-700">19. A sport segít a stressz kezelésében:</span> Ha rossz napom van, egy edzés vagy egy jó meccs mindig segít kikapcsolni és feltöltődni.</li>
          <li><span className="font-bold text-purple-700">20. Szeretek számítógépes játékokkal játszani:</span> A gaming számomra nemcsak szórakozás, hanem egyfajta kikapcsolódás is a sok edzés és mozgás után. Segít ellazulni, stratégiát fejleszteni és néha egy kis versenyszellemet is belevinni.</li>
        </ul>
        <img src={PFP} className='top-[100%] right-[5%] absolute' />
      </section>
    </div>
  );
}

export default I_index;
