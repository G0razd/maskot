import React from "react"

const Info = () => {
  return (
    <div id="info">
      <h1 className="pb-4 text-4xl font-semibold">Základní informace o kurzu</h1>
      <p>
        <b>Termín: </b>
        8. - 11. října 2021
      </p>
      <p>
        <b>Místo: </b>
        <a className="link-primary" href="https://www.ctujm.cz/oburka/oburkauvod.htm">
          Školící a vzdělávací středisko ČTU Blansko – Obůrka
        </a>
      </p>
      <p>
        <b>Ubytování: </b>
        Ve zděné budově s plnou penzí
      </p>
      <p>
        <b>Cena kurzu: </b>
        jen 200 Kč (výrazně vyšší část hradí Ústav matematiky a statistiky), v ceně je ubytování a
        strava
      </p>
      <p className="font-bold">Přihlášky se podávají do 30. října 2020.</p>
      <p>
        <b> Počet účastníků: </b>
        maximálně 30 Je však možné, že někdo na poslední chvíli nebude moci jet, proto se klidně
        přihlaste, i když bude kapacita kurzu naplněna. Všechny budeme samozřejmě kontaktovat. V
        případě jakýchkoliv otázek, problémů či připomínek můžete psát na adresu:
        <a className="link-primary" href="mailto:seznamovak@math.muni.cz">
          {" "}
          seznamovak@math.muni.cz
        </a>
        .
      </p>
    </div>
  )
}

export default Info
