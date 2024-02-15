const produkty = [
    { nazev: "Tužka", cena: 10, mnozstvi: 100 },
    { nazev: "Sešit", cena: 20, mnozstvi: 150 },
    { nazev: "Batoh", cena: 500, mnozstvi: 50 },
    { nazev: "Pravítko", cena: 30, mnozstvi: 75 },
    { nazev: "Pero", cena: 40, mnozstvi: 200 },
    { nazev: "Kalkulačka", cena: 200, mnozstvi: 30 },
    { nazev: "Barvy", cena: 150, mnozstvi: 80 },
    { nazev: "Štětce", cena: 60, mnozstvi: 120 },
    { nazev: "Ležidlo", cena: 300, mnozstvi: 40 },
    { nazev: "Mapa světa", cena: 180, mnozstvi: 60 }
];

function zobrazSeznamProduktu() {
    const produktList = document.getElementById('produkt-list');
    produktList.innerHTML = '';

    produkty.forEach(produkt => {
        const li = document.createElement('li');
        li.textContent = `${produkt.nazev} - Cena: ${produkt.cena} Kč - Množství: ${produkt.mnozstvi}`;
        produktList.appendChild(li);
    });
}

function najitNejdrazsiProdukt() {
    const nejdrazsiProdukt = produkty.reduce((maxProdukt, aktualniProdukt) => {
        return aktualniProdukt.cena > maxProdukt.cena ? aktualniProdukt : maxProdukt;
    }, { cena: 0 });

    const produktList = document.getElementById('produkt-list');
    const nejdrazsiProduktElement = document.createElement('li');
    nejdrazsiProduktElement.textContent = `Nejdražší produkt: ${nejdrazsiProdukt.nazev} - Cena: ${nejdrazsiProdukt.cena} Kč`;
    produktList.appendChild(nejdrazsiProduktElement);
}

function filtrujPodleMnozstvi() {
    const mnozstviFiltr = document.getElementById('mnozstvi-filtr').value;
    const nalezenyProdukt = produkty.find(produkt => produkt.mnozstvi == mnozstviFiltr);

    if (nalezenyProdukt) {
        const produktList = document.getElementById('produkt-list');
        produktList.innerHTML = '';

        const li = document.createElement('li');
        li.textContent = `${nalezenyProdukt.nazev} - Cena: ${nalezenyProdukt.cena} Kč - Množství: ${nalezenyProdukt.mnozstvi}`;
        produktList.appendChild(li);
    } else {
        alert(`Žádný produkt s množstvím ${mnozstviFiltr} nenalezen.`);
    }
}

function spoctiCelkovouHodnotuZasob() {
    const celkovaHodnota = produkty.reduce((soucet, produkt) => soucet + produkt.cena * produkt.mnozstvi, 0);
    document.getElementById('celkova-hodnota').textContent = `${celkovaHodnota} Kč`;
}

function spocitatCelkovouHodnotuZasob() {
    const celkovaHodnota = produkty.reduce((soucet, produkt) => soucet + produkt.cena * produkt.mnozstvi, 0);
    document.getElementById('celkova-hodnota').textContent = `${celkovaHodnota} Kč`;
}

zobrazSeznamProduktu();
najitNejdrazsiProdukt();
spoctiCelkovouHodnotuZasob();

