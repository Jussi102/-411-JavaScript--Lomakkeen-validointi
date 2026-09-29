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

    let piste = 0;

    let kieli = document.querySelector('input[name="suomi"]:checked')
        ? "Suomi"
        : document.querySelector('input[name="muu"]:checked')
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
    };

    let erikoismerkit = "!@£$€%#";
    let loytyi = false;
    let kirjainLoyto = false;
    let alkuKirjain = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numerot = "0123456789";
    let numeroLoyto = false;


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

    // Numero
    for (let i = 0; i < numerot.length; i++) {
        if (salasana.includes(numerot[i])) {
            numeroLoyto = true;
        }
    }



    if (ID.length < 6) {
        document.querySelector(".vaarin p").innerHTML =
            "KäyttäjäID:n on oltava vähintään<br>6 merkkiä pitkä".toUpperCase();
    } else {
        piste++;
    }

    if (salasana.length < 6) {
        document.querySelector(".vaarin p").innerHTML =
            "Salasanan tulee olla vähintään<br>6 merkkiä pitkä".toUpperCase();
    } else {
        piste++;
    }

    if (!loytyi) {
        document.querySelector(".vaarin p").innerHTML =
            "Salasanassa pitää olla<br>vähintään yksi erikoismerkki".toUpperCase();
    } else {
        piste++;
    }

    if (!kirjainLoyto) {
        document.querySelector(".vaarin p").innerHTML =
            "Salasanassa pitää olla<br>iso kirjain".toUpperCase();
    } else {
        piste++;
    }

    if (!numeroLoyto) {
        document.querySelector(".vaarin p").innerHTML =
            "Salasanassa pitää olla<br>yksi numero".toUpperCase();
    } else {
        piste++;
    }

    if (postiNumero.length !== 5 || isNaN(postiNumero)) {
        document.querySelector(".vaarin p").innerHTML =
            "Postinumerossa pitää olla<br>5 numeroa".toUpperCase();
    } else {
        piste++;
    }

    if (!sahkoPosti.includes("@") || !sahkoPosti.includes(".")) {
        document.querySelector(".vaarin p").innerHTML =
            "Sähköpostin pitää sisältää<br>merkit @ ja .".toUpperCase();
    } else {
        piste++;
    }


    if (ID === "") {
    document.querySelector(".vaarin p").innerHTML = "KäyttäjäID on pakollinen";
    return;
}

    if (salasana === "") {
        document.querySelector(".vaarin p").innerHTML = "Salasana on pakollinen";
        return;
    }

    if (nimi === "") {
        document.querySelector(".vaarin p").innerHTML = "Nimi on pakollinen";
        return;
    }

    if (osoite === "") {
        document.querySelector(".vaarin p").innerHTML = "Osoite on pakollinen";
        return;
    }

    if (maa === "") {
        document.querySelector(".vaarin p").innerHTML = "Valitse maa";
        return;
    }

    if (postiNumero === "") {
        document.querySelector(".vaarin p").innerHTML = "Postinumero on pakollinen";
        return;
    }

    if (sahkoPosti === "") {
        document.querySelector(".vaarin p").innerHTML = "Sähköposti on pakollinen";
        return;
    }
    if (sukuPuoli === "") {
    document.querySelector(".vaarin p").innerHTML =
        "Valitse sukupuoli";
    return;
    }

    if (kieli === "") {
        document.querySelector(".vaarin p").innerHTML =
            "Valitse kieli";
        return;
    }

    if (piste === 7) {
        document.querySelector(".vaarin p").innerHTML = "";
        document.querySelector(".vaarin h1").innerHTML = "Tiedot <br> TALLENNETTU..";

        console.log(kayttaja);

        document.querySelector("form").reset();
    }
});