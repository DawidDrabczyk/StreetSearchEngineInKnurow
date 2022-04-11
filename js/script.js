const searchInput = document.querySelector(".search-input");
const streetsItems = document.querySelectorAll(".streets-item");
const popup = document.querySelector(".streets-popup");
const closeBtn = document.querySelector(".close-btn");
let heading = document.querySelector(".street-popup-heading");
let description = document.querySelector(".street-popup-describtion");

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
};

searchInput.addEventListener("input", searchHandler);
closeBtn.addEventListener("click", closePopup);

streetsItems.forEach(el => {
	el.addEventListener("click", popupHandler);
});

firstMay.addEventListener('click', () => {
	heading.textContent = '1 Maja'
	description.textContent = 'Główna ulica miasta łącząca najstarszą część z nowymi osiedlami oraz jedna z dwóch tras wylotowych w kierunku Gliwic. Powstała na cześć Święta Pracy.'
})
twentySixthFeb.addEventListener('click', () => {
	heading.textContent = '26 Stycznia'
	description.textContent = 'Ulica łącząca dwie trasy wylotowe w kierunku Gliwic - pełni rolę "mini obwodnicy" miasta. Jej nazwa nawiązuje do daty oswobodzenia miasta od hitlerowskich okupantów podczas II wojny światowej.'
})
mickiewicza.addEventListener('click', () => {
	heading.textContent = 'Adama Mickiewicza'
	description.textContent = 'Ulica ku czci jednego z największych polskich  poetów, położona w najstarszej górniczej części miasta która jest w trakcie rewitalizacji.'
})
akacjowa.addEventListener('click', () => {
	heading.textContent = 'Akacjowa'
	description.textContent = 'Stosunkowo nowa ulica położona w dzielnicy domków, spokojne miejsce na uboczu miasta - jej nazwa nawiązuje do tematyki przewodnej osiedla - kwiatów.'
})
alejaLipowa.addEventListener('click', () => {
	heading.textContent = 'Aleja Lipowa'
	description.textContent = 'Miejsce największych eventów w mieście, przy Aleji Lipowej odbywają się coroczne Dni Miasta Knurów. Sama nazwa ulicy nawiązuje do (niegdyś) obecnych w dużej liczbie drzew lipowych.'
})
alejaPiastow.addEventListener('click', () => {
	heading.textContent = 'Aleja Piastów'
	description.textContent = 'Jedna z dwóch głównych ulic w dzielnicy Szczygłowice ku czci dawnych władców Piastów, położona w samym centrum osiedla.'
})
alejaSpacerowa.addEventListener('click', () => {
	heading.textContent = 'Aleja Spacerowa'
	description.textContent = 'Aleję spacerową znajdziemy nieopodal starego cmentarza oraz szkoły nr. 1 w dzielnicy "Kolonija". Sama nazwa nawiązuje do jej kształtu - jest okrągła przez co idealnie nadaje się na spacery.'
})
puszkina.addEventListener('click', () => {
	heading.textContent = 'Aleksandra Puszkina'
	description.textContent = 'Jedna z głównych ulic dzielnicy "Redyna", biegnąca przez samo jej centrum łącząc wiele innych mniejszych uliczek. Sam Aleksander Puszkin był jednym z najwybitniejszych pisarzy epoki romantyzmu pochodzenia rosyjskiego'
})
sloniny.addEventListener('click', () => {
	heading.textContent = 'Antoniego Słoniny'
	description.textContent = 'Dusza górniczego osiedla, będącego jednocześnie jedną z uboższych części miasta. Jej patronem jest były sołtys Knurowa który działał na rzecz polskości Górnego Śląska.'
})
armiiKrajowej.addEventListener('click', () => {
	heading.textContent = 'Armii Krajowej'
	description.textContent = 'Nieduża ulica ku czci Polskiej Armii w czasach II wojny światowej, znajdująca się na osiedlu WP I, będąca w bliskim sąsiedztwie ze szkołą nr. 7.'
})
astrow.addEventListener('click', () => {
	heading.textContent = 'Astrów'
	description.textContent = 'Ulicę Astrów znajdziemy w dzielnicy domków jednorodzinnych "Farskie", która graniczy z Gierałtowicami. Ciężko jednoznacznie stwierdzić dlaczego taka nazwa - istnieją spekulację o obecności kwiatów w tym rejonie.'
})
beksza.addEventListener('click', () => {
	heading.textContent = 'Beksza'
	description.textContent = 'Położona na granicy z Gierałtowicami prowadząca do kapliczki św. Huberta - jej nazwa nawiązuje do dawnego rodu Bekschów zamieszkujących niegdyś tereny Knurowa.'
})
bojowa.addEventListener('click', () => {
	heading.textContent = 'Bojowa'
	description.textContent = 'Ulica w przemysłowej części dzielnicy Krywałd, nawiązująca nazwą do ciężkich warunków jakie stawia podczas przejazdu zarówno autem jak i rowerem.'
})
chrobrego.addEventListener('click', () => {
	heading.textContent = 'Chrobrego'
	description.textContent = 'Znajdziemy ją na tzw. osiedlu "Królów" - ku czci pierwszego koronowanego króla Polski. Nieduża ulica z kilkoma familowaki oraz zabudowaniami jednorodzinnymi.'
})
prusa.addEventListener('click', () => {
	heading.textContent = 'Bolesława Prusa'
	description.textContent = 'Położona w sąsiedztwie sklepu Lidl ku czci jednego z najwybitniejszych Polskich pisarzy okresu pozytywizmu.'
})
chabrowa.addEventListener('click', () => {
	heading.textContent = 'Chabrowa'
	description.textContent = 'Ulica położona na bocznym osiedlu nawiązująca do kwiatów - znajdziemy na niej zabudowania domków jednorodzinnych.'
})
chmielna.addEventListener('click', () => {
	heading.textContent = 'Chmielna'
	description.textContent = 'Ulicę chmielną znajdziemy w zabudowaniach jednorodzinnych osiedla kwiatowego - na chmielnej siedzibę ma jeden z kilku prywatnych żłobków w mieście.'
})
cicha.addEventListener('click', () => {
	heading.textContent = 'Cicha'
	description.textContent = 'Swoją nazwą nawiązuje do spokojnego charakteru dzielnicy, położona na granicy starego miasta z dzielnicą Krywałd która sięga aż do terenów zalesionych.'
})
debowa.addEventListener('click', () => {
	heading.textContent = 'Dębowa'
	description.textContent = 'Jedna z kilku ulic dzielnicy Farskie, nazwą nawiązująca do dębowych drzew znajdujących się w tym rejonie'
})
deszczowa.addEventListener('click', () => {
	heading.textContent = 'Deszczowa'
	description.textContent = 'Znajdziemy ją na najnowszym knurowskim osiedlu "Cztery Pory Roku" - nawiązuje ona do pory deszczowej często występującej wiosną oraz jesienią.'
})
ogana.addEventListener('click', () => {
	heading.textContent = 'dr. Floriana Ogana'
	description.textContent = 'Ulica jest gospodarzem Knurowskiego Magistratu - sam patron był niegdyś ordynatorem szpitala w Knurowie.'
})
jordana.addEventListener('click', () => {
	heading.textContent = 'dr. Henryka Jordana'
	description.textContent = 'Położona w dzielnicy zabudowań domków jednorodzinnych "Krywałd", dr. Jordan w latach przedwojennych był polskim lekarzen, społecznikiem oraz pionierem wychowania fizycznego w naszym kraju.'
})
dworcowa.addEventListener('click', () => {
	heading.textContent = 'Dworcowa'
	description.textContent = 'Jedna z głównych ulic miasta dzięki której można dostać się na autostradę A1 lub do gminy Gierałtowice - nazwą nawiązuje do znajdującego się w niedalekim sąsiedztwie Knurowskiego dworca PKP.'
})
dywizjonu303.addEventListener('click', () => {
	heading.textContent = 'Dywizjonu 303'
	description.textContent = 'Najdalej wysunięta ulica osiedla WP II od strony wschodniej - na cześć pamięci Polaków biorących udział w walce o Wielką Brytanię. Piloci myśliwców Dywizjonu 303 w ciągu 40 dni walki zestrzelili 126 niemieckich samolotów, zaskakując wszystkich spektakularnymi sukcesami.'
})
plater.addEventListener('click', () => {
	heading.textContent = 'Emilii Plater'
	description.textContent = 'Jej patronka była polską hrabianką pełniącą funkcję kapitana Wojska Polskiego w czasie powstania listopadowego. Samą ulicę znajdziemy w dzielnicy domków jednorodzinnych "Farskie".'
})
michalskiego.addEventListener('click', () => {
	heading.textContent = 'Feliska Michalskiego'
	description.textContent = 'Jedna z dwóch głównych ulic dzielnicy "Krywałd" - jej patron był lokalnym mieszkańcem dzielnicy oraz żółnierzem Wojska Polskiego zastrzelonym na samym początku II wojny światowej podczas obrony linii Wilcza-Knurów.'
})
floriana.addEventListener('click', () => {
	heading.textContent = 'Floriana'
	description.textContent = 'Malutka ulica położona w sąsiedztwie Urzędu Miasta Knurów, sam św. Florian jest przede wszystkim - obok innych grup - patronem Królestwa Polskiego.'
})
chopina.addEventListener('click', () => {
	heading.textContent = 'Frederyka Chopina'
	description.textContent = 'Chyba nie ma w Polsce osoby nie świadomej tego kim był Frederyk Chopin - najwybitniejszy Polski kompozytor. Ulicę ku jego czci znajdziemy w tzw. dzielnicy domków fińskich.'
})
gornicza.addEventListener('click', () => {
	heading.textContent = 'Górnicza'
	description.textContent = 'Ulica znajdująca się w Szczygłowicach, jak sama nazwa wskazuje kieruje nas w stronę kopalni - oddziału KWK Knurów-Szczygłowice.'
})
graniczna.addEventListener('click', () => {
	heading.textContent = 'Graniczna'
	description.textContent = 'Wyznacza granicę miasta od strony południowo-wschodniej, jest stosunkowo "zawijastą" ulicą znajdującą się od strony Czuchowa (gm. Czerwionka-Leszczyny).'
})
grunwaldzka.addEventListener('click', () => {
	heading.textContent = 'Grunwaldzka'
	description.textContent = 'Jej nazwa nawiązuje do słynnej bitwy pod Grunwaldem z 1410 roku. Nieduża ulica mieszcząca się w starej części miasta od strony Krywałdu z zabudowaniami jednorodzinnymi.'
})
gryczana.addEventListener('click', () => {
	heading.textContent = 'Gryczana'
	description.textContent = 'Mało znana lokalnym mieszkańcom ulica - jedna z najmniejszych w mieście. Znajdziemy ją tuż przy autostradzie A1 oraz ogródków działkowych.'
})
sienkiewicza.addEventListener('click', () => {
	heading.textContent = 'Henryka Sienkiewicza'
	description.textContent = 'Ulicę Sienkiewicza znajdziemy w górniczej dzielnicy miasta - sam jej patron był wybitnym polskim pisarzem przełomu XIX i XX w. uhonorowanym Nagrodą Nobla w dziedzinie literatury za całokształt twórczości.'
})
wieniawskiego.addEventListener('click', () => {
	heading.textContent = 'Henryka Wieniawskiego'
	description.textContent = 'Położona w dzielnicy domków fińskich ulica której patronem jest jeden z najwybytniejszych polskich skrzypków oraz kompozytorów w historii.'
})
kollataja.addEventListener('click', () => {
	heading.textContent = 'Hugo Kołłątaja'
	description.textContent = 'Jedna z ulic znajdujących się w górniczej dzielnicy Szczygłowice, jej patron był niegdyś polskim politykiem który miał znaczący wpływ na treść Konstytucji 3 maja.'
})
krasickiego.addEventListener('click', () => {
	heading.textContent = 'Ignacego Krasickiego'
	description.textContent = 'Ignacy Krasicki nazywany jest "księciem poetów polskich" jako jeden z głównych przedstawicieli polskiego oświecenia. Sama ulica znajduje się w dzielnicy "Redyna" - a sami mieszkańcy kojarzą ją z tzw. "beemeciokiem" czyli najdłuższym blokiem w mieście, liczącym największą liczbę klatek.'
})
paderewskiego.addEventListener('click', () => {
	heading.textContent = 'Ignacego Paderewskiego'
	description.textContent = 'Tą niedużą ulicę znajdziemy w dzielnicy domków fińskich - jej patron odegrał kluczową rolę w operacji odzyskania przez Polskę niepodległości po I wojnie światowej. Ponadto był światowej klasy pianistą oraz kompozytorem z którego zdaniem liczył się przede wszystkim ówczesny prezydent Stanów Zjednoczonych Woodrow Wilson.'
})
jagielnia.addEventListener('click', () => {
	heading.textContent = 'Jagielnia'
	description.textContent = 'Marginalnie mała ulica znajdująca się w dzielnicy "Krywałd" w bezpośrednim sąsiedztwie zbiorników wodnych. Sama nazwa nie wskazuje na żadnego konkretnego patrona lub motyw jej nazewnictwa, a zdecydowana większość mieszkańców miasta nie potrafiłaby wskazać gdzie dokładnie się znajduje.'
})
brzechwy.addEventListener('click', () => {
	heading.textContent = 'Jana Brzechwy'
	description.textContent = 'Umiejscowiona w nowszej części "Koloniji" ulica której patronem jest polski poeta i adwokat żydowskiego pochodzenia - autor bajek i wierszy dla dzieci oraz satyrycznych tekstów dla dorosłych.'
})
dymka.addEventListener('click', () => {
	heading.textContent = 'Jana Dymka'
	description.textContent = 'Stosunkowo długa ulica łącząca starszą część górniczego osiedla "Kolonija" z nową zabudową domków jednorodzinnych. Sam patron ulicy był lokalnym mieszkańcem udzielającym się w dziedzinie kinematografii.'
})
kilinskiego.addEventListener('click', () => {
	heading.textContent = 'Jana Kilińskiego'
	description.textContent = 'Szczygłowicka ulica przy której znajdziemy zarówno szkołę podstawową nr. 4 oraz centrum rehabilitacji Fizjofit. Sam patron zapisał się w historii jako pułkownik powstania kościuszkowskiego oraz uczesnik spisków powstańczych - z zawodu był szewcem.'
})
kochanowskiego.addEventListener('click', () => {
	heading.textContent = 'Jana Kochanowskiego'
	description.textContent = 'Nieduża ulica położona na "Redynie" - dzielnicy w której przeważają dwupiętrowe familoki. Patron ulicy był w przeszłości polskim poetą epoki renesansu.'
})
kwitka.addEventListener('click', () => {
	heading.textContent = 'Jana Kwitka'
	description.textContent = 'Ulica poświęcona lokalnemu działaczowi społecznemu, który w latach międzywojennych pełnił funkcję ławnika Knurowa oraz naczelnika gminy. Znajdziemy ją w górniczej dzielnicy "Kolonija", w niedalekim sąsiedztwie stawu Moczury.'
})
matejki.addEventListener('click', () => {
	heading.textContent = 'Jana Matejki'
	description.textContent = 'Jan Matejko zapisał się w historii jako jeden z najwybitniejszych polskich malarzy, twórca obrazów historycznych i batalistycznych. Jego ulicę znajdziemy w starej części miasta prowadzącej na Krywałd od strony domków jednorodzinnych.'
})
sobieskiego.addEventListener('click', () => {
	heading.textContent = 'Jana Sobieskiego'
	description.textContent = 'Król Polski Jan III Sobieski zapisał się w historii jako władca który zatrzymał Turków pod Wiedniem. Swoją ulicę otrzymał w samym centrum miasta na osiedlu tysiąclecia.'
})
dabrowskiego.addEventListener('click', () => {
	heading.textContent = 'Jarosława Dąbrowskiego'
	description.textContent = 'Główna ulica dzielnicy fińskich domków biegnąca na granicy z Redyną. Sam Jarosław Dąbrowski był polskim działaczem niepodległościowym oraz naczelnym dowódcą wojsk Komuny Paryskiej w stopniu generała.'
})
jasminowa.addEventListener('click', () => {
	heading.textContent = 'Jaśminowa'
	description.textContent = 'Ulica podtrzymująca kwiatową tematykę osiedla domków jednorodzinnych znajdujących się na uboczu od północno zachodniej strony miasta.'
})
jeczmienna.addEventListener('click', () => {
	heading.textContent = 'Jęczmienna'
	description.textContent = 'Główna ulica prowadząca oraz biegnąca przez kwiatowe osiedle domków jednorodzinnych. Możemy z niej w łatwy sposób dostać się do centrum miasta.'
})
jednosci.addEventListener('click', () => {
	heading.textContent = 'Jedności Narodowej'
	description.textContent = 'Jedna z ulic znajdująca się na osiedlu WP I na której znajdziemy kilka bloków. Samą nazwą nawiązuje do wyrazu szacunku do idei jedności, wyjątkowej w dziejach narodu.'
})
zietka.addEventListener('click', () => {
	heading.textContent = 'Jerzego Ziętka'
	description.textContent = 'Niegdyś ostatnia ulica miasta wychodząca na przedpola Gliwic. Obecnie znajduje się pomiędzy osiedlem WP II a nowymi zabudowaniami z osiedla Cztery Pory Roku. Patron ulicy był w przeszłości wojewodą katowickim który rzetelnie dbał o rozwój regionu.'
})
jesienna.addEventListener('click', () => {
	heading.textContent = 'Jesienna'
	description.textContent = 'Ulica znajdująca się na osiedlu domków jednorodzinnych Cztery Pory Roku, swoją nazwą nawiązującą do złotej aczkolwiek często deszczowej pory roku.'
})
janty.addEventListener('click', () => {
	heading.textContent = 'Józefa Janty'
	description.textContent = 'Umiejscowiona w najstarszej górniczej dzielnicy miasta "Koloniji", której patron był sekterarzem Zarządu Okręgowego Centralnego Związku Zawodowego Górników w Katowicach - zamordowany przez Niemców na początku II wojny światowej.'
})
lompy.addEventListener('click', () => {
	heading.textContent = 'Józefa Lompy'
	description.textContent = 'Nieduża ulica w samym centrum Redyny, natomiast sam Józef Lompa zapisał się w historii jako polski działacz, poeta, tłumacz oraz publicysta. Mówi się że był prekursorem procesu polskiego odrodzenia narodowego na Górnym Śląsku.'
})
ligonia.addEventListener('click', () => {
	heading.textContent = 'Juliusza Ligonia'
	description.textContent = 'Jedna z najmniejszych ulic w mieście znajdująca się przed głównym wiaduktem prowadzącym do Szczygłowic. Juliusz Ligoń był polskim działaczem społecznym Górnego Śląska, śląskim poetą ludowym oraz publicystą.'
})
slowackiego.addEventListener('click', () => {
	heading.textContent = 'Juliusza Słowackiego'
	description.textContent = 'Znajdziemy ją na Redynie w bliskim sąsiedztwie osiedla domków fińskich, której patron był jednym z najwybitniejszych polskich przedstawicieli romantyzmu, dramaturg oraz epistolograf.'
})
kapelanow.addEventListener('click', () => {
	heading.textContent = 'Kapelanów Wojskowych'
	description.textContent = 'Jak sama nazwa wskazuje znajdziemy ją na osiedlu Wojska Polskiego - tym razem jej pierwszej części. Sama nazwa nawiązuje do funkcji kapelanów którzy pełnią lub pełnili niegdyś służbę w strukturach Polskich Sił Zbrojnych.'
})
hlonda.addEventListener('click', () => {
	heading.textContent = 'kard. Augusta Hlonda'
	description.textContent = 'Nieduża boczna uliczka w nowszej części górniczego osiedla "Kolonija", której patronuje polski duchowny, salezjanin, były biskup katowicki, arcybiskup metropolita gnieźnieński, poznański i warszawski oraz prymas Polski.'
})
miarki.addEventListener('click', () => {
	heading.textContent = 'Karola Miarki'
	description.textContent = 'Skrajna uliczka górniczej "Koloniji" od strony Farskiego - sam Karol Miarka był niegdyś nauczycielem, pisarzem, publicystą i drukarzem, który udzielał się społecznie na Górnym Śląsku.'
})
szymanowskiego.addEventListener('click', () => {
	heading.textContent = 'Karola Szymanowskiego'
	description.textContent = 'Jedna z kilku ulic znajdujących się na osiedlu domków fińskich. Jej patron zapisał się do historii Polski jako kompozytor, pianista, pedagog oraz pisarz. Powszechnie uważa się iż obok Frederyka Chopina był jednym z najwybitniejszych polskich kompozytorów.'
})
kazimierza.addEventListener('click', () => {
	heading.textContent = 'Kazimierza Wielkiego'
	description.textContent = 'Jeden z najwybitniejszych Polskich władców w historii, ostatni monarcha z dynastii Piastów na tronie. Jego ulicę znajdziemy  na blokowisku w samym centrum miasta gdzie zamieszkuje stosunkowo duża liczba mieszkańców.'
})
klasztorna.addEventListener('click', () => {
	heading.textContent = 'Klasztorna'
	description.textContent = 'Ulica klasztorna zlokalizowana jest w noszej części "Koloniji", która jest najstarszym osiedlem w mieście. Jej nazwa nawiązuje do znajdującej się przy niej klasztoru Sióstr Służebniczek Najświętszej Marii Panny.'
})
damrota.addEventListener('click', () => {
	heading.textContent = 'Konstantego Damrota'
	description.textContent = 'Jedna z najkrótszych ulic w mieście którą znajdziemy w bliskim sąsiedztwie wjazdu na autostradę A1. Jest hołdem dla polskiego duchownego katolickiego, poety, pisarza oraz lokalnego działacza Górnośląskiego.'
})
kopalniana.addEventListener('click', () => {
	heading.textContent = 'Kopalniana'
	description.textContent = 'Swoją nazwą nawiązuje do górniczych tradycji miasta, prowadzi ona prosto do bramy głównego zakładu pracy w mieście - Kopalni Węgla Kamiennego Knurów.'
})
koscielna.addEventListener('click', () => {
	heading.textContent = 'Kościelna'
	description.textContent = 'Jak sama nazwa wskazuje ulica kościelna doprowdzi nas do katolickiej świątyni pw. Antoniego Paderewskiego znajdującej się w Krywałdzie.'
})
kosmonautow.addEventListener('click', () => {
	heading.textContent = 'Kosmonautów'
	description.textContent = 'Ulica kosmonautów jest jednym z głównych szlaków łączących dwie najważniejsze szlaki prowadzące w stronę Gliwic. Jest hołdem wszystkich ludzi którzy przyczynili się do rozwoju nauki poprzez kosmiczne podróże w przestrzeń.'
})
krotka.addEventListener('click', () => {
	heading.textContent = 'Krótka'
	description.textContent = 'Pomimo nazwy ulica nie jest wcale najkrótszą w mieście, niemniej jednak z uwagi na jej rozmiar można śmiało klasyfikować ją jako krótką. Znajdziemy ją w dzielnicy Krywałd, w niedalekim sąsiedztwie byłego stadionu.'
})
krucza.addEventListener('click', () => {
	heading.textContent = 'Krucza'
	description.textContent = 'Jedna z najkrótszych ulic Knurowa znajdująca się na osiedlu Farskie w bliskim sąsiedztwie Gierałtowic. Swoją nazwą ciężko jednoznacznie stwierdzić do czego nawiązuje.'
})
kozielka.addEventListener('click', () => {
	heading.textContent = 'ks. Alojzego Koziełka'
	description.textContent = 'Jedna z kilku głównych ulic górniczego osiedla "Kolonija", bardzo długa łącząca najstarszą z najnowszą częścią miasta. W historii miasta zapisał się jako proboszcz parafii Cyryla i Metodego - ponadto jest autorem pierwszej monografii Knurowa pt. "Knurów i Krywałd".'
})
jagly.addEventListener('click', () => {
	heading.textContent = 'ks. Józefa Jagły'
	description.textContent = 'Patronem ulicy jest pierwszy założyciel gliwickiego oddziału Caritasu, działacz na rzecz polskich dążeń narodowych. Jego ulica zlokalizowana jest na nitce łączącej osiedlę kwiatowe z nowszą częścią "Koloniji".'
})
ksiazenicka.addEventListener('click', () => {
	heading.textContent = 'Książenicka'
	description.textContent = 'Jak sama nazwa wskazuje ulicą Książenicką dojedziemy prosto do Książenic, jest ona trasą wylotową ze Szczygłowic.'
})
kwiatowa.addEventListener('click', () => {
	heading.textContent = 'Kwiatowa'
	description.textContent = 'Nazwa ulicy wskazuje na osiedlę w którym ją znajdziemy - jest to nowoczesne osiedle domków jednorodzinnych od strony gliwickiej dzielnicy "Bojków".'
})
legionow.addEventListener('click', () => {
	heading.textContent = 'Legionów'
	description.textContent = 'Nieduża ulica domków szeregowych znajdująca się na osiedlu Wojska Polskiego II, ku czci Legionów Polskich walczących o wolność i niepodległość naszego kraju.'
})
lesna.addEventListener('click', () => {
	heading.textContent = 'Leśna'
	description.textContent = 'Sama nazwa wskazuje na jej lokalizację, znajdziemy ją na końcu miasta w sąsiedztwie z Czuchowem - prowadzi do lasów znajdujących się przy terenach kopalnii oraz instalacji komunalnej.'
})
letnia.addEventListener('click', () => {
	heading.textContent = 'Letnia'
	description.textContent = 'Ulica z nowego osiedla "Cztery Pory Roku" nazwą nawiązująca do najbardziej lubianej pory roku.'
})
lignozy.addEventListener('click', () => {
	heading.textContent = 'Lignozy'
	description.textContent = 'Jedna z dwóch głównych ulic biegnących przez Szczygłowice, jest to trasa prowadząca do tej górniczej dzielnicy. Swoją nazwą nawiązuje do materiału wybuchowego wykorzystywanego powszechnie w górnictwie.'
})
lotnikow.addEventListener('click', () => {
	heading.textContent = 'Lotników'
	description.textContent = 'Ku czci lotników polskich którzy zapisali się w historii jako jedna z najsilnieszych polskich sił zbrojnych. Ulicę znajdziemy w samym centrum osiedla WP II.'
})
konopnickiej.addEventListener('click', () => {
	heading.textContent = 'Marii Konopnickiej'
	description.textContent = 'Znajdziemy ją w górniczej dzielnicy Szczygłowice - Maria Konopnicka jest jedną z najwybitniejszych polskich poetów okresu pozytywizmu, krytyczka literacka, publicystka oraz pisarka.'
})
marynarzy.addEventListener('click', () => {
	heading.textContent = 'Marynarzy'
	description.textContent = 'Ku czci żółnierzy polskich służących w Polskiej Marynarce, ulicę Marynarzy znajdziemy na osiedlu WP II jako skrajna ulica całego osiedla tuż przy trasie wylotowej w kierunku Gliwic.'
})
karlowicza.addEventListener('click', () => {
	heading.textContent = 'Mieczysława Karłowicza'
	description.textContent = 'Zlokalizowana w bliskim sąsiedztwie autostrady A1 oraz stawu Moczury - jej patron był polskim kompozytorem i dyrygentem oraz przedstawicielem nurtu późnego romantyzmu.'
})
mieszka.addEventListener('click', () => {
	heading.textContent = 'Mieszka I'
	description.textContent = 'Kolejna ulica poświęcona jednemu z polskich królów na osiedlu tysiąclecia. Mieszko I przyjął chrzest Polski i wprowadził Polan do świata zachodniej Europy.'
})
kopernika.addEventListener('click', () => {
	heading.textContent = 'Mikołaja Kopernika'
	description.textContent = 'Chyba nie ma w Polsce człowieka nie wiedzącego tego kim był Mikołaj Kopernik - najwybitniejszy polski astronom - ponadto kanonik, prawnik, matematyk, lekarz i ekonomista. Jego ulicę znajdziemy w dzielnicy "Kolonija" jako jedna z pierwszych ulic jakie napotkamy wjeżdzając do miasta od strony Gierałtowic.'
})
niepodleglosci.addEventListener('click', () => {
	heading.textContent = 'Niepodległości'
	description.textContent = 'Niegdyś centrum życia miasta, obecnie niestety kosztem centrum pomału wymierająca. Jedna z głównych arterii miasta poświęcona niepodległości państwa Polskiego - znajdziemy przy niej m.in. miejski Szpital.'
})
nowyDwor.addEventListener('click', () => {
	heading.textContent = 'Nowy Dwór'
	description.textContent = 'Mało znana mieszkańcom ulica umiejscowiona pod lasem krywałdzkim tuż przy zbiorniku wodnym, nazwą nawiązująca do dworskich terenów w jakich jest zlokalizowana.'
})
ogrodowa.addEventListener('click', () => {
	heading.textContent = 'Ogrodowa'
	description.textContent = 'Jedna z nowszych ulic jakie możemy znaleźć w najstaszej dzielnicy miasta "Koloniji", przy której możemy znaleść nowoczesne zabudowania z zadbanymi ogrodami.'
})
parkowa.addEventListener('click', () => {
	heading.textContent = 'Parkowa'
	description.textContent = 'Jedna z malowniczych ulic dzielnicy Szczygłowice, która biegnie w odludnej części miasta aż do Czuchowa. Nazwą nawiązuje do otoczenia drzew które są wczechobecne w tej lokalizacji.'
})
stalmacha.addEventListener('click', () => {
	heading.textContent = 'Pawła Stalmacha'
	description.textContent = 'Paweł Stalmach był polskim dziennikarzem, publicystą, redaktorem i wydawcą gazet, działaczem społecznym i narodowym działającym na Śląsku Cieszyńskim. Swoją ulicę otrzymał w dzielnicy "Redyna", jest ona jednak nieduża przy której znajdziemy jedynie kilka mniejszych familoków.'
})
sciegiennego.addEventListener('click', () => {
	heading.textContent = 'Piotra Ściegiennego'
	description.textContent = 'Mało znana ulica w dzielnicy Szczygłowice w bliskim sąsiedztwie Krywałdu oraz Czuchowa. Jej patron był niegdyś polskim księdzem katolickim, działaczem niepodległościowym i socjalistycznym działającym w XIX wieku.'
})
pilsudczykow.addEventListener('click', () => {
	heading.textContent = 'Piłsudczyków'
	description.textContent = 'Ku czci armi wodza Jóżefa Piłsudskiego, ulica zlokalizowana jest w centrum osiedla Wojska Polskiego II w której możemy znaleźć dużo w miarę nowych zabudowań wielorodzinnych z nowoczesnymi placami zabaw oraz parkingami dla samochodów.'
})
placPowstanSlaskich.addEventListener('click', () => {
	heading.textContent = 'Plac Powstań Śląskich'
	description.textContent = 'Trzy Powstania Śląskie miały przełomowy wpływ na włączenie Górnego Śląska do nowych granic powstającego niepodległego państwa Polskiego. Sama ulica jest marginalnie mała i znajduje się w bliskim sąsiedztwie ogródków działkowych oraz cmentarza miejskiego od strony dzielnicy "Kolonija".'
})
plebiscytowa.addEventListener('click', () => {
	heading.textContent = 'Plebiscytowa'
	description.textContent = 'Ulica plebiscytowa nawiązuje do plebiscytów które były niegdyś przeprowadzane na terenach Śląska podczas kształtowania się państwa Polskiego po I wojnie światowej. Jest zlokalizowana tuż przy miejskim cmentarzu od strony górniczej dzielnicy "Kolonija".'
})
pocztowa.addEventListener('click', () => {
	heading.textContent = 'Pocztowa'
	description.textContent = 'Swoją nazwą nawiązuje do pierwszego w mieście Urzędu Pocztowego jaki został utworzony na tych terenach - co za tym idzie znajdziemy ją w najstarszej górniczej dzielnicy "Koloniji".'
})
polna.addEventListener('click', () => {
	heading.textContent = 'Polna'
	description.textContent = 'Nazwa odnosi się do obecnych w jej sąsiedztwie pól uprawnych. Ulica polna znajduje się na terenie zabudowy jednorodzinnej pomiędzy starym miastem a Krywałdem.'
})
poprzeczna.addEventListener('click', () => {
	heading.textContent = 'Poprzeczna'
	description.textContent = 'Przecina wszystkie ulicę z dzielnicy Farskie - stąd jej nazwa.'
})
powstancow.addEventListener('click', () => {
	heading.textContent = 'Powstańców'
	description.textContent = 'Jest hołdem dla powstańców którzy walczyli o niepodległość zarówno naszego kraju jak i regionu Górnego Śląska. Jest zlokalizowana na Krywałdzie tuż przy trasie wylotowej w stronę Rybnika.'
})
przedwiosnia.addEventListener('click', () => {
	heading.textContent = 'Przedwiośnia'
	description.textContent = 'Osiedle "Cztery Pory Roku" oraz nawiązanie do kolejnej z nich - tym razem nieformalnej aczkolwiek doskonale znanego przedwiośnia.'
})
przemyslowa.addEventListener('click', () => {
	heading.textContent = 'Przemysłowa'
	description.textContent = 'Nazwą doskonale nawiązuje do tego co możemy na niej znaleźć - najbardziej uprzemysłowiona ulica miasta przy której znajdziemy największą ilość zakładów pracy jakie zlokalizowane są w Knurowie.'
})
rozana.addEventListener('click', () => {
	heading.textContent = 'Różana'
	description.textContent = 'Jej lokalizacja nie budzi ździwienia dla lokalnych mieszkańców - różana musi znajdować się na osiedlu kwiatowym. Jest niedużą uliczką przy której znajdziemy kilka zabudowań jednorodzinnych.'
})
rybna.addEventListener('click', () => {
	heading.textContent = 'Rybna'
	description.textContent = 'Główna droga prowadząca do łowiska nad stawem przy autostradzie A1 w dzielnicy Farskie - dlatego jej nazwa nawiązuje do ryb.'
})
rybnicka.addEventListener('click', () => {
	heading.textContent = 'Rybnicka'
	description.textContent = 'Jedna z najdłuższych ulic miasta - a na pewno najdłuższa ulica dzielnicy Krywałd. Swoją nazwę zawdzięcza dzięki jej lokalizacji, jest główną trasą wylotową prowadzącą w strone Rybnika.'
})
sadowa.addEventListener('click', () => {
	heading.textContent = 'Sadowa'
	description.textContent = 'Nieduża ulica położona w Krywałdzie tuż przy trasie wylotowej w kierunku Rybnika - nazwa jest pokłosiem sadów które niegdyś znajdowały się w tym rejonie.'
})
saperow.addEventListener('click', () => {
	heading.textContent = 'Saperów'
	description.textContent = 'Nieduża ulica położona na osiedlu WP II w miejscu zabudowań szeregowych - ku czci polskich saperów służących w Polskiej Armii.'
})
sokola.addEventListener('click', () => {
	heading.textContent = 'Sokoła'
	description.textContent = 'Jedna z najkrótszych ulic na mapie Knurowa położona w bliskim sąsiedztwie placu "Gwarek" - ciężko stwierdzić motywację jej nazwy.'
})
spoldzielcza.addEventListener('click', () => {
	heading.textContent = 'Spółdzielcza'
	description.textContent = 'Krótka ulica w bliskim sąsiedztwie KWK Knurów przy której znajdziemy kilka bloków mieszkalnych - jej nazwa nawiązuje do spółdzielni mieszkaniowych obecnych w mieście.'
})
moniuszki.addEventListener('click', () => {
	heading.textContent = 'Stanisława Moniuszki'
	description.textContent = 'Ulica połóżona tuż przy autostradzie A1 której patron był niegdyś wybitnym polskim kompozytorem, dyrygentem, pedagogiem oraz organistą.'
})
poniatowskiego.addEventListener('click', () => {
	heading.textContent = 'Stanisława Poniatowskiego'
	description.textContent = 'Patron ulicy jest znany w naszym kraju jako ostatni władca Rzeczypospolitej Obojga Narodów - jego ulice znajdziemy jednak nie na osiedlu tysiąclecia, a w górniczej "Koloniji" w samym jej centrum tuż przy Szynku.'
})
staszica.addEventListener('click', () => {
	heading.textContent = 'Stanisława Staszica'
	description.textContent = 'Ulica znajdująca się w dzielnicy Szczygłowice, której patron zapisał się w historii jako polski działacz oświeceniowy, pionier spółdzielczości, pisarz polityczny i publicysta, filozof, tłumacz oraz ksiądz katolicki.'
})
wyspianskiego.addEventListener('click', () => {
	heading.textContent = 'Stanisława Wyspiańskiego'
	description.textContent = 'Stanisław Wyspiański był polskim literatem, poetą, dramaturgiem który jako pisarz związał swoją twórczość z dramatem symbolicznym tworząc w epoce Młodej Polski. Ulicę ku jego czci znajdziemy na samym końcu dzielnicy Farskie.'
})
starowiejska.addEventListener('click', () => {
	heading.textContent = 'Starowiejska'
	description.textContent = 'Jedna z ostatnich knurowskich ulic od strony Czuchowa - jej nazwa to bezpośrednie odwołanie do tych terenów które po dziś dzień są wiejskie i stosunkowo wiekowe.'
})
stawowa.addEventListener('click', () => {
	heading.textContent = 'Stawowa'
	description.textContent = 'Ulica z dużą historią - jedna z najstarszych ulic Krywałdu która prowadzi poprzez ruiny starych zabudowań wprost do lokalnych stawów.'
})
batorego.addEventListener('click', () => {
	heading.textContent = 'Stefana Batorego'
	description.textContent = 'Ku czci jednego z dawnych władców Królestwa Polskiego, ulicę znajdziemy na osiedlu tysiąclecia przy której zlokalizowana jest m.in. szkoła oraz przedszkole.'
})
zeromskiego.addEventListener('click', () => {
	heading.textContent = 'Stefana Żeromskiego'
	description.textContent = 'Stefan Żeromski jako jeden z najwybitniejszych polskich pisarzy w historii oraz czterokrotny kandydat do Nagrody Nobla w dziedzinie literatury również zasłużył na swoją ulicę w mieście. Znaleźć ją można w Szczygłowicach tuż za zabudowaniami mieszkalnymi w bliskim sąsiedztwie parku.'
})
stokrotki.addEventListener('click', () => {
	heading.textContent = 'Stokrotki'
	description.textContent = 'Ulica znajdująca się na osiedlu kwiatowym o licznych zabudowaniach jednorodzinnych obecnych w tym rejonie miasta.'
})
szarychSzeregow.addEventListener('click', () => {
	heading.textContent = 'Szarych Szeregów'
	description.textContent = 'Jedna z ulic osiedla Wojska Polskiego I, której nazwa oddaje hołd Organizacji Harcerzy ZHP znani pod tą konspiracyjną nazwą w czasach II wojny światowej.'
})
szkolna.addEventListener('click', () => {
	heading.textContent = 'Szkolna'
	description.textContent = 'Nazwa ulicy wskazuje na obecną przy niej szkołe podstawową - znajdziemy ją niedaleko głównego szlaku komunikacyjnego w dzielnicy Krywałd.'
})
szpitalna.addEventListener('click', () => {
	heading.textContent = 'Szpitalna'
	description.textContent = 'Mimo iż jej nazwa wskazuje na obecność szpitala ten nie znajduje się bezpośrednio przy niej, aczkolwiek w niedalekim sąsiedztwie na samym jej początku. Jest to jedna z głównych ulic w mieście biegnąca od starej części miasta aż po DW 78 biegnącą zarówno do Gliwic jak i do Rybnika.'
})
sztygarska.addEventListener('click', () => {
	heading.textContent = 'Sztygarska'
	description.textContent = 'Ulicę Sztygarską znajdziemy w górniczej dzielnicy Szczygłowice - sama jej nazwa nawiązuje do jej charakteru. Ponadto miejsce te jest znane lokalnej społeczności poprzez obecność miejskiej hali MOSiR oraz basenu.'
})
szybowa.addEventListener('click', () => {
	heading.textContent = 'Szybowa'
	description.textContent = 'Znajdziemy ją na uboczu przy trasie wylotowej w stronę Czuchowa - przy Szybowej znajdziemy jeden z szybów kopalni KWK oraz miejskie wysypisko śmieci wraz z instalacją komunalną oraz Punktem Selektywnej Zbiórki Odpadów Niebezpiecznych.'
})
sloneczna.addEventListener('click', () => {
	heading.textContent = 'Słoneczna'
	description.textContent = 'Miejsce o bardzo pozytywnej nazwie znajduje się na uboczu Szczygłowic tuż przy parku oraz cmentarzu komunalnym.'
})
kosciuszki.addEventListener('click', () => {
	heading.textContent = 'Tadeusza Kościuszki'
	description.textContent = 'Jedna z pierwszych ulic jakie spotkamy wjeżdzając do miasta od strony autostrady A1 - jej patron zapisał się w historii jako bohater narodowy Polski, Stanów Zjednoczonych Ameryki oraz Białorusi.'
})
targowa.addEventListener('click', () => {
	heading.textContent = 'Targowa'
	description.textContent = 'W Knurowie znajduje się duży plac targowy ze zwiększonym sobotnim handlem. Nie może być inaczej ponieważ ulicę Targową znajdziemy właśnie w tym miejscu.'
})
ustronieLesne.addEventListener('click', () => {
	heading.textContent = 'Ustronie Leśne'
	description.textContent = 'Jak sama nazwa wskazuje jest to ustronne miejsce położone w lesie pomiędzy Knurowem a Nieborowicami tuż przy cmentarzu komunalnym znajdującym się w centralnej części miasta.'
})
ulanow.addEventListener('click', () => {
	heading.textContent = 'Ułanów'
	description.textContent = 'Jest hołdem dla żołnierzy jazdy lekkiej uzbrojonej w lance, szable oraz broń palną którzy stanowili niegdyś o sile polskiej kawalerii. Ulica jest zlokalizowana na osiedlu WP II, znana głównie z obecności kompleksu boisk sportowych oraz nowoczesnej hali.'
})
wagowa.addEventListener('click', () => {
	heading.textContent = 'Wagowa'
	description.textContent = 'Nazwa ulicy wskazuje na jej lokalizację - znajdziemy przy niej wagę KWK Knurów oraz stadion miejski klubu sportowego Concordia.'
})
rakoniewskiego.addEventListener('click', () => {
	heading.textContent = 'Walentego Rakoniewskiego'
	description.textContent = 'Główna ulica nowszej części starego miasta nazwana ku czci polskiego patrioty, powstańca śląskiego, działacza i społecznika. To przy tej ulicy znajdziemy drugi największy cmentarz w mieście.'
})
wieczorka.addEventListener('click', () => {
	heading.textContent = 'Wieczorka'
	description.textContent = 'Ulica upamiętniająca pochodzącego z Rybnika boksera, będącego zasłużoną postacią śląskiego środowiska sportowego w okresie przedwojennym i pięciokrotnego medalisty Mistrzostw Polski. Znajdziemy ją w Szczygłowicach jako jedna z pierwszych ulic przy wjeździe od strony centrum miasta.'
})
wilsona.addEventListener('click', () => {
	heading.textContent = 'Wilsona'
	description.textContent = 'Jedna z głównych ulic biegnących na granicy dzielnicy "Redyna" ze starą częścią miasta. Jej patron zapisał się w historii Polski jako główna postać dzięki której nasz kraj odzyskał niepodległość po 123 latach okupacji.'
})
witosa.addEventListener('click', () => {
	heading.textContent = 'Wincentego Witosa'
	description.textContent = 'Wincenty Witos miał ogromny wpływ na odzyskanie niepodległości tuż po I wojnie światowej - jego ulica znajduje się na osiedlu WP II przy jednej z głównych arterii przy której zlokalizowane są różne lokale świadczące usługi oraz specjalistyczne sklepy.'
})
wiosenna.addEventListener('click', () => {
	heading.textContent = 'Wiosenna'
	description.textContent = 'Swoją nazwą nawiązuje do pięknej pory roku powszechnie lubianej na całym świecie - oczywiście znajdziemy ją na osiedlu "Cztery Pory Roku" gdzie zlokalizowany jest Miejski Żłobek.'
})
stwosza.addEventListener('click', () => {
	heading.textContent = 'Wita Stwosza'
	description.textContent = 'Krótka uliczka znajdująca się w dzielnicy "Redyna" ulica Wita Stwosza jest hołdem dla wybitnego rzeźbiarza, grafika, malarza i przedstawiciela późnego gotyku pochodzenia niemieckiego.'
})
korfantego.addEventListener('click', () => {
	heading.textContent = 'Wojciecha Korfantego'
	description.textContent = 'Wojciech Korfanty jest uważany za ojca dążeń ślązaków do wcielenia regionu do Polski - ulicę ku jego czci znajdziemy w Szczygłowicach na przeciwko Kościoła pw. Najświętszej Maryi Panny Królowej Polski.'
})
wolnosci.addEventListener('click', () => {
	heading.textContent = 'Wolności'
	description.textContent = 'Ulica Wolności wraz z rozbudową nowego osiedla wiosennego stała się ważnym połączeniem starego miasta z nowymi zabudowaniami i poniekąd obwodnicą centrum. Jej nazwa nawiązuje do bardzo ważnej wartości jaka przyświeca każdemu człowiekowi na Świecie.'
})
wrzosowa.addEventListener('click', () => {
	heading.textContent = 'Wrzosowa'
	description.textContent = 'Nazwą nawiązuje do wrzosów jakie znajdziemy w tym rejonie - ulica znajduje się w górniczej dzielnicy "Kolonija" w niedalekiej obecności autostrady A1.'
})
wzgorze.addEventListener('click', () => {
	heading.textContent = 'Wzgórze'
	description.textContent = 'Ulica znajdująca się na wzgórzu przy granicy starej częsci miasta a dzielnicą Krywałd - znajdziemy tam osiedle zabudowań jednorodzinnych.'
})
broniewskiego.addEventListener('click', () => {
	heading.textContent = 'Władysława Broniewskiego'
	description.textContent = 'Ku czci polskiego poety i tłumacza literackiego - był również żołnierzem Legionów Polskich uczestniczących w wojnie polsko-bolszewickiej. Jego ulica zlokalizowana jest w dzielnicy "Redyna" na przeciwsko OSP Knurów.'
})
jagielly.addEventListener('click', () => {
	heading.textContent = 'Władysława Jagiełły'
	description.textContent = 'Władysław Jagiełło przeszedł do historii jako założyciel dynastii Jagiellonów, był wielkim księciem litewskim i królem Polski. Jego ulica znajduje się na osiedlu tysiąclecia - znajdziemy tam kilkanaście bloków mieszkalnych.'
})
sikorskiego.addEventListener('click', () => {
	heading.textContent = 'Władysława Sikorskiego'
	description.textContent = 'Nieduża ulica przy której znajdują się jedynie kilka bloków mieszkalnych zlokalizowana na osiedlu Wojska Polskiego II.'
})
reymonta.addEventListener('click', () => {
	heading.textContent = 'Władysława Stanisława Reymonta'
	description.textContent = 'Ulica oddająca hołd polskiemu pisarzowi, prozaikowi i noweliście - jeden z głównych przedstawicieli realizmy z elementami naturalizmy w prozie Młodej Polski. Zlokalizowana jest w dzielnicy "Redyna" pomiędzy małymi mieszkalnymi familokami.'
})
lokietka.addEventListener('click', () => {
	heading.textContent = 'Władysława Łokietka'
	description.textContent = 'Ulica Łokietka znajduje się w samym centrum miasta na osiedlu tysiąclecia gdzie znajdziemy miejskie wieżowce. Jej patron był w latach 1320-1333 królem Polski który zjednoczył ziemie polskie po rozbiciu dzielnicowym.'
})
zielona.addEventListener('click', () => {
	heading.textContent = 'Zielona'
	description.textContent = 'Jej nazwa wskazuje na otaczającą ją zieleń ponieważ ulica znajduje się w bliskim sąsiedztwie lasu Krywałdzkiego.'
})
zimowa.addEventListener('click', () => {
	heading.textContent = 'Zimowa'
	description.textContent = 'Kolejna już ulica odnosząca się do pory roku znajdująca się na osiedlu domków szeregowych o tej tematyce oraz nazwie.'
})
kossakSzczuckiej.addEventListener('click', () => {
	heading.textContent = 'Zofii Kossak-Szczuckiej'
	description.textContent = 'Patronka ulicy wpisała się w historie Polski jako powieściopisarka oraz współzałożycielka dwóch tajnych organizacji w okupowanej Polsce. Ulica ku jej czci znajdziemy tuż przy autostradzie A1 w górniczej dzielnicy "Kolonija".'
})
zwirki.addEventListener('click', () => {
	heading.textContent = 'Żwirki i Wigury'
	description.textContent = 'Franciszek Żwirko był niegdyś pilotem Wojska Polskiego w stopniu porucznika który wraz z inżynierem Stanisławem Wigurą zdobył pierwsze miejsce w zawodach "Challenge" oraz puchar międzynarodowy dla Polski. Ulica której patronują zlokalizowana jest tuż przy kopalni KWK Knurów na górniczym osiedlu "Kolonija".'
})
zwyciestwa.addEventListener('click', () => {
	heading.textContent = 'Zwycięstwa'
	description.textContent = 'Główna ulica Krywałdu która jest jednocześnie drogą wylotową w stronę Czuchowa. Jej nazwa nawiązuje do zwycięskiej historii zarówno kraju jak i regiony nad wszelkimi wrogami którzy atakowali nas w przeszłości.'
})
lubinowa.addEventListener('click', () => {
	heading.textContent = 'Łubinowa'
	description.textContent = 'Znajduje się na granicy "Koloniji" a nowym osiedlem domków jednorodzinnych o tematyce kwiatowej. Nie jest wiadomo do czego ma nawiązywać jej nazwa.'
})

