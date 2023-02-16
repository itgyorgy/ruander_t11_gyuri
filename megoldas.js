//Javascript felmérő
// Révay György Zoltán Ruander Team11

// 1. feladat: hosszEllenor() – Bemeneti paraméterek száma: 1 (szöveg)

function hosszEllenor (szoveg) {
    //szoveg = false;
    if (szoveg.length>=8) {
    	return true;
    }
    else {
    	return false;
    }
}

document.write("<hr> <b>1. feladat: hosszEllenor: </b>");
document.write(`<br> ${hosszEllenor("teszt")}`);
document.write(`<br> ${hosszEllenor("feladatteszt")}`);



// 2. feladat: tajSzamEllenor () – Bemeneti paraméterek száma: 1 (számsor szövegként)





// 3. feladat: tombTerjedelem() – Bemeneti paraméterek száma: 1 (tömb)
    
let vizsgaltTomb= [3, 5, 10, 16, 9];
	let minErtek = vizsgaltTomb[0];
		for(let i=1;i<vizsgaltTomb.length;i++){
			if(vizsgaltTomb[i]<minErtek) {
				minErtek=vizsgaltTomb[i];
				}
		}

let maxErtek = vizsgaltTomb[0];
	for(let i=1;i<vizsgaltTomb.length;i++){
		if(vizsgaltTomb[i]>maxErtek) {
			maxErtek=vizsgaltTomb[i];
			}
		}

function tombTerjedelem(){
	return maxErtek-minErtek;
    }

document.write("<hr><b> 3. feladat: tombTerjedelem</b>");
document.write("<br>A tömb legkisebb elemének értéke: "+minErtek);
document.write("<br>A tömb legnagyobb elemének értéke: "+maxErtek);
document.write("<br><b>A tömb terjedelme: </b>"+tombTerjedelem(vizsgaltTomb));

tombTerjedelem();





// 4. feladat: legidosebbDolgozo() – Bemeneti paraméterek száma: 1 (objektum)

const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]





function legidosebbDolgozo(Dolgozok){
	let kor = Dolgozok[0].kor;
    for (i=0; i<Dolgozok.length; i++) {
    	if (Dolgozok[i].kor>kor) {
        	push.Dolgozok[i].kor
        }
    }
}
//document.write(`${Dolgozok[i].nev}`);

let idos = legidosebbDolgozo();
document.write(` idős dolgozó: ${idos}${Dolgozok[i].nev}`);


//fizetesEmeles();



// 5. feladat: fizetesEmeles() – Bemeneti paraméterek száma: 1 (objektum)




//tajSzamEllenor();


