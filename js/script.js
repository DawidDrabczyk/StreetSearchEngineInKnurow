const searchInput = document.querySelector(".search-input");
const streetsItems = document.querySelectorAll(".streets-item");
const popup = document.querySelector(".streets-popup");
const closeBtn = document.querySelector(".close-btn");
let heading = document.querySelector(".street-popup-heading");
let description = document.querySelector(".street-popup-describtion");
const map = document.querySelector('iframe')

const firstMay = document.getElementById('1maja')
const twentySixthFeb = document.getElementById('26stycznia')
const mickiewicza = document.getElementById('mickiewicza')
const akacjowa = document.getElementById('akacjowa')
const alejaLipowa = document.getElementById('aleja-lipowa')
const alejaPiastow = document.getElementById('aleja-piastow')
const alejaSpacerowa = document.getElementById('aleja-spacerowa')
const puszkina = document.getElementById('puszkina')
const sloniny = document.getElementById('sloniny')
const armiiKrajowej = document.getElementById('armii-krajowej')
const astrow = document.getElementById('astrow')
const beksza = document.getElementById('beksza')
const bojowa = document.getElementById('bojowa')
const chrobrego = document.getElementById('chrobrego')
const prusa = document.getElementById('prusa')
const chabrowa = document.getElementById('chabrowa')
const chmielna = document.getElementById('chmielna')
const cicha = document.getElementById('cicha')
const debowa = document.getElementById('debowa')
const deszczowa = document.getElementById('deszczowa')
const ogana = document.getElementById('ogana')
const jordana = document.getElementById('jordana')
const dworcowa = document.getElementById('dworcowa')
const dywizjonu303 = document.getElementById('dywizjonu303')
const plater = document.getElementById('plater')
const michalskiego = document.getElementById('michalskiego')
const floriana = document.getElementById('floriana')
const chopina = document.getElementById('chopina')
const gornicza = document.getElementById('gornicza')
const graniczna = document.getElementById('graniczna')
const grunwaldzka = document.getElementById('grunwaldzka')
const gryczana = document.getElementById('gryczana')
const sienkiewicza = document.getElementById('sienkiewicza')
const wieniawskiego = document.getElementById('wieniawskiego')
const kollataja = document.getElementById('kollataja')
const krasickiego = document.getElementById('krasickiego')
const paderewskiego = document.getElementById('paderewskiego')
const jagielnia = document.getElementById('jagielnia')
const brzechwy = document.getElementById('brzechwy')
const dymka = document.getElementById('dymka')
const kilinskiego = document.getElementById('kilinskiego')
const kochanowskiego = document.getElementById('kochanowskiego')
const kwitka = document.getElementById('kwitka')
const matejki = document.getElementById('matejki')
const sobieskiego = document.getElementById('sobieskiego')
const dabrowskiego = document.getElementById('dabrowskiego')
const jasminowa = document.getElementById('jasminowa')
const jeczmienna = document.getElementById('jeczmienna')
const jednosci = document.getElementById('jednosci')
const zietka = document.getElementById('zietka')
const jesienna = document.getElementById('jesienna')
const janty = document.getElementById('janty')
const lompy = document.getElementById('lompy')
const ligonia = document.getElementById('ligonia')
const slowackiego = document.getElementById('slowackiego')
const kapelanow = document.getElementById('kapelanow')
const hlonda = document.getElementById('hlonda')
const miarki = document.getElementById('miarki')
const szymanowskiego = document.getElementById('szymanowskiego')
const kazimierza = document.getElementById('kazimierza')
const klasztorna = document.getElementById('klasztorna')
const damrota = document.getElementById('damrota')
const kopalniana = document.getElementById('kopalniana')
const koscielna = document.getElementById('koscielna')
const kosmonautow = document.getElementById('kosmonautow')
const krotka = document.getElementById('krotka')
const krucza = document.getElementById('krucza')
const kozielka = document.getElementById('kozielka')
const jagly = document.getElementById('jagly')
const ksiazenicka = document.getElementById('ksiazenicka')
const kwiatowa = document.getElementById('kwiatowa')
const legionow = document.getElementById('legionow')
const lesna = document.getElementById('lesna')
const letnia = document.getElementById('letnia')
const lignozy = document.getElementById('lignozy')
const lotnikow = document.getElementById('lotnikow')
const konopnickiej = document.getElementById('konopnickiej')
const marynarzy = document.getElementById('marynarzy')
const karlowicza = document.getElementById('karlowicza')
const mieszka = document.getElementById('mieszka')
const kopernika = document.getElementById('kopernika')
const niepodleglosci = document.getElementById('niepodleglosci')
const nowyDwor = document.getElementById('nowyDwor')
const ogrodowa = document.getElementById('ogrodowa')
const parkowa = document.getElementById('parkowa')
const stalmacha = document.getElementById('stalmacha')
const sciegiennego = document.getElementById('sciegiennego')
const pilsudczykow = document.getElementById('pilsudczykow')
const placPowstanSlaskich = document.getElementById('placPowstanSlaskich')
const plebiscytowa = document.getElementById('plebiscytowa')
const pocztowa = document.getElementById('pocztowa')
const polna = document.getElementById('polna')
const poprzeczna = document.getElementById('poprzeczna')
const powstancow = document.getElementById('powstancow')
const przedwiosnia = document.getElementById('przedwiosnia')
const przemyslowa = document.getElementById('przemyslowa')
const rozana = document.getElementById('rozana')
const rybna = document.getElementById('rybna')
const rybnicka = document.getElementById('rybnicka')
const sadowa = document.getElementById('sadowa')
const saperow = document.getElementById('saperow')
const sokola = document.getElementById('sokola')
const spoldzielcza = document.getElementById('spoldzielcza')
const moniuszki = document.getElementById('moniuszki')
const poniatowskiego = document.getElementById('poniatowskiego')
const staszica = document.getElementById('staszica')
const wyspianskiego = document.getElementById('wyspianskiego')
const starowiejska = document.getElementById('starowiejska')
const stawowa = document.getElementById('stawowa')
const batorego = document.getElementById('batorego')
const zeromskiego = document.getElementById('zeromskiego')
const stokrotki = document.getElementById('stokrotki')
const szarychSzeregow = document.getElementById('szarychSzeregow')
const szkolna = document.getElementById('szkolna')
const szpitalna = document.getElementById('szpitalna')
const sztygarska = document.getElementById('sztygarska')
const szybowa = document.getElementById('szybowa')
const sloneczna = document.getElementById('sloneczna')
const kosciuszki = document.getElementById('kosciuszki')
const targowa = document.getElementById('targowa')
const ustronieLesne = document.getElementById('ustronieLesne')
const ulanow = document.getElementById('ulanow')
const wagowa = document.getElementById('wagowa')
const rakoniewskiego = document.getElementById('rakoniewskiego')
const wieczorka = document.getElementById('wieczorka')
const wilsona = document.getElementById('wilsona')
const witosa = document.getElementById('witosa')
const wiosenna = document.getElementById('wiosenna')
const stwosza = document.getElementById('stwosza')
const korfantego = document.getElementById('korfantego')
const wolnosci = document.getElementById('wolnosci')
const wrzosowa = document.getElementById('wrzosowa')
const wzgorze = document.getElementById('wzgorze')
const broniewskiego = document.getElementById('broniewskiego')
const jagielly = document.getElementById('jagielly')
const sikorskiego = document.getElementById('sikorskiego')
const reymonta = document.getElementById('reymonta')
const lokietka = document.getElementById('lokietka')
const zielona = document.getElementById('zielona')
const zimowa = document.getElementById('zimowa')
const kossakSzczuckiej = document.getElementById('kossakSzczuckiej')
const zwirki = document.getElementById('zwirki')
const zwyciestwa = document.getElementById('zwyciestwa')
const lubinowa = document.getElementById('lubinowa')

