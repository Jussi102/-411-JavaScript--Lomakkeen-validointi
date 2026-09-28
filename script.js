


    document.getElementById("laheta").addEventListener("click", function(event) {
        event.preventDefault();
    let ID = document.getElementById("kayttajaID").value;
    let salasana = document.getElementById("salasana").value;
    let nimi = document.getElementById("nimi").value;
    let osoite = document.getElementById("osoite").value;
    let maa = document.getElementById("maa").value;
    let postiNumero = document.getElementById("postiNumero").value;
    let sahkoPosti = document.getElementById("sahkoPosti").value;
    let sukuPuoli = document.querySelector('input[name="sukupuoli"]:checked')?.value || "";
    let lisaTiedot = document.getElementById("lisatiedot").value;

    let kieli = document.querySelector('input[name="suomi"]').checked
        ? "Suomi"
        : document.querySelector('input[name="muu"]').checked
        ? "Muu kuin suomi"
        : "";


    const kayttaja = {
        kayttajaID: ID,
        salasana: salasana,
        nimi: nimi,
        osoite: osoite,
        maa: maa,
        postiNumero: postiNumero,
        sahkoPosti: sahkoPosti,
        sukuPuoli: sukuPuoli,
        kieli: kieli,
        lisaTiedot: lisaTiedot
    }


// if-lausekkeet..


    if (ID.length < 6) {
        console.log("KäyttäjäID:n tulee olla vähintään 6 merkkiä pitkä")
    }

    if (salasana.length < 6) {
        console.log("Salasanan tulee olla yli 6 merkkiä pitkä.");
        return;
    }   
    
    let erikoismerkit = "!@£$€%#";
    let loytyi = false;
    let kirjainLoyto = false;
    let alkuKirjain = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numerot = "0123456789";
    let numeroLoyto = false;

    //for loopit

    for (let i = 0; i < erikoismerkit.length; i++) {
        if (salasana.includes(erikoismerkit[i])) {
            loytyi = true;
        }
    }

    for (let i = 0; i < alkuKirjain.length; i++) {
        if (salasana.includes(alkuKirjain[i])) {
            kirjainLoyto = true;
        }
    }

    for (let i = 0; i < numerot.length; i++) {
        if (salasana.includes(numerot[i])) {
            numeroLoyto = true;
        }
    }

    // if lausekkeet...

    if (!loytyi) {
        console.log("Salasanassa tulee olla vähintään yksi erikoismerkki.");
    }

    if (!kirjainLoyto) {
        console.log("Salasanassa tulee olla iso kirjain!");
    }

    if (!numeroLoyto) {
        console.log("Salasanassa tulee olla iso numero");
    }

    if (postiNumero.length < 5) {
        console.log("Postinumerossa tulee olla 5 numeroa.")
    }

    if (!sahkoPosti.includes("@") || !sahkoPosti.includes(".")) {
    console.log("Sähköposti tulee sisältää merkit @ ja .");
} else {
    console.log(kayttaja);
}

    });




