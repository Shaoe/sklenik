const SupportUs = () => {
  const zamestnanecUrl =
    "https://drive.google.com/file/d/1hzHa43GVO_43xKVfnpBfgUZ8CIIBhKEl/view";
  const fizOsobaAUrl =
    "https://drive.google.com/file/d/1B7KnvvR7tUhbaHQMy1JVkU0BOsDy0T8I/view";
  const fizOsobaBUrl =
    "https://drive.google.com/file/d/1WgQJdsSDYutHZUmL8gbgkBTeFYD-rhXe/view";
  const pravOsobaUrl =
    "https://drive.google.com/file/d/1Vli_UFIBFNT-s9U2hnIZJZyQNDNrnxAu/view";
  // const dobrovolnikUrl =
  //   "https://drive.google.com/file/d/1hzHa43GVO_43xKVfnpBfgUZ8CIIBhKEl/view"; //TODO zla linka

  return (
    <article
      id="support_us"
      className="prose max-w-full text-base-content border-t border-base-300 text-justify lg:text-left"
    >
      <p className="font-bold text-center">PODPORTE NÁS DAROVANÍM 2%</p>

      <p className=" font-bold">Zamestnanci</p>
      <ul>
        <li>
          Do <b>15.2.2025</b> požiadajte zamestnávateľa o vykonanie ročného
          zúčtovania preddavkov na daň z príjmov a vystavenie potvrdenia o
          zaplatení dane.
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={zamestnanecUrl}>
            Vyplňte vyhlásenie o poukázaní 2% dane
          </a>
          . Uveďte meno, rodné číslo, bydlisko a sumu zodpovedajúcu 2%
          zaplatenej dane.
        </li>
        <li>
          Najneskôr do <b>30.4.2024</b> pošlite vyhlásenie daňovému úradu v
          mieste vášho trvalého bydliska.
        </li>
      </ul>

      <p className=" font-bold">
        Ak podávate daňové priznanie sami ako fyzické osoby (FO)
      </p>
      <ul>
        <li>
          Vypočítajte si Vaše 2% z dane z príjmov fyzickej osoby - to je
          maximálna suma, ktorú môžete poukázať v prospech našej organizácie.
          Poukázať môžete aj menej ako 2%, ale suma nesmie byť nižšia ako 3€.
        </li>
        <li>
          Ak máte iba príjmy zo závislej činnosti vyplňte{" "}
          <a target="_blank" rel="noopener noreferrer" href={fizOsobaAUrl}>
            Daňové priznanie fyzických osôb TYP A
          </a>
          , Potvrdenie o podaní daňového priznania, alebo ak máte príjmy podľa §
          5 až 8 zákona č. 595/2003 Z. z. o dani z príjmov v znení neskorších
          predpisov vyplňte{" "}
          <a target="_blank" rel="noopener noreferrer" href={fizOsobaBUrl}>
            Daňové priznanie fyzických osôb TYP B
          </a>
          , Potvrdenie o podaní daňového priznania.
        </li>
        <li>
          Riadne vyplnené daňové priznanie pošlite do <b>31.3.2024</b> na váš
          daňový úrad. V prípade osobného podania na daňovom úrade je potrebné
          predložiť aj Potvrdenie o podaní daňového priznania. Ak patríte medzi
          daňovníkov, ktorí majú povinnosť podávať daňové priznanie
          elektronicky, do <b>31.3.2024</b> odošlite daňové priznanie
          prostredníctvom elektronického systému.
        </li>
      </ul>

      <p className=" font-bold">Právnické osoby (PO)</p>
      <ul>
        <li>
          Právnické osoby môžu asignovať 2 % len v tom prípade, ak počas roka
          alebo najneskôr do termínu podania daňového priznania darovali pre
          neziskové organizácie sumu vo výške minimálne 0,5 % zaplatenej dane. V
          opačnom prípade môžu poukázať len 1,5 % zaplatenej dane.
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={pravOsobaUrl}>
            Daňové priznanie právnických osôb
          </a>{" "}
          podajte elektronicky do <b>31.3.2024</b>.
        </li>
      </ul>

      <p className=" font-bold">Pracovali ste ako dobrovoľník? Darujte 3%</p>
      <p>
        Ak ste v roku 2023 pracovali aspoň 40 hodín ako dobrovoľník, máte
        možnosť venovať 3% z dane -{" "}
        {/* <a target="_blank" rel="noopener noreferrer" href={dobrovolnikUrl}> */}
        požiadajte organizáciu, pre ktorú ste pracovali ako dobrovoľník/čka o
        potvrdenie tejto práce
        {/* </a> */}.
      </p>
      <br />
    </article>
  );
};

export default SupportUs;