const searchHandler = e => {
	const text = e.target.value.toLowerCase();

	streetsItems.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

const popupHandler = () => {
	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
	heading.textContent = "";
	description.textContent = "";
	map.style.display = 'none'
	map.removeAttribute('src')
};

searchInput.addEventListener("input", searchHandler);
closeBtn.addEventListener("click", closePopup);

streetsItems.forEach(el => {
	el.addEventListener("click", popupHandler);
});

firstMay.addEventListener('click', () => {
	heading.textContent = '1 Maja'
	description.textContent = 'G????wna ulica miasta ????cz??ca najstarsz?? cz?????? z nowymi osiedlami oraz jedna z dw??ch tras wylotowych w kierunku Gliwic. Powsta??a na cze???? ??wi??ta Pracy.'
	map.style.display = "block"
	map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.2945295763147!2d18.662045915896297!3d50.230402311076666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136eac183b4f1%3A0x661cb0ad6d2602ad!2zMSBNYWphLCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649699280769!5m2!1spl!2spl")
})
twentySixthFeb.addEventListener('click', () => {
	heading.textContent = '26 Stycznia'
	description.textContent = 'Ulica ????cz??ca dwie trasy wylotowe w kierunku Gliwic - pe??ni rol?? "mini obwodnicy" miasta. Jej nazwa nawi??zuje do daty oswobodzenia miasta od hitlerowskich okupant??w podczas II wojny ??wiatowej.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.899521609113!2d18.648066415896476!3d50.237782010546475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136c4bf48b049%3A0x9b4682f563014f39!2s26%20Stycznia%2C%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700304493!5m2!1spl!2spl")
})
mickiewicza.addEventListener('click', () => {
	heading.textContent = 'Adama Mickiewicza'
	description.textContent = 'Ulica ku czci jednego z najwi??kszych polskich  poet??w, po??o??ona w najstarszej g??rniczej cz????ci miasta kt??ra jest w trakcie rewitalizacji.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.821751080486!2d18.675734215896043!3d50.2205513117843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369acf018c3b%3A0x120cf37a7d974668!2sAdama%20Mickiewicza%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700400181!5m2!1spl!2spl")
})
akacjowa.addEventListener('click', () => {
	heading.textContent = 'Akacjowa'
	description.textContent = 'Stosunkowo nowa ulica po??o??ona w dzielnicy domk??w, spokojne miejsce na uboczu miasta - jej nazwa nawi??zuje do tematyki przewodnej osiedla - kwiat??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.123748436104!2d18.680374715896512!3d50.23359301084748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136bcc6b060cd%3A0x46c210088cdbb76c!2sAkacjowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700503651!5m2!1spl!2spl")
})
alejaLipowa.addEventListener('click', () => {
	heading.textContent = 'Aleja Lipowa'
	description.textContent = 'Miejsce najwi??kszych event??w w mie??cie, przy Aleji Lipowej odbywaj?? si?? coroczne Dni Miasta Knur??w. Sama nazwa ulicy nawi??zuje do (niegdy??) obecnych w du??ej liczbie drzew lipowych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.07684338912!2d18.654286715896486!3d50.23446931078453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e9d24e0073%3A0xbc66eef16c4b246d!2sal.%20Lipowa%2C%2044-196%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700566398!5m2!1spl!2spl")
})
alejaPiastow.addEventListener('click', () => {
	heading.textContent = 'Aleja Piast??w'
	description.textContent = 'Jedna z dw??ch g????wnych ulic w dzielnicy Szczyg??owice ku czci dawnych w??adc??w Piast??w, po??o??ona w samym centrum osiedla.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.433469553298!2d18.622294815895206!3d50.19042801394717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363a2336738b%3A0x3eb8f10dc41f9084!2sAleja%20Piast%C3%B3w%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700695676!5m2!1spl!2spl")
})
alejaSpacerowa.addEventListener('click', () => {
	heading.textContent = 'Aleja Spacerowa'
	description.textContent = 'Alej?? spacerow?? znajdziemy nieopodal starego cmentarza oraz szko??y nr. 1 w dzielnicy "Kolonija". Sama nazwa nawi??zuje do jej kszta??tu - jest okr??g??a przez co idealnie nadaje si?? na spacery.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.69177505499!2d18.67181981589611!3d50.22298001160974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369058c8e301%3A0xf319b4bce5bef451!2sAleja%20Spacerowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700744353!5m2!1spl!2spl")
})
puszkina.addEventListener('click', () => {
	heading.textContent = 'Aleksandra Puszkina'
	description.textContent = 'Jedna z g????wnych ulic dzielnicy "Redyna", biegn??ca przez samo jej centrum ????cz??c wiele innych mniejszych uliczek. Sam Aleksander Puszkin by?? jednym z najwybitniejszych pisarzy epoki romantyzmu pochodzenia rosyjskiego'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.595993269749!2d18.662949315896167!3d50.22476971148121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693032fb183%3A0xaa51f507b7aad845!2sAleksandra%20Puszkina%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700791023!5m2!1spl!2spl")
})
sloniny.addEventListener('click', () => {
	heading.textContent = 'Antoniego S??oniny'
	description.textContent = 'Dusza g??rniczego osiedla, b??d??cego jednocze??nie jedn?? z ubo??szych cz????ci miasta. Jej patronem jest by??y so??tys Knurowa kt??ry dzia??a?? na rzecz polsko??ci G??rnego ??l??ska.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.7800085492863!2d18.677009915896075!3d50.22133131172818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369afaa815d3%3A0xab4013315787056a!2sAntoniego%20S%C5%82oniny%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700838648!5m2!1spl!2spl")
})
armiiKrajowej.addEventListener('click', () => {
	heading.textContent = 'Armii Krajowej'
	description.textContent = 'Niedu??a ulica ku czci Polskiej Armii w czasach II wojny ??wiatowej, znajduj??ca si?? na osiedlu WP I, b??d??ca w bliskim s??siedztwie ze szko???? nr. 7.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.22019014554!2d18.654060915896483!3d50.23179121097699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e909c524af%3A0xc2d1649931cc39d3!2sArmii%20Krajowej%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649700898802!5m2!1spl!2spl")
})
astrow.addEventListener('click', () => {
	heading.textContent = 'Astr??w'
	description.textContent = 'Ulic?? Astr??w znajdziemy w dzielnicy domk??w jednorodzinnych "Farskie", kt??ra graniczy z Giera??towicami. Ci????ko jednoznacznie stwierdzi?? dlaczego taka nazwa - istniej?? spekulacj?? o obecno??ci kwiat??w w tym rejonie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.874816928142!2d18.699401415896!3d50.21955971185546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711342450761949%3A0xc301a3a35103cce6!2zQXN0csOzdywgNDQtMTkwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649700946668!5m2!1spl!2spl")
})
beksza.addEventListener('click', () => {
	heading.textContent = 'Beksza'
	description.textContent = 'Po??o??ona na granicy z Giera??towicami prowadz??ca do kapliczki ??w. Huberta - jej nazwa nawi??zuje do dawnego rodu Beksch??w zamieszkuj??cych niegdy?? tereny Knurowa.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6073.662645620444!2d18.715577061532876!3d50.204875229419514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471135b364e8dbcd%3A0x6eddb335a8235e8e!2sBeksza%2C%20Giera%C5%82towice!5e0!3m2!1spl!2spl!4v1649701032765!5m2!1spl!2spl")
})
bojowa.addEventListener('click', () => {
	heading.textContent = 'Bojowa'
	description.textContent = 'Ulica w przemys??owej cz????ci dzielnicy Krywa??d, nawi??zuj??ca nazw?? do ci????kich warunk??w jakie stawia podczas przejazdu zar??wno autem jak i rowerem.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.562794891297!2d18.631027715895712!3d50.20670271277876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711365005730793%3A0x67aea01e479b6a!2sBojowa%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701072117!5m2!1spl!2spl")
})
chrobrego.addEventListener('click', () => {
	heading.textContent = 'Chrobrego'
	description.textContent = 'Znajdziemy j?? na tzw. osiedlu "Kr??l??w" - ku czci pierwszego koronowanego kr??la Polski. Niedu??a ulica z kilkoma familowaki oraz zabudowaniami jednorodzinnymi.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.4463349309867!2d18.658838015896258!3d50.227566011280416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ec9afb393f%3A0x23ea8ff4c2f136f8!2sBoles%C5%82awa%20Chrobrego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701144636!5m2!1spl!2spl")
})
prusa.addEventListener('click', () => {
	heading.textContent = 'Boles??awa Prusa'
	description.textContent = 'Po??o??ona w s??siedztwie sklepu Lidl ku czci jednego z najwybitniejszych Polskich pisarzy okresu pozytywizmu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.884123173367!2d18.674851315896028!3d50.2193858118679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136853af52bb9%3A0x663c1cd37851e27f!2sBoles%C5%82awa%20Prusa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701221287!5m2!1spl!2spl")
})
chabrowa.addEventListener('click', () => {
	heading.textContent = 'Chabrowa'
	description.textContent = 'Ulica po??o??ona na bocznym osiedlu nawi??zuj??ca do kwiat??w - znajdziemy na niej zabudowania domk??w jednorodzinnych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.155285763007!2d18.67498521589636!3d50.23300381088972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369888bd1a93%3A0x9cfacf9a9601af0d!2sChabrowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701273421!5m2!1spl!2spl")
})
chmielna.addEventListener('click', () => {
	heading.textContent = 'Chmielna'
	description.textContent = 'Ulic?? chmieln?? znajdziemy w zabudowaniach jednorodzinnych osiedla kwiatowego - na chmielnej siedzib?? ma jeden z kilku prywatnych ????obk??w w mie??cie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.224520275205!2d18.680515715896355!3d50.23171031098265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136bd32df401b%3A0x354e0a5d68e5ed86!2sChmielna%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701313969!5m2!1spl!2spl")
})
cicha.addEventListener('click', () => {
	heading.textContent = 'Cicha'
	description.textContent = 'Swoj?? nazw?? nawi??zuje do spokojnego charakteru dzielnicy, po??o??ona na granicy starego miasta z dzielnic?? Krywa??d kt??ra si??ga a?? do teren??w zalesionych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.9158894548964!2d18.645419115895994!3d50.21879221191055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136f6de1ba09b%3A0x34f6889e51d5775b!2sCicha%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701355299!5m2!1spl!2spl")
})
debowa.addEventListener('click', () => {
	heading.textContent = 'D??bowa'
	description.textContent = 'Jedna z kilku ulic dzielnicy Farskie, nazw?? nawi??zuj??ca do d??bowych drzew znajduj??cych si?? w tym rejonie'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.818775602897!2d18.697864215896093!3d50.2206069117803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711342422727db9%3A0xf85c19f13e05d016!2zRMSZYm93YSwgNDQtMTkwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649701390668!5m2!1spl!2spl")
})
deszczowa.addEventListener('click', () => {
	heading.textContent = 'Deszczowa'
	description.textContent = 'Znajdziemy j?? na najnowszym knurowskim osiedlu "Cztery Pory Roku" - nawi??zuje ona do pory deszczowej cz??sto wyst??puj??cej wiosn?? oraz jesieni??.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0161383903746!2d18.645834515896528!3d50.23560341070315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e7619566b7%3A0xcb59f6844b531800!2sDeszczowa%2C%2044-196%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701420443!5m2!1spl!2spl")
})
ogana.addEventListener('click', () => {
	heading.textContent = 'dr. Floriana Ogana'
	description.textContent = 'Ulica jest gospodarzem Knurowskiego Magistratu - sam patron by?? niegdy?? ordynatorem szpitala w Knurowie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.70782496354!2d18.66609531589619!3d50.22268011163138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136921ed49735%3A0x242b739588fc42dd!2sDoktora%20Floriana%20Ogana%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701459315!5m2!1spl!2spl")
})
jordana.addEventListener('click', () => {
	heading.textContent = 'dr. Henryka Jordana'
	description.textContent = 'Po??o??ona w dzielnicy zabudowa?? domk??w jednorodzinnych "Krywa??d", dr. Jordan w latach przedwojennych by?? polskim lekarzen, spo??ecznikiem oraz pionierem wychowania fizycznego w naszym kraju.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.338200836423!2d18.639994615895844!3d50.21090021247723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136596d05acdd%3A0xf54a4fb40767acc3!2sDoktora%20Henryka%20Jordana%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701506035!5m2!1spl!2spl")
})
dworcowa.addEventListener('click', () => {
	heading.textContent = 'Dworcowa'
	description.textContent = 'Jedna z g????wnych ulic miasta dzi??ki kt??rej mo??na dosta?? si?? na autostrad?? A1 lub do gminy Giera??towice - nazw?? nawi??zuje do znajduj??cego si?? w niedalekim s??siedztwie Knurowskiego dworca PKP.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.942523472674!2d18.6842207158961!3d50.21829451194638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369d19937349%3A0x6e8b0d7d62e9bfea!2sDworcowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701534614!5m2!1spl!2spl")
})
dywizjonu303.addEventListener('click', () => {
	heading.textContent = 'Dywizjonu 303'
	description.textContent = 'Najdalej wysuni??ta ulica osiedla WP II od strony wschodniej - na cze???? pami??ci Polak??w bior??cych udzia?? w walce o Wielk?? Brytani??. Piloci my??liwc??w Dywizjonu 303 w ci??gu 40 dni walki zestrzelili 126 niemieckich samolot??w, zaskakuj??c wszystkich spektakularnymi sukcesami.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.8990505524766!2d18.651026215896508!3d50.23779081054595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136dd1fd5246d%3A0x83837c706638afb3!2sDywizjonu%20303%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701573268!5m2!1spl!2spl")
})
plater.addEventListener('click', () => {
	heading.textContent = 'Emilii Plater'
	description.textContent = 'Jej patronka by??a polsk?? hrabiank?? pe??ni??c?? funkcj?? kapitana Wojska Polskiego w czasie powstania listopadowego. Sam?? ulic?? znajdziemy w dzielnicy domk??w jednorodzinnych "Farskie".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.772874810401!2d18.69740281589611!3d50.2214646117186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711342402686ddd%3A0x1829ded3f620bfbd!2sEmilii%20Plater%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701611602!5m2!1spl!2spl")
})
michalskiego.addEventListener('click', () => {
	heading.textContent = 'Feliska Michalskiego'
	description.textContent = 'Jedna z dw??ch g????wnych ulic dzielnicy "Krywa??d" - jej patron by?? lokalnym mieszka??cem dzielnicy oraz ??????nierzem Wojska Polskiego zastrzelonym na samym pocz??tku II wojny ??wiatowej podczas obrony linii Wilcza-Knur??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.401800200775!2d18.64130711589574!3d50.209711612562714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113659527e9df1%3A0xad241aafea14a745!2sFeliksa%20Michalskiego%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701644321!5m2!1spl!2spl")
})
floriana.addEventListener('click', () => {
	heading.textContent = 'Floriana'
	description.textContent = 'Malutka ulica po??o??ona w s??siedztwie Urz??du Miasta Knur??w, sam ??w. Florian jest przede wszystkim - obok innych grup - patronem Kr??lestwa Polskiego.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.71556892575!2d18.66411581589617!3d50.22253541164176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136926e41bd65%3A0x81ec300493349fca!2sFloriana%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701687753!5m2!1spl!2spl")
})
chopina.addEventListener('click', () => {
	heading.textContent = 'Frederyka Chopina'
	description.textContent = 'Chyba nie ma w Polsce osoby nie ??wiadomej tego kim by?? Frederyk Chopin - najwybitniejszy Polski kompozytor. Ulic?? ku jego czci znajdziemy w tzw. dzielnicy domk??w fi??skich.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.48550690134!2d18.66124661589625!3d50.22683411133298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ecafd1d663%3A0xbc25055c37c64626!2sFryderyka%20Chopina%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701718017!5m2!1spl!2spl")
})
gornicza.addEventListener('click', () => {
	heading.textContent = 'G??rnicza'
	description.textContent = 'Ulica znajduj??ca si?? w Szczyg??owicach, jak sama nazwa wskazuje kieruje nas w stron?? kopalni - oddzia??u KWK Knur??w-Szczyg??owice.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.4502928526226!2d18.63197211589526!3d50.19011351396981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363e804a3d2d%3A0xcf984af2a2cacbac!2zR8Ozcm5pY3phLCA0NC0xOTMgS251csOzdw!5e0!3m2!1spl!2spl!4v1649701761968!5m2!1spl!2spl")
})
graniczna.addEventListener('click', () => {
	heading.textContent = 'Graniczna'
	description.textContent = 'Wyznacza granic?? miasta od strony po??udniowo-wschodniej, jest stosunkowo "zawijast??" ulic?? znajduj??c?? si?? od strony Czuchowa (gm. Czerwionka-Leszczyny).'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.918703903882!2d18.642073515895017!3d50.18135631459838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136056987a543%3A0x4f8fb7308d2ba813!2sGraniczna%2C%2044-230%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701792024!5m2!1spl!2spl")
})
grunwaldzka.addEventListener('click', () => {
	heading.textContent = 'Grunwaldzka'
	description.textContent = 'Jej nazwa nawi??zuje do s??ynnej bitwy pod Grunwaldem z 1410 roku. Niedu??a ulica mieszcz??ca si?? w starej cz????ci miasta od strony Krywa??du z zabudowaniami jednorodzinnymi.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.90201849774!2d18.648830615896!3d50.21905141189197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136f4018f2c2f%3A0x5a5907eb684d23ec!2sGrunwaldzka%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701823727!5m2!1spl!2spl")
})
sienkiewicza.addEventListener('click', () => {
	heading.textContent = 'Henryka Sienkiewicza'
	description.textContent = 'Ulic?? Sienkiewicza znajdziemy w g??rniczej dzielnicy miasta - sam jej patron by?? wybitnym polskim pisarzem prze??omu XIX i XX w. uhonorowanym Nagrod?? Nobla w dziedzinie literatury za ca??okszta??t tw??rczo??ci.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.716045229739!2d18.67698211589609!3d50.22252651164234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369a59af9833%3A0x4d48c8d828076870!2sHenryka%20Sienkiewicza%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701901383!5m2!1spl!2spl")
})
wieniawskiego.addEventListener('click', () => {
	heading.textContent = 'Henryka Wieniawskiego'
	description.textContent = 'Po??o??ona w dzielnicy domk??w fi??skich ulica kt??rej patronem jest jeden z najwybytniejszych polskich skrzypk??w oraz kompozytor??w w historii.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5065351038384!2d18.66056621589616!3d50.22644121136112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136eccf010b57%3A0xe108ffe50d0effdd!2sHenryka%20Wieniawskiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649701949250!5m2!1spl!2spl")
})
kollataja.addEventListener('click', () => {
	heading.textContent = 'Hugo Ko??????taja'
	description.textContent = 'Jedna z ulic znajduj??cych si?? w g??rniczej dzielnicy Szczyg??owice, jej patron by?? niegdy?? polskim politykiem kt??ry mia?? znacz??cy wp??yw na tre???? Konstytucji 3 maja.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.4321268955596!2d18.62626091589533!3d50.19045311394552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363bdc9b8bc5%3A0x31aa0c5ecae07a4a!2zSHVnbyBLb8WCxYLEhXRhamEsIDQ0LTE5MyBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649701982815!5m2!1spl!2spl")
})
krasickiego.addEventListener('click', () => {
	heading.textContent = 'Ignacego Krasickiego'
	description.textContent = 'Ignacy Krasicki nazywany jest "ksi??ciem poet??w polskich" jako jeden z g????wnych przedstawicieli polskiego o??wiecenia. Sama ulica znajduje si?? w dzielnicy "Redyna" - a sami mieszka??cy kojarz?? j?? z tzw. "beemeciokiem" czyli najd??u??szym blokiem w mie??cie, licz??cym najwi??ksz?? liczb?? klatek.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.6366407583337!2d18.662495715896174!3d50.22401021153579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113692ee0e820f%3A0x9806dc5e0b875d95!2sIgnacego%20Krasickiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702012253!5m2!1spl!2spl")
})
paderewskiego.addEventListener('click', () => {
	heading.textContent = 'Ignacego Paderewskiego'
	description.textContent = 'T?? niedu???? ulic?? znajdziemy w dzielnicy domk??w fi??skich - jej patron odegra?? kluczow?? rol?? w operacji odzyskania przez Polsk?? niepodleg??o??ci po I wojnie ??wiatowej. Ponadto by?? ??wiatowej klasy pianist?? oraz kompozytorem z kt??rego zdaniem liczy?? si?? przede wszystkim ??wczesny prezydent Stan??w Zjednoczonych Woodrow Wilson.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.4921113433547!2d18.66290941589621!3d50.22671071134184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693551ceb61%3A0x138d5a75bc9e2bee!2sIgnacego%20Paderewskiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702051405!5m2!1spl!2spl")
})
jagielnia.addEventListener('click', () => {
	heading.textContent = 'Jagielnia'
	description.textContent = 'Marginalnie ma??a ulica znajduj??ca si?? w dzielnicy "Krywa??d" w bezpo??rednim s??siedztwie zbiornik??w wodnych. Sama nazwa nie wskazuje na ??adnego konkretnego patrona lub motyw jej nazewnictwa, a zdecydowana wi??kszo???? mieszka??c??w miasta nie potrafi??aby wskaza?? gdzie dok??adnie si?? znajduje.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.7714156414604!2d18.631074915895603!3d50.20280351305879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113645a23df879%3A0x95ca034473210883!2sJagielnia%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702081862!5m2!1spl!2spl")
})
brzechwy.addEventListener('click', () => {
	heading.textContent = 'Jana Brzechwy'
	description.textContent = 'Umiejscowiona w nowszej cz????ci "Koloniji" ulica kt??rej patronem jest polski poeta i adwokat ??ydowskiego pochodzenia - autor bajek i wierszy dla dzieci oraz satyrycznych tekst??w dla doros??ych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.534370928684!2d18.67937581589622!3d50.22592111139861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136999706cad7%3A0xeb6d74f2ff8f5913!2sJana%20Brzechwy%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702130530!5m2!1spl!2spl")
})
dymka.addEventListener('click', () => {
	heading.textContent = 'Jana Dymka'
	description.textContent = 'Stosunkowo d??uga ulica ????cz??ca starsz?? cz?????? g??rniczego osiedla "Kolonija" z now?? zabudow?? domk??w jednorodzinnych. Sam patron ulicy by?? lokalnym mieszka??cem udzielaj??cym si?? w dziedzinie kinematografii.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.4336022115017!2d18.670158215896304!3d50.22780391126326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113695b3767ee7%3A0x61478ed6cac29b93!2sJana%20Dymka%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702163935!5m2!1spl!2spl")
})
kilinskiego.addEventListener('click', () => {
	heading.textContent = 'Jana Kili??skiego'
	description.textContent = 'Szczyg??owicka ulica przy kt??rej znajdziemy zar??wno szko???? podstawow?? nr. 4 oraz centrum rehabilitacji Fizjofit. Sam patron zapisa?? si?? w historii jako pu??kownik powstania ko??ciuszkowskiego oraz uczesnik spisk??w powsta??czych - z zawodu by?? szewcem.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.502752166539!2d18.625018615895197!3d50.189132814040235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363bb79abc27%3A0xa25906adc8d814e4!2sJana%20Kili%C5%84skiego%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702198653!5m2!1spl!2spl")
})
kochanowskiego.addEventListener('click', () => {
	heading.textContent = 'Jana Kochanowskiego'
	description.textContent = 'Niedu??a ulica po??o??ona na "Redynie" - dzielnicy w kt??rej przewa??aj?? dwupi??trowe familoki. Patron ulicy by?? w przesz??o??ci polskim poet?? epoki renesansu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5900044840077!2d18.66502221589625!3d50.22488161147329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693b1f27f27%3A0x76d64c57d3ca2a94!2sJana%20Kochanowskiego%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702230557!5m2!1spl!2spl")
})
kwitka.addEventListener('click', () => {
	heading.textContent = 'Jana Kwitka'
	description.textContent = 'Ulica po??wi??cona lokalnemu dzia??aczowi spo??ecznemu, kt??ry w latach mi??dzywojennych pe??ni?? funkcj?? ??awnika Knurowa oraz naczelnika gminy. Znajdziemy j?? w g??rniczej dzielnicy "Kolonija", w niedalekim s??siedztwie stawu Moczury.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.6416982485684!2d18.67754201589622!3d50.22391571154277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369a138cf655%3A0xc8af12d46e4c55b0!2sJana%20Kwitka%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702270102!5m2!1spl!2spl")
})
matejki.addEventListener('click', () => {
	heading.textContent = 'Jana Matejki'
	description.textContent = 'Jan Matejko zapisa?? si?? w historii jako jeden z najwybitniejszych polskich malarzy, tw??rca obraz??w historycznych i batalistycznych. Jego ulic?? znajdziemy w starej cz????ci miasta prowadz??cej na Krywa??d od strony domk??w jednorodzinnych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.9140860193625!2d18.647989115896028!3d50.21882591190815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136f6a893ccfd%3A0x92fdb9811247ec09!2sJana%20Matejki%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702300942!5m2!1spl!2spl")
})
sobieskiego.addEventListener('click', () => {
	heading.textContent = 'Jana Sobieskiego'
	description.textContent = 'Kr??l Polski Jan III Sobieski zapisa?? si?? w historii jako w??adca kt??ry zatrzyma?? Turk??w pod Wiedniem. Swoj?? ulic?? otrzyma?? w samym centrum miasta na osiedlu tysi??clecia.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3192787235535!2d18.65832301589631!3d50.22993991110988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ebbba4b735%3A0xdc9207270c98a674!2sJana%20Sobieskiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702339268!5m2!1spl!2spl")
})
dabrowskiego.addEventListener('click', () => {
	heading.textContent = 'Jaros??awa D??browskiego'
	description.textContent = 'G????wna ulica dzielnicy fi??skich domk??w biegn??ca na granicy z Redyn??. Sam Jaros??aw D??browski by?? polskim dzia??aczem niepodleg??o??ciowym oraz naczelnym dow??dc?? wojsk Komuny Paryskiej w stopniu genera??a.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.510811376706!2d18.662156715896177!3d50.22636131136683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693475ff68b%3A0xa7e89b0fb8568f33!2sJaros%C5%82awa%20D%C4%85browskiego%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649702376364!5m2!1spl!2spl")
})
jasminowa.addEventListener('click', () => {
	heading.textContent = 'Ja??minowa'
	description.textContent = 'Ulica podtrzymuj??ca kwiatow?? tematyk?? osiedla domk??w jednorodzinnych znajduj??cych si?? na uboczu od p????nocno zachodniej strony miasta.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.2882405688647!2d18.68115391589633!3d50.23051981106808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136a2b584c8a9%3A0x26fd3c5292974d53!2zSmHFm21pbm93YSwgNDQtMTkwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649702412277!5m2!1spl!2spl")
})
jeczmienna.addEventListener('click', () => {
	heading.textContent = 'J??czmienna'
	description.textContent = 'G????wna ulica prowadz??ca oraz biegn??ca przez kwiatowe osiedle domk??w jednorodzinnych. Mo??emy z niej w ??atwy spos??b dosta?? si?? do centrum miasta.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.152588079605!2d18.66888161589644!3d50.233054210886245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136bfc9c9473b%3A0xeef9c7404318839a!2zSsSZY3ptaWVubmEsIDQ0LTE5MCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649702450074!5m2!1spl!2spl")
})
jednosci.addEventListener('click', () => {
	heading.textContent = 'Jedno??ci Narodowej'
	description.textContent = 'Jedna z ulic znajduj??ca si?? na osiedlu WP I na kt??rej znajdziemy kilka blok??w. Sam?? nazw?? nawi??zuje do wyrazu szacunku do idei jedno??ci, wyj??tkowej w dziejach narodu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.1774291729057!2d18.654764315896347!3d50.23259011091947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e9bc5e3b85%3A0xca2e6efc55a4bff6!2sJedno%C5%9Bci%20Narodowej%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649704968620!5m2!1spl!2spl")
})
zietka.addEventListener('click', () => {
	heading.textContent = 'Jerzego Zi??tka'
	description.textContent = 'Niegdy?? ostatnia ulica miasta wychodz??ca na przedpola Gliwic. Obecnie znajduje si?? pomi??dzy osiedlem WP II a nowymi zabudowaniami z osiedla Cztery Pory Roku. Patron ulicy by?? w przesz??o??ci wojewod?? katowickim kt??ry rzetelnie dba?? o rozw??j regionu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0437370482805!2d18.647489915896475!3d50.23508781074015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e788f2111d%3A0x9679b2d3797ddc70!2sJerzego%20Zi%C4%99tka%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705006293!5m2!1spl!2spl")
})
jesienna.addEventListener('click', () => {
	heading.textContent = 'Jesienna'
	description.textContent = 'Ulica znajduj??ca si?? na osiedlu domk??w jednorodzinnych Cztery Pory Roku, swoj?? nazw?? nawi??zuj??c?? do z??otej aczkolwiek cz??sto deszczowej pory roku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.056032194545!2d18.645655415896485!3d50.23485811075654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e75ce1680d%3A0xbbc70d18e3683cf7!2sJesienna%2C%2044-196%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705041029!5m2!1spl!2spl")
})
janty.addEventListener('click', () => {
	heading.textContent = 'J??zefa Janty'
	description.textContent = 'Umiejscowiona w najstarszej g??rniczej dzielnicy miasta "Koloniji", kt??rej patron by?? sekterarzem Zarz??du Okr??gowego Centralnego Zwi??zku Zawodowego G??rnik??w w Katowicach - zamordowany przez Niemc??w na pocz??tku II wojny ??wiatowej.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.758275487746!2d18.675291915896107!3d50.22173741169902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369abe8e696d%3A0xbccbe51da70757de!2sJ%C3%B3zefa%20Janty%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705078877!5m2!1spl!2spl")
})
lompy.addEventListener('click', () => {
	heading.textContent = 'J??zefa Lompy'
	description.textContent = 'Niedu??a ulica w samym centrum Redyny, natomiast sam J??zef Lompa zapisa?? si?? w historii jako polski dzia??acz, poeta, t??umacz oraz publicysta. M??wi si?? ??e by?? prekursorem procesu polskiego odrodzenia narodowego na G??rnym ??l??sku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5556182827536!2d18.66351161589617!3d50.225524111426985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369311d54c67%3A0xe56c1f11d738764e!2sJ%C3%B3zefa%20Lompy%2C%2044-194%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705181956!5m2!1spl!2spl")
})
ligonia.addEventListener('click', () => {
	heading.textContent = 'Juliusza Ligonia'
	description.textContent = 'Jedna z najmniejszych ulic w mie??cie znajduj??ca si?? przed g????wnym wiaduktem prowadz??cym do Szczyg??owic. Juliusz Ligo?? by?? polskim dzia??aczem spo??ecznym G??rnego ??l??ska, ??l??skim poet?? ludowym oraz publicyst??.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.1383726246663!2d18.642682615895403!3d50.195944413551224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113614a8509403%3A0xbe1b85c469dd5779!2sJuliusza%20Ligonia%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705221884!5m2!1spl!2spl")
})
slowackiego.addEventListener('click', () => {
	heading.textContent = 'Juliusza S??owackiego'
	description.textContent = 'Znajdziemy j?? na Redynie w bliskim s??siedztwie osiedla domk??w fi??skich, kt??rej patron by?? jednym z najwybitniejszych polskich przedstawicieli romantyzmu, dramaturg oraz epistolograf.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.524004102134!2d18.663603415896215!3d50.226114811384655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693143f3edd%3A0x50cf1108397d9db5!2sJuliusza%20S%C5%82owackiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705254052!5m2!1spl!2spl")
})
kapelanow.addEventListener('click', () => {
	heading.textContent = 'Kapelan??w Wojskowych'
	description.textContent = 'Jak sama nazwa wskazuje znajdziemy j?? na osiedlu Wojska Polskiego - tym razem jej pierwszej cz????ci. Sama nazwa nawi??zuje do funkcji kapelan??w kt??rzy pe??ni?? lub pe??nili niegdy?? s??u??b?? w strukturach Polskich Si?? Zbrojnych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.1313544590234!2d18.657566015896442!3d50.23345091085766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e9fef924b1%3A0x9f64607938ef2624!2sKapelan%C3%B3w%20Wojskowych%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705286340!5m2!1spl!2spl")
})
hlonda.addEventListener('click', () => {
	heading.textContent = 'kard. Augusta Hlonda'
	description.textContent = 'Niedu??a boczna uliczka w nowszej cz????ci g??rniczego osiedla "Kolonija", kt??rej patronuje polski duchowny, salezjanin, by??y biskup katowicki, arcybiskup metropolita gnie??nie??ski, pozna??ski i warszawski oraz prymas Polski.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.4542078935724!2d18.672437915896243!3d50.227418911290954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113696e972c10f%3A0x5c46ce7263d9b709!2sKardyna%C5%82a%20Augusta%20Hlonda%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705329787!5m2!1spl!2spl")
})
miarki.addEventListener('click', () => {
	heading.textContent = 'Karola Miarki'
	description.textContent = 'Skrajna uliczka g??rniczej "Koloniji" od strony Farskiego - sam Karol Miarka by?? niegdy?? nauczycielem, pisarzem, publicyst?? i drukarzem, kt??ry udziela?? si?? spo??ecznie na G??rnym ??l??sku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8395396769442!2d18.67974061589607!3d50.22021891180806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369b44668d07%3A0xc696854b743ac3aa!2sKarola%20Miarki%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705361962!5m2!1spl!2spl")
})
szymanowskiego.addEventListener('click', () => {
	heading.textContent = 'Karola Szymanowskiego'
	description.textContent = 'Jedna z kilku ulic znajduj??cych si?? na osiedlu domk??w fi??skich. Jej patron zapisa?? si?? do historii Polski jako kompozytor, pianista, pedagog oraz pisarz. Powszechnie uwa??a si?? i?? obok Frederyka Chopina by?? jednym z najwybitniejszych polskich kompozytor??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.4746689542226!2d18.659779415896278!3d50.22703661131848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ecc0750d3b%3A0x360d667b6ea5b863!2sKarola%20Szymanowskiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705391851!5m2!1spl!2spl")
})
kazimierza.addEventListener('click', () => {
	heading.textContent = 'Kazimierza Wielkiego'
	description.textContent = 'Jeden z najwybitniejszych Polskich w??adc??w w historii, ostatni monarcha z dynastii Piast??w na tronie. Jego ulic?? znajdziemy  na blokowisku w samym centrum miasta gdzie zamieszkuje stosunkowo du??a liczba mieszka??c??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.370938821361!2d18.658924015896314!3d50.228974711179305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136eb9d2c2203%3A0x84113d3ffe715099!2sKazimierza%20Wielkiego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705430516!5m2!1spl!2spl")
})
klasztorna.addEventListener('click', () => {
	heading.textContent = 'Klasztorna'
	description.textContent = 'Ulica klasztorna zlokalizowana jest w noszej cz????ci "Koloniji", kt??ra jest najstarszym osiedlem w mie??cie. Jej nazwa nawi??zuje do znajduj??cej si?? przy niej klasztoru Si??str S??u??ebniczek Naj??wi??tszej Marii Panny.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.632707150013!2d18.67398981589612!3d50.22408371153043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113690c6af95c5%3A0x9a33f43dbfe53912!2sKlasztorna%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705459878!5m2!1spl!2spl")
})
damrota.addEventListener('click', () => {
	heading.textContent = 'Konstantego Damrota'
	description.textContent = 'Jedna z najkr??tszych ulic w mie??cie kt??r?? znajdziemy w bliskim s??siedztwie wjazdu na autostrad?? A1. Jest ho??dem dla polskiego duchownego katolickiego, poety, pisarza oraz lokalnego dzia??acza G??rno??l??skiego.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.7994831044493!2d18.680663115896063!3d50.220967411754316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369b60c734ef%3A0xb173495ac49a8b9c!2sKsi%C4%99dza%20Konstantego%20Damrota%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705501442!5m2!1spl!2spl")
})
kopalniana.addEventListener('click', () => {
	heading.textContent = 'Kopalniana'
	description.textContent = 'Swoj?? nazw?? nawi??zuje do g??rniczych tradycji miasta, prowadzi ona prosto do bramy g????wnego zak??adu pracy w mie??cie - Kopalni W??gla Kamiennego Knur??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8963834064734!2d18.67033851589604!3d50.219156711884374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711368f91849807%3A0xac87d7699ccc857f!2sKopalniana%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705545873!5m2!1spl!2spl")
})
koscielna.addEventListener('click', () => {
	heading.textContent = 'Ko??cielna'
	description.textContent = 'Jak sama nazwa wskazuje ulica ko??cielna doprowdzi nas do katolickiej ??wi??tyni pw. Antoniego Paderewskiego znajduj??cej si?? w Krywa??dzie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.6793055168514!2d18.63772941589561!3d50.204525112935116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113644aeb11ac5%3A0xb4a924438b097cde!2zS2_Fm2NpZWxuYSwgNDQtMTkzIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649705578049!5m2!1spl!2spl")
})
kosmonautow.addEventListener('click', () => {
	heading.textContent = 'Kosmonaut??w'
	description.textContent = 'Ulica kosmonaut??w jest jednym z g????wnych szlak??w ????cz??cych dwie najwa??niejsze szlaki prowadz??ce w stron?? Gliwic. Jest ho??dem wszystkich ludzi kt??rzy przyczynili si?? do rozwoju nauki poprzez kosmiczne podr????e w przestrze??.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.273061269183!2d18.655428615896348!3d50.23080341104798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ebd90e50b1%3A0xb0fc350e5295a833!2sKosmonaut%C3%B3w%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705608577!5m2!1spl!2spl")
})
krotka.addEventListener('click', () => {
	heading.textContent = 'Kr??tka'
	description.textContent = 'Pomimo nazwy ulica nie jest wcale najkr??tsz?? w mie??cie, niemniej jednak z uwagi na jej rozmiar mo??na ??mia??o klasyfikowa?? j?? jako kr??tk??. Znajdziemy j?? w dzielnicy Krywa??d, w niedalekim s??siedztwie by??ego stadionu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.5976639291894!2d18.639584815895773!3d50.206051012825554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711365c9f761937%3A0x9fe5520939e4c5df!2zS3LDs3RrYSwgNDQtMTkzIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649705657400!5m2!1spl!2spl")
})
krucza.addEventListener('click', () => {
	heading.textContent = 'Krucza'
	description.textContent = 'Jedna z najkr??tszych ulic Knurowa znajduj??ca si?? na osiedlu Farskie w bliskim s??siedztwie Giera??towic. Swoj?? nazw?? ci????ko jednoznacznie stwierdzi?? do czego nawi??zuje.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.905068828451!2d18.70054401589607!3d50.21899441189599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113424fb37e279%3A0x5b7a8d8eb26150c2!2sKrucza%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705697464!5m2!1spl!2spl")
})
kozielka.addEventListener('click', () => {
	heading.textContent = 'ks. Alojzego Kozie??ka'
	description.textContent = 'Jedna z kilku g????wnych ulic g??rniczego osiedla "Kolonija", bardzo d??uga ????cz??ca najstarsz?? z najnowsz?? cz????ci?? miasta. W historii miasta zapisa?? si?? jako proboszcz parafii Cyryla i Metodego - ponadto jest autorem pierwszej monografii Knurowa pt. "Knur??w i Krywa??d".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.4064185912353!2d18.678173915896327!3d50.228311811226824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136977529db51%3A0x67701549b1528a64!2zS296aWXFgmthLCA0NC0xOTAgS251csOzdw!5e0!3m2!1spl!2spl!4v1649705726488!5m2!1spl!2spl")
})
jagly.addEventListener('click', () => {
	heading.textContent = 'ks. J??zefa Jag??y'
	description.textContent = 'Patronem ulicy jest pierwszy za??o??yciel gliwickiego oddzia??u Caritasu, dzia??acz na rzecz polskich d????e?? narodowych. Jego ulica zlokalizowana jest na nitce ????cz??cej osiedl?? kwiatowe z nowsz?? cz????ci?? "Koloniji".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3339600703644!2d18.67115751589635!3d50.22966561112952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136967a183227%3A0x9fee9c9868836e7d!2za3MuIEphZ8WCeSwgNDQtMTkwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649705759026!5m2!1spl!2spl")
})
ksiazenicka.addEventListener('click', () => {
	heading.textContent = 'Ksi????enicka'
	description.textContent = 'Jak sama nazwa wskazuje ulic?? Ksi????enick?? dojedziemy prosto do Ksi????enic, jest ona tras?? wylotow?? ze Szczyg??owic.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.7920699961737!2d18.615811615895105!3d50.18372391442852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711362f65f64d77%3A0xe9f619defa04b8a2!2zS3NpxIXFvGVuaWNrYSwgNDQtMTkzIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649705800527!5m2!1spl!2spl")
})
kwiatowa.addEventListener('click', () => {
	heading.textContent = 'Kwiatowa'
	description.textContent = 'Nazwa ulicy wskazuje na osiedl?? w kt??rym j?? znajdziemy - jest to nowoczesne osiedle domk??w jednorodzinnych od strony gliwickiej dzielnicy "Bojk??w".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3324560779865!2d18.67346411589639!3d50.22969371112762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369653354aed%3A0x8c4cd4a3d8fb72e4!2sUlica%20Kwiatowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705833720!5m2!1spl!2spl")
})
legionow.addEventListener('click', () => {
	heading.textContent = 'Legion??w'
	description.textContent = 'Niedu??a ulica domk??w szeregowych znajduj??ca si?? na osiedlu Wojska Polskiego II, ku czci Legion??w Polskich walcz??cych o wolno???? i niepodleg??o???? naszego kraju.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.1238501353196!2d18.647037115896385!3d50.23359111084758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e7a50335d1%3A0xb31360eaa32bd35f!2zTGVnaW9uw7N3LCA0NC0xMDAgS251csOzdw!5e0!3m2!1spl!2spl!4v1649705868975!5m2!1spl!2spl")
})
lesna.addEventListener('click', () => {
	heading.textContent = 'Le??na'
	description.textContent = 'Sama nazwa wskazuje na jej lokalizacj??, znajdziemy j?? na ko??cu miasta w s??siedztwie z Czuchowem - prowadzi do las??w znajduj??cych si?? przy terenach kopalnii oraz instalacji komunalnej.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.2951732319784!2d18.6535757158954!3d50.193013313761654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711366d5d400133%3A0x653e7d24ed3e6b1b!2zTGXFm25hLCA0NC0xOTMgS251csOzdw!5e0!3m2!1spl!2spl!4v1649705897031!5m2!1spl!2spl")
})
letnia.addEventListener('click', () => {
	heading.textContent = 'Letnia'
	description.textContent = 'Ulica z nowego osiedla "Cztery Pory Roku" nazw?? nawi??zuj??ca do najbardziej lubianej pory roku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0015842437706!2d18.64690831589642!3d50.235875310683355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136dd85ed6087%3A0xf089dbba672d2f5b!2sLetnia%2C%2044-196%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705925255!5m2!1spl!2spl")
})
lignozy.addEventListener('click', () => {
	heading.textContent = 'Lignozy'
	description.textContent = 'Jedna z dw??ch g????wnych ulic biegn??cych przez Szczyg??owice, jest to trasa prowadz??ca do tej g??rniczej dzielnicy. Swoj?? nazw?? nawi??zuje do materia??u wybuchowego wykorzystywanego powszechnie w g??rnictwie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.198924953012!2d18.63646831589543!3d50.194812513632506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136407af70513%3A0xa93a50f492601521!2sLignozy%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649705954318!5m2!1spl!2spl")
})
lotnikow.addEventListener('click', () => {
	heading.textContent = 'Lotnik??w'
	description.textContent = 'Ku czci lotnik??w polskich kt??rzy zapisali si?? w historii jako jedna z najsilnieszych polskich si?? zbrojnych. Ulic?? znajdziemy w samym centrum osiedla WP II.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.879988767186!2d18.6521184158966!3d50.23814691052042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136dccd766cbb%3A0xffdda8f775555145!2zTG90bmlrw7N3LCA0NC0xMDAgS251csOzdw!5e0!3m2!1spl!2spl!4v1649705981471!5m2!1spl!2spl")
})
konopnickiej.addEventListener('click', () => {
	heading.textContent = 'Marii Konopnickiej'
	description.textContent = 'Znajdziemy j?? w g??rniczej dzielnicy Szczyg??owice - Maria Konopnicka jest jedn?? z najwybitniejszych polskich poet??w okresu pozytywizmu, krytyczka literacka, publicystka oraz pisarka.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.4592367184114!2d18.624508915895266!3d50.18994631398194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363bb6117d89%3A0xaa052cd2565a89cf!2sMarii%20Konopnickiej%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706029046!5m2!1spl!2spl")
})
marynarzy.addEventListener('click', () => {
	heading.textContent = 'Marynarzy'
	description.textContent = 'Ku czci ??????nierzy polskich s??u????cych w Polskiej Marynarce, ulic?? Marynarzy znajdziemy na osiedlu WP II jako skrajna ulica ca??ego osiedla tu?? przy trasie wylotowej w kierunku Gliwic.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.826432170631!2d18.656766115896534!3d50.23914741044842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136c37b5e3025%3A0xab48151662484514!2sMarynarzy%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706056773!5m2!1spl!2spl")
})
karlowicza.addEventListener('click', () => {
	heading.textContent = 'Mieczys??awa Kar??owicza'
	description.textContent = 'Zlokalizowana w bliskim s??siedztwie autostrady A1 oraz stawu Moczury - jej patron by?? polskim kompozytorem i dyrygentem oraz przedstawicielem nurtu p????nego romantyzmu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5805583455317!2d18.680084215896116!3d50.22505811146042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369985b470e5%3A0x45420cbfc1ff4f18!2sMieczys%C5%82awa%20Kar%C5%82owicza%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706092029!5m2!1spl!2spl")
})
mieszka.addEventListener('click', () => {
	heading.textContent = 'Mieszka I'
	description.textContent = 'Kolejna ulica po??wi??cona jednemu z polskich kr??l??w na osiedlu tysi??clecia. Mieszko I przyj???? chrzest Polski i wprowadzi?? Polan do ??wiata zachodniej Europy.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.329421329952!2d18.66190501589627!3d50.22975041112339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136eb218d2501%3A0x3810e2cc8a934c15!2sMieszka%20I%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706121629!5m2!1spl!2spl")
})
kopernika.addEventListener('click', () => {
	heading.textContent = 'Miko??aja Kopernika'
	description.textContent = 'Chyba nie ma w Polsce cz??owieka nie wiedz??cego tego kim by?? Miko??aj Kopernik - najwybitniejszy polski astronom - ponadto kanonik, prawnik, matematyk, lekarz i ekonomista. Jego ulic?? znajdziemy w dzielnicy "Kolonija" jako jedna z pierwszych ulic jakie napotkamy wje??dzaj??c do miasta od strony Giera??towic.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8132474160316!2d18.677494315896098!3d50.22071021177282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369b26c77a67%3A0x3a30b55c315dfabc!2sMiko%C5%82aja%20Kopernika%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706152197!5m2!1spl!2spl")
})
niepodleglosci.addEventListener('click', () => {
	heading.textContent = 'Niepodleg??o??ci'
	description.textContent = 'Niegdy?? centrum ??ycia miasta, obecnie niestety kosztem centrum poma??u wymieraj??ca. Jedna z g????wnych arterii miasta po??wi??cona niepodleg??o??ci pa??stwa Polskiego - znajdziemy przy niej m.in. miejski Szpital.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.971083787658!2d18.657766215895982!3d50.21776081198459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711368ca3915ac7%3A0xe980dbac234455e5!2zTmllcG9kbGVnxYJvxZtjaSwgNDQtMTkwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649706184524!5m2!1spl!2spl")
})
nowyDwor.addEventListener('click', () => {
	heading.textContent = 'Nowy Dw??r'
	description.textContent = 'Ma??o znana mieszka??com ulica umiejscowiona pod lasem krywa??dzkim tu?? przy zbiorniku wodnym, nazw?? nawi??zuj??ca do dworskich teren??w w jakich jest zlokalizowana.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.8874863097!2d18.64911531589554!3d50.200634013214476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113668e7ca7b63%3A0xcdcb1d3debcf7c3d!2zTm93eSBEd8OzciwgNDQtMTkzIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649706213052!5m2!1spl!2spl")
})
ogrodowa.addEventListener('click', () => {
	heading.textContent = 'Ogrodowa'
	description.textContent = 'Jedna z nowszych ulic jakie mo??emy znale???? w najstaszej dzielnicy miasta "Koloniji", przy kt??rej mo??emy znale???? nowoczesne zabudowania z zadbanymi ogrodami.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.7892722210963!2d18.673199315896007!3d50.221158211740615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136900a05d7c5%3A0x2a433f784035acd4!2sOgrodowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706243109!5m2!1spl!2spl")
})
parkowa.addEventListener('click', () => {
	heading.textContent = 'Parkowa'
	description.textContent = 'Jedna z malowniczych ulic dzielnicy Szczyg??owice, kt??ra biegnie w odludnej cz????ci miasta a?? do Czuchowa. Nazw?? nawi??zuje do otoczenia drzew kt??re s?? wczechobecne w tej lokalizacji.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.6624684367193!2d18.6269603158951!3d50.18614691425464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363b551c3ad1%3A0x1b3eaa423f2c69c7!2sParkowa%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706272115!5m2!1spl!2spl")
})
stalmacha.addEventListener('click', () => {
	heading.textContent = 'Paw??a Stalmacha'
	description.textContent = 'Pawe?? Stalmach by?? polskim dziennikarzem, publicyst??, redaktorem i wydawc?? gazet, dzia??aczem spo??ecznym i narodowym dzia??aj??cym na ??l??sku Cieszy??skim. Swoj?? ulic?? otrzyma?? w dzielnicy "Redyna", jest ona jednak niedu??a przy kt??rej znajdziemy jedynie kilka mniejszych familok??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5875961223924!2d18.663713215896205!3d50.224926611469996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369306d212f1%3A0xccdf121d2dbeef9c!2sPaw%C5%82a%20Stalmacha%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706299924!5m2!1spl!2spl")
})
sciegiennego.addEventListener('click', () => {
	heading.textContent = 'Piotra ??ciegiennego'
	description.textContent = 'Ma??o znana ulica w dzielnicy Szczyg??owice w bliskim s??siedztwie Krywa??du oraz Czuchowa. Jej patron by?? niegdy?? polskim ksi??dzem katolickim, dzia??aczem niepodleg??o??ciowym i socjalistycznym dzia??aj??cym w XIX wieku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.1198145995854!2d18.650239915895447!3d50.19629131352629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711366c6f833127%3A0x22f6e75a3a18bd4c!2sPiotra%20%C5%9Aciegiennego%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706332876!5m2!1spl!2spl")
})
pilsudczykow.addEventListener('click', () => {
	heading.textContent = 'Pi??sudczyk??w'
	description.textContent = 'Ku czci armi wodza J????efa Pi??sudskiego, ulica zlokalizowana jest w centrum osiedla Wojska Polskiego II w kt??rej mo??emy znale???? du??o w miar?? nowych zabudowa?? wielorodzinnych z nowoczesnymi placami zabaw oraz parkingami dla samochod??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.8796033551857!2d18.654758915896487!3d50.23815411051976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136c3410d4b17%3A0xd2c8d61faef388f0!2zUGnFgnN1ZGN6eWvDs3csIDQ0LTEwMCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649706361523!5m2!1spl!2spl")
})
placPowstanSlaskich.addEventListener('click', () => {
	heading.textContent = 'Plac Powsta?? ??l??skich'
	description.textContent = 'Trzy Powstania ??l??skie mia??y prze??omowy wp??yw na w????czenie G??rnego ??l??ska do nowych granic powstaj??cego niepodleg??ego pa??stwa Polskiego. Sama ulica jest marginalnie ma??a i znajduje si?? w bliskim s??siedztwie ogr??dk??w dzia??kowych oraz cmentarza miejskiego od strony dzielnicy "Kolonija".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.530228483164!2d18.669678315896178!3d50.225998511393044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136915211c0e7%3A0x265bafa8985aa307!2zUGxhYyBQb3dzdGHFhGPDs3cgxZpsxIVza2ljaCwgNDQtMTAwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649706393324!5m2!1spl!2spl")
})
plebiscytowa.addEventListener('click', () => {
	heading.textContent = 'Plebiscytowa'
	description.textContent = 'Ulica plebiscytowa nawi??zuje do plebiscyt??w kt??re by??y niegdy?? przeprowadzane na terenach ??l??ska podczas kszta??towania si?? pa??stwa Polskiego po I wojnie ??wiatowej. Jest zlokalizowana tu?? przy miejskim cmentarzu od strony g??rniczej dzielnicy "Kolonija".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.538165490323!2d18.669332215896322!3d50.22585021140374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369156938371%3A0x8165cc10a91f7177!2sPlebiscytowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706423498!5m2!1spl!2spl")
})
pocztowa.addEventListener('click', () => {
	heading.textContent = 'Pocztowa'
	description.textContent = 'Swoj?? nazw?? nawi??zuje do pierwszego w mie??cie Urz??du Pocztowego jaki zosta?? utworzony na tych terenach - co za tym idzie znajdziemy j?? w najstarszej g??rniczej dzielnicy "Koloniji".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8954147906798!2d18.67204601589591!3d50.219174811883015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711368ff5150ea7%3A0x91b666226845ff46!2sPocztowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706455658!5m2!1spl!2spl")
})
polna.addEventListener('click', () => {
	heading.textContent = 'Polna'
	description.textContent = 'Nazwa odnosi si?? do obecnych w jej s??siedztwie p??l uprawnych. Ulica polna znajduje si?? na terenie zabudowy jednorodzinnej pomi??dzy starym miastem a Krywa??dem.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.9312908653965!2d18.642297915896073!3d50.21850441193131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136f714047e1d%3A0xaef06e926389c86b!2sPolna%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706485138!5m2!1spl!2spl")
})
poprzeczna.addEventListener('click', () => {
	heading.textContent = 'Poprzeczna'
	description.textContent = 'Przecina wszystkie ulic?? z dzielnicy Farskie - st??d jej nazwa.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.820108146216!2d18.697275915896075!3d50.22058201178207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113424226a3f9f%3A0x379dcb3b7449d472!2sPoprzeczna%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706522243!5m2!1spl!2spl")
})
powstancow.addEventListener('click', () => {
	heading.textContent = 'Powsta??c??w'
	description.textContent = 'Jest ho??dem dla powsta??c??w kt??rzy walczyli o niepodleg??o???? zar??wno naszego kraju jak i regionu G??rnego ??l??ska. Jest zlokalizowana na Krywa??dzie tu?? przy trasie wylotowej w stron?? Rybnika.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.302703287842!2d18.637025015895837!3d50.2115636124297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113659852be4b7%3A0x3cfb4df8b11cc2e9!2zUG93c3RhxYRjw7N3LCA0NC0xOTMgS251csOzdw!5e0!3m2!1spl!2spl!4v1649706549627!5m2!1spl!2spl")
})
przedwiosnia.addEventListener('click', () => {
	heading.textContent = 'Przedwio??nia'
	description.textContent = 'Osiedle "Cztery Pory Roku" oraz nawi??zanie do kolejnej z nich - tym razem nieformalnej aczkolwiek doskonale znanego przedwio??nia.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.989390618784!2d18.648655515896476!3d50.23610311066726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136dd7329caf5%3A0x3fa9091d27419cc4!2sPrzedwio%C5%9Bnia%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706577081!5m2!1spl!2spl")
})
przemyslowa.addEventListener('click', () => {
	heading.textContent = 'Przemys??owa'
	description.textContent = 'Nazw?? doskonale nawi??zuje do tego co mo??emy na niej znale???? - najbardziej uprzemys??owiona ulica miasta przy kt??rej znajdziemy najwi??ksz?? ilo???? zak??ad??w pracy jakie zlokalizowane s?? w Knurowie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.1066847337515!2d18.691402215895916!3d50.21522681216664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113428854b7aab%3A0x126b629a339aa1a5!2zUHJ6ZW15c8WCb3dhLCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649706606961!5m2!1spl!2spl")
})
rozana.addEventListener('click', () => {
	heading.textContent = 'R????ana'
	description.textContent = 'Jej lokalizacja nie budzi ??dziwienia dla lokalnych mieszka??c??w - r????ana musi znajdowa?? si?? na osiedlu kwiatowym. Jest niedu???? uliczk?? przy kt??rej znajdziemy kilka zabudowa?? jednorodzinnych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.212113289359!2d18.670053215896374!3d50.2319421109661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113695f539cca3%3A0x1d8849134c27506f!2zUsOzxbxhbmEsIDQ0LTE5MCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649706638097!5m2!1spl!2spl")
})
rybna.addEventListener('click', () => {
	heading.textContent = 'Rybna'
	description.textContent = 'G????wna droga prowadz??ca do ??owiska nad stawem przy autostradzie A1 w dzielnicy Farskie - dlatego jej nazwa nawi??zuje do ryb.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.850103622258!2d18.691965815896022!3d50.22002151182228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471134270748a911%3A0x460d2d62086bedb2!2sRybna%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706674233!5m2!1spl!2spl")
})
rybnicka.addEventListener('click', () => {
	heading.textContent = 'Rybnicka'
	description.textContent = 'Jedna z najd??u??szych ulic miasta - a na pewno najd??u??sza ulica dzielnicy Krywa??d. Swoj?? nazw?? zawdzi??cza dzi??ki jej lokalizacji, jest g????wn?? tras?? wylotow?? prowadz??c?? w strone Rybnika.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.204454519485!2d18.635282415895816!3d50.21339971229784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136579e8b793b%3A0xaecc763f4572e48!2sRybnicka%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649706782896!5m2!1spl!2spl")
})
sadowa.addEventListener('click', () => {
	heading.textContent = 'Sadowa'
	description.textContent = 'Niedu??a ulica po??o??ona w Krywa??dzie tu?? przy trasie wylotowej w kierunku Rybnika - nazwa jest pok??osiem sad??w kt??re niegdy?? znajdowa??y si?? w tym rejonie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.2013295224424!2d18.642251715895853!3d50.21345811229363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113658ea0a2d69%3A0x1936ce79fde7c9e7!2sSadowa%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649786966920!5m2!1spl!2spl")
})
saperow.addEventListener('click', () => {
	heading.textContent = 'Saper??w'
	description.textContent = 'Niedu??a ulica po??o??ona na osiedlu WP II w miejscu zabudowa?? szeregowych - ku czci polskich saper??w s??u????cych w Polskiej Armii.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.1238501353196!2d18.647037115896392!3d50.23359111084758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e7aeea4f79%3A0xa73bbc05e7c4c9d2!2zU2FwZXLDs3csIDQ0LTEwMCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649787026936!5m2!1spl!2spl")
})
sokola.addEventListener('click', () => {
	heading.textContent = 'Soko??a'
	description.textContent = 'Jedna z najkr??tszych ulic na mapie Knurowa po??o??ona w bliskim s??siedztwie placu "Gwarek" - ci????ko stwierdzi?? motywacj?? jej nazwy.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.6375184608355!2d18.66589081589616!3d50.22399381153709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136923115a383%3A0x910c52e5164e45b9!2zU29rb8WCYSwgNDQtMTAwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649787068948!5m2!1spl!2spl")
})
spoldzielcza.addEventListener('click', () => {
	heading.textContent = 'Sp????dzielcza'
	description.textContent = 'Kr??tka ulica w bliskim s??siedztwie KWK Knur??w przy kt??rej znajdziemy kilka blok??w mieszkalnych - jej nazwa nawi??zuje do sp????dzielni mieszkaniowych obecnych w mie??cie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8498681547026!2d18.67133311589604!3d50.22002591182208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711368ff198e521%3A0xef9047132ec822cc!2zU3DDs8WCZHppZWxjemEsIDQ0LTEwMCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649787100558!5m2!1spl!2spl")
})
moniuszki.addEventListener('click', () => {
	heading.textContent = 'Stanis??awa Moniuszki'
	description.textContent = 'Ulica po??????ona tu?? przy autostradzie A1 kt??rej patron by?? niegdy?? wybitnym polskim kompozytorem, dyrygentem, pedagogiem oraz organist??.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.501059968752!2d18.682846415896265!3d50.22654351135383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113699ae83b337%3A0xdb99f6e5751b0bb8!2sStanis%C5%82awa%20Moniuszki%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787132330!5m2!1spl!2spl")
})
poniatowskiego.addEventListener('click', () => {
	heading.textContent = 'Stanis??awa Poniatowskiego'
	description.textContent = 'Patron ulicy jest znany w naszym kraju jako ostatni w??adca Rzeczypospolitej Obojga Narod??w - jego ulice znajdziemy jednak nie na osiedlu tysi??clecia, a w g??rniczej "Koloniji" w samym jej centrum tu?? przy Szynku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.79420106298!2d18.678376115896054!3d50.22106611174721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369b39581289%3A0xbb757257ee948a40!2sStanis%C5%82awa%20Poniatowskiego%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787162921!5m2!1spl!2spl")
})
staszica.addEventListener('click', () => {
	heading.textContent = 'Stanis??awa Staszica'
	description.textContent = 'Ulica znajduj??ca si?? w dzielnicy Szczyg??owice, kt??rej patron zapisa?? si?? w historii jako polski dzia??acz o??wieceniowy, pionier sp????dzielczo??ci, pisarz polityczny i publicysta, filozof, t??umacz oraz ksi??dz katolicki.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.4558506760927!2d18.627728315895283!3d50.190009613977246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363bfb548101%3A0xe114f2a87611f23c!2sStanis%C5%82awa%20Staszica%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787198018!5m2!1spl!2spl")
})
wyspianskiego.addEventListener('click', () => {
	heading.textContent = 'Stanis??awa Wyspia??skiego'
	description.textContent = 'Stanis??aw Wyspia??ski by?? polskim literatem, poet??, dramaturgiem kt??ry jako pisarz zwi??za?? swoj?? tw??rczo???? z dramatem symbolicznym tworz??c w epoce M??odej Polski. Ulic?? ku jego czci znajdziemy na samym ko??cu dzielnicy Farskie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.725667627413!2d18.69735641589607!3d50.22234671165517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471134215667795d%3A0x4f6890bf5c404dd!2sStanis%C5%82awa%20Wyspia%C5%84skiego%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787228881!5m2!1spl!2spl")
})
starowiejska.addEventListener('click', () => {
	heading.textContent = 'Starowiejska'
	description.textContent = 'Jedna z ostatnich knurowskich ulic od strony Czuchowa - jej nazwa to bezpo??rednie odwo??anie do tych teren??w kt??re po dzi?? dzie?? s?? wiejskie i stosunkowo wiekowe.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.693973321967!2d18.652760415895138!3d50.18555791429694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711360e61eded1f%3A0x998cbfa266a6423a!2sStarowiejska%2C%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787265257!5m2!1spl!2spl")
})
stawowa.addEventListener('click', () => {
	heading.textContent = 'Stawowa'
	description.textContent = 'Ulica z du???? histori?? - jedna z najstarszych ulic Krywa??du kt??ra prowadzi poprzez ruiny starych zabudowa?? wprost do lokalnych staw??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.692403100838!2d18.63492701589562!3d50.204280312952655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113644dd6fa41d%3A0x3fb118021b3ee5b!2sStawowa%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787299445!5m2!1spl!2spl")
})
batorego.addEventListener('click', () => {
	heading.textContent = 'Stefana Batorego'
	description.textContent = 'Ku czci jednego z dawnych w??adc??w Kr??lestwa Polskiego, ulic?? znajdziemy na osiedlu tysi??clecia przy kt??rej zlokalizowana jest m.in. szko??a oraz przedszkole.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.35161186377!2d18.656389215896322!3d50.229335811153305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ebe4f280a7%3A0x2761e9f238a967c5!2sStefana%20Batorego%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787347537!5m2!1spl!2spl")
})
zeromskiego.addEventListener('click', () => {
	heading.textContent = 'Stefana ??eromskiego'
	description.textContent = 'Stefan ??eromski jako jeden z najwybitniejszych polskich pisarzy w historii oraz czterokrotny kandydat do Nagrody Nobla w dziedzinie literatury r??wnie?? zas??u??y?? na swoj?? ulic?? w mie??cie. Znale???? j?? mo??na w Szczyg??owicach tu?? za zabudowaniami mieszkalnymi w bliskim s??siedztwie parku.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.5575482687404!2d18.625539115895222!3d50.18810841411389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363b9fee1283%3A0x3e4fe4931d09f0e3!2sStefana%20%C5%BBeromskiego%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787381463!5m2!1spl!2spl")
})
stokrotki.addEventListener('click', () => {
	heading.textContent = 'Stokrotki'
	description.textContent = 'Ulica znajduj??ca si?? na osiedlu kwiatowym o licznych zabudowaniach jednorodzinnych obecnych w tym rejonie miasta.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.277369927246!2d18.67298041589637!3d50.23072291105369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113696038edfb9%3A0xe64f21206d06cc90!2sStokrotki%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787432388!5m2!1spl!2spl")
})
szarychSzeregow.addEventListener('click', () => {
	heading.textContent = 'Szarych Szereg??w'
	description.textContent = 'Jedna z ulic osiedla Wojska Polskiego I, kt??rej nazwa oddaje ho??d Organizacji Harcerzy ZHP znani pod t?? konspiracyjn?? nazw?? w czasach II wojny ??wiatowej.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3195731003834!2d18.652731715896344!3d50.22993441111033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e932e26687%3A0x27e344eb30b5bbb3!2sSzarych%20Szereg%C3%B3w%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787484235!5m2!1spl!2spl")
})
szkolna.addEventListener('click', () => {
	heading.textContent = 'Szkolna'
	description.textContent = 'Nazwa ulicy wskazuje na obecn?? przy niej szko??e podstawow?? - znajdziemy j?? niedaleko g????wnego szlaku komunikacyjnego w dzielnicy Krywa??d.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.461497847084!2d18.641621615895826!3d50.2085959126429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711365c046c0509%3A0x51a5ba3a93301f1d!2sSzkolna%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787537313!5m2!1spl!2spl")
})
szpitalna.addEventListener('click', () => {
	heading.textContent = 'Szpitalna'
	description.textContent = 'Mimo i?? jej nazwa wskazuje na obecno???? szpitala ten nie znajduje si?? bezpo??rednio przy niej, aczkolwiek w niedalekim s??siedztwie na samym jej pocz??tku. Jest to jedna z g????wnych ulic w mie??cie biegn??ca od starej cz????ci miasta a?? po DW 78 biegn??c?? zar??wno do Gliwic jak i do Rybnika.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3742893165827!2d18.650896215896267!3d50.22891211118367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136eed7c881df%3A0xa0e6743c01ff2ae7!2sSzpitalna%2C%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787565358!5m2!1spl!2spl")
})
sztygarska.addEventListener('click', () => {
	heading.textContent = 'Sztygarska'
	description.textContent = 'Ulic?? Sztygarsk?? znajdziemy w g??rniczej dzielnicy Szczyg??owice - sama jej nazwa nawi??zuje do jej charakteru. Ponadto miejsce te jest znane lokalnej spo??eczno??ci poprzez obecno???? miejskiej hali MOSiR oraz basenu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.3862890155037!2d18.62935341589529!3d50.191310013883935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363eb7ae4581%3A0x90a51a0dbff619d1!2sSztygarska%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787593318!5m2!1spl!2spl")
})
szybowa.addEventListener('click', () => {
	heading.textContent = 'Szybowa'
	description.textContent = 'Znajdziemy j?? na uboczu przy trasie wylotowej w stron?? Czuchowa - przy Szybowej znajdziemy jeden z szyb??w kopalni KWK oraz miejskie wysypisko ??mieci wraz z instalacj?? komunaln?? oraz Punktem Selektywnej Zbi??rki Odpad??w Niebezpiecznych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.0995713198763!2d18.653028315895437!3d50.19666971349924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711366dd07d9693%3A0xca44ee30da167936!2sSzybowa%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787624815!5m2!1spl!2spl")
})
sloneczna.addEventListener('click', () => {
	heading.textContent = 'S??oneczna'
	description.textContent = 'Miejsce o bardzo pozytywnej nazwie znajduje si?? na uboczu Szczyg??owic tu?? przy parku oraz cmentarzu komunalnym.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.4815213994534!2d18.657976615895226!3d50.18952971401171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711360cd1cc198d%3A0x7f0b14ef2f86849b!2zU8WCb25lY3puYSwgS251csOzdw!5e0!3m2!1spl!2spl!4v1649787670278!5m2!1spl!2spl")
})
kosciuszki.addEventListener('click', () => {
	heading.textContent = 'Tadeusza Ko??ciuszki'
	description.textContent = 'Jedna z pierwszych ulic jakie spotkamy wje??dzaj??c do miasta od strony autostrady A1 - jej patron zapisa?? si?? w historii jako bohater narodowy Polski, Stan??w Zjednoczonych Ameryki oraz Bia??orusi.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.85097057083!2d18.67967991589602!3d50.22000531182347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369b4fff8f1f%3A0xbf7c0b4e6939bb54!2sTadeusza%20Ko%C5%9Bciuszki%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787699530!5m2!1spl!2spl")
})
targowa.addEventListener('click', () => {
	heading.textContent = 'Targowa'
	description.textContent = 'W Knurowie znajduje si?? du??y plac targowy ze zwi??kszonym sobotnim handlem. Nie mo??e by?? inaczej poniewa?? ulic?? Targow?? znajdziemy w??a??nie w tym miejscu.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5524766791777!2d18.656864015896286!3d50.22558281142282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136edaabd9c2f%3A0xcbcacd5ac984f0b2!2sTargowa%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787735637!5m2!1spl!2spl")
})
ustronieLesne.addEventListener('click', () => {
	heading.textContent = 'Ustronie Le??ne'
	description.textContent = 'Jak sama nazwa wskazuje jest to ustronne miejsce po??o??one w lesie pomi??dzy Knurowem a Nieborowicami tu?? przy cmentarzu komunalnym znajduj??cym si?? w centralnej cz????ci miasta.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.802426487998!2d18.639352415896067!3d50.2209124117583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136fa200462bd%3A0x666c0308b9338803!2sUstronie%20Le%C5%9Bne%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787768958!5m2!1spl!2spl")
})
ulanow.addEventListener('click', () => {
	heading.textContent = 'U??an??w'
	description.textContent = 'Jest ho??dem dla ??o??nierzy jazdy lekkiej uzbrojonej w lance, szable oraz bro?? paln?? kt??rzy stanowili niegdy?? o sile polskiej kawalerii. Ulica jest zlokalizowana na osiedlu WP II, znana g????wnie z obecno??ci kompleksu boisk sportowych oraz nowoczesnej hali.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.2165290677967!2d18.648605115896416!3d50.231859610972016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e629cc00ef%3A0xb72cd2df4bc20311!2zVcWCYW7Ds3csIDQ0LTEwMCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649787797916!5m2!1spl!2spl")
})
wagowa.addEventListener('click', () => {
	heading.textContent = 'Wagowa'
	description.textContent = 'Nazwa ulicy wskazuje na jej lokalizacj?? - znajdziemy przy niej wag?? KWK Knur??w oraz stadion miejski klubu sportowego Concordia.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.9356255106677!2d18.677870515896014!3d50.21842341193705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113684b9c2ea6f%3A0x52bfebfc078e4f8b!2sWagowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787828621!5m2!1spl!2spl")
})
rakoniewskiego.addEventListener('click', () => {
	heading.textContent = 'Walentego Rakoniewskiego'
	description.textContent = 'G????wna ulica nowszej cz????ci starego miasta nazwana ku czci polskiego patrioty, powsta??ca ??l??skiego, dzia??acza i spo??ecznika. To przy tej ulicy znajdziemy drugi najwi??kszy cmentarz w mie??cie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.812947727058!2d18.646759515896022!3d50.220715811772415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136f13dcf61d3%3A0x9e4d33d591e0a88c!2sWalentego%20Rakoniewskiego%2C%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787854916!5m2!1spl!2spl")
})
wieczorka.addEventListener('click', () => {
	heading.textContent = 'Wieczorka'
	description.textContent = 'Ulica upami??tniaj??ca pochodz??cego z Rybnika boksera, b??d??cego zas??u??on?? postaci?? ??l??skiego ??rodowiska sportowego w okresie przedwojennym i pi??ciokrotnego medalisty Mistrzostw Polski. Znajdziemy j?? w Szczyg??owicach jako jedna z pierwszych ulic przy wje??dzie od strony centrum miasta.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.5086557719014!2d18.63375033423625!3d50.18902244829433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711363df41f4561%3A0x31c7902e1ea70f6f!2sJ%C3%B3zefa%20Wieczorka%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787903132!5m2!1spl!2spl")
})
wilsona.addEventListener('click', () => {
	heading.textContent = 'Wilsona'
	description.textContent = 'Jedna z g????wnych ulic biegn??cych na granicy dzielnicy "Redyna" ze star?? cz????ci?? miasta. Jej patron zapisa?? si?? w historii Polski jako g????wna posta?? dzi??ki kt??rej nasz kraj odzyska?? niepodleg??o???? po 123 latach okupacji.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.836986986519!2d18.65613281589606!3d50.22026661180473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711368cd297b4eb%3A0xae9baed12fa98157!2sThomasa%20Woodrowa%20Wilsona%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649787946212!5m2!1spl!2spl")
})
witosa.addEventListener('click', () => {
	heading.textContent = 'Wincentego Witosa'
	description.textContent = 'Wincenty Witos mia?? ogromny wp??yw na odzyskanie niepodleg??o??ci tu?? po I wojnie ??wiatowej - jego ulica znajduje si?? na osiedlu WP II przy jednej z g????wnych arterii przy kt??rej zlokalizowane s?? r????ne lokale ??wiadcz??ce us??ugi oraz specjalistyczne sklepy.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.9734392837827!2d18.655685715896468!3d50.23640111064567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136c2ff021e71%3A0x5b3688dc34046640!2sWincentego%20Witosa%2C%2044-196%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788003403!5m2!1spl!2spl")
})
wiosenna.addEventListener('click', () => {
	heading.textContent = 'Wiosenna'
	description.textContent = 'Swoj?? nazw?? nawi??zuje do pi??knej pory roku powszechnie lubianej na ca??ym ??wiecie - oczywi??cie znajdziemy j?? na osiedlu "Cztery Pory Roku" gdzie zlokalizowany jest Miejski ????obek.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0169948297325!2d18.64947451589647!3d50.23558741070414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136dd679a6675%3A0xa8110a7c3098fdf3!2sWiosenna%2C%2044-100%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788033194!5m2!1spl!2spl")
})
stwosza.addEventListener('click', () => {
	heading.textContent = 'Wita Stwosza'
	description.textContent = 'Kr??tka uliczka znajduj??ca si?? w dzielnicy "Redyna" ulica Wita Stwosza jest ho??dem dla wybitnego rze??biarza, grafika, malarza i przedstawiciela p????nego gotyku pochodzenia niemieckiego.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.606247504039!2d18.664372315896173!3d50.22457811149497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693ab590d4f%3A0xed54ae8d06759480!2sWita%20Stwosza%2C%2044-194%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788070242!5m2!1spl!2spl")
})
korfantego.addEventListener('click', () => {
	heading.textContent = 'Wojciecha Korfantego'
	description.textContent = 'Wojciech Korfanty jest uwa??any za ojca d????e?? ??l??zak??w do wcielenia regionu do Polski - ulic?? ku jego czci znajdziemy w Szczyg??owicach na przeciwko Ko??cio??a pw. Naj??wi??tszej Maryi Panny Kr??lowej Polski.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.2160756477856!2d18.646163215895402!3d50.19449191365554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711366b68e4638f%3A0xaa4dcc2acb5deab6!2sWojciecha%20Korfantego%2C%2044-193%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788101842!5m2!1spl!2spl")
})
wolnosci.addEventListener('click', () => {
	heading.textContent = 'Wolno??ci'
	description.textContent = 'Ulica Wolno??ci wraz z rozbudow?? nowego osiedla wiosennego sta??a si?? wa??nym po????czeniem starego miasta z nowymi zabudowaniami i poniek??d obwodnic?? centrum. Jej nazwa nawi??zuje do bardzo wa??nej warto??ci jaka przy??wieca ka??demu cz??owiekowi na ??wiecie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.355074773904!2d18.67518161589626!3d50.22927111115789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113696633511ab%3A0xae159b49526a30b4!2zV29sbm_Fm2NpLCA0NC0xOTAgS251csOzdw!5e0!3m2!1spl!2spl!4v1649788132577!5m2!1spl!2spl")
})
wrzosowa.addEventListener('click', () => {
	heading.textContent = 'Wrzosowa'
	description.textContent = 'Nazw?? nawi??zuje do wrzos??w jakie znajdziemy w tym rejonie - ulica znajduje si?? w g??rniczej dzielnicy "Kolonija" w niedalekiej obecno??ci autostrady A1.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.44405492644!2d18.680619215896268!3d50.227608611277425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136984e578999%3A0x18b3332a8e313de8!2sWrzosowa%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788158290!5m2!1spl!2spl")
})
wzgorze.addEventListener('click', () => {
	heading.textContent = 'Wzg??rze'
	description.textContent = 'Ulica znajduj??ca si?? na wzg??rzu przy granicy starej cz??sci miasta a dzielnic?? Krywa??d - znajdziemy tam osiedle zabudowa?? jednorodzinnych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.992976133198!2d18.645208415895976!3d50.21735171201398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136f661641b47%3A0x8884d7ba7dd1bbb5!2zV3pnw7NyemUsIDQ0LTE5MCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649788183164!5m2!1spl!2spl")
})
broniewskiego.addEventListener('click', () => {
	heading.textContent = 'W??adys??awa Broniewskiego'
	description.textContent = 'Ku czci polskiego poety i t??umacza literackiego - by?? r??wnie?? ??o??nierzem Legion??w Polskich uczestnicz??cych w wojnie polsko-bolszewickiej. Jego ulica zlokalizowana jest w dzielnicy "Redyna" na przeciwsko OSP Knur??w.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.559054241337!2d18.665842215896213!3d50.22545991143175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113693bc3692e1%3A0xcd6a75a69fcb2b71!2sW%C5%82adys%C5%82awa%20Broniewskiego%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788211706!5m2!1spl!2spl")
})
jagielly.addEventListener('click', () => {
	heading.textContent = 'W??adys??awa Jagie????y'
	description.textContent = 'W??adys??aw Jagie????o przeszed?? do historii jako za??o??yciel dynastii Jagiellon??w, by?? wielkim ksi??ciem litewskim i kr??lem Polski. Jego ulica znajduje si?? na osiedlu tysi??clecia - znajdziemy tam kilkana??cie blok??w mieszkalnych.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.423095945347!2d18.65551621589627!3d50.228000211249146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ec08a8f80f%3A0x9861c74932322a8b!2zV8WCYWR5c8WCYXdhIEphZ2llxYLFgnksIDQ0LTEwMCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649788242065!5m2!1spl!2spl")
})
sikorskiego.addEventListener('click', () => {
	heading.textContent = 'W??adys??awa Sikorskiego'
	description.textContent = 'Niedu??a ulica przy kt??rej znajduj?? si?? jedynie kilka blok??w mieszkalnych zlokalizowana na osiedlu Wojska Polskiego II.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.1583795324036!2d18.64624971589636!3d50.23294601089391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136e636226cd5%3A0x6af5d9f4daf57e68!2sW%C5%82adys%C5%82awa%20Sikorskiego%2C%2044-196%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788271000!5m2!1spl!2spl")
})
reymonta.addEventListener('click', () => {
	heading.textContent = 'W??adys??awa Stanis??awa Reymonta'
	description.textContent = 'Ulica oddaj??ca ho??d polskiemu pisarzowi, prozaikowi i noweli??cie - jeden z g????wnych przedstawicieli realizmy z elementami naturalizmy w prozie M??odej Polski. Zlokalizowana jest w dzielnicy "Redyna" pomi??dzy ma??ymi mieszkalnymi familokami.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.5877085126394!2d18.662234315896164!3d50.22492451147009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113692e095078f%3A0xdbbcdd2ca8e4de24!2zV8WCYWR5c8WCYXdhIFN0YW5pc8WCYXdhIFJleW1vbnRhLCA0NC0xMDAgS251csOzdw!5e0!3m2!1spl!2spl!4v1649788312689!5m2!1spl!2spl")
})
lokietka.addEventListener('click', () => {
	heading.textContent = 'W??adys??awa ??okietka'
	description.textContent = 'Ulica ??okietka znajduje si?? w samym centrum miasta na osiedlu tysi??clecia gdzie znajdziemy miejskie wie??owce. Jej patron by?? w latach 1320-1333 kr??lem Polski kt??ry zjednoczy?? ziemie polskie po rozbiciu dzielnicowym.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.2528024802236!2d18.658997915896304!3d50.23118191102059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136eba9eac747%3A0xe947967c2d5cbc4c!2zV8WCYWR5c8WCYXdhIMWBb2tpZXRrYSwgNDQtMTAwIEtudXLDs3c!5e0!3m2!1spl!2spl!4v1649788346008!5m2!1spl!2spl")
})
zielona.addEventListener('click', () => {
	heading.textContent = 'Zielona'
	description.textContent = 'Jej nazwa wskazuje na otaczaj??c?? j?? ziele?? poniewa?? ulica znajduje si?? w bliskim s??siedztwie lasu Krywa??dzkiego.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.3296073785355!2d18.656958815895326!3d50.19236961380793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113672de4165bb%3A0x358678aa28598616!2sZielona%2C%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788379360!5m2!1spl!2spl")
})
zimowa.addEventListener('click', () => {
	heading.textContent = 'Zimowa'
	description.textContent = 'Kolejna ju?? ulica odnosz??ca si?? do pory roku znajduj??ca si?? na osiedlu domk??w szeregowych o tej tematyce oraz nazwie.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0322661804535!2d18.644809015896463!3d50.23530211072487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471136ddf45cb449%3A0x6ea3183e3bdb1ff3!2zWmltb3dhLCBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649788408128!5m2!1spl!2spl")
})
kossakSzczuckiej.addEventListener('click', () => {
	heading.textContent = 'Zofii Kossak-Szczuckiej'
	description.textContent = 'Patronka ulicy wpisa??a si?? w historie Polski jako powie??ciopisarka oraz wsp????za??o??ycielka dw??ch tajnych organizacji w okupowanej Polsce. Ulica ku jej czci znajdziemy tu?? przy autostradzie A1 w g??rniczej dzielnicy "Kolonija".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.517902807001!2d18.68159561589614!3d50.22622881137633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113699089b5889%3A0xfd993691929e5c70!2sZofii%20Kossak-Szczuckiej%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788442536!5m2!1spl!2spl")
})
zwirki.addEventListener('click', () => {
	heading.textContent = '??wirki i Wigury'
	description.textContent = 'Franciszek ??wirko by?? niegdy?? pilotem Wojska Polskiego w stopniu porucznika kt??ry wraz z in??ynierem Stanis??awem Wigur?? zdoby?? pierwsze miejsce w zawodach "Challenge" oraz puchar mi??dzynarodowy dla Polski. Ulica kt??rej patronuj?? zlokalizowana jest tu?? przy kopalni KWK Knur??w na g??rniczym osiedlu "Kolonija".'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8949652672363!2d18.673206915895975!3d50.21918321188248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711368543df40bb%3A0x9a8c04baf7aa3f98!2s%C5%BBwirki%20i%20Wigury%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1spl!2spl!4v1649788476544!5m2!1spl!2spl")
})
zwyciestwa.addEventListener('click', () => {
	heading.textContent = 'Zwyci??stwa'
	description.textContent = 'G????wna ulica Krywa??du kt??ra jest jednocze??nie drog?? wylotow?? w stron?? Czuchowa. Jej nazwa nawi??zuje do zwyci??skiej historii zar??wno kraju jak i regiony nad wszelkimi wrogami kt??rzy atakowali nas w przesz??o??ci.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.909565805191!2d18.643440715895537!3d50.20022131324419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711364110414ea9%3A0x3c02c776a11f1661!2zWnd5Y2nEmXN0d2EsIDQ0LTE5MyBLbnVyw7N3!5e0!3m2!1spl!2spl!4v1649788515728!5m2!1spl!2spl")
})
lubinowa.addEventListener('click', () => {
	heading.textContent = '??ubinowa'
	description.textContent = 'Znajduje si?? na granicy "Koloniji" a nowym osiedlem domk??w jednorodzinnych o tematyce kwiatowej. Nie jest wiadomo do czego ma nawi??zywa?? jej nazwa.'
	map.style.display = "block"
	map.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.41550122894!2d18.679343915896247!3d50.228142111239045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369845ef4771%3A0xaf5a7dd6487fcc38!2zxYF1Ymlub3dhLCA0NC0xOTAgS251csOzdw!5e0!3m2!1spl!2spl!4v1649788542279!5m2!1spl!2spl")
})