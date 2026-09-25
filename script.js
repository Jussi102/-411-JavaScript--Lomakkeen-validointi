


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
        kieli: kieli
    }

    console.log(kayttaja)

    });




