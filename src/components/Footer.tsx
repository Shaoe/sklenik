const Footer = () => (
  <div className="h-10">
    <footer className="footer footer-center p-8  bg-base-200 text-base-content ">
      <p className="prose  prose-xl font-bold">
        Kontakt
        <a
          href={"mailto:oz.skleniky@gmail.com"}
          className="underline text-blue-400 hover:text-blue-600"
        >
          oz.skleniky@gmail.com
        </a>
      </p>
      <a href={"https://www.facebook.com/profile.php?id=100091756742140"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className="fill-current"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </footer>
    <footer className="footer footer-center p-5 bg-base-200 text-base-content border-t border-base-300">
      <p className="prose  prose-xl font-bold">Podporili nás</p>

      <div className="grid grid-flow-col gap-4 ">
        <img src="BAlogo_centr_black.svg" className="w-2/3 max-w-xl" />
        <img src="logoAKAop.png" className="w-1/3 max-w-xl" />
      </div>
    </footer>
    <article className="prose max-w-full p-10 bg-base-200 text-base-content border-t border-base-300">
      <h3>Čo je skleník?</h3>
      <p>
        Je združenie ľudí, ktorí sa snažia o revitalizáciu pôvodného objektu
        skleníka z roku 1978 v rámci bývalého poľnohospodárskeho areálu v
        Bratislave. Za týmto účelom bolo v roku 2022 založené občianske
        združenie OZ skleníky, aby sa spoločne jeho členom a priateľom podarilo
        naplniť sebestačnosť produkcie potravín a myšlienky trvalo udržateľného
        rozvoja v mestskom prostredí.
      </p>
      <h3>Ciele združenia:</h3>
      <ul>
        <li>ochraňovať životné prostredie.</li>
        <li>
          aktivity na podporu trvalo udržateľného rozvoja v mestskom prostredí,
          v rámci sebestačnosti produkcie potravín a nevyhnutných potrieb pre
          život a existenciu.
        </li>
        <li>
          aktivity na podporu vybudovania pilotného komunitného centra pre
          trvalo udržateľný rozvoj s využitím ekologicky obnoviteľných zdrojov a
          technologických možností so zameraním na zníženie dopadov vzniku
          globálneho otepľovania a zmeny klímy.
        </li>
        <li>
          oslovovanie štátnych, regionálnych, mestských zastupiteľov a
          inštitúcií za účelom pomoci pri presadzovaní trvalo udržateľného
          rozvoja, využívania ekologických konceptov, recyklácie materiálov,
          potravinovej sebestačnosti a ľudských zdrojov.
        </li>
        <li>
          aktivity vytvorenia legislatívy a podpory týkajúce sa využívania
          obnoviteľných, ekologických zdrojov energie, produkcie potravín a
          bezuhlíkovej mobility pre existenciu obyvateľov v rámci urbanistickej
          štruktúry mesta.
        </li>
        <li>
          propagácia formou tlačových materiálov (vydávanie letákov, brožúr,
          newsletterov), tlačových správ, webu, audio a video materiálov.
        </li>
        <li>tvorba propagačných materiálov (video, audio, tlačových, web).</li>
        <li>
          práca s verejnosťou a so znevýhodnenými skupinami obyvateľstva
          zameraná na osvetu, propagácia ekologických a experimentálnych
          možností získavania energie, šírenie informácií o dostupných
          technológiách, možnostiach recyklácie a udržateľnosti, produkcia
          vlastných potravín, potravinová banka, freefood.
        </li>
        <li>vzdelávanie o trvalo udržateľnej agrokultúre.</li>
        <li>
          podpora a organizovanie spoločenských, umeleckých, kultúrnych,
          športových a iných podujatí, prednášok, školení, seminárov,
          workshopov, vzdelávacích programov, projekcií, kongresov, koncertov,
          networkingových a benefičných akcii. Podpora malého podnikania formou
          poskytovania priestorov, ľudských zdrojov a dobrovoľných príspevkov.
        </li>
        <li>
          organizovanie študijných pobytov svojich členov v zahraničí ako aj
          členov partnerských organizácii.
        </li>
      </ul>
    </article>
  </div>
);

export default Footer;
