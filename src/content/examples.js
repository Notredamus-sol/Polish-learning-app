/* Example sentences from Tatoeba (https://tatoeba.org), licensed CC BY 2.0 FR.
   EX_SENT: one sentence per line: polish<TAB>english<TAB>Tatoeba sentence id.
   EX_IDX: card word (lower case)|the lemma it was matched on|line numbers in EX_SENT.
   Picked for each word: up to 3 short sentences (3–10 words) with an English translation,
   spell-checked, mostly made of words the course teaches, preferring native speakers and
   different forms of the word, and never using a form that another word shares. */
const EX_SENT = `Piękne są chmury płynące po niebie.	The clouds floating in the sky are beautiful.	348570
Nasz nauczyciel zawsze przychodzi punktualnie na zajęcia.	Our teacher is always on time for class.	348634
On jest Anglikiem.	He's English.	348641
To jest tego samego koloru co moje.	That is the same color as mine.	348648
Z jakiegoś powodu mikrofon wcześniej nie działał.	For some reason the microphone didn't work earlier.	348656
Proszę pana, zostawił pan zapalniczkę na stole!	Sir, you have left your lighter on the table.	348660
Uważa się, ze to ważna sprawa.	It's considered to be an important matter.	348680
Co się zdarzyło na tym skrzyżowaniu?	What happened at that crossing?	348728
Czasami śni mi się dom.	I sometimes dream of home.	348743
Zaproszono mnie na wycieczkę zagraniczną, ale nie chcę jechać.	I've been invited on a trip abroad, but I don't want to go.	348750
Halo, jesteś jeszcze?	Hello, are you still there?	349022
Poczta przychodzi przed południem.	The mail arrives before noon.	349052
Nie mogłem sobie przypomnieć ich nazwisk.	Their names have escaped me.	349225
Czy twoja matka umie prowadzić samochód?	Can your mother drive a car?	349306
To trzecie co do wielkości miasto Serbii.	It's the third biggest city in Serbia.	349377
Jak na swoją cenę, ta tkanina jest dobrej jakości.	This cloth is good in quality for its price.	349485
Spokojnie, przyspieszanie spraw przyniesie efekt odwrotny.	Don't get so irritated. Rushing things will cost you more time in the end.	349498
On jest na tym statku.	He is on this ship.	349622
Sytuacja jest gorsza niż myśleliśmy.	The situation is worse than we thought.	350064
Można płacić czekami podróżnymi?	Can I pay with a travelers check?	350088
Chciała uciec od życia codziennego.	She wanted to get away from everyday life.	350158
Proszę, powiedz mi, co mam robić w tej sytuacji.	Please tell me what I should do in this situation.	350725
Twój rower podobny jest do mojego.	Your bicycle is similar to mine.	350742
Jutro jest święto.	It's a holiday tomorrow.	350816
Wiadro było pełne wody.	The bucket was full of water.	351436
Dostał dobrą ocenę z matematyki.	He got a good grade in mathematics.	351894
Mój brat jest dobry z matematyki.	My brother is good at mathematics.	351896
Połowa biura wzięła dzień wolnego.	Half the office took a day off.	351921
Własnymi siłami pojadę za granicę studiować.	I will study abroad on my own.	351979
Weźmy bilet bez oznaczonej daty.	Let's get an open ticket.	351986
To krzesło jest bardzo wygodne.	This chair is very comfortable.	352133
Ken czeka na przyjazd pociągu.	Ken is waiting for the arrival of the train.	352200
Jej córka uciekła z młodym pisarzem.	Her daughter eloped with a young author.	352377
Proszę nie zapomnieć paragonu.	Don't forget the receipt.	352428
Zgubił zegarek, który kupił dzień wcześniej.	He lost the watch he'd bought the day before.	352470
Ta książka odpowiada twoim potrzebom.	This book is suitable for your needs.	352484
Wygodnie jest mieszkać tak blisko dworca.	It's handy living so close to the station.	352494
Myj ręce przed jedzeniem.	Wash your hands before meals.	352532
Z powodu złej pogody mecz odwołano.	Due to the bad weather, the game was cancelled.	352628
Umyj bakłażany i poobcinaj im końcówki.	Wash the eggplants and cut off the ends.	352631
Pokrój łososia na małe kawałki.	Cut the salmon into small pieces.	352645
Można dodać oleju sezamowego i przypraw.	You can add sesame seed oil or some seasoning.	352648
To jabłko jest bardzo czerwone.	This apple is very red.	352653
Po zimie przychodzi wiosna.	After winter, spring comes.	352659
Przyjechali do Anglii tydzień temu.	They arrived in England a week ago.	352694
Czy to czyste złoto?	Is that pure gold?	352719
Ona wynajmuje pokój studentowi.	She rents a room to a student.	352721
Czy są przewodniki po japońsku?	Are there any guidebooks in Japanese?	352732
Zamienił swoją krowę na dwa konie.	He exchanged his cow for two horses.	352849
Dni są coraz krótsze.	The days are getting shorter.	352900
Niedźwiedź może wejść na drzewo.	A bear can climb a tree.	352910
Nigdy nie jest późno na naukę.	It is never too late to learn.	352978
Tutejszy klimat podobny jest do tego na Hokkaido.	The climate here is like that of Hokkaido.	353130
Uczył historii w szkole.	He taught history at school.	353134
To było jak grom z jasnego nieba.	It came like a bolt from the blue.	353886
Słyszałem, jak śpiewała w swoim pokoju.	I heard her singing in her room.	353911
Wszystkie psy są wierne.	All dogs are faithful.	353938
Szwecja ma swój własny język.	Sweden has its own language.	353961
Jaki jest twój ulubiony aktor?	Who's your favourite actor?	353978
Kto jest twoim ulubionym piosenkarzem?	Who's your favorite singer?	353980
Matematyka to mój ulubiony przedmiot.	Maths is my favourite subject.	353981
Curry z ryżem to moje ulubione danie.	Curry and rice is my favorite dish.	353988
Gra na fortepianie to jej ulubiona rozrywka.	Playing the piano is her favorite pastime.	353990
Powinniśmy iść za jego przykładem.	We should follow his example.	353994
Ona zawsze myli cukier z solą.	She always mistook the sugar for salt.	354037
Moje urodziny są w listopadzie.	My birthday is in November.	354067
Czy on jest właścicielem tego samochodu?	Is he the owner of that car?	354680
W butelce jest jeszcze trochę mleka.	There's still some milk left in the bottle.	355234
Na świecie są cztery oceany.	There are four oceans in the world.	355246
Holandia to mały kraj.	Holland is a small country.	355256
Mieszkańcy wioski obsługują się sami prowadząc autobus na zmianę.	The villagers serve their own needs by taking turns driving the bus.	355303
Młodemu inżynierowi brakowało doświadczenia.	The young engineer lacked experience.	355305
Kończył się nam czas, więc musieliśmy skrócić wywiad.	We ran out of time and had to cut short the interview.	355408
Wielu młodych mieszkańców wsi pragnie mieszkać w mieście.	Many young people in the country long to live in the city.	355412
Czy pociągi jeżdżą na oleju napędowym?	Do the trains run on diesel oil?	355413
Ryb w morzu jest mnóstwo.	There are as good fish in the sea as ever came out of it.	355435
Grałem z mistrzem.	I played against the champion.	355441
Firma zrezygnowała z tego projektu.	The company abandoned that project.	355542
Zakochani szli pod rękę.	The lovers were walking arm in arm.	355554
To najtańszy sklep w mieście.	This is the cheapest store in town.	355679
Poskładaj chusteczki i połóż po jednej obok talerzy.	Fold the napkins and put one by each plate.	355691
Kiedy samolot zaczął drżeć, pasażerowie zaczęli robić się nerwowi.	Passengers became nervous when the plane began to vibrate.	355695
Bez mapy zgubilibyśmy się.	Without the map, he would have gotten lost.	355725
Ten kwiat jest piękniejszy niż tamten.	This flower is more beautiful than that one.	355749
Proszę ustawić się w kolejności przylotu.	Please line up in order of arrival.	355751
Ona zawsze chodzi swoimi ścieżkami.	She always gets her own way.	355763
Jedź za tym samochodem.	Follow that car.	355765
Prasowała mu koszule.	She ironed his shirts.	355780
Nie wywołuj wilka z lasu.	Let sleeping dogs lie.	355822
Powietrze dziś rano chłodne. Idzie zima.	The air feels cold this morning; winter is approaching.	355823
To zupełnie nowy produkt.	It is a brand new product.	355906
Najpierw powiedziałem o tym matce.	I told it to my mother first and foremost.	355973
Te koszulki idą jak świeże bułeczki.	These shirts are selling like hotcakes.	355976
Krowy jedzą trawę na łące.	Cows are eating grass in the meadow.	356354
On jest złodziejem.	He is a thief.	356400
Mam książkę o wędkarstwie.	I have a book about fishing.	356448
Odwołaj to, że jestem skąpy!	Take back what you said about me being stingy.	356473
Jest piękna, a co więcej, uczciwa.	She is beautiful, and even better, honest.	356476
Wskutek deszczu nie mogliśmy pojechać na piknik.	The rain made it impossible for us to go on the picnic.	356501
Czytanie to zwyczaj, który raz nabyty, nie zanika nigdy.	Reading is the kind of habit that once acquired is never lost.	356561
Dwieście dolarów to dla mnie dużo.	Two hundred dollars is a lot to me.	356953
W mojej zupie jest włos.	There's a hair in my soup.	356960
Radość z powodu nowego produktu szybko rozeszła się po wydziale.	Excitement over the new product spread quickly throughout the division.	356966
On jest pełen nowych pomysłów.	He is full of new ideas.	357013
To krzesło jest dla mnie za niskie.	This chair is too low for me.	357034
Dlatego właśnie mogę tworzyć muzykę.	That's exactly why I can create music.	357045
Ten produkt był reklamowany w telewizji.	This product was advertised on TV.	357062
Miała koszyk pełen jabłek.	She had a basketful of apples.	357071
Życz mi szczęścia.	Wish me luck.	357075
Ona bierze prysznic co rano.	She showers every morning.	357206
Kim jest ta kobieta w brązowym płaszczu?	Who's the woman in the brown coat?	357222
Pod biurkiem nie ma książek.	There aren't any books under the desk.	357259
Ten dziwny obyczaj jest charakterystyczny dla tego regionu.	The odd custom is peculiar to the region.	357294
Kto organizował to spotkanie?	Who arranged this meeting?	357359
Ten lekarz jest miły dla pacjentów.	The doctor is gentle with his patients.	357570
Mój ojciec jest teraz w szpitalu.	My father is in the hospital now.	357574
On pływa tak dobrze jak młotek.	He can no more swim than a hammer can.	357631
Są zadowoleni z pracy.	They are pleased with your work.	357646
Ustalili czas i miejsce wesela.	They set the time and place of the wedding.	357700
Psy mają czuły węch.	Dogs have a keen sense of smell.	357708
Powolni, ale systematyczni wygrają w końcu.	Slow but steady wins the race.	357713
To najgorszy hotel w mieście.	This is the worst hotel in town.	357714
Nie gaś światła.	Don't switch the light off.	357832
Jest młody, ale nie traci czasu.	Though he is young, he never wastes time.	357843
Moja babcia odeszła spokojnie tego wieczora.	My grandmother went peacefully in the night.	357854
Ona uważa go za niewinnego.	She presumes him to be innocent.	357863
Mój przyjaciel ma siedemnaście lat.	My friend is seventeen.	357886
Jak tylko wyszedł z domu, zaczęło lać.	As soon as he went out of the house, it began to rain.	357909
Ta linijka jest wyskalowana w milimetrach.	This ruler has the scale in millimeters.	358044
Właśnie kupiliśmy dwa meble.	We have just bought two pieces of furniture.	358057
To tamto okienko.	That counter there.	358701
Pływanie to dla mnie rozrywka.	Swimming is a pastime for me.	358715
Ren stanowi granicę między Francją a Niemcami.	The Rhine is the boundary between France and Germany.	358726
Mój ojciec nigdy nie bierze długiego urlopu.	My father never takes a long rest.	358749
Wszyscy wiedzą, że stracił nogę na wojnie.	Everyone knows he lost his leg in the war.	358762
Nie oceniaj ludzi po wyglądzie.	Don't judge a man from the way he looks.	358791
To miasto leżało pod ziemią przez stulecia.	The town lay buried for centuries.	358800
W ogrodzie rosła wiśnia.	There was a cherry tree growing in the garden.	358852
Nie łap dwóch srok za ogon.	Don't try to do two things at a time.	358887
Co roku kupuję nowe zeszyty do szkoły.	Every year, I buy new notebooks for school.	358894
Ostatnio wiele się buduje.	A lot of construction is going on these days.	358895
Wszystkie jego późne obrazy były uważane za arcydzieła.	All his later paintings were considered masterpieces.	358934
Nie bierz rzeczy zbyt poważnie.	Don't take things too seriously.	358943
Mieszkam w tej dzielnicy.	I live in this part of town.	359196
Serce jej się ściskało ze współczucia nad tym biednym dzieckiem.	Her heart ached for the poor child.	359217
Do budynku wszedł obcy.	A stranger came into the building.	359220
Moja siostra nie uczy się teraz.	My sister isn't studying now.	359259
Ten most jest półtora raza dłuższy od tamtego.	This bridge is one and half times as long as that.	359260
Podstawowym celem nauki jest poszukiwanie prawdy, nowej prawdy.	The primary aim of science is to find truth, new truth.	359268
Prawie nikt mu nie wierzył.	Almost no one believed him.	359317
Mija pięć lat, odkąd przyjechałem do Tokio.	It's been five years since I came to Tokyo.	359331
Zrywała kwiaty w ogrodzie.	She picked flowers in the garden.	359335
Wiele programów telewizyjnych ma zły wpływ na dzieci.	Many TV programs have a bad influence on children.	359342
On umie przebiec sto metrów w dwanaście sekund.	He can run 100 meters within twelve seconds.	359359
Mamy trochę czasu przed odjazdem pociągu.	We’ve got a little time before the train leaves.	359766
Nie zapomnij wysłać tego listu.	Don't forget to post this letter.	359854
Nie rozumiem jego psychologii.	I can't understand the psychology of such a man.	359866
W wazonie są piękne róże.	There are some beautiful roses in the vase.	359884
Ten film nie jest tak ciekawy jak oryginał.	The movie is not so interesting as the original.	359925
Chciałbym porozmawiać z jednym z twoich gości.	I'd like to talk to one of your guests.	360001
Policja będzie prowadzić śledztwo w sprawie tej zbrodni.	The police will be carrying out an investigation of this crime.	360144
W parku bawi się kilkoro dzieci.	There are some children playing in the park.	360160
Ona wraca w następną niedzielę, czyli dziesiątego.	She will return home next Sunday, that is, the tenth.	360177
Ona często przyjeżdża do tego kraju.	She's a frequent visitor to this country.	360187
Nawet mądre dzieci tego nie zrozumieją.	Even an intelligent child cannot understand.	360188
Łapcie tego mężczyznę!	Someone! Catch that man!	360189
Najlepszą obroną jest atak.	Attack is the best form of defense.	360488
W ten sposób ludzie pozbywają się niepotrzebnych rzeczy.	This is how people get rid of things they no longer need.	360490
Ojciec mówił nawet o moich kolegach.	My father referred to my friends.	360512
Nie mieszaj się do nieswoich spraw!	Mind your own business!	360976
Tylko kilka osób przyszło punktualnie na spotkanie.	Only a few people showed up on time for the meeting.	361049
Nie lubię dużych lamp.	I do not like a big desk lamp.	361071
Od trzech lat odkładam ćwierć pensji.	I have put aside one fourth of my salary for the last three years.	361161
Chcę studiować za granicą.	I want to study abroad.	361278
To biurko jest inne niż zamawiałem.	This desk is different from the one I ordered.	361324
Czytałem z nudów czasopisma.	I read a magazine to kill time.	361640
Sądził, że jest szczęśliwa.	He took it for granted that she was happy.	361649
Mój bagaż nie przyjechał. Co się stało?	My luggage didn't arrive. What happened?	361704
On bardzo szanuje tego profesora.	He esteems the professor highly.	361711
Ktoś ukradł mi walizkę.	Somebody has stolen my suitcase.	361838
Chyba nie naprawi mi tego urządzenia.	I can't seem to get him to fix this machine.	361896
Oparzyłem się w rękę żelazkiem.	I burned my hand with an iron.	361914
Często myślę o mojej zmarłej matce.	I frequently think about my mother who passed away.	362005
To był smutny, jesienny dzień.	It was a lovely autumn evening.	362059
Mąkę sprzedaje się na funty.	Flour is sold by the pound.	362429
Mój ojciec świetnie pływał w młodości.	My father could swim well when he was young.	362436
To była dla mnie nerwowa chwila.	It was a nervous moment for me.	362462
Palenie jest zabronione w tym miejscu.	Smoking is forbidden in this area.	362518
Nie strasz mnie. Nic nie powiem.	Don't threaten me. I won't say anything.	362522
Grupa składała się z nauczycieli i studentów.	The group was made up of teachers and students.	362542
Brzoskwinie są słodkie.	Peaches are sweet.	362555
Ten staw jest bardzo głęboki.	The pond is very deep.	362850
Coś nie tak z tą pralką.	Something is wrong with this washing machine.	362873
Coś ty zrobił z moim długopisem?	What've you done with my pen?	362898
To nie podlega zwykłym rabatom.	This offer is not subject to the usual discounts.	362932
On lubi plotkować.	He is fond of gossip.	362957
To, kim dziś jestem, zawdzięczam wykształceniu.	I owe what I am today to education.	363008
Ta piękna dziewczyna to moja siostra.	That pretty girl is my sister.	363025
Wyjedzie z Japonii w kwietniu.	He'll leave Japan in April.	363105
Nie obiecuj tego, czego nie będziesz mógł spełnić.	Don't promise what you can't give.	363109
Może wziąć udział w naszej naradzie bez względu na wiek.	You can take part in the meeting regardless of your age.	363129
Wystarczy spokojne miejsce, gdzie można usiąść i odpocząć.	A quiet place to sit and rest would be nice.	363136
Jeśli zostanę wybrany, zrobię wszystko dla moich wyborców.	Once elected, I will do my best for all of you who supported me.	363138
Miał ten przywilej, że chodził do prywatnej szkoły.	He had the privilege of a private education.	363143
Na trawniku siedzieli ludzie tu i tam.	There were some people sitting about on the grass.	363154
Może pan potwierdzić otrzymanie tej przesyłki?	Can you please confirm the receipt of this note?	363169
Starzy ludzie potrzebują celu w życiu.	Old people need something to live for.	363202
Twoja przyjaźń jest dla mnie bardzo ważna.	Your friendship is most precious to me.	363215
Te dwie cechy wykluczają się wzajemnie.	The two qualities are mutually exclusive.	363233
O, nie! Kończy nam się benzyna!	Oh, no! We're running out of gas.	363579
W literaturze amerykańskiej czuje się jak w domu.	He is at home in American literature.	363640
Wszyscy krzyczeli z radości, kiedy usłyszeli wiadomość.	Everyone shouted for joy when they heard the news.	363641
Statek rozładowano w porcie.	The ship was unloaded at the port.	363682
Spędziłem cały dzień na plaży.	I spent all day on the beach.	363688
To tylko dolewa oliwy do ognia.	It only adds fuel to the fire.	363733
Ona śpi na dwóch poduszkach.	She sleeps with two pillows.	363772
Całe życie mieszkam w tej dzielnicy, z tymi samymi sąsiadami.	I have lived on this block, and next to the same neighbor, all my life.	363776
Zobaczyliśmy w oddali dym.	We saw smoke in the distance.	363820
Co się stanie z japońską gospodarką?	What will happen to the Japanese economy?	364036
Wychodzenie do pracy przed śniadaniem? To dla niego typowe.	It is characteristic of him to go to work before breakfast.	364063
Obejrzał się ze złością.	He looked black with anger.	364090
W twoim wieku powinieneś być mądrzejszy.	At your age, you ought to know better.	364108
Lepiej zróbmy wcześniej rezerwację.	We'd better make a booking beforehand.	364131
Został podkupiony przez konkurencję.	He was poached by a rival company.	364145
Ten kandydat jest za swobodą handlu.	That candidate stands for free trade.	364198
Czynsz proszę płacić z góry.	Pay your rent in advance.	364230
Ta książka zawiera mnóstwo zdjęć.	This book contains a lot of photos.	364280
Małe dziewczynki lubią bawić się lalkami.	Little girls like playing with dolls.	364343
Źle się śpi w letnie noce.	We cannot sleep well on summer nights.	364407
Nic nowego pod słońcem.	There's nothing new under the sun.	364517
Jej życzenie zostało wreszcie spełnione.	Her wish was realized at last.	364532
Burmistrz ponoć wziął w łapę.	It's said that the mayor is on the take.	364630
Matka ustawiła duży wazon na półce.	Mother placed a large vase on the shelf.	364665
Dochody z tego źródła są nieopodatkowane.	The income from this source is tax-free.	364686
Pizza to moje ulubione danie.	Pizza is my favourite food.	364703
Proszę, przynieś krzesło z sąsiedniego pokoju.	Go and get a chair from the next room, please.	364707
Trzymaj mocno tę drabinę.	Please hold this ladder steady.	364708
Proszę wypełnić deklarację celną.	Please fill out the Customs Declaration Form.	364709
Czy może pan polecić jakiś dobry aparat?	Can you recommend a good camera?	364711
W innej płaszczyźnie natomiast rysowała się zapowiedź nowej ery.	On another plan there was the prediction of a new age.	364712
Informuj mnie o rozwoju sytuacji.	Please keep me informed of the development of the case.	364715
Bierzmy pod uwagę jego wiek.	We must allow for his age.	364718
Błędem jest ukrywanie różnych rzeczy przed żoną.	It is wrong for a man to conceal things from his wife.	364797
Z powodu brzydkiej pogody nie pojechałem.	Owing to bad weather, I didn't go.	364806
Tą ulicą dojedzie pan na lotnisko.	This road will lead you to the airport.	364823
Prom zawinie do Kobe we wtorek.	The liner will call at Kobe on Tuesday.	364884
Ostrzeżenie przed tsunami zostało odwołane.	The tidal wave warning has been canceled.	364889
Jest znany ze swej mądrości.	He is remarkable for his wisdom.	364894
Większość dużych banków wprowadza ten system.	The majority of big banks are introducing this system.	365084
Przestałem jeść desery.	I gave up eating dessert.	365102
Poproszę trzy kostki cukru do mleka.	I want three sugars in my milk.	365139
Jack trzyma w domu kota i papugę.	Jack keeps a cat and a parrot at home.	365145
Na imprezie dużo tańczyliśmy i śpiewaliśmy.	We did a lot of singing and dancing at the party.	365154
Pociąg się spóźnił z powodu śnieżycy.	The train was delayed on account of snow.	365158
Sympatyczny starszy pan wstał i wyciągnął do mnie rękę.	The gentle-looking old man got up and gave his hand to me.	365206
Czy ten autobus jedzie na plażę?	Does this bus go to the beach?	365222
Nasz pociąg się spóźnił o godzinę z powodu śnieżycy.	Our train was an hour late because of the heavy snow.	365285
Prowadzenie dziennika to dobry zwyczaj.	Keeping a diary is a good habit.	365290
Zjednoczmy się w imię sprawiedliwości.	Let us be united in the cause of justice.	365443
Życzenia zdrowia dla ojca.	My wishes for your father's rapid recovery.	365446
Jestem zadłużony po uszy, moja premia to kropla w morzu.	My bonus doesn't come close to covering all the loan payments I have to make.	365537
Mam prawo zadzwonić do mojego adwokata.	I have the right to call my lawyer.	365724
Oboje przekształcili chemię w nowoczesną naukę.	The couple transformed chemistry into a modern science.	365782
Człowiek strzela, Pan Bóg kule nosi.	Man proposes, God disposes.	365785
Przedwczoraj przyjechaliśmy do Osaki.	The day before yesterday, we arrived in Osaka.	366068
Nagrasz mi ten program na wideo?	Will you record this program on video for me?	366147
Włożyłem to do szuflady.	I put it in the drawer.	366163
Zaczynajmy natychmiast, jest już późno.	Let's start at once; it's already late.	366173
Jedni wygrywają, inni przegrywają.	Some will gain, others will lose.	366178
Fizyka nie interesuje mnie zupełnie.	I'm not the least bit interested in physics.	366181
Jedni lubią czerwone wino, inni białe.	Some like red wine, others white wine.	366204
Zapomniałem nakleić znaczek na kopertę.	I forgot to attach a stamp to the envelope.	366224
Są coraz większe podejrzenia, że to wewnętrzna robota.	Suspicion that this amounts to insider trading has strengthened.	366270
Ostrzegano mnie, bym tam nie chodził.	I have been warned against going there.	366275
On spogląda na coś, co kiedyś było biurkiem ojca.	He is looking at what used to be my father's desk.	366278
Jedną trzecią jabłka zawsze dostaje nasza najmłodsza córka.	One-third of an apple is always given to our youngest daughter.	366297
Jak to zobaczyłem, zmroziło mi krew w żyłach.	My blood curdled at that sight.	366298
Jaki jest ten papier w dotyku?	How does the paper feel?	366522
Mamy cztery pory roku: wiosnę, lato, jesień i zimę.	There are four seasons in a year: spring, summer, fall and winter.	366537
To mój pierwszy lot samolotem.	That was the first time I got on a plane.	366550
Zarabianie pieniędzy to nie jest jedyny cel życia.	Making money is not the only goal in life.	366577
Jeden z dwóch musi odejść.	One of the two has to go.	366581
W pociągu był taki tłok, że całą drogę musiałem stać.	The train was so crowded that I had to keep standing all the way.	366635
Zaognił się spór między białymi a czarnymi w mieście.	The conflict between blacks and whites in the city became worse.	366640
Widziałem, jak wchodzi na górę.	I saw him coming upstairs.	366643
Ten towar nie bywa wszędzie.	You can't find this article everywhere.	366683
Jak poszedł sprawdzian z matematyki?	How was the math test?	366685
Ona nie zawsze jest szczęśliwa.	She is not always happy.	366686
Fabuła tej powieści jest za trudna do zrozumienia.	I don't understand this novel's plot.	366692
Zbieram pieniądze na starość.	I'm saving money for my old age.	366697
Proszę powiedzieć szefowi kuchni, że było pyszne.	Please tell the chef it was delicious.	366718
Ta firma wydała dużo pieniędzy na reklamę.	The company has spent a lot of money on advertising.	366777
Powinna wcześnie kłaść się i wcześnie wstawać.	She must keep early hours.	366796
Przepraszam, którędy do zoo?	Could you tell me the way to the zoo?	366945
Pomijając kilka usterek, ta książka jest interesująca.	This book is interesting except for a few mistakes.	366949
Chodzenie do szkoły w czasie szczytu jest męczące i nieprzyjemne.	Going to school during the rush hour is tiring and unpleasant.	366951
W podobnej sytuacji orzeczono winę przedsiębiorstwa.	In a similar situation, the company was held liable.	366959
On zawsze narzeka na niską pensję.	He is always complaining about his low salary.	366973
Góra jest teraz ukryta za chmurami.	Now the mountain is hidden by the clouds.	366976
I żyli długo i szczęśliwie.	They lived happily ever after.	366977
Sekretarka zawsze jest w zasięgu głosu.	The secretary is within call all the time.	367044
Umył brudne ręce przed posiłkiem.	He washed her dirty hands before the meal.	367058
Jadłeś kiedyś tak pyszną zupę?	Have you ever tasted such a good soup?	367075
Często jednak wracaliśmy z pustymi rękami.	But more often than not, we came back empty-handed.	367176
Został wybrany do senatu w ostatnich wyborach.	He was elected to the Senate in the last election.	367301
To, co powiedział, to świetny pomysł.	What he said is a good idea.	367311
Czy muszę mu wyjaśniać powody?	Is it necessary for me to explain the reason to him?	367313
Co jest większe: Słońce czy Ziemia?	Which is larger, the sun or the earth?	367322
Gdyby wyprasować Szwajcarię, byłaby większa niż Niemcy.	If you ironed Switzerland, it would be bigger than Germany.	367591
Sok pomarańczowy czy szampan?	Orange juice or champagne?	367595
Decyzja należy do czytelnika.	The proof is left to the reader.	367597
Chciałbym spotkać się z twoją matką.	I want to see your mother.	367630
Niestety nie miałem okazji zobaczyć zamku.	Unfortunately, I didn't get the chance to see the castle.	367661
Jeśli masz wolną chwilę, wpadnij do mnie.	If you're free, come around to see me.	367692
Pszenica jest już gotowa do żniw.	The wheat is ready for harvest.	367705
Co sądzisz o sztuce współczesnej?	What do you think of modern art?	367710
Dzisiejsza czysta matematyka to jutrzejsza matematyka stosowana.	Today's pure mathematics is tomorrow's applied mathematics.	367729
Wzrok jest jednym z pięciu zmysłów.	Sight is one of the five senses.	367736
To najpiękniejszy prezent w moim życiu!	This is the nicest present I've ever had.	367833
Stracił majątek na giełdzie.	He lost a fortune in the stock market.	367855
Ona jest tego samego wzrostu co ty.	She's about the same height as you.	368036
Tę zasadę można stosować w każdym przypadku.	This rule can be applied to any case.	368039
Nigdy nie miał już zobaczyć ojczyzny.	He was never to see his native land again.	368171
Podobno jego nowa powieść oparta jest na własnych doświadczeniach.	It is said that his new novel is based on his own experiences.	368173
Przepraszam, ale wszystko dzisiaj jest zarezerwowane.	I'm sorry, today is fully booked.	368420
Poproszę kawę z cukrem i śmietanką.	Coffee, please, with cream and sugar.	368454
Czy jest zamężna?	Is she married?	368457
Spróbuj tę koszulę, jest z czystej bawełny.	Try on that shirt. It's made of fine cotton.	368476
Zostawiłem okno otwarte na całą noc.	I left the window open all through the night.	368484
Konieczne jest, by każde dziecko miało te same możliwości wykształcenia.	It is essential that every child have the same educational opportunities.	368498
Ona jest otwarta na ludzi o innych poglądach.	She's open to people who see things differently.	368872
Nikt nie może odebrać obywatelowi jego praw.	No citizen should be deprived of his rights.	368941
On uczy się do późna w nocy.	He sits up studying till late at night.	369024
Jak zwykle, położył klucze na biurku.	He put the key on the desk as usual.	369058
Ten puchar jest zrobiony ze złota.	The cup is made of gold.	369092
Mówi tak, jakby studiował za granicą.	He speaks as if he had studied abroad.	369710
Następnego roku wybuchła I wojna światowa.	The next year, World War I broke out.	372734
Maciek w grudniu stracił życie.	Maciek lost his life in December.	383653
Niektórzy ludzie chcą zmienić konstytucję.	Some people want to amend the constitution.	388549
Książę został zgubiony w lesie.	The prince was lost in the woods.	392973
Ile kosztuje ten rower górski?	How much is that mountain bike?	393092
Dzieci naśladują przyjaciół niż rodziców.	Children imitate their friends rather than their parents.	393284
Ciało szybko dostosowuje się do zmian temperatury.	The body quickly adjusts itself to changes in temperature.	393300
Stad do mojego wujka są dwie godziny drogi samochodem.	It's a two-hour drive from here to my uncle's house.	393322
On jest moim bliskim przyjacielem.	He is my close friend.	393352
Pociąg przyjedzie z dwudziestominutowym opóźnieniem.	The train will be twenty minutes late.	395312
Kable elektryczne są zrobione z miedzi.	Electricity cables are made of copper.	395319
Bert nie chodzi do liceum, prawda?	Bert doesn't go to high school, does he?	401171
Hiszpanie mają po dwa nazwiska.	Spaniards have two surnames.	403031
Nie zrozumiałem większej części tego, co mówił.	I didn't get most of what he said.	403096
Kruk jest czarny jak węgiel.	The raven is as black as coal.	403100
Jego opinie biorą się z doświadczenia.	His belief is rooted in experience.	403162
Przepraszam, gdzie jest kawiarnia?	Excuse me, where is the café?	403198
Nie trzeba ich odprowadzać.	There's no need to see them off.	403222
Zapałki kosztują dziesięć groszy.	The matches cost ten pennies.	403236
A może filiżankę gorącej kawy?	How about a cup of hot coffee?	403747
Dumny jest z tego, że jest obywatelem brytyjskim.	He is proud of being a British subject.	406308
Skręcił na rogu z pełną prędkością.	He went round the corner at top speed.	410333
Owce pasły się na łące.	Sheep were grazing in the meadow.	410351
Rosjanie kopiują francuskie zwyczaje, ale zawsze w pięćdziesiąt lat później.	The Russians copy the French ways, but always fifty years later.	410692
Kiedy człowiek jest zmęczony, nie ma nic lepszego niż wanna.	When you feel tired, there is nothing like having a bath.	410736
Nie pozwól mu tego dotykać.	Don't let him touch it.	411621
Towary dla panów są w sprzedaży na trzecim piętrze.	Men's things are sold on the third floor.	413007
Ja mam pamięć jak złota rybka.	I have a memory like a goldfish.	415252
Dach mojego domu jest czerwony.	The roof of my house is red.	415292
On mieszkał tutaj przez dwa lata?	Has he lived here for two years?	416285
Dla Boga nie ma niczego niemożliwego.	There is nothing God cannot do.	416375
Ona jest na granicy załamania nerwowego.	She is on the verge of a nervous breakdown.	416468
Będą pewnie badać tę bezludną wyspę.	They'll likely be inspecting the deserted island.	416498
Spędziliśmy spokojny dzień na wsi.	We spent a peaceful day in the countryside.	418351
Wszyscy moi krewni mieszkają w tym mieście.	All my relatives live in this city.	440279
On lubi rozwiązywać trudne problemy.	He likes solving difficult problems.	440609
Został aresztowany, ponieważ ukradł pieniądze.	He was arrested because he stole money.	440663
Nie mógł dłużej trzymać na wodzy nerwów.	He couldn't hold his temper any longer.	440701
Wczoraj był piątek, a pojutrze będzie poniedziałek.	Yesterday was Friday and the day after tomorrow is Monday.	442723
Zgubiła czapkę, ale wkrótce ją znalazła.	She lost her hat, but soon found it.	442883
Ten film zebrał mieszane recenzje.	The movie received mixed reviews.	442910
Ich populacja rośnie, dlatego potrzebują coraz więcej żywności.	They have a growing population; therefore they need more and more food.	442946
Czy język międzynarodowy jest potrzebny?	Do we need a universal language?	445440
Łatwo wpadam w gniew.	I fly into a rage easily.	448789
Właśnie ugryzł mnie komar.	A mosquito just bit me.	451081
Wybraliśmy go przewodniczącym zebrania.	We have elected him chairman of the meeting.	451098
Jeśli szukasz pracy, przejrzyj dział z ogłoszeniami.	Read the advertisement section if you're looking for a job.	456952
Moja siostra jest wyższa ode mnie o dziesięć centymetrów.	My sister is 10 centimetres taller than I am.	457004
Ona kupuje ciasto w cukierni.	She is buying a cake in the bakery.	457332
Porcja druga zawiera mięso.	The second combination plate contains meat.	457338
Mój starszy brat trenuje judo. Jest bardzo dobry.	My older brother is practicing judo. He is very good.	457383
Mój sweter jest fioletowy.	My sweater is purple.	457390
Autostrada była zamknięta z powodu poważnego wypadku.	The motorway was closed because of a major accident.	457421
On bardzo rzadko chodzi do kina.	He rarely goes to the movies.	458063
Pływy zależą od wpływu Słońca i Księżyca.	The tides are influenced by the moon and the sun.	458066
Artyści są we Francji bardzo szanowani.	Artists are highly respected in France.	459924
Nigdy nie lubiłem biologii.	I never liked biology.	461064
Czy kupiłeś arbuza?	Have you bought a watermelon?	466941
Co więcej, poszła i zamówiła dwie pełne porcje klusek.	What's more she went and ordered a top up of noodles twice.	479902
Brakuje programistów do pracy.	There is a labor shortage of computer programmers.	480007
Moja mama pierze ubrania codziennie.	My mother washes clothes every day.	484542
Niedawno wrócił z Francji.	He has recently returned from France.	492696
Czyli znasz odpowiedź?	You know the answer?	493178
Dobrze, wezmę je. Kiedy zaczyna się spektakl?	Good, I will take them. When does the show start?	497375
Nigdy jeszcze nie widziałem tak spokojnego pejzażu.	Never have I seen such a peaceful scene.	498365
Ku mojemu zdziwieniu, drzwi były otwarte.	To my surprise, the door was unlocked.	502259
Przepraszamy. Wybrany numer jest niedostępny.	We're sorry. The number you have dialed is currently unavailable.	502268
Mama jest starsza od taty.	Mom is older than Dad.	502334
Polak, Węgier - dwa bratanki, i do szabli, i do szklanki.	Pole and Hungarian - two good friends, joint fight and drinking are their ends.	506134
Wolę wiosnę niż jesień.	I prefer spring to autumn.	510058
Od rana mam lekką gorączkę.	I've had a slight fever since this morning.	510069
Ptaki zawsze wracają do gniazda.	Birds always return to their nests.	510135
Mam coraz mniej czasu na czytanie.	I have less and less time for reading.	513479
Ona jest nie tylko piękna, ale i uprzejma dla wszystkich.	She is not only beautiful but also kind to everybody.	516355
Mądry Polak po szkodzie.	Hindsight is 20/20.	516421
Prawdziwych przyjaciół poznaje się w biedzie.	A friend in need is a friend indeed.	516422
Głód najlepszym kucharzem.	Hunger is the best sauce.	516428
Nie ma miłości bez zazdrości.	No love without envy.	520047
Proletariusze wszystkich krajów, łączcie się!	Workers of all lands, unite!	520050
Moja babcia wieczorem chodzi na spacer.	My grandmother goes for a walk in the evening.	521185
Nie chcę przegrać tego meczu.	I don't want to lose this match.	521406
W moim pokoju jest radio.	There's a radio in my room.	521511
To bułka z masłem.	It's a piece of cake.	522786
Chińczycy są pracowitym narodem.	The Chinese are a hard-working people.	522931
Pies goni za kotem, a kot za myszą.	A dog runs after a cat, and the cat after a mouse.	524045
To miejsce stało się piekłem na ziemi.	The place became a hell on earth.	524097
Moja żona upiekła mi pyszną szarlotkę.	My wife made me a delicious apple cake.	524392
Wielbłądy są często używane do podróżowania przez pustynię.	Camels are often used to travel in the desert.	524546
Jest tak uczciwy, że wszyscy mu ufają.	He is so honest that everybody trusts him.	524554
Czy w hotelu jest sklep z pamiątkami?	Is there a souvenir shop in the hotel?	524573
Przed chwilą byłem w domu mojego wujka.	I've just been to my uncle's house.	524611
Biuro burmistrza znajduje się w ratuszu.	The mayor's office is in the city hall.	524652
Brakuje drewna w ognisku, płomienie już tracą na sile.	The fireplace, lacking firewood, flames already starting to lose their vigour.	524682
On goli się cztery razy w tygodniu.	He shaves four times a week.	524694
Wyniki badań były całkiem zadowalające.	The results of the research were quite satisfactory.	524983
Jest z pochodzenia Niemcem.	He is a German by origin.	525057
Dzisiaj widziałem szpaka.	Today, I saw a starling.	525230
Na konferencję przyjechało stu pięćdziesięciu dyplomatów.	A hundred and fifty diplomats came to that conference.	525334
Sprzątałem pokój całe przedpołudnie.	I've spent the entire morning cleaning my room.	525343
Daj mi klucz do tego zamka!	Give me the key to this lock!	525430
Nie wchodź do pokoju bez pozwolenia.	Don't enter the room without leave.	525479
Usilnie szukała swojej obrączki.	She looked for her ring earnestly.	525530
Mięśnie bolały go od długiego siedzenia w jednej pozycji.	His muscles ached from sitting too long in one position.	525589
Mój ojciec naprawia mój zepsuty rower.	My father is repairing my broken bicycle.	525599
Czy moglibyśmy dostać stolik w części dla palących?	Could we have a table in the smoking section?	525633
Mój mąż zawsze czyta w łóżku.	My husband always reads in bed.	525638
Słynny architekt zbudował ten dom.	A famous architect built this house.	525807
On ma przywilej studiowania za granicą przez dwa lata.	He had the privilege of studying abroad for two years.	526037
Jaskinia została znaleziona przez chłopców?	Was the cave found by the boys?	526362
Kolejka na stadionie nie była długa.	There wasn't a long queue at the stadium.	526476
Moi rodzice stale kłócą się o drobnostki. To takie irytujące!	My parents keep arguing about stupid things. It's so annoying!	526507
Jest tak gorąco, że mógłbyś usmażyć jajko na masce samochodu.	It's so hot that you could cook an egg on the hood of a car.	526550
Ona udaje, że śpi. Dlatego nie chrapie.	She's faking sleep. That's why she's not snoring.	526589
Całość to więcej niż suma jej składników.	The whole is greater than the sum of the parts.	526748
Odkręć śruby i zdejmij pokrywę lampy.	Loosen the screws and remove the lamp cover.	526940
Wiedziałeś, że na tej górze żyło kilka lisów?	Did you know there were a few foxes living on this mountain?	527343
Chciałbym potwierdzić godzinę odjazdu.	I'd like to confirm the hour of departure.	527351
Proszę, napisz swoje imię ołówkiem.	Please write your name with a pencil.	527557
Dyrektor naszej szkoły jest bardzo stary.	Our school's principal is very old.	527577
Czy studiujesz chemię?	Are you studying chemistry?	527733
Obawiam się, że połączył się pan z niewłaściwym numerem.	I'm afraid you have dialed a wrong number.	527735
On jest blondynem.	He's blond.	527742
Pies jest najlepszym przyjacielem człowieka.	A dog is a man's best friend.	527743
Grecy także często jedzą ryby.	The Greeks also eat fish often.	528573
Przytrzymam ci torbę, gdy ty będziesz zakładać swój płaszcz.	I'll hold your bag while you put on your coat.	528949
Mam nadzieję, że twoje wysiłki przyniosą owoce.	I hope your efforts will bear fruit.	528975
Ona właśnie rozwiązuje ten problem.	She is working on the problem.	529054
Ta działka jest moją własnością.	This land is my property.	529282
Ta encyklopedia należy do mojej żony.	This encyclopedia belongs to my wife.	529377
Słuchałem wiadomości w radiu.	I heard the news on the radio.	529545
Ona zapłaciła krawcowi za swoją suknię.	She paid the dressmaker for her dress.	529546
Nasza restauracja jest najlepsza.	Our restaurant is the best.	529553
Pociąg przyjechał punktualnie.	The train arrived on time.	529559
Gdzie jest najbliższa galeria sztuki?	Where's the nearest art gallery?	529589
Pomogłem mojej mamie posprzątać kuchnię.	I helped my mum clean the kitchen.	529601
Księżyc jest za chmurami.	The moon is behind the clouds.	529661
Mamo, gdzie moja chusteczka?	Mummy, where's my hanky?	529948
To była łamiąca serce opowieść.	It was a heartbreaking story.	530459
Pan Smith jest teraz prezesem tej firmy.	Mr Smith is now president of this company.	530474
Spotkałem go raz kiedy byłem studentem.	I met him once when I was a student.	530576
Ci ludzie są w zespole.	The people are on the team.	530581
Gra została odwołana w ostatniej minucie.	The game was canceled at the last minute.	531010
Tata daje mamie całą swoją pensje.	Father gives Mother all his salary.	531218
Ten kraj obfituje w bogactwa naturalne.	The country is abundant in natural resources.	531610
Jej zegarek pokazywał trzecią nad ranem.	Her watch read three o'clock in the morning.	531852
Dzisiaj jest więcej chmur niż wczoraj.	There's more cloud today than yesterday.	531921
To mój ulubiony projekt.	This is my favorite project.	531945
Społeczeństwo bez religii jest jak statek bez kompasu.	A society without religion is like a ship without a compass.	532118
Grudzień to ostatni miesiąc roku.	December is the last month of the year.	532165
On jest dentystą z zawodu.	He is a dentist by profession.	532323
Każdego dnia, mój brat wypożycza nową książkę z biblioteki.	Every day, my brother borrows a new book from the library.	533906
Zamówiłem nowe meble.	I ordered new furniture.	535108
Dzisiaj jest pochmurno.	Today is cloudy.	535161
Poproszę dwie szklanki soku pomarańczowego.	Two glasses of orange juice, please.	535184
Czy ona umie grać na fortepianie?	Does she play piano?	536147
Przebiegł nie zauważając jej.	He ran past without noticing her.	536342
Ta książka dobrze się sprzedaje.	This book sells well.	537425
Była w rozpaczy, kiedy umarł jej mąż.	She was in despair when her husband died.	538318
Wczoraj wieczorem oglądał mecz koszykówki w telewizji.	He watched a basketball game on TV last night.	538505
Matka jest zajęta gotowaniem obiadu.	Mother is busy cooking the dinner.	538515
Zrobiłem tą pracę na polecenie mojego szefa.	I did that work on the orders of my boss.	538519
Te nylonowe skarpetki dobrze się pierze.	These nylon socks wash well.	538533
Powinienem wczoraj wieczorem pójść wcześniej spać.	I should've gone to bed earlier last night.	538547
W Hiszpanii pada głównie na równinach.	The rain in Spain falls mainly on the plain.	538548
To miejsce jest najlepsze wiosną.	The place is at its best in spring.	538551
Byłem zadowolony z wiadomości.	I was glad at the news.	538642
Tulipany wkrótce zakwitną.	Tulips will bloom soon.	538645
On jest bardzo skromnym człowiekiem.	He is a very modest man.	538655
Ta praca powoduje, że jeżdżę po całym świecie.	This job takes me all over the world.	538656
Nawet świnie potrafią wspiąć się na drzewo, gdy je pochwalić.	Even pigs can climb a tree when flattered.	538935
Moi rodzice są przeciwni ślubowi mojej siostry z cudzoziemcem.	My parents are opposed to my sister marrying a foreigner.	538938
To jest podobne do piłki.	It is something like a ball.	538940
On wspiera dążenie do pokoju na świecie.	He helped the cause of world peace.	538946
Pot kapie mu z twarzy.	Sweat is dripping from his face.	538951
Nauczyciel ma bardzo duży wpływ na swoich uczniów.	The teacher has a great influence on his pupils.	538965
Pasażerowie powinni natychmiast wsiadać do pociągu.	Passengers should board the train now.	538971
W parku jest nie mniej niż dwieście drzew.	There are no less than two hundred trees in the park.	539284
On nadaje się na to stanowisko.	He is adequate for the post.	539311
Mężczyzna, którego spotkałeś na stacji to mój ojciec.	The man you met at the station is my father.	539313
Co byś powiedział na partię szachów dziś wieczorem?	How about playing chess tonight?	539327
Ta dzielnica przestała być bezpiecznym miejscem do mieszkania.	That district is no longer a safe place to live in.	539340
Nie wolno wyrzucać śmieci w tym miejscu.	No dumping rubbish here!	539342
Czy słyszałeś jak mój syn gra na skrzypcach?	Did you hear my son play the violin?	539662
To ciepłe źródło dobrze ci zrobi.	The hot spring will do you good.	539737
Układanie kwiatów jest częścią japońskiej kultury.	Flower arrangement is a part of Japanese culture.	539795
On twierdzi, że zwrócił książkę do biblioteki.	He claimed that he had returned the book to the library.	539842
Przypomniał mi, abym nie zapomniał mojego paszportu.	He reminded me not to forget my passport.	539843
Jej nadzieje się rozmyły gdy usłyszała wyrok.	Her hopes were dashed when she heard the verdict.	539852
Pieniądze załatwiają wiele spraw.	Money answers all things.	540106
On jest znany w całym kraju.	He is known to the entire country.	540124
Mój zegarek jest punktualny.	My watch keeps good time.	540428
Wszyscy wiedzą o tym oprócz mnie.	Everybody knows it except me.	540430
Gdzie jest najbliższe biuro rzeczy znalezionych?	Where is the nearest lost and found?	540762
Wziąłem tą małą dziewczynkę za rękę.	I took the little girl by the hand.	541235
Dla odmiany zjedzmy coś na mieście.	Let's dine out for a change.	542181
To nie jest oryginał.	That's a fake.	542183
Jego ołówek ma ostrą końcówkę.	His pencil has a sharp point.	542208
Twoje słowa zachęty znaczyły wiele dla mnie.	Your words of encouragement meant a lot to me.	543390
Ze łzami w oczach opowiadała tą historię.	She told the story with tears in her eyes.	543727
To nie jest powód, aby się irytować.	It's nothing to get upset about.	544396
On zawsze zostawia swojej żonie problem edukacji swoich dzieci.	He always left the problem of his children's education to his wife.	544418
Kobieta w białym jest sławną aktorką.	The woman in white is a famous actress.	544752
Te rzeczy nie są dobre na chłodny zimowy dzień.	These clothes are not suitable for a cold winter's day.	544995
Czy mogę zapłacić czekiem podróżnym?	May I pay with a travelers' check?	545670
Ten garnitur jest za dobry jak dla mnie.	This suit is too good for me.	546115
On poświęcił swoje życie zachowaniu środowiska naturalnego.	He has dedicated his life to the preservation of nature.	546415
On nadaje się do tej pracy.	He is adequate to the job.	546921
Nie zwrócił uwagi na moją radę.	He took no notice of my advice.	547167
Nagły dźwięk odwrócił ich uwagę od gry.	A sudden noise distracted their attention from the game.	547177
Niektórzy urzędnicy mogli zostać skorumpowani.	Some officials may have been corrupted.	547311
Tylko ona może używać tego komputera.	Only she can use the computer.	547323
Ona nie przestaje pracować.	She kept on working.	547869
To łatwe zwycięstwo.	It's an easy victory.	547980
Jesteś chory na grypę.	You're ill with flu.	548712
Nie zrób się gruby.	Don't get fat.	550638
Byłem zadowolony ze steku na obiad.	I was satisfied with the steak dinner.	551741
Natrafił w szafie na kilka starych dokumentów.	He came across some old documents in the closet.	551807
Nacisnąłem klamkę od drzwi.	I turned the doorknob.	552187
Będę na zebraniu.	I'll attend the meeting.	552200
Skończyła osiemdziesiąt jeden lat.	She turned eighty-one.	552967
Mam wiele zdolności.	I have many abilities.	553167
Proszę, mów głośniej.	Please speak more loudly.	553523
Jest już prawie trzecia godzina.	It's nearly three o'clock.	553530
Jak bardzo jest to skomplikowane?	How complex is it?	553542
Mierz siedem razy, tnij tylko raz.	Measure seven times, cut once.	555293
Gdzie jest najbliższa apteka?	Where's the closest pharmacy?	555388
Autorem tego artykułu jest znany krytyk.	The author of this article is a famous critic.	555402
To moje majtki.	Those are my pants.	557002
Gdzie jest szef?	Where's the boss?	557382
On to zrobił i to w jej obecności.	He did it, and in her presence.	557476
Ona jest moją starszą siostrą.	She's my older sister.	557522
Czy pomógłbyś mi szukać moich kluczy?	Would you help me look for my keys?	558231
Ona często łapała przeziębienia.	She caught colds often.	558277
Czasy się zmieniają, ale trawa zawsze jest zielona.	Times are not always the same, the grass is not always green.	558333
Spędził trzy lata na pisaniu tej powieści.	He has spent three years writing this novel.	558506
On jest moim starszym bratem.	He's my older brother.	560517
Gdybyśmy mieli skrzydła, czy moglibyśmy polecieć na księżyc?	If we had wings, could we fly to the moon?	560535
Będę cię obserwował.	I'll be watching you.	561614
Wyjechał na ekspedycję na biegun północny.	He left on an expedition to the North Pole.	561624
Jestem naprawdę niezadowolony z tego powodu.	I'm really unhappy about this.	561636
Ona hodowała róże.	She grew roses.	562236
Ona dostała awans.	She was promoted.	564987
Ona jest bardzo cichą osobą.	She's a very quiet person.	565766
Nie oceniaj książki po okładce.	Don't judge a book by its cover.	566169
On często cytuje Miltona.	He often quotes Milton.	567005
To mięso to kurczak.	That meat is chicken.	567484
Strusie nie umieją latać.	Ostriches can't fly.	568461
Nie ma mydła.	There's no soap.	568462
Czy umiesz prowadzić księgowość?	Can you do bookkeeping?	569831
Jego babcia wygląda zdrowo.	His grandmother looks healthy.	569888
On jest moim młodszym bratem.	He's my younger brother.	569891
On był świadkiem morderstwa.	He witnessed the murder.	569984
Drugi semestr się skończył.	Second semester has ended.	570446
Oni porównywali nowy samochód ze starym.	They compared the new car with the old one.	570955
On często cytuje Shakespeare'a.	He often quotes from Shakespeare.	571109
On robił dla nas za przewodnika.	He acted as our guide.	571112
On mieszka tutaj w sąsiedztwie.	He lives in this neighborhood.	571129
On jest studentem wyższej uczelni.	He's a high school student.	571133
On musi być dyrektorem szkoły.	He must be the principal.	571134
Większość Anglików to konserwatyści.	Most Englishmen are conservative.	571903
On robi doktorat z literatury angielskiej.	He majors in English literature.	571995
Jego wykłady są bardzo długie.	His lectures are very long.	572633
Jego nowy samochód jest cudowny.	His new car is wonderful.	572648
On robi doktorat z literatury współczesnej.	He majors in modern literature.	572834
On lubi geografię i historię.	He likes geography and history.	572893
On studiował przez dziesięć lat.	He studied for ten years.	572968
Chłopiec wszedł tylnymi drzwiami.	The boy entered by the back door.	573434
Straciłem nadzieję, że ona schudnie.	I've already lost hope of her losing weight.	575005
Zrobił się blady ze strachu.	He turned pale with fright.	575473
Bierz to lekarstwo co godzinę.	Take the medicine every hour.	575759
On jest słynnym kompozytorem.	He is a famous composer.	577404
Nie powinieneś rezygnować z angielskiego.	You shouldn't quit English.	577567
Czy zostawiłeś napiwek?	Did you leave a tip?	578061
Nie mogłem zrozumieć jego idei.	I couldn't understand his ideas.	578725
Zaproszono wszystkich z wyjątkiem mnie.	Everyone except me was invited.	578735
Zrobił dla niej półkę na książki.	He made her a bookshelf.	579152
Studiował ekonomię w koledżu.	He studied economics at college.	579174
Zamówił dla mnie taksówkę.	He called me a cab.	580587
Jak wysoki jest twój brat?	How tall is your brother?	580593
Czy możesz unieważnić moją rezerwację?	Could you cancel my reservation?	582109
A może mały odpoczynek?	How about taking a rest?	582646
W czerwcu dużo pada.	It rains a lot in June.	582907
Ojciec jest zajęty pisaniem listów.	Father is busy writing letters.	586372
Wczoraj byłem na zebraniu.	Yesterday I was in a meeting.	587582
Nie mogłem zrozumieć jego żartu.	I couldn't understand his joke.	587707
W końcu spełniło się jego życzenie.	He finally got his wish.	589174
Czy grałeś wczoraj w koszykówkę?	Did you play baseball yesterday?	589368
Jego brat wkłada wiele pracy w studia.	His brother studies very hard.	589394
Carol często ogląda horrory.	Carol often watches horror films.	589404
Ubiegał się o stypendium.	He applied for the scholarship.	589410
Brak wiadomości jest dobrą wiadomością.	No news is good news.	589647
Tylko szesnaście procent nauczycieli w tej szkole to kobiety.	Only sixteen percent of the teachers at this school are women.	589668
On pije za dużo piwa.	He drinks too much beer.	589874
Przyszedł mi z pomocą.	He came to my rescue.	589956
Mów prosto z mostu.	Don't beat around the bush.	590324
Leżała w łóżku na brzuchu.	She was lying face down on the bed.	590552
Ona uwielbia pisać poezję.	She loves writing poems.	590740
Co za piękny ogród oni zrobili!	What a beautiful garden they made!	590866
Mój ojciec zajęty jest przygotowaniami do podróży.	My father is busy getting ready for his trip.	590867
Nie zniżę się do jego poziomu.	I won't lower myself to his level.	591071
Pływanie jest dobre dla zdrowia.	Swimming is good for your health.	591092
Pokazała mi jej album.	She showed me her album.	591102
Nie działa nasza lodówka.	Our refrigerator isn't working.	591117
Moja żona umarła na raka.	My wife died of cancer.	591351
Toaleta znajduje się za schodami.	The toilets are behind the stairs.	591376
Chcę więcej szczegółowych informacji.	I want more detailed information.	591490
Czy to niedaleko twojego domu?	Is it near your house?	591492
Mój dziadek jest stolarzem.	My grandfather is a carpenter.	591603
Zapłaciłem około pięćdziesięciu dolarów.	I paid about fifty dollars.	591607
Spałem wczoraj dwanaście godzin.	I slept twelve hours yesterday.	591608
Po prostu połóż te paczki gdziekolwiek.	Just put those packages anywhere.	591780
Mój ojciec czasami wyjeżdża za granicę.	My father sometimes goes abroad.	592011
Następny raz mocniej się przyłożę.	I'll try harder next time.	592015
On gra bardzo dobrze na gitarze.	He plays the guitar very well.	592080
Przynieś mi proszę pół butelki wina.	Please bring me a half-bottle of wine.	593061
Jim postanowił napisać coś w swoim notesie.	Jim set out to write something in his notebook.	593066
Nie o to chodzi w pytaniu.	That is not the point in question.	593068
Musimy przekazać naszą kulturę następnemu pokoleniu.	We have to pass on our culture to the next generation.	593080
Dała chłopcu tych kilka monet, które miała w portmonetce.	She gave the boy what few coins she had in her purse.	593088
Na nic się zda próba przekonania go.	It is no use trying to persuade him.	593182
To jest wieża.	That's a tower.	593292
Włóż blachę do piekarnika.	Place the pan in the oven.	593427
W moim śnie śniłem, że śniłem.	In my dream I dreamt that I was dreaming.	593450
Ten zastrzyk pomoże uśmierzyć ból.	This jab will help numb the pain.	593459
Dla rolnika, owoce są ważniejsze od kwiatów.	For the peasant, fruits are more important than flowers.	593494
Gdzie autobusy odjeżdżają z lotniska?	Where do the airport buses leave from?	593528
On ignoruje moje problemy.	He ignores my problems.	594101
Wszedłem na wzgórze.	I walked up the hill.	596763
Według tego co wiem, on jest niewinny.	To the best of my knowledge, he is innocent.	596932
Mój wujek nigdy nie pisze listów.	My uncle never writes letters.	597151
Nie przeszkadza mi gorąca pogoda.	I don't mind hot weather.	597153
Mój brat został inżynierem.	My brother became an engineer.	597154
Zawsze będę pamiętał twoją uprzejmość.	I'll always remember your kindness.	597160
Zrobił to z zazdrości.	Jealousy made him do that.	597174
Dali mi propozycję, której nie mogłem odmówić.	They gave me an offer that I couldn't refuse.	597800
Ten lek jest dobry na ból głowy.	This medicine is good for headaches.	597815
Nie dolewaj oliwy do ognia swoimi głupimi uwagami.	Your stupid remark just added fuel to the flames.	597820
W ten sposób zrobiłem tą maszynę.	This is how I made the machine.	597880
To prawda, że ona nie żyje.	It's true that she's dead.	597946
Import był większy od eksportu w poprzednim roku.	Imports exceeded exports last year.	598272
Wolę grejpfruty niż pomarańcze.	I prefer grapefruits to oranges.	598282
Ta partykuła zmienia rzeczownik w czasownik.	This particle turns a noun into a verb.	598701
Duma przeszkadza mu w drodze do sukcesu.	His pride stood in the way of success.	598847
Pojedźmy nad jezioro.	Let's drive to the lake.	598893
Skończyłem podlewać kwiaty.	I'm done watering the flowers.	598915
Fakty nie zgadzają się z twoją hipotezą.	The facts are incompatible with your hypothesis.	599728
Mam wysoką temperaturę.	I have a high fever.	600116
Jej włosy są jak jedwab.	Her hair is like silk.	600201
Mój brat lubi horrory.	My brother likes horror movies.	600253
Mój telewizor przestał działać.	My TV has quit working.	600504
Jego żona jest naszą nauczycielką od języka włoskiego.	His wife is our Italian teacher.	600668
Jeśli przyjrzysz się słowom, to one naprawdę nie znaczą wiele.	If you look at the lyrics, they don't really mean much.	600683
Nie mam konta na tym forum.	I do not have an account in these forums.	600687
Dlaczego przeprasza za coś, czego nie zrobiłeś?	Why are you sorry for something you haven't done?	600704
Nic nie jest możliwe bez wysiłku.	Nothing is achieved without effort.	600754
Nie wiedziałem, że jesteś tak dobrym kucharzem.	I didn't know you were such a good cook.	601062
Wiatr wieje ze wschodu.	The wind blows from the east.	601112
Ta góra jest pokryta śniegiem.	That mountain is covered with snow.	601343
Twoje pióro jest lepsze od mojego.	Your pen is better than mine.	601354
Ich ojciec jest taksówkarzem.	Their father is a taxi driver.	601361
Połóż się na swojej prawej stronie.	Lie on your right side.	601373
Moja żona łatwo łapie przeziębienia.	My wife catches colds easily.	601381
Nie złość się!	Don't get upset!	601427
Ponieważ byłem zmęczony, poszedłem wcześniej spać.	Since I was tired, I went to bed early.	603473
Oddam Ci pieniądze, jak tylko dostanę wypłatę.	I'll pay you back once I receive my salary.	603481
To jest trochę dziwne dla mnie.	It's a bit strange to me.	603498
Moja matka jest wściekła.	My mother is angry.	603506
On nigdy nie bierze lekarstw na przeziębienie.	He never takes medicine for his cold.	604510
Te kwiaty mają wyjątkowy zapach.	These flowers have a unique smell.	604514
Zapomniałem mojego numeru PIN.	I've forgotten my pin number.	604527
Ta muzyka wszystkim działa na nerwy.	This music's annoying everyone.	606029
Wziął książkę z regału.	He took the book from the shelf.	608571
Moja siostra jest podobna do babci.	My sister resembles my grandmother.	608991
Nie powinieneś być niecierpliwy w stosunku do dzieci.	You shouldn't lose your patience when dealing with kids.	609392
Te fakty potwierdzają moją hipotezę.	These facts support my hypothesis.	609472
Czy masz doświadczenie zawodowe?	Do you have professional experience?	610649
Jej praca jest lepsza od mojej.	Her work is better than mine.	616266
Męczą mnie twoje skargi.	I'm tired of your complaints.	621039
Odwiedźmy go na chwilę w jego domu.	Let's drop by his house.	623354
Na dworze robi się jaśniej.	It is getting lighter outside.	623355
Chciałbym zrobić jej niespodziankę.	I wanted to surprise her.	625133
Podzielmy się nagrodą po połowie.	Let's split the reward fifty-fifty.	626109
Spotkajmy się o pierwszej po południu.	Let's meet at one o'clock.	626596
To twój główny problem.	That is your major problem.	626598
Hobby mojego ojca to wędkarstwo.	My father's hobby is fishing.	626648
On jest dumny ze swojej punktualności.	He prided himself on his punctuality.	627661
Chciałbym dostać paragon.	I'd like a receipt, please.	627701
Była ubrana w czerwony kostium kąpielowy.	She was dressed in a red bathing suit.	627780
Telefon to jeden z wielu wynalazków Bella.	The telephone is one of Bell's many inventions.	631444
Podają tutaj bardzo dobre jedzenie.	They serve excellent food here.	631646
Czy już kiedyś podróżowałeś samolotem?	Have you ever traveled by plane?	631904
Podróżowanie statkiem jest nudne.	It is dull to travel by ship.	631997
Czy mogę dostać serwetkę.	May I have a napkin, please?	632000
On zawsze żartuje.	He's always joking.	632016
W następnym roku będę miał szesnaście lat.	I will be sixteen years old next year.	632846
Masz ochotę na trochę jajecznicy?	Do you fancy some scrambled egg?	632850
Powiedz mi jak się obsługuje pralkę.	Tell me how to use the washing machine.	635413
Jest tak piękne jak róża.	It's as lovely as a rose.	636443
Rozejrzałem się dokoła, ale nie zobaczyłem nikogo.	I looked around, but saw nobody.	639705
Czy można tam dojść pieszo?	Is it possible to go there walking?	640218
Która z tych rakiet jest twoja?	Which of these rackets is yours?	640262
Opowiedziała o skutkach swojej nieostrożności.	She spoke about the consequences of her carelessness.	640297
Mój ojciec często lata do Ameryki w sprawach służbowych.	My father often goes to America on business.	640408
Ta wycieczka będzie miłym wspomnieniem.	This trip will become a pleasant memory.	641236
Marzenia nie zawsze się spełniają.	One's dreams do not always come true.	641841
To ty, który złamałeś naszą umowę.	It's you who has broken our agreement.	641847
Winda jest nieczynna. Proszę korzystać ze schodów.	The lift is out of order. Please use the stairs.	643774
Dwanaście lat dla psa to już starość.	Twelve years is old for a dog.	644037
Jak na swój wiek jest bardzo inteligentny.	Young as he is, he is quite intelligent.	644038
Sierść naszego kota straciła połysk.	Our cat's fur has lost its luster.	652249
Szybko przyzwyczaił się do nowego otoczenia.	He soon got used to the new surroundings.	652301
To piwo jest gorzkie.	This beer tastes bitter.	652425
Nie każdy ptak umie śpiewać.	Not every bird can sing.	655796
Podczas zimy śpię pod dwoma kocami.	During winter I sleep with two blankets.	659098
Będę mieszkać w pokoju z czterema łóżkami.	I will live in a room with four beds.	659227
Dwa dni temu wiał wiatr.	Two days ago the wind blew.	661284
Pociągi w Serbii są strasznie powolne.	The trains in Serbia are terribly slow.	663840
Ona nie przestawała mówić.	She kept on talking.	664853
On ma nierówno pod sufitem.	He's got a few screws loose.	665847
Pokój bez książek jest jak ciało bez duszy.	A room without books is like a body without a soul.	668721
Pomogłem mamie w gotowaniu.	I helped mom cook.	668734
W razie pożaru proszę używać tego wyjścia.	In case of fire, please use this exit.	669011
To chyba nie jest ostatni pociąg?	This isn't the last train, is it?	669077
Jaki jest dzisiaj kurs wymiany?	What's today's exchange rate?	669097
Wydawało się, że oni znają fakty.	They appear to know the fact.	669098
Chciałbym jeszcze raz odwiedzić Anglię zanim się zrobię za stary.	I wish to revisit England before I get too old.	669613
On martwi się o jej zdrowie.	He is anxious about her health.	669656
Ten problem dyskutowało wielu ekonomistów.	This problem has been debated by many economists.	669659
Mam nerwowy tik.	My face twitches.	669690
W nowym kapeluszu jej do twarzy.	Her new hat becomes her.	670329
Mówiąc ogólnie, historia się powtarza.	Generally speaking, history repeats itself.	670385
Ona zawsze utrzymuje swój pokój w porządku.	She always keeps her room in good order.	671486
Czy on specjalnie popełnił ten błąd?	Do you think he made that mistake on purpose?	674658
To jest trochę zbyt luźne w pasie.	This is a bit too loose around my waist.	674688
On jest mały i słaby.	He is small and weak.	675708
Czy pomóc ci z tym pudłem?	Shall I help you with this box?	675738
Kupię ten samochód tylko, gdy najpierw naprawią hamulce.	I will only buy the car if they repair the brakes first.	675773
Czy już wysłałeś mu kartkę świąteczną?	Have you sent him a Christmas card yet?	676706
Statek pojawił się w zasięgu wzroku.	The ship came in sight.	676789
Ten obszar jest zniszczony.	This area is devastated.	676793
Daj mi nóż, żebym mógł przeciąć linę.	I want a knife to cut the rope with.	676841
Byłem zaskoczony jego podobieństwem do swojego ojca.	I was surprised that he really had a strong resemblance to his father.	676873
Nie śniłem nawet o tym, że mógłby tędy przejść tajfun.	I never dreamed that there would be a typhoon.	676876
Ona, w jego obecności, natychmiast oblewa się rumieńcem.	She immediately blushes in his presence.	676908
Co powiedział biznesmen po wynalezieniu zamka błyskawicznego?	What did the businessman say when he invented the zip-fastener?	676916
Mam dwa psy, trzy koty i sześć kur.	We have two dogs, three cats, and six chickens.	692028
Co jest napisane na znaku drogowym. - Droga jednokierunkowa.	What is written on the road sign? - ONE WAY.	695742
Poszedłbym z tobą na koncert, ale nie mam kasy.	I'd love to go with you to the show, but I'm flat broke.	696372
Co rano kupuję w kiosku gazetę.	Every morning I buy a newspaper at a newsstand.	696427
Każdy uczeń musi co tydzień oddać wypracowanie.	Every pupil must hand in an essay each week.	701585
Jest dużo problemów do rozwiązania.	There are many problems to solve.	702049
Angielski jest dla mnie zbyt trudny.	English is too difficult for me to understand.	702053
Dziękuję za współpracę.	I thank you for your cooperation.	702895
Próbował pan sprawdzić poziom oleju?	Have you thought of checking the oil level?	702934
On wygrał wiele turniejów.	He won many competitions.	704013
Kolacja jest prawie gotowa.	Dinner's almost ready.	704028
Pomarańcze mają dużo witamin.	Oranges have a lot of vitamins.	704049
Tu chodzi o zdania, nie o wyrazy.	It's all about sentences. Not words.	704124
No i gdzie jest deszcz?	Where is the rain?	705256
Gordon cały tydzień chodził z głową w chmurach.	Gordon has had his head in the clouds all week.	705294
Jedno z dzieci zostawiło otwarte drzwi.	One of the children left the door open.	705297
Ukłuła się igłą w czasie haftowania.	She pricked herself with a needle while embroidering.	709270
Działy się tam dziwne rzeczy.	There were strange things happening there.	709413
W większości krajów nauczyciele nie zarabiają zbyt wiele.	In most countries, teachers do not receive high wages.	711433
Ani przez chwilę w ciebie nie wątpiłem.	I did not doubt you for a moment.	712460
Przez dolinę płynie rzeka.	A river flows through the valley.	713432
Tak jest znacznie wygodniej.	It's much more convenient.	713437
Ryż uprawiany jest w wielu częściach światach.	Rice is cultivated in several parts of the world.	713472
Samochód jest niezbędny, jeśli się mieszka na przedmieściach.	A car is a must for life in the suburbs.	713479
Przyjemność to zawsze sprawa przeszłości lub przyszłości, nigdy teraźniejszości.	Pleasure is always in the past or in the future, never in the present.	713488
Nasz ogród był pełen chwastów.	Our garden was full of weeds.	716019
Ten nowy odtwarzacz zrobił na mnie duże wrażenie.	I was impressed by the new MP3 player.	716765
Ta biżuteria jest droga.	These jewels are expensive.	716860
Korek za nic nie chciał wyjść.	The cork would not come out no matter what.	718950
Nie podoba mi się jego sposób mówienia.	I do not like the way he talks.	719043
Ta książka mówi o gwiazdach.	This book is about stars.	719686
Japoński rynek ryżu jest zamknięty na import.	Japan's rice market is closed to imports.	719693
On uwielbia chodzić do teatru.	He loves going to the theater.	720148
Słyszałem, jak za oknem ktoś krzyczy.	I heard someone shout outside the window.	720155
To dziwne, że nic nie wiesz o jej ślubie.	It is strange that you know nothing about her wedding.	720205
Stała przed lustrem.	She stood before the mirror.	720208
Pociąg zatrzymał się z powodu burzy.	The train stopped because of the storm.	720219
W jego wypracowaniu jest mało błędów, jeśli w ogóle.	There are few mistakes, if any, in his composition.	722134
Na zwiedzenie Kioto rok nie wystarczy.	One year is not enough to visit all the places in Kyoto.	722283
Dziś nie jest tak gorąco jak wczoraj.	It's not so hot today as it was yesterday.	722301
Następnie mocno kopnął piłkę.	Then he wellied the ball.	723706
On nic nie widzi bez okularów.	He can't see a thing without glasses.	723710
Nie muszę przepraszać za to, co powiedziałem.	I don't have to apologize for what I said.	723980
Trzeba szanować starszych.	Respect is due to older people.	728407
Pies biegał po ogrodzie.	A dog ran about in the garden.	728562
Warto zwiedzić to muzeum.	The museum is worth visiting.	728648
Życzyła mi dobrej nocy.	She wished me good night.	730480
Czy cena obejmuje śniadanie?	Is breakfast included in the price?	730581
Może pan naprawić przebitą oponę natychmiast?	Can you fix the flat tire now?	730588
Nie mów o nim źle publicznie.	Don't speak ill of him in public.	730592
Ile przysłów poznaliśmy do tej pory?	How many proverbs have we learned so far?	730606
Może być cztery, sześć lub dwanaście rat.	You can make 4, 6 or 12 payments.	732957
Ja też wielokrotnie płaciłem mandaty za nieprawidłowe parkowanie.	I've paid parking fines a number of times myself.	733019
Język to dialekt z armią i flotą.	A language is a dialect with an army and navy.	734127
Płonie samochód na parkingu.	A car in the parking lot is on fire.	734175
Psy są wiernymi zwierzętami.	Dogs are loyal animals.	735426
Przywykłeś już do mieszkania w akademiku?	Have you got used to living in the dorm?	735618
Dziś rano był przejmujący mróz.	There was a keen frost this morning.	735863
Te słuchawki nie działają.	These earphones don't work.	735882
Zginął z powodu brawury za kierownicą.	He killed himself by driving recklessly.	735936
Moja poduszka jest taka miękka!	My pillow is so soft!	736883
Moją uprzejmość wzięli za przyjaźń.	They mistook my politeness for friendship.	737232
Marzec jest między lutym a kwietniem.	March comes between February and April.	742430
Prezes mianował nowego kierownika.	The president appointed a new manager.	744152
Uczeń został ukarany za ściąganie.	The student was punished for cheating.	745302
Wiśnie są właśnie w pełnym rozkwicie.	The cherry is now in full bloom.	745390
Ten odkurzacz jest bardzo głośny.	This vacuum cleaner is noisy.	745395
Musisz znać swoje korzenie.	Know your roots.	745412
Samochwała w kącie stała.	He that praises himself, spatters himself.	745500
Kwiat usechł z braku wody.	The flower died for lack of water.	746119
Dom ma ekspozycję południową, więc jest dobrze nasłoneczniony.	As the house has a southern aspect, it is very sunny.	746172
Ona nigdy nie marzyła o spotkaniu go za granicą.	She had never dreamed of meeting him abroad.	748338
Nie wszyscy lekarze dużo zarabiają.	Not all doctors make a lot of money.	749149
Oglądałeś kiedyś sumo?	Have you ever watched sumo wrestling?	749216
Kiedy zacznie się spektakl?	When does the show start?	749510
W dotyku jest jak jedwab.	It feels like silk.	750538
Czy ich matka pilnowała dziewczynek?	Was their mother watching the girls?	751109
Może pan wypełnić ten formularz?	Can you fill this form?	751449
Mówiłem o muzyce.	I talked about music.	751808
Mama kupiła żółty parasol mojemu młodszemu bratu.	My mother bought my little brother a yellow umbrella.	753787
Byłem w Rumunii kilka lat temu.	I visited Romania a few years ago.	753896
Ten malarz to wieczne dziecko.	The artist is eternally a boy.	754262
Moja ulubiona piosenkarka to Kylie Minogue.	My favorite singer is Kylie Minogue.	756533
Język to najważniejszy wynalazek człowieka.	Language is the most important invention of the man.	756634
Budują nowy plac.	They're building a new square.	756912
Zostawiłem notatki w pokoju - pójdę po nie zaraz.	I left the notes in the dormitory. I'll go back and get them now.	756956
Mecz zakończył się remisem.	The match ended in a draw.	756957
Czy mogę dostać zaliczkę z pensji?	Can I get an advance on my salary?	756963
Nasz zespół przegrał.	Our team lost.	757634
Nie mam szerokich bioder.	I don't have wide hips.	759127
Jeśli wpłata czynszu nastąpi po piątym, naliczona zostanie opłata dodatkowa.	If your rent comes in past the fifth, a late charge will be added.	760295
Nie przeszkadza mi, jeśli mnie krytykują, kiedy się mylę.	I don't mind being criticized when I am wrong.	760309
Moja przyjaciółka ma siedemnaście lat.	My friend is seventeen.	760402
Grał w piłkę starą, pustą puszką.	He played football with an empty tin.	760415
Pensja nauczyciela jest niższa od pensji prawnika.	The salary of a teacher is lower than that of a lawyer.	766099
Sądząc po akcencie, on musi być z Osaki.	Judging from his accent, he must be from Osaka.	766101
Parę dni temu spotkałem na przyjęciu starego przyjaciela.	I ran across an old friend of mine at party the other day.	766107
Ponieważ nie znali drogi, zaraz się zgubili.	As they didn't know the way, they soon got lost.	766111
Witanie wiosny kwiatami to chińska tradycja.	It is a Chinese tradition to welcome spring with flowers.	766123
Tresuje się tam pandy, by robiły różne rzeczy.	There, pandas have been trained to perform dozens of items.	766134
Widziałem go w telewizji, ale nie osobiście.	I have seen him on TV but not in the flesh.	766169
Zrozumienie tej książki przekracza moje możliwości.	Understanding this book is beyond my capacity.	766208
Słyszałem, że zdałeś egzaminy wstępne. Gratulacje!	I hear you passed the entrance exam. Congratulations!	766209
Szybki, brązowy lis skacze prosto przez leniwego psa.	The quick brown fox jumps over the lazy dog.	768848
Nowe drogi były budowane jedna po drugiej.	New roads were constructed one after another.	775910
Dzieci uwielbiają kopać w piasku.	Children love to dig in the sand.	775916
Długie spódnice były wtedy modne.	Long skirts were in fashion in those days.	775934
Oni mieszkają w naszym bloku.	They live in our block.	776330
Wierzę w to, że szczerość zostanie w końcu nagrodzona.	It is my belief that sincerity will be rewarded in the end.	776473
Zwróciłem się do niego o poradę.	I turned to him for advice.	776478
Karaoke jest dobre na stres.	Karaoke is good for reducing stress.	776510
Ta winda jest nieczynna. Proszę skorzystać ze schodów.	This elevator is out of order. Please use the stairs.	777740
Cena nie gra roli.	I'll pay any price.	780307
Ogólnie rzecz biorąc, Japończycy są pracowici.	Generally speaking, the Japanese people are diligent.	789039
To jest telewizja.	It's a TV.	789059
Nie słuchaj zbyt głośno w tych nowych słuchawkach.	Make sure you don't listen too loud with these new earphones!	792382
To zdjęcie przypomina mi moje czasy dzieciństwa.	This photo takes me back to my childhood.	793602
Oszczędzał przez długie lata, żeby zgromadzić pieniądze.	He pinched and scraped for many years to save money.	793608
Nie miałem pojęcia, co powstrzymało mnie przed przeprowadzką.	I could not understand what prevented me from moving.	813413
Szczerze mówiąc, on jest w błędzie.	Frankly speaking, he is wrong.	814182
On prędzej czy później zostanie dobrym adwokatem.	He'll make a good lawyer sooner or later.	814496
Nasz pies siedzi w budzie.	Our dog is in the kennel.	814572
Ta rozmowa jest nagrywana.	This conversation is being recorded.	814586
Mój wnuk jest jeszcze dzieckiem.	My grandson is still a baby.	814631
A kiedy próżnia wybucha, nazywa się to czarną dziurą.	And if the vacuum explodes, it is called a black hole.	817181
Lód topnieje w wodzie.	Ice melts in water.	817871
Między tymi dwiema teoriami jest olbrzymia różnica.	There exists an enormous difference between the two theories.	818773
Płacą państwo razem czy osobno?	Are you paying together or separately?	821032
Kręci mi się w głowie.	I feel dizzy.	822164
W dzisiejszej gazecie nie piszą o niczym istotnym.	Today's paper contains nothing of importance.	823241
Moi rodzice wysłali mi pocztówkę.	My parents sent me a postcard.	826635
Weź słowo w nawias.	Put a word in parentheses.	826724
Jej syn stacjonuje w Niemczech Zachodnich.	Her son is stationed in West Germany.	827727
Sporty zimowe są w naszym kraju bardzo popularne.	Winter sports are very popular in our country.	827753
Chińczycy mają dużą, czerwoną flagę i małą, czerwoną książeczkę.	Chinese people have a big red flag and a little red book.	830288
Wstyd mi za to, co zrobiłem.	I'm ashamed to have done that.	830381
Ciężko jest znaleźć stałe, dożywotnie zatrudnienie z wysoką pensją.	It is difficult to find a well paid permanent job.	830506
Mąkę robi się z pszenicy.	Flour is made from wheat.	831693
Na co jest ten zeszyt?	What is this notebook for?	831822
Słońce zawsze wstaje na wschodzie.	The sun always rises in the east.	831852
Kiedy wyjąłem korek w umywalce, woda zaczęła spływać z bulgotem.	When I unplugged the bathroom sink, the water gushed down the drain.	832639
Nie wiem wszystkiego o tym wydarzeniu.	I don't know everything about the event.	832686
Wczoraj studenci skończyli rozdział pierwszy, więc teraz przechodzą do drugiego.	Yesterday the students finished Chapter 1 so now they'll move on to Chapter 2.	837134
Byłem zaskoczony, że wygrałeś główną nagrodę.	I was surprised that you won the prize.	837847
Ten lek nie ma skutków ubocznych.	This medicine has no harmful side effects.	837869
Zebranie skończyło się pół godziny temu.	The meeting finished thirty minutes ago.	840173
Nie jest tak inteligentna jak ty.	She is less intelligent than you.	840186
Wczoraj widziałem ciekawy program w telewizji.	Yesterday I saw an interesting TV program.	840197
Nie zapominaj swoich rzeczy.	Don't forget your things.	840225
Wiele najlepszych restauracji w mieście zamyka się na cały sierpień.	Many of the city's leading restaurants close down for the whole of August.	840232
Woli pan wino białe czy czerwone?	Do you prefer white wine or red wine?	840244
Tysiące dolarów na stypendia przepada co roku.	Thousands of dollars in scholarships go unclaimed each year.	840301
Bezdomne dziecko siedzi z psem przy torach.	An unclaimed child and his dog sit by the railroad tracks.	840305
Nie mają wpływu na środowisko.	They have no impact on the environment.	840314
Leży w łóżku z przeziębieniem.	She is down with a cold.	841760
Spóźniłem się z powodu spóźnienia pociągu.	I was late because the train was delayed.	842087
To nie on ukradł mi portfel.	He didn't steal my wallet.	844820
Czas oczekiwania przy okienku imigracyjnym wynosi pół godziny.	The wait at immigration is at least 30 minutes.	846194
Obietnica to za mało.	A promise is not enough.	846255
Jak ta informacja poszła w świat?	How did the news get out?	846288
Jak wypijesz herbatę, ćwicz dalej.	After you've had some tea, carry on practising.	852287
Rosyjscy żołnierze coraz bardziej tracili nadzieję.	More and more Russian soldiers lost hope.	856214
Nie mogę skończyć tego fragmentu puzzli.	I can't finish this part of the puzzle.	856457
W Grecji jest dużo wysp.	There are many islands in Greece.	858391
Zimą jest dużo śniegu.	There's a lot of snow in the winter.	858460
Mój brat jest inżynierem.	My brother is an engineer.	858491
Robią wyprzedaż likwidacyjną.	They're having a going-out-of-business sale.	859027
Zdecydował się na operację.	He decided to have the operation.	859039
Nie poszła na siłownię.	She did not walk to the gym.	859077
On przywiązywał swojego konia do płotu.	He was tying his horse to the fence.	863490
Zakochania i kaszlu nie da się ukryć.	Love and cough cannot be hidden.	865936
Po drodze na stację spotkałem nauczyciela.	I met my teacher on the way to the station.	865990
Nie chwal dnia przed zachodem słońca.	Never praise a ford till you get over.	867522
Napisałem błędny adres na kopercie.	I wrote the wrong address on the envelope.	867542
Te nowe buty już potrzebują naprawy.	These new shoes already need mending.	868022
Doświadczenie to nazwa, którą każdy nadaje swoim błędom.	Experience is the name everyone gives to their mistakes.	872338
Ponieważ on jest już pełnoletni, może głosować.	As he is already of age, he can vote.	875520
Nigdy go nie widziałam/widziałem w dżinsach.	I've never seen him in jeans.	875883
Wybaczaj każdemu, nie zapominaj niczego.	Forgive everyone, forget nothing.	877680
To zdjęcie przypomina mi dzieciństwo.	This picture reminds me of my childhood.	880324
Mężem mojej córki jest Francuz.	My daughter's husband is French.	880362
Nie dotykaj tej patelni! Jest bardzo gorąca!	Don't touch that pan! It's very hot.	880405
Czy można prosić o szklankę wody?	May I have a glass of water, please?	880615
Powinniśmy wziąć pod uwagę jego młodość.	We must take his youth into account.	882642
Skóra to surowiec na buty.	Leather is raw material to produce shoes.	882885
Zdejmij patelnię z ognia.	Take the pan off the fire.	882937
W trudnych chwilach odwoływała się do wiary.	In times of trouble, she would turn to faith.	883147
W ciężkich czasach szukała pociechy w wierze.	In times of trouble, she would turn to faith.	883148
To jest chiński wentylator.	This is a Chinese fan.	888465
Mój weterynarz nie daje swemu psu komercyjnej karmy.	My vet won't feed his dog commercial dog food.	898713
Czy dawanie psu czosnku nie spowoduje problemów?	Will feeding my dog garlic cause any problems?	898745
Kiedy karmił swojego psa, słuchał wiadomości w radiu.	He listened to the news on the radio as he fed his dog.	898746
Słońce świeci nad naszymi głowami.	The sun is shining above our heads.	898769
Którędy idzie się do Parku Ludowego?	So which way is it to the People's Park?	899421
To na pewno listonosz.	It must be the postman.	903435
Na Białorusi mieszkają wyznawcy różnych religii.	Adherents of various religions live in Belarus.	904509
Ona zawsze się gubi.	She always gets lost.	906110
Uniwersytet był wspaniałym doświadczeniem.	University was a wonderful experience.	909194
Nie wszyscy Amerykanie popierali wojnę.	Not all Americans supported the war.	909215
Ten profesor uczy czeskiego.	The professor teaches Czech.	909240
On nie miał prawie żadnego formalnego wykształcenia.	He had almost no formal education.	911544
Kiedy byłem młody, często chodziłem oglądać mecze baseballa.	When I was young, I would often go to watch baseball games.	911560
Czy jest coś tańszego?	Is there anything cheaper?	912654
Jaki jest twój ulubiony serial telewizyjny?	What's your favorite TV series?	915153
Wszedłem na palcach do sypialni.	I went up to my bedroom on tiptoe.	917740
Piotr jest brunetem, a Lech - blondynem.	Piotr has black hair but Lech has blond hair.	919223
Mamy dwie córki i dwóch synów.	We have got two daughters and two sons.	919275
Felicja jest żonata z przystojnym mężczyzną imieniem Łazarz.	Felicja is married to a handsome man called Lazarz.	919296
Nie puszczaj mojej ręki.	Don't let go of my hand.	919488
Zatrudniła prywatnego detektywa, żeby śledzić męża.	She employed a private detective to keep a watch on her husband.	919650
Jolanta to piękna dziewczyna z uniwersytetu Bronisława.	Jolanta is a very beautiful teenager girl from Bronisław's university.	919675
Magdalena i Lech przygotowują się do egzaminu z polskiego.	Magdalena and Lech are preparing for their Polish exams.	921434
Mama przygotowuje śniadanie.	Mother is getting breakfast ready.	921438
Polska była jednym z pierwszych krajów, które uznały Republikę Turcji.	Poland was one of the first countries to recognize the Republic of Turkey.	921550
Polska to spory kraj.	Poland is a big country.	921570
Jakimi językami mówi się w Belgii?	What languages do they speak in Belgium?	921782
Chcą wziąć udział w olimpiadzie.	They want to take part in the Olympic Games.	922415
Przed zażyciem tego lekarstwa należy zasięgnąć rady farmaceuty.	You should consult with a pharmacist before buying that medicine.	923031
Wolę ryż od chleba.	I like rice more than I like bread.	924527
Mój tata jest silniejszy od twojego.	My dad is stronger than your dad.	924572
Ta rzeka jest szeroka.	The river is wide.	925735
Każda z tych rodzin otrzymuje pomoc od państwa.	Each of these families receives help from the state.	925912
Tenis to mój ulubiony sport.	Tennis is my favorite sport.	927136
Czy wszyscy pasażerowie wsiedli?	Have all the passengers boarded?	927159
Nie podawaj mu jej adresu.	Don't tell him her address.	929160
Zaczęła grać w tenisa nie z zainteresowania, ale na pokaz.	She has begun to play tennis not so much out of curiosity as out of vanity.	930127
Brokuły to jedne z najzdrowszych warzyw.	Broccoli is one of the healthiest vegetables.	931106
Lepiej pomyśl, a potem decyduj.	Think more and make decisions after.	931132
Dumą Nowego Jorku są muzea.	The pride of New York are its museums.	931143
Czy ma pan ubezpieczenie zdrowotne?	Do you have health insurance?	932849
Każdy w końcu umiera.	Everyone dies eventually.	933069
On jest w drugiej ciężarówce.	He's in the other truck.	933154
On jest na zasiłku.	He lives on welfare.	933251
Jako bezrobotny, nic nie zaoszczędzę.	With no work, I can't save any money.	933324
Proszę częstować się pizzą.	Please help yourself to the pizza.	933337
Interesuje się pan muzyką?	Are you interested in music?	933371
Co pan woli: ryż czy pieczywo?	Which do you prefer, rice or bread?	933374
Błądziła po lesie.	She was wandering in the woods.	935211
Uczciwie będzie powiedzieć, że obie piłki są równej wagi.	It is fair to say that both balls are of equal weight.	935365
Jego ogród to dzieło sztuki.	His garden is a work of art.	936028
Tyle pysznych rzeczy można zrobić z bakłażanów!	So many tasty foods can be prepared with eggplants!	936105
Mój brat został kucharzem.	My brother became a cook.	936393
To jest komputer, na którym pisze swoje artykuły.	That's the computer on which he writes his articles.	937884
Restauracja znajduje się na parterze.	The restaurant is on the ground floor.	940965
Spróbuj tego sosu.	Try this sauce.	943612
Czy szkoła jest daleko od domu?	Is your school far from your home?	944262
Białe zaczynają i wygrywają.	White to play and win.	945832
Ten przepis wymaga czterech dojrzałych pomidorów.	The recipe calls for four ripe tomatoes.	945839
Coraz więcej ludzi zalega z ratami za hipotekę.	More and more people are falling behind in their mortgage payments.	945846
Nowa autostrada skraca prawie o godzinę czas mojego dojazdu.	The new highway shaves almost an hour off my commute time.	945849
Nie pozwolą nam wejść do ogrodu.	They won't allow us to enter the garden.	945871
Zrobił to dla zysku.	He did it for the money.	947945
Gdzie jest wódka?	Where's the vodka?	949724
Otrzymał od królowej trzy statki.	He received three ships from the Queen.	951082
Czy chorował pan na jakąś ciężką chorobę?	Have you ever had a serious illness?	951093
Co się stało z moją torbą?	What happened to my bag?	951095
Ona spędza zbyt wiele czasu w internecie.	She spends way too much time surfing the web.	952126
Jeden jest nowy, a drugi stary.	One is new, and the other is old.	952130
W zdaniu zwykle jest podmiot i czasownik.	A sentence normally has a subject and a verb.	952163
Zwykle koty nie lubią psów.	Cats usually hate dogs.	952220
W stawie jest dużo ryb.	There are a lot of fish in the pond.	956784
Ich wargi zetknęły się.	Their lips met.	956827
Z góry spadł kamień.	A rock fell from above.	956869
Mnóstwo ludzi cierpi teraz na różne alergie.	A lot of people are dealing with allergies now.	957021
Mnóstwo ludzi cierpi teraz na katar sienny.	A lot of people are dealing with hay fever now.	957024
Wiele osób lubi jeździć pod namiot.	A lot of people are interested in camping.	957029
Jak mówią w wiadomościach, został pożarty przez rekiny.	According to the news, he was eaten by sharks.	957038
Wszystkich pięć zajęcy zjadły głodne wilki.	All five rabbits were eaten by the hungry wolves.	957048
Czy w okolicy są jakieś niedźwiedzie?	Are there any bears around here?	957062
Czy jesteś jedynakiem?	Are you an only child?	957066
Zadowolony jesteś ze swojej wagi?	Are you happy with your weight?	957080
Czy to ty narobiłeś tego bałaganu?	Are you responsible for this mess?	957096
Wolę białe róże od czerwonych.	I like white roses more than red ones.	957567
Ona lubi samotne spacery.	She likes to go for solitary walks.	958920
Kim jest ten chłopak, który tam płynie?	Who's that boy swimming over there?	959005
Czy lubi pan białą czekoladę?	Do you like white chocolate?	959016
Nie, proszę siadać.	No, sit down.	959029
Chyba jutro będę zupełnie łysy.	I guess that tomorrow I'll be completely bald.	959033
Bieda jest u źródeł wszelkiego zła.	Poverty is the mother of all vices.	959063
Nie mogę przestać kaszleć.	I can't stop coughing.	959136
Może świadek opisać, co się wydarzyło?	Could you describe to the jury what happened?	959246
Ojciec właśnie robi kolację w kuchni.	Father is cooking dinner in the kitchen now.	959282
Chciałbym rosół z kurczaka.	I would like chicken soup.	959589
Uważasz, że mam kwalifikacje do tej pracy?	Do you think I'm qualified for that job?	959667
Myślisz, że jestem brzydki?	Do you think I'm ugly?	959715
Czy ktoś zna nazwisko zmarłego?	Does anyone know the name of the deceased?	959740
Nie gryź się tym.	Don't lose sleep over that.	959750
Chociaż na talerzu było dużo ciastek, zjadłem tylko trzy.	Even though there were many cookies on the dish, I only ate three.	959794
Wszyscy w pokoju westchnęli z ulgą.	Everybody in the room let out a sigh of relief.	959808
Fotografia to jego ulubione hobby.	Photography is his favourite hobby.	959810
Ona w ramach przekąsek je owoce i orzechy.	For snacks, she eats fruit or nuts.	960705
Królik ma długie uszy i krótki ogon.	Rabbits have long ears and short tails.	960715
We Francji panuje zdrowa demokracja.	France is a vibrant democracy.	960730
Czy powiedzieli ci, gdzie parkować samochód?	Have you been told where to park your car?	960797
Byłeś kiedyś w operze?	Have you ever been to an opera?	960831
Ściągałeś kiedyś na egzaminie?	Have you ever cheated on an exam?	960843
Nieznany człowiek odezwał się do mnie.	A stranger spoke to me.	960886
Jadłeś kiedyś mięso wieloryba?	Have you ever eaten whale meat?	960895
Mówiłeś komuś o przyjęciu-niespodziance?	Have you told anyone about the surprise party?	960904
Policjant dał mu mandat.	The policeman fined him.	960910
Te ceny są z księżyca wzięte!	These prices are outrageous!	960912
Ile kalorii jest w stu gramach masła?	How many calories are in 100 grams of butter?	961042
Do ilu szkół w sumie chodziłeś?	How many different schools have you attended?	961045
Ile dostałeś za swój stary samochód?	How much did they give you for your old car?	961059
Nie wiem jak zlikwidować swój ostatni wpis.	I can't figure out how to delete what I just posted.	964439
Mogę ci zanieść te walizki.	I can carry those suitcases for you.	964912
Jeden język nigdy nie wystarcza.	One language is never enough.	964970
Niemiecki jest najlepszym językiem świata.	German is the best language in the world.	964971
Uważam spaghetti za jedno z najlepszych dań na świecie.	I consider spaghetti to be one of the greatest foods in the world.	965015
Nie zjadłem wszystkiego, co mi podała.	I didn't eat everything that she served me.	965043
Twoja przeszłość mnie nie interesuje.	I don't care about your past.	965051
Myślę, że wiele osób jest niezadowolonych ze swojej pensji.	I don't think many people can say they are satisfied with their salary.	965176
Myślę, że nie zasłużyłem na swoją karę.	I don't think that I deserved the punishment I got.	965180
Nie chce mi się z tobą gadać.	I don't want to talk to you.	965218
Musiałem poprosić o pożyczkę.	I found it necessary to get a loan.	965227
Nie cierpię zazdrosnych kobiet.	I hate jealous women.	965290
Mam wielu przyjaciół, którzy są rodzimymi użytkownikami tego języka.	I have many friends who are native speakers.	965313
Po drodze do domu spotkałem psa.	I met a dog on my way home.	965322
Mam mnóstwo jedzenia w spiżarni.	I have plenty of things to eat in the pantry.	966780
Nie byłem tu od czasu tamtego fatalnego wypadku.	I haven't been back here since that unfortunate incident.	966787
Słyszałem, że on jada żaby.	I hear that he eats frogs.	966793
Mam nadzieję, że się zdrowo odżywiasz.	I hope that what you are eating is healthy.	966834
Wiem, że masz konflikt z matką.	I know that you have issues with your mom.	966943
Nigdy nie sądziłem, że do tego dojdzie.	I never thought we'd end up like this.	967025
Jestem bardzo głodny, bo nie jadłem nic od wczesnego rana.	I'm pretty hungry since I haven't eaten since early this morning.	967035
Widziałem wczoraj człowieka, który wyjadał resztki ze śmieci.	I saw a man yesterday eating from a garbage can.	967073
Powinienem był słuchać uważniej.	I should have listened more carefully.	967076
Od jak dawna jest chora?	How long has she been ill?	967595
Japonia ma nadmiar ryżu, Europa – wina.	Japan has a surplus of rice, Europe of wine.	967637
Nie powinienem był stawiać mojego laptopa tak blisko krawędzi stołu.	I shouldn't have put my laptop so close to the edge of the table.	968888
Nie powinienem był wysyłać tego maila.	I shouldn't have sent that email.	968889
Ona martwi się o twoje bezpieczeństwo.	She's worried about your safety.	968900
Chyba wolę biały ryż od brązowego.	I think I like eating white rice better than brown rice.	968999
Chyba mam kłopot z moją żoną.	I think I'm in trouble with my wife.	969004
Ten statek zaraz opuszcza port.	The ship is about to leave port.	969014
Chyba niemożliwe, by rośliny odczuwały ból.	I think it's unlikely that plants feel pain.	969061
Dwa razy siedem jest czternaście.	Two times seven is fourteen.	969806
Powiedziałem ci, żeby nie włączać świateł.	I told you not to turn on the lights.	969858
Jesień była długa i niezbyt chłodna.	The autumn was long and mild.	969953
Kiedyś marzyłem, że będę milionerem.	I used to dream about being a millionaire.	969957
Kiedyś marzyłem, że będę bogatym przedsiębiorcą.	I used to dream about being a successful businessman.	969958
Ta płyta należy do mojego syna.	This CD belongs to my son.	970386
Chciałbym się nauczyć mówić bardziej jak rodzimy użytkownik.	I want to learn to sound more like a native speaker.	970449
Wychowałem się we wschodniej części Bostonu.	I was raised on the east side of Boston.	970515
Chciałbym być bardziej spontaniczny.	I wish I could be more spontaneous.	970536
Chciałbym nauczyć się kontrolować swój apetyt.	I wish I could figure out how to control my appetite.	970554
Chciałbym umieć grać na flecie tak jak Ian Anderson.	I wish I could play the flute as well as Ian Anderson.	970781
Chciałbym umieć tak śpiewać jak Lady Gaga.	I wish I could sing as well as Lady Gaga.	970968
Chciałbym nie musieć już tego robić.	I wish we didn't have to do this any longer.	970979
Nie będę startował na burmistrza.	I won't be running for mayor.	970981
Zastanawiam się, czy kiedykolwiek ci na mnie zależało.	I wonder if you have ever really cared for me.	972868
Chciałbym wiedzieć, kiedy mi oddasz nożyczki, które ci pożyczyłem.	I'd like to know when you plan to give me back the scissors I lent you.	972932
Chciałbym, żebyś mi pomógł zbierać drewno na ognisko.	I'd like you to help me gather some firewood.	973094
Chętnie przyszedłbym z wizytą.	I'd love to come and visit.	973098
Wolałbym raczej zjeść coś prostego.	I'd rather eat something simple.	973101
Za kilka chwil będę gotów.	I'll be ready in a few moments.	973109
Oddzwonię, jak tylko będę mógł.	I'll call back as soon as I can.	973114
Do zobaczenia w przyszłą środę.	I'll see you next Wednesday.	973146
Mam problem ze współlokatorem. Zjada mi jedzenie.	I'm having trouble with my roommate. He eats all my food.	973175
Pisarz ze mnie żaden.	I'm not much of a writer.	973237
Jestem raczej pewien, że mój kot zjadł mojego chomika.	I'm pretty sure that my cat ate my hamster.	973244
Jestem tak głodny, że zjadłbym konia z kopytami.	I'm so hungry I could eat a horse.	975015
Mam już dosyć opowiadania ci o tym.	I'm tired of talking to you about this.	975031
Zawsze chciałem wejść na szczyt Fuji.	I've always wanted to climb Mt. Fuji.	975041
Nie miałem problemów z szefem.	I've had no problems with my boss.	975079
Nigdy nie jadłem żywej ośmiornicy.	I've never eaten a live octopus.	975958
Zmieniłem ostatnio markę pasty do zębów.	I've recently changed brands of toothpaste.	975992
Jeśli chcesz do mnie przyjechać, przyjeżdżaj.	If you want to come for a visit, please do.	977989
Faktem jest, że lawiny schodzą zwykle po pożarach w górach.	That's the fact that avalanches occur after mountain fires.	980199
Obcokrajowcom nie jest łatwo uczyć się japońskiego.	It is difficult for a foreigner to study Japanese.	980209
Pokonali nasz zespół trzema bramkami.	They defeated our team by three goals.	980235
Brakuje moich bagaży.	My luggage is missing.	981807
Zamiast jeść warzywa, wkłada je do blendera i wypija.	Instead of eating vegetables, he puts them in a blender and drinks them.	982397
Czy zdrowe jedzenie jest droższe?	Is eating healthy more costly?	982431
Proszę, zamykaj drzwi!	Please close the door!	982469
Żadna z piłek nie jest żółta.	None of the balls are yellow.	982473
Czy jedzenie wieprzowiny to grzech?	Is eating pork a sin?	982509
Czy jedzenie surowych jajek jest niebezpieczne?	Is eating raw eggs safe?	982515
Czy jedzenie wieprzowiny naprawdę jest niezdrowe?	Is eating raw pork really bad for you?	982516
Czy jedzenie surowej dyni jest bezpieczne?	Is eating raw pumpkin safe?	982532
Chyba czas na nas, zmywajmy się stąd.	Isn't it about time to get out of here?	982573
Nie rozumiem, dlaczego nie możemy tu siadać.	It doesn't make much sense to me that we aren't allowed to sit here.	982594
Komitet składa się z piętnastu osób.	The committee consists of fifteen people.	983727
Co z ciebie za typ!	What a man you are!	984681
To może się wydawać uciążliwe, ale per saldo będziesz zadowolony.	It may seem like a lot of trouble to go through, but in the end, you'll be happy you did it.	987540
Chyba wreszcie przyszło lato.	It seems like summer is finally here.	987554
Chyba pora deszczowa wreszcie się skończyła.	It seems like the rainy season is finally over.	987556
Coś mi się widzi, że wstałeś dziś lewą nogą.	It seems like you got up on the wrong side of the bed this morning.	987565
Wybrał dla niej świąteczny prezent.	He selected a Christmas gift for her.	988624
Wczoraj w nocy bolała mnie trochę głowa.	I had a slight headache last night.	988682
Nie mogła przyjść z powodu choroby.	Because of illness, she couldn't come.	988692
Nie jest łatwo wychowywać nie swoje dziecko.	It's difficult bringing up a child who is not your own.	989370
Trudno jest wychowywać cudze dziecko.	It's difficult bringing up a child who is not your own.	989371
Można jeść zielony groszek na surowo.	It's possible to eat green beans raw.	989388
Raczej nie zrobił nic złego.	It's unlikely that he did anything wrong.	989434
Mało prawdopodobne, by wymiana baterii załatwiła problem.	It's unlikely that replacing the battery will fix the problem.	989509
Mało prawdopodobne, by ten film przyniósł duże zyski.	It's unlikely that that movie will make a lot of money.	989511
Wybacz, ale bez gumki nic z tego.	Sorry, I won't do it without a rubber.	991164
Uczenie się kolokacji to krok naprzód w znajomości języka.	Learning collocations is one step towards sounding like a native speaker.	991205
Powiem ci coś w zaufaniu.	Let me tell you a secret.	991216
Wiele osób uważa, że zabytkowe samochody są za drogie.	Many people think that antique cars are overpriced.	991320
Czy mogę pożyczyć gumkę do mazania? Chyba zgubiłem swoją.	May I use your eraser? I seem to have lost mine.	991321
Najczęściej jada kanapkę z masłem orzechowym na drugie śniadanie.	Most days he eats a peanut butter sandwich for lunch.	991325
Nie dziel skóry na niedźwiedziu.	There's many a slip 'twixt the cup and the lip.	991328
Większość ludzi uważa morderstwo za zło.	Most people consider murder wrong.	993779
Mój pies czasem je trawę.	My dog sometimes eats grass.	996897
Moja ulubiona ryba to łosoś.	My favorite fish to eat is salmon.	996898
Mój syn nigdy nie je szpinaku.	My son never eats his spinach.	997603
Nikt nie chciał rozmawiać o tym zdarzeniu.	Nobody wanted to talk about the incident.	997619
Od rana wszystko się pieprzy.	Nothing has gone right all day.	997621
Zawsze chciałem popłynąć na rejs statkiem.	One thing I've always wanted to do is go on a sea cruise.	997720
Zawsze chciałem prowadzić własną restaurację.	One thing I've always wanted to do is run my own restaurant.	997744
Trzeba ci wiedzieć, że mam obsesję punktualności.	One thing you should know about me is that I'm obsessed with punctuality.	998690
Cebulę można jeść na surowo lub gotowaną.	Onions can be eaten raw or cooked.	998708
Nasz jedyny świadek odmawia zeznań.	Our only witness is refusing to testify.	998711
To, czy przeżyjemy, zależy od szybkiego znalezienia wody do picia.	Our survival depends on finding drinking water soon.	998731
Turcja była silniejsza od Grecji.	Turkey was stronger than Greece.	999160
Mój ojciec jest świetnym rybakiem.	My father is a skilled fisherman.	999174
Ile to przystanków stąd?	How many stops is it from here?	999175
Wolę lemoniadę od oranżady.	I like lemonade more than orangeade.	999176
Zobacz, co mi przyniosła na urodziny!	Look what she brought me for my birthday!	999188
Daj mi chwilę przerwy.	Please give me a break.	999222
Wsyp czipsy do miski, nie jedz bezpośrednio z paczki.	Please put the potato chips in the bowl. Don't eat them directly from the bag.	999228
Zrób mi drugą kawę, a zjem następnego pączka.	Pour me another cup of coffee and I'll eat another doughnut.	999239
Łosoś jest moją ulubioną rybą.	Salmon is my favorite fish to eat.	999303
Pokaż mi swój nowy system katalogowania.	Show me your new filing system.	999374
Załoga przygotowywała się do lotu w kosmos.	The crew prepared for the voyage to outer space.	999452
Nie chcę jechać do Włoch.	I don't want to go to Italy.	1000621
Włamywacz dostał się do domu tymi drzwiami.	The burglar gained access to the house through this door.	1000638
Trzeba ci wiedzieć, że nie lubię zmieniać przyzwyczajeń.	Something you should know about me is that I'm a creature of habit.	1002541
Trzeba ci wiedzieć, że mam lęk wysokości.	Something you should know about me is that I'm afraid of heights.	1002543
Trzeba ci wiedzieć, że tonę po uszy w długach.	Something you should know about me is that I'm deeply in debt.	1002544
Trzeba ci wiedzieć, że w głębi serca jestem wiejskim chłopakiem.	Something you should know about me is that I'm very much a country boy at heart.	1002545
Stres może mieć niesłychanie negatywny wpływ na nasze zdrowie.	Stress can have an enormous negative impact on your health.	1002592
Ten lekarz specjalizuje się w leczeniu chorób związanych z jedzeniem.	That doctor specializes in helping those with eating disorders.	1002708
Przydały się te obcęgi.	That pair of pliers came in handy.	1002711
Ten polityk twierdził, że je tylko jedzenie z miejscowych gospodarstw.	That politician claimed that he only ate local farm products.	1002712
Do twarzy ci w tej koszuli.	That shirt looks good on you.	1002715
W kraju demokratycznym ważna jest wolność prasy.	In a democracy, it is important for journalism to be independent.	1002720
Moim ulubionym sportem jest piłka nożna.	My favorite sport is soccer.	1002947
Czas czyni włosy siwymi.	Time turns hair gray.	1003754
Lubię geografię i historię.	I like geography and history.	1004547
Poprosiłem go o zrobienie czterech kopii listu.	I asked him to make four copies of the letter.	1005021
Witam. Mógłbym rozmawiać z panem Johnsonem?	Hello. May I talk to Mr Johnson, please?	1014381
Cała jego rodzina jest taka. Są jak dwie krople wody.	His whole family is like that. They're like peas in a pod.	1042371
To jest stacja TV, w której mój wujek jest prezenterem.	This is the TV station where my uncle works as an announcer.	1049167
On jest moim dobrym partnerem.	He is my good partner.	1051158
On użył jej roweru nie pytając o zgodę.	He used her bike without asking permission.	1051159
To mój ulubiony kawałek na tej płycie.	This is my favorite track on the entire disc.	1059691
Jest Anglikiem, ale mieszka w Indiach.	He's an Englishman, but lives in India.	1065874
Nie kładź łokci na stole.	Don't put your elbows on the table.	1069624
Chcę zjeść gorącą zupę.	I want to eat warm soup.	1080743
Najwyższy czas, abym wymienił swoje okulary!	It's high time I change my glasses!	1085517
Po przyjeździe na dworzec zadzwoniłem do kolegi.	I called my friend after arriving at the station.	1086311
To się stało pierwszego maja.	It happened on the 1st of May.	1086522
Mój awans zależy od jego decyzji.	My promotion hangs on his decision.	1090698
Mój ojciec zmarł na raka płuc.	My father died of lung cancer.	1090705
Jest też sprzedawcą.	He's also a salesman.	1104485
Mam nadzieję że twoja podróż służbowa do Francji była udana?	I hope your business trip to France was successful.	1108486
Klimat tutaj jest łagodniejszy niż w Tokio.	The climate here is milder than that of Tokyo.	1110134
Kiedyś we wsi mieszkał pewien niegrzeczny chłopiec.	Once there lived a naughty boy in this village.	1110200
Czy jest w pobliżu bankomat?	Is there a cash machine close by?	1112248
Krzesło jest daleko od drzwi.	The chair is far from the door.	1112315
Hotel znajdował się blisko jeziora.	The hotel was hard by the lake.	1113006
Mam córkę, która wyszła za mąż za Francuza.	I have a daughter who's married to a Frenchman.	1114159
Kiedy mieszkaliśmy w Nowym Jorku, wynajmowaliśmy mieszkanie.	When we lived in New York, we rented out the apartment.	1118621
Mój tata jest wolny w sobotę.	My dad's free on Saturday.	1119095
To jabłko ma kwaśny smak.	This apple tastes sour.	1131017
Chciałam iść na koncert.	I wanted to go to the concert.	1132886
Po przyjeździe na dworzec zadzwoniła do matki.	On arriving at the station, she rang up her mother.	1133366
Jej ulubionym przedmiotem jest matematyka.	Her favourite subject is Mathematics.	1133711
Nadała imiona wszystkim kwiatom w ogrodzie.	She named all the flowers in the garden.	1134172
Holandia jest małym krajem.	Holland is a small country.	1136156
Ptaki zazwyczaj budzą się wcześnie rano.	Birds usually wake up early in the morning.	1144289
W tym zdaniu jest błąd.	There is an error in this sentence.	1148030
Bóg stworzył człowieka na swoje podobieństwo.	God created man in his own image.	1152468
Czy chciałbyś jeszcze trochę sosu?	Would you like some more gravy?	1160632
Niedobrze mi. Chce mi się wymiotować.	I feel very sick. I want to throw up.	1165186
To jasne, że ukradł pieniądze z sejfu.	It's clear that he stole money from the safe.	1165267
Usiadł obok niej z zamkniętymi oczyma.	He sat beside her with his eyes closed.	1165280
Dokładny czas ich przyjazdu nie jest znany.	The precise time of their arrival is not known.	1166341
Oni się przytulają i całują.	They are hugging and kissing.	1166348
Oko za oko, ząb za ząb.	An eye for an eye.	1170240
Spaliśmy w namiocie.	We slept in a tent.	1170263
Psy, które szczekają, nie gryzą.	Dogs that bark don't bite.	1170352
Wdowa miała trzy córki.	A widow had three daughters.	1170358
Nie robi nic poza czytaniem mangi.	He does nothing but read manga.	1171221
Czerwone kółka na mapie oznaczają szkoły.	Red circles on the map mark schools.	1176384
Czy wiesz, jak się wymawia to słowo?	Do you know how to pronounce this word?	1176460
Dni stają się coraz krótsze.	The days are drawing in.	1176739
W tej sprawie zadecydował Sąd Najwyższy.	That matter was decided by the Supreme Court.	1177837
Nawet mu powieka nie drgnęła na wieść o śmierci żony.	He did not even raise an eyebrow at the news of his wife's death.	1180281
Nie samym chlebem żyje człowiek.	Man lives not by bread alone.	1180620
Rozejrzałem się dokoła, ale nic nie zobaczyłem.	I looked around, but saw nothing.	1181511
To dziecko nawet nie wie, jak się dodaje.	The child does not even know how to add.	1182198
Mam zawroty głowy i zbiera mi się na wymioty.	I feel sort of dizzy and I feel like throwing up.	1185394
Rzuciła się na niego z pięściami.	She attacked him with her fists.	1185410
Wielu studentów szuka tymczasowej pracy.	Many students are looking for part-time jobs.	1188465
Podróż trwała czternaście miesięcy.	The voyage lasted 14 months.	1188471
Oni są profesorami.	They are professors.	1189468
Zwykle naprzeciwko dworca są taksówki.	There are usually taxis in front of the train station.	1199932
Chodzą słuchy, że znalazła nową pracę.	There are rumors that she found a new job.	1207307
Pracowałem na rocznej umowie o pracę.	I worked on a yearly contract.	1215214
Koło mojego domu jest kościół.	There is a church near my house.	1239930
Obcokrajowcy całkiem dobrze mówią po japońsku.	The foreigner speaks Japanese fairly well.	1273569
Napisz swoje nazwisko wielkimi literami.	Write your name in capitals.	1284540
Pies wysunął się z obroży bez żadnego wysiłku.	The dog slipped its collar without any difficulty.	1302773
Zbudował jej regał na książki.	He built her a bookshelf.	1313327
Koty uwielbiają biegać za kłębkiem wełny.	Cats love to run after balls of wool.	1315252
Alicja używa słodkich perfum.	Alice wears a sweet perfume.	1315266
Tak, powinieneś ćwiczyć każdego dnia.	Yes, you need to practice every day.	1347882
Duże frytki i dwie średnie cole.	One large fries and two medium cokes.	1348380
Czy mógłbyś dać mi kartkę z adresem tego hotelu?	Could you give me a card with this hotel's address?	1348407
Z powodu mgły samolot został zawrócony do Monachium.	Because of the fog, the airplane has been rerouted to Munich.	1348408
Zoologia i botanika zajmują się badaniem życia.	Zoology and botany deal with the study of life.	1348605
Wygrała pierwsza nagrodę na wystawie.	She won first prize in the exhibition.	1348627
Jego hobby to malowanie obrazów.	His hobby is painting pictures.	1348700
Ten plastik nie został uszkodzony przez ogień.	This plastic is not damaged by fire.	1348710
Pomnik został ustawiony w parku.	The monument was set up in the park.	1348818
Przepraszam za decydowanie za Ciebie.	I'm sorry for having deceived you.	1349000
Mam dość słuchania wciąż tych samych rzeczy.	I am tired of hearing the same thing so often.	1349056
Wszystkie pieniądze z kasy zostały ukradzione.	All money from the counter was stolen.	1349073
Mój szwagier jest policjantem.	My brother-in-law is a policeman.	1350122
Pies zjadł zegarek oraz japoński wentylator.	The dog ate a watch and a Japanese fan.	1350281
Tata dał mi na urodziny szczeniaka.	My father gave me a puppy for my birthday.	1350296
Plony zostały zniszczone przez powódź.	The crops were damaged by the flood.	1350398
Ciśnienie wciąż rośnie.	The pressure's still rising.	1350431
Mój ojciec ma niebieski i szary krawat.	My father has a blue and gray tie.	1350467
Przynieś wiadro jabłek.	Bring a bucket of apples.	1350528
Opowiedz mi swoją wersję wydarzeń.	Tell me your version of the events.	1351000
Jego inteligencja i doświadczenie pozwoliły mu uporać się z problemem.	His intelligence and experience enabled him to deal with the trouble.	1351121
Bez twojej porady zostałbym okradziony z mojej torby.	Without your advice, I would have been robbed of my bag.	1351459
Ostatniej nocy było dla mnie zbyt duszno, by spać.	It was too muggy for me to get to sleep last night.	1351558
Kieszonkowcy mogą działać na tym obszarze.	Pickpockets may operate in this area.	1351700
Potwierdzili, że była to prawda.	They asserted that it was true.	1351852
Podoba mi się ten z białym pasem.	I like the one with a white belt.	1352086
Cały czas mdleje.	She faints all the time.	1352133
Odpowiednie kwalifikacje są wymagane na to stanowisko.	Proper qualifications are required for the position.	1352139
Żądają skrócenia czasu pracy.	They are demanding shorter working hours.	1352145
Kupiła szczotkę do włosów i szczoteczkę do zębów.	She bought a hair brush and a tooth brush.	1353128
Dziś są wybory w Polsce.	Today is election day in Poland.	1353202
Na biurku leży kartka.	There is a card on the desk.	1353397
Mój starszy brat zarządza tą firmą.	My older brother manages that company.	1353484
Po jego akcencie mogę powiedzieć, że jest Niemcem.	I can tell by his accent that he is German.	1353754
Ta rakieta należy do mnie.	This racket belongs to me.	1353851
Narciarstwo to mój ulubiony sport.	Skiing is my favorite sport.	1353953
Niski wzrost to wada siatkarza.	Being short is a disadvantage to a volleyball player.	1353975
Moim ulubionym sportem jest narciarstwo.	My favorite sport is skiing.	1353981
Lubi grać w piłkę nożną, gdy jest wielu kibiców.	He likes playing soccer with a lot of people watching.	1354002
Zawodnicy po grze byli w doskonałych nastrojach.	The players were in high spirits after the game.	1354071
Od takiego drania nie wziąłbym nawet kiełbasy.	I wouldn't even accept kielbasa from a bastard like that.	1354277
Nic nas nie łączy.	We have nothing in common.	1354639
Strach zaraża i niszczy wszystko, czego się dotknie.	Fear infects and corrupts everything it touches.	1355956
Mała myszka biegnie z ciastkiem.	A small mouse runs with a cake.	1357112
Dzieci bawią się razem w piaskownicy.	Children are playing together in the sandbox.	1357143
Marek jest taki uczciwy że każdy go za to chwali.	Mark is so honest that everybody commends him for it.	1359672
Na ścianie wisiał portret starego mężczyzny.	A portrait of an old man was hanging on the wall.	1359961
Technologia rozwinie się bardzo w latach dziewięćdziesiątych.	Technology will make a lot of progress in the nineties.	1359973
Kelner, proszę o wodę.	Waiter, please bring me some water.	1360001
Ona go zatrudniła.	She hired him.	1361733
Zbiornik paliwa w samochodzie jest pełen.	The fuel tank in the car is full.	1361800
Ta firma produkuje telewizory.	This company manufactures televisions.	1361821
Z balkonu jest piękny widok.	The balcony commands a splendid view.	1361822
Wysusz spodnie na kaloryferze.	Dry the pants on the radiator.	1362762
Zrobiłem szarlotkę dla ciebie.	I made an apple pie for you.	1399625
To nie jest pomyłka.	There's no mistake.	1410289
Mam bardzo dużo haseł do zapamiętania.	I have to memorize a lot of passwords.	1412619
On wie dużo o sprawach zagranicznych.	He knows a lot about foreign affairs.	1416420
Mój współlokator uczy się chińskiego.	My roommate is learning Chinese.	1416690
Zegar jest nad kominkiem.	The clock is above the fireplace.	1449605
Byłem zawiedziony Twoją nieobecnością.	I was disappointed at your absence.	1452399
Każdego roku, miliony ludzi umierają z głodu.	Millions of people starve to death every year.	1453619
Czy rozpoznaje Pan osobę na zdjęciu?	Can you recognise the person in this picture?	1453680
Szybko dostosowywał się do nowych warunków.	He quickly adjusted to the new situation.	1456687
Jak dużo papierosów mogę zabrać z powrotem nie płacąc cła?	How many cigarettes am I allowed to take back duty free?	1464090
Rząd zapewni firmom uczestniczącym w programie, kredyty wolne od odsetek.	The government will provide interest-free loans to firms that participate in the program.	1465581
Jest kierownikiem działu marketingu.	He is the manager of the marketing department.	1465827
Nie lubię horrorów.	I don't like scary movies.	1470522
Żaden z tych kwiatów nie jest z plastiku.	None of the flowers are made of plastic.	1470625
Czy skończył Pan składanie zamówienia?	Have you finished ordering?	1470632
Lekarz nalegał, żeby pacjent dużo wypoczywał.	The doctor insisted that the patient get plenty of rest.	1470648
Dawniej msza była odprawiana po łacinie.	The mass used to be said in Latin.	1472947
Jim to skrócona wersja imienia James.	Jim is short for James.	1473285
Dowiedziałem się, ze zdziwieniem, że ona nie żyje.	I found, to my surprise, that she was dead.	1473838
Akcje tej firmy wygenerowały duży zysk.	The company shares give a high yield.	1474320
Widziana z odległości, jest piękna.	Seen from a distance, she's a beauty.	1474451
W przeciwieństwie do brata nie umiem pływać.	Unlike my brother, I can't swim.	1480663
Zapomniałem, że mam słabą pamięć krótkoterminową.	I forgot I have a bad short-term memory.	1499797
Wszystkie wydarzenia opisane w tym opowiadaniu są wymyślone.	All the events described in this story are imaginary.	1505213
Nie mam ochoty na wódkę.	I don't feel like drinking vodka.	1518039
Wymieniłem się z nim znaczkami.	I exchanged stamps with him.	1531990
Lemoniada jest zimna.	The lemonade is cold.	1541612
Powiedziałem mu, żeby nie rzucał kamieniami.	I told him not to throw stones.	1560071
Mogłem zostawić mój portfel w autobusie.	I may have left my wallet on the bus.	1560072
Kupiła dwa tuziny jajek.	She bought two dozen eggs.	1563933
Xavier jest młodym studentem studiującym ekonomię na uniwersytecie w Paryżu.	Xavier is a young student studying economics at the University of Paris.	1568593
Nie ma Pan żadnej gorączki.	You don't have a fever.	1568595
Ręcznik jest w łazience.	The towel is in the bathroom.	1571136
Człowiek urodzony w Hiszpanii to Hiszpan.	A person who is born in Spain is a Spaniard.	1576489
Wszystkie te jabłka są bardzo słodkie.	All of these apples are very sweet.	1581307
Ściany mojego pokoju są zielone.	The walls of my room are green.	1583709
Ona mnie przyniosła kubek herbaty bez cukru.	She brought me a cup of tea without sugar.	1583718
Ja nie wiem niczego o ziemniakach.	I don't know anything about potatoes.	1583721
Dużo czapli żyje na tych bagnach.	Lots of herons live in the marsh.	1587747
To bagno jest głębokie do kolan.	The marsh is knee-deep.	1587749
Świadkowie Jehowy są znani z głoszenia od drzwi do drzwi.	Jehovah's Witnesses are known for their door-to-door preaching.	1587757
Ogrzewanie nie działa.	The heating doesn't work.	1587761
Ona wierzy w bociany.	She believes in the stork.	1587771
Liście brzozy już zżółkły.	The birch leaves have already turned yellow.	1587775
Musiał ciężko pracować dniami i nocami.	He had to work hard day and night.	1587804
Drewniane budynki łatwo się zapalają.	Wooden buildings catch fire easily.	1587827
Zaraził się katarem od siostry.	He got a cold from his sister.	1589536
Ukroił siostrze kromkę chleba.	He cut his sister a piece of bread.	1589538
Wrócił z warsztatu.	He returned from the workshop.	1589555
Sport odgrywa ważną rolę w życiu towarzyskim.	Sports play an important role in social life.	1590493
Naprawiłem mu radio.	I mended the radio for him.	1591100
Do odważnych świat należy.	Fortune favours the bold.	1591104
Lubisz kobiety z dużymi piersiami czy z małymi?	Do you like women with large or small breasts?	1591692
Został złapany na kradzieży jabłek.	He was caught stealing apples.	1591797
Spotkajmy się przed teatrem.	Let's meet in front of the theater.	1591806
Gazeta jeszcze nie opublikowała swego artykułu.	The newspaper hasn't published his article yet.	1592127
Hotel szuka nowego szefa recepcji.	The hotel is looking for a new head receptionist.	1592173
Papier się zaklinował i drukarka nie działa.	A piece of paper got jammed in the printer and now it doesn't work.	1593397
Chciałabym wyjechać za granicę.	I want to go abroad.	1602867
On jest uparty jak osioł.	He is stubborn as a mule.	1603390
Zachowałem spokój i nic nie powiedziałem.	I kept still and said nothing.	1603872
Miłość nie wybacza.	Love does not forgive.	1603976
Jego kłopoty jeszcze się nie skończyły.	His troubles are not over.	1604057
Nie można pić wody morskiej, bo jest zbyt słona.	You can't drink seawater because it's too salty.	1604080
Poeci piszą wiersze.	Poets write poems.	1605589
Jeden z pocisków uszkodził mu kręgosłup.	One of the bullets damaged his spine.	1605831
Wymiotowałem wczoraj wieczorem.	Last night I threw up.	1611401
W Rosji Radzieckiej radio słucha słuchacza!	In Soviet Russia, radio listens to the listener!	1611415
Żaden z moich studentów nie oblał.	None of my students failed.	1614283
To była odważna decyzja.	It was a bold decision.	1614328
Różni ludzie wierzą w różne rzeczy, ale prawda jest jedna.	Different people believe in different things, but there is only one truth.	1618158
Ten sernik jest za słodki.	This cheesecake is too sweet.	1622998
Nie sposób skutecznie przeanalizować danych, jeśli się nie narysuje wykresu.	You cannot analyse the data efficiently unless you draw a plot.	1623007
Moje oceny w szkole były przeciętne.	My school marks were average.	1626221
Nie przerywaj gry.	Don't stop playing.	1626311
Nasze ciała są ogrodami, w których ogrodnikiem jest nasza wola.	Our bodies are our gardens, to which our wills are gardeners.	1627358
Ten chleb jest bardzo smaczny.	This bread is very delicious.	1627982
Gdzie jest wasz dział z bielizną?	Where is your underwear section?	1632560
Podaj mi, proszę, sól i pieprz.	Please give me salt and pepper.	1634414
Wytrzymywałem z nią tak długo, jak potrafiłem.	I put up with her as long as I could.	1640771
Ma Pan doświadczenie zawodowe?	Do you have work experience?	1640793
Chciałbym kiedyś pojechać do Egiptu.	I'd like to visit Egypt someday.	1645326
Jego Wysokość czeka.	His Majesty is waiting.	1648747
Został potrącony przez samochód i zginął na miejscu.	He was run over and killed on the spot.	1648822
Anglik nie wymówiłby tego w taki sposób.	An Englishman would not pronounce it like that.	1648848
To nie jest droga, a ścieżka.	It's not a road, but a path.	1654102
Lekarz jej to dał.	The doctor gave it to her.	1659855
Zeschły liść spadł na ziemię.	A dead leaf fell to the ground.	1659893
Mój ojciec pracuje w fabryce.	My father works in a factory.	1660215
On ma bóle głowy.	He has a headache.	1660302
Dobrze jest uczyć się na błędach innych.	It's nice to learn from others' mistakes.	1663391
Brakuje mu świadomości tego, że jest członkiem społeczeństwa.	He lacks consciousness that he is a member of society.	1689646
Róża jest kwiatem a gołąb jest ptakiem.	A rose is a flower and a dove is a bird.	1716548
Każdy może używać tego słownika.	Anyone can use this dictionary.	1729030
Obaj doszli do tego samego wniosku.	The two came to the same conclusion.	1729033
Jest oskarżony o porwanie.	He's being accused of kidnapping.	1729041
To są komputery różnego typu.	These computers are different types.	1742982
Dziś mój syn kończy cztery lata.	Today my son turns four years old.	1772603
Nikt nawet nie widział niczego podobnego.	No one had even seen something like it.	1772607
Oni ładują teraz węgiel na statek.	They are loading coal into a ship now.	1782481
Uciekli we wszystkie możliwe kierunki.	They fled in all possible directions.	1782507
Biały papier leży na stole.	There's a sheet of white paper on the table.	1789929
Nie mogę brać prysznica w nocy.	I cannot take a shower at night.	1822341
Ile ci płacą w tej robocie?	How much does the job pay?	1844995
Czy ktoś ma korkociąg?	Does anybody here have a corkscrew?	1846091
Wracać na statek!	Get back to the ship.	1846130
Ja jestem z Chorwacji.	I'm from Croatia.	1846177
On cierpi na nagłe napady kaszlu.	He suffers from sudden fits of coughing.	1889748
Ta dwujęzyczna szkoła uczy angielskiego i portugalskiego.	The bilingual school teaches English and Portuguese.	1889755
Ta firma wydała oświadczenie dla prasy.	The company issued a press release.	1920861
Ceny nieruchomości idą w górę.	Property prices are going up.	1930431
Niestety, Apple nie udziela gwarancji na przypadkowe uszkodzenia.	Unfortunately, Apple does not provide a warranty for accidental damages.	1945769
Tylko koty rodzą się w tak prosty sposób.	Only cats are born simply like that.	1964281
Ona uderzyła mnie w głowę młotkiem.	She hit me on the head with a hammer.	1972169
Zarabia trzy razy tyle co ja.	He earns three times more than me.	1973667
Ostatnie postępy w medycynie są niezwykłe.	The recent advances in medicine are remarkable.	1973677
Co jest większe, Japonia czy Anglia?	Which is larger, Japan or England?	1976991
Na biurku jest książka o tańcu.	There's a book about dancing on the desk.	1976993
Wygląda na nieświadomego konfliktu między moim ojcem i mną.	He doesn't seem to be aware of the conflict between my father and me.	1982535
Nie mógł uwierzyć w jej historię.	He couldn't bring himself to believe her story.	1982559
Nie mój cyrk, nie moje małpy.	Not my problem.	1983781
Pomogła starszemu mężczyźnie przejść przez ulicę.	She helped the old man cross the road.	1987744
Mamy rezerwację na szóstą trzydzieści.	We have a reservation for six-thirty.	1989192
Będę pracować w czasie przerwy wiosennej.	I'm going to work during the spring vacation.	1989198
Trzymałem się liny mocno żeby nie spaść.	I held on to the rope tightly so I wouldn't fall.	1989212
Nie mogłam przyjść na jego przyjęcie urodzinowe.	I wasn't able to go to his birthday party.	1989214
Popełniłem duży błąd na teście.	I made a serious mistake on the test.	1991698
Myślę, że to szczera kobieta.	I think she's an honest woman.	1991701
Zawsze piję rano dwie filiżanki kawy.	I always drink two cups of coffee in the morning.	1992779
Światło lampy migotało we mgle.	The light of the lamp glimmered in the fog.	1995721
Całość jest większa niż suma poszczególnych części.	The whole is greater than the sum of the parts.	1997160
Mój stary gubi własne klucze co najmniej raz w tygodniu.	My dad loses his keys at least once a week.	2002330
Ciastko jest pod stołem.	A cookie is under the table.	2005835
Wietrzny dzień, czyż nie?	It is windy today, isn't it?	2005843
Nasz plan ma wiele dodatkowych zalet.	Our plan has many additional advantages.	2005872
Zrobiłem duży błąd na teście.	I made a bad mistake on the test.	2006029
Nie ważne ile zje, nigdy nie przybiera na wadze.	No matter how much she eats, she never gains weight.	2006050
Jak długo ta zimna pogoda będzie się jeszcze utrzymywać?	How long will this cold weather continue?	2011208
Szukam kogoś z kim mógłbym wymieniać się wiedzą.	I am looking for someone to share knowledge with.	2024665
Kapelusz w tym stylu jest obecnie bardzo modny.	This style of hat is very fashionable at the moment.	2024926
Użyj tego jako kremu do ciała po wyjściu z prysznica.	Use it as a body cream when you get out of the shower.	2026164
On jest w kwiecie wieku.	He is in the prime of life.	2027385
Moim celem jest zawód lekarza.	My aim is to become a doctor.	2045584
Nie sądzę, że jest szczery.	I don't think he is sincere.	2105520
Moi dziadkowie mieszkają w białym domu.	My grandparents live in the white house.	2116713
Wieloryby mogą pozostawać zanurzone przez długi czas.	Whales can remain submerged for a long time.	2118735
Setki pól zostały zatopione podczas powodzi.	Hundreds of fields were submerged in the flood.	2118736
Mam sporo problemów z gramatyką niemiecką.	I'm having a hard time with German grammar.	2120099
Muszę naładować baterię w komórce.	I need to charge my mobile.	2120100
Jest tylko jeden sklep na całej wyspie.	There is only one store on the whole island.	2120182
Ta trójka to jego córki.	Those three are his daughters.	2120198
Jest trochę nieśmiała.	She is a little shy.	2120200
Wynajęli pokój na górze studentowi.	They rented the upstairs room to a student.	2120204
Gazety sprzedawane są w kiosku.	Newspapers are sold in the kiosk.	2122242
To jest smak zwycięstwa.	This is the taste of victory.	2133654
Twój kraj jest niesamowity!	Your country is amazing!	2137673
Co to za budynek za szpitalem?	What's that building behind the hospital?	2138822
Moja babcia uwielbia oglądać telewizję.	My grandmother loves watching TV.	2138845
Wygrał pierwszą nagrodę na turnieju szachowym.	He won the first prize at the chess tournament.	2138865
Powiedział mi o zmianie w planie.	He told me about the change in the plan.	2138872
Wyszedł z pokoju jak tylko weszłam.	He left the room as soon as I entered it.	2138887
Nie jest osobą która zawsze krytykuje innych.	He's not the kind of person who always criticizes others.	2138901
Wyglądał na rozczarowanego wynikami.	He seemed disappointed with the results.	2138902
Uważa się za świetnego poetę.	He thinks that he is a great poet.	2138919
Pod stołem jest trochę ciastek.	There are some cookies under the table.	2138921
Kobieta przytuliła dziecko.	The woman hugged the baby.	2138942
Obiecał, że przyjdzie, ale nie przyszedł.	He promised to come, but he didn't come.	2138968
Ogrzewanie naszego akademika nie działa poprawnie.	Our dorm's heating system isn't working properly.	2138973
Naprawił mi zegarek.	I had him fix my watch.	2138981
Łatwo jest pracować w dżinsach.	It's easy to work in jeans.	2139008
Nie kłam. Mów prawdę.	Don't lie. Tell the truth.	2139011
Pomógł mi w przeprowadzce.	He helped me move.	2139049
Co powinnam zrobić następnie?	What should I do next?	2139051
Dobry trener jest jak ojciec dla swoich graczy.	A good coach is like a father to his players.	2139109
Wielu ludzi ginie w wypadkach drogowych.	Many people die in traffic accidents.	2139123
Widziałeś kiedykolwiek jak śpiewa na scenie?	Have you ever heard her sing on stage?	2139127
Mówią, że nigdy się nie zapomina swojej pierwszej miłości.	They say that you never forget your first love.	2139132
Dlaczego nie mogłeś przyjść w sobotę?	Why couldn't you come on Saturday?	2139142
W mojej kuchni jest pożar.	There's a fire in my kitchen.	2140609
Nie lubi przegrywać.	He doesn't like to lose.	2145078
Nowa hala jest dwa razy większa od starej.	The new hall is double the size of the old one.	2145298
Samolot odleciał i wkrótce zniknął z zasięgu wzroku.	The plane took off and was soon out of sight.	2146518
Nie przeklinaj, bo inaczej wymyję ci usta mydłem.	Don't curse or I'll wash your mouth out with soap.	2148262
Który z tych dwóch jest cięższy?	Which is the heavier of the two?	2148267
Nie chcę tłumaczyć tego zdania.	I don't want to translate this sentence.	2148304
Ostatniej nocy ciężko pracował na polu.	He was working hard on the field last night.	2148327
Ten człowiek mówi po angielsku z niemieckim akcentem.	The man speaks English with a German accent.	2148631
Po co ci ta wykałaczka?	Why do you need this toothpick?	2148696
Dziś jest pierwszy września.	Today is 1st September.	2149158
Nauczanie dzieci jest łatwiejsze niż uczenie dorosłych.	Teaching children is easier than teaching adults.	2150115
Nie wyrzucaj tego magazynu. Nie czytałem go jeszcze.	Don't throw out this magazine. I haven't read it yet.	2150197
Nie można użyć tego kranu. Jest zepsuty.	You can't use this faucet. It's out of order.	2152029
Doświadczenie pokazało, że pieniądze nie przynoszą szczęścia.	Experience has shown that money does not bring happiness.	2152963
Nie chce mi się dzisiaj palić.	I don't feel like smoking today.	2153055
Nigdy nie wybieraj zawodu tylko dlatego, że wygląda na opłacalny.	Never choose a vocation just because it looks profitable.	2154198
Wszystkie pielęgniarki tego szpitala są bardzo uprzejme.	All the nurses at this hospital are very kind.	2154633
Wielu ludzi żyje przyszłością, nie teraźniejszością.	A lot of people live for the future, not for the present.	2155360
Bank jest obok poczty.	The bank is next to the post office.	2169507
Witam, jak się miewasz?	Hello, how are you doing?	2175906
Już czas otworzyć trzecią szafę.	It's time to open the third wardrobe.	2177625
Wiele jest mostów w tym mieście.	There are many bridges in this city.	2177654
Ziemia naszego sąsiada wydaje lepsze plony niż nasza.	Our neighbor's ground yields better corn than our own.	2185796
Zarabiam niewiele (jak każdy), ale ponadto dostaję premię.	I don't earn that much (like anyone), but at least I'm getting a raise.	2186150
Potrzebuję łyżki, widelca i noża. Dziękuję.	I need a spoon, a fork, and a knife. Thank you.	2186575
Autorstwo tego obrazu jest przypisywane Monetowi.	This painting is attributed to Monet.	2189370
Nie możesz kupić tego leku bez recepty.	You can't buy this medicine without a prescription.	2189394
To nie była zgoda.	It wasn't a permission.	2194250
Z którego peronu odjeżdża pociąg?	What platform does the train leave from?	2194292
Mój wnuk jest synem mojego syna.	My grandson is the son of my son.	2196534
Nie przypominaj mi.	Don't remind me.	2202242
Wygląda na to, że jedziemy na tym samym wózku.	It seems we are in the same boat.	2205173
Dom jest zbudowany z czerwonych cegieł.	The house is built of red bricks.	2205258
Nie jest człowiekiem godnym zaufania.	He is not a man to be trusted.	2211655
Zakończenie jest dużo ciekawsze.	The ending is much more interesting.	2211722
Pochowano go na tym cmentarzu.	He was buried in this graveyard.	2211834
To jedzenie jest za słone.	This food is too salty.	2211936
Ten człowiek to legenda.	This man is a legend.	2212199
Pies mojego sąsiada nie zje suchej karmy.	My neighbor's dog won't eat dry dog food.	2212671
Jego poglądy stoją w zgodzie z moimi.	His views are in accord with mine.	2212716
Jaki jest twój ulubiony deser z truskawkami.	What's your favorite dessert with strawberries?	2216917
Te nożyczki dobrze tną.	These scissors cut well.	2216922
Lęk zawsze bierze się z niewiedzy.	Fear always springs from ignorance.	2216972
Krykiet jest grą wymagającą umiejętności.	Cricket is a game that takes skill.	2217755
Krótki film z Ukrainy wygrał konkurs w Berlinie.	A short film from Ukraine won the contest in Berlin.	2224162
Z jednej strony jest miły, ale z drugiej leniwy.	On one hand he is kind, but on the other hand he is lazy.	2235049
Byłam w górach.	I was up in the mountains.	2242336
Mieszka na przedmieściach Tokio.	He lives in the suburbs of Tokyo.	2247043
Jej skóra jest gładka.	Her skin is smooth.	2247822
Jego skóra jest gładka.	His skin is smooth.	2247823
On nie jest lekarzem, tylko pielęgniarzem.	He's not a doctor, but a nurse.	2250498
Dla niej praca i rodzina to były synonimy.	For her, work and family were synonymous.	2250765
To jest przedział dla niepalących.	This is a non-smoking compartment.	2254460
Autobus spóźnił się z powodu korków.	The bus was late because of the traffic jam.	2255549
Wielu poznało go w Europie, gdzie był lubianym wykładowcą.	Many knew him in Europe, where he was a popular lecturer.	2255963
Króliki umieją pływać?	Can rabbits swim?	2264538
Wątpliwość chroni przed ryzykiem.	Doubt protects you from risk.	2265142
Programy do DTP są stworzone specjalnie do tego celu.	Desktop publishing programs are created especially for this purpose.	2265296
Mięśnie mnie bolą od gry w tenisa.	My muscles ached from playing tennis too much.	2265386
Książka zawiera piętnaście biografii.	The book contains fifteen biographies.	2279495
Niestety, ta plotka jest prawdziwa.	Unfortunately, that rumor is true.	2282456
On umie grać na flecie.	He can play a flute.	2282480
Znalazłem rękawiczki które były pod krzesłem.	I found the gloves that were under the chair.	2282487
Myślę, że moja dziewczyna jest urocza.	I think my girlfriend is kind of cute.	2282526
Mamy pół tuzina jajek.	We have a half-dozen eggs.	2282535
Komputery są ciągle ulepszane.	Computers are constantly being improved.	2289967
To jest trójkąt.	This is a triangle.	2294793
Jego walizka była wypełniona wodą.	His briefcase was filled with water.	2301480
Nie przeszkadza mi upał.	I don't mind if the weather is hot.	2301524
Ta herbata jest zbyt gorzka.	This tea is too bitter.	2302796
Gdy tylko mnie zobaczyła, zaczęła płakać.	As soon as she saw me, she started to cry.	2302799
Wyglądasz na zajętą.	You look busy.	2302801
Zatrudnił kilku nowych pracowników.	He hired some new workers.	2302828
Drodzy bracia i siostry!	Dear brothers and sisters!	2309450
Wielu Niemców ma blond włosy i niebieskie oczy.	Many Germans have blonde hair and blue eyes.	2333374
Wszystko idzie według planu.	Everything's going according to plan.	2338098
Poważnie traktują edukację swoich dzieci.	They are earnest about their children's education.	2342715
Dwa lata temu pojechałem do Chin.	Two years ago I went to China.	2368973
Cały kraj o tym mówi.	The whole country talks about it.	2378410
Moja ojczyzna jest tam, gdzie moja dusza.	My fatherland is there, where my soul is.	2382902
Po deszczu nastąpił spadek temperatury.	There was a drop in temperature after the rain.	2385816
Ręce do góry! To napad.	Hands up! This is a robbery.	2391507
Pobierz opłatę z mojego konta.	Charge it to my account.	2395785
Z powodu złej pogody samolot miał trzygodzinne opóźnienie.	Due to bad weather, the plane arrived three hours late.	2395843
To jak szukanie igły w stogu siana.	It is like looking for a needle in a haystack.	2397194
Które podania podobają ci się najbardziej?	Which applications do you like best?	2403025
Imigranci napływali do kraju.	Immigrants streamed into the land.	2405790
Jest dla mnie zerem.	He is just a Mr Nobody.	2408661
Wnuki są dowodem, że dzieci do czegoś się przydają.	Grandchildren are proof that some good comes from having children.	2417195
Proszę napisać liczebniki cyframi.	Please write down the numbers using cyphers.	2427688
Nigdy nie słyszałem żeby tak płakał.	I have never heard him crying like this.	2428864
Nagle usłyszałem głośny huk burzy.	Suddenly I heard a loud clap of thunder.	2429546
Grzmot oznacza, że burza jest blisko.	Thunder indicates that a storm is near.	2429558
Czy my widzieliśmy wojsko?	Did we see the army?	2429572
Nie chcę pracować w tych warunkach.	I don't want to work under these conditions.	2439066
Poszedł do dentysty.	He went to the dentist.	2467072
Chciałabym zarezerwować miejsce w tym pociągu.	I'd like to reserve a seat on this train.	2470043
Jest tym, co nazywamy molem książkowym.	She is what we call a bookworm.	2470082
Zgubiłem ubezpieczenie zdrowotne.	I lost my health insurance.	2482471
Dziewczyny jedzą ich kanapki.	The girls are eating their sandwiches.	2499512
Gdzie jest pralnia?	Where is the laundry mat?	2499526
Na tej fotografii wyglądasz świetnie!	You look great in this photo!	2499532
Kompozytorzy tworzą muzykę.	Composers create music.	2500333
Masło jest robione z mleka.	Butter is made from milk.	2514918
Dlaczego nie przymierzysz tego żółtego swetra?	Why don't you try on this yellow sweater?	2514939
Musimy wybrać jedną spośród tych aplikacji.	We must select one from among these applicants.	2514945
Zapomniałem swój pin.	I've forgotten my pin number.	2515480
Wikipedia jest najlepszą encyklopedią w Internecie.	Wikipedia is the best encyclopedia on the Internet.	2516034
Przepraszam, muszę iść na siłownię.	I'm sorry, but I have to go to the gym.	2519086
To łóżko jest bardzo wygodne.	The bed is very comfortable.	2519093
Pięć podzielone na trzy równa się jeden, reszta dwa.	Five divided by three equals one and a remainder of two.	2570940
Gdzie jest sól, jest życie.	Where there is salt, there is life.	2570966
Nie należy mnożyć bytów bez potrzeby.	Entities must not be multiplied beyond necessity.	2571063
Zrobił się czerwony ze wstydu.	He turned red with shame.	2575798
Na jego twarzy pojawiła się wysypka.	A rash appeared on his face.	2586970
Mój ojciec jest przedsiębiorcą.	My father is an entrepreneur.	2587124
Ta restauracja przyjmuje jedynie gotówkę.	This restaurant only accepts cash.	2587154
Moja babcia miała udar.	My grandmother had a stroke.	2587191
Nigdy nie byłem w Turcji.	I have never been to Turkey.	2587196
Liść jest częścią rośliny.	A leaf is part of a plant.	2599345
Ilu ludzi mieszka na Antarktydzie?	How many people live in Antarctica?	2601510
To zjawisko nie jest nowe.	This is not a new phenomenon.	2607518
Ona jest uparta.	She is obstinate.	2610491
Uczę mojego kota załatwiać się w kuwecie.	I'm teaching my cat to do its business in the sandbox.	2615127
Kotka śpi na stole.	The cat is sleeping on the table.	2659025
Siostra mojej mamy to moja ciocia.	The sister of my mother is my aunt.	2665441
Przepraszam, czy to nie pomyłka?	Excuse me, isn't it a mistake?	2669298
Krzyczeć na całe gardło.	To scream at the top of your lungs.	2673423
Przeszedł ci już katar?	Have you got over your cold yet?	2679327
Nie mogę sobie pozwolić na dalsze opóźnienia.	I can afford no further delay.	2679335
Wykład rozpoczyna się o ósmej.	The lecture starts at 8 o'clock.	2679407
Wszyscy ludzie są z natury dobrzy.	All humans are good at heart.	2679425
To mąż mojej siostry. Jest moim szwagrem.	He's my sister's husband. He's my brother-in-law.	2679436
Żyje od pierwszego do pierwszego, bez żadnych oszczędności.	He lives from hand to mouth without saving a penny.	2679510
Nie ma lekarstwa na osobowość.	There is no cure for personality.	2679985
Tradycja ta była przekazywana z pokolenia na pokolenie.	This tradition has been passed down from generation to generation.	2679991
Wesołych świąt i szczęśliwego Nowego Roku!	Merry Christmas and a Happy New Year!	2679998
Ten stół to bezcenny zabytek.	This table is a priceless antique.	2680411
Wszystkie garnitury mam szyte na miarę.	I have all suits made to order.	2680540
Oni lubią grać w śniegu.	They like to play in the snow.	2681741
Ćwiczył pod kierunkiem znawcy.	He was trained by an expert.	2707370
Zgubiłem zegarek, który dał mi ojciec.	I lost the watch that my father gave me.	2707565
Żywność w Niemczech jest tania.	Food is cheap in Germany.	2707566
Zapomniała o swojej pierwszej rocznicy ślubu!	She forgot her first wedding anniversary!	2725513
On wącha zupę.	He is smelling the soup.	2725521
Pojutrze chciałbym z tobą porozmawiać.	I would like to talk to you the day after tomorrow.	2725538
Tata i mama poszli na rynek.	Dad and Mom went to the market.	2734068
Czy czarna herbata jest zdrowa?	Is black tea healthy?	2734220
Miał dobre zdanie o jej umiejętnościach.	He had a high opinion of her abilities.	2752984
Te bliźnięta są podobne jak dwie krople wody.	These twins are like two peas in a pod.	2757020
Mój kierownik pozwolił mi na wzięcie wolnego dnia.	My placement supervisor allowed me to take a day off.	2757225
Nie lubię mięsa. Wolę dietę wegetariańską.	I don't like meat. I prefer a vegetarian diet.	2757398
Oni jedzą nożem i widelcem.	They eat with a knife and fork.	2759086
Delfiny są bardzo inteligentne.	Dolphins are very intelligent.	2759618
Jak oni przeżyli ostrą zimę w tym namiocie?	How will they get through the cold winter in that tent?	2767712
Marchewki są jeszcze gorsze niż cebule.	Carrots are even worse than onions.	2770188
Nie lubię marchewki jeszcze bardziej niż cebuli.	I hate carrots even more than I hate onions.	2770191
Dziecko nie jest dorosłą osobą.	A child is not a mature person.	2774807
Dawaliśmy im pieniądze i odzież.	We gave them money and clothes.	2774851
Słownictwo jest na biurku.	The dictionary is on the desk.	2778541
Tą firmą zarządza cudzoziemiec.	That company is managed by a foreigner.	2778611
Zapytałem ją, czy była kiedyś w Meksyku.	I asked her if she had been to Mexico.	2782929
Kościół jest między moim a twoim domem.	The church is between my house and yours.	2784726
Wygrał wiele zawodów.	He won many competitions.	2784847
Jest utalentowanym, młodym reżyserem.	He's a talented young director.	2784867
Jest utalentowanym, młodym kierownikiem.	He's a talented young director.	2784870
Czy dobrze ci się układa z twoim szefem?	Do you get along with your boss?	2792528
Wypiszę panu receptę.	I'll give you a prescription.	2809337
Chciałbym spojrzeć na ten wykres.	I'd like to look at that graph.	2809369
Uczy się angielskiego odkąd skończyła dziesięć lat.	She has been studying English since the age of ten.	2809426
Skorzystajmy z długiego weekendu.	Let's take advantage of the long weekend.	2809439
Zamówiłem dwie herbaty i trzy kawy.	I ordered two teas and three coffees.	2809446
Nigdy wcześniej nie widziałem tego gatunku ryby.	I had never before seen this species of fish.	2809451
Słyszałem, że dobrze jest schłodzić tył szyi gdy jest rozgrzana.	I hear that it's good to cool the back of your neck when it's hot.	2809467
Mój kot biega po pokoju.	My cat is running around the room.	2809468
To nie krew. To tylko czerwona farba.	This isn't blood. It's just red paint.	2809502
Nie jest biznesmenem, a dyplomatą.	He is not a businessman but a diplomat.	2810141
No weźcie, chłopaki. To już nie jest śmieszne.	Come on, guys. This is not funny anymore.	2810154
Teraz rozumie co mam na myśli.	Now she understands what I mean.	2810155
Nie mam pracy, więc nie mogę oszczędzać.	Since I don't have a job, I can't save money.	2810157
Ożenił swoją córkę z młodym prawnikiem.	He has married his daughter to a young lawyer.	2810190
Nie sięgam niczego z górnej półki.	I can't reach anything on the top shelf.	2810207
Pieniądze wpływają na wszystko.	Money influences everything.	2810276
Zdecydował się studiować medycynę na uniwersytecie.	He made up his mind to study medicine at university.	2810300
Nie będę zatrzymywał cię dłużej niż potrzebuję.	I won't keep you any longer than I need to.	2810303
W skrócie, nie chcę byś pracował dla tej firmy.	In short, I don't want you to work for that company.	2810306
Faktem jest, ze ona nie zauważyła różnicy.	The fact is that she didn't notice the difference.	2825943
Szerszenie są lepsze od ich reputacji.	Hornets are better than their reputation.	2826058
Jest tam zniżka dla studentów ?	Is there a student discount?	2832430
Idę do apteki kupić lekarstwa.	I'm going to the pharmacy to buy medicine.	2833592
Mój ojciec chrzestny dał mi zegarek jako prezent.	My godfather gave me a watch as a gift.	2834263
Otrzymałem zegarek jako prezent od mojego ojca chrzestnego.	I received a watch as a gift from my godfather.	2834264
Potwierdził, że coś jest nie tak z jego autem.	He confirmed that something was wrong with his car.	2838138
Niemożliwym jest nauczenie się angielskiego w miesiąc.	It's impossible to learn English in a month.	2838154
Twój kaszel jest przyczyną palenia.	Your cough is the consequence of smoking.	2838222
Nie jest Amerykaninem, ale lubi Amerykę.	He's not an American, but he likes America.	2838230
Proszę, przynieś mi kartkę papieru.	Bring me a sheet of paper, please.	2838409
Chciałby przymierzyć to o rozmiar mniejsze.	I'd like to try on one size smaller than this.	2838463
Pamiętaj o miłości i zapomnij o reszcie.	Remember what you love and forget about the rest.	2842148
Na końcu zdania brakuje kropki.	The end of the sentence is missing a full stop.	2847041
Brakuje kropki na końcu zdania.	The full stop is missing at the end of the sentence.	2847046
Czy więcej jest wodnych czy lądowych zwierząt?	Are there more water or land animals?	2852881
To nieszczęście jest efektem jego lenistwa.	This misery resulted from his laziness.	2886836
Zamówiliśmy parę nowych książek z zagranicy.	We ordered some new books from abroad.	2900632
Nie wkładaj wszystkich jajek do jednego koszyka.	Don't put all your eggs in the same basket.	2909693
Cytryna jest kwaśna.	Lemon is sour.	2920940
On cię wykorzystuje.	He's using you.	2921086
Proszę, pokaż mi swój szczegółowy plan.	Please show me your detailed plan.	2921112
Mój pokój to chlew.	My room is a pigsty.	2921118
Mówiłem ci, że to ryzykowne.	I told you it was a risk.	2921131
Zabrałem mojego psa do weterynarza.	I took my dog to the vet.	2921137
To jest pierwsze zdanie, które dodałem.	That's the first sentence I added.	2939725
Moje niemowlę chce mówić.	My baby wants to talk.	2939750
To było dzieło sztuki, o którym często mówili.	That was a masterpiece they often talked about.	2977249
Nie pokazuj mi więcej jej zdjęcia.	Don't show me her picture anymore.	2977456
Nigdy wcześniej nie byłem za granicą.	I've never been abroad before.	2979377
Te podatki poniosły ceny na wszystkie towary.	These taxes raised the prices on all goods.	2979589
Ceny rosną z dnia na dzień.	Prices rise from day to day.	2979590
W sezonie turystycznym wiele hoteli podnosi ceny.	In the tourist season, many hotels raise prices.	2979595
Nasz budżet jest bardzo ograniczony.	Our budget is very limited.	2979816
Nie mogę znaleźć mojego portfela.	I can't find my wallet.	2979834
W muzeum jest wystawa starożytnych broni.	There's an exhibition of ancient weapons at the museum.	2979836
Wszystko zakończyło się szczęśliwie.	Everything turned out all right in the end.	2981544
O której godzinie jest zaplanowany przylot?	What's the flight's scheduled arrival time?	2981971
Nie potrzebuję więcej pożyczek.	I do not need a loan anymore.	2981996
Nauczył się pisać liczebniki zanim poszedł do szkoły.	He learned to write numerals before he went to school.	2983799
Ta nowa drużyna jest w stanie wygrać.	The new team has the capability to win.	2992724
Mam skarpetki, ale nie mam żadnych butów.	I have socks, but I have no shoes.	2992803
Ten samochód jest ładniejszy od twojego.	This car is prettier than yours.	2992875
Nasi ludzie nie jeżdżą taksówkami do piekarni.	Our people don't take a taxi to the bakery.	2992887
Nie jestem jeszcze dobry w mówieniu po angielsku.	I'm not good at speaking English yet.	2995985
Muszę jutro jechać do Danii.	I have to go to Denmark tomorrow.	2998160
Ta książka jest bardzo popularna wśród kobiet.	This book is very popular among women.	2998189
Ta książka jest odpowiednia dla początkujących.	This book is suitable for beginners.	2998192
Jest pilna wiadomość do ciebie.	There is an urgent message for you.	2998315
Jeśli teraz jesteś zajęty, oddzwonię później.	If you are tied up now, I'll call you back later on.	3000029
Dziękujemy za cierpliwość, ponieważ musimy odpowiadać na wiele połączeń.	Thank you for being patient as we respond to the high volume of calls.	3000261
Nie ignorowałem cię.	I wasn't ignoring you.	3002123
Nie unikałem cię.	I wasn't avoiding you.	3002126
To biurko zajmuje zbyt dużą część pokoju.	This desk takes up too much room.	3004358
To biurko jest używane przeze mnie.	This desk is used by me.	3004410
Nie zwracaj uwagi na to, co mówi.	Don't take any notice of what he says.	3004464
Chciałbym dokonać rezerwacji na pociąg ekspresowy odjeżdżający o szóstej wieczorem.	I'd like to make a reservation for the express train that leaves at 6:00 p.m.	3005000
Idź prosto wzdłuż tej ulicy.	Go straight along this street.	3005234
Idź wzdłuż tej ulicy około pięciu minut.	Go along this street about five minutes.	3005235
Mam bzika na punkcie piłki nożnej.	I'm crazy about football.	3009386
Moja siostra lubi słodycze.	My sister likes sweets.	3009600
To się często zdarza jesienią.	This was happening often in the autumn.	3011927
Jego marzeniem jest studiowanie chemii w Stanach.	His dream is to study chemistry in the US.	3013287
Moja siostra wyszła za kolegę z liceum.	My sister married one of her high school classmates.	3016097
To, ile ci zapłacimy, zależy od twoich umiejętności.	How much we pay you depends on your skill.	3017702
Myślałem, że zamierzałeś to zrobić.	I thought you were going to do this.	3017742
Zdjęcie mojego dziadka jest na ścianie.	My grandfather's picture is on the wall.	3019566
Mój były chłopak wychował się w Portugalii.	My ex-boyfriend was brought up in Portugal.	3019578
Na własną odpowiedzialność będę działał według tego planu.	On my own responsibility, I will go on with this plan.	3019617
Nie przesadzaj teraz.	Don't exaggerate now.	3026078
Jesteś uparty jak zawsze.	You're as stubborn as ever.	3026110
Jaki jest twój ulubiony rodzaj jogurtu?	What's your favorite brand of yogurt?	3026114
Nie mam ubezpieczenia.	I have no insurance.	3028771
Przegraliśmy wynikiem trzy do jednego.	We lost by a score of three to one.	3029827
Trzech mężczyzn groziło mu nożami.	Three men menaced him with knives.	3029833
Troje ludzi podało trzy różne wersje wypadku.	The three people gave three different accounts of the accident.	3029850
Trzej chłopcy otworzyli drzwi budynku.	The three boys opened the doors of the building.	3029874
Trzej chłopcy wdrapali się na drzewa niczym stado małp.	Three boys climbed the trees like a bunch of monkeys.	3029876
Każdy z trzech chłopców wygrał nagrodę.	Each of the three boys won a prize.	3029879
Z trójki chłopców, najmłodszy jest najatrakcyjniejszy.	Of the three boys, the youngest is the most attractive.	3030219
Po trzech tygodniach spędzonych na szukaniu, znalazł dobrze płatną pracę.	After spending three weeks looking for a job, he found a well-paid one.	3030222
Opowiedział dzieciom o swoich przygodach w Afryce.	He told the children about his adventures in Africa.	3031566
Gram w siatkówkę na plaży.	I'm on the beach playing volleyball.	3031599
Jest mężczyzną słabego charakteru.	He is a man of weak character.	3031618
Zdecydowałeś się na wyjazd do Japonii?	Have you decided to go to Japan?	3031627
Samochód nie jest dzisiaj dostępny.	The car is not available today.	3031870
Staw jest małym jeziorem.	A pond is a little lake.	3031989
Mamy tego samego dentystę.	We have the same dentist.	3032243
Nie interesuje mnie żadna twoja teoria.	I'm not interested in any of your theories.	3032325
Zwiedziłem Boston już kilka razy.	I've visited Boston a few times.	3032372
W Japonii, jest teraz trzecia nad ranem.	In Japan, it's now 3:00 a.m.	3032403
Mój ojciec ustawił budzik na szóstą.	My father set the alarm for six o'clock.	3032478
Nie możesz zrobić omletów bez rozbicia jajek.	You cannot make omelets without breaking eggs.	3033453
Ona kładzie dzieci do łóżek.	She puts the children to bed.	3033466
Kobieta, której mąż nie żyje, jest nazywana wdową.	A woman whose husband is dead is called a widow.	3033478
Wyjechała do Włoch, żeby studiować literaturę.	She went to Italy to study literature.	3033485
Ona chce studiować muzykę i taniec.	She wants to study music and dance.	3033486
Dodaję śmietankę do mojej kawy.	I put cream in my coffee.	3033657
Dodał mleko do swojej kawy.	He put milk in his coffee.	3033671
Nie rób takiej kwaśnej miny.	Don't make such a sour face.	3033713
Już próbowałem na trzy różne sposoby.	I've already tried three different ways.	3033929
Próbowałem już trzech różnych metod.	I've already tried three different methods.	3033930
Próbowałem już od trzech różnych stron.	I've already tried three different approaches.	3033933
Zróbmy to i idźmy do domu.	Let's get this done, so we can go home.	3034057
Zobaczmy, co mamy do zrobienia w pierwszej kolejności.	Let's see what we're up against first.	3034063
Jak pojedziesz do Rumunii, to zobaczysz więcej.	When you go to Romania, you will see more.	3034123
Jest już w drodze i przyjedzie we właściwym czasie.	He is on his way and will arrive in due course.	3034162
Ugotowała dla niego szczególny obiad.	She cooked a special dinner for him.	3034165
Chleb jest świeży.	The bread is fresh.	3034883
Ta zupa wymaga więcej soli.	This soup needs more salt.	3034926
Spędziłem trzy godziny, naprawiając samochód.	I spent three hours repairing the car.	3034941
Czasami jest za późno na przeprosiny.	Sometimes it's too late to apologize.	3035927
Oto nasz nauczyciel. Idzie bardzo powoli.	There comes our teacher. He is walking very slowly.	3035962
Chcę pożyczyć twoje auto na godzinę.	I want to borrow your car for an hour.	3036544
Został zamknięty w więzieniu za kradzież.	He was thrown in prison for robbery.	3038231
Zero jest przed jedynką.	Zero comes before one.	3038269
To nie człowiek decyduje, kiedy ktoś powinien umrzeć.	No person can decide when someone should die.	3038280
Czułem, że to było warte ryzyka.	I felt it was worth the risk.	3038350
Zaraz wrócę z państwa napojami.	I'll be right back with your drinks.	3038435
Ale, ja nie jem nawet małego kawałka mięsa.	But, I don't eat even a little bit of meat.	3038578
Lepiej od razu zrób zadanie domowe.	You'd better do your homework at once.	3041422
Spotkałem go jak wychodził ze szkoły.	I met him just as he was coming out of school.	3041726
W Singapurze przestępstwem jest plucie na ulicę.	In Singapore, it is a crime to spit on the ground.	3042770
Uczą chińskiego jako drugiego języka narodowego w Singapurze.	They teach Chinese as a second national language in Singapore.	3042773
W Singapurze przestępców kara się chłostą.	In Singapore, one way to punish criminals is to whip them.	3042778
W Singapurze jednym ze sposobów karania przestępcy jest chłostanie go.	In Singapore, one way to punish a criminal is to whip him or her.	3042841
Gdybym o tym wiedział, poszedłbym tam.	If I had known it, I would have gone there.	3044809
Spędziliśmy nasze wakacje nad morzem.	We spent our holiday at the seaside.	3044904
Byliśmy wszyscy zaskoczeni tą informacją.	We were all astonished to hear the news.	3044907
Musimy zwrócić uwagę na problemy środowiska naturalnego.	We must pay attention to environmental problems.	3044925
Drożdże grają główną rolę w procesie wzrostu chleba.	Yeast acts as an agent in making bread rise.	3046753
To jeszcze nie wyszło w gazetach.	It hasn't come out in the newspapers yet.	3048572
Zostałem zaproszony do niej na obiad.	I was invited to dinner by her.	3049162
Przyjechałem w momencie, gdy wyjeżdżała.	I arrived at the moment she was leaving.	3049186
Zauważyłem, że nosiła nowe okulary.	I noticed that she was wearing new glasses.	3049213
Ta propozycja jest zbyt dobra na odrzucenie.	The offer is too good to turn down.	3049242
Każda zasada ma swój wyjątek.	Every rule has its exceptions.	3049250
Czajnik gwiżdże na kuchence.	The kettle is whistling on the hob.	3049296
W czajniku się gotuje.	The kettle is boiling.	3049298
Ten dom z zielonym dachem jest mój.	The house whose roof is green is mine.	3049776
Nie wiedziałem, że jabłonie wyrastają z nasion.	I didn't know apple trees grow from seeds.	3049794
Kilka jabłek spadło z drzewa.	Several apples fell from the tree.	3049797
Chciałbym zobaczyć drzewa, z których zrywałeś te jabłka.	I would like to see the trees from which you picked these apples.	3049801
W ogrodzie jest mnóstwo jabłoni.	There are many apple trees in the garden.	3049806
Byłem bardzo rozczarowany tą wiadomością.	I was very disappointed at the news.	3050318
To była ulga usłyszeć tę wiadomość.	It was a relief to hear the news.	3050374
Ktoś ukradł wszystkie nasze pieniądze podczas naszej nieobecności.	Someone has robbed us of all our money during our absence.	3051092
Nie możesz założyć spółki bez ludzi.	You can't establish a company without people.	3051513
Bo wszyscy jego przyjaciele też byli biedni.	Because all his friends were poor too.	3064059
Jutro są moje urodziny i będę mieć siedemnaście lat.	Tomorrow is my birthday and I will be seventeen.	3064061
Teraz jest odpowiednie; ani za ciężkie, ani za lekkie.	It's good now; neither too heavy nor too light.	3064090
Ten kot ma piękne futro.	That cat has beautiful fur.	3064108
A zatem, kto wygrał wybory we Włoszech?	So, who won the Italian elections?	3065523
Ile z tych tabletek wziąłeś?	How many of these pills did you take?	3065550
Gdzie są twoje dokumenty?	Where are your papers?	3065552
Chciałbym wysłać tę paczkę do Kanady.	I'd like to mail this package to Canada.	3066535
Nagrywasz swoje połączenia?	Do you record your calls?	3070694
Wiem, kiedy ktoś mnie okłamuje.	I know when I'm being lied to.	3070740
Wiem, kiedy coś cię dręczy.	I know when something's bothering you.	3070746
Zostawiłeś klucze w drzwiach.	You left your keys in the door.	3079745
Przyszłość należy do tych, którzy wierzą w piękno swoich marzeń.	The future belongs to those who believe in the beauty of their dreams.	3081181
Wjechał autem w latarnię.	He ran the car into a lamppost.	3081677
Skoro chce kupić samochód, to odkłada pieniądze.	As he wants to buy a car, he puts aside money.	3081679
Oddał wszystkie pieniądze, które pożyczył.	He gave back all the money he had borrowed.	3081752
Chociaż jest młody, jest całkiem uprzejmy.	Though he is young, he is quite polite.	3082057
Jest młodym, ale zdolnym człowiekiem.	He is young, but he is an able man.	3082059
Tak czy tak nie mam własnej opinii.	I don't have an opinion either way.	3082093
Kilka dziewczyn stoi za bramą.	Several girls are standing beside the gate.	3082137
Hamulec nie działał.	The brake didn't work.	3083517
Nie zrobiliśmy nic nielegalnego.	We didn't do anything illegal.	3084384
Dał mu bryłkę srebra tak dużą, jak jego głowa.	He gave him a lump of silver as big as his head.	3084388
Nigdy nie myślałem, żeby zostać nauczycielem.	I've never thought about becoming a teacher.	3084439
W domu jest pusta sypialnia.	There's an empty bedroom in the house.	3084452
Tamten dom jest sławny.	That house is famous.	3084457
Zasługują na coś lepszego.	They deserve better.	3084469
Moja babcia wysłała dziś rano list.	My grandmother mailed the letter this morning.	3084486
Te zasady nie są zbyt jasne.	These rules aren't very clear.	3084488
Rzeka wpływa do Oceanu Spokojnego.	The river flows into the Pacific Ocean.	3085124
Chciałem cię pocałować od momentu, gdy cię ujrzałem.	I have been wanting to kiss you since the moment I saw you.	3085193
Gdy artysta dorasta, jego obrazy mogą się zmienić.	As the artist grows older his paintings may alter.	3085211
Moja temperatura wynosiła dziś rano poniżej trzydziestu siedmiu stopni.	My temperature was below thirty-seven degrees this morning.	3085220
Trening do maratonu jest wyczerpujący.	Training for a marathon is taxing.	3085224
Nie potrzebuję wózka inwalidzkiego.	I don't need a wheelchair.	3086122
Ona jest bardziej elegancko ubrana niż ja.	She is far more smartly dressed than I am.	3088510
On pracuje w tej fabryce od jedenastu lat.	He has worked in this factory for 11 years.	3093300
Nie mogła opanować swoich emocji.	She couldn't suppress her emotions.	3093304
Włochy to półwysep.	Italy is a peninsula.	3093551
Pod fotelem jest pilot do telewizora.	There's a remote control under the chair.	3094450
Skromność się na dłuższą metę nie opłaca.	Modesty doesn't pay in the long run.	3095391
Księżniczka leżała z zamkniętymi oczami.	The princess lay with her eyes closed.	3099735
Pokój jest bardzo jasny.	The room is very bright.	3099742
Tańczyła przez całą imprezę.	She kept on dancing all through the party.	3099770
Jest przystojny i mądry.	He is handsome and clever.	3099776
Zajęło mi trzy tygodnie, żeby pozbyć się grypy.	It took me three weeks to get over the flu.	3100162
Prowadzi szczęśliwe życie w swoim rodzinnym mieście.	He leads a happy life in his hometown.	3100168
Twoja twarz jest blada.	Your face is pale.	3100392
To pierwszy raz, kiedy jem we włoskiej pizzerii.	This is the first time that I've eaten in an Italian pizzeria.	3100405
Etna to wulkan we Włoszech.	Etna is a volcano in Italy.	3101147
Byłem we Włoszech wiele razy.	I've been to Italy many times.	3101155
Mój zegarek jest zepsuty, więc chcę nowy.	My watch is broken, so I want a new one.	3108900
Dokąd oni cię zabierają?	Where are they taking you?	3108911
To nie jest legalne.	It isn't legal.	3108922
Nie powinno się jeść przekąsek między posiłkami.	You shouldn't eat snacks between meals.	3111503
Musisz jeść regularnie.	You have to eat regularly.	3116579
On dzisiaj też późno wraca.	He is also returning late today.	3116584
Myślę, że uczciwość w końcu się opłaci.	I think honesty will pay off in the end.	3116591
Ile wynosi opłata za wstęp?	How much is the entrance fee?	3119328
Wyjechał do Ameryki przedwczoraj.	He left for America the day before yesterday.	3119345
Ta wysoka kobieta jest piękna.	The tall woman is beautiful.	3119365
Te nowe zasłony nie pasują do dywanu.	These new curtains don't go well with the rugs.	3125558
Jaki jest tytuł tego filmu?	What's the title of the movie?	3125568
Ja bynajmniej nie jestem nieobecny w szkole przez moje lenistwo.	I am by no means absent from this class because I am lazy.	3125673
Była dziwnym dzieckiem, cichym i zamyślonym.	She was a strange child, quiet and thoughtful.	3127268
Nancy nigdy wcześniej nie widziała pandy.	Nancy had never seen a giant panda before.	3127293
Na tym terenie rzadko pada śnieg.	It rarely snows in this area.	3127310
Muszę przypomnieć ci o twojej obietnicy.	I must remind you of your promise.	3127348
On nosi codziennie muszkę.	He wears a bow tie every day.	3127366
Nie zdążą na czas na spotkanie.	They won't be in time for the meeting.	3128468
Komin jest zbudowany z cegieł.	The chimney is built of bricks.	3135350
Ta książka jest jeszcze ciekawsza od tamtej.	This book is even more interesting than that.	3143862
To portret mojego zmarłego ojca.	This is a portrait of my late father.	3143867
Moje stawy bolą, gdy robi się zimno.	My joints ache when it gets cold.	3143885
Słyszałam, że francuski jest trudnym językiem.	I've heard that French is a difficult language.	3147395
Wejście do toalety jest bardzo brudne.	The entrance to the toilet is very dirty.	3152110
Tamci studenci oboje oblali egzamin.	Those students didn't both pass the test.	3152116
Kopiowanie to nie kradzież.	Copying is not theft.	3160310
Czemu każdy mówi tak cicho?	Why is everyone speaking so quietly?	3161379
Czajnik musi się gotować.	The kettle must be boiling.	3161553
Gra zaczyna się jutro o drugiej popołudniu.	The game starts at two tomorrow afternoon.	3169337
Ten zegarek kieszonkowy ma więcej niż siedemdziesiąt lat.	This pocket watch is more than seventy years old.	3169342
Nie możesz mieszać wody z olejem.	You can't mix oil with water.	3169345
On nie lubi sportu. Ja również.	He doesn't like sports. And neither do I.	3176873
Wyszedł z domu nie żegnając się nawet.	He left the house without so much as saying goodbye.	3176984
W płucach zmarłego znaleziono wodę.	The water was found in the dead man's lungs.	3177059
Urząd pocztowy jest niedaleko stąd.	The post office isn't too far from here.	3177063
Jaka jest różnica między wiarą a zaufaniem?	What's the difference between faith and trust?	3177099
Te spotkania nie mają końca - ani sensu.	These meetings are infinite and fruitless.	3181304
W wyniku tej wojny zginęło wielu ludzi.	Many people died as a result of this war.	3207170
Moi rodzice byli wściekli.	My parents were furious.	3232070
Widziałem tylko pierwszy odcinek.	I've only seen the first episode.	3233975
Naprawa samochodu kosztowała mnie trzysta dolarów.	It cost me three hundred dollars to have my car repaired.	3238108
Spotkałem ją na dworcu w Tokio.	I met her at Tokyo Station.	3239730
Nasze ogrodzenie jest wykonane z żelaza.	Our fence is made of iron.	3239737
Upewnij się, że wziąłeś paragon.	Make sure you save the receipt.	3239739
Ta brama jest zbyt wąska dla samochodu.	The gate is too narrow for the car.	3240221
Jeśli jest niezadowolona, nigdy tego nie okazuje.	If she was displeased, she never showed it.	3240234
Nie mam wątpliwości, że ona tu przyjdzie.	I don't doubt that she will come here.	3250291
Piraci żeglowali po siedmiu morzach.	The pirates sailed the seven seas.	3254957
Producent dał gwarancję na ten nowy sprzęt na pięć lat.	The manufacturer guaranteed the new machine for 5 years.	3257458
Zmarła w wieku siedemdziesięciu lat.	He died at the age of 70.	3257468
Zbudowali miasto w miejscu, gdzie spotykają się dwie rzeki.	They built a town in an area where two rivers met.	3257633
Nie ma powodów do zmartwień.	There is no cause for worry.	3257660
Naprawdę nie chcę Ci przeszkadzać.	I really don't want to bother you.	3271441
Nie mam pomysłu, co potem zrobić.	I have no idea what to do next.	3285511
Nie dotykaj tego, jeśli jest gorące!	Don't touch it if it's hot!	3285512
Mamy zwykły, bardzo mały dom.	We have a very small, plain house.	3285519
Prognoza pogody mówi, że jutro wieczorem będzie burza z piorunami.	The weather report said that there will be thunderstorms tomorrow evening.	3285566
Jest biedny jak mysz pod miotłą.	He's as poor as a church mouse.	3285593
Jedz nie tylko ryby, ale i mięso.	Eat not only fish, but also meat.	3289033
Zauważyłem go, jak uciekał z tamtego sklepu.	I caught sight of him escaping from that shop.	3289224
Pomidor jest owocem czy warzywem?	Is a tomato a fruit or a vegetable?	3294956
Zadzwonił do mnie o północy.	He gave me a ring at midnight.	3294996
Pies biegł w jego kierunku.	The dog was running toward him.	3294997
Ten piosenkarz jest każdemu znany.	The singer is known to everyone.	3294998
Ona chodzi do księgarni raz w tygodniu.	She goes to the bookstore once a week.	3295020
Zrobiłem coś głupiego zeszłej nocy.	I did a stupid thing last night.	3296844
Nigdy nie widziałem takiego pięknego zachodu słońca.	Never have I seen such a beautiful sunset.	3296894
Była tak piękna, że odebrało mi mowę.	So beautiful was she that I went speechless.	3296946
Ktoś mi powiedział, że zostawiłaś swojego męża.	Someone told me you left your husband.	3296982
Przeczytałem każdą książkę na półce.	I've read every book on the shelf.	3297199
Dlaczego nie przyszedłeś na moje wesele?	Why didn't you come to my wedding?	3300071
Nauczyciel przekazał jej sporo informacji o uczelni.	The teacher gave her a lot of information about the university.	3300828
Byłeś na moim weselu.	You were at my wedding.	3300910
Jak wy się wszyscy tutaj znaleźliście?	How did you all get here?	3313240
Jego pensja nie nadąża za inflacją.	His salary can't keep pace with inflation.	3313244
Do wtedy nigdy nie widziałem takiego rodzaju ryby.	I had never seen that kind of fish until then.	3313265
Wzrost populacji stał się prawdziwym problemem w kraju.	The increase in population has become a serious problem in the country.	3313268
Będę musiał się pozbyć tego zniszczonego dywanu.	I will have to get rid of this worn-out carpet.	3313287
Ten wiersz został napisany przez anonimowego poetę.	This poem was written by a nameless poet.	3313300
Próbowaliśmy ostatnio twoją metodą i nie działało.	We tried it your way last time and it didn't work.	3313334
Ona umie mówić w trzech językach.	She can speak three languages.	3326211
On szedł wzdłuż rzeki.	He walked along the river.	3326221
Często spacerowałem wzdłuż tamtej rzeki.	I used to often take walks along that river.	3326254
Ona zrobiła wiele błędów, pisząc to sprawozdanie.	She made many mistakes in typing the report.	3334691
Mężczyźni i kobiety potrzebują siebie nawzajem.	Men and women need each other.	3351287
Czy jest jeszcze kawa w kuchni?	Is there any coffee left in the kitchen?	3363174
On pije swoją kawę zawsze czarną.	He drinks his coffee black every time.	3363178
Jutro, jutro, tylko nie dzisiaj, mówią wszyscy leniwi ludzie.	Tomorrow, tomorrow, not today, all the lazy people say.	3365300
To jest rodzaj arbuza.	It's a type of watermelon.	3367822
Z roku na rok jest zanieczyszczenie środowiska większe.	From year to year, pollution is worsening.	3369222
Ile on zarabia na miesiąc?	How much does he earn per month?	3373929
Ona codziennie sprząta pokój swojej córki.	She tidies her daughter's room every day.	3375169
Czy kiedykolwiek piłeś sok z marchwi?	Have you ever drunk carrot juice?	3375601
Wilki nie jedzą sałatki.	Wolves don't eat salad.	3376541
Lisy nie jedzą sałaty.	Wolves don't eat salad.	3381839
Nie wolno ci zaniedbywać obowiązków.	You are not to neglect your duty.	3382422
Chłopiec zaniedbał podlewanie roślin i został skarcony.	The boy neglected to water the plants, and he was scolded.	3382424
Nie chciało mi się zapisywać tego w kalendarzu.	I neglected to note it in my calendar.	3382428
To jest dla mnie zbyt trudne.	This is too hard for me.	3382467
Opowiedział śmieszną historię.	He told a funny story.	3398908
Nasze plany na lato nabrały kształtów.	Our plans for the summer are taking shape.	3400705
Nie musisz brać tego faktu pod uwagę.	You need not take account of the fact.	3400787
Daj mi coś trudnego.	Give me something difficult.	3401391
Powinieneś wypełniać swoje obowiązki.	You should carry out your duty.	3407172
Indonezja składa się z wielu wysp i dwóch półwyspów.	Indonesia consists of many islands and two peninsulas.	3407177
Nie rozumiem znaczenia tego zwrotu.	I don't understand the meaning of this phrase.	3407183
Nie powinieneś jeść niczego ostrego.	You shouldn't eat anything spicy.	3407417
Pracował w ambasadzie przez trzy miesiące.	He has worked in the embassy for three months.	3409754
Podoba mi się twoje lustro.	I like your mirror.	3410260
Powinni mi dziękować.	They should thank me.	3415876
Pies gonił królika.	The dog chased the rabbit.	3415889
Byliśmy rozczarowani, bo nie mogliśmy wprowadzić w życie naszego planu.	We were disappointed because we could not carry out our plan.	3416034
To nie jest kruk, wrona ani sroka. To jest gawron.	It's not a raven, a crow, nor a magpie. It's a rook.	3416285
Jedzenie jest świeże i zdrowe.	The food is fresh and healthy.	3418062
Łatwo kroi się ser nożem.	It's easy to cut cheese with a knife.	3418072
Koty nie jedzą bananów.	Cats don't eat bananas.	3418084
To jest oszustwo.	That's cheating.	3418090
Mam ośmiu braci.	I have eight brothers.	3418111
On bardzo dobrze gra w szachy.	He plays chess very well.	3418238
Na placu jest jedynie czterystu demonstrantów.	There are only four hundred demonstrators in the square.	3418454
Zapytaj policjanta o drogę.	Ask the policeman the way.	3421026
Sędzia skazał go na rok więzienia.	The judge sentenced him to a year in prison.	3421811
Jego argumenty mnie nie przekonują.	His arguments don't convince me.	3421822
Czy dom ma jadalnię?	Has the house got a dining room?	3421827
Zapytała mnie czy umiem szyć.	She asked me if I could sew.	3421834
Nigdy nie głosowałem.	I've never voted.	3423496
Pokazała mu swoją kostkę.	She showed him her ankle.	3423550
Nie ma dziś wiatru.	There is no wind today.	3425113
Z wiekiem stał się słabszy.	He has become weaker with age.	3425212
Powiedz jej, że szyję.	Tell her that I am sewing.	3425363
Moja mama jest na diecie.	My mother is on a diet.	3425473
Nie byłem na jego pogrzebie.	I didn't attend his funeral.	3427555
Czy są tu jakieś sklepy z pamiątkami?	Are there any souvenir shops here?	3427580
Czy twój wujek nadal jest zagranicą?	Is your uncle still abroad?	3427709
Dziecko ukrywało się za dużym drzewem.	The child was hiding behind a big tree.	3427755
Wielbłądy są statkami pustyni.	Camels are the ships of the deserts.	3428105
Indie były rządzone przez Wielką Brytanię przez wiele lat.	India was governed by Great Britain for many years.	3428167
Te perły są prawdziwe, nie sztuczne.	These pearls are genuine, not artificial.	3429520
Róże w moim ogrodzie są piękne.	The roses in my garden are beautiful.	3429662
Widziałeś co stało się zeszłej nocy?	Did you see what happened last night?	3430001
Była w Ameryce w zeszłym miesiącu.	She was in America last month.	3430093
Nie mam żadnych bliskich przyjaciół.	I don't have any close friends.	3430394
Chłopak i dziewczyna siedzą na płocie.	A boy and a girl are sitting on the fence.	3432129
Daj mi pół kilo mięsa.	Give me a half-kilo of meat.	3432451
To jest niepewne.	Tom is uncertain.	3433062
Jest młoda i energiczna.	She's young and energetic.	3433363
Chowają się w lesie.	They're hiding in the woods.	3433689
Jeden ze studentów dziś nie przyszedł.	One of the students didn't come today.	3434724
Konkurs zaczyna się jutro.	The contest starts tomorrow.	3434744
Pod stołem jest mały brązowy pies.	There's a small brown dog under the table.	3435032
Trzymaj za mnie kciuki!	Keep your fingers crossed for me!	3435322
Żadne kości nie są złamane.	There are no broken bones.	3435607
On jest zazdrosny.	He's jealous.	3436238
Spojrzałem na kalendarz na ścianie.	I looked at the calendar on the wall.	3438247
Moja świnka morska była moją pierwszą dziewczyną.	My guinea pig was my first girlfriend.	3438253
Skręć w prawo na skrzyżowaniu.	Turn right at the crossroad.	3438443
Czy kiedykolwiek jadłeś w tamtej restauracji?	Have you ever eaten at that restaurant?	3441082
To jego pierwszy dzień w szkole.	It's his first day at school.	3441911
Drogie nie zawsze jest lepsze od taniego.	Expensive is not always better than inexpensive.	3447835
To nie jest masło. To margaryna.	This is not butter. It's margarine.	3449923
Ona jest podobna z charakteru do matki.	She is her mother's match in character.	3450002
Dziecko wsiadło do samolotu w dobrym humorze.	The child came aboard the plane in a good mood.	3450037
Deklaracje zmiennych są bardzo ważne w C i C++.	Declarations of variables are extremely important in C and C++.	3457053
Ten ból w żołądka jest nie do wytrzymania.	This stomachache is unbearable.	3460212
Rosja - bardzo duży kraj.	Russia is a very big country.	3460686
Powodem jego spóźnienia było to, że uciekł mu autobus.	The reason for him being late was that he had missed the bus.	3475053
Jego matka była kiedyś piosenkarką.	His mother used to be a singer.	3486168
Potrzebują ostrego noża.	They need a sharp knife.	3486178
Przejechałeś na czerwonym.	You ran a red light.	3487705
Jedyne co teraz mam to wspomnienia.	All I have now are memories.	3492061
Młody tygrys wyglądał jak duży kociak.	The tiger cub looked like a large kitten.	3492099
Prędkość to nie wszystko.	Speed isn't everything.	3495341
Przestań mnie unikać.	Stop avoiding me.	3495351
Przestań mnie kopać.	Stop kicking me.	3495355
Jest pewna subtelna różnica w znaczeniu tych dwóch słów.	There's a subtle difference in meaning between the two words.	3495409
Uważaj! Zupa jest bardzo gorąca!	Be careful. The soup's very hot.	3496363
Tętno i ciśnienie u pacjenta są w normie.	The patient's pulse and blood pressure are normal.	3496501
Śmierć jest jak wyścig, który każdy próbuje ukończyć ostatni.	Death is like a race in which everyone tries to finish last.	3500091
Co to była za piosenka, którą śpiewałeś?	What was that song you were singing?	3500578
On często jeździ do biblioteki samochodem.	He often goes to the library by car.	3501369
Deszcz to woda, która spada z chmur.	Rain is the water that falls from the clouds.	3501385
W USA co dziesięć lat odbywa się spis ludności.	In the United States, there is a census every ten years.	3502507
Może ja będę umiał ci pomóc.	Maybe I can help you.	3502796
Ile samochodów kupiła ta firma?	How many cars has that company bought?	3502815
Wszyscy właściwie siedzieli i nic nie robili.	Everyone was just sitting around doing nothing.	3510112
Nasze biuro jest bardzo wygodne dzięki klimatyzacji.	Our office is very comfortable with air conditioning.	3514216
W twoim wieku byłem już żonaty.	When I was your age, I was already married.	3516174
W twoim wieku byłam już zamężna.	When I was your age, I was already married.	3516175
Kto jest twoim ulubionym malarzem?	Who's your favorite painter?	3518419
To trudniejsze, niż się wydaje.	It's harder than it looks.	3518439
Jim lubi grać na perkusji.	Jim likes to play the drum.	3520313
Powinieneś traktować ludzi z większym szacunkiem.	You should treat people with more respect.	3520314
Zobaczyłem w jego oczach strach.	I saw fear in his eyes.	3520413
Czy zauważyłeś tam kogoś jeszcze?	Did you notice anyone else around?	3520700
Nauczyciel nam opowiedział zabawną historię.	The teacher told us a funny story.	3522504
Ta rzeka wpada do Oceanu Spokojnego.	This river flows into the Pacific Ocean.	3522515
Przyjechała akurat w momencie, gdy mieliśmy wychodzić.	She arrived when we were about to leave.	3522519
Nie powinniśmy tak zostawiać tej sprawy.	We shouldn't leave the matter unsettled.	3522589
Problem jest przez nich omawiany.	The problem is being discussed by them.	3522598
Zostawmy tę sprawę na później.	Let's leave that matter for later.	3522609
Powiedzieli, że to jest straszne.	They said it was creepy.	3524681
Nawet jeśli masz własną drogę, nie zawsze będziesz osiągać sukcesy.	Even if you have your own way, you will not always be successful.	3524749
W lodówce jest pół butelki wina.	There is a half empty bottle of wine in the fridge.	3524753
Prawie wszystko jest tak, jak za dawnych czasów.	Almost everything is as it was in the old days.	3524765
Chcę zobaczyć wulkan.	I want to see a volcano.	3524780
Żaden ze mnie tancerz.	I'm not much of a dancer.	3529742
Chleb jest w piekarniku.	Bread's in the oven.	3529754
Musiał dzielić swój pokój ze swoją siostrą.	He had to share his room with his sister.	3545419
Moje słownictwo jest ograniczone.	My vocabulary is limited.	3545435
Oboje mama i tata poszli do pracy.	Both mom and dad went to work.	3545962
Nie podoba ci się mój żółty szalik?	Don't you like my yellow scarf?	3549156
Ostatni raz widziałem go na parkingu.	I last saw him in the car park.	3549174
Chciałbym kiedyś pojechać do Afryki.	I want to go to Africa someday.	3551150
O której zamykają ten sklep?	When does the shop close?	3571174
Ciasto jest jeszcze w piekarniku.	The cake is still in the oven.	3579182
Prasowała swoją sukienkę.	She was ironing her dress.	3579403
W krzakach znaleziono martwego człowieka.	A man was found dead between the bushes.	3579405
Powódź była katastrofą dla ich społeczności.	The flood caused a disaster in their community.	3581221
Rozpuść tabletkę w szklance wody.	Dissolve the tablet in a glass of water.	3581482
Przepraszam, że naraziłam cię na tak wielki wydatek.	I'm sorry to put you to such great expense.	3581639
Przepraszam, że narażam cię na tak wielki wydatek.	I'm sorry to put you to such great expense.	3581650
Skończyłam podlewać kwiaty.	I'm done watering the flowers.	3581974
Ostatnia zima była bardzo mroźna.	Last winter was very cold.	3582019
Jego łóżko stoi pod ścianą.	His bed is next to the wall.	3582083
Wgrywam zdjęcia z sylwestra.	I'm uploading pictures from New Year's Eve.	3583210
Jeśli jedzenie jest zimne, włóż je do mikrofalówki.	If the food's cold, put it in the microwave.	3584613
Koń jest spragniony.	The horse is thirsty.	3584650
Ciężko jest mi wyrażać pomysły słowami.	It's hard for me to express ideas through words.	3584698
Goście są w salonie.	The guests are in the living room.	3584779
Z tamtego wzgórza jest bardzo dobry widok.	There's a very good view from that hill.	3584787
Nie może mnie pan zwolnić.	You can't fire me.	3587277
Nieczęsto jestem zapraszany na imprezy.	I don't often get invited to parties.	3589512
Rzadko dostaję zaproszenia na imprezy.	I don't often get invited to parties.	3589520
Mógłbyś nam powiedzieć, jakie są składniki?	Can you tell us what the ingredients are?	3596370
Nie ruszaj się, bo będę strzelał!	Don't move or I'll shoot.	3602220
Prawie wszyscy ludzie noszą ubrania.	Almost all humans wear clothes.	3603000
Możesz obejrzeć filmy z angielskimi napisami używając tego linku.	You can watch movies with English subtitles using this link.	3603021
Widziałaś moją ciocię?	Did you see my aunt?	3603057
Miłość dała mu siłę lwa.	Love gave him the strength of a lion.	3603492
W czasie wykładu bardzo się nudziła.	She was very bored during the lecture.	3603543
Te słowa pojawią się na jego monitorze.	The words would appear on his computer screen.	3603780
Może zostawiłyście to w samochodzie.	You might have left it in the car.	3604029
Słyszałem o tym w dzisiejszych wiadomościach.	I heard it on the news today.	3604830
Plaża jest bardzo zatłoczona w słoneczne dni.	The beach is packed on sunny days.	3610012
Warzywa ekologiczne są popularne, bo są bezpieczne i smaczne.	Organic vegetables are popular because they're safe and tasty.	3610711
To jest bardzo poważna sprawa.	This is a very serious matter.	3613420
Niech nikt nie zawraca mi głowy!	Don’t anyone bother me!	3614671
Wina jest po stronie mojego ojca.	The fault is on the part of my father.	3614693
Hasło jest długie.	The password is long.	3623609
Umyliśmy je w słonej wodzie.	We washed them in salty water.	3629639
Moje paznokcie są za krótkie.	My nails are too short.	3629731
Zapomniałem, że dzisiaj jest sobota.	I forgot that today was Saturday.	3629738
Ona naprawdę lubi pisać wiersze.	She really likes writing poems.	3629749
To jedzenie jest bardzo słone.	This food is too salty.	3629768
Ile musiałeś zapłacić za bilety?	How much did you have to pay for the tickets?	3630973
W tym domu jest jedenaście pokoi.	There are eleven rooms in this house.	3630990
W jego oczach zobaczyłem łzy.	I saw tears in his eyes.	3630994
To moja opinia, a nie jego.	This is my opinion, not his.	3631036
Czy w pobliżu jest apteka?	Is there a pharmacy nearby?	3631079
Słyszałaś kiedykolwiek o tak dziwnym zwyczaju?	Have you ever heard of a custom as strange as this?	3631676
Może nie powinnam była przychodzić.	Maybe I shouldn't have come.	3631689
Nie zapomnij oddychać.	Don't forget to breathe.	3631832
Kwiaty rosną na łące.	Flowers are growing in the meadow.	3632501
Często zostaje mi zadane to pytanie.	I get asked that question a lot.	3632775
Bratysława jest stolicą Słowacji.	Bratislava is the capital of Slovakia.	3633671
Napisała SMS-a do swojej dziewczyny.	She texted her girlfriend.	3634348
Zawsze zastanawiałem się, jak to jest mieć rodzeństwo.	I've always wondered what it'd be like to have siblings.	3634624
Większość osób pisze o swoim codziennym życiu.	Most people write about their daily life.	3634698
Czy on jest właścicielem tego domu?	Is he the owner of this house?	3637392
Czy ona przeczytała ten artykuł?	Has she read this article?	3637397
Moja mama nie lubi oglądać telewizji.	My mother does not like to watch the television.	3637410
Czy to miejsce nie jest wspaniałe?	Isn't this place great?	3637470
Wydaje się, że dom jest pusty.	The house appears to be empty.	3637574
Nie dam ci ani grosza więcej.	I'm not giving you any more money.	3637583
Banki są dzisiaj zamknięte.	The banks are closed today.	3637588
Wolisz herbatę z cytryną, czy z mlekiem?	Do you prefer tea with lemon or milk?	3643272
Łazienka jest na końcu korytarza.	The bathroom is at the end of the hall.	3648581
O której godzinie zaczyna się film?	What time does the movie begin?	3649417
Mogli cię za to aresztować.	You could get arrested for that.	3649438
Przestałbyś, proszę, pytać mnie o to?	Would you please quit asking me that?	3649754
Chleb jest robiony z mąki, wody i drożdży.	Bread is made from flour, water and yeast.	3652725
Na próżno próbowali przekupić świadka.	They attempted in vain to bribe the witness.	3653740
On studiuje historię na uniwersytecie.	He's studying history at college.	3653841
W przyszłości chcę być spikerem w telewizji.	I want to become a TV announcer in the future.	3653893
Byłem jedynym, który o tym wiedział.	I was the only one who knew about that.	3655046
Policjant zapytał dziewczyny, czy samochód jest ich.	The policeman asked the girls if that car was theirs.	3655081
Pozbyli się złego nawyku.	They did away with the bad habit.	3655441
Przyjeżdżam tutaj zawsze czwartego lipca.	I come here every Fourth of July.	3655443
Spędziliśmy wakacje, odkrywając francuską wieś.	We spent our holiday exploring rural France.	3655452
To dlatego lubię podróże i chciałbym doświadczać wielu różnych kultur.	That's why I like traveling, and would like to experience many different cultures.	3656277
Kiedy pies jest szczęśliwy, merda swoim ogonem.	When the dog is happy it wags its tail.	3656335
Zauważyłem, że kierowcy autobusów nie potrafią hamować.	I noticed that the bus drivers cannot brake.	3656484
Możesz pojechać autobusem lub tramwajem.	You can take a bus or a tram.	3656572
On nie umie zbyt szybko biegać.	He can't run very fast.	3656708
Dziś przyszły nowe meble.	The new furniture arrived today.	3657107
Pracuję w poniedziałki, wtorki, środy, czwartki i piątki.	I work on Mondays, Tuesdays, Wednesdays, Thursdays and Fridays.	3657370
Handel ludźmi jest przestępstwem.	Human trafficking is a crime.	3657574
Ten mężczyzna jest bardzo hojny.	This man is very generous.	3659303
On wyjechał do Londynu na początku lipca.	He left for London in the beginning of July.	3659334
Uczęszczałem do szkoły, kiedy byłem dzieckiem.	I used to go to school when I was a child.	3660464
Pracuję odkąd skończyłem czternaście lat.	I've been working since I was fourteen years old.	3660536
Moja córka często miewała ataki astmy, kiedy była dzieckiem.	My daughter often had asthma attacks when she was a child.	3662127
Ten płaszcz jest na mnie za krótki.	This coat is too short on me.	3662214
Ten odkurzacz robi mnóstwo hałasu.	This vacuum cleaner makes a lot of noise.	3664769
Podejrzewałem, że to się może stać.	I thought this might happen.	3665199
Przyszedłeś akurat na czas.	You've come just in time.	3665333
Ostatnio dużo się mówi o nauczaniu na odległość.	Recently, there's been a lot of talk about distance education.	3672712
Nie zwróciłeś jeszcze tych książek?	Haven't you returned those books yet?	3672747
Nie zwróciłaś jeszcze tych książek?	Haven't you returned those books yet?	3672748
Usłyszałem, jak moja mama śpiewa pod prysznicem.	I heard my mother singing in the shower.	3677234
W naszej klasie jest czterdziestu jeden uczniów.	Our class has 41 pupils.	3679872
Cena tego komputera jest bardzo niska.	The price of this computer is very low.	3683927
Nagle wstał z krzesła.	He suddenly rose from the chair.	3685306
Zatem nie zamierzasz nam powiedzieć, co się stało?	Well, aren't you going to tell us what happened?	3685327
W tym pokoju jest biurko.	There is a desk in this room.	3685393
Nie przeczytałeś podręcznika?	Didn't you read the manual?	3685516
Potrafisz zrobić sernik?	Do you know how to make cheesecake?	3685531
Potrafisz upiec sernik?	Do you know how to make cheesecake?	3685532
Obiecałeś nic nie robić.	You promised not to do anything.	3686922
Moja koszulka się skurczyła. Co mam robić?	I shrunk my T-shirt. What should I do?	3687204
Chciałbym wam obojgu podziękować.	I'd like to thank you both.	3695465
Chciałbym ci podziękować za współpracę.	I'd like to thank you for your cooperation.	3695468
Chciałbym ci podziękować za twój hojny wkład.	I'd like to thank you for your very generous contribution.	3695471
Chciałbym zaoferować swoje usługi.	I'd like to volunteer my services.	3695487
Pamiętam, jak oddawałem książkę do biblioteki.	I remember returning the book to the library.	3695490
Nie powinieneś mówić z pełnymi ustami.	You shouldn't speak with your mouth full.	3695597
Krowy dają nam mleko, a kury dają nam jajka.	Cows give us milk and chickens give us eggs.	3695877
Kotek próbuje się ukryć przed deszczem.	The kitty is trying to hide from the rain.	3695882
Jaka jest twoja ulubiona kreskówka?	What's your favorite cartoon?	3696390
Jakie są twoje ulubione płatki?	What's your favorite cereal?	3696392
Niektóre zwierzęta zmieniają płeć.	Some animals change gender.	3697586
Życie jest albo odważną przygodą, albo niczym.	Life is either a daring adventure or nothing.	3697610
Przepraszam, ale nie wiedziałem, że to tajemnica.	I'm sorry, but I didn't know it was a secret.	3697883
Słyszałeś, co się stało ostatniej nocy?	Did you hear about what happened last night?	3698068
Lepiej dmuchać na zimne.	Better safe than sorry.	3699913
Mówienie o muzyce to jak tańczenie o architekturze.	Talking about music is like dancing about architecture.	3703149
Młodzi ludzie z reguły są pełni energii.	Young people are usually full of energy.	3703866
Moi rodzice już nie żyją.	My parents are no longer living.	3703924
Prawda w oczy kole.	The truth hurts.	3704264
Moi rodzice byli przeciwko naszemu małżeństwu.	My parents were opposed to our marriage.	3706405
Obserwowałem ptaki na balkonie, gdy piłem kawę.	I watched the birds on the balcony while drinking my coffee.	3706409
Moglibyśmy wybrać się na kajaki w przyszły weekend.	We could go kayaking next weekend.	3706553
Omawialiśmy to mnóstwo razy.	We discussed it plenty of times.	3706564
Jej włosy miały podobny kolor do moich.	Her hair was similar in color to mine.	3706593
Nie mogę uwierzyć, że myślałeś, że oszukiwałem.	I can't believe you thought I was cheating.	3706661
Nasze kalkulacje wskazują, że rakieta jest poza swoim kursem.	Our calculations show that the rocket is off its course.	3706683
Właśnie założyli mi nowe opony w samochodzie.	I've just had new tires put on my car.	3707434
Tamtej nocy byłem naprawdę smutny.	That night, I was really sad.	3711114
Wyglądasz na zmęczonego. Powinieneś trochę odpocząć.	You look tired. You should rest a little.	3711154
Gdzie jest reszta ludzi?	Where's everyone else?	3711165
Na co wszyscy patrzą?	What's everybody looking at?	3711171
Czy człowiek może żyć, nie mając życia towarzyskiego?	Can man live without having a social life?	3713584
Na stole leżał talerz, a na nim trzy jajka sadzone.	On the table, there was a plate with three fried eggs on it.	3716114
Jedną z najtrudniejszych rzeczy na świecie jest wybaczyć.	One of the toughest things in the world to do is forgive.	3716115
Dałeś mi już jedną z tych.	You gave me one of these before.	3716622
Nie budź mnie przed dziesiątą.	Don't wake me up before 10.	3717869
Ta historia nie ma szczęśliwego zakończenia.	This story doesn't have a happy ending.	3718063
Nie możemy sprzedać tej bransoletki.	We can't sell that bracelet.	3718718
Przyjechaliśmy około czterdzieści pięć minut po zmierzchu.	We arrived about forty-five minutes after sunset.	3718746
Mam alergię na psy.	I'm allergic to dogs.	3729008
Oni mieszkają w jaskiniach.	They live in caves.	3741223
Czy to jest w ogóle legalne?	Is that even legal?	3741257
Kupiłem słownik dwujęzyczny za nieprawdopodobnie niską cenę.	I got the bilingual dictionary for an unbelievably cheap price.	3742507
Wpisz nazwę użytkownika, a później hasło.	Enter your username, followed by your password.	3743346
Przestań krzyczeć mi do uszu.	Stop screaming in my ears.	3743663
Czy karta graficzna jest kompatybilna z tym komputerem?	Is the graphics card compatible with this computer?	3743845
Jakość transmisji była zadowalająca.	The transmission quality was satisfactory.	3743952
Ta elektrownia nie jest uciążliwa.	That power station isn't disruptive.	3745158
Ile osób uczestniczyło w spotkaniu?	How many people attended the meeting?	3746012
Życie dzisiaj jest o wiele łatwiejsze, niż dawniej.	Life today is much easier than in the past.	3746194
Kto chce frytki?	Who wants fries?	3747520
Ostrożnie z tym.	Be careful with that thing.	3747895
Czy to nie jest nudne?	Isn't it boring?	3749813
Byłem tak nieszczęśliwy.	I was so unhappy.	3749842
Byłam tak nieszczęśliwa.	I was so unhappy.	3749843
Wstawaj i walcz.	Get up and fight.	3749887
To była niespodzianka.	It was a surprise.	3750048
To jest zasada.	That's the rule.	3750064
To jest sprawiedliwość.	That's justice.	3750075
Nie przeszkadzało mi to.	I didn't mind.	3750079
Skończyła mi się bateria.	My battery died.	3750098
Powodzenia na teście.	Good luck on your test.	3750132
Im mniej saperów ginie, tym mniej trzeba ich szkolić.	The fewer sappers die, the fewer we'll have to train.	3750893
Ten przedłużacz jest za krótki.	This extension cord is too short.	3751058
Jak się nazywa asystent?	What's the assistant's name?	3754478
Mamy tutaj poważny problem.	We've got a serious problem here.	3757012
Moja córka kocha muzykę.	My daughter loves music.	3757130
Ten krawat naprawdę ci pasuje.	That tie really suits you.	3759724
Nie będzie badań.	There isn't going to be an investigation.	3761546
Ktoś jest na podwórku.	There's someone in the backyard.	3761572
Ktoś jest w piwnicy.	There's someone in the basement.	3761573
Pocałowała go w czoło.	She kissed him on the forehead.	3763038
Pozwól mi spróbować jeszcze raz.	Let me try again.	3764734
Nigdy ci nie radziłem tego robić.	I never advised you to do that.	3764791
Zamknięcie fabryki oznaczało dla miasta katastrofę.	The plant's closure spelt disaster for the town.	3764959
Jak chronić komputer przed wirusami?	How do you protect your computer from viruses?	3766234
Znasz tą okolicę?	Do you know this neighbourhood?	3768304
Nie mam czasu na przerwę.	I don't have time to take a break.	3772029
Zawsze chciałem pojechać do innego państwa.	I've always wanted to go to another country.	3772031
Chcę usłyszeć więcej o twojej wycieczce.	I want to hear more about your trip.	3772044
Przychodziłem tutaj z moimi przyjaciółmi.	I used to come here with my friends.	3772046
Nikt nie usłyszał dzwonka.	Nobody heard the bell ring.	3776634
Nikt tutaj nie zamawiał pizzy.	Nobody here ordered a pizza.	3776766
Nikt mnie nie zaprosił na imprezę.	Nobody invited me to the party.	3776769
W większości wyborów, kandydat który dostaje większość głosów, wygrywa wybory.	In most elections, whichever candidate gets the majority of the votes, wins the election.	3777849
Daj mi znać później o wynikach.	Let me know the results later.	3777854
Ktoś musi zapłacić cenę.	Someone has to pay the price.	3778864
To może brzmieć dziwnie, ale to prawda.	It may sound strange, but it is true.	3778919
On jest moim bratem, nie ojcem.	He is my brother, not my father.	3779806
Jej matka ćwiczy aerobik raz w tygodniu.	Her mother does aerobics once a week.	3780203
To jest pewne, że ona jutro wyjedzie.	It is sure that she will leave tomorrow.	3780212
To był tylko cień wysokiego drzewa.	It was nothing but the shadow of a tall tree.	3780230
Prawie nigdy nie chodzę do muzeów.	I hardly ever go to museums.	3781444
Nie trzeba mówić tak głośno.	There's no need to speak so loudly.	3782960
Lekarz jest z następnym pacjentem.	The doctor is with another patient.	3782964
Wielu bezdomnych ludzi żyje w parkach.	Many homeless people live in parks.	3784854
Mówiłem ci to sto razy.	I've told you that a hundred times.	3784882
Myślałem, że jasno powiedziałem, że nie chcę tego robić.	I thought I'd made it clear that I didn't want to do that.	3786037
Poszedłbyś, proszę, do supermarketu i kupił chleb?	Would you please go to the supermarket and buy some bread?	3786119
Nie powiedziałem ci, żebyś się nie ruszał?	Didn't I tell you not to move?	3787905
Może nie pamięta o moich urodzinach.	Perhaps she doesn't remember my birthday.	3788697
Nie zwraca uwagi na nauczyciela.	He's not paying attention to the teacher.	3789747
Nauczyciel był daleki od zadowolenia z wyniku.	The teacher was far from satisfied with the result.	3789782
Dziś będę spał na kanapie.	Today, I'll sleep on the couch.	3794077
Policjant mówił do dzieci najbardziej przyjaźnie, jak tylko potrafił.	The policeman talked to the children in as friendly a manner as he could.	3801787
Moje ucho krwawiło dzisiaj rano.	My ear was bleeding this morning.	3805746
Dostałem szóstkę z francuskiego.	I got an A in French.	3806264
Nie wyobrażam sobie kiedykolwiek wziąć rozwód.	I can't imagine ever getting a divorce.	3807853
Nie będziesz musiał dzisiaj zostawać po godzinach.	You won't have to work overtime today.	3807870
Co planowałeś dzisiaj robić?	What were you planning on doing today?	3807884
Dlaczego drzwi są zamknięte na klucz?	Why is the door locked?	3808597
Czy tamto okno się otwiera?	Does that window open?	3812949
Zostaw mi kawałek ciasta.	Save me a piece of pie.	3812993
Nie opowiadałem ci jeszcze o swoich snach.	I haven't told you my dreams yet.	3812995
Nie powinieneś o tym zapominać.	You shouldn't forget that.	3817528
Jest bardzo szczerym człowiekiem.	He is a very sincere person.	3834746
Prześlę ci link do mojej strony.	I'll send you the link to my website.	3834821
Mały odpoczynek zrobiłby ci dużo dobrego.	A little rest would do you a lot of good.	3834835
Byłem akurat na czas.	I was just in time.	3835933
Robienie tego to strata twojego czasu.	Doing that is a waste of your time.	3835960
Nie mamy już gazu.	We don't have any gas left.	3844192
Chcielibyśmy zobaczyć kartę win.	We'd like to see a wine list.	3844197
Nie powiedziałem, że to jest łatwe.	I didn't say it was easy.	3844236
Co jest złego w moim pomyśle?	What's wrong with my idea?	3844555
Widziałem cię, jak grałeś w tenisa.	I've seen you play tennis.	3846555
Niedaleko stąd jest spory supermarket.	There's a large supermarket not far from here.	3846597
Rozważałem również tę możliwość.	I've considered that possibility as well.	3846676
Lubię i przyrodę, i matematykę.	I like both science and math.	3846711
Co jest w tych wszystkich pudełkach?	What's in all these boxes?	3846741
Człowiek czytający gazetę to jego ojciec.	The man reading a newspaper is his father.	3847063
Mieliśmy wesoły dzień na plaży.	We had a fun day at the beach.	3847067
Bardzo prawdopodobne, że zostanie wybrany.	It's very likely that he'll be chosen.	3847934
Kierownice w amerykańskich samochodach są po lewej stronie.	The steering wheels on American cars are on the left side.	3847976
Chciałem zatrudnić trenera.	I wanted to hire a coach.	3847978
Biografia Lincolna jest czytana przez dzieci na całym świecie.	Lincoln's biography is read by children all around the world.	3847995
Byłem naprawdę pod wrażeniem jego dobrego zachowania.	I was very impressed by his good behavior.	3848061
Myślałem, że już skończył swoją pracę.	I thought that he had already finished the work.	3848126
Trzy to moja szczęśliwa liczba.	Three is my lucky number.	3848139
Pogratulowałem mu narodzin syna.	I congratulated him on the birth of his son.	3848287
Zwykle jesteśmy bardziej zajęci latem niż zimą.	We're usually busier in the summer than in the winter.	3848296
Mógłbyś mi podać gazetę ze stolika?	Could you hand me the newspaper on the table?	3850102
Każdy chce stałego miejsca.	Everybody wants permanent peace.	3850672
Wszyscy chcą cię chronić.	Everybody wants to protect you.	3850678
Daj mi mapę.	Give me the map.	3851471
Nie musisz mi dziękować.	You don't have to thank me.	3851745
Poczęstuj się pączkiem.	Have a donut.	3852980
Ta czekolada bardzo dobrze smakuje.	This chocolate tastes really good.	3853045
Jest wiele rzeczy gorszych od śmierci.	There are many things worse than death.	3853608
Policja pokazała mi twoje zdjęcie.	The police showed me your picture.	3853632
Parking jest prawie pusty.	The parking lot is nearly empty.	3853640
Na twoim miejscu, ubiegałbym się o stypendium.	If I were you, I would apply for the scholarship.	3855082
Kanał płynął pomiędzy dwoma rzędami domów.	A canal flowed between two rows of houses.	3855138
Ta powieść została napisana przez amerykańskiego pisarza.	This novel was written by an American writer.	3855148
Dziś jest rocznica ślubu moich rodziców.	Today is my parents' wedding anniversary.	3857224
Twój komentarz jest nie na miejscu.	Your comment is inappropriate.	3857503
Może cię to po prostu nie obchodziło.	Maybe you just didn't care.	3857528
Chcę wiedzieć, kiedy oczekujesz na skończenie raportu.	I want to know when you expect to have the report finished.	3858940
Chcę zrobić dla ciebie coś specjalnego.	I want to do something special for you.	3858977
Redaktor i wydawca są obaj moimi kuzynami.	The editor and the publisher are both my cousins.	3863028
Gdzie znalazłeś tę dziwną rzecz?	Where did you find that strange thing?	3863030
Notatka została spinaczem dołączona do dokumentu.	A note was attached to the document with a paper clip.	3863053
Ona musi się przygotować do obiadu.	She's got to get ready for dinner.	3864151
Parking jest pusty.	The parking lot is empty.	3864158
Jaki jest najlepszy uniwersytet w Niemczech?	What's the best university in Germany?	3864738
Ta historia była przekazywana ustnie z pokolenia na pokolenie.	The story has been passed down from generation to generation by word of mouth.	3864751
Te ubrania ci dobrze pasują.	Those clothes suit you well.	3864763
To plemię czci swoich przodków.	That tribe worships its ancestors.	3865287
Pokój jest właśnie przez niego malowany.	The room is being painted by him.	3865291
Pokój od dłuższego czasu stał pusty.	The room has been empty for a long time.	3865292
Pokój jest na końcu korytarza.	The room is at the end of the hall.	3865304
Pokój jest sprzątany przez pana Smitha.	The room is cleaned by Mrs. Smith.	3865305
W pokoju były różne przedmioty.	There were various objects in the room.	3865307
W pokoju jest pianino.	There is a piano in the room.	3865319
W pokoju było dwieście osób.	There were two hundred people in the room.	3865321
Teren jest używany do celów militarnych.	The site is used for military purposes.	3865322
Para prowadziła szczęśliwe życie.	The couple led a happy life.	3865328
Nie powinienem był włączać tego czerwonego światła.	I shouldn't have run that red light.	3865374
Tutaj nie składa się zamówień.	You don't make orders here.	3865978
Znaczki możesz kupić w każdej poczcie.	You can buy stamps at any post office.	3865991
Tej parze jest trudno wytrzymać, mieszkając razem.	It is hard for the couple to live together any longer.	3866088
Ten towar jest niedostępny.	That article is out of stock.	3866092
Pierwsze objawy choroby to gorączka i ból gardła.	The initial symptoms of the disease are fever and sore throat.	3866095
Szpital został otwarty w zeszłym miesiącu.	The hospital opened last month.	3866096
Lód jest bardzo gruby.	The ice is very thick.	3866099
Ta piękna kobieta jest miła.	The beautiful woman is kind.	3866113
Nie miałem wyboru, jak tylko lecieć samolotem.	I had no choice but to take the plane.	3866120
Ktoś posprzątał mój pokój, gdy wyszedłem.	Someone cleaned my room while I was gone.	3868102
Ktoś puka do drzwi.	Someone's knocking at the door.	3868115
Codziennie rano robi sobie makijaż.	She makes herself up every morning.	3868191
Powiedziała, że codziennie rano myje zęby.	She said that she brushes her teeth every morning.	3868195
Na co dzień ona wstaje wcześnie rano.	She gets up early every morning.	3868199
Nie rozumiem, co autor próbuje powiedzieć.	I don't understand what the author is trying to say.	3868208
Już dawno nie byłem na basenie.	It's been a long time since I've gone swimming.	3869235
Łzy napłynęły mi do oczu, gdy kroiłem cebule.	Tears came into my eyes when I was chopping onions.	3869241
Dziękuję za komentarze.	Thanks for your comments.	3869773
Brzozy mają białą korę.	Birch trees have white bark.	3869837
Parkowanie jest tutaj zabronione.	Parking is prohibited here.	3870860
Nie kładź nic na pudełku.	Don't put anything on top of the box.	3871990
Muzeum jest otwarte od poniedziałku do piątku.	The museum is open from Monday to Friday.	3872001
Aktor zmarł u szczytu swojej popularności.	The actor died at the height of his popularity.	3872004
Starszy mężczyzna wysiadł z autobusu.	The old man got off the bus.	3872016
Ten kot zdaje się chcieć wody.	The cat seems to want some water.	3872018
Ten kot jest bardzo ładny.	The cat is very cute.	3872022
Przejechałem tamtego dnia pięćdziesiąt mil.	I rode fifty miles that day.	3872039
Sporo schudła, odkąd przeszła na dietę.	She's lost a lot of weight since she went on a diet.	3872055
Chcę tam iść wtedy, kiedy ty.	I want to go there as much as you do.	3872351
Już przeczytałem ten dokument.	I've already read that document.	3873621
Właściciel mieszkania świetnie mówi po angielsku.	The owner of the flat speaks excellent English.	3877877
Zostawiłem gdzieś swój paszport.	I left my passport somewhere.	3877936
Nie noś zbyt dużego bagażu, kiedy podróżujesz.	Don't carry too much baggage when you travel.	3877996
Miękkim głosem zwrócił się do publiczności.	He addressed the audience in a soft voice.	3878000
On dużo wie o motylach.	He knows a lot about butterflies.	3878018
Zakładam, że wiesz, co mamy następnie zrobić.	I assume you know what we're supposed to do next.	3880069
Nie wolno mi przyjmować w tym tygodniu gości.	I'm not allowed to have visitors this week.	3880112
To bardzo irytujące.	It's really annoying.	3881822
Moja starsza siostra dobrze śpiewa.	My older sister is good at singing.	3881824
Mój asystent sobie z tym poradzi.	My assistant will handle that.	3881831
Drzwi mojego biura są zawsze otwarte.	My office door's always open.	3881841
Nigdy więcej nie zakładaj tego krawatu.	Don't ever wear that tie again.	3881856
Nigdy więcej do mnie nie dzwoń.	Don't you ever call me again.	3881857
Nigdy więcej o tym nie wspominajcie.	Don't ever mention that again.	3881866
Czy ojciec dużo cię przytulał, kiedy byłeś dzieckiem?	Did your father hug you much when you were a kid?	3882269
Szkoda, że nie mogę tańczyć codziennie.	I wish I could dance every day.	3882881
Ludzie powyżej osiemnastu lat mogą prowadzić.	People over the age of 18 are able to drive.	3882883
Ból straty dziecka jest nie do opisania.	The pain of losing a child is indescribable.	3882899
Nigdy nie zapomniałbym chwil, które spędziliśmy razem.	I'd never forget the moments we've spent together.	3882902
Spędziliśmy dzień na świeżym powietrzu.	We spent the day in the open air.	3884202
To jest dla mnie zły dzień.	That's a bad day for me.	3884204
Czy odpowiedź nie jest prosta?	Isn't the answer easy?	3884237
Na tej wyspie jest ciepło przez cały rok.	The island is warm all year.	3884252
Przez trzy lata zostawałem pracownikiem roku.	I was employee of the year for three years.	3886415
Obawiam się, że to jest trochę zbyt optymistyczne.	I'm afraid that's being a little too optimistic.	3886438
Możesz polecić dobrą restaurację?	Can you recommend a good restaurant?	3886455
Myślałeś, że co miałam na myśli?	What did you think I meant?	3887858
To jest niebezpieczny świat.	It's a dangerous world.	3894942
To jest twarde jak skała.	It's solid as a rock.	3894983
Na jak długo zostałeś w Niemczech?	How long did you stay in Germany?	3895002
Trzy ofiary strzelaniny są w stanie krytycznym.	The three gunshot victims are in critical condition.	3895013
Zrobił kopię tego klucza.	He made a duplicate of that key.	3895626
Sprzedałem dziś moją gitarę.	I sold my guitar today.	3897324
Mogę polecić tę restaurację.	I can recommend this restaurant.	3897629
Nie chcę cię straszyć.	I didn't want to scare you.	3897651
Wiedziałem, że to co robię, jest właściwe.	I knew what I was doing was right.	3898928
Byłem pierwszym chłopakiem twojej matki.	I was your mother's first boyfriend.	3900136
Ile to zabiera miejsca?	How much space does it take?	3922739
Ten pociąg zatrzymuje się na wszystkich stacjach.	This train stops at all stations.	3926280
Gdzie się płaci za gaz?	Where do I pay for the gas?	3926282
Dajmy to zrobić komuś innemu.	Let somebody else do it.	3926312
To jest zły znak.	This is a bad sign.	3926361
Tak poza tym, widziałem go wczoraj.	By the way, I saw him yesterday.	3926572
On nie posiada zbyt wielu książek.	He doesn't own many books.	3929724
Kandydaci są proszeni o osobiste zgłoszenie się.	Applicants are requested to apply in person.	3929835
Wjechałem windą na piąte piętro.	I went up to the 5th floor in an elevator.	3930127
W jakim języku mówią w Egipcie?	What language do they speak in Egypt?	3930135
W sierpniu nie ma szkoły.	There is no school during August.	3930138
Jesteś o trzy centymetry wyższy ode mnie.	You're three centimeters taller than me.	3931505
Nigdy nie słyszałem, żeby moja mama śpiewała piosenkę.	I've never heard my mother sing a song.	3931561
Znam fotografa, który zrobił to zdjęcie.	I know the photographer who took this picture.	3931691
W Brazylii jest wiele dużych miast.	There are a lot of big cities in Brazil.	3932828
Naprzeciwko mnie jest żółty samochód.	There's a yellow car in front of me.	3933287
Przynieś to bliżej.	Bring it closer.	3933317
Zgodziłem się pomóc staruszce.	I consented to help the old lady.	3933340
Ta historia przypomniała mi mojego starego znajomego.	That story brought to mind an old friend of mine.	3933344
Dla mnie to brzmi nieźle.	That sounds good to me.	3933397
Ile wynosi twoja stawka za godzinę?	How much is your hourly pay?	3933814
Mamy w bibliotece wiele książek dla dzieci.	We have a lot of children's books in the library.	3935014
Tłum studentów czekał przed biblioteką.	There was a crowd of students waiting in front of the library.	3935029
Klimatyzacja w bibliotece jest zbyt mocna.	The air-conditioning in the library is too strong.	3935037
Zgubiłem się, próbując znaleźć bibliotekę.	I got lost trying to find the library.	3935050
Nie rozmawiaj w czytelni.	Don't talk in the reading room.	3935053
Jest moim mężem.	He's my husband.	3936139
Ktoś włamał mi się do mieszkania.	Someone broke into my apartment.	3936222
Chcę jedynie kubka kawy i kawałka tosta.	All I want is a cup of coffee and a piece of toast.	3936235
Eksperyment się powiódł.	The experiment was successful.	3937088
To jest dom, w którym mieszkała.	This is the house where she used to live.	3937089
Chłopak narysował obrazek na ścianie.	The boy drew a picture on the wall.	3937090
Milczał przez cały dzień.	He kept silent all day.	3937098
Leżał i nie spał przez całą noc.	He lay awake all night.	3937107
Nadal mi nie powiedziałeś, co robić.	You still haven't told me what to do.	3938217
Nie mów mi o rzeczach, o których już wiem.	Don't tell me things I already know.	3938244
Co to są za liczby?	What are those numbers?	3939992
Co to za numery?	What are those numbers?	3939993
Ten pokój jest zimny.	This room is cold.	3942963
W tej kulturze ludzie ubierają się kolorowo.	People dress colorfully in that culture.	3942975
Antybiotyki są lekiem na infekcje.	Antibiotics are a cure for infection.	3942978
Wielu ludzi wierzy, że akupunktura może leczyć choroby.	Many people believe acupuncture can cure diseases.	3942979
Zwyczajowo je się indyka na Święto Dziękczynienia.	It's a custom to have turkey at Thanksgiving.	3942988
Człowiek jest odpowiedzialny za swoje czyny.	A man is responsible for his deeds.	3942998
Wybacz mu, jeśli możesz. On nie jest winny.	Forgive him if you can. He is not guilty.	3945110
Nie zostawiaj klucza w zamku.	Don't leave the key in the lock.	3945121
Jaka piękna tęcza!	What a beautiful rainbow!	3945403
Wśród publiczności byli uczniowie, nauczyciele, urzędnicy, i tak dalej.	Among the audience, there were students, teachers, clerks, and so on.	3945529
Ta wycieczka jest dłuższa, niż się spodziewałem.	The trip is farther than I expected.	3945544
Słyszałem, że jest w ciąży.	I heard that she was pregnant.	3945549
To ja mam twój kask.	I'm the one who has your helmet.	3945561
Makaron podgrzany ponownie nie jest już tak dobry.	Reheated pasta is never any good.	3945565
Jego ciekawość nie znała granic.	His curiosity knew no bounds.	3945566
Dzisiaj jest bardzo słonecznie, więc wszyscy noszą okulary przeciwsłoneczne.	Today it's very sunny, so everyone is wearing sunglasses.	3946044
Jest w moim plecaku.	It's in my backpack.	3951170
Czy to jest skarga?	Is that a complaint?	3951196
Czy wszyscy są głodni?	Is everybody hungry?	3951223
Jeszcze nie czas wracać do domu.	It's not time to go home yet.	3954755
To, co nosisz na nogach, nie spełnia norm bezpieczeństwa.	What you're wearing on your feet don't meet safety guidelines.	3956331
To jest tylko zabawka.	It's just a toy.	3959413
Ten obraz nie jest wart ceny, którą pan proponuje.	The painting is not worth the price you are asking.	3959461
Nie kupuj mi już prezentów.	Don't buy me presents anymore.	3960425
Proponowałbym ci zamówić wołowinę w miejsce kurczaka.	I'd suggest you order beef instead of chicken.	3962055
Łazienka jest teraz zajęta.	The bathroom is occupied now.	3962258
Szykuje się jutro zajęty dzień.	Tomorrow's going to be a busy day.	3967717
Jesteś naprawdę złym słuchaczem.	You're a really bad listener.	3969900
Nie jesteśmy jeszcze gotowi do zamówienia.	We're not ready to order yet.	3969914
Czy wszyscy zdrowieją?	Is everyone recovering?	3970441
Powinieneś chodzić na siłownię przynajmniej dwa razy w tygodniu.	You should go to the gym at least twice a week.	3971855
Wysłałem ten list do mojego dziadka.	I sent this letter to my grandfather.	3971860
Hotel, w którym mieszka, znajduje się na przedmieściach.	The hotel he's living in is downtown.	3973620
Spotkałem ją zimą w zeszłym roku.	I met her in the winter of last year.	3973726
Szkoda, że nie pozwoliłeś mi jechać swoim autem.	I wish you'd let me use your car.	3973813
Kto jest ojcem współczesnej chemii?	Who is the father of modern chemistry?	3973826
Chcę podpisać umowy.	I want to sign the contracts.	3977818
Nigdy już o tym nie wspominał.	He never mentioned it again.	3977854
To był mój obowiązek.	It was my responsibility.	3978245
Chcemy zmienić przepisy w naszej szkole.	We want to modify the regulations of our school.	3978251
Wyszliśmy na spacer po śniadaniu.	We went out for a walk after breakfast.	3979098
Brakuje jednego widelca.	One fork is missing.	3979118
Nigdy nie widziałem ich tak zajętych.	I've never seen them so busy.	3990263
Chłopiec próbował przesunąć ciężką kanapę.	The boy tried moving the heavy sofa.	3990328
Ktoś musi być pociągnięty do odpowiedzialności.	Someone's got to be held accountable.	3992283
On mieszka w żółtym domu.	He lives at the yellow house.	3992462
Kupiłem te leki mojemu ojcu.	I bought these medications for my father.	3992489
Jego serce przepełniło się radością.	His heart filled with joy.	3992493
W lodówce zostało jeszcze trochę śmietanki.	There's still some cream in the fridge.	3996317
Zamknął okno z obawy przed deszczem.	He closed the window for fear of rain.	3996323
Spotkaliśmy się, kiedy obaj zwiedzaliśmy Australię.	We met while we were both visiting Australia.	3996413
Twoja córka jest bardzo atrakcyjna.	Your daughter's very attractive.	3996417
Przeciwieństwa się przyciągają.	Opposites attract.	3996419
Trzymam to na strychu.	I keep it in the attic.	3996420
Tamta gruszka ładnie pachnie.	This pear smells nice.	3997747
Nie oczekuj, że ktoś ci pomoże.	Don't expect anyone to help you.	4006924
Nie otwieraj nikomu tych drzwi.	Don't open that door for anybody.	4006936
Nasze biuro pomaga uczniom w osobistych problemach.	Our office helps students with personal problems.	4010150
Co robisz przez najbliższych kilka godzin?	What are you doing for the next few hours?	4017723
Zdecydowanie robi się coraz goręcej.	It's definitely getting hotter.	4017734
Chciałbym wiedzieć jak to się nazywa.	I want to know what this is called.	4046744
Nie lubiłem tej gry dopóki nie zacząłem wygrywać.	I didn't like this game until I started winning.	4049292
Ciekawe, czy ktoś nam może pomóc.	I wonder if anybody can help us.	4051539
Nie byłem pewien, gdzie cię znaleźć.	I wasn't sure where to find you.	4051557
Miałem trzynaście lat, gdy to się stało.	I was thirteen when it happened.	4051566
Czy potrzebna ciebie tarka?	Do you need a grater?	4083718
Moje modlitwy zostały wysłuchane.	My prayers were answered.	4090902
Jaki jest twój ulubiony deser z bananami?	What's your favorite dessert with bananas?	4090932
Jaki jest twój ulubiony suszony owoc?	What's your favorite dried fruit?	4091042
Nasze prawo do corocznego miesięcznego urlopu jest zawarte w kontrakcie.	It is stipulated that we should receive a month's vacation every year.	4095552
Nie myl Austrii z Australią.	Don't confuse Austria with Australia.	4099712
Nie zdejmuj butów!	Don't take off your shoes!	4101566
Uwielbiam tę reklamę.	I love that commercial.	4101568
Powinieneś dać mu trochę przestrzeni.	You should give him some space.	4101573
Nie dawaj im swojego numeru.	Don't give them your number.	4101578
Ona jeździ do pracy taksówką.	She goes to work by taxi.	4101587
Obiecałem rodzicom, że nie będę pił.	I promised my parents I wouldn't drink.	4101599
Ulice pełne były młodych par.	The streets were overflowing with young couples.	4101650
Przepraszam bardzo, jest tu gdzieś w okolicy bankomat?	Pardon me, is there an ATM somewhere around here?	4104341
Zamierza kupić im to na prezent.	She's going to buy them that as a gift.	4104433
Pojedźmy wspólnie do Bostonu.	Let's go to Boston together.	4104438
On nie oddycha!	He's not breathing!	4104451
On traci grunt pod nogami w swojej firmie.	He is losing ground in his company.	4106839
Jak na razie świetnie ci idzie.	You've done very well so far.	4107613
On jest trochę nieśmiały.	He's a bit shy.	4111339
Wyglądam jak stary rolnik.	I look like an old farmer.	4111342
Z punktu widzenia Kate, on zbyt dużo pracuje.	From Kate's point of view, he works too much.	4111906
Moje marzenie się spełnia.	My dream comes true.	4112859
Dzisiaj jest święto narodowe.	Today is a national holiday.	4113119
Mój ojciec ma czerwoną brodę.	My father has a red beard.	4115219
Dzisiaj jest specjalny dzień.	Today is a special day.	4116372
Oni wszyscy są złodziejami.	They're all thieves.	4120054
Jej obecność jest dla mnie ważna.	Her presence is important to me.	4123785
Ten rodzaj muzyki to nie moja bajka.	This sort of music is not my cup of tea.	4124379
Po pierwsze, oblałem test.	At first, I failed the test.	4124387
Moglibyśmy porozmawiać o naszych zainteresowaniach.	We could talk about our hobbies.	4129939
Tamtej nocy było bardzo duszno.	It was very sultry that night.	4129966
Z tego wzgórza możemy zobaczyć wszystkie budynki w mieście.	From the hill, we could see all the buildings in the city.	4132119
Nikt go nigdy nie chwali.	Nobody ever praises him.	4132121
Nigdy nie przestałem cię kochać.	I never stopped loving you.	4140474
Zgubiłem zegarek, który kupiłem poprzedniego dnia.	I lost the watch which I bought the day before.	4144962
To była bardzo głupia decyzja.	It was a very stupid decision.	4144987
Przepraszam, czy mógłbyś mówić trochę ciszej?	Excuse me, could you lower your voice a little?	4144995
Czasami to zależy od szczęścia.	Sometimes it depends on luck.	4145047
Już mówiłem mu to tysiąc razy.	I've already told him this a thousand times.	4145051
Wielu turystów przychodzi obejrzeć wodospad.	Many tourists come to see the waterfall.	4145055
Nie mogłem uwierzyć, że to ty.	I couldn't believe it was you.	4148347
Chciałbym uczciwą odpowiedź.	I'd like a straight answer.	4151843
Utknęliśmy w korku, przez co spóźniliśmy się dwadzieścia minut.	We got stuck in a traffic jam, which made us twenty minutes late.	4152134
Jej twarz jest pełna złości.	Her expression is full of anger.	4158355
Spotkałem go wczoraj na lotnisku przez przypadek.	I met him by chance at the airport yesterday.	4158367
Jaka jest twoja ulubiona reklama?	What's your favourite advert?	4169766
Jakie jest twoje ulubione europejskie miasto?	What's your favorite European city?	4169800
Który odcinek z sezonu drugiego jest twoim ulubionym?	What's your favorite episode from season two?	4169803
Jaki jest twój ulubiony rodzaj ćwiczeń?	What's your favorite form of exercise?	4169840
Jakie jest twoje ulubione darmowe oprogramowanie?	What's your favorite free software application?	4169845
Jak tylko dostanę wypłatę, oddam ci pieniądze.	As soon as I get paid, I'll pay you back.	4179241
Czujesz się choć trochę lepiej?	Are you feeling any better?	4179244
Nie chcę już więcej kłamać.	I don't want to lie any more.	4179250
Gdzie jest gaśnica?	Where is the fire extinguisher?	4196791
Przynieś mi gaśnicę.	Get me a fire extinguisher.	4196793
Ten zielony rower podoba mi się bardziej od różowego.	I like the green bicycle more than the pink.	4196860
Mój pradziadek przeżył mojego dziadka.	My grandfather predeceased my great-grandfather.	4197525
Mój dziadek zmarł przed moim pradziadkiem.	My grandfather predeceased my great-grandfather.	4197528
Większość ptaków widzi tylko za dnia.	Most birds can see only by day.	4217750
To wygląda jak ryś.	It seems to be a lynx.	4225517
Łańcuch jest zrobiony z wielu linek.	A chain is made up of many links.	4225608
Najwyższy czas, żebyś poszedł do fryzjera.	It's high time you had a haircut.	4225611
Ile czasu spędziłeś w tej grze?	How long have you been in this game?	4229781
Była gotowa oddać mu wszystkie jego pieniądze.	She was ready to give him back all his money.	4230049
Kontynuuj swoją pracę.	Carry on with your work.	4235066
Chcą, żebyś z tego nie korzystał.	They don't want you to use it.	4241846
Oni wiedzą, że chcę teraz wyjść.	They know I want to leave now.	4241852
To nie jest wirus.	It's not a virus.	4258169
Mamy tylko jedną możliwość.	We've only got one option.	4258244
Podaj mi gwoździe.	Hand me the nails.	4264319
Mała dziewczynka przytuliła swojego pluszowego misia.	The little girl hugged her teddy bear.	4287088
W tym regionie jest produkowane bardzo znane wino.	A very well known wine is produced in that region.	4287113
Nigdy nie byłem w Tobie zakochany.	I was never in love with you.	4311393
W tym pudełku jest pięć jabłek.	There are five apples in this box.	4311806
Napiszę recenzję tej książki.	I will write a review of that book.	4314104
Wyszedł z domu, nawet się nie żegnając.	He left the house without even saying goodbye.	4327734
Uroda w żaden sposób nie świadczy o charakterze człowieka.	Beauty doesn't say anything about the character of a person.	4327920
Wielu ludzi jest na wakacjach.	Many people are on holiday.	4327958
W poniedziałek jest święto państwowe.	Monday is a bank holiday.	4327983
Powiedział, że żałuje swojej decyzji.	He said that he regretted his decision.	4327988
W którym wagonie zarezerwowałeś miejsce?	In which car of the train is the seat you reserved?	4328045
W którym wagonie zarezerwowałaś miejsce?	In which car of the train is the seat you reserved?	4328047
Dlaczego jesteś o mnie zazdrosna?	Why are you jealous of me?	4328099
Dwie dziewczynki bawiły się na huśtawce.	Two girls played on the seesaw.	4328113
Następny pociąg na lotnisko odjedzie z peronu drugiego.	The next train for the airport will depart from platform two.	4328159
Proszę wypełnić ankietę.	Complete the questionnaire.	4328167
Naucz się czerpać radość z czytania.	Learn to enjoy reading.	4328189
Nie powinni interweniować w sprawy wewnętrzne innego państwa.	They shouldn't intervene in the internal affairs of another state.	4328215
On chodzi o kulach.	He walks on crutches.	4328235
Ten samochód ma alarm.	This car has an alarm.	4359803
Jak mogłaś tego nie zauważyć?	How could you miss that?	4359831
Nigdy nie byłam twoją przyjaciółką.	I was never your friend.	4359863
Ona rysuje obraz.	She is drawing a picture.	4400837
Krzyczeliśmy na pomoc z całych sił.	We shouted for help at the tops of our voices.	4403874
W jej pokoju wszystko jest małe.	Everything in her room is small.	4410329
Drzwi pozostają zamknięte.	The door remains closed.	4413332
Te buty idealnie pasują do tej białej spódnicy.	Those shoes are a perfect match for this white skirt.	4425880
Grała na pianinie, kiedy przyszli goście.	She was playing the piano when the guests arrived.	4428363
Ten owoc jest bardzo kwaśny.	This fruit is very sour.	4436793
Przestań, to nie jest zabawne.	Stop. This is not funny.	4436807
Komputer przestał działać po automatycznej aktualizacji systemu.	The computer stopped working after an automatic system update.	4437698
Mam alergię na kukurydzę.	I'm allergic to corn.	4437726
Przynieś mi ocet i olej, proszę.	Please bring me vinegar and oil.	4437771
Nie ukradłem tego, tylko pożyczyłem.	I didn't steal it. I only borrowed it.	4438815
Nie ukradłam tego, tylko pożyczyłam.	I didn't steal it. I only borrowed it.	4438817
Gramatyka jest bardzo trudna.	Grammar is very difficult.	4438823
Biały koń jest wyższy od czarnego.	The white horse is taller than the black one.	4438882
Z jakiego materiału zrobione są oprawki twoich okularów?	From what material is the frame of your glasses?	4438895
Muszki owocówki lubią banany.	Fruit flies like bananas.	4438922
Prawda jest najlepszym kłamstwem.	The truth is the best lie.	4438925
Mogę prosić o przepis na twoją sałatkę?	Will you give me the recipe for your salad?	4438927
Jest tylko małą dziewczynką.	She is just a little girl.	4438931
Chleb z masłem smakuje bardzo dobrze.	Bread with butter tastes very good.	4438957
Dziecko płacze, bo jest głodne.	The child is crying, because it wants to eat.	4438971
Nie mogę otworzyć tego słoika.	I can't open this jar.	4438996
Karmiąc psa, słuchał w radiu wiadomości.	He listened to the news on the radio as he fed his dog.	4440463
Dziś jest czwartek.	Today is Thursday.	4449153
Dzisiaj jest czwartek.	Today is Thursday.	4449154
Ten niebieski plecak jest ciężki.	This blue backpack is heavy.	4468682
Widziała pani kiedyś kangura?	Have you ever seen a kangaroo?	4474016
Widzieliście państwo kiedyś kangura?	Have you ever seen a kangaroo?	4474017
Ten pingwin jest na prawdę uroczy!	This penguin is really cute.	4474018
Żelazko używa bardzo dużo prądu.	The iron uses a lot of electricity.	4481131
Wielu uchodźców stara się dotrzeć do Europy.	Many refugees are trying to reach Europe.	4481151
Wielu uchodźców próbuje dotrzeć do Europy.	Many refugees are trying to reach Europe.	4481152
Urodziłeś się w stodole?	Were you born in a barn?	4482459
Wygrała wiele konkursów.	She won many competitions.	4482478
Wygrali wiele konkursów.	They won many competitions.	4482479
Liście rosną na gałęziach.	Leaves grow on branches.	4482533
Wybory do Parlamentu Europejskiego odbyły się dzisiaj.	The elections for the European parliament were held today.	4486122
On bardzo interesuje się biologią.	He's very interested in biology.	4512788
Czy mógłby pan przyjść to naprawić?	Can you please come fix this?	4541531
Nadal mam kilkoro przyjaciół w Bostonie.	I still have a few friends in Boston.	4544366
Moje oszczędności są na tyle niewielkie, że nie przetrwają długo.	My savings are so small that they won't last much longer.	4546184
Musiałem leżeć w łóżku cały dzień.	I had to stay in bed all day.	4546192
Chcę porozmawiać o czymś innym.	I want to talk about something else.	4546894
Po co ci ta stara rzecz?	What do you want that old thing for?	4547021
Gdzie kupiłaś tę spódnicę?	Where did you buy that skirt?	4550517
Napisz do swojego posła.	Write your congressman.	4550566
Facebook zawiesił jedno z moich sześciu kont.	Facebook suspended one of my six accounts.	4558047
Ile procent małżeństw kończy się rozwodem?	What percentage of marriages end in divorce?	4558493
To jest trzydzieści kilometrów dalej.	It's thirty kilometers away.	4558600
Nigdy nie było kłótni między Danem i Lindą.	There had never been a conflict between Dan and Linda.	4558692
Skończyłeś pakować walizkę?	Have you finished packing your suitcase?	4558704
Mógłbyś mi nalać coś zimnego?	Could you get me a cold drink, please?	4558707
Mógłbyś mi podać packę na muchy?	Could you bring me the fly swatter, please?	4558708
Ten stół jest bardzo ciężki.	This table is very heavy.	4657043
Poprawiać to znaczy zmieniać; Doskonałość to zmieniać często.	To improve is to change; to be perfect is to change often.	4683931
On nie słucha swoich nauczycieli.	He doesn't listen to his teachers.	4716869
Na ścianie wisi kalendarz.	There's a calendar hanging on the wall.	4716911
Jaki jest twój ulubiony szampon?	What's your favorite shampoo?	4716927
Sądząc po jego wyrazie twarzy, nie mówi prawdy.	Judging from his expression, he is not telling the truth.	4717768
Ten wiersz napisałem dla mojej mamy.	I wrote this poem for my mum.	4718064
W gazecie o niczym ciekawym nie piszą.	There is nothing interesting in the newspaper.	4719121
Mamy tylko dwuosobowe namioty.	We only have two-person tents.	4720654
Nie mam ani brata ani siostry.	I don't have a brother or a sister.	4721871
Mój mąż kupił mi pralkę.	My husband bought me a washing machine.	4725097
Ktoś zostawił otwarte okna w biurze.	Someone left the office windows open.	4725168
Wszystko jest oszustwem!	Everything is fraud!	4725170
Tutaj nie ceni się naszej pracy.	Our work isn't valued here.	4725599
Będę Cię wspierać tak długo, jak żyję.	I'll support you as long as I live.	4725786
Nie możesz wypuścić psa z podwórka.	You can't let the dog out of the yard.	4728126
Dlaczego jest tak mało tramwajów w Ameryce Północnej?	Why are there so few tramways in North America?	4729086
Zawsze ubiera się w bardzo prosty sposób.	She always dresses very simply.	4730571
Każdy dostaje drugą szansę.	Everybody gets a second chance.	4730605
Słodkie pomarańcze nie są bardzo kwaśne.	Sweet oranges are not very sour.	4730625
Przepraszam. Gdzie jest metro?	Excuse me. Where's the subway?	4730645
Gdzie jest wejście na scenę?	Where's the stage entrance?	4735288
Oni wyglądają na zmęczonych.	They look tired.	4735345
Oni są za grubi.	They're too fat.	4735482
Oni sprzedają cukierki.	They sell candy.	4735489
To jest niezwykłe.	It's remarkable.	4735561
Ja też nic nie rozumiałem.	I didn't understand anything, either.	4738830
Ja też nic nie rozumiałam.	I didn't understand anything, either.	4738831
Pokrój pomidory w plasterki i ułóż je ładnie na talerzu.	Cut the tomatoes into slices and arrange them nicely on the plate.	4768659
Nie robię nic za twoimi plecami.	I'm not doing anything behind your back.	4785636
To był pracowity dzień.	It's been a busy day.	4785671
Słyszałem, że zostałeś menadżerem oddziału w Sydney.	I heard that you became the manager of the Sydney branch.	4785672
Myślałem, że ktoś jest w pokoju.	I thought there was somebody in the room.	4787362
Powinieneś zostawić mi planowanie.	You should leave the planning to me.	4788966
Daj mi łyżkę.	Give me a spoon.	4788978
Ratunek przed tym nieszczęściem jest niewyobrażalny.	Salvation from this misery is inconceivable.	4789091
Zacznijmy od drugiej od końca linii.	Let's start at the second-to-last line.	4789095
Większość mężczyzn potrzebuje różnorodności.	Most men need variety.	4789101
Nie jest tak punktualna jak jej młodsza siostra.	She is not as punctual as her little sister.	4789118
Jest tylko zwykłą dziewczyną.	She is just an ordinary girl.	4789119
Zauważyłeś podobieństwo w wymowie po polsku i po portugalsku?	Have you noticed the similarity in pronunciation between the Polish and Portuguese languages?	4797431
Jest w kontakcie z najróżniejszymi ludźmi.	He is in touch with all kinds of people.	4797437
Ten kwiat to jakiś gatunek róży.	This flower is a kind of rose.	4802064
Jest błąd w systemie elektronicznym.	There is a fault in the electrical system.	4805233
Zjadłbym konia z kopytami.	I could eat a horse.	4805239
Zjadłem wczoraj wieczorem zdecydowanie za dużo.	I ate way too much last night.	4805241
Nigdy nie twierdziłem, że potrafię mówić po francusku.	I never claimed that I could speak French.	4812945
Do wykonania tej pracy będę potrzebował własnych narzędzi.	I'll need my own tools to do this job.	4815322
Nie pozostawiasz mi wyboru w tej kwestii.	You leave me no choice in the matter.	4816629
Weź jajko z lodówki.	Take an egg from the fridge.	4816958
Większość młodych dorosłych lubi wychodzić wieczorami.	Most young adults enjoy going out at night.	4817016
Nie widziałem jej od zeszłego miesiąca.	I haven't seen her since last month.	4817018
Chciałbym niedługo pójść do lekarza.	I'd like to see the doctor soon.	4817832
Lepiej natychmiast idź do łóżka.	You'd better go to bed at once.	4817834
Z każdym rokiem jesteś coraz przystojniejszy.	You get more handsome every year.	4820974
Z każdym rokiem stajesz się coraz piękniejsza.	You get more beautiful every year.	4820979
Ten brzydki mężczyzna ma piękną żonę.	That ugly man has a beautiful wife.	4820984
Zachód słońca tutaj jest naprawdę piękny.	The sunset is really beautiful here.	4820987
Przez cały tydzień mieliśmy piękną pogodę.	We've had beautiful weather all week.	4820990
Małe rybki pływają w akwarium.	Little fish are swimming in the aquarium.	4821023
Nigdy nie byłem profesjonalnym muzykiem.	I've never played music professionally.	4828039
Mamy dwie dziewczynki i chłopca.	We have two girls and one boy.	4828083
Uklękliśmy wszyscy do modlitwy.	We all knelt down to pray.	4828119
Wiedziałeś, że ona robi dobrą kawę?	Did you know she is good at making coffee?	4828124
Co zrobiłeś z moimi kluczami?	What did you do with my keys?	4829431
W tym domu mieszka mój wujek.	This is the house where my uncle lives.	4834702
Wszyscy czuli się bezpieczni.	Everyone felt safe.	4836972
Paczka dotarła trzy godziny temu.	The package arrived three hours ago.	4837573
Chcę zamknąć konto.	I want to close the account.	4837626
Proszę kontroluj się.	Please control yourself.	4837633
Ciężko jest zjeść tylko jedną truskawkę.	It's hard to eat just one strawberry.	4837675
Twój kaszel mnie martwi.	Your cough worries me.	4837717
Zostawiłam samochód w garażu.	I left the car in the garage.	4837735
Nikt nie myśli że to żart.	Nobody thinks this is a joke.	4837802
Na świecie jest dużo złych ludzi.	There are many bad people in the world.	4837821
To jest to, za co zapłacili.	That's what they paid for.	4837832
Firma zdecydowała się zatrudnić dwie nowe sekretarki.	The company decided to hire two new secretaries.	4837853
Hałas za oknem nie pozwolił mu spać.	The noise outside his window prevented him from sleeping.	4841753
Kiedy odlatuje jego samolot?	When does his plane take off?	4847851
Nie ufam tym ankietom.	I don't trust these surveys.	4847856
Może powinienem uczyć się niemieckiego.	Maybe I should study German.	4849824
Dostałam list od przyjaciółki.	I got a letter from my friend.	4869395
Radziła mu, żeby poszedł do dentysty.	She advised him to see the dentist.	4869508
Daj mi swoją komórkę.	Give me your cell phone.	4872983
Powody są zrozumiałe.	The reasons are understandable.	4881787
Jego wniosek jest bardzo rozsądny.	His request is very reasonable.	4881831
Daj mi jeden dobry powód.	Give me one good reason.	4881843
Opłata jest bardzo rozsądna.	The rent is very reasonable.	4881913
Powodem nie jest choroba.	Reason is not a disease.	4881979
Jest to rozsądny kompromis.	It's a reasonable compromise.	4881984
Co jest innym powodem?	What's the other reason?	4881994
Bez powodu czułem smutek.	I felt sad for no reason.	4884432
Opuściła szkołę z powodów zdrowotnych.	She quit school for health reasons.	4884478
Powód tego jest jasny.	The reason for this is plain.	4886925
Tak, istnieją dwie ważne przyczyny.	Yes, there are two important reasons.	4886940
Oglądałem ten film w sobotę.	I saw that film on Saturday.	4913076
Dostaję trzy procent prowizji od wszystkiego co sprzedaję.	I get a three percent commission on anything I sell.	4916363
Sytuacja się poprawia.	The situation is getting better.	4916394
Nepal jest obecnie jedynym państwem, którego flaga nie jest prostokątna.	Nepal is currently the only country with a non-rectangular national flag.	4916683
On jest szczęśliwy, że żyje po tym swoim wypadku.	After his accident, he is happy to be alive.	4917165
Potrzebuję kierowcy, żeby zabrał mnie do domu.	I need a driver to take me home.	4917166
Oni mieszkali przez kilka lat w Hiszpanii.	They lived in Spain for several years.	4917177
Kaktusy to rośliny, które rosną w suchych miejscach.	Cacti are plants that live in dry places.	4917178
Planowałem iść, ale zapomniałem.	I intended to go, but forgot to.	4917189
Nie miałem wyboru i musiałem iść.	I had no choice but to go.	4917191
Kwiaty sprawiają, że jest szczęśliwa.	Flowers make her happy.	4917224
Mój dom znajduje się na zachodniej stronie ulicy.	My house is on the west side of the street.	4917241
Wszystko kosztuje więcej, niż kosztowało rok temu.	Everything is costing more than it did last year.	4917306
Chcę żyć w prawdzie i miłości.	I want to live in truth and love.	4917550
Nie chcę więcej o tym rozmawiać.	I don't want to talk about this anymore.	4919402
Hiszpania, Włochy i Grecja są w Europie.	Spain, Italy and Greece are in Europe.	4921623
Włochy i Grecja są w Europie.	Italy and Greece are in Europe.	4921625
Tego tylko mi jeszcze brakowało!	That's torn it!	4921721
Szkoła w Europie zaczyna się we wrześniu.	School starts in September in Europe.	4929156
To znaczy, że on Cię kocha.	That means he loves you.	4935743
Moja mała córka lubi siedzieć na moich ramionach.	My little daughter likes to sit on my shoulders.	4935774
Kupiłeś swojej dziewczynie pamiątkę?	Did you get a souvenir for your girlfriend?	4935797
On jest taksówkarzem.	He is a taxi driver.	4938221
Co się stało na spotkaniu?	What happened in the meeting?	4939090
To co się stało nie jest tajemnicą.	What happened isn't a secret.	4939091
Dziś jest trochę cieplej niż zazwyczaj.	Today's a bit warmer than usual.	4940276
Ceny z pewnością pójdą w górę.	Prices will certainly go up.	4940366
Moja matka zmarła w dniu mojego ślubu.	My mother died on the same day I got married.	4949860
Chcę siedzieć w pierwszym rzędzie.	I want to sit in the front row.	4952786
To co zrobiłeś było ogromną pomocą.	What you did was a big help.	4952877
Nie wiem jaki rozmiar bluzki powinienem kupić.	I don't know what size shirt I should buy.	4953066
To całkiem dobre uczucie.	It's a pretty good feeling.	4953201
Słowa nie mogą wyrazić naszej wdzięczności.	Words can't express our gratitude.	4953255
Jest kilka możliwych wyjaśnień.	There are several possible explanations.	4953258
Semestr kończy się w przyszłym tygodniu.	The term ends next week.	4953273
Koszyk był pusty.	The basket was empty.	4953278
Plaża była dość pusta.	The beach was fairly empty.	4953279
Poczekalnia jest pusta.	The waiting room is empty.	4953280
Nic nie podpisywałem.	I didn't sign anything.	4953328
Nic nie podpisywałam.	I didn't sign anything.	4953329
Autobus odjeżdża za około dwie minuty.	The bus leaves in about two minutes.	4953336
Czy ktoś widzi różnicę?	Does anyone see a difference?	4953401
Te walizki są naprawdę ciężkie.	These suitcases are really heavy.	4957029
Również tysiąc milowa podróż rozpoczyna się pierwszym krokiem.	Even a thousand-mile-long journey begins with the first step.	4961856
Szczęśliwego Międzynarodowego Dnia Kobiet.	Happy International Women's Day!	4963058
Tak, to jest flaming.	Yes, it's a flamingo.	5016697
Chcę zjeść obiad w restauracji.	I wanna have dinner in a restaurant.	5065047
Powinieneś nauczyć się grać na jakimś instrumencie.	You should learn to play an instrument.	5088995
Ona oddała książkę do biblioteki.	She returned a book to the library.	5097499
Chciałbym ubiegać się o tą posadę.	I would like to apply for that job.	5097513
Oni nie zamierzają zostawić nas w spokoju.	They're not going to leave us alone.	5113730
Mądrzy uczą się wiele od swoich wrogów.	The wise learn a lot from their enemies.	5135050
Każdy wiek ma swoją mądrość.	Every age has its wisdom.	5138497
Syn musi się słuchać swojego ojca.	A son must obey his father.	5138652
Czy mógłbyś mi przynieść szklankę wody?	Would you fetch me a glass of water?	5138702
Powiedz to proszę z pamięci.	Please say it by heart.	5140011
Nie zapłacił swojej części czynszu.	He has not paid his portion of the rent.	5142395
To nie była prośba.	It wasn't a request.	5166373
To, co teraz robisz, jest niepotrzebne.	What you're doing now is unnecessary.	5172191
Sądzę, że ludzie powinni przestać używać jednorazowych reklamówek.	I think people should stop using disposable shopping bags.	5172237
To nie jest nasza planeta.	This is not our planet.	5182851
Przygotował się do odjazdu.	He got ready for departure.	5183449
Przygotował się do odlotu.	He got ready for departure.	5183452
To nie trwało więcej niż trzy minuty.	It did not last more than three minutes.	5183707
Muszę schudnąć parę kilo.	I need to lose a few kilos.	5183811
Ona zrobiła pierwszy krok.	She made the first move.	5183864
Moja córka nie chce mnie słuchać.	My daughter won't listen to me.	5183869
Mam bardzo mały nos.	I have a very small nose.	5187732
Nic nie jadłem od wczoraj rana.	I haven't eaten anything since yesterday morning.	5187750
Byłem u fryzjera.	I have been to the barber's.	5191923
Mam mało czasu do czytania.	I have little time to read.	5196969
Nie chcę mu przerywać.	I don't want to interrupt him.	5198121
Podaj mi tę miotłę.	Hand me that broom.	5199031
To jest dla niego ważne źródło dochodu.	It's an important source of income for him.	5201398
Nie skorzystałem na tej wymianie.	I didn't benefit from this exchange.	5204524
Nie mogłem ani jeść, ani pić.	I could neither eat nor drink.	5204528
Zrób to w wolnej chwili.	Do this at your leisure.	5211233
Narzekanie na coś nic nie zmienia.	Complaining about something doesn't change anything.	5213242
Nadmiar wody odpłynął kanałem do ścieków.	Excess water went down the drain to the sewage.	5215233
Oni opracowali lekarstwo na tę chorobę.	They have devised a cure for this illness.	5217358
Ona pokroiła pomidory w cienkie plasterki.	She cut the tomatoes into thin slices.	5217417
Czy mógłbym pożyczyć twoją linijkę?	Could I borrow your ruler?	5219604
Naprawa komputera zajęła cały dzień.	The computer repair took all day.	5221438
Mama i tata są bardzo nerwowi.	Mom and Dad are very nervous.	5221567
Obieram seler i ziemniaki.	I'm peeling the celery and the potatoes.	5221865
Kolczyki są bardzo ładne.	The earrings are very pretty.	5221875
To jest zabronione.	It's forbidden.	5221958
Zakaz wprowadzania psów.	Dogs are forbidden.	5221968
Czy mógłbyś zostać i mi pomóc?	Could you stay and help me?	5222137
Każdy kwadrat jest prostokątem.	Every square is a rectangle.	5223246
Czy w hotelu jest kwiaciarnia?	Is there a flower shop in the hotel?	5224045
Turku jest starsze od Helsinek.	Turku is older than Helsinki.	5224617
Im wyższe drzewo, tym trudniej się na nie wspiąć.	The taller a tree is, the harder it is to climb.	5225159
Czy nasze granice są bezpieczne?	Are our borders secure?	5225165
Przyszli mimo mojego zakazu.	You came despite my ban.	5225250
Czy jest jakiś wzór?	Is there a pattern?	5225304
Te wzory są identyczne.	These patterns are identical.	5225306
Miałem pewnie trzydzieści lat w tamtym czasie.	I was probably thirty years old at that time.	5227464
Myślę, że mam alergię na mydło.	I think I'm allergic to that soap.	5227509
Zapomniałem dać cukru do twojej herbaty.	I forgot to put sugar in your tea.	5227510
Ta piżama jest dla ciebie za duża.	Those pajamas are too big for you.	5227914
Więc powiedz mi co robiłeś.	So tell me what you've been doing.	5227955
Nie chcę kupować niczego więcej.	I don't want to buy anything else.	5227958
Kupił tę ciężarówkę z Polski.	He bought this truck from Poland.	5229082
Jestem z Rzeczypospolitej Polskiej, a ty z Republiki Federalnej Niemiec.	I am from the Republic of Poland, you are from the Federal Republic of Germany.	5229152
Woda zmienia się w parę.	Water changes into steam.	5229163
Chcę kupić czeski sweter.	I want to buy a Czech sweater.	5229178
Na Węgrzech każdy mówi po węgiersku.	In Hungary, everyone speaks Hungarian.	5229211
Pierwszy król Węgier został koronowany w tysięcznym roku.	The first king of Hungary was crowned in the year 1000.	5229254
Ukraina jest dużym krajem.	Ukraine is a big country.	5229275
Mieszkał na Ukrainie wiele lat.	He lived in Ukraine for many years.	5229280
Macedonia i Bułgaria nie są przyjaciółmi.	Macedonia and Bulgaria are not friends.	5229290
Jak długo byłeś w Bułgarii?	How long have you been in Bulgaria?	5229293
Został skazany na rok więzienia w Bułgarii.	He was sentenced to one year in prison in Bulgaria.	5229295
Chciał kupić mały dom w Rumunii.	He wanted to buy a small house in Romania.	5229357
Czy Finlandia jest niebezpieczna?	Is Finland dangerous?	5229689
Ona jest Premierem Finlandii.	She is the Prime Minister of Finland.	5229726
To jest największa elektrownia Finlandii ze wszystkich.	This is Finland's biggest power station of all.	5229734
Belgrad jest stolicą Serbii.	Belgrade is the capital of Serbia.	5238847
To jest książka o zwierzętach.	It's a book on animals.	5240083
Kończy nam się benzyna.	We're running out of gas.	5240138
Co robiłeś w czasie jego śmierci?	What were you doing at the time of his death?	5240144
Kiedyś znaliśmy wszystkich sąsiadów z imienia.	We used to know all the neighbors by name.	5240541
Potrzebuję każdego pracownika na służbie.	I need every staffer on duty.	5271431
Byłem w wannie.	I was in the bath.	5280292
Te kozy są bardzo przyjazne.	These goats are very friendly.	5282717
Wiedziałem, że moja noga była złamana.	I knew my leg was broken.	5282734
Mam o wiele poważniejszy problem.	I have a much more serious problem.	5283703
Gdzie jest przystanek?	Where's the bus stop?	5287404
Byłem w supermarkecie.	I was at the supermarket.	5291520
Awansowała na pierwsze miejsce.	She moved up to first place.	5314101
To nie podlega zwrotowi.	It's non-refundable.	5319596
Czy chciałbyś kolejną porcję?	Would you like another helping?	5319655
Wiatr wieje już długo i mocno.	The wind is blowing hard now.	5319673
Południowi mężczyźni, północne kobiety.	Southern men, Northern women.	5336324
Ponad trzystu ludzi straciło życie tego dnia.	Over three hundred people lost their lives that day.	5366871
Jagody i inne produkty roślinne zawierają wiele przeciwutleniaczy.	Berries and other plant foods contain many antioxidants.	5369918
To nie jest najlepszy przykład.	That's not the best example.	5369961
Jak dużo wiesz o sztucznej inteligencji?	How much do you know about artificial intelligence?	5369991
Na dworzec jest około dziesięciu minut spacerem.	It is about ten minutes' walk to the station.	5370682
Nie czułem się zbyt szczęśliwy.	I didn't feel particularly happy.	5370684
Ta powierzchnia jest nierówna.	This surface is rugged.	5373063
Wgryzł się w gumę do żucia.	He bit into the chewing gum.	5376721
Chciałbyś pożyczyć mój zszywacz?	Would you like to borrow my stapler?	5377690
On wie, jak grillować ryby.	He knows how to grill fish.	5388491
Czy króliki są słodsze niż wiewiórki?	Are rabbits cuter than squirrels?	5397505
Rysowanie jest bardzo fajne; pomaga mi się zrelaksować.	Drawing is a lot of fun; it helps me to relax.	5397765
Ta wiewiórka nie jest nieśmiała.	This squirrel is not shy.	5398330
Naukowcy znaleźli wodę na Marsie.	Scientists have found water on Mars.	5406452
Czas się kończył.	Time was running out.	5414493
Nigdy wcześniej nie jeździłam na koniu.	I've never ridden a horse before.	5437361
To jest nasz ostatni dzień tutaj.	This is our last day here.	5437623
Jako dziecko, uwielbiałem zbierać brzoskwinie w ogrodzie mojego dziadka.	As a child, I loved picking peaches in my grandfather's garden.	5437834
Nie zrobiłem nic wyjątkowego.	I didn't do anything special.	5441175
Mogę Ci pożyczyć mój motocykl.	I can lend you my motorcycle.	5441198
A teraz moment, na który wszyscy czekali.	And now the moment you've all been waiting for.	5441533
Ona nie ma szacunku dla nikogo.	She has no respect for anyone.	5441536
Nie to miałem na myśli. Przepraszam.	That's not what I meant. I'm sorry.	5441539
Szczerość jest ważna w związku.	Honesty is important in a relationship.	5441555
Czy to nietoperz?	Is that a bat?	5452843
Całowanie palacza jest jak lizanie popielniczki.	Kissing a smoker is like licking an ashtray.	5454980
W październiku zaczynają spadać liście.	In October, the leaves begin to fall.	5487881
Światło w łazience nie działa.	The lights in the bathroom aren't working.	5487899
Wrony są czarne.	Crows are black.	5489369
Rosjanie wiedzą wszystko o niedźwiedziach.	Russians know everything about bears.	5492337
Ona ma okrągłą twarz.	She has a round face.	5493574
Tato wie, co robi.	Dad knows what he's doing.	5505069
Nie zapomnij dać kelnerowi napiwku.	Don't forget to tip the waiter.	5522811
Nie zapomnijcie dać kelnerowi napiwku.	Don't forget to tip the waiter.	5522812
Co oznacza to pytanie?	What does this question mean?	5523906
Nikt nie lubi płacić podatków.	Nobody likes to pay taxes.	5528878
Ona potrzebuje zwrócić się do kogoś o poradę.	She needs someone to turn to for advice.	5535832
Co za okropna pogoda!	What awful weather!	5558329
Zdjęcia są niesamowite!	Pictures are amazing!	5558362
Czy widziałeś moją zieloną koszulę?	Have you seen my green shirt?	5585015
To nie jest zbyt drogie.	It's not very expensive.	5585018
Sport to moje hobby.	Sports are my hobby.	5585078
Może dla odmiany pojedziemy na wieś?	Shall we go to the countryside for a change?	5585100
Język ukraiński jest bardzo melodyjny.	The Ukrainian language is very melodious.	5591050
Krab jest zwierzęciem żyjącym nad morzem.	The crab is an animal that lives at sea.	5608459
W prawie wszystkich czasopismach są krzyżówki.	There are crossword puzzles in almost every newspaper.	5608480
Zeszłego lata użądliła mnie osa i musiałem jechać na pogotowie.	Last summer, a wasp stung me and I had to go to the emergency room.	5608488
Nagle nad naszymi głowami przeleciała mewa.	A seagull suddenly flew over our heads.	5608493
Pamiętam, że zeszły grudzień był bardzo śnieżny.	I remember that last December was very snowy.	5608496
Wszystkiego dobrego z okazji rocznicy!	Happy anniversary!	5629694
Na szczęście pogoda była ładna.	Luckily, the weather was good.	5631974
Rzeczy się niszczą.	Things break.	5637020
To są melony.	They are melons.	5651908
Oni są aktorami.	They are actors.	5651911
Nagle zobaczyłyśmy, że w naszym kierunku płynie rekin.	Suddenly we saw a shark swimming our way.	5652985
Twoja sukienka jest zbyt kolorowa na pogrzeb.	Your dress is too colourful for a funeral.	5652999
Nie znam się na drogich zegarkach.	I don't know a thing about expensive watches.	5653007
Moim zdaniem nie powinno się strzelać do borsuków.	In my opinion, badgers should not be shot.	5653012
Kiedyś sęp był ptakiem żyjącym w Polsce.	Once, the vulture was a bird that lived in Poland.	5653018
Nikt nie zgłasza się na ochotnika.	Nobody volunteers.	5659950
Nikt nie zgłosił się na ochotnika.	Nobody volunteered.	5659958
On jest mądry.	He's smart.	5665545
Ona jest modna.	She's fashionable.	5665560
Ona jest w depresji.	She's depressed.	5665563
Kiedy ostatnio spadłeś z łóżka?	When was the last time you fell off the bed?	5674999
Zapasowe koło jest w bagażniku.	The spare tyre is in the boot.	5700096
To jest moja jedyna nadzieja.	It's my only hope.	5700097
Dywany dobrze pasują do zasłon.	The rugs are a good match for the curtains.	5700098
Moja broda szybko rośnie.	My beard grows quickly.	5703733
Czy ten sklep jest otwarty w niedziele?	Is this store open on Sundays?	5705224
Dziewczyna kręciła się przed domem.	The girl loitered in front of the house.	5708481
W tym roku nie mam czasu na urlop.	I don't have time for a vacation this year.	5711826
Całe przedpołudnie spędziłem w łóżku.	I spent the entire morning in bed.	5714912
Nasza wieś jest katolicka, ale sąsiednia wieś - ewangelicka.	Our village is Catholic, but the neighbouring village is Evangelist.	5717248
Myślę, że wyróżniałbyś się z brodą.	I think you'd look distinguished with a beard.	5733250
Byłem za szybki.	I was too fast.	5737278
Ona robi z igły widły.	She is making a mountain out of a molehill.	5795313
Jego samochód naprawdę przyciąga cipki.	His car is a real pussy magnet.	5832349
Ta szkoła jest na rynku.	That school is on the market.	5837068
Trzeba to zrobić w inny sposób.	It has to be done a different way.	5837090
Jestem też bezrobotna.	I am also unemployed.	5868804
Jestem też bezrobotny.	I am also unemployed.	5868806
Zjadłem trochę sera.	I ate some cheese.	5879345
Umiesz policzyć po francusku do stu?	Can you count to one hundred in French?	5882603
Musiałem uczyć się francuskiego w liceum.	I had to study French in high school.	5882708
Pozbawione liści gałęzie starego dębu były jak zamrożone błyskawice.	The branches of the old oak, stripped of their leaves, were like frozen bolts of lightning.	5890599
Ten przepis wejdzie w życie w przyszłym roku.	This regulation will take effect next year.	5894874
Mam kilka czapek.	I have several caps.	5900513
Jej celem jest zostanie nauczycielem.	Her goal is to become a teacher.	5907146
Irlandię i Anglię dzieli morze.	Ireland and England are separated by sea.	5909140
Nie mów mu, ile mam lat.	Don't tell him how old I am.	5909141
W mieszkaniu są trzy pokoje?	There are three rooms in the apartment?	5909148
W tej posiadłości robią świetny ocet.	At this property, they make excellent vinegar.	5909156
On ani trochę nie szanuje uczuć innych ludzi.	He has absolutely no respect for other people's feelings.	5913192
Wkrótce przyzwyczai się do tutejszego klimatu.	He will soon get used to the climate here.	5913217
On wkrótce wróci do gry.	He will return to the game soon.	5913585
Przygotował się do nadchodzącego wyjazdu.	He prepared for his imminent departure.	5913586
Kontynuował, jak gdyby nigdy nic.	He went on talking as though nothing had happened.	5913647
Jelenie są całkiem inteligentne.	Deer are fairly intelligent.	5919855
Ostatniej nocy miałem dziwny sen.	Last night I had a weird dream.	5920935
Marzł, więc trząsł się z zimna.	He was freezing, so he shivered with cold.	5923446
Chwycił mnie za nadgarstek.	He seized me by the wrist.	5927971
Chwycił mnie za kark.	He seized me by the neck.	5927973
Dziś jest deszczowa pogoda.	It's rainy today.	5927976
Czy ten komputer jest głupi?	Is this computer stupid?	5932994
Mógłbym wiele na ten temat opowiadać.	I could say a lot about this topic.	5934306
Bilet może pan kupić w pociągu.	You can buy a ticket on the train.	5934310
Bilet może pan kupić u konduktora.	You can purchase a ticket from the conductor.	5934311
Większe nie zawsze znaczy lepsze.	Bigger is not always better.	5934323
Codziennie powstają nowe słowa.	New words are invented daily.	5947794
Przeczytałem jeszcze kilka rozdziałów, zanim poszedłem spać.	I read a few more chapters before I went to sleep.	5953791
Przeczytałem ten raport przed obiadem.	I read that report before lunch.	5953794
To było na wycieraczce.	This was on the doorstep.	5954568
Widziałem ich całujących się za stodołą.	I saw them kissing behind the barn.	5955311
Kto jest twoim ulubionym reżyserem?	Who is your favourite director?	5955330
To jest idiom.	It's an idiom.	5955342
Powinniśmy kupić tę lampę.	We should buy that lamp.	5956198
Ta lampa jest dość droga.	It's a pretty expensive lamp.	5956203
Rak jest okropną chorobą.	Cancer is a terrible disease.	5956214
Nie mogę iść dzisiaj do pracy, ponieważ mam grypę.	I can't go to work today because I have the flu.	5956215
Biedronka jest owadem, który wszyscy lubią.	Ladybirds are insects that everyone likes.	5959870
Papuga jest ptakiem, który potrafi mówić.	A parrot is a bird that can talk.	5959880
Mam w mieszkaniu podwieszany sufit.	My apartment has a suspended ceiling.	5959893
Moja koleżanka zawsze ucieka przed pająkami.	My friend always runs away from spiders.	5959922
Czy jednym z twoich ulubionych jest ośmiornica?	Is the octopus one of your favourites?	5959933
Dziś na kolację będzie pstrąg z pomarańczami.	Trout with oranges is for dinner tonight.	5959963
Na tę sprawę mamy odmienne poglądy.	We have conflicting opinions on the matter.	5959966
Po podwórku przechadzał się majestatyczny kogut.	A majestic rooster paced around the yard.	5959971
Zrobiłem jedynie to, co miałem zrobić.	I only did what I had to do.	5960544
Poszedł na pocztę, by nadać list.	He went to the post office to mail the letter.	5960567
Brazylia ma jedną trzecią wszystkich lasów tropikalnych na świecie.	Brazil has one-third of the world's rain forests.	5961626
Mój ojciec nie jest rozmowny.	My father is not talkative.	5961636
Gdyby powiedział mi prawdę, wybaczyłbym mu.	If he told me the truth, I would forgive him.	5961686
Czy to jest cukierek?	Is that candy?	5961806
Czy to jest śnieg?	Is that snow?	5961810
Chciałabym subskrybować twój newsletter.	I would like to subscribe to your newsletter.	5961819
To jest złożony proces.	It is a complex process.	5961870
Jego dom wymaga remontu.	His house needs repairs.	5961875
Idź kupić karmę dla ptaków.	Go buy some bird food.	5966608
Właśnie skończyłem malować dom.	I just finished painting the house.	5966620
Chciałam zapytać go o tamten samochód.	I wanted to ask him about that car.	5969978
To jest darmowa próbka. Nic nie kosztuje.	This is a free sample. It doesn't cost anything.	5969994
Wiosna przychodzi, gdy kwiaty zaczynają kwitnąć.	Spring comes when flowers begin to bloom.	5974901
On wpycha mnie w krzaki.	He pushes me into the bushes.	5974903
Na następnej stacji mamy przesiadkę.	We're changing at the next stop.	5975477
Nie wdawajmy się w kłótnię.	Let's not get into an argument.	5982759
Żadna kultura nie jest idealna.	No culture is perfect.	5982761
Niektóre kultury są lepsze od innych.	Some cultures are better than others.	5982776
Coś strasznego musiało się stać.	Something terrible must've happened.	5985109
Co to oznacza, gdy dziewczyna do ciebie mruga?	What does it mean when a girl winks at you?	5988578
Nie chciałbym przekroczyć terminu.	I wouldn't want to miss the deadline.	5988859
Mama kazała mi pracować wbrew mej woli.	Mom put me to work against my will.	5988866
Ta inwestycja jest ryzykowna.	This investment is risky.	5993155
Rosja jest częścią Europy czy Azji?	Is Russia part of Europe or Asia?	5993163
Człowiek ma władzę nad wszystkim, tylko nie nad swoim sercem.	Man has control over everything but his own heart.	5993457
Mam osiemnaście lat.	I am eighteen years old.	5996236
Całkiem mi dobrze tym, co mam.	I'm perfectly happy with what I have.	6029692
Proszę, zadzwoń rano po taksówkę.	Call a taxi in the morning, please.	6030148
W oknie pojawiło się poranne słońce.	The morning sun came in the window.	6030157
Ucz się w chłodzie o poranku.	Study in the cool of the morning.	6030158
Co rano spaceruje do parku.	He walks in the park every morning.	6030176
Dyrektor spotkał się z gośćmi w godzinach porannych.	The director met guests in the mornings.	6030203
Zadzwoniła do mnie po południu.	She rang me in the afternoon.	6030312
Spotkaliśmy się o drugiej po południu.	We met at two in the afternoon.	6030345
Temperatura ciała jest wyższa po południu.	Body temperature is highest in the afternoon.	6030347
Ona jest zawsze wolna po południu.	She is always free in the afternoon.	6030357
Trener dał instrukcje w godzinach popołudniowych.	The trainer gave instructions in the afternoons.	6030374
Zebranie skończyło się o trzeciej po południu.	The meeting ended at three in the afternoon.	6030431
Po południu udzielimy wywiadu.	We'll give an interview in the afternoon.	6030439
Ona musi iść na zakupy po południu.	She has to go shopping in the afternoon.	6030471
Grają w piłkę w parku każdego popołudnia.	They play ball in the park every afternoon.	6030474
Chodziłem przez dwie godziny po południu w upale.	I walked for two hours in the afternoon heat.	6030524
Po południu pogoda zmieniła się na mokrą i mglistą.	In the afternoon the weather became wet and foggy.	6030573
Wrócił późnym wieczorem do domu.	He came home late in the evening.	6030911
Zmierzch zbliżał się do doliny.	Evening was closing in on the valley.	6030924
On jest zazwyczaj w domu wieczorem.	He is generally at home in the evening.	6031013
Dan nawet nie wypełnił formularza.	Dan didn't even fill in the form.	6031066
Śnieg topnieje na wiosnę.	Snow melts in the spring.	6031080
Rolnicy sieją nasiona na wiosnę.	Farmers sow seeds in the spring.	6031084
Sadzi słoneczniki na wiosnę.	He plants sunflowers in the spring.	6031086
Krajobraz wiejski jest piękny na wiosnę.	The countryside is beautiful in the spring.	6031094
Kwiaty w ogrodzie kwitną wiosną.	The flowers in the garden bloom in spring.	6031103
Nowe rośliny rosną w ogrodzie na wiosnę.	New plants grow in the garden in spring.	6031104
To wypada w niedzielę.	It falls on Sunday.	6031119
Mój ojciec uprawia ogród w niedziele.	My father gardens on Sundays.	6031129
Mój kot miauczy cały czas.	My cat meows all the time.	6061135
Dzisiaj jest środa, prawda?	Today's Wednesday, innit?	6067452
Uważaj na rowerzystów i pieszych.	Watch out for cyclists and pedestrians.	6102836
O której jest przerwa?	What time is the break?	6105411
Czy potrzebuje pan pracowników?	Do you need a worker?	6105417
Nie, jeszcze tego nie przymierzałem.	No, I haven't tried it on yet.	6109661
Ktoś jest w naszym garażu.	Someone's in our garage.	6109677
Straciliśmy wszystko i musieliśmy zacząć od zera.	We lost everything and had to start from scratch.	6109708
Cześć, i dzięki za ryby!	So long, and thanks for all the fish!	6147427
Proszę mnie źle nie zrozumieć.	Please don't get me wrong.	6147797
To była kiedyś piekarnia.	This used to be a bakery.	6148845
Jajko jest uniwersalnym symbolem życia i odrodzenia.	The egg is a universal symbol of life and rebirth.	6150569
Dzisiaj jest piąty marca.	Today is the fifth of March.	6154716
On waży o dziesięć kilo więcej niż ja.	He weighs 10 kilograms more than I do.	6154821
On nawet nie zna twojego imienia.	He doesn't even know your name.	6154999
Gdyby nie jego pomoc, poniosłabym porażkę.	If it hadn't been for his help, I'd have failed.	6155004
Może zacząć padać w każdej chwili.	It may rain at any moment.	6155006
Kampania kończy się w poniedziałek.	The campaign ends on Monday.	6155029
Na koncercie było za dużo ludzi.	There were too many people at the concert.	6155036
Nie traćmy naszego czasu.	Let's not waste our time.	6155052
Jego biuro jest bardzo blisko mojego.	His office is very close to mine.	6155069
Nawyki są trudne do przezwyciężenia.	Habits are difficult to break.	6155102
Dyrektor szkoły przedstawił nowego nauczyciela.	The principal presented the new teacher.	6155108
To jest najdłuższy most na świecie.	This is the longest bridge in the world.	6155120
Musieli zadzwonić po staż pożarną żeby ugasić pożar.	They had to call the firefighters to put out the flames.	6155134
Jak dużo monet mi dałeś?	How many coins did you give me?	6155570
Będę się już zbierać.	I'll be on my way.	6155581
Ten plan się nie powiedzie.	This plan won't work.	6155594
Szafa stała na lewo od drzwi.	The wardrobe stood to the left of the door.	6155767
Najbardziej podobają mi się jesienne kolory.	I like autumn colours the most.	6155812
Czy sęp może zjeść geparda?	Can a vulture eat a cheetah?	6155975
Mój szwagier był innego zdania.	My brother-in-law was of a different opinion.	6156014
Papuga uciekła ze swojej klatki.	The parrot escaped from its cage.	6156032
Głębokość przyjaźni nie zależy od długości znajomości.	Depth of friendship does not depend on length of acquaintance.	6156050
Co było pierwsze, kura czy jajko?	What was first, the chicken or the egg?	6156057
To danie najlepiej smakuje na zimno.	This dish is best eaten cold.	6156060
Ten ptak to chyba wróbel.	That bird is probably a sparrow.	6156262
Jest bardziej kolorowe niż się spodziewałem.	It's more colourful than I expected.	6156266
Myślisz, że powinnam zacząć nosić kolorowe soczewki?	Do you think that I should start to wear coloured contact lenses?	6156273
Osioł od stuleci pomagał człowiekowi.	The donkey has been helping man for centuries.	6156335
Twój sweter jest bardziej kolorowy od mojego.	Your jumper is more colourful than mine.	6156372
Temperatura wody była za niska.	The water temperature was too low.	6156392
W telewizji leciał jakiś głupi serial.	Some stupid series was on TV.	6156406
Turyści przejechali obok kwitnących drzew owocowych.	The tourists drove past blooming fruit trees.	6156448
Jest kwadrans po osiemnastej.	It's 6:15pm.	6156463
Ten sweter jest na mnie za ciasny.	This jumper is too tight for me.	6156489
Myślałam, że to osa, a to była pszczoła.	I thought this was a wasp and that was a bee.	6156499
Próbowałam udawać, że wszystko mi jedno.	I tried to pretend that I didn't care.	6156544
Cała wiedza pochodzi z góry.	All wisdom comes from above.	6156591
Przyszedł mu do głowy dobry pomysł.	A good idea crossed his mind.	6156600
Na szczęście żaden z pasażerów nie ucierpiał.	Fortunately, no passengers were injured.	6156609
Oczywiście wtedy okolica była o wiele bardziej kolorowa.	Of course, the neighbourhood was a lot more colourful back then.	6157034
Tanio sprzedałem moje książki.	I sold my books cheaply.	6157077
Możliwe, że fabryka zostanie zamknięta w przyszłym tygodniu.	Possibly the factory will be closed down next week.	6157079
Nie zaprosili mnie na ślub.	They did not invite me to their wedding.	6157184
Dziękuję, że pan oddzwonił.	Thanks for returning my call.	6157212
Dziękuję, że oddzwoniłeś.	Thanks for returning my call.	6157214
Dziękuję, że oddzwoniłaś.	Thanks for returning my call.	6157215
Nie zamierzają mu pomagać.	They aren't going to help him.	6157413
To mała różnica.	It makes a little difference.	6157427
Czy pożyczałeś kiedykolwiek pieniądze od swojej firmy?	Have you ever borrowed money from your company?	6157507
Dziewczyna włożyła klucz do kieszeni.	The girl put the key in her pocket.	6157522
Nie mamy już żadnych ziemniaków.	We don't have any potatoes any more.	6157540
Powiedziano mi właśnie, że mam wziąć swój własny sprzęt.	I've just been told that I have to bring my own equipment.	6157650
Zaczyna brakować mięsa.	Meat's scarce.	6157656
Jeśli czegoś nie wiemy, wypada zapytać ludzi, którzy wiedzą.	If we don't know, it is fitting that we ask people who know.	6157942
Chcę zostać mechanikiem.	I want to become a mechanic.	6157958
Moje biuro jest w centrum miasta.	My office is in the city centre.	6157960
Jak dużo kosztują te spodnie?	How much do the trousers cost?	6157966
Luty to drugi miesiąc roku.	February is the second month of the year.	6157970
Wszyscy wiedzieli, że był molem książkowym.	Everyone knew that he was a bookworm.	6157977
Biblioteka jest koło przystanku autobusowego.	The library is next to the bus stop.	6157992
Przed laty zwykła zadawać się z bandą motocyklistów.	Years ago, she used to hang around with a bunch of bikers.	6159374
Na tej górze jest dużo małp.	There are many monkeys on the mountain.	6159375
Mógłbyś przynieść jeszcze jedną butelkę wody?	Could you bring another bottle of water?	6159821
Poezja to wyrażanie prawdy językiem metafor.	Poetry is the expression of truth in metaphorical language.	6159826
Nie chcesz jeść zimnej zupy.	You wouldn't want to drink the soup cold.	6159843
Kiedy byłam mała, lubiłam czytać baśnie.	When I was a kid, I liked to read fairy tales.	6159847
Kiedy jeździłam do miasta, często odwiedzałam muzea.	When I traveled to the city, I often visited the museums.	6159848
Robotnicy budują domy przez cały dzień.	Workers build the houses all day long.	6159853
Pojechała na narty.	She went skiing.	6159901
Im wyższa cena rzeczy, tym niższa wartość człowieka.	The higher the price of things, the less valued the individual himself.	6159902
Korzenie edukacji są gorzkie, za to owoc słodki.	The roots of education are bitter, but the fruit is sweet.	6159903
Czy ten materiał jest dobry?	Is that material good?	6159907
Wigilia Bożego Narodzenia jest zwykle spokojniejsza od innych dni.	Christmas Eve is usually quieter than other days.	6159912
Wiele restauracji nie jest otwartych w Wigilię.	Many restaurants do not open on Christmas Eve.	6159914
Zawsze trzeba mierzyć wysoko.	We must always aim high.	6159940
Odwiedzam babcię dwa razy w tygodniu.	I visit my grandmother twice a week.	6159942
Zastanawiam się jakie są zalety tej techniki.	I wonder what the advantage of this technique is.	6159986
Kogut nie znosi jajek.	The rooster doesn't lay eggs.	6160051
To była całkowicie moja wina.	It was totally my fault.	6160205
Czerwone wino dobrze pasuje do mięsa.	Red wine goes well with meat.	6160239
To cisza przed burzą.	This is the calm before the storm.	6160258
Dobrze ci w tych okularach.	Those glasses suit you.	6160272
Wyjrzałam przez okno aby podziwiać widok.	I looked out the window to admire the view.	6160277
Zero to wyjątkowa liczba.	Zero is a special number.	6160278
Ratownicy są bardzo odważni.	Lifeguards are very brave.	6160502
Jabłonie zakwitły wcześnie w tym roku.	The apple trees blossomed early this year.	6160542
Bez dwóch zdań.	No doubt.	6160771
Jego macocha jest moją szwagierką.	His stepmother is my sister-in-law.	6160961
Pożyczyłem je z miejskiej biblioteki.	I borrowed them from the town library.	6160967
Siostra opowiadała mi o borsukach, które widziała w lesie.	My sister was telling me about the badgers she saw in the woods.	6160973
Można tam znaleźć informacje o wielu czasopismach.	There you can find information about a lot of magazines.	6161026
Granica między geniuszem a szaleństwem jest bardzo cienka.	There's very fine a line between genius and insanity.	6161033
Nigdy nie całowałam się z dziewczyną.	I've never kissed a girl.	6169419
Nigdy nie całowałem się z dziewczyną.	I've never kissed a girl.	6169420
Nie pozwól tym wężom uciec.	Don't let these snakes escape.	6170154
W tym lesie jest wiele węży.	There are many snakes in this forest.	6170156
Mam wizytę u lekarza.	I have a doctor's appointment.	6173320
Poprzednio mechanik wziął dużo więcej.	Previously the mechanic took a lot more.	6178832
Wcześniej mechanik wziął dużo więcej.	Previously the mechanic took a lot more.	6178834
Ona napisała imię i adres, zgodnie z prośbą.	She wrote down the name and address as requested.	6178900
W dobie Internetu ludzie piszący listy uważani są za dziwnych.	In the age of the Internet, people who write letters are considered odd.	6207682
Dziennikarze piszący dla tego wydawnictwa nie są obiektywni.	The journalists who write for this publisher are not impartial.	6207685
Przecież nie mówiłyśmy, że to zrobimy.	After all, we didn't say we'd do it.	6207693
Usterka została naprawiona.	The fault was fixed.	6207847
Miłość jest silniejsza od nienawiści.	Love is stronger than hatred.	6217033
Wszyscy uwierzyliśmy w to, co powiedział.	We all believed in what he said.	6300182
W czasie wycieczki prawie nie jadłyśmy ryżu.	We hardly ate rice during the trip.	6300200
Czy trzeba kotom obcinać pazurki?	Do cats' claws need trimming?	6300213
Czy można podawać kotom surowe mięso?	Can raw meat be fed to cats?	6300223
Mówiłam wam, ale nie słuchaliście!	I told you, but you didn't listen!	6300245
Często razem gotowali.	They often cooked together.	6300248
Próbowałyście już tej nowej sałatki?	Have you tried this new salad yet?	6300517
Ktoś zabrał mój kieliszek, kiedy nie patrzyłam.	Someone took my glass when I wasn't looking.	6300548
Tańsza nie zawsze znaczy gorsza.	Cheaper doesn't always mean worse.	6301909
W kawiarni obok kawa jest o połowę tańsza.	The coffee in the café next door costs half as much.	6301915
Nie stać mnie na nic droższego.	I can't afford anything more expensive.	6301968
Ale nie, ty wolałaś pojechać do droższego supermarketu.	But no, you preferred to go to the more expensive supermarket.	6301971
Tańsze wino jest czasem lepsze od droższego.	Cheaper wine is sometimes better than dearer.	6301976
Podajcie mi swoje nazwiska.	Tell me your names.	6301995
Niektóre z nich mogą być wolniejsze niż się spodziewasz.	Some of them might be slower than you'd think.	6304025
Jakie zwierzęta są wolniejsze od ślimaka?	What animals are slower than a snail?	6304027
Niestety, te pociągi są jeszcze wolniejsze.	Unfortunately, those trains are even slower.	6304032
To była jedyna kategoria, która pasowała.	That was the only suitable category.	6304097
Każda kategoria ma swoje wady i zalety.	Every category has its disadvantages and advantages.	6304108
Pieniądze nie mogą zaspokoić wszystkich pragnień.	Money can't satisfy every desire.	6304154
Jest nauczycielką jogi.	She's a yoga teacher.	6304182
Jak dużo zarabiają policjanci?	How much do police officers make?	6304194
W życiu nie byłem szczęśliwszy.	I've never been happier in my life.	6304231
Kupiłam dom z basenem.	I bought a house with a pool.	6304251
Usiądźmy i złapmy oddech.	Let's sit down and catch our breath.	6304254
Jedyną prawdą jest rzeczywistość.	The only truth is reality.	6305416
Nigdy nie przepadałem za urodzinami.	I have never been too big on birthdays.	6305433
To sztuczna szczęka mojej babci.	These are my grandmother's artificial teeth.	6305444
Jest problem z moim kontem.	There is a problem with my account.	6305457
Mimo że jest młody, ma siwą brodę.	Although he's young, he has a grey beard.	6305460
Wzięła mnie pod swoje skrzydła.	She took me under her wing.	6305474
Jest najbardziej pracowity z nas czterech.	He's the hardest-working of the four of us.	6305485
On jest w centrum uwagi.	He is the center of attention.	6305497
On patrzy na kobiety z góry.	He looks down on women.	6305515
Ona mi da jeszcze jeden dywan.	She'll give one more carpet to me.	6305680
Ten krajobraz nie jest mi znajomy.	The landscape is unfamiliar to me.	6305684
Sukienki Manueli są bardzo eleganckie.	Manuela's dresses are very elegant.	6305694
Ktoś musiał ukraść twój zegarek.	Somebody must've stolen your watch.	6305698
Nie bij mnie tak mocno.	Don't hit me so hard.	6305726
Nie będę odpowiadał na pytania.	I won't answer questions.	6305738
Węgry to państwo położone w środkowej Europie.	Hungary is a state located in Central Europe.	6306728
Miałam zwyczaj co rano chodzić na spacery.	I used to take a walk every morning.	6306746
Idź przynieść mi następne piwo.	Go get me another beer.	6306749
Na stole jest parę książek.	On the table there are some books.	6306753
Stało się coś okropnego.	Something horrible has happened.	6306776
On nadużywa swojej władzy.	He abuses his authority.	6306781
Jedno wyjaśnia drugie.	One explains the other.	6306790
Możemy iść do cyrku?	Can we go to the circus?	6306825
Zaczerwieniła się jak burak.	She turned bright red.	6308142
Zaczerwienił się jak burak.	He turned bright red.	6308144
Jak podwoić szybkość czytania?	How do you double your reading speed?	6309672
Z wiekiem spada nasza szybkość reakcji.	Reaction time decreases with age.	6309680
Znasz chłopca z tej fotografii?	Do you know the boy in the picture?	6313059
Czy w tym parku jest zoo?	Is there a zoo in the park?	6313070
Gąsienica przemieniła się w pięknego motyla.	The caterpillar transformed into a beautiful butterfly.	6313159
Nie lekceważ jej determinacji.	Don't underestimate her determination.	6313177
Nie lekceważ jego determinacji.	Don't underestimate his determination.	6313178
Moja matka otworzyła drzwi bardzo ostrożnie.	My mother opened the door very carefully.	6313192
Poszli do kościoła w Wigilię.	They went to church on Christmas Eve.	6313328
Przyniosłem wam jeszcze jedną kołdrę.	I brought you another blanket.	6313385
Przyniosłam ci jeszcze jeden koc.	I brought you another blanket.	6313390
Przyniosłem ci jeszcze jedną kołdrę.	I brought you another blanket.	6313396
Nie wolno nam pić w tym teatrze.	We're not allowed to drink in this theatre.	6313510
Nie dostałem podwyżki od dwóch lat!	I haven't gotten a raise in two years!	6313799
W każdym razie, program zakończył się sukcesem.	At any rate, the program was a success.	6313846
Po chwili mężczyzna wszedł do pokoju.	After a while, the man came into the room.	6313893
Muzycy są zwykle wrażliwi na krytycyzm.	Musicians are usually sensitive to criticism.	6313902
Nie mamy tej książki w promocji.	We don't have that book on offer.	6319645
Kupiłem tę książkę po zniżce.	I bought this book at a discount.	6319672
Sprzedajemy tę książkę po zniżce.	We're selling this book at a discount.	6319673
Klienci będą mogli kupić wybrane produkty ze zniżką.	Clients will be able to buy select products at a discount.	6319691
Tanie zboże zalewa nasz rynek.	Cheap grain is flooding our market.	6320369
Za następnym budynkiem znajdował się magazyn na zboże.	Behind the next building was a granary.	6320373
Twoje buty są w niewłaściwym rozmiarze.	Your shoes aren't the right size.	6320664
Nie idą w dobrym kierunku.	They aren't going in the right direction.	6320671
Czy nie robisz tego, co uważasz za słuszne?	Aren't you doing what you think is right?	6320676
Plan się jednak nie powiódł.	The plan failed after all.	6320686
Mimo wszystko, jest twoim szefem.	After all, he's your boss.	6320705
Czy jest pochmurno?	Is it cloudy?	6320875
Czy to jest gorące?	Is it hot?	6320882
Dzieci robią za dużo hałasu.	The kids are making too much noise.	6321717
Koty, psy i konie są zwierzętami.	The dogs, the cats, and the horses are animals.	6322219
Jak mogę tam dojechać?	How can I get there?	6322264
Wielu bogatych ludzi mieszka w tej okolicy.	Many rich people live in this neighborhood.	6322267
Ona potrzebuje płaszcza.	She needs a coat.	6322280
Gdzie znajduje się katedra?	Where is the cathedral located?	6322293
Orzeł musiał być karmiony z ręki.	The eagle had to be fed by hand.	6322297
Kupiłem stół do salonu.	I bought a table for the living room.	6322305
Mam zamiar uczyć się biologii i hiszpańskiego.	I'm going to study biology and Spanish.	6324381
Wolę bluzę z bawełny.	I prefer a cotton blouse.	6324468
Nie mam zamiaru nigdzie wychodzić w taki mróz.	I don't plan on going out anywhere in that cold.	6327762
Kobieta nosiła naszyjnik z pereł.	The lady wore a necklace of pearls.	6328108
Jak tam wycieczka?	How was your trip?	6328139
Kobieta powiedziała, że to jej miejsce.	The woman said the spot was hers.	6328178
Niestety nie zdążyłam na czas.	Unfortunately, I did not make it on time.	6328203
Nigdy nie widziałem czegoś tak pięknego.	I've never seen anything so beautiful.	6328264
To jest na parterze.	It's on the ground floor.	6328268
Spotkałam go w styczniu.	I met him in January.	6360119
Już kiedyś cię gdzieś widziałem.	I've seen you somewhere before.	6368370
Jak mogę wydrukować swoje CV?	How can I print my résumé?	6371458
W którym momencie zaczyna się życie?	When does life begin?	6371459
Nasze ciała zbudowane są z komórek.	Our bodies are made of cells.	6371461
Pojechaliśmy na narty do Kanady.	We went skiing in Canada.	6373113
Kiedyś często pływaliśmy w tej rzece.	We used to swim in this river a lot.	6373366
Architektura starego miasta w Warszawie zawsze mnie fascynowała.	The architecture of Warsaw's Old Town has always fascinated me.	6381371
Szczęście nie jest celem, a sposobem na życie.	Happiness is not a destination, it is a way of life.	6384941
Napiszę ci maila jak już to dokładanie sprawdzę.	I will email you after I check it thoroughly.	6387870
On mieszka daleko od mojego domu.	He lives far away from my house.	6395672
To jest psia buda, którą zrobiłem sam.	This is a doghouse that I made myself.	6396860
Nigdy nie lubiłem chodzić do szkoły.	I never liked school.	6400779
W końcu pokazał swoją prawdziwą twarz.	He has finally shown his true colors.	6404020
Powinnaś była pokazać mu urządzenie.	You should have shown him the device.	6404028
Pokazali nam wszystkie swoje rodzinne zdjęcia.	They showed us all their family photos.	6404037
Praktyka pokazuje, że pieniądze szczęścia nie dają.	Experience has shown that money does not bring happiness.	6404060
Większość śniegu pokazywanego w filmach jest fałszywa.	Most of the snow shown in films is fake.	6404064
Mogłabym ci pokazać jak to zrobić.	I could've shown you how to do that.	6404073
Pokazałbym ci jak to zrobić dobrze.	I would've shown you how to do it right.	6404078
Nie pokazywałeś tego nikomu innemu, prawda?	You haven't shown this to anyone else, have you?	6404085
Nie pamiętam, kiedy to ostatnio czyściłam.	I don't remember when I last cleaned it.	6406070
Mam już plany na weekend.	I already have plans this weekend.	6406153
Siedzieliśmy na fotelach.	We were sitting in the armchairs.	6406213
Na obiedzie obżarliśmy się pizzą i kurczakiem.	We pigged out on pizza and chicken at lunchtime.	6441447
Pochłaniam jeden kryminał za drugim.	I devour one detective story after another.	6441586
Czy jest dziś coś pilnego do przetłumaczenia?	Is there anything urgent to translate today?	6441595
To tylko prywatna opinia.	It's only a personal opinion.	6441599
Sami tęsknił za swoją żoną i dziećmi.	Sami missed his wife and children.	6441615
Moje życie to nie twój problem.	My life isn’t your problem.	6441636
Nie musiałem zapłacić rachunku, ponieważ w mojej kawie była mucha.	As there was a fly in my coffee, I didn't have to pay the bill.	6464002
Sąsiad niczego nie widział.	The neighbor didn't see anything.	6464006
Jak najszybciej dojechać stąd na lotnisko?	What's the fastest way to get the airport from here?	6464185
Moja łyżka jest za duża!	My spoon is too big!	6477371
Jeż jest małym zwierzęciem.	The hedgehog is a small animal.	6483087
Jest chora od ostatniej środy.	She's been ill since last Wednesday.	6483550
Tym razem nie unikniemy kary.	We won't be able to avoid being punished this time.	6484388
Mogłabym również wynająć samochód.	I could also hire a car.	6484582
Nasz plan nie zadziałał w praktyce.	Our plan didn't work in practice.	6484979
On lubi galaretkę.	He likes jelly.	6484983
Dobrze pasuje do twoich spodni.	It goes well with your trousers.	6484989
Ładnie wygląda z twoimi spodniami.	It looks nice with your trousers.	6484990
Moja galaretka nie chce zastygnąć.	My jelly won't set.	6485004
Wierz mi, widziałem gorsze rzeczy.	Trust me, I've seen worse.	6485009
Pieniądze nie rosną na drzewach.	Money doesn't grow on trees.	6487272
W klatce mam papugę.	I have a parrot in a cage.	6488504
Podaj mu mikrofon!	Pass him the mic!	6489726
Ten tablet jest bardzo drogi.	This tablet is very expensive.	6532449
Twój tablet jest na półce.	Your tablet is on the shelf.	6532452
Jak wygląda twój typowy dzień?	What's a typical day for you?	6532975
Chłopak jest zdrowy jak ryba!	The boy's as fit as a fiddle!	6532984
Lampartowi zaczynały się nudzić jego cętki.	The leopard was getting bored with its spots.	6533056
Odwołał spotkanie w ostatniej chwili.	He cancelled the meeting at the last minute.	6533060
Moje mieszkanie ma duży salon.	My flat has a big living room.	6533105
Zwykle robię pranie w pralni samoobsługowej.	I usually wash my clothes at a laundrette.	6533109
Chcę dać mamie roślinę.	I want to give Mum a plant.	6533124
Podróżowali na wschód.	They travelled eastwards.	6534019
Co upiekłeś na grillu?	What did you grill?	6534105
Wszystkie zachwycały się jej odwagą.	Everyone marvelled at her courage.	6534249
Skończyło nam się paliwo.	We ran out of petrol.	6534257
Wysłałem to pocztą.	I sent it by post.	6534300
Barman nalał kufel piwa.	The barman pulled a pint.	6534368
Zauważyła w oddali łódź wiosłową.	She caught sight of a rowing boat in the distance.	6534380
W zeszłym roku miałam zapalenie ucha.	I had otitis media last year.	6534395
Melodia nie była mi znana.	The tune was not familiar to me.	6534427
Nie znałem tej melodii.	The tune was not familiar to me.	6534429
Jesień była długa i łagodna.	The autumn was long and mild.	6534438
Kwiaty były jaskrawe i kolorowe.	The flowers were bright and colourful.	6534469
Wybrała się w podróż z przyjaciółką.	She went travelling with her friend.	6534495
Woda chlusnęła z zepsutego kranu.	Water spouted from the broken tap.	6534498
Woda trysnęła z zepsutego kranu.	Water spouted from the broken tap.	6534499
Poszliśmy zobaczyć się z sąsiadami.	We went to see our neighbors.	6534510
Aluminium stało się droższe niż złoto.	Aluminium became more expensive than gold.	6534555
Jego samochód był długi na trzy metry.	His car was three metres long.	6534556
Odsunęła się na dalszy plan.	She has marginalised herself.	6541717
Smażyłaś kiedykolwiek rybę na grillu?	Have you ever grilled fish?	6541738
Czy grillowałeś już kiedyś rybę?	Have you ever grilled fish?	6541739
Nalałem wody do garnka.	I've filled the jug with water.	6541784
Nasza sąsiadka znowu była u fryzjera.	Our neighbour has been at the hairdresser’s again.	6541806
Nie wyściubiłem dziś nosa z domu.	I haven't set foot outside the house today.	6541808
Podkradł się do tylnych drzwi.	He sneaked around to the back door.	6541937
Jej policzki były zimne jak lód.	Her cheeks were as cold as ice.	6541943
Zaczęło się dokładnie o czasie.	It started right on schedule.	6546451
Kto w tej chwili nie pisze tekstu?	Who isn't writing the text?	6546455
Sami zaczął to akceptować.	Sami started to accept it.	6546473
Zaczęło się marzeniem.	It all started with a dream.	6546479
Zaczęło się od idei.	It all started with an idea.	6546482
Wszystko zaczęło się w tym laboratorium.	It all started in this lab.	6546484
Wszystko zaczęło się od jednego zdania.	It all started with a sentence.	6546485
Ona zaczęła! A właśnie, że ty!	"She started it!" "No, you did!"	6546486
Nie ma żadnego powodu, żebym rezygnował ze swojego planu.	There is no reason that I should give up my plan.	6547624
Nigdy nie zamieniłam słowa ze staruszkiem, który mieszka obok.	I've never spoken to the old man who lives next door.	6547627
Zawsze jest trudno zacząć pisać list.	It's always difficult to start a letter.	6547631
Wszystko zaczęło się pewnej gorącej letniej nocy.	It all started on a hot summer night.	6547658
Wszystko zaczęło się w dzień moich narodzin.	It all started the day I was born.	6547665
Zrozumiałe jest, że zaczniemy jutro.	It's understood that we'll start tomorrow.	6547683
To nie ja zacząłem się bić.	It wasn't me who started the fight.	6547705
Moja latarka przestała działać.	My torch has stopped working.	6547706
Samolot właśnie startował.	The aeroplane was just taking off.	6547713
Dziwny mężczyzna chodził tam i z powrotem chodnikiem.	A strange man was walking back and forth on the pavement.	6547728
Loty zostały odwołane.	The flights were cancelled.	6547823
Nie odwołano pikniku.	The picnic hasn't been cancelled.	6547858
Mecz został odwołany z powodu ulewy.	The match was cancelled due to the heavy rain.	6548146
Odwołano lot z powodu gęstej mgły.	The flight was cancelled because of the thick fog.	6548149
Lubi długie spacery po lesie.	He enjoys long walks through the woods.	6553682
Ich rodzice są na urlopie.	Their parents are on holiday.	6553690
Anton regularnie chodzi do spowiedzi.	Anton regularly goes to confession.	6553691
Zawsze dobrze mieć apteczkę pierwszej pomocy w samochodzie.	It's always good to have a first-aid kit in the car.	6553693
Czy obiad jest gotowy, mamo?	Is dinner ready, Mom?	6553754
Sami nigdy się nie goli.	Sami never shaves.	6553757
Cały dzień będę w okolicy.	I'll be around all day.	6553794
Nie puszczę cię.	I'm not letting you go.	6553824
Wiedziałem, że może do tego dojść.	I knew it could happen.	6553918
Czy to jest naprawdę w porządku?	Is it really fair?	6553957
Nie gram w tę grę.	I don't play that game.	6554009
Czy to nie cudowne?	Don't you just love it?	6554029
Czy mógłbym pracować na część etatu?	Could I work part-time?	6554069
To sen, który stał się rzeczywistością.	It's a dream come true.	6554071
Obejrzyjmy to jeszcze raz.	Let's go over it again.	6554094
Chodźmy obejrzeć film.	Let's go watch a movie.	6554099
Załatwmy to wreszcie.	Let's just get it done.	6554102
Dlaczego pan o to pyta?	Why would you ask that?	6554131
Zabieraj te łapy.	Keep your hands off me.	6554146
Ile trwa ten film?	How long is this movie?	6554147
Pozwólcie im wykonywać ich pracę.	Let them do their jobs.	6554159
On jest naprawdę dobrym człowiekiem.	He's really a good guy.	6554234
Wy dwoje jesteście naprawdę życzliwi.	You two are really kind.	6554250
Czy twój ojciec jest lekarzem?	Is your father a doctor?	6554257
Trzymaj to obiema rękami.	Hold it with both hands.	6554263
Nie chciała mu pozwolić wejść.	She wouldn't let him in.	6554271
Nie pozwalała mu wejść.	She wouldn't let him in.	6554272
Byłem na zwolnieniu.	I've been on sick leave.	6554290
Mecz odwołano z powodu ulewy.	The game was rained out.	6554292
Mecz został odwołany z powodu deszczu.	The game was rained out.	6554293
Moja żona pracuje na pół etatu.	My wife works part time.	6554308
Od czego to jest skrót?	What does this stand for?	6554347
Poeta napisał wiele wierszy.	The poet wrote many poems.	6598877
Szukałem moich kluczy przez cały dzień.	I've been looking for my keys all day.	6598927
On walczy o swoje życie.	He's fighting for his life.	6598928
To przypomina mi coś, co słyszałem wczoraj.	That reminds me of something I heard yesterday.	6598969
Judaizm nie jest przeciwieństwem chrześcijaństwa.	Judaism is not the opposite of Christianity.	6599011
Ból w końcu przejdzie.	The pain will eventually go away.	6602692
To przejdzie na emeryturę za rok.	Tom will be retiring next year.	6602697
Mamy wszystkie potrzebne nam dowody.	We have all the evidence we need.	6602777
Znałem go, gdy był niemowlęciem.	I have known him since he was a baby.	6602784
Wiedziałem, że żartowałeś.	I knew you were joking.	6602853
Szukałem czegoś, ale nie mogłem znaleźć.	I was looking for something, but couldn't find it.	6602935
Nie musiałem ci pomagać, ale pomogłem.	I didn't have to help you, but I did.	6603021
Nie mam więcej cierpliwości.	I have no more patience.	6603150
Jeszcze nie mam biletu.	I don't have a ticket yet.	6603182
Nie mam teraz nic do roboty.	I don't have anything to do now.	6603184
On wie, jak nurkować.	He knows how to dive.	6603366
Czy ona mieszka naprzeciwko?	Does she live opposite?	6627164
Jego hobby to zbieranie starych znaczków.	His hobby is collecting old stamps.	6634820
Położył rękę na jej ramieniu.	He laid a hand on her shoulder.	6637551
Sami zawsze pożyczał pieniądze.	Sami was always borrowing money.	6669512
Mam trzy psy i trzy koty.	I have three dogs and three cats.	6670163
Nie byłem w stanie tego naprawić.	I wasn't able to fix that.	6670429
Zawsze grozi, że odejdzie, ale nigdy tego nie robi.	He's always threatening to quit, but he never does.	6670431
Żadna przeglądarka nie jest bezpieczna.	No browser is safe.	6670433
Nie używaj zbyt dużo kleju.	Don't use too much glue.	6671275
Mężczyzna wyszedł z restauracji nie płacąc rachunku.	The man left the restaurant without paying his bill.	6671432
Będę w domu przed północą.	I'll be home by midnight.	6671541
Mam młodszego brata.	I have a younger brother.	6671552
Mam kolekcję skał.	I have a rock collection.	6671558
Czy ta szklanka jest brudna?	Is this glass dirty?	6673122
Rośliny potrzebują światła słonecznego i wody.	Plants need sunshine and water.	6680133
Czy to ci odpowiada?	Are you OK with this?	6680134
Ani śladu wroga w naszej okolicy.	No sign of the enemy in our surroundings.	6683320
Samochody mają cztery koła.	Cars have four wheels.	6689524
Wybieraj swoich przyjaciół ostrożnie.	Pick your friends carefully.	6689530
Nie mógł uwierzyć własnym uszom.	He could not believe his ears.	6690757
Fale najczęściej są powodowane przez wiatr.	Waves are most commonly caused by wind.	6696196
Zatrzymajmy się i odpocznijmy.	Let's stop and rest.	6712072
Mój kot uwielbia ser.	My cat loves cheese.	6729193
Pies niszczy meble w naszym domu.	The dog is destroying the furniture in our house.	6729211
Czyim samochodem wczoraj jechałeś?	Whose car was that that you were driving yesterday?	6729231
Uwaga na meduzy!	Beware of jellyfish.	6733898
Uwaga na złodziei.	Beware of thieves.	6733899
Gdzie jest jadalnia?	Where's the dining room?	6763099
Ten fotel jest wygodny.	This armchair is comfortable.	6763202
Żyj swoim życiem.	Live your life!	6765411
Jestem pewna na dziewięćdziesiąt dziewięć procent.	I'm 99% sure.	6769226
Na gałęzi jest pełno liści.	The branch is full of leaves.	6771291
Ludzie mają bardzo duże mózgi.	Humans have large brains.	6771365
Nie miałem wyboru poza zwolnieniem go.	I had no choice but to fire him.	6773365
W budynku są kamery.	There are cameras inside the building.	6773379
Nie robiłabym tego na twoim miejscu.	I wouldn't do that if I were you.	6773388
Pierwszy jest lepszy od drugiego.	The former is better than the latter.	6794816
Wróćmy na właściwy tor.	Let's get back on track.	6797178
Zejdź z mojego trawnika!	Get off my lawn.	6903820
On napotkał trudności w swojej pracy.	He encountered difficulties in his work.	6903895
Jestem już całkiem dobry w pływaniu.	I'm already pretty good at swimming.	6908619
Właśnie skończyło nam się białe wino.	We just ran out of the white wine.	6923322
Nie przechodź przez ten tunel.	Don't go through this tunnel.	6935761
Grzmot stał się głośniejszy.	The thunder became louder.	6935766
Proszę dodaj moje nazwisko do listy.	Please add my name to the list.	6935777
Przed moim domem jest poczta.	There is a post office in front of my house.	6935795
Ona pomagała swoim przyjaciołom.	She helped her friends.	6993822
Kiedy byłam dzieckiem, często pływałam w morzu.	When I was a child, I often went swimming in the sea.	6995363
Bogactwo nie jest tak ważne jak zdrowie czy szczęście.	Wealth is not as important as health or happiness.	6995399
Kłamał o swoim wieku.	He lied about his age.	7043514
To nie krokodyl, to aligator.	It's not a crocodile, it's an alligator.	7053588
Zrobił to właśnie z tego powodu.	This is the reason why he did it.	7053928
To właśnie dlatego to zrobił.	This is the reason why he did it.	7053929
Poszedł do baru wypić kilka piw.	He went to a bar to drink some beers.	7053952
Przeczytałam dziesięć książek w tym tygodniu.	I read ten books this month.	7053957
Woda w tej fontannie nadaje się do picia.	The water in this fountain is drinkable.	7053967
Ja już widziałem tego gościa.	I have already seen this man.	7105882
Ja już widziałem tego człowieka.	I have already seen this man.	7105884
Z gniazdka wylatywały iskry.	There are sparks flying out of the electric socket.	7119803
Sami musi iść do laboratorium.	Sami has to go to the lab.	7151328
Nie dostałem dokładnie tego, co chciałem.	I didn't get exactly what I wanted.	7151333
Nie mam obowiązku tego robić.	I'm not under any obligation to do that.	7151368
Sześć miesięcy później byli małżeństwem.	Six months later, they were married.	7151398
Nigdy nie kłóć się z nauczycielem przed klasówką.	Never argue with a teacher before an exam.	7151441
Nie wiedziałam, że lubisz operę.	I didn't know you enjoyed opera.	7151471
Nie miałem pojęcia, że lubisz operę.	I didn't know you enjoyed opera.	7151473
To wszystko to moje osobiste rzeczy.	They are all my personal belongings.	7151482
Akumulator wyczerpał mi się na środku autostrady.	My car battery died in the middle of the freeway.	7151487
Nauczycielka jest zajęta ocenianiem sprawdzianów.	The teacher is busy marking papers.	7151494
Ten budynek zmieniał właściciela kilka razy.	This building changed hands several times.	7164614
Sami spotykał się z tą dziewczyną.	Sami was dating this girl.	7164870
Przykro mi, to pomyłka.	Sorry, you have the wrong number.	7166460
Czy sklepy są dziś otwarte?	Are the stores open today?	7180289
Twoja pomoc nie jest już potrzebna.	Your help isn't needed anymore.	7180291
Czy może mi pani pokazać tę drugą świecę?	Could you show me the second candle?	7180708
Prezydent nadał obywatelstwo szpiegowi.	The president granted citizenship to the spy.	7180753
W tym pokoju bardzo źle pachnie.	This room smells terrible.	7183277
Nie doszło do tego z dnia na dzień.	This didn't just happen overnight.	7183407
Sami uciekł z miejsca zdarzenia.	Sami fled the scene.	7183519
Zapomniałam ci powiedzieć, jak ta opiekunka ma na imię.	I forgot to tell you the babysitter's name.	7184373
Zapomniałem ci powiedzieć, jak ta opiekunka do dzieci się nazywa.	I forgot to tell you the babysitter's name.	7184374
To moje rodzeństwo.	They are my siblings.	7184612
Wszyscy lubią chipsy.	Everybody likes chips.	7184625
Sprawdź ciśnienie w swoich oponach.	Check your tyre pressure.	7184627
Klienci stali w kolejce.	The shoppers stood in a queue.	7184806
Wózek jest w pokoju dziecięcym.	The buggy is in the baby's room.	7184823
Moim ulubionym dniem tygodnia jest poniedziałek.	My favourite day of the week is Monday.	7184831
Ktoś zjadł wszystkie ciastka.	Someone ate all the biscuits.	7184885
Te chipsy są tak pyszne, że palce lizać.	These crisps are very moreish.	7184947
Od wieków go nie widziałem.	I haven't seen him for ages.	7184949
Gram w piłkę niemal każdego dnia.	I play football almost every day.	7184977
Kto jest twoim ulubionym aktorem?	Who's your favourite actor?	7184980
Hiszpański to ich język ojczysty.	Spanish is their native language.	7185033
Winda jest dziś zepsuta.	The lift is out of order today.	7185071
Winda dziś nie działa.	The lift is out of order today.	7185073
Jesień to moja ulubiona pora roku.	Autumn is my favourite season.	7185137
Kuchnia jest na trzecim piętrze.	The kitchen is on the third floor.	7185212
Wszystko działa jak w zegarku.	Everything's running like clockwork.	7209446
Nie mogę dać ci żadnych gwarancji.	I can't give you any guarantees.	7246894
On wszedł do domu nie pukając do drzwi.	He entered the house without knocking on the door.	7303716
Czy kiedykolwiek czytałeś historię o kruku i lisie?	Have you ever read the story of the crow and the fox?	7303721
Spotkała swojego chłopaka na ulicy.	She met her boyfriend in the street.	7303735
Podłoga była bardzo zimna.	The floor was very cold.	7303749
Wszystkie dziewczyny go uwielbiają.	All the girls fancy him.	7333813
Wszystkie dziewczyny go uwielbiały.	All the girls fancied him.	7333814
Nie przepadam za komediami romantycznymi.	I do not fancy romantic comedies.	7333816
Tak z ciekawości, czy naprawdę musieliście to zrobić?	Just out of curiosity, did you really have to do that?	7362704
Mój ojciec zawsze wymyśla coś dowcipnego do powiedzenia.	My father always comes up with something witty to say.	7428863
Nie ma prądu od rana.	The power has been off since this morning.	7432389
Na co mu dwa rowery?	Why does he need two bicycles?	7434155
Dlaczego on potrzebuje jeszcze jednego roweru?	Why does he need another bicycle?	7434163
Na co mu jeszcze jeden rower?	Why does he need another bicycle?	7434173
Zamknąłem oczy i słuchałem dźwięku oceanu.	I closed my eyes and listened to the sound of the ocean.	7457241
Wybrałem złą kolejkę.	I chose the wrong queue.	7457325
Brytyjczycy zwykli stać w kolejkach.	British people are used to standing in queues.	7457346
Wszyscy studenci patrzyli na mały kawałek metalu.	All of the students were looking at a little chunk of metal.	7463007
Numer jest zajęty.	The number is engaged.	7463015
To była tylko niegrzeczna uwaga.	It was only a nasty remark.	7493690
Myślę, że to świeży beton.	I think this is fresh concrete.	7551414
Zgodzimy się tylko pod tym warunkiem.	We will only consent on that condition.	7556773
Mamy teraz bardzo dobrą drużynę.	We have a good team right now.	7558745
Jeszcze tylu rzeczy ci nie opowiedziałem.	There's so much I haven't told you yet.	7558748
Spędziliśmy tam miłe chwile.	We had a good time there.	7558792
On chodzi do przedszkola.	He goes to nursery school.	7577623
Podwórko w przedszkolu jest zacienione.	The kindergarten yard is shaded.	7578723
To nie ma dla mnie sensu.	This makes no sense to me.	7582474
Wolałbyś kawę czy herbatę?	Which would you rather have, tea or coffee?	7582478
Chciałbym kupić dom na ulicy Park.	I'd like to buy a house on Park Street.	7582487
Dobra praca będzie wynagrodzona obfitą premią.	Good work will be rewarded with a hefty premium.	7610468
On je steki, kiedy tylko ma okazję.	He eats steak every chance he gets.	7610500
Nie zrobiłem dzisiaj nic interesującego.	I've done nothing interesting today.	7610510
On zgadł odpowiedzi z ogromną dokładnością.	He guessed the answers with great accuracy.	7610521
Używaj zdrowego rozsądku w tego typu sytuacjach.	Use your common sense in that kind of a situation.	7610548
Piękna tęcza rozciąga się na niebie.	A beautiful rainbow is spanning the sky.	7679536
Siedemdziesiąt lub osiemdziesiąt lat to normalna długość życia mężczyzny.	Seventy or eighty years is the normal span of a man's life.	7679538
Podaj mi ten mały śrubokręt.	Hand me that small screwdriver.	7679568
Nie zapisuj się.	Don't commit yourself.	7679633
Wołowina jest droga w dzisiejszych czasach.	Beef is expensive nowadays.	7681571
Wszyscy są szczęśliwi w obecnych czasach.	Everybody is happy nowadays.	7681573
Mięso jest drogie obecnie.	Meat is expensive nowadays.	7681574
Nasze plany weekendowe były w zawieszeniu.	Our weekend plans were in abeyance.	7682135
Kable używane są do przewodzenia prądu.	Wires are used to convey electricity.	7703383
Jej życie jest pełne bólu.	Her life is full of pain.	7703664
Panele solarne podczas dnia ładują baterie.	The solar panels charge the batteries during the day.	7703680
Uwierzyli we wszystko co im powiedziałem.	They believed everything I told them.	7703693
Kosztowało mnie to kupę kasy.	It cost me a bundle.	7704805
Jego gra jest przeciętna.	His playing is mediocre.	7705678
Podjąłem się tego niechętnie.	I unwillingly undertook it.	7707273
Podjąłem się tego wbrew mojej woli.	I unwillingly undertook it.	7707275
Oni przyprawiają mnie o gęsią skórkę.	They're creepy.	7710678
Twój współlokator jest przerażający.	Your roommate is creepy.	7710693
Wszędzie na podłodze leżały płatki.	There are petals all over the floor.	7710794
Poważna awaria spowodowała zatrzymanie samochodu.	A major malfunction stopped the car.	7713570
Twoja książka jest do góry nogami.	Your book is upside down.	7713624
Nikt nie został, aby pomóc posprzątać.	Nobody stayed to help clean up.	7726010
W moim śnie spotkałem wilka.	In my dream, I encountered a wolf.	7726400
W tym miejscu diabeł mówi dobranoc.	That place is in the middle of nowhere.	7726529
Mniej gadaj, więcej rób.	Talk less, do more.	7727832
Inni są mniej optymistyczni.	Others are less optimistic.	7727833
Co za wspaniała impreza!	What a gorgeous bash!	7727851
On nie jest moim ojcem, ale moim wujkiem.	He is not my father but my uncle.	7742261
Prąd pochodzi z gniazdka, a woda z kranu.	Electricity comes from the wall socket, and water from the tap.	7754589
Twarz strażaka była ponura, kiedy wychodził z płonącego domu.	The fireman's face was grim when he came out of the burning house.	7755780
Urodziła się ze srebrną łyżką w jej ustach.	She was born with a silver spoon in her mouth.	7778923
Według wróżki, byłem podobno księciem w innym życiu.	According to the fortune teller, I was supposedly a prince in another life.	7806819
Byłem bardzo dumny z mojego syna.	I was very proud of my son.	7818323
On żyje bez dostępu do mediów.	He lives off the grid.	7825969
Jego żona ciągle go dręczy.	His wife nags him constantly.	7827172
Z czym ci się kojarzy ta piosenka?	What do you associate this song with?	7868629
On walczy z wiatrakami.	He's tilting at windmills.	7868679
Poczułam się bardzo urażona twoimi komentarzami.	I was really hurt by your comments.	7868693
Wielu myśli, że nietoperze to ptaki.	A lot of people think that bats are birds.	7875504
Ile jabłoni jest w twoim sadzie?	How many apple trees are in your orchard?	7881183
Jak dużo jabłoni jest w twoim sadzie?	How many apple trees are in your orchard?	7881184
Co jest powodem twoich porażek?	What's the reason for your failures?	7881186
Przymierz tą koszulę.	Try this shirt on.	7881598
Nie masz czegoś mniejszego niż to?	Don't you have anything smaller than that?	7886461
Dziesięć to dziesięć procent ze stu.	Ten is ten per cent of a hundred.	7886470
Ten mężczyzna jest żołnierzem.	That man is a soldier.	7886472
Książka spadła na podłogę.	The book fell to the floor.	7886475
Odległość od mojego do twojego domu wynosi dwa kilometry.	The distance from my house to your house is two kilometers.	7886493
Matka i córka reprezentowały dwa pokolenia.	The mother and daughter represented two generations.	7886501
Słońce świeciło, ale i tak było zimno.	The sun was shining, yet it was cold.	7886510
Test nowego silnika odbędzie się dzisiaj.	The test of the new engine takes place today.	7886517
Była lista dostępnych kandydatów.	There was a list of available candidates.	7886518
W szkole był tylko jeden przypadek ospy wietrznej.	There was only one case of chicken pox at the school.	7886519
Te buty pasują do moich stóp.	These shoes fit my feet.	7886520
Byli odpowiedzialni za ten wypadek.	They were responsible for the accident.	7886533
Czy jego historia jest prawdziwa?	Is his story true?	7891103
Pojutrze jest wtorek.	The day after tomorrow is Tuesday.	7891131
Bank nie jest otwarty w soboty.	The bank isn't open on Saturdays.	7891282
Mam długą listę rzeczy, których nie powinnam robić.	I have a long list of things I shouldn't do.	7904532
Te gałęzie łatwo się łamią.	Those branches break easily.	7911134
Talent nic ci nie da bez ciężkiej pracy.	Talent will get you nowhere without hard work.	7913766
W tym tygodniu byłem na rybach.	This week I went fishing.	7938263
Wakacje zaczynają się w tym tygodniu.	The vacation begins this week.	7938267
Pracowałeś bardzo dużo w tym tygodniu.	You worked a lot this week.	7938270
Porównanie niczego nie udowadnia.	A comparison proves nothing.	7943307
Ktoś jest schowany za zasłoną.	Somebody is hiding behind the curtain.	7960499
Będę cię kochał przez resztę życia.	I'll love you for the rest of my days.	7960512
Młody łoś szedł po autostradzie.	A young moose was walking on the highway.	7960549
Jaka jest różnica między czasopismem a gazetą?	What's the difference between a magazine and a newspaper?	7960553
Będę gotowa za dwie minuty.	I'll be ready in two minutes.	7960635
Włożył w to całą duszę i serce.	He put all his heart and soul into it.	7960643
Mówiłem ci, że to za wcześnie.	I told you it was too soon.	7960699
Porozmawiajmy o tym, pijąc kawę.	Let's talk about it while we drink a cup of coffee.	7960703
Co to za gatunek drzewa?	What species of tree is this?	7960728
To ryzykowna gra.	It's a gamble.	7960754
Znaleziono martwego człowieka między krzakami.	A man was found dead between the bushes.	7960814
Twój syn nie umarł na próżno. Zginął jak bohater.	Your son did not die in vain. He died a hero.	7960878
Powiedzieli, że są chorzy.	They said that they're sick.	7962574
Pomogła mi niezliczoną ilość razy.	She helped me out countless times.	7962597
My tylko tędy przechodzimy.	We're just passing through.	7962606
Spójrz na ten wodospad!	Look at that waterfall!	7962628
Nosi sweter z wełny.	He wears a wool sweater.	7969902
To naprawdę było tylko nieporozumienie.	It was really just a misunderstanding.	7969955
Ludzie często zasypiają podczas czytania.	People often fall asleep while reading.	7969962
Nie widziałeś ich na kolacji?	Didn't you see them at dinner?	7970900
Moja przyjaciółka zmarszczyła brwi podczas czytania listu.	My friend frowned as she read the letter.	7970964
Nie zapomnij tego wziąć, OK?	Don't forget to bring it, OK?	7972252
Szpital, do którego zwykle chodzę, jest zamknięty z powodu remontu.	The hospital I usually go to is closed for renovations.	7972303
Nie była wtedy zamężna.	She was unmarried at the time.	7972304
Mówiłem o ubraniach.	I was talking about clothes.	7972328
Nauczyciel zaczął często opuszczać zajęcia.	The teacher started missing school a lot.	7972355
Ich nienawiść do kobiet jest obrzydliwa.	Their misogyny is disgusting.	7972368
Chciałbym zrobić kilka zmian w projekcie.	I'd like to make some changes in the draft.	7977901
Oni powiedzieli, że są zdrowi.	They said they're healthy.	7977905
On pisze do mnie co tydzień.	He writes to me every week.	7977912
Dzisiaj lokomotywa popycha wagony pociągu.	Today, the locomotive is pushing the cars in the train.	7998954
Chcę tą lalkę!	I want that doll!	8108568
Potrzebny nam większy dom.	We need a bigger house.	8108725
Chyba zesram się ze strachu.	I think I'm gonna shit myself.	8108767
Mój pies miauczy.	My dog meows.	8113237
Wino robi się z winogron.	Wine is made from grapes.	8160829
Wino robi się z winogron.	Wine is made from grapes.	8160835
Gdzie są moje zegary?	Where are my clocks?	8166642
Sprzedaje pan budziki?	Do you sell alarm clocks?	8166655
Ogląda telewizję zanim zacznie się uczyć.	He watches television before studying.	8166704
Co chwilę sprawdzali która godzina.	They kept checking their watches.	8166751
Mój ojciec zwykle ogląda telewizję po obiedzie.	My father usually watches TV after dinner.	8166796
Siedzi na podłodze i mnie obserwuje.	Seated on the floor, she watches me.	8166799
Siedząc na podłodze, patrzy na mnie.	Seated on the floor, she watches me.	8166800
Jego brat cały czas ogląda telewizję.	His brother watches TV all the time.	8166804
Powiedzieli mi, że zgubili zegarki.	They told me they'd lost their watches.	8175364
Siedzi na tym krześle, kiedy ogląda telewizję.	He sits in this chair when he watches television.	8175366
W każdą niedzielę kot siedzi na parapecie i obserwuje ptaki.	Every Sunday the cat sits on the windowsill and watches the birds.	8175391
Nasza krowa nie daje nam mleka.	Our cow doesn't give us any milk.	8176899
Kiedy ostatni raz całowałeś swoją żonę?	When was the last time you kissed your wife?	8178389
Kiedy ostatnio całowałeś się z żoną?	When was the last time you kissed your wife?	8178391
Dla mnie on jest jak król.	To me, he is like a king.	8178395
W oddali słyszeliśmy wycie wilków.	We could hear the howling of wolves in the distance.	8178408
Nie zdawałem sobie sprawy, że już to zrobiłeś.	I didn't realize you had already done that.	8178412
Potrzebuję większej patelni.	I need a bigger frying pan.	8178428
Nie mam gotówki.	I don't have any cash.	8178447
Tam, gdzie jest harmonia, tam jest porządek.	Where there's harmony, there's order.	8178455
Większość nie umiała czytać i pisać.	Most were unable to read or write.	8178463
Co pan o tym sądzi?	What are your reflections on this issue?	8178467
Taksówka jest droższa niż autobus.	A taxi is more expensive than a bus.	8178518
Ostatnio, kiedy mnie widziałeś, miałem wąsy.	I had a mustache the last time you saw me.	8178586
Większość Amerykanów to potomkowie imigrantów.	The majority of the Americans are descended from immigrants.	8178596
Ostatnim razem miałam łatwy poród.	I had an easy delivery last time.	8178608
Ostatnim razem miałam trudny poród.	I had a difficult delivery last time.	8178615
Okres spóźnia mi się o pięć tygodni.	My period is five weeks late.	8178620
Pierwszy raz dostałam okresu, kiedy miałam trzynaście lat.	I had my first period when I was 13 years old.	8178637
Miałam ciążę pozamaciczną dwa lata temu.	I had an ectopic pregnancy two years ago.	8178652
Chciałbym zrobić test na raka piersi.	I'd like to have a test for breast cancer.	8178657
Chciałabym wysłać sukienkę do pralni chemicznej.	I'd like to send my dress to a dry cleaner.	8178662
Matka kupiła mi ładną sukienkę w ostatnią niedzielę.	Mother bought me a nice dress last Sunday.	8178666
Ta sukienka bardzo do mnie pasuje.	This dress fits me very well.	8178667
To mój narzeczony.	That's my fiancé.	8178713
Możesz zgadywać tylko raz.	You get one guess.	8182268
Te książki i ubrania są twoje.	These books and clothes are all yours.	8182290
Od dłuższego czasu nie jadłam mięsa.	I haven't eaten meat in a long time.	8213741
Mógłbym to zrobić, gdybym naprawdę potrzebował.	I could do that if I really needed to.	8213748
Trzymaj ręce na kierownicy.	Keep your hands on the wheel.	8309654
Jego długi się gromadziły.	His debts were piling up.	8309786
Jak to jest, że naczynia gromadzą się tak szybko?	How is it that dishes pile up so quickly?	8309788
Dziadek lubi przesadzać.	Grandpa likes to overdo it.	8333234
Ona uważała go za mężczyznę z jej snów.	She considered him the man of her dreams.	8376151
Cukinie są zielone.	Courgettes are green.	8387695
To znacznie ciekawsze.	That's a lot more interesting.	8428497
Ta książka jest bardzo gruba.	This book is very thick.	8446433
Nie mam rodzeństwa.	I have no siblings.	8446438
To jest słonecznik.	It's a sunflower.	8448602
Ten różowy kwiat jest piękny.	This pink flower is beautiful.	8504618
Ten nóż jest tępy.	This knife is blunt.	8511823
Mieliśmy krótki urlop w lutym.	We had a short holiday in February.	8512433
Czy tam jest dostępna woda?	Is water available there?	8516358
Gdzie jest mój grzebień?	Where is my comb?	8518257
Twoja historia jest nudna.	Your story is boring.	8518337
Hej, wiersz jak to otworzyć?	Hey, how do you get this thing open?	8522901
To robi mnie smutnym.	That's what makes me sad.	8522939
Weź tą teczkę.	Take this briefcase.	8522945
On pisze swój dziennik.	He's writing his diary.	8522947
Gdzie są szpaki w zimie?	Where are the starlings in winter?	8524039
Ona jest samotna i smutna.	She's lonely and unhappy.	8524514
Wiele ludzi nie lubiło tej zmiany.	Many people disliked that change.	8524850
Nie pomogli ci dużo, co nie?	They didn't help you much, did they?	8525036
Oni nigdy nie stracili kontaktu.	They never lost touch.	8525097
Na pewno potrzebujemy więcej treningu.	We'll definitely need some more training.	8525105
Ludzie dalej chcą to robić.	People still want to do that.	8525121
Witaj przyjacielu! Dawno się nie widzieliśmy!	Hello, my friend! I haven't seen you for such a long time!	8525137
On naprawdę nie lubił swojej pracy.	He didn't really like his job.	8525174
Ona pocałowała mnie w policzek i powiedziała dobranoc.	She kissed me on the cheek and said goodnight.	8525180
To idzie na moją listę życzeń.	That's going on my wish list.	8525190
Włoski to mój język ojczysty.	Italian is my native language.	8529680
Ona była dobrym artystą i fotografem.	She was a fine artist and photographer.	8529687
Oni poszli do swoich sypialni.	They went to their bedrooms.	8529709
On źle myje ręczniki.	He washes his towels the wrong way.	8529722
Myj swoje ręczniki.	Wash your towels.	8529723
On zranił swoją żonę nożem.	He wounded his wife with a knife.	8529771
Chce wypić twoją krew w północ.	I want to drink your blood at midnight.	8529780
Uwielbiam pomagać ludziom którzy są ambitni.	I love helping ambitious people.	8529782
Moi rodzice ciągle krytykują nowoczesną technologię. Oni jej nie rozumieją.	My parents constantly criticize modern technology. They just don't understand it.	8529816
On jest uzależniony od ręczników.	He is addicted to towels.	8529893
To jest chore, weź przestań.	This is sickening, quit it.	8529974
Styczeń jest pierwszym miesiącem roku.	January is the first month of the year.	8537505
Ona studiuje matematykę.	She studies mathematics.	8541000
On siedzi w fotelu.	He's sitting in the armchair.	8541108
To jest mapa.	This is a map.	8541142
On wygląda zdrowo.	He looks healthy.	8547674
Kiedy ostatni raz jadłeś krewetki?	When was the last time you ate shrimp?	8563305
Jest łatwiejsza metoda.	There is an easier method.	8577996
To nie jest krewetka.	This is not a shrimp.	8608508
Które z tych czasopism byś wolała?	Which of these magazines would you prefer?	8608519
Powiedział, że nie jest przyzwyczajony do wystąpień publicznych.	He said he wasn't used to speaking in public.	8610189
Mężczyzna wyszedł z restauracji nie płacąc.	The man left the restaurant without paying.	8610203
Chcę wiedzieć, kiedy to się stanie.	I want to know when that'll happen.	8610233
Pomóż mi z tą szafką na akta.	Help me with this file cabinet.	8613348
Nie zapomnij swego kremu z filtrem.	Don't forget your sunscreen.	8613352
Chciałbym więcej grzybów.	I'd like some more mushrooms.	8613359
Mniejsza o to!	Never mind!	8617129
Staw czoła faktom!	Face facts!	8617190
Nikt cię nie pytał o zdanie.	Nobody asked.	8617226
Nie podnoś się!	Stay down!	8617236
Jakie to wzruszające!	How touching!	8617254
Częstuj się jeszcze.	Have another.	8617292
Wszyscy bili brawo.	Everybody applauded.	8617326
Którzy byli przeciw?	Who disagreed?	8617450
Nie wierć się.	Hold still.	8617501
Przestań się wiercić.	Hold still.	8617507
Twój ojciec o niczym nie wie.	Your father knows nothing.	8617629
Myślisz że jaką pracę dostaniesz z tym dyplomem?	What kind of a job do you think you can get with this diploma?	8617633
Drzwi po lewej się otworzą.	The doors on the left will open.	8617644
Jak zmienić datę w zegarku?	How do you change the date on the watch?	8617750
Ważka lata nad kałużą.	The dragonfly flies over the puddle.	8617772
A co jest takiego niezwykłego w tych zegarkach?	What's so special about these watches?	8617783
A to jerzyk czy jaskółka?	Is this a swift or a swallow?	8617789
Wyszliśmy na boisko i graliśmy tak dobrze, jak tylko mogliśmy.	We went out on the field and played as well as we could.	8617824
Nasza klasa wybiera się na wycieczkę w przyszły poniedziałek.	Our class is going on a field trip next Monday.	8617839
To pole nigdy nie zostało zaorane.	This field has never been plowed.	8617844
Mój żółw mieszka w akwarium.	My turtle lives in an aquarium.	8627640
Gdzie będzie pchli targ?	Where will the flea market be?	8627649
Jane została niesprawiedliwie zwolniona ze swojego stanowiska.	Jane was unfairly dismissed from her post.	8630799
Ta czarna mysz jest duża.	This black mouse is big.	8631943
Emo noszą czarną szminkę.	Emo people wear black lipstick.	8632663
To muzeum nie jest czynne w poniedziałki.	This museum isn't open on Mondays.	8665146
To jest cerkiew.	That's a church.	8666102
W tym roku prawosławna Wielkanoc zbiega się z katolicką.	This year, the Orthodox Easter coincides with the Catholic one.	8666106
Nie mam kuchenki mikrofalowej.	I don't have a microwave oven.	8668450
Te dęby mają ponad sto lat.	These oaks are over a hundred years old.	8670295
Ten dom na rogu jest nasz.	The house on the corner is ours.	8672213
Lubisz chodzić na koncerty?	Do you like going to concerts?	8676373
Wieloryby to nie ryby.	Whales are not fish.	8677210
Może powinieneś wziąć kilka dni wolnego.	Maybe you should take a few days off.	8708089
Czy to mój szlafrok?	Is that my robe?	8708362
Nie mam talentu.	I have no talent.	8718746
Niedziela jest pierwszym dniem tygodnia.	Sunday is the first day of the week.	8722967
To jest kradzież.	It's a steal.	8725922
Ja tylko żartowałem.	I was just kidding.	8727122
Ona jest życzliwą czarownicą.	She's a benevolent witch.	8743060
To jest o wiele łatwiejsze.	This is much easier.	8746937
To jest miejska legenda.	This is an urban legend.	8748893
Byłem smutny gdy odeszła.	I was sad when she left.	8750034
Kiedy zaczynasz odprawę?	What time do you start check-in?	8750060
Człowiek jest niewolnikiem przyzwyczajeń.	Man is a slave of habit.	8750105
Minęło dwadzieścia lat odkąd się pobrali.	It's been twenty years since they got married.	8750110
Umieram z pragnienia. Daj mi wody!	I'm dying of thirst. Give me water!	8754439
W moim mieście jest dobre muzeum.	There is a good museum in my city.	8754518
Czy napoje są bezpłatne?	Are drinks free?	8760853
Stało się to w zeszłym roku.	It happened last year.	8761245
Co państwu powiedziano?	What were you told?	8761315
Ta maszyna nie jest łatwa w obsłudze.	This machine's not easy to operate.	8761416
Czy on jest Amerykaninem?	Is he American?	8763804
Ten chłopiec jest jego bratem.	That boy is his brother.	8765748
Od poniedziałku do piątku padał śnieg.	It snowed from Monday to Friday.	8768483
Czy jest nagroda?	Is there a reward?	8770725
Moja babcia je pomarańczę.	My grandma is eating an orange.	8770772
Zrobiliśmy naleśniki na śniadanie.	We made pancakes for breakfast.	8770808
Mam ból brzucha.	I have a stomachache.	8771375
Czy to Amerykanie?	Are they American?	8772615
Ten kapelusz jest dla mnie za ciasny.	This hat is too tight for me.	8773712
Gdzie mogę kupić przewodnik po mieście?	Where can I buy a guide to the city?	8784599
Każdy jest wyjątkowy.	Everyone is unique.	8789603
Nie mam nic szczególnego do powiedzenia.	I have nothing particular to say.	8792053
Ten samolot jest ogromny!	That plane is enormous!	8798678
Samolot jest gotowy.	The plane is ready.	8798684
Moje mieszkanie jest na trzecim piętrze.	My flat is on the third floor.	8798696
Ktoś ukradł mój plecak.	Someone stole my rucksack.	8798700
Wyślij rachunek do mnie.	Send the bill to me.	8798757
Wybierz między tymi dwoma.	Choose between these two.	8802955
W tym lesie są klony.	There are maple trees in this forest.	8809715
W tym lesie rosną klony.	There are maple trees in this forest.	8809718
Gdzie jest twój wnuk?	Where's your grandson?	8809779
Nie dostałem zaproszenia.	I didn't get an invitation.	8809809
Wielu nauczycieli stało przy mnie.	A lot of teachers stood by me.	8809853
Wielu nauczycieli popierało mnie.	A lot of teachers stood by me.	8809855
Moja praca to zmywanie naczyń.	My job is to wash dishes.	8811778
On jest dobrym stolarzem.	He is a good carpenter.	8815960
Nie dostałam zaproszenia.	I didn't get an invitation.	8829305
Powiedział, że złoży skargę.	He said he'd complain.	8836435
Moje życie zmieniło się tamtego dnia.	My life changed that day.	8861994
Powinieneś wziąć to zdanie w nawiasy.	You should put parentheses around this phrase.	8881743
Tam jest miejsce do zwiedzania.	That is where the sightseeing place is.	8887559
Chciałbym więcej zarabiać.	I'd like to make more money.	8901626
Szukaliśmy wszędzie, ale nie znaleźliśmy nic.	We searched everywhere but found nothing.	8901637
Ten nóż nie jest zbyt ostry.	This knife isn't very sharp.	8902943
To drzewo jest bardzo stare.	This tree is very old.	8903152
Dlaczego te drzwi są zawsze zamknięte?	Why is this door always locked?	8916599
Ona jest zawsze wesoła.	She is always cheerful.	8916606
Mój pokój jest zawsze czysty.	My room is always clean.	8916714
Nie oszczędzaj kosztem swojego zdrowia.	Don't scrimp on your health.	8916720
On nie mówi w wielu językach.	He does not speak many languages.	8948284
Zwykle budzę się o świcie.	I usually wake up at dawn.	8948295
Trochę jest jej go żal.	She feels a little sorry for him.	8948380
Kończą mu się pieniądze, prawda?	He's running out of money, isn't he?	8948395
Dziś jest dzień na pranie.	Today is laundry day.	8948411
Jak używa się tej karty?	How is this card used?	8948427
Miałem szansę to kupić, ale nie zdecydowałem się.	I had the chance to buy that, but I decided not to.	8948629
Jest kreatywna, prawda?	She's creative, isn't she?	8948639
Jest pochmurno, ale nie pada.	It's cloudy, but not raining.	8948653
Zawsze podejrzewałem, że mogłeś trenować kiedyś karate.	I've always suspected that you might've studied karate.	8950100
Idź włóż piżamę.	Go put your pajamas on.	8950107
Moja mama jest ze mnie dumna.	My mum is proud of me.	8970678
Czy koty śnią?	Do cats dream?	8982975
Koty lubią sznurki.	Cats like string.	8983031
Młode tygrysy przypominają koty.	Young tigers resemble cats.	8987422
Mówią, że wciąż robią to często.	They say they still do that a lot.	8989711
Zostawił swoją torbę w pociągu.	He left his bag on the train.	8989712
Marzenia nigdy nie umierają.	Dreams never die.	8989727
Te ołówki są moje.	These pencils are mine.	8993445
Ona towarzyszy mi na każdym wyjeździe.	She accompanies me on every trip.	8993452
Czy ten ołówek jest twój?	Is this pencil yours?	9006785
Spotkała go w kawiarni.	She met him in the café.	9013223
Kobiety są najpiękniejszą częścią życia mężczyzny.	Women are the most beautiful part of a man's life.	9031992
Nie wszystkie zwierzęta jedzą siano.	Not all animals eat hay.	9039810
Znalazłem pustą puszkę.	I found the empty tin.	9049292
Możesz położyć swoje okulary na nocnym stoliku.	You can put your glasses on the bedside table.	9117293
On uczy się w łazience.	He studies in the bathroom.	9137221
Światło zachowuje się albo jak fala, albo jak wiązka cząsteczek.	Light behaves either as a wave, or as a beam of particles.	9137227
Ona była w drodze do szkoły.	She was on her way to school.	9240032
Mam w samochodzie apteczkę.	I have a first-aid kit in my car.	9241831
Łysy to mój mąż.	The bald guy is my husband.	9263377
Zawsze do mnie dzwoniła.	She was always telephoning me.	9385155
Wszystkie organizmy żyjące na powierzchni ziemi są od siebie zależne.	All living things on earth depend on one another.	9463250
Opowiedz mi o swoich pająkach i wężach.	Tell me about your spiders and snakes.	9463328
Ptaszor to nie ptak, tylko latająca ryba.	A flying fish isn't a bird, but a fish that flies.	9526083
Powiedz to tym borsukom.	Tell that to those badgers.	9526087
Nie jem ogórków bez obierania.	I don't eat cucumbers without peeling them.	9573163
Dwoje dzieci przygotowało się na nudę.	The two children prepared to be bored.	9663559
Lwy nie widzą barw.	Lions can't see colour.	9678336
Nawet profesor nie znał odpowiedzi.	Even the professor didn't know the answer.	9679312
Te kwiaty rosną w ciepłych krajach.	These flowers grow in warm countries.	9679443
Proszę nie mów o tym nikomu.	Please don't tell anybody about this.	9679559
Ona uczestniczyła w spotkaniu na prośbę przewodniczącego.	She attended the meeting at the request of the chairman.	9679588
Projekt ustawy został przegłosowany przez przeważającą większość.	The bill was passed by an overwhelming majority.	9679591
Zazwyczaj nie jem deseru.	I don't usually eat dessert.	9679667
Wszędzie byli strażacy.	There were firemen everywhere.	9679671
Oni zdarli swoje łokcie.	They skinned their elbows.	9684270
Powiedziała, że była zadowolona.	She said she was pleased.	9684279
Ona zostawiła dla niego notatkę na stole.	She left a note on the table for him.	9684289
Prawie nigdy nie sypiam bez poduszki.	I hardly ever sleep without a pillow.	9684296
Nigdy nie słyszałem, żeby opowiadał o swoim życiu w Kanadzie.	I’ve never heard him speak of his life in Canada.	9684339
To nie jest kwestia tylko ceny.	It isn't just a question of price.	9684346
Mój pokój jest czystszy niż twój.	My room is cleaner than yours.	9684355
Jego hotel jest częścią sieci.	His hotel is part of a chain.	9684400
Zamierzam pójść na tę audycję.	I'm gonna go to that audition.	9684477
Byłem chory w zeszłym tygodniu.	I was ill last week.	9684534
Jest ich około dwudziestu.	There are about twenty of them.	9684536
Powiedział mi, że jest bardzo głodny.	He told me he's very hungry.	9684584
Co gdyby Statua Wolności była zrobiona ze złota?	What if the Statue of Liberty was made out of gold?	9684600
Ktoś czeka w twoim gabinecie.	There's somebody waiting in your office.	9684611
Aplikacja nie zadziała, jeśli nie jesteś połączony z Internetem.	The app won't work if you're not connected to the Internet.	9686067
Wymyj swoje ręce wodą i mydłem.	Wash your hands with water and soap.	9686196
To nie jest jeszcze suche.	It's not dry yet.	9686229
Hydroterapia jest wykorzystaniem wody do łagodzenia bólu i leczenia przypadłości.	Hydrotherapy is the use of water to relieve pain and cure illnesses.	9686263
To była kiedyś bardzo cicha okolica.	This used to be a very quiet neighborhood.	9686388
Wcześniejsze doświadczenie nie jest wymagane.	No prior experience is required.	9686413
Każdy marzy o szczęściu.	Everybody wishes for happiness.	9686418
Możesz dla mnie przyszyć ten guzik?	Can you sew this button on for me?	9686420
Oni są bardzo niebezpieczni.	They're very dangerous.	9686424
Nie powinnaś odwiedzać dziś mojego dziadka.	You shouldn't visit my grandfather today.	9686426
Pozwól mi z nią spędzić choć pięć minut więcej.	Let me spend just five more minutes together with her.	9686442
Ona podała mu album ze zdjęciami.	She handed the photo album to him.	9686455
Tu jest mój różowy notatnik.	Here's my pink notebook.	9686488
Mógłbyś pożyczyć mi trochę pieniędzy do dnia wypłaty?	Could you loan me some money until payday?	9686497
Oni zjedli pizzę z serem kozim.	They ate a pizza with goat cheese.	9686502
Nikt nie rozmawiał o filmie.	Nobody talked about the movie.	9686509
On zapomniał swojego hasła.	He forgot his password.	9686540
Szykuj się! Jutro jest ostatni dzień.	Get ready! Tomorrow is the last day.	9686579
Powodzenia ze wszystkim.	Good luck with everything.	9686696
On jest z Australii, co nie?	He's from Australia, isn't he?	9686761
On oddał jej swoją starą kamerę.	He gave his old camera to her.	9686769
Wyjazd do Egiptu był dużym ryzykiem.	Going to Egypt was a big risk.	9686775
To nie było zawarte w umowie.	That wasn't a part of the agreement.	9686859
Jego życie wisi na decyzji sędziego.	His life hangs on the judge's decision.	9686880
Oni nie muszą odpowiadać.	They don't have to answer.	9686901
On wygrał medal.	He won a medal.	9686930
Jak dostać się do kanadyjskiej ambasady?	How do I get to the Canadian Embassy?	9686933
Czytanie jest jednym z moich hobby.	Reading is one of my hobbies.	9805690
Dzwonię, żeby zgłosić zgubiony portfel.	I'm calling to report a lost wallet.	9817461
Czy to w porządku, jeśli pójdę w dżinsach?	Is it OK if I go in jeans?	9817476
Wbiła gwóźdź w ścianę i powiesiła obraz.	She hammered a nail into the wall and hung the painting.	9821350
Jaka jest twoja ulubiona samogłoska?	What is your favorite vowel?	9821661
Francuski ma o wiele więcej samogłosek niż japoński.	French has many more vowels than Japanese.	9821680
Myśl o jutrze.	Think about tomorrow.	9845799
Chcę zrozumieć sens życia.	I want to understand the meaning of life.	9845848
Kiedy są w niebezpieczeństwie, uciekają.	When they're in danger, they run away.	9845865
Te fartuchy są wygodne.	These overalls are comfortable.	9942275
Chciałbym wiedzieć więcej o tym miejscu.	I'd like to know more about this place.	10069013
Jest wiele kin w tym mieście.	There are many movie theaters in this city.	10115226
Dlaczego w naszym mieście już nie ma trolejbusów?	Why are there no trolleybuses in our city now?	10138287
To jest pustynia.	This is a desert.	10163132
Sami zgubił się na pustyni.	Sami got lost in the desert.	10163141
To jest duża sprawa dla mnie.	That was a big deal for me.	10168016
To prawda w wielu przypadkach.	This is true in a large number of cases.	10168022
To naprawdę nie jest teraz ważne.	That isn't really important right now.	10168338
To nic Cię nie kosztuje.	This won't cost you anything.	10202673
Czerwony sweter jest droższy niż niebieski.	The red sweater is more expensive than the blue one.	10202677
Ten pokój nie ma wystarczającej ilości światła słonecznego.	This room doesn't get enough sunlight.	10202733
Mój notatnik jest pełny.	My notebook is full.	10202752
Wypił kawę stojąc przed toaletą.	He drank his coffee standing in front of the toilet.	10202807
Wolę podróżować na własną rękę.	I prefer traveling on my own.	10203108
Kapusta zmieni Twoje życie.	Cabbage will change your life.	10203155
Ślimaki zjadły całą naszą kapustę.	Slugs ate all our cabbage.	10203158
Ona lubi wszystkie warzywa z wyjątkiem kapusty.	She likes all vegetables except cabbage.	10203166
Dziś rano zebraliśmy paprykę, pomidory i kapustę.	This morning, we harvested peppers, tomatoes and cabbage.	10203187
Kalafior to nic innego jak kapusta z wyższym wykształceniem.	Cauliflower is nothing but cabbage with a college education.	10203188
Zdążyła na autobus.	She was in time for the bus.	10309157
Szkoda, że ​​nie powiedziałeś mi tego wcześniej.	I wish you'd told me this earlier.	10453211
Drzewa uginają się w wietrze.	The trees bend in the wind.	10458915
Coś jest nie tak z tym jogurtem.	There's something wrong with this yogurt.	10460707
Wypełniła dzbanek sokiem pomarańczowym.	She filled the jug with orange juice.	10462095
Przestań marnować czas i wracaj do pracy.	Stop wasting time and get back to work.	10462417
Numer lotu się zmienił.	The flight number has changed.	10463017
Premier spotkał się z prasą.	The Prime Minister met with the press.	10463735
Ona ładnie rysuje, prawda?	She's good at drawing, isn't she?	10463793
Mój komputer kosztował dużo więcej niż twój.	My computer cost a lot more than yours.	10464288
Czy wszystkie łabędzie są białe?	Are all swans white?	10464368
Nie każde pytanie zasługuje na odpowiedź.	Not every question deserves an answer.	10464413
Nie każdą książkę warto przeczytać.	Not every book is worth reading.	10464418
Nie każdy łabędź jest biały.	Not all swans are white.	10464422
Klacz to koń płci żeńskiej.	A mare is a female horse.	10466048
Klacz jest to koń płci żeńskiej.	A mare is a female horse.	10466049
Dzieci budują w piaskownicy zamki i pałace.	Kids are building castles and palaces in the sandbox.	10466162
Na stole jest mrówka.	The ant is on the table.	10466176
Dzieci nie są przynoszone przez bociany.	Children are not brought by storks.	10466234
Czy bociany naprawdę stoją na jednej nodze?	Do storks really stand on one leg?	10466239
To bocian czy czapla?	Is that a stork or a heron?	10466242
Czy to bocian czy czapla?	Is that a stork or a heron?	10466243
Chodźmy jutro na łyżwy.	Let's go skating tomorrow.	10466974
On nie pije kawy w szklance.	He doesn't drink coffee in a glass.	10467892
Który z tych głośników brzmi lepiej?	Which of these two speakers sounds better?	10467934
Pająki lubią budować pajęczyny.	Spiders like to build spiderwebs.	10468149
Dlaczego pająki to nie owady?	Why aren't spiders insects?	10468166
Ta świeca nie jest biała.	That candle isn't white.	10468291
Najpierw złap zająca, a potem go ugotuj.	First, catch your hare, then cook him.	10468354
Ten pingwin jest naprawdę słodki.	This penguin is really cute.	10468633
Pingwin to ptak, który nie umie latać.	A penguin is a bird that cannot fly.	10468672
Sięgniesz do sufitu?	Can you reach the ceiling?	10468721
Nie mam krokodyla.	I don't have a crocodile.	10469065
Namocz tę gąbkę w wodzie.	Soak this sponge in water.	10469130
Ile wody może wchłonąć ta gąbka?	How much water can this sponge absorb?	10469147
Czy osy to owad?	Is the wasp an insect?	10469351
Gęś to ptak wodny.	A goose is a water bird.	10469418
Czy inny świat jest możliwy?	Is another world possible?	10470325
Ten naszyjnik jest przeklęty.	That necklace is cursed.	10470375
Słyszałam, że dali ci medal.	I heard they gave you a medal.	10470426
Koale można zobaczyć tylko w Austrii.	Koalas can only be seen in Austria.	10470488
Zadzwoń po elektryka.	Call an electrician.	10470504
To przeciwieństwo jest dla nas problemem.	It is the opposite that is a problem for us.	10470677
A będziesz na lipiec gotowy?	And will you be ready for July?	10472090
Czy te chipsy są wegańskie?	Are those chips vegan?	10472375
Czy te frytki są wegańskie?	Are those chips vegan?	10472376
W moim kraju polityka jest synonimem korupcji.	In my country, politics is synonymous with corruption.	10473530
Zostaw ten ul w spokoju!	Leave this hive alone!	10476460
Te sandały pasują całkiem nieźle do dżinsów.	These sandals go quite nicely with jeans.	10476922
Ptak szukał robaków.	The bird was looking for worms.	10482993
Te schody są nieco śliskie, więc proszę uważaj.	These stairs are a little slippery, so please be careful.	10484343
Te schody są nieco śliskie, więc proszę bądź ostrożna.	These stairs are a little slippery, so please be careful.	10484344
Moja sekretarka mówiła, że dzwoniłeś.	My secretary told me you phoned.	10485715
Słoń pije wodę.	The elephant drinks water.	10495048
Jedz chleb i pij wodę.	Eat bread and drink water.	10495077
To jest gra dla czterech osób.	This is a game for four players.	10495093
Ten maniak jest zdolny do wszystkiego!	This maniac is capable of anything!	10495094
Ona jest teraz w kościele.	She is at church right now.	10496457
Czy oni idą na ryby?	Are they going fishing?	10498800
Wybierają się na ryby?	Are they going fishing?	10498802
Piwo zwykle pije się na zimno.	Beer is usually drunk cold.	10506167
Piwo zwykle pije się zimne.	Beer is usually drunk cold.	10506168
Mężczyzna stojący przed hotelem spytał mnie, czy potrzebuję taksówki.	The man standing in front of the hotel asked me if I needed a taxi.	10514025
Mam ochotę na ryż z fasolą.	I feel like some rice and beans.	10529104
Zjadłbym ryż z fasolą.	I want to eat rice with beans.	10529106
Uwielbiam zwiedzać piękne zamki i pałace.	I love to visit beautiful castles and palaces.	10530129
To zwierzę żywi się mięsem.	This animal feeds on flesh.	10541497
Czy to jest żyrafa?	Is that a giraffe?	10541499
Góra Fuji znana jest ze swojego pięknego kształtu.	Mt. Fuji is noted for its beautiful shape.	10541872
Nie wiedziałem, że jesteś chirurgiem.	I didn't know you were a surgeon.	10542016
Byłem nieśmiałym dzieckiem.	I was a shy child.	10542183
On nie jest doskonały.	He's not perfect.	10542200
To jest moja przyjaciółka Rachel. Chodziliśmy razem do liceum.	This is my friend Rachel. We went to high school together.	10542358
Kocham gry wideo.	I love video games.	10542383
Ptak był o połowę mniejszy od orła.	The bird was half as large as an eagle.	10542560
Proszę być cierpliwym. To wymaga czasu.	Be patient please. It takes time.	10542694
Drzwi sejfu były otwarte.	The door of the safe was open.	10542852
Czy ta praca jest ciężka?	Is the work hard?	10543150
Spędziłem cały dzień na czytaniu tej powieści.	I spent the whole day reading that novel.	10543996
Tak! Wygrałem dwa razy z rzędu!	Yes! I won twice in a row!	10545315
Zostałeś kiedykolwiek zwolniony z pracy?	Have you ever been fired from a job?	10546268
Trzymaj się z dala od trawy.	Stay off the grass.	10546327
Idź i porozmawiaj z moim kolegą.	Go and speak to my colleague.	10547729
Mam dwa zepsute zęby.	I have two bad teeth.	10549958
To jest trudniejsze niż myślisz.	It's more difficult than you think.	10550125
Jaka jest głębokość jeziora?	What is the depth of the lake?	10550629
Pamiętaj, to nie jest gra.	Remember that this isn't a game.	10558484
Ta tradycja jest pielęgnowana w większości domostw.	This tradition is followed in most households.	10558497
Garaż jest obok domu.	The garage is at the side of the house.	10558507
Bądź twardy jak skała.	Be strong like a rock.	10558509
Zagrajmy w karty zamiast oglądać telewizję.	Let's play cards instead of watching television.	10558533
Dziękujemy za pomoc w rozwiązaniu problemu.	Thank you for helping us solve the problem.	10558539
Każdemu mogło się to stać.	It could happen to anybody.	10558547
Ona próbuje naprawić swój samochód.	She's trying to fix her car.	10559645
Dzieci często upadają.	Babies often fall down.	10559666
Piłka ręczna to bardzo popularny sport w Danii.	Handball is a very popular sport in Denmark.	10559670
Kilkoro dziennikarzy zostało zabitych.	Several journalists were killed.	10561447
Mam problemy ze zdrowiem.	I have some health issues.	10563901
Aby to zrobić, trzeba podjąć ryzyko.	In order to do that, you have to take risks.	10565643
Czy to jest sztuka?	Is this art?	10565680
Twoje włosy pachną wiosną.	Your hair smells like spring.	10568079
Przyszedł przed odpoczynkiem.	He arrived before the rest.	10568114
To jest mniej więcej wielkości jajka.	It's about the size of an egg.	10568574
Mam dwóch kuzynów.	I have two cousins.	10568797
Europa jest kontynentem.	Europe is a continent.	10570428
Nie mam twojej odwagi.	I don't have your courage.	10571214
Czy to jest łoś?	Is that a moose?	10571340
Ta roślina potrzebuje cienia.	This plant needs shade.	10571357
Nie zrozumiem niczego bez napisów.	I won't understand anything without subtitles.	10572733
Przyszłam kilka minut za wcześnie.	I'm a few minutes early.	10572816
Mamy mniej niż pięć minut na ewakuację całego budynku.	We have less than five minutes to evacuate the whole building.	10572924
Nie chcę się wtrącać w twoje prywatne życie.	I don't want to pry into your private life.	10573128
Czy masz podwójne łóżko?	Do you have a double bed?	10573192
Ten jest na koszt firmy.	This one's on the house.	10575931
Lasy są moim domem.	The woods are my home.	10577212
Przebrałem się za dziewczynę na szkolny festiwal.	I dressed up as a girl for the school festival.	10578978
Przed wieloma laty był tutaj zamek.	There was a castle here many years ago.	10580959
Zawieś swoją kurtkę na wiesza koło drzwi.	Hang your jacket on the hook by the door.	10581223
Twoja ofiara nie poszła na marne.	Your sacrifice was not in vain.	10581250
Ta dolina jest bardzo żyzna.	This valley is very fertile.	10581261
Chciałam pięć ananasów.	I wanted five pineapples.	10581307
Nie można oczekiwać wszystkiego od szkół.	One can't expect everything from schools.	10581414
Połóż talię kart na dębowym stole.	Place the deck of cards on the oaken table.	10581460
Nikt nie rodzi się bez wad.	No one is born without faults.	10581620
Twój grzebień jest piękny.	Your comb is beautiful.	10582064
Uważaj, to niebezpieczne skrzyżowanie!	Be careful, it's a dangerous junction!	10582083
Zrobiłem, co mogłem, żeby ci pomóc.	I've done everything I can to help you.	10582392
Wszystkie moje problemy się skończyły.	All my problems are over.	10584083
Czy wstają wcześnie rano?	Do they get up early in the morning?	10584084
Nie powinnam była wychodzić za mąż.	I shouldn't have gotten married.	10584110
Przeszliśmy się wokół ogrodu.	We walked around the garden.	10584253
Prowadzi skromne życie.	He leads a humble life.	10584294
Dlaczego Ziemia się obraca?	Why does the Earth spin?	10584300
Co by się stało, gdyby Ziemia przestała się obracać?	What would happen if the earth stopped spinning?	10584310
Nie zmuszaj mnie do tego.	Don't make me do this.	10584458
Mam kilka srebrnych monet.	I have several silver coins.	10584502
Właśnie widziałem ogromną sowę.	I just saw a huge owl.	10584926
Nie żal mi go.	I don't feel sorry for him.	10585368
To nie może czekać do jutra.	This can't wait until tomorrow.	10585370
Ludzie często narzekają na wysokie ceny.	People often complain about high prices.	10585374
Myślałem, że już o tym rozmawialiśmy.	I thought we talked about this already.	10586383
Nie jest wykwalifikowana w tłumaczeniu.	He's not skilled in translation.	10586396
Roślinność jest zastępowana fabrykami i drogami.	The vegetation is being replaced by factories and highways.	10587045
Gdzie w hotelu jest recepcja?	Where in the hotel is reception?	10587545
Nie zrozumiałem, co mówił profesor.	I didn't understand what the professor said.	10587555
To nie jest prawdziwe mieszkanie.	It isn't a real apartment.	10587585
Nigdy nie wierzył w Boga.	He never believed in God.	10587602
Nie znają zasad.	They don't know the rules.	10587618
Przeczytałbym tę powieść, gdyby była interesująca.	I would read the novel if it were interesting.	10587654
Powiedziałeś mi, że mógłbyś to zrobić.	You told me you could do it.	10587662
Nikt nie uwierzy w tę plotkę.	Nobody will believe that rumor.	10588387
Mamy teraz wybór.	We have a choice now.	10588531
Telefon zadzwonił, ale nikt nie odebrał.	The telephone rang, but no one answered.	10589291
Jej firma nie przetrwała kryzysu.	Her company didn't survive the crisis.	10589346
Od tego czasu nie widziałem jej.	I haven't seen her since then.	10589432
Ten dom ma pięćset lat.	This house is five hundred years old.	10589456
Nasze miasto ma tramwaje.	Our city has trams.	10590111
Musimy pójść schodami.	We have to take the stairs.	10590183
Złoty podział jest obserwowany wszędzie w przyrodzie.	The Golden Ratio is found everywhere in nature.	10592627
W nocy wszystkie koty są szare.	At night all cats are grey.	10592750
Wszystkie miejsca były już zajęte.	All the spots were already taken.	10592812
Ta drabina nie wytrzyma nas obojga.	This ladder won't hold both of us.	10592816
Daj mi swoją kanapkę.	Give me your sandwich.	10592838
Ta kanapka jest dobra.	This sandwich is good.	10592846
Ledwo mogłem w to uwierzyć.	I could scarcely believe it.	10593273
Zapomniałam o swojej kurtce.	I forgot my jacket.	10593800
Nie zapomnij swojej kurtki.	Don't forget your jacket.	10593828
Ta kurtka jest z Europy.	This jacket is from Europe.	10593838
Nie nosiłem kamizelki ratunkowej.	I wasn't wearing a life jacket.	10593841
Ta gra pobiera się zbyt długo.	This game is taking too long to download.	10593857
Pobrałem plik na swój komputer.	I downloaded the file to my computer.	10593860
Ta gazeta jest bezpłatna.	This newspaper is free.	10593862
Jak się pobiera zdjęcie z tej strony?	How do you download a photo from this site?	10593865
Właśnie pobrałem mnóstwo plików.	I just downloaded a lot of files.	10593870
Chcę pobrać tę grę.	I want to download this game.	10593872
To tylko obraz, który pobrałam z internetu.	It's just a picture I downloaded from the Internet.	10593893
Czy pobraliście aplikacje, o których wam mówiłam?	Did you download the apps that I told you about?	10593901
Czy pobrałyście aplikacje, o których wam mówiłam?	Did you download the apps that I told you about?	10593904
Pływałem szybciej, gdy byłem młody.	I could swim faster when I was young.	10593905
Nie chcę, żebyś prał moje ubrania.	I don't want you to wash my clothes.	10593989
Ile kosztuje kilogram cukru w Algierii?	How much does a kilo of sugar cost in Algeria?	10593992
Droga prowadząca do hotelu jest wąska.	The road that leads to the hotel is narrow.	10594024
Chcesz iść z nami do galerii handlowej?	Would you like to go to the mall with us?	10594025
Jest kwadrans po dziewiątej.	It's quarter past nine.	10594063
Mam ból zęba.	I have a toothache.	10594380
Pozwól mi wejść do środka.	Let me step inside.	10594440
Nadaj ten list.	Mail this letter.	10595923
Małpy pną się po drzewach.	Monkeys climb trees.	10595934
Każdy się podpisał.	Everyone signed.	10596054
Kieruj się na południe.	Head south.	10596312
Parasole dobrze się sprzedają.	Umbrellas sell well.	10597680
On rozumie fizykę.	He understands physics.	10597866
Czy są wysokie?	Are they tall?	10598239
Legenda mówi, że była syreną.	The legend says that she was a mermaid.	10599056
Mój tata uczy mnie gotować.	My dad is teaching me how to cook.	10599058
Wątp we wszystko.	Question everything.	10599082
Poszedł do stadionu.	He's gone to the stadium.	10599096
Na stadionie było wielu rozentuzjazmowanych kibiców.	There were a lot of excited fans in the stadium.	10599106
Czy poszedłeś na stadion?	Did you go to the stadium?	10599107
To jeden z największych stadionów świata.	This is in one of the largest stadiums in the world.	10599109
Czy rana jest bardzo głęboka?	Is the wound very deep?	10599133
Jeśli ugryzie cię pies, przemyj ranę wodą z mydłem.	If a dog bites you, wash the wound with soap and water.	10599144
Rana pozostawiła bliznę na jej ręce.	The wound left a scar on her arm.	10599147
Trzymałem drzwi zamknięte.	I kept the door locked.	10599666
Termin jest w poniedziałek.	The deadline is Monday.	10599686
Jest doskonałego rozmiaru.	It's the perfect size.	10599747
Nie jest mojego rozmiaru.	It's not my size.	10599751
Są rany, których czas nie leczy.	There are wounds that time does not heal.	10599790
Ceny akcji spadły.	Stock prices dropped.	10599839
Nie miałem niczego wspólnego z tym wypadkiem.	I had nothing to do with that accident.	10600595
Uważaj na głowę!	Watch your head!	10600846
Nosił stare buty.	He wore old shoes.	10601500
Twoje usta są czerwone.	Your lips are red.	10601857
Jesteś w dobrym nastroju?	Are you in a good mood?	10602684
Znalazłem twoją czapkę.	I found your cap.	10602692
Czy to jest przestępstwo?	Is that a crime?	10602712
Moja koszula jest pomarańczowa.	My shirt is orange.	10602791
Wolę grejpfruty od pomarańcz.	I prefer grapefruit to oranges.	10602795
Mandarynki są mniejsze niż pomarańcze.	Tangerines are smaller than oranges.	10602799
Pomarańcze są większe niż mandarynki.	Oranges are bigger than tangerines.	10602801
To jest drzewo pomarańczowe.	This is an orange tree.	10602813
Pomarańcza spadła z lady.	The orange fell off the counter.	10602843
Gdzie jest torba z pomarańczami?	Where's the bag with the oranges?	10602862
W pomarańczach jest wiele witamin.	There are a lot of vitamins in oranges.	10602865
Obierz pomarańczę i daj mi kawałek.	Peel the orange and give me a piece.	10602866
Ona lubi niebieskie sukienki.	She likes blue dresses.	10603306
Mój ojciec bardzo lubi pizzę.	My father likes pizza very much.	10603890
Nikt nie lubi szczurów.	Nobody likes rats.	10604140
Znalazłem zdechłego szczura w garażu.	I found a dead rat in the garage.	10604150
Politykom nie można ufać.	Politicians can't be trusted.	10604878
Politycy naprawdę uwielbiają mówić.	Politicians really love to talk.	10604879
Ten polityk został usunięty z urzędu.	The politician was removed from office.	10604883
Trzech robotników zginęło.	Three workers died.	10604910
Upiekła trzy ciasta.	She baked three cakes.	10604930
Mam trzy komputery.	I have three computers.	10604941
Te krawaty nie są moje.	These ties aren't mine.	10605750
Czy są Amerykanami?	Are they American?	10606618
Przyroda się zmienia.	Nature is changing.	10606668
Policz do trzydziestu.	Count to thirty.	10608658
Daj mi trzydzieści sekund.	Give me thirty seconds.	10608678
Czy trzydzieści dni jest wystarczające?	Is thirty days enough?	10608680
Spałem przez dziewięć godzin.	I slept for nine hours.	10609252
Węgiel nie zawsze jest czarny.	Coal is not always black.	10609344
Ona jest w złym nastroju.	She is in a bad mood.	10613115
Nauczyciel i ja siedzieliśmy twarzą w twarz.	The teacher and I sat face to face.	10615154
Mój biustonosz jest brudny.	My bra is dirty.	10615332
Zamek jest piękny.	The castle is beautiful.	10616777
Jest za kwadrans druga.	It's quarter to two.	10616786
Co robiłeś przez cały ten czas!	What have you been doing all this time!	10616791
Moja przyszłość jest w twoich rękach.	My future is in your hands.	10618955
Chce zostać w przyszłości naukowcem.	He wants to be a scientist in the future.	10618958
Wspieraj swoje lokalne przedsiębiorstwa.	Support your local businesses.	10619085
Pisuje artykuły dla lokalnej gazety.	He writes articles for the local newspaper.	10619165
Kupiłem je w lokalnym sklepie.	I bought it at a local store.	10619167
Autobus odjechał wcześnie.	The bus left early.	10624687
Dostał imię po królu.	He was named after the king.	10631712
Nie zapomnij zapiąć pasów.	Don't forget to fasten your safety belts.	10633497
Teraz ty spróbuj.	Now you try.	10634711
Kupiłem kilka znaczków.	I bought a few stamps.	10634836
Wszyscy go podziwiają.	Everybody looks up to him.	10635609
Dekada to dziesięć lat.	A decade is ten years.	10640232
To stało się dekady temu.	That happened decades ago.	10640234
On jest jednym z moich najlepszych przyjaciół.	He is one of my best friends.	10647313
Ci ludzie nie mieli teraz pracy.	Those people now had no jobs.	10652874
Nigdy wcześniej nie jeździłem na koniu.	I've never ridden a horse before.	10652890
Nie chciałbyś zobaczyć mojej kolekcji znaczków?	Wouldn't you like to see my stamp collection?	10667125
Naprawdę powinieneś wyczyścić swojego laptopa od czasu do czasu.	You should really clean your laptop from time to time.	10667134
Zostaw tego pingwina w spokoju.	Leave this penguin alone.	10667155
Chciałbym iść spać, ale ktoś ukradł mój materac.	I would like to go to sleep, but someone stole my mattress.	10667169
Co to za japońskie bajki?	What are these Japanese cartoons?	10667201
Co twoja szczoteczka robi w moim kubku na kawę?	What is your toothbrush doing in my coffee mug?	10667218
Proszę nie zawracać głowy mojemu synowi.	Please don't bother my son.	10667406
Ja tego sprzątać nie będę.	I'm not cleaning that up.	10667539
Nauka języków nigdy nie była tak łatwa.	Learning languages has never been so easy.	10667593
Są ludzie, którzy wykorzystują niepełnosprawnych dla własnego zysku.	There are people who take advantage of the disabled for their own profit.	10667598
Przyjdź we wtorek, jeśli to możliwe.	Come on Tuesday if possible.	10667700
Mówi się, że jest bardzo bogaty.	He is said to be very rich.	10667853
Nie zrobiłem bardzo wielu zdjęć.	I didn't take very many pictures.	10667860
Jestem tego pewien w stu procentach.	I'm 100 percent sure of that.	10667909
On pakuje swoje rzeczy do pudełek.	He's packing his things into boxes.	10667958
Twoja siostra jest młodsza od mojej.	Your sister is younger than mine.	10668166
Nie pozwalaj dzieciom oglądać tego filmu.	Don't let the kids watch this film.	10668184
Ten szczeniaczek nie jest na sprzedaż; jest do adopcji.	This puppy is not for sale; it's for adoption.	10668190
Proszę, pokaż mi jak używać tej zmywarki.	Please show me how to use the washing machine.	10668241
Ona nie pozwoli mi się już więcej dać przytulić.	She won't let me hug her anymore.	10668718
Nie chcę jeść lodów na deser.	I don't want to eat ice cream for dessert.	10668720
Miasto w którym dorastałem jest bardzo piękne.	The city I grew up in is very beautiful.	10668746
Ona myśli, że jest dobrym kierowcą.	She thinks she's a good driver.	10669255
Proszę, przeczytaj to bardzo uważnie.	Please read this very carefully.	10669269
Masz rodzinę lub znajomych w Polsce?	Do you have family or friends in Poland?	10695703
Zapisz na tej kartce leki, których potrzebujesz.	Write down the medicine you need on this piece of paper.	10695711
Czy rodzina lub znajomi przyjadą cię odebrać?	Will family or friends come to pick you up?	10695738
Wszystkie pociągi w kraju są dla ciebie darmowe.	All trains running in this country are free for you to use.	10695831
Synagoga jest tam.	The synagogue is there.	10695873
Meczet jest tam.	The mosque is there.	10695874
Nie wsiadaj do samochodu z nieznajomymi!	Don't get in a car with strangers!	10696022
Poczekaj w kolejce, proszę.	Wait in line, please.	10696205
Miałem zawał serca.	I had a heart attack.	10696209
Psy szczekały całą noc.	The dogs barked all night.	10698013
Muszę podać ci zastrzyk.	I need to give you an injection.	10699302
Nie puszczajmy dzisiaj tej piosenki.	Let's not play that song tonight.	10699642
To tę ulicę miałem na myśli.	This is the road I was thinking of.	10700697
To jest mój ojczym.	This is my stepfather.	10701998
To jest moja macocha.	This is my stepmother.	10702001
To jest mój pasierb.	This is my stepson.	10702003
Czy to gęś?	Is this a goose?	10709094
Powiedzieli, że uważają, że byłem zabawny.	They said they thought I was funny.	10720154
Nigdy nie spałeś z kobietą?	You've never slept with a woman?	10741862
Nie ma niebieskich kotów.	There are no blue cats.	10741863
Mam trzech braci i dwie siostry.	I have three brothers and two sisters.	10750379
Woda jest tu płytka.	The water is shallow here.	10756006
Woda jest tu bardzo płytka.	The water here is very shallow.	10756010
Stał na wzgórzu, badając krajobraz.	He stood on the hill surveying the landscape.	10756033
Moje dziecko ciągle kaszle i kicha.	My baby keeps coughing and sneezing.	10761999
Moim marzeniem jest studiować ukraiński w Kijowie.	My dream is to study Ukrainian in Kyiv.	10762152
Pierwszym krokiem jest zebranie informacji.	Step one is to collect data.	10763692
To są moje majtki.	Those are my pants.	10767896
Ta stajnia zawiera dwanaście stanowisk.	This stable contains twelve stalls.	10770568
Kupiłam ten rower tanio jak barszcz.	I bought this bicycle dirt-cheap.	10770576
Po mięso koszerne idę do rzeźnika, któremu ufam.	For kosher meat, I go to a butcher I trust.	10770669
Czuję się rozczarowany ograniczoną zdolnością komputera.	I feel disenchanted by the limited capacity of the computer.	10770763
Uwolnij się od łańcuchów, które cię przywiązują!	Break free from the chains that bind you!	10770957
Mogłabyś włożyć te torby do bagażnika?	Could you put these bags in the trunk?	10773796
Pień drzewa staczał się po stoku.	The tree trunk hurdled down the slope.	10773797
Nie zapomnij o kąpielówkach.	Don't forget your swimming trunks.	10773798
Moja babcia upadła i złamała biodro.	My grandmother fell and broke her hip.	10774160
Są wzgórza, małe muzeum, publiczny ogród i duży kościół.	There are hills, a little museum, a public garden and a big church.	10775540
Spróbuj wymyślić zdanie, w którym jest piętnaście sylab.	Try to come up with a sentence that has fifteen syllables.	10776703
Most runął, gdy pękł jeden z kabli.	The bridge collapsed when one of the cables snapped.	10776826
Mój pies gonił jaszczurkę i odłamał jej ogon.	My dog chased a lizard and snapped its tail off.	10776828
W życiach pojedynczych komórek możemy dostrzec źródło naszej własnej inteligencji.	In the lives of single cells, we can perceive the roots of our own intelligence.	10776857
Antarktyda to światowa lodówka.	Antarctica is the world's refrigerator.	10777152
Zagościliśmy w osobliwym noclegu nad morzem.	We stayed in a quaint bed and breakfast by the sea.	10777630
W tej zupie są marchewki, cebula, pietruszka, seler i ziemniaki.	In this soup there are carrots, onions, parsley, celery and potatoes.	10778746
Ludzie nie dostaliby się tam, gdzie są, bez przeciwstawnych kciuków.	Humans wouldn't have gotten where they are without opposable thumbs.	10781017
Dlaczego banany są krzywe?	Why are bananas curved?	10786415
Owoce gniją w słońcu.	Fruits decay in the sun.	10789494
Muchy mają dobry węch co do rzeczy gnijących.	Flies have a keen sense of smell for decaying matter.	10789505
Moja żona śpiewa w żeńskim chórze.	My wife sings in the ladies' choir.	10791134
Wpadła mi słaba ocena z geografii.	I got a poor grade in geography.	10792107
Łopaty i szpadle sprzedawały się po dziesięć dolarów za sztukę.	Shovels and spades sold for ten dollars apiece.	10793390
Została kierownikiem oddziału kardiologii w szpitalu miejskim.	She became the director of the cardiology department at the city hospital.	10793814
Nie dotykaj ścian! Farba jest jeszcze świeża!	Don't touch the walls! The paint is still fresh!	10794225
Jajko to nieodzowny składnik w wielu przepisach.	The egg is an indispensable ingredient in many recipes.	10794240
Jest słodka i zabawna.	She's cute and fun.	10799424
Wymieszaj proszek do pieczenia z mąką pszenną.	Mix baking powder with wheat flour.	10801632
Twój zegar jest droższy od mojego.	Your clock is more expensive than mine.	10805931
Pozwól klientom płacić tak, jak chcą.	Let customers pay however they like.	10807985
Zegarkom mojego dziadka trzeba wymienić baterie.	The batteries of my grandfather's watches have to be replaced.	10810091
Kukurydza to główny składnik tej sałatki.	Corn is the main ingredient of this salad.	10828533
Pobrali się dwa lata temu.	They got married two years ago.	10831988
Poszedłem na cmentarz odwiedzić zmarłą rodzinę.	I went to the graveyard to visit my late family.	10867580
Ten ul to dom mojej pszczoły Zosi.	This hive is the home of my bee Zosia.	10870788
Linia jest dalej zajęta.	The line is still busy.	10874311
Rząd podjął kroki w celu promocji krajowego przemysłu.	The government has taken measures to promote domestic industry.	10899328
Ma dwóch braci, którzy pracują w przemyśle komputerowym.	She has two brothers, who work in the computer industry.	10899330
Koniec ołówka stał się tępy.	The point of the pencil has become dull.	10963834
Proszę przedłużyć tę wizę.	Please extend this visa.	10987348
Na spotkaniu jest dwunastu obecnych.	Twelve are present at the meeting.	10987778
Nie odwołano się do decyzji sądu.	The court's decision was not appealed.	10990397
Od wyroku można się odwołać w ciągu dziesięciu dni.	The verdict can be appealed within ten days.	10990399
Sfałszował podpis jej matki.	He forged her mother's signature.	10999672
Suszarka zawsze stoi na drodze!	The airer is always in the way!	11002896
Wieszak na pranie zawsze stoi na drodze!	The airer is always in the way!	11002897
Ten pies nie chce się ruszać, bo boli go łapa.	This dog doesn't want to move because his paw hurts.	11008390
Cud, że nadal żyje po tym spadku.	It's a miracle she's still alive after that fall.	11008984
Rzeźnik dał mi kilogram szynki za darmo.	The butcher gave me a kilo of ham for free.	11009470
Reżyser nie był zadowolony ze zmiany.	The director wasn't happy with the change.	11011385
Dzięki internetowi żyjemy w epoce kunktatorstwa.	Thanks to the internet, we're living in the era of procrastination.	11011543
Ale mój rysunek nie przedstawiał kapelusza.	But my drawing was not of a hat.	11011565
W szpitalu spotkałam bardzo miłego pielęgniarza.	At the hospital, I met a very nice nurse.	11012042
Niedziela Palmowa to niedziela przed Wielkanocą.	Palm Sunday is the Sunday before Easter.	11012043
Coś jest nie tak z moją klawiaturą.	There's something wrong with my keyboard.	11018095
Dlaczego judo to najlepszy wybór dla twojego dziecka?	Why is judo the best choice for your child?	11075275
To jest najlepszy podręcznik.	That's the best textbook.	11111456
Nasza córka często chodzi do kina.	Our daughter often goes to the cinema.	11119131
To jest moja torebka.	That's my handbag.	11119137
On zwykle pije herbatę, a czasem kawę.	He usually drinks tea and sometimes coffee.	11135182
Oni nigdy nie jedzą dużego śniadania.	They never eat a big breakfast.	11135184
On codziennie je jajka na śniadanie.	He eats eggs for breakfast every day.	11135234
Wraz z poprawą technologii medycznej, ludzie żyją dłużej.	As medical technology improves, people are living longer.	11136319
Wraz z ulepszeniem technologii medycznej, ludzie żyją dłużej.	As medical technology improves, people are living longer.	11136321
Są ludzie, o których wydaje się, że znaleźli fontannę młodości.	There are people who seem to have discovered the fountain of youth.	11142756
Nie wiem nic o wyścigach.	I don't know anything about racing.	11142788
Idź na pocztę i kup jakąś pocztówkę i kilka znaczków.	Go to the post office and buy some postcard and few stamps.	11150355
Paczki musiały zostać uszkodzone podczas transportu.	The packages must have been damaged during the transport.	11150379
Nie możesz głaskać niedźwiedzi.	You can't pet bears.	11150450
Jakość życia naszych mieszkańców jest bardzo ważna.	The quality of life of our residents is very important.	11162299
Jakość życia naszych gości jest bardzo ważna.	The quality of life of our residents is very important.	11162301
Ważne jest, aby nasi mieszkańcy mieli poczucie niezależności.	It's important for our residents to feel independence.	11164606
Jaki jest wiek tego słonia?	What is the elephant's age?	11164661
Ważne jest, aby nasi mieszkańcy mieli poczucie samodzielności.	It's important for our residents to feel independence.	11164681
Może to obejmować robienie prania.	This may include doing laundry.	11194582
Nie powinno to jednak zajmować zbyt wiele czasu.	This shouldn't take too much time, however.	11194712
Upewnij się, że podłoga nie jest zbyt mokra.	Make sure the floor doesn't get too wet.	11215661
Regularnie wykonuj mu lub jej kąpiel z użyciem gąbki.	Give him or her a sponge bath regularly.	11215667
Nie zapomnij sprawdzić, czy nie ma wysypki i siniaków.	Don't forget to check for rashes and bruises.	11215681
Jej córka usmażyła mięso.	Her daughter fried the meat.	11234350
Nie zapomnij o naszym cotygodniowym spotkaniu.	Don't forget our weekly meeting.	11252503
Uważam, że trudno byłoby spersonalizować każde zaproszenie ślubne.	I think it would be difficult to personalize every wedding invitation.	11253829
Stołówka była pusta, kiedy tam poszłam na obiad.	The canteen was empty when I arrived there for lunch.	11256021
Jest za późno, żeby go odwiedzić.	It's too late to visit him.	11260341
Kreta to duża grecka wyspa.	Crete is a big Greek island.	11261054
Mówi się, że palenie szkodzi zdrowiu.	It is said that smoking is bad for your health.	11261099
Ten facet ma złote serce.	This guy's got a heart of gold.	11261110
Im mniej języków tym lepiej.	The fewer languages, the better.	11261115
Matka mojego prawnuka jest Rosjanką.	My great-grandson's mother is Russian.	11263057
Gotówka oznacza wolność.	Cash means freedom.	11264379
Czy wie pan, gdzie leży ta wyspa?	Do you know where this island is located?	11266377
Ostatnio spędzają ze sobą dużo więcej czasu.	They've been spending a lot more time together lately.	11268643
Początek jesieni jest w październiku.	Autumn begins in October.	11268979
Moja córka nie jest już dzieckiem.	My daughter is not a child anymore.	11271426
Całkiem nieźle sobie radzę z nastawianiem ludziom kręgosłupów.	I'm pretty good at cracking other people's backs.	11275513
Nie przepraszaj za bycie ciekawym.	Don't apologize for being curious.	11275516
Wysiedliśmy z windy.	We left the lift.	11293979
To jest moja ulubiona księgarnia.	This is my favourite bookshop.	11293980
Mam osiemdziesiąt dziewięć lat.	I am eighty-nine years old.	11302421
Plac jest pełen rowerów.	The square is full of bicycles.	11309513
Wzdłuż alei znajduje się wiele drogich sklepów.	There are many expensive shops along the avenue.	11312435
Na moje urodziny chciałbym iść sztukę.	I'd like to see a play for my birthday.	11318060
Ogól swoje wąsy.	Shave your moustache.	11318129
Jeśli nie znasz odpowiedzi, zgaduj.	If you don't know the answer, have a guess.	11318137
Kawa jest lepsza od herbaty od większości Greków.	Coffee is preferable to tea to most Greeks.	11318313
To jest oficjalna strona.	This is the official website.	11318430
Ten tekst nie jest przetłumaczony.	This text is not a translated text.	11318954
Nie mam pojęcia jak używać tego narzędzia.	I don't know how to use this tool.	11318961
Twoje panowanie będzie fatalne i krótkie.	Your reign will be disastrous and brief.	11318983
Mamy teraz inne rzeczy na głowie.	We've got other things we need to be doing now.	11318984
Do piekła z tym!	To Hell with that!	11319034
Nie przychodź do mojego pokoju.	Don't come in my room.	11319043
Co jest tematem Pana wykładu?	What's the subject of your lecture?	11319104
Mam już dość tego wszystkiego.	I'm so sick of all this.	11319117
Od razu to polubiłem.	I immediately liked it.	11319191
Od razu to polubiłam.	I immediately liked it.	11319193
Nie powinieneś ich przelewać.	You mustn't overwater them.	11319283
Nie powinnaś ich przelewać.	You mustn't overwater them.	11319284
Czy wiesz, jak hoduje się pszczoły?	Do you know how to raise bees?	11324235
Czy metro jedzie na lotnisko?	Does the subway go to the airport?	11345095
Ona tęskni za swoim byłym.	She misses her ex.	11350251
Tęskniłaś za Grecją, gdy wyjechałaś do Niemiec?	Did you miss Greece when you went to Germany?	11361686
Metro jeździ częściej niż autobus.	The subway is more frequent than the bus.	11364874
Wiele lat temu w Grecji żyły lwy.	Many years ago, there were lions in Greece.	11383958
Pola potrzebują deszczu.	The fields need rain.	11401405
Krajobraz w Rosji jest wyjątkowy.	The landscape in Russia is special.	11426350
Cierpliwi ludzie zawsze wygrywają.	Patient people always win.	11451192
Woda w jeziorach i strumieniach to często woda pitna.	Water in lakes and streams is generally freshwater.	11464750
Chciałem poprawić moją wymowę po Japońsku.	I wanted to improve my Japanese pronunciation.	11464765
Mój tata gra na pięciu instrumentach.	My father plays five instruments.	11470945
Nie mogę malować bez pędzla.	I can't paint without my brush.	11473131
To jest kanał dwujęzyczny.	This is a bilingual channel.	11475371
Poszliśmy do meczetu.	We went to the mosque.	11475742
O całej sprawie opowiedział dziennikarzowi.	He has told the story to the journalist.	11475989
Stolice są duże i głośne.	Capital cities are big and noisy.	11485051
Dobra komunikacja tworzy dobrych przyjaciół.	Good communication makes good friends.	11490431
Turyści odwiedzili dom słynnego malarza.	The tourists have visited the house of the famous painter.	11492231
Młody muzyk nigdy nie myślał o wstąpieniu do orkiestry symfonicznej.	The young musician has never considered joining the symphonic orchestra.	11492243
Jej włosy są czarne i długie.	Her hair is long and black.	11492516
Podpis dziewczyny jest bardzo piękny.	The signature of the girl is very beautiful.	11496468
Adwokat dodał swój podpis.	The lawyer added his signature.	11496760
W jeziorze pływa szczęśliwy hipopotam.	A happy hippo is swimming in the lake.	11504898
Na wycieczce nie będziemy odpoczywać, bo będziemy dużo spacerować.	We won't relax on the trip because we'll walk a lot.	11512203
Dieta jest trudna.	The diet is difficult.	11517485
Królowa jest w swoim zamku.	The queen is in her castle.	11519293
Parlament jest w stolicy.	The Parliament is in the capital.	11524084
Królik jest brązowy.	The rabbit is brown.	11524224
Szkło jest tańsze niż aluminium.	Glass is cheaper than aluminum.	11525774
Na początku nie lubiłam tego robić.	I didn't like doing this at first.	11533016
Prawie nigdy jej nie spotykałem.	I almost never met her.	11533590
Chował się za drzwiami.	He was hiding behind the door.	11533706
Chętnie poszedłbym na twoje miejsce.	I'd be glad to go in your place.	11533926
Czy jest wykonany z miedzi?	Is it made of copper?	11536544
Żelazo jest bardzo ważnym metalem.	Iron is a very important metal.	11546830
Czy kursor jest na ekranie?	Is the cursor on the screen?	11549533
Pierwiastek kwadratowy z dziewięciu to trzy.	The square root of nine is three.	11562744
Czy ktoś jeszcze o tym wie?	Does anyone else know about this?	11565969
To brzmiało łatwo.	It sounded easy.	11573417
Założyłem nową klamkę do drzwi.	I put a new handle to the door.	11573437
Ta historia przypomniała mi o moim ojcu.	The story reminded me of my father.	11573484
Nie mam więcej pytań.	I have no further questions.	11573521
Krzyknął do niej, żeby uważała.	He shouted to her to be careful.	11573539
Kto pamięta nasze dziesięć podstawowych zasad?	Who remembers our ten basic principles?	11580498
Praca dzieci jest nielegalna.	Child labor is illegal.	11581309
Worek jest pełen.	The bag is full.	11581324
Była do połowy pełna.	It was half full.	11581333
Czajnik jest pełen.	The kettle is full.	11581339
Stołówka jest pełna.	The canteen is full.	11581347
Mój twardy dysk jest pełen.	My hard drive is full.	11581354
Nasz terminarz jest dosyć pełen.	Our schedule is pretty full.	11581355
Półki są pełne książek.	The shelves are full of books.	11581363
Dom ma siedem pełnych łazienek.	The house has seven full bathrooms.	11581390
Ta szuflada jest pełna śmieci.	That drawer is full of junk.	11581424
Liczy się każda sekunda.	Every second counts.	11581565
Minuta ma sześćdziesiąt sekund.	A minute has sixty seconds.	11581594
Jedna minuta ma sześćdziesiąt sekund.	One minute has sixty seconds.	11581597
Twoje stopy są brudne.	Your feet are dirty.	11581674
Ten widelec jest brudny.	This fork is dirty.	11581718
Talerz jest brudny.	The plate is dirty.	11581721
Talerze są brudne.	The plates are dirty.	11581726
Twój kołnierz jest brudny.	Your collar is dirty.	11581741
Twoja poduszka jest brudna.	Your pillow is dirty.	11581749
Dlaczego twoje ubrania są brudne?	Why are your clothes dirty?	11581823
Twój samochód jest bardzo brudny.	Your car is really dirty.	11581833
Festiwal rozpocznie się już jutro.	The festival will start tomorrow.	11583601
Nie dodawaj zbyt wiele soli.	Don't add too much salt.	11586381
Oni nigdy nie przestali.	They never stopped.	11594842
Jak to się wymawia?	How is that pronounced?	11599597
To stało się przez przypadek.	It happened by accident.	11599652
Nie karz dzieci.	Don't punish the children.	11599908
Zadzwonił dzwonek do drzwi.	The doorbell rang.	11624877
Ona na zawsze zostanie w moim sercu.	She will be forever in my heart.	11631749
Mój osioł jest szybszy niż twój samochód.	My donkey is faster than your car.	11632687
Kobieta pije herbatę z cukrem lub miodem.	The woman drinks the tea with sugar or with honey.	11653773
Na śniadanie jem chleb z dżemem.	I eat bread with jam for breakfast.	11656871
Łyżka czy łyżeczka?	A tablespoon or a teaspoon?	11660767
Nikt tutaj temu nie zaprzecza.	Nobody here is denying that.	11665753
Indyk jest w piekarniku.	The turkey is in the oven.	11672336
Kieliszki są puste, a wino się skończyło.	The glasses are empty and the wine has run out.	11676828
Ta plotka jest w pewnym stopniu prawdą.	The rumor is true to some extent.	11678696
Słyszałam, że ktoś gwiżdże.	I heard someone whistle.	11700933
A to co? Samochód? Raczej zardzewiała puszka.	What's this? A car? More like a rusted can.	11705505
Pokój był pełny dymu.	The room was full of smoke.	11723021
Halo, jest tam ktoś?	Hello, is anyone there?	11731000
Czy to jest ten nowy film?	Is this the new film?	11731082
To nie była łatwa decyzja.	It wasn't an easy decision.	11738958
Dzisiejsze brokuły nie są smaczne bo zostały rozgotowane.	Today's broccoli is not good because it has been boiled for too long.	11747336
Co się stanie nikt nie wie.	What'll happen is anyone's guess.	11747344
Mieszkał ze swoją ciocią.	He was living with his aunt.	11749863
Patrz na te kaczki na stawie.	Look at those ducks on the pond.	11749866
Ona nie pomoże biednym ludziom.	She will not help poor people.	11749877
Myślałam, że wszyscy lubią banany.	I thought everyone liked bananas.	11749990
Musieliśmy pójść na kompromis.	We had to compromise.	11750471
Mój kot śpi mi na plecach.	My cat sleeps on my back.	11764206
Twój pies zawsze na mnie szczeka.	Your dog always barks at me.	11764965
Jego dni jako polityka są policzone.	His days as a politician are numbered.	11765040
Dziadkowie tych dzieci mają po dziewięćdziesiąt lat.	The grandparents of these children are ninety years old.	11767004
Napisz to piórem.	Write it with a pen.	11835145
Dom nad jeziorem jest mój.	The house by the lake is mine.	11844823
Ta równina jest pełna tulipanów, maków i róż.	This plain is full of tulips, poppies, and roses.	11844936
Moja mama pokroiła tort.	My mother cut the cake.	11846092
Gdzie jest ketchup?	Where's the ketchup?	11853622
Mistrzostwa w piłce nożnej są długie.	The soccer championships are long.	11878052
Na tym kursie nauczyłem się wielu rzeczy o języku rumuńskim.	Doing this course, I learned many things about the Romanian language.	11882693
Jaka jest waluta twojego kraju?	What is the currency of your country?	11900888
Leu jest walutą Rumunii.	The leu is the currency of Romania.	11902521
Nie wkładaj palca do ust, ponieważ jest pełen bakterii.	Do not put the finger in the mouth because it is full of bacteria.	11909111
Karetka jedzie zaraz.	The ambulance is coming right away.	11909148
Recesja przyniosła również wysoką inflację.	The recession also brought high inflation.	11912047
Czy obchodzisz Wielkanoc w Brazylii?	Do you celebrate Easter in Brazil?	11914970
Szef, wszystko przepadło! Zdejmują mu gips! On wyjeżdża!	Chief, it's all over! The cast is going to be removed! The client is leaving!	11916343
Co jedzą lisy?	What do foxes eat?	12005229
Tęcza zniknie w krótkim czasie.	The rainbow will disappear in little time.	12007940
Śpiewa gardłem, językiem i zębami.	He sings with the throat, tongue, and teeth.	12012324
Widzi pająka i mdleje.	She sees a spider and she faints.	12015908
Pień gruszy jest większy niż śliwy.	The trunk of the pear tree is bigger than that of the plum tree.	12017308
Wszędzie zimą dni są krótsze, a temperatury niższe.	Everywhere, the days are shorter and the temperatures are lower in winter.	12022043
Jesień to czas żniw.	Fall is the time of harvest.	12036965
Będę przyjeżdżał co rok.	I'll come here every year.	12036970
Przejdź do rzeczy, proszę.	Get to the point, please.	12036990
Księgowy i kasjer to bracia.	The accountant and the cashier are brothers.	12038466
Jest młoda i szuka przygód.	She's young and adventurous.	12040223
Nie jest wysoki, ale jest silny.	He's not tall, but he is strong.	12040336
Im twardszy, tym lepiej.	The tougher, the better.	12040354
Nie wszystkie przeglądarki są bezpieczne.	Not all browsers are secure.	12040379
Jest całkiem sympatyczna, co nie?	She's quite sympathetic, isn't she?	12040423
Mógłbyś okazać więcej skromności.	You could be more modest.	12040434
Zapomniał o swojej wizycie.	He forgot his appointment.	12040443
Organizujemy wystawę co roku.	We hold an exhibition every year.	12040470
Jego komentarz zdaje się mijać z celem.	His remark seems to be off the point.	12040592
Mama gotuje mi posiłki.	My mother prepares my meals.	12040614
To wszystko stało się bardzo nagle.	It was all very sudden.	12040626
Nie przepadam za masłem. Wolę margarynę.	I don't care for butter. I prefer margarine.	12040627
Czy kiedykolwiek leczyliście się na gruźlicę?	Have you ever been treated for tuberculosis?	12040898
Zobacz, co leci w telewizji.	See what's on TV.	12040905
Zrozumiałem połowę z tego, co mówiłeś.	I could understand what you were saying half the time.	12040910
Uważa mnie za jego własność.	He considers me his property.	12040964
Angielski jest dla mnie nudny.	I find English boring.	12040973
Potrzebne nam są owoce i warzywa.	We need some fruit and veg.	12040996
Wierz lub nie, ale to prawda.	Believe it or not, that's true.	12041093
Miałem rozsunięte firanki, więc widziałem, co się działo na dworze.	My curtains were open, so I could see what was happening outside.	12041164
Francja jest znana ze swoich smaków.	France is recognized through its flavors.	12041187
Wysłałeś prezenty ze swojego kraju.	You sent gifts from your country.	12041242
Czy w pobliżu jest jakieś schronisko młodzieżowe?	Is there a youth hostel around here?	12041245
Do tego, rzecz jasna, mnie zatrudniono.	That, of course, was what I was hired to do.	12041261
W twojej kurtce brakuje guzika.	There's a button missing from your jacket.	12041275
Jedzenie szybko się psuje podczas upału.	Food spoils quickly in hot weather.	12041292
Dziobaki żyją na wschodzie Austrii.	Platypuses live in the east of Austria.	12043994
To było trudniejsze, niż przewidywałem.	It was more difficult than I had imagined.	12044061
Zauważyłeś, że oba zdjęcia są bardzo podobne?	Did you notice both pictures are very similar?	12044085
Daj mi pączka.	Give me a donut.	12044097
Twój brat doszedł do siebie po operacji.	Your brother recovered from his surgery.	12044099
Nie wiedziałem, że złamałem nogę.	I didn't know that I'd broken my leg.	12044118
Większość uważa, że goryle są głupie. Czy to prawda?	Most people think that gorillas are stupid. Is that true?	12044136
Nie wyglądasz na tak zajętego.	You don't look that busy.	12044149
Człowiek może żyć tylko z jedną nerką.	Man can live by only one kidney.	12044175
Uważam, że to, co obaj mówią, jest słuszne.	I feel that what both of them are saying is correct.	12044190
Aplikacja ta umożliwia synchronizację zdjęć i muzyki między wszystkimi urządzeniami.	This app will let you sync your photos and music between all your devices.	12044192
W przyrodzie nie ma równości.	There is no equality in nature.	12044198
Widziano, jak Sami połyka tabletki.	Sami was seen swallowing pills.	12044213
Chcę lekką kurtkę wiosenną.	I want a light spring coat.	12045075
Te figi są bardzo smaczne.	These figs are really tasty.	12045097
Już nie oglądam tego programu.	I don't watch that program anymore.	12045101
Czy zrobiłeś to, o co zostałeś oskarżony?	Did you do what you've been accused of doing?	12045107
Te rzeczy nie należą do mnie.	Those don't belong to me.	12045111
Nigdy mnie się nie słucha.	He never listens to me.	12045117
Nie chce mi się wstawać.	I don't feel like getting up.	12045140
Jest tutaj dużo komarów.	There are a lot of mosquitoes here.	12046650
Udawaj, że nic się nie stało.	Just pretend nothing happened.	12046677
Nie zwiedzajmy Australii.	Let's not visit Australia.	12046693
W pewnym sensie stało się to przez przypadek.	It sort of happened by accident.	12048379
Położyli lampę na szafce nocnej.	They put the lamp on the nightstand.	12049072
Podałeś mi złą kolejność.	You gave me the wrong order.	12053351
Nie robiłbym tego w ten sposób.	That's not the way I'd do that.	12053384
Chodzę na basen w każdy poniedziałek.	I go swimming every Monday.	12053415
Na festiwalu zjadłem homara.	I ate lobster at the festival.	12053429
Mamy głośnych sąsiadów.	We have noisy neighbors.	12053443
Na tę wiadomość nie można odpowiedzieć.	This message cannot be answered.	12054759
Spędziliśmy cały dzień w parku.	We spent all day in the park.	12054911
Lorenzo był na mszy ze swoją matką.	Lorenzo was at mass with his mother.	12054934
Był on jego pierwszą miłością.	He was his first love.	12058138
Mam nadzieję, że to nie prawda.	I hope that's not true.	12058199
Mój brat pije sok.	My brother is drinking juice.	12058232
Kościół był wypełniony po brzegi.	The church was packed.	12058235
Nie chcę, by doszło do nieporozumień.	I don't want there to be any misunderstanding.	12058237
Przepraszam, którędy do biblioteki?	Excuse me, how can I get to the library?	12058251
Mam do Pana prośbę.	Sir, I have a request to make.	12060406
Wygrałem tamten zakład.	I won that bet.	12060416
Masz wieści od reszty zespołu?	Have you heard from the rest of the team?	12060440
Podaj mi, proszę, tamten czerwony długopis.	Please hand me that red pen.	12060449
Ziemia jest trzecią najbliższą planetą do Słońca.	Earth is the third closest planet to the Sun.	12060473
Jest równie dobrym kucharzem, co jej matka.	She's as good a cook as her mother.	12060560
Chleb jest szkodliwy dla gołębi.	Bread is harmful to pigeons.	12060569
Musimy skończyć ten projekt przed październikiem.	We need to finish this project before October.	12061572
Czekają na swoje rachunki.	They're waiting for their checks.	12061783
Nie oddałam zadania domowego na czas.	I didn't turn in my homework on time.	12061839
Chcę kupić trąbkę.	I want to buy a trumpet.	12061871
Dzisiaj tylko grałem w gry.	All I did today was play games.	12061932
Dzisiaj tylko grałam w gry.	All I did today was play games.	12061935
Nam potrzebne są fakty, nie opinie.	We need facts, not opinions.	12062054
Dokąd chciałabyś pójść w następny weekend?	Where would you like to go next weekend?	12062062
Dokąd chciałabyś pojechać w następny weekend?	Where would you like to go next weekend?	12062063
Myślałaś kiedykolwiek o nauce pływania?	Have you ever thought about learning how to swim?	12062124
Zginęło około czterech tysięcy żołnierzy.	About four thousand soldiers were killed.	12062126
Nie we wszystkim chodzi o pieniądze.	Not everything's about money.	12062130
Jest Angielką i dorastała w Londynie podczas drugiej wojny światowej.	She’s English and grew up in London during World War II.	12062164
Przez jego palenie chorują jego dzieci.	He's making his children sick with his cigarette smoking.	12062227
Wiosną pojadą do Francji.	They'll go to France in the spring.	12063896
Jest bardzo cierpliwa, prawda?	She's really patient, isn't she?	12068967
Dziękuję ci z całego serca.	Thank you from the bottom of my heart.	12069290
Kupiłem pięć butelek wina i trzy skrzynki piwa.	I brought five bottles of wine and three cases of beer.	12069302
Czy słyszałeś głos w pokoju obok?	Did you hear a voice in the next room?	12069306
Czy uważasz, że rodzice powinni karać dzieci za kłamstwo?	Do you think parents should punish their children when they lie?	12069315
Usunął kasztany z ulicy.	He cleared the street of chestnuts.	12069347
Należy mi się wdzięczność.	I deserve to be thanked.	12069348
Nasza dzielnica ma trzy aleje.	Our neighborhood has three avenues.	12071258
To jest miska cukru.	This is a sugar bowl.	12071264
Wróciliśmy do piwnicy.	We went back down into the cellar.	12072915
Był na tyle życzliwy, aby wskazać mi drogę.	He had the kindness to show me the way.	12072927
Byłam dość spragniona i chciałam napić się czegoś chłodnego.	I was quite thirsty and wanted to drink something cool.	12072956
Myślałem, że przeczytałeś moje CV.	I thought you read my resume.	12072973
Jeszcze nie jesteś nastolatkiem, prawda?	You're not a teenager yet, are you?	12076227
Dlaczego twój pies nie nosi kagańca?	Why doesn't your dog wear a muzzle?	12077597
W Kanadzie jest duża społeczność algierska.	There is a large Algerian community in Canada.	12077612
Mróz spowodował zamarznięcie wody w rurach.	The cold froze the water in the pipes.	12077613
Uważnie obserwowała ptaka w gnieździe.	She carefully watched the bird in the nest.	12077878
Mój ojciec jest krawcem.	My father is a tailor.	12077902
Odpowiada mi moje obecne życie.	I like my life the way it is now.	12077907
Stacja benzynowa jest blisko drogerii.	The gas station is close to the drugstore.	12097160
Nasz dziadek ma dziewięćdziesiąt lat.	Our grandfather is ninety years old.	12125729
W pobliżu wsi znajduje się duże, okrągłe jezioro.	There is a large round lake near the village.	12127449
Nasz nauczyciel mówi, że fizyki potrzebuje każdy.	Our teacher says that everybody needs Physics.	12129048
Najlepiej założyć niebieską bluzkę.	It is best you put on the blue blouse.	12129300
Spis treści znajduje się na końcu książki.	The table of contents is at the end of the book.	12131955
Kuchenka jest w kuchni, na lewo od lodówki.	The stove is in the kitchen, to the left of the refrigerator.	12138308
Twarz jest zwierciadłem naszej osobowości.	The face is the mirror of our personality.	12144742
Nie mogłem go nigdzie znaleźć.	I couldn't find him anywhere.	12147268
Wielki Post zaczyna się w Środę Popielcową.	Lent begins on Ash Wednesday.	12147915
Czy potrafisz znaleźć pole tego kwadratu?	Can you find the area of this square?	12154157
Nie lubię tłumaczyć długich zdań.	I don't like to translate long sentences.	12171164
Wiele podróżował tak jak większość jego znajomych.	He traveled a great deal, as did most of his friends.	12178999
Powodzenia na sprawdzianie!	Good luck on the test!	12179017
Byłem w wojsku przez trzy lata.	I've been in the army for three years.	12179035
Nic z tego nie jest konieczne.	None of that is necessary.	12180463
Żadne z moich ubrań nie pasuje.	None of my clothes fit.	12180464
Pojemnik jest pełen.	The container is full.	12180476
Pojemnik jest pusty.	The container is empty.	12180477
Butelka zawierała wino.	The bottle contained wine.	12180478
Świeże warzywa zawierają wiele składników odżywczych.	Fresh vegetables contain many nutrients.	12180480
Chopin jest moim ulubionym kompozytorem.	Chopin is my favorite composer.	12180500
Zespół składa się z jedenastu graczy.	A team is composed of eleven players.	12180502
Większość amerykanów jest przeciwko karom cielesnym.	The majority of Americans are against corporal punishment.	12180509
Zyski korporacji w pierwszym kwartale mocno się poprawiły.	Corporate earnings in the first quarter improved sharply.	12180511
Jest na widoku.	It's in plain sight.	12180517
Straciłem swoich przyjaciół z oczu.	I lost sight of my friends.	12180524
Ten rodzaj rośliny rośnie tylko w regionach tropikalnych.	This kind of plant grows only in the tropical regions.	12182525
Nie chcę pić niczego zimnego.	I don't want to drink anything cold.	12184137
Wszystko było na wyprzedaży.	Everything was on sale.	12184230
Jest publikowane co roku.	It's published annually.	12186205
Życie nie jest długie, jest szerokie!	Life is not long, it is wide!	12186603
To, co powiedział o Anglii, jest prawdą.	What he said about England is true.	12186604
Mam brązowe włosy.	I have brown hair.	12186611
Naprawdę chciałem w to wierzyć.	I really wanted to believe that.	12187518
Spadła ze swojego konia.	She fell off her horse.	12187526
Proszę, kup mi kilka marchwi.	Please buy me a few carrots.	12188604
Kto dał ci tę kopertę?	Who gave you this envelope?	12188660
Urodziny mojego brata są dziewiątego września.	My brother's birthday is September 9th.	12188668
Został wybrany do senatu w dwa tysiące ósmym.	He was elected to the Senate in 2008.	12188669
Czy jesteś pewna, że to tutaj mamy skręcić?	Are you sure this is where we're supposed to turn?	12188752
Mam trzynaście milionów dolarów.	I have 13 million dollars.	12188795
Jest problem z silnikiem.	There's a problem with the engine.	12188809
Załóż swoje łyżwy i wjedź na lód.	Put your skates on and get on the ice.	12188845
W przeszłości bawiłam się z siostrą w parku.	In the past, I played with my sister in the park.	12188857
To skomplikowany język.	It's a complicated language.	12188879
Wyniki przyjdą za tydzień.	The results will be back in a week.	12188887
Ludzie tracą domy.	People are losing their homes.	12188889
Gdzie jest przebieralnia?	Where is the changing room?	12188918
Nie zdejmuj swojej maski.	Don't take off your mask.	12188924
Śmierć jest i końcem i początkiem.	Death is both the end and the beginning.	12188939
Wzięła głęboki oddech, żeby się uspokoić.	She took a deep breath to calm herself.	12188948
Nie potrafię nawet usmażyć omleta.	I can't even cook an omelette.	12189053
Nie potrafię nawet zrobić omleta.	I can't even cook an omelette.	12189054
Byłem w tym sklepie wcześniej.	I have been to the store before.	12189066
Jego żona też jest piękna.	His wife is beautiful, too.	12189096
Wiatrak w moim komputerze robi dużo hałasu.	My computer's fan is making a lot of noise.	12189351
Te buty są czyste i piękne.	These shoes are clean and beautiful.	12189404
Jedyną odpowiedzią była wojna.	The only answer was war.	12189447
Jeszcze o tym nie porozmawialiśmy.	We haven't talked about that yet.	12189733
Co jest pod twoim łóżkiem?	What's under your bed?	12191454
Zapomniała o swoim swetrze.	She forgot her sweater.	12191460
Dlaczego świnie są tak inteligentne?	Why are pigs so smart?	12191480
Jest człowiekiem, który nie popełnia błędów.	He's a man who doesn't make mistakes.	12193812
Pozwól mi wziąć moją torebkę.	Let me grab my bag.	12193814
Która była godzina, gdy przyszłaś?	What time was it when you got here?	12194004
Czy jestem za głośna?	Am I being too loud?	12196436
Powiedział, że Tokio jest bezpiecznym miastem.	He said that Tokyo is a safe city.	12196499
Ukradły twój portfel w pociągu.	They stole your wallet on the train.	12196504
Gdybym powiedziała lekarzowi prawdę, diagnoza byłaby trafniejsza.	If I'd told the doctor the truth, then the diagnosis would've been more accurate.	12196523
Nikt nie prosił cię o opinię!	Nobody asked your opinion!	12198123
Dyskutowali nad innymi częściami propozycji.	They debated other parts of the proposal.	12203660
Jest upartą dziewczyną.	She's an obstinate girl.	12203699
Jego urodziny są dwudziestego pierwszego sierpnia.	His birthday is August 21st.	12203731
To nie wrona, tylko kawka.	It's not a crow, but a jackdaw.	12206626
Czy cokolwiek z tego jest kradziona?	Is any of this stuff stolen?	12210251
Ten słownik nie jest mój.	This dictionary isn't mine.	12211800
Poszło dokładnie jak przewidywano.	It went exactly as expected.	12213444
Tamten złoty pierścionek należał do mojej matki.	That gold ring belonged to my mother.	12213478
Jest park za kinem.	There is a park behind the movie theater.	12225595
Spędziłam kilka tygodni w szpitalu.	I spent several weeks in hospital.	12225649
Balkon jest mały.	The balcony is small.	12225653
Nie wpuszczono mnie, bo miałam na sobie szorty.	I wasn't allowed in as I had short shorts on.	12225665
Byk jest silnym zwierzęciem.	The bull is a strong animal.	12225667
Była smutna po raz pierwszy od miesięcy.	She was sad for the first time in months.	12225674
Chcę pokój z widokiem na morze.	I want a room with a sea view.	12225688
Położył rękę na moim udzie.	He put his hand on my thigh.	12227248
Czasem etykiety są przydatne.	Sometimes, labels are useful.	12227347
Cielę urodziło się dziś rano.	The calf was born this morning.	12227350
Nie mogłam się połączyć z siecią.	I couldn't connect to the network.	12229091
To jest przymiotnik.	This is an adjective.	12229202
To jest przymiotnik, nie rzeczownik.	This is an adjective, not a noun.	12229204
Jeszcze nie zamówiłam obiadu.	I haven't ordered dinner yet.	12229213
Mam też motocykl.	I also have a motorcycle.	12229229
Jak to ugotowałaś?	How did you cook this?	12229231
Susza się skończyła.	The drought is over.	12229254
Ten program jest nadawany co dwa tygodnie.	This program is broadcast biweekly.	12229266
Natura nie zna granic.	Nature knows no boundaries.	12231274
Proszę, szanuj moje granice.	Please respect my boundaries.	12231277
Wynikiem eksperymentu była niebieska substancja.	The result of the experiment was a blue substance.	12231285
Przybywszy do domu, padłam ze zmęczenia.	On arriving home, I fell from fatigue.	12231302
Wiele obaw rodzi się ze zmęczenia i samotności.	Many fears are born of fatigue and loneliness.	12231303
Trzymajcie się mocno!	Hold steady!	12232681
Uważaj na tyły.	Watch the rear.	12232701
To jest tymczasowe.	This is temporary.	12232704
Gabinet podał się do dymisji.	The cabinet resigned.	12232746
Rada ministrów podała się do dymisji.	The cabinet resigned.	12232747
To film thriller.	It's a thriller movie.	12238554
Ta śruba złamała się.	This bolt broke.	12239912
Konkurencja jest ostra.	The competition is fierce.	12239944
Czy to prawdziwy jedwab?	Is this real silk?	12239967
Podaj mi klej.	Pass me the glue.	12239983
Podpisz te formularze.	Sign these forms.	12240069
To jest łatwy szlak?	This is an easy route.	12247465
Którym szlakiem poszedł?	Which route did he take?	12247469
Ten garnek nie ma pokrywki.	This pot has no lid.	12249069
Połóż pokrywę na garnku.	Put a lid on the pot.	12249073
Na każdy garnek jest pokrywa.	There is a lid for every pot.	12249077
Krowa straciła cielę.	The cow cast her calf.	12252032
Nasz gospodarz przyszedł na powitać.	Our host came to welcome us.	12259323
Teraz jest listopad.	It's now November.	12259371
Naród zagłosował w listopadzie.	The people voted in November.	12259372
Wybory były w listopadzie.	The election was in November.	12259373
Pobrali się w maju.	They got married in May.	12259392
W Szwajcarii wiosna przychodzi w maju.	In Switzerland, spring comes in May.	12259395
W maju będę miała szesnaście lat.	I will be sixteen in May.	12259397
Pierwszy maja jest świętem.	The first of May is a holiday.	12259401
Maj jest miesiącem matek.	The month of May is the month of mothers.	12259403
Wyjście jest także na parterze.	The exit is likewise on the ground floor.	12259413
Trzymaj się z dala od krawędzi klifu.	Stay away from the edge of the cliff.	12259418
Turysta zginął po upadku z klifu.	A tourist died after falling off a cliff.	12259428
Stary zamek stoi na szczycie klifu.	An old castle stands on top of the cliff.	12259432
Poszłyśmy wzdłuż brzegu jeziora.	We walked along the shore of the lake.	12259445
Nauczyciel rozdał ulotki.	The teacher distributed the leaflets.	12260889
To był ostatni wpis.	That was the last entry.	12260906
Bruno napisał swój ostatni wpis.	Bruno wrote his last entry.	12260907
Spotkanie ministrów finansów trwało dziewięć godzin.	The meeting of finance ministers lasted for nine hours.	12260928
Kolumny są zrobione ze zbrojonego betonu.	The columns are made of reinforced concrete.	12262382
Pokaż mi swoje dłonie.	Show me your palms.	12262395
Pozwól mi przeczytać ci z dłoni.	Let me read your palm.	12262397
Prawy brzeg rzeki jest stromy.	The right riverside is steep.	12268699
Dolina była długa i stroma.	The valley was long and steep.	12268717
Będę cię informowała na bieżąco.	I'll keep you in the loop.	12281444
Muzyka jest odtwarzana w nieskończonej pętli.	The music is being played in an endless loop.	12281447
Ile ryb możesz trzymać w swoim akwarium?	How many fish can you keep in your tank?	12281483
Ten artykuł nie przeszedł recenzji naukowej.	This article is not peer-reviewed.	12285687
Nie jest jasne, czy ten obszar był stałym osiedlem.	It's not clear if the area was a permanent settlement.	12285692
To jest napój z imbiru.	This is a ginger drink.	12285700
Imbir jest bardzo przydatny w trakcie zimy.	Ginger is very useful in the winter period.	12285703
Tamten węzeł jest luźny.	That knot's loose.	12302144
Chłopiec jest szczupły.	The boy is slim.	12302158
Jest wysoka i szczupła.	She's tall and slim.	12302163
Nie jestem tak szczupła jak moja starsza siostra.	I'm not as slim as my older sister.	12302167
Jest panem młodym.	He's the groom.	12312150
Był przygotowywany do roli kandydata na prezydenta.	He was being groomed as a presidential candidate.	12312159
Powiedziały, że są kuzynkami pana młodego.	They said they were the groom's cousins.	12312160
On ma sześćdziesiąt lat.	He is sixty years old.	12328419
W wyniku zanieczyszczenia jezioro jest pozbawione jakiejkolwiek formy życia.	As a result of pollution, the lake is without any form of life.	12329485
Gospodarka jest w złym stanie.	The economy is in bad shape.	12334706
Jego pomoc była bardzo ceniona.	His assistance was highly esteemed.	12349137
Szkoda, że nie muszę schudnąć.	It's too bad that I don't need to lose weight.	12351000
Miłość nigdy się nie marnuje.	Love is never wasted.	12351027
Po co ludzie chodzą do kina?	Why do people go to the movies?	12351038
Opinia szokuje tylko wtedy, gdy jest przekonaniem.	An opinion is shocking only if it is a conviction.	12351040
Nigdy nie próbuj umierać.	Never try to die.	12351048
Nigdy nie próbuj zginąć.	Never try to die.	12351049
Zarabianie pieniędzy to jego religia.	Making money is his religion.	12351241
Nie popełniaj tego samego błędu, co ja.	Don't make the same mistake that I made.	12359835
Czy twój dom mam podwórko?	Does your house have a yard?	12359845
Woda w strumieniu była czerwona.	The creek had red water.	12359846
Droga do wsi jest trudna.	The road to the village is difficult.	12359850
Mam gospodarstwo niedaleko stąd.	I have a farm not far from here.	12359852
Światła w kuchni się nie włączają.	The kitchen lights don't turn on.	12359853
Rozmawiałem z naszymi handlowcami.	I talked with our sales people.	12359856
Wiem, że nie lubisz baletu.	I know you don't like ballet.	12359868
Dlaczego jeszcze nie wsiadłeś?	Why haven't you boarded yet?	12359869
Dlaczego jeszcze nie wsiadłaś?	Why haven't you boarded yet?	12359870
Umiem grać na akordeonie.	I can play the accordion.	12359874
Potrafię grać na akordeonie.	I can play the accordion.	12359875
Wyszłam z przyjęcia wcześnie.	I left the party early.	12359899
Wyszedłem wcześniej z imprezy.	I left the party early.	12359902
Uciekł kiedy mnie zobaczył.	The moment he saw me he ran away.	12359919
Cierpię na zespół stresu pourazowego.	I have post-traumatic stress disorder.	12359926
To było trudniejsze, niż myślałem.	It was a lot more difficult than I thought it would be.	12360012
W poniedziałek powiedz mi, co zdecydowałeś.	Let me know your decision on Monday.	12360044
Pioruny mogą być niebezpieczne.	Lightning can be dangerous.	12360051
W domu obok nikt nie mieszka.	No one's living in the house next door.	12360055
Dbaj o zdrowie.	Stay healthy.	12360187
Europa i Azja są tym samym kontynentem.	Europe and Asia are the same continent.	12378818
Ameryka nie jest państwem, ale kontynentem.	America isn't a country, but a continent.	12378824
Każdy kontynent miał pawilon na targach.	Each continent had a pavilion at the fair.	12378826
Który kontynent jest najludniejszy na świecie?	Which is the most populated continent in the world?	12378842
Dziękuję za twoją szybką odpowiedź.	Thank you for your prompt reply.	12378944
Umyj okno wilgotną ścierką.	Clean the window with a damp cloth.	12379543
Rok śniegu jest rokiem dobrobytu.	A year of snow is a year of prosperity.	12379563
Będę żyła w dobrobycie.	I will live in prosperity.	12379565
Byłam w radzie miasta przez pięć lat.	I've been on the city council for five years.	12380931
Mnożenie jest przemienne, a dzielenie nie.	Multiplication is commutative, division is not.	12380937
Z którego działu jesteś?	What division are you from?	12380938
Właśnie przeorganizowały jej dział.	They just reorganized her division.	12380939
Jego żądza władzy nie zna granic.	His greed for power knows no bounds.	12384989
Chciwość jest jednym z grzechów śmiertelnych.	Greed is one of the seven deadly sins.	12384990
Powiedział, że do mnie zadzwoni.	He told me that he'd call me.	12386238
Gdzie ona kupiła te rzeczy?	Where did she buy these things?	12386239
Ona nie musi tego teraz robić.	She doesn't need to do that now.	12386250
To moje drugie małżeństwo.	This is my second marriage.	12406483
Uczy się rolnictwa.	He is studying agriculture.	12438394
Jest niższy od niej stopniem.	He is beneath her in rank.	12450171
Obok poczty stacyjnej jest postój dla taksówek.	There's a taxi rank beside the station post office.	12450182
Twoja ocena jest dokładna.	Your assessment is accurate.	12450185
Nie zgadzam się z tą oceną.	I don't agree with this assessment.	12450192
Skończyła się bańka na rynku nieruchomości.	The real estate bubble is over.	12450198
Mieszka na majątku rady.	He lives on a council estate.	12450199
Jestem biedna, natomiast moi bracia są bardzo bogaci.	I am poor, whereas my brothers are very rich.	12450201
Poszłyśmy do pizzerii, natomiast one poszły do kina.	We went to a pizzeria, whereas they went to the cinema.	12450203
Potknęła się o taczkę.	She stumbled over a wheelbarrow.	12450208
Mam dużą sypialnie.	I have a large bedroom.	12453608
Moja mama maluje piękne obrazy.	My mum paints beautiful paintings.	12453625
Próbowała znaleźć odpowiedniego mężczyznę.	She tried to find the right guy.	12453627
Zacząłem pracować dwadzieścia lat temu.	I started working twenty years ago.	12453635
Powiedzieli mi, że nie mogą wygrać.	They've told me that they can't win.	12453636
Co twój przyjaciel chce zrobić?	What does your friend want to do?	12453641
Algierskie miasta cały czas się rozwijają.	Algerian cities are growing all the time.	12453651
Kiedy skończyłem piętnaście lat, zacząłem częściej wychodzić.	When I turned fifteen I started going out more.	12453677
W poniedziałek mamy wyprzedaż garażową.	We're having a yard sale on Monday.	12453707
Ona nie chce iść do łóżka.	She does not want to go to bed.	12453759
Ona trójkę dzieci.	She has three kids.	12453760
Uczeń się uczy.	The student is learning.	12453769
Zaczynanie to połowa zadania.	Starting is half the task.	12453770
Z każdym dniem zdobywamy coraz większą wiedzę.	We gain more knowledge every day.	12453775
Na Ziemi jest miejsce dla każdego.	There is room for everyone on Earth.	12453783
To nie łatwo to naprawić.	This isn't easy to fix.	12453852
Wyjechała wcześnie rano.	She left early in the morning.	12453881
Jedzenie w hotelu jest bardzo dobre.	The food in this hotel is very good.	12453887
Złapałem go za nadgarstek.	I took him by the wrist.	12453899
Moi przyjaciele świętowali moje urodziny.	My friends celebrated my birthday.	12453912
Twoja pamięć jest dobra.	Your memory is fine.	12453930
On jest dla mnie bardzo miły.	He's very kind to me.	12453943
Nie dba on o swoje zdrowie.	He doesn't care about his health.	12453969
Czuje się z tym naprawdę dobrze.	I feel really good about this.	12453994
Mój dom jest na północ od miasta.	My house is north of the city.	12454001
Wyjmij czystą szklankę z szafki.	Take a clean glass from the cupboard.	12454009
Byłem motylem w moim śnie.	I was a butterfly in my dream.	12454029
Czy zapomniałeś zrobić swojej pracy domowej?	Did you forget to do your homework?	12454036
Mój laptop jest w naprawie.	My laptop is being repaired.	12454074
Tak naprawdę nigdy Cię nie lubiłem.	I never actually liked you.	12454123
Muszę kupić trochę pędzli.	I need to buy some paint brushes.	12454158
Nie wszyscy Niemcy lubią pić piwo.	Not all Germans like to drink beer.	12454197
To chyba nie jest dobry pomysł.	That's probably not a good idea.	12454222
Jakie jest twoje imię, młody mężczyzno?	What was the young man's name?	12454229
Czy masz jakiś lek na astmę?	Do you have any asthma medicine?	12454237
Po drodze widziała wiele zwierząt.	She saw many animals on the way.	12454251
Dziękuje za pomoc w naprawianiu samochodu.	Thanks for helping me fix my car.	12454408
W furgonetce znajdowały się trzy osoby.	There were three people in the van.	12454454
Na niższych piętrach jest bardzo ciemno.	The lower floors are very dark.	12454462
Jej oczy przypominają mi kota.	Her eyes remind me of a cat.	12454479
Czy chce na to patrzeć?	Does he want to look at it?	12454484
Każdy kocha zwycięzcę.	Everybody loves a winner.	12454485
Nie mam nawet garnituru.	I don't even own a suit.	12454489
Chcę z nim porozmawiać o jego przyszłości.	I want to have a talk with him about my future.	12454528
On już nie jest chłopcem.	He is no longer a boy.	12454531
Trzymaj się z daleka od tego.	Stay out of this.	12454540
Do biblioteki przyszło kilku uczniów.	Several students came to the library.	12454544
Jeżeli on jest niewinny, to jego żona jest winna.	If he is innocent, then his wife is guilty.	12454583
Ona jest bardzo miłą osobą.	She is a very nice person.	12454732
Jedna nerka, jaką mam, funkcjonuje lepiej niż dwie, które miałem.	The only kidney I have is functioning better than the two I had.	12454739
To oczywiście cukier. Ile za to zapłaciłeś?	That is obviously sugar. How much did you pay for that?	12454762
Ten post został usunięty z powodu naruszenia Regulaminu.	This post was removed for violating the Terms of Service.	12454767
Chcę wiedzieć, co jest takiego zabawnego.	I want to know what's so funny.	12454770
W naszej grupie przyjaźni są Serbowie, Chorwaci i muzułmanie.	In our friendship group there are Serbs, Croats and Muslims.	12454778
Odjechali w stronę zachodzącego słońca.	They drove off into the sunset.	12454782
Nikt tego nie wie, tylko ja.	Nobody knows it but me.	12454785
Nie byłem zaskoczony tą wiadomością.	I wasn't surprised by the news.	12455211
Zostawili swoje paszporty w domu.	They left their passports at home.	12455221
Usiądź mi na kolanie.	Sit on my lap.	12457472
Czy mogę usiąść ci na kolanach?	May I sit on your lap?	12457474
Moja matka ma czerwony fartuch.	My mother has a red apron.	12457489
Są wierni swojemu panu.	They are loyal to their master.	12461817
Co ta kupa futra robi w salonie?	What is this pile of fur doing in the living room?	12469788
Była taka skąpa; kupowała warzywa tylko wtedy, gdy były przecenione.	She was so parsimonious; she only bought vegetables if they were on sale.	12469796
Skąd ta pewność, że umarł?	How are you so sure that he's dead?	12469939
Ludzie cierpią z powodu zakażenia źródeł wody.	People are suffering from the contamination of the water supply.	12470017
Z czasem ludzie polubili jej obrazy.	People came to like her paintings.	12470022
Prześladował ludzi za ich religię.	He persecuted people for their religion.	12470025
Ufaj ludziom, ale nie bierz cukierków od obcych.	Trust people, but don't take candy from strangers.	12470026
Ufaj ludziom, ale nie bierz cukierków od nieznajomych.	Trust people, but don't take candy from strangers.	12470027
Krowy dają mleko.	Cows give milk.	12470075
Sowy są słodkie.	Owls are cute.	12470084
Poszedłeś do piwnicy?	Did you go into the basement?	12470090
Nasze jedzenie jest lepsze od ich.	Our food is better than theirs.	12470100
Czy mógłbyś mi pożyczyć trzydzieści euro?	Could you lend thirty euros to me?	12470159
Czy od poparzenia przez meduzę można umrzeć?	Do jellyfish stings kill you?	12470160
W naszym ogrodzie rósł młody bukszpan.	In our garden was a young box tree.	12470180
Sosny to zimozielone iglaki o liściach przypominających igły.	Pine trees are evergreen conifers with needle-like leaves.	12470188
Wierzby znane są ze swoich długich, rozłożystych gałęzi.	Willows are known for their long, sweeping branches.	12470191
Prześcieradło zmienia się co tydzień.	The bed linen changes every week.	12470215
Chcę kupić nowe prześcieradło.	I want to buy new bed linen.	12470223
Ten ręcznik jest wykonany z czystego lnu.	This towel is made of pure linen.	12470224
Jaki jest bezokolicznik od tego czasownika?	What's the infinitive of this verb?	12470273
Sprzedawca nie mógł rozróżnić osnowy od wątku.	The shopkeeper couldn't tell warp from weft.	12470347
Obrabowali w nocy sklep z biżuterią.	They robbed the jewelry store during the night.	12470363
Nie zjadłaś całej tej czekolady, którą kupiłam, prawda?	You didn't eat all that chocolate I bought, did you?	12470383
Mam dwa psy, trzy koty i sześć kurczaków.	I have two dogs, three cats, and six chickens.	12470399
Kierowca autobusu nie widział pieszego.	The bus driver didn't see the pedestrian.	12470404
Kierowca autobusu nie zauważył pieszego.	The bus driver didn't see the pedestrian.	12470406
Mocno przytulił swojego misia i zasnął.	He hugged his teddy bear tightly and fell asleep.	12470479
Po kamienistej plaży szło się z bólem.	The stony beach was painful to walk on.	12470499
Moja kotka ze zdumieniem spogląda na swoje odbicie w wodzie.	My cat peers bemusedly at her reflection in the water.	12470576
Wygląda jak szkło, ale w dotyku wcale go nie przypomina.	It looks like glass, but it certainly doesn't feel like it.	12470582
Zatrzymaliśmy się w urokliwym pensjonacie nad morzem.	We stayed in a quaint bed and breakfast by the sea.	12470584
Statek załadowano węglem, tarcicą i tym podobnym.	The vessel was loaded with coal, lumber, and so on.	12470599
Uszy królika są dłuższe niż lisa.	The ears of a rabbit are longer than those of a fox.	12470600
Która filiżanka jest twoja?	Which cup is yours?	12470621
Pytanie brzmi, gdzie kupić tę książkę.	The question is where to buy the book.	12470628
Pies nie widzi na jedno oko.	The dog is blind in one eye.	12470629
Nie znoszę tego zapachu.	I can't stand this smell.	12471284
Na szczycie góry stała tajemnicza postać.	On top of the mountain stood a mysterious figure.	12471287
Chodźmy się zobaczyć z kilkoma moimi przyjaciółmi.	Let's go meet some of my friends.	12476400
To ty zrobiłaś te wszystkie zdjęcia?	Did you take all these pictures?	12476418
Patrzyłyście w mojej teczce?	Did you look in my folder?	12476444
Chleb to była jedyna rzecz, którą zjadłem.	Bread was the only thing I ate.	12478523
Pokaż mi, na co cię stać.	Show me what you've got.	12478601
Urodziłam się w kosmosie.	I was born in space.	12478662
Naprawdę nie obchodzi mnie co powie.	I really don't care what he says.	12500223
Kupiłem szampon i pastę do zębów.	I bought some shampoo and toothpaste.	12502494
Kupiłam szampon i pastę do zębów.	I bought some shampoo and toothpaste.	12502496
Pies nie jest w ogródku.	The dog is not in the garden.	12502504
Ugotuj groch, a następnie odcedź go w durszlaku.	Boil the peas and then drain them in a colander.	12565120
To zdanie jest moją własnością.	I possess this sentence.	12567460
Twoja hipoteza nie trzyma się kupy.	Your hypothesis doesn't hold water.	12567469
Nie oszukuj się. On cię nie kocha.	Don't fool yourself. He doesn't love you.	12567476
Ile kosztują gruszki?	How much are the pears?	12567506
Właśnie za to mi płacą.	That's what they pay me for.	12567520
Mój syn mi nie ufa.	My son doesn't trust me.	12567523
Trzy miesiące temu miałem zawał serca.	I had a heart attack three months ago.	12567528
Nie powinieneś był go zapraszać.	You shouldn't have invited him.	12567535
Nie powinnaś była go zapraszać.	You shouldn't have invited him.	12567536
Mój ulubiony miesiąc to październik.	My favorite month is October.	12567676
Miałem wtedy osiemnaście lat.	I was eighteen then.	12567695
Akcent w tym słowie pada na drugą sylabę.	The accent of this word is on the second syllable.	12567698
Będziemy mieli bliźniaki!	We're having twins!	12569639
Podobał ci się wczorajszy wieczorny koncert?	Did you enjoy the concert last night?	12574221
Dlaczego na truskawki mówi się truskawki?	Why are strawberries called strawberries?	12586557
Mgła się podniosła.	The mist cleared.	12602371
Chłopcom podobało się, że na stole położono smażone ziemniaki.	The boys liked that fried potatoes were placed on the table.	12624876
Życie to miłość. Korzystaj z niego!	Life is love. Enjoy it!	12624880
Kot spokojnie śpi.	The cat sleeps quietly.	12674271
Obrus jest zielony.	The tablecloth is green.	12678483
Żaba to nie to samo, co ropucha.	A frog is not the same as a toad.	12678620
Widzieliśmy tego piekarza.	We saw that baker.	12679930
Wolą uczyć się języków martwych.	They prefer to study dead languages.	12680261
Chcę zobaczyć dom, w którym dorastałeś.	I want to see the house that you grew up in.	12681789
Sami chce brać udział w spektaklu.	Sami wants to be in the play.	12681796
Lubisz pić przez słomkę?	Do you like drinking through a straw?	12689770
Nie mów tak do mojej siostry.	Don't talk to my sister like that.	12689932
Możesz otworzyć mi ten słoik?	Can you open this jar for me?	12689937
Mój komputer jest podłączony do poprawnie uziemionego gniazdka.	My computer is connected to a properly grounded outlet.	12691793
Widzę światła latarek w oddali.	I see flashlights in the distance.	12691803
Ten dżem figowy jest lejący.	This fig jam is runny.	12692263
Ten dżem figowy jest rzadki.	This fig jam is runny.	12692264
Znaleźliśmy żółwia w ogrodzie.	We found a turtle in the garden.	12692406
Nie wszystko, co można przeczytać w Internecie jest prawdą.	Not everything that you read on the Internet is true.	12693845
Jej argument nie był poparty faktami.	Her argument was not built on facts.	12696321
Proszę o zwrot książki do jutra.	Please return the book by tomorrow.	12696327
Ten kwiat rozkwita wczesną wiosną.	The flower comes out in early spring.	12696330
Nie krzycz na moje dziecko.	Don't yell at my kid.	12696345
Jest już dziesięć stopni poniżej zera.	It is ten degrees below zero now.	12698403
Ostrożnie trzymał dziecko w swoich pięknych, opalonych i silnych ramionach.	He gently held the baby in his beautiful tanned strong arms.	12698601
Od kiedy mieszkasz w Szwecji?	How long have you been living in Sweden?	12700302
Która armia jest najsilniejsza na świecie?	Which is the world's most powerful army?	12710015
Pływanie jest dobrym ćwiczeniem dla całego ciała.	Swimming is good exercise for the whole body.	12710026
Proszę nie blokować drzwi państwa mieniem lub odzieżą.	Please keep your belongings and clothing clear of the doors.	12710040
Przepraszam na sekundę.	Pardon me one second.	12710266
Moja mama w końcu wróciła do domu.	My mother finally came home.	12715661
Edmundo powiedział, że słyszał jak mrówki się komunikują.	Edmundo said he heard the ants communicate.	12716095
Spróbujmy wszyscy żyć w pokoju.	Let's try to all live together peacefully.	12716125
Poczekaj na zakończenie pobierania.	Wait for the download to finish.	12716972
Co to za grzyb?	What is this mushroom?	12721019
Rośnie jak grzyby po deszczu.	It's growing like mushrooms in the rain.	12721026
Widziałem pająka w kuchni.	I saw a spider in the kitchen.	12722089
Czy to jest ryś?	Is that a lynx?	12731150
Wysłałem cię po czosnek, a ty wracasz z czekoladą?	I send you out to get garlic, and you come back with chocolate?	12755788
Po prostu chcę, żeby ktoś mnie przytulił.	I simply want to be hugged.	12777133
To nie jest mój kuzyn.	He isn't my cousin.	12781976
On nie jest moim kuzynem.	He isn't my cousin.	12781977
Żyrafy są najwyższymi zwierzętami na świecie.	Giraffes are the world's tallest animals.	12789605
To nie jest owca. To koza.	This isn't a sheep. It's a goat.	12799827
Nie udało jej się sprzedać swojej kozy.	She failed to sell her goat.	12799830
Koza jadła jej z ręki.	The goat ate from her hand.	12799872
Młodego psa nazywa się szczeniakiem.	A young dog is called a "puppy."	12818584
To proste jak zabranie dziecku cukierka.	That's like taking candy from a baby.	12819666
To jest najgorszy koszmar każdego pilota.	This is every pilot's worst nightmare.	12832180
Wszystkim tutaj należą się gratulacje.	Everyone here deserves congratulations.	12832195
Podróżowaliśmy od świtu do zmierzchu.	We were travelling from sunrise until sunset.	12832201
Proszę mu powiedzieć, żeby czekał.	Please, tell him to wait.	12832607
Kiedy jest się zakochanym, trzeba o tym powiedzieć!	When you are in love, you must say it!	12848038
Sprzedają stare dywany.	They sell old rugs.	12848040
Nie chce mi się tego czytać.	I don't want to read it.	12848041
Chcę zabrać cię na obiad.	I want to take you to lunch.	12849696
Dziecko spało spokojnie w objęciach swojej matki.	The baby was sleeping soundly in his mother's arms.	12849709
Nie mam powodów, żeby cię okłamywać.	I've got no reason to lie to you.	12860246
Ona kocha to dziecko jak swoje własne.	She loves the child as if it were her own.	12860258
Twoja dusza należy do mnie.	Your soul belongs to me.	12872102
Zdanie bez tłumaczeń jest jak kwiat oczekujący zapylenia.	An untranslated sentence is like a flower waiting for pollination.	12873514
Książka jest na stole, a ołówek leży na parapecie.	The book is on the table, and the pencil is lying on the windowsill.	12875251
Nie da się myśleć bez mózgu.	You can't think without a brain.	12877279
Ta osoba jest niska i chuda.	This person is short and thin.	12887130
Ile kosztuje ta suszarka do włosów?	How much does this hair dryer cost?	12887133
To najgorsza możliwa rzecz, która mogła się wydarzyć.	This is the worst possible thing that could've happened.	12887136
Oni byli przeciwko wszystkiemu, co chciałem zrobić.	They were against everything I wanted to do.	12887139
On chce się przymilać do szefa za awans.	He wants to cozy up to the boss for a promotion.	12887156
Żałowaliśmy wszystkiego, co napisaliśmy w tamtym liście.	We regretted everything we wrote in that letter.	12887996
Wyszliśmy z domu w środku nocy.	We left the house in the middle of the night.	12888176
Czy pracujesz w ratuszu?	Do you work at the town hall?	12888232
Daj mu też twój adres.	Give him your address too.	12888769
Ona wynajęła samochód podczas wakacji.	She rented a car during the holidays.	12888778
Słowacja należy do Słowaków.	Slovakia belongs to the Slovakians.	12888781
Spójrz na tamtą pleśń!	Look at that mold!	12888796
Próba chóru została przesunięta o tydzień.	Choir practice has been put back a week.	12889081
Ma ktoś gotówkę?	Does anyone have cash?	12889093
W metrze jest tłok.	The subway is crowded.	12889103
Gdzie jest pokrywka?	Where's the lid?	12889106
On przekupił urzędnika.	He bribed an official.	12890384
Chodźmy do wegańskiej restauracji.	Let's go to the vegan restaurant.	12890386
On zrobił to wszystko dla dzieci.	He did all this for the kids.	12904741
On uwielbiał nowe sąsiedztwo.	He loved the new neighborhood.	12904748
On musi ugotować tę wodę.	He has to boil that water.	12904756
Drzwi się nie otwierają.	The door doesn't open.	12904760
Słucham muzyki podczas biegania.	I listen to music while jogging.	12904761
On musi posprzątać ten bałagan.	He has to clean this mess up.	12904793
On nie postępował zgodnie z instrukcją.	He didn't follow the instructions.	12904797
On przeprowadził się do nowego miasteczka z nowymi możliwościami.	He moved to a new town with new opportunities.	12904801
On chce spędzić więcej czasu z dziećmi.	He wants to spend more time with the kids.	12904826
On uczył się złych nawyków.	He was picking up bad habits.	12904833
Styczeń ma trzydzieści jeden dni.	January has thirty-one days.	12904845
On nigdy nie wrócił do domu.	He's never going back home.	12904850
On chce wrócić do domu.	He wants to go back home.	12904851
On jest stale otoczony przez niebezpiecznych ludzi.	He's constantly surrounded by dangerous people.	12904880
On nigdy nie odmawia pieniędzy.	He never turns down money.	12904903
On nie opuszcza szkoły.	He isn't quitting school.	12904934
Mam nowego przyjaciela i on pochodzi z Bułgarii.	I have a new friend and he's from Bulgaria.	12904962
Czy nosisz kask podczas jazdy na rowerze?	Do you wear a helmet while cycling?	12904966
Ten młody chłopak nosi czarny szalik.	That young chap is wearing a black scarf.	12904987
Czy psy lubią miód?	Do dogs like honey?	12904989
On dzwoni dzwonkiem do drzwi dwa razy.	He rings the doorbell twice.	12905131
On zrobił dzieciom coś do jedzenia.	He made the kids something to eat.	12905135
Przedwczoraj w ogóle nie spałem.	The day before yesterday, I didn't sleep at all.	12905139
Tam zauważyłem kilka starych gazet.	There, I noticed a few old newspapers.	12905143
Oni opowiadają historię.	They're telling a story.	12905151
Sylwester widział mewę w parku.	Silvestre saw the seagull in the park.	12905163
Moja praca jest jedyną rzeczą, na której mi zależy.	My job is the only thing I care about.	12905929
Lwica odpoczywała w cieniu.	A lioness was resting in the shade.	12908433
Mój tata nie jest w domu.	My dad isn't home.	12950866
On przygotowywał się do ścięcia drzewa.	He was getting ready to chop the tree down.	12953700
Po pierwsze, on potrzebuje drzewa.	First, he needs a tree.	12953702
On wszedł do szklarni.	He got into the greenhouse.	12953724
On poszedł do tunelu.	He went into the tunnel.	12953727
On nie może zgubić tego kapelusza.	He can't lose that hat.	12953746
On odwiedził inne miasto.	He visited another town.	12953752
On szedł po chodniku.	He was walking on the sidewalk.	12953755
On nie nosi skarpetek w lecie.	He doesn't wear socks in the summer.	12953764
On próbował uciec przez okno.	He was trying to escape through the window.	12954426
On łatwo obezwładnił ochroniarzy.	He easily overpowered the security guards.	12954434
On musi zadzwonić po karetkę.	He needs to call an ambulance.	12954436
On zauważył, że wszystkie drzwi były zamknięte.	He noticed that all the doors were locked.	12954441
On zadzwoni po karetkę.	He'll call an ambulance.	12954449
On potrzebuje ciszy do pracy.	He needs quiet to work.	12954458
On próbował zadzwonić na policję.	He attempted to call the cops.	12954469
On wie to z wysoce wiarygodnych źródeł.	He knows it from highly reliable sources.	12955509
Kiedy ostatnio ją widziałem, wyglądała na zmęczoną.	When I last saw her, she looked tired.	12955519
Wypłaciłem pieniądze z banku.	I withdrew money from the bank.	12955539
Wpłaciłem pieniądze do banku.	I deposited money in the bank.	12955543
Włóż proszę tę książkę do tego pudełka.	Please put this book into that box.	12955570
On musi pożyczyć tę książkę.	He needs to borrow that book.	12955578
On nic nie podejrzewał.	He didn't suspect a thing.	12956314
On poprosił szefa o podwyżkę.	He asked the boss for a raise.	12956367
On chce nową pralkę.	He wants a new washing machine.	12956370
On nie może sobie pozwolić na zmywarkę.	He can't afford a dishwasher.	12956377
Jest trochę uwag.	There is little to remark.	12959969
Jeśli on powiedział prawdę, to utopił Ramzesa w rozpaczy.	If he told the truth, he drowned Ramses in despair.	12959973
On nie dotknął szkła.	He didn't touch the glass.	12960014
Ona wygląda na około dwadzieścia lat.	She looks to be around twenty years old.	12960320
Nie lubię gier wideo.	I don't like video games.	12960354
Dla mnie miłość jest ważnym źródłem.	To me, love is an important resource.	12960359
Brzuch mnie boli, ponieważ dużo zjadłem.	My stomach hurts because I ate a lot.	12960363
Przyjdź odwiedzić mnie jutro rano.	Come visit me tomorrow morning.	12960364
Jest trochę krwi na jego rękach.	There's some blood on his hands.	12960382
Oboje z nich byli wcześniej żonaci.	Both of them had a previous marriage.	12960390
Ona nie pływa w nocy.	She doesn't swim at night.	12960402
Wierzę, że miłość jest istotną częścią życia.	I believe love is a crucial part of life.	12960448
Wszyscy, którzy mówią o niebie nigdy tam nie pójdą.	All those who talk about heaven above will never go there.	12960454
Psy widzą wszystko w czarno-białych barwach.	Dogs see everything in black and white.	12961995
Dorsz należy do ryb chudych i mało ościstych.	Cod is a lean fish with little bones.	12963662
Śledztwo nie posunęło się nawet o krok naprzód.	The investigation hasn't progressed even one step.	12998905
Dźwięk deszczu jest dla mnie jak muzyka.	The sound of rain is music to me.	13004810
W czasie pobytu w Chinach napisał książkę.	He wrote a book while in China.	13008049
Gdzie jest impreza urodzinowa?	Where is the birthday party?	13010989
Część ludzi nigdy o tym nie słyszała.	Some people have never heard of that.	13020774
Ten problem ma wiele różnych przyczyn.	This problem has many different causes.	13020821
Internet nie działa.	The internet isn't working.	13032204
Wolę zielony rower od różowego.	I like the green bicycle more than the pink.	13034008
Ten komputer jest tak stary jak ja.	This computer is as old as me.	13034458
Wszystkie ptaki mają dzioby.	All birds have beaks.	13042139
Łatwo jest znaleźć przyjaciół; trudniej ich zachować.	It's easy to find friends; it's harder to keep them.	13045911
Złapała mnie mżawka, kiedy akurat biegałem.	I was caught in a shower while I was jogging.	13045947
A może by tak zacząć biegać?	How about taking up jogging?	13045950
Spróbuj zrzucić wagę poprzez bieganie.	Try to lose weight by jogging.	13045954
Zawsze cię chroniliśmy.	We've always protected you.	13045994
Czy na górze są dęby?	Are there oak trees on the mountain?	13058024
Ona ma siedmiu synów.	She has seven sons.	13058065
Każdej nocy słucham radia.	I listen to the radio every night.	13069305
On widział niedźwiedzia.	He saw a bear.	13069384
Ten namiot jest idealny dla dwójki ludzi.	This tent is perfect for two people.	13081655
Przepraszam, że nie okazałam ci więcej wsparcia, kiedy mnie potrzebowałeś.	I'm sorry for not being more supportive when you needed me to be.	13081752
Przepraszam, że nie okazałam ci więcej wsparcia, kiedy mnie potrzebowałaś.	I'm sorry for not being more supportive when you needed me to be.	13081754
Wiedziałem o tym już od lat.	I've known about this for years.	13081853
Wiedziałam o tym już od lat.	I've known about this for years.	13081854
Nie nosi obrączki.	He doesn't wear a ring.	13116560
Wtedy dopiero co wróciłem z Anglii.	At the time, I had just returned from England.	13116568
Otwórzmy okno i wpuśćmy trochę świeżego powietrza.	Let's open the window and let in some fresh air.	13133424
Wysłał nam wzruszający wiersz.	He sent us such a touching poem.	13133427
Nie ufała mu.	She didn't trust him.	13136624
Wyszłam za mąż osiem lat temu.	I got married eight years ago.	13206455
Nie ma etykiety z ceną.	There's no price tag.	13225397
Nie waż się do mnie zbliżać.	Don't you come near me.	13225537
Środkowy głośnik jest za głośny.	The middle loudspeaker is too loud.	13264464
Śnieg padał przez następne trzy dni.	It snowed for another three days.	13268463
No weź, chodźmy do domu.	Come on, let's go home.	13282901
Trudno jest mówić trzema językami.	It's hard to speak three languages.	13286397
Moja klawiatura nie działa dobrze.	My keyboard does not work well.	13286405
Nasza szkoła liczy około tysiąca uczniów.	Our school has about one thousand students.	13294972
Każdy wypił po pół litra wina.	Everyone drank half a litre of wine.	13296158
Ona zawsze znajduje wady u innych.	She is always finding fault with other people.	13298389
Ta piosenka wpada w ucho.	This song is catchy.	13300161
Dentysta powiedział, żebym się nie ruszała.	The dentist told me to stay still.	13300166
On drży ze strachu.	He is trembling with fear.	13309861
W kwietniu następnego roku będzie miał dziesięć lat.	He will be ten next April.	13311078
Zaciąłem się w windzie.	I'm stuck in a lift.	13321165
Jego niepełnosprawność jest teraz jego zaletą.	His handycap is his advantage now.	13335288
Chcę pojechać do miast moich przyjaciół.	I want to go to my friends' cities.	13335292
Czy Norwegia to dobry kraj do życia?	Is Norway a good country to live in?	13335316
Co poszło nie tak i dlaczego?	What went wrong and why?	13335324
Podciął gałąź, na której siedział.	He cut the branch he had been sitting on.	13335347
Jak wstałem to czułem się jak młody bóg.	I woke up feeling like a million bucks.	13335362
Tata i tak chce te śmieci.	Dad insists on all that junk.	13335370
W tej rzece jest dużo ryb.	There are a lot of fish in this river.	13335406
Nigdy jeszcze nie widziałem takiej ryby.	I've never seen this kind of fish before.	13335407
Idź i odpocznij.	Go and get some rest.	13335420
To normalni ludzie.	They're just normal people.	13335422
To ile miesięcy na to potrzeba?	How many months does it actually take to do that?	13335439
Przymierzyła tą kabylską sukienkę.	She tried the Kabyle dress on.	13335467
Projekty na zasadzie otwartego oprogramowania to przyszłość informatyki.	Open source projects are the future of computing.	13335468
Jak zrzucić trzy kilogramy w tydzień?	How can I lose three kilograms in a week?	13335487
Powodzenia z tym.	Good luck in what you are doing.	13335541
Uczniowie nie znali odpowiedzi.	The students couldn't answer.	13335594
Idź na koniec peronu.	Keep going to the end of the platform.	13335617
Wypiła swój napój.	She finished her drink.	13335686
Naszym celem jest posiadać dom przed trzydziestką.	Our goal is to own a home before we are thirty.	13335694
Jest początkujący, ale szybko się uczy.	He's a beginner, but a fast learner.	13335734
Gdzie pojechała na wakacje?	Where did she go for vacation?	13335751
Dopiero przeszedł jeden huragan, a już nadchodzi następny.	No sooner has one typhoon passed than the next one approaches.	13335997
Powinieneś jej kupić nowe zabawki.	You should buy her new toys.	13336005
Prawie umarł, po tym jak zjadł grzyby.	He nearly died after eating mushrooms.	13336006
W pokoju jest kanapa.	There is a couch in the room.	13336030
Na plaży nie ma ratownika.	There isn't a life guard at the beach.	13336032
Będziesz pracował czy odpoczywał?	Are you going to work or rest?	13336042
A co mi tam. Dawaj.	Ah, what the hell. Let's do it.	13336179
Trzymam trochę towaru na czarną godzinę.	I keep a little dope around for real emergencies.	13336235
Zwolnili tego mężczyznę w zeszłym tygodniu.	That man was fired last week.	13337048
Co ci się stało w ręce?	What happened to your hands?	13337897
Te zdjęcia wyglądają lepiej z oddali.	These pictures look better at a distance.	13337908
Te obrazki wyglądają lepiej z oddali.	These pictures look better at a distance.	13337909
W restauracji nie było wielu klientów.	There weren't many customers in the restaurant.	13337945
Może będę musiał uczyć się francuskiego.	I might need to study French.	13339606
Zmienił tor lotu piłki zagraniem piętą.	He redirected the ball with a backheel.	13339624
Nie zapomnij zapłacić dzisiaj za mieszkanie.	Don't forget to pay your rent today.	13341688
Nasza drabina złamała się na dwie części.	Our ladder is broken in two.	13341712
Pilnuje, żeby mówił prawdę.	He makes sure that he tells the truth.	13341717
Nie mogłem milczeć, po tym co mi powiedziała.	I couldn't stay silent after everything she said to me.	13342301
Co pszczoły robią w zimie?	What do bees do in winter?	13343177
Szklanka roztrzaskała się na kawałki.	The glass broke to pieces.	13343206
Nauczył go, jak się bronić.	He taught her how to defend herself.	13350282
Nie są pewni, czy są gotowi.	They're not sure that they're ready.	13350331
Tylko, że potrzebuję karton jajek.	The thing is that I need one container of eggs.	13350344
Odłóżmy tą decyzję do jutra.	Let's delay this decision until tomorrow.	13350479
Sięgnął po swoją szklankę z mlekiem.	He reached for his glass of milk.	13350495
Nie chcę stracić tej szansy.	I'd hate to waste this opportunity.	13350557
Byłem na spacerze z bratem.	I was taking a walk with my brother.	13350562
Zostawił jej pod drzwiami skrzynkę świeżych warzyw.	He left a box of fresh vegetables on her doorstep.	13350568
Też rozważałem tą możliwość.	I've also considered that possibility.	13350574
Makowiec smakuje najlepiej z filiżanką kawy.	Poppy seed cake tastes best with a cup of coffee.	13351095
Proszę, umyj dobrze sałatę przed zjedzeniem.	Please wash the lettuce well before you eat it.	13352449
Powiedzieli mi, że są emerytami.	They told me that they're retired.	13352471
Powiedzieli mi, że są na emeryturze.	They told me that they're retired.	13352475
Wieża Eiffel'a jest ze stali.	The Eiffel Tower's made of steel.	13353123
Ona powiedziała, że codziennie wychodzi na spacer.	She said she takes a walk every day.	13370353
Chciałem biec do domu.	I wanted to run home.	13371098
Nie wiedziałem, że musiałem to zrobić w poprzednim tygodniu.	I didn't know I needed to do that last week.	13372514
Wpadł mi piasek do oka.	A grain of sand fell into my eye.	13380180
Kiwi to owoc, kiwi to ptak.	Kiwi is a fruit and a bird.	13417167
Upewniła się, że zapewnił im transport.	She checked to make sure that he provided them with transportation.	13424586
Zawsze jest przestrzeń na udoskonalenia.	There's always room for improvement.	13460864
On uważa to za normalne.	He thinks that's normal.	13472097
Ludzie czczą wybory. Alfa nie wybiera. Realizuje nieuchronność.	Humans worship choices. Alpha doesn't choose. It executes inevitability.	13514519
Czy oni nie mają co robić?	Don't they have anything to do?	13542449
Ten ptak wygląda jak wróbel.	This bird looks like a sparrow.	13546979
Nie doszedłem do żadnych wniosków.	I haven't reached any conclusions.	13557319
Nikt nie jest samotną wyspą.	No man is an island.	13560547
Siostry grają w duecie skrzypiec i fortepianu.	The sisters played a duet on the violin and piano.	13560574
Twoi czytelnicy to docenią.	Your readers will appreciate it.	13561515
Babcia i dziadek usiedli przed domem.	Grandma and Grandpa sat in front of the house.	13561532
Górnicy ostatnio znaleźli potężną żyłę węgla na południu Polski.	Miners recently found a behemoth vein of coal in the south of Poland.	13576496
Nie ma jednego, właściwego sposobu na przeżywanie żałoby.	There's no right way to grieve.	13586268
Wtedy była moją najlepszą koleżanką.	She was my best friend at that time.	13592874
Gdzie, skądże, przecież ta parasolka to stary rupieć jest.	No way, nuh-uh, this umbrella's nothing but an old piece of junk.	13604517
Wiesz przecież, że mnie na to nie stać!	You know full well that I can't afford it!	13604534
Jakiej narodowości są twoi rodzice?	What is your parents' nationality?	13607069
Jakiej narodowości są pani rodzice?	What is your parents' nationality?	13607073
Jakiej narodowości są pana rodzice?	What is your parents' nationality?	13607074
Jak ma na imię prezydent Francji?	What is the name of the President of France?	13607077
Jak brzmi nazwisko prezydenta Francji?	What is the name of the President of France?	13607078
Ile wynosi pierwiastek kwadratowy z dziewięciu?	What is the square root of nine?	13607082
Jakie jest najlepsze lekarstwo na samotność?	What's the best cure for loneliness?	13607912
Co najbardziej pani lubi robić w weekendy?	What's your favorite thing to do on weekends?	13607934
Jakie panie były w wieku trzynastu lat?	What were you like when you were thirteen?	13607945
Co państwo najbardziej lubią robić?	What's your favorite thing to do?	13607984
Nie umiem przeczytać tej litery. Jest napisana w obcym języku.	I can't read this letter. It's written in a foreign language.	13616130
Trzy tysiące ludzi zginęło.	Three thousand people died.	13616135
Srebro jest dużo tańsze od złota.	Silver is much less expensive than gold.	13621690
Dziękuję za ugotowanie wody.	Thank you for boiling the water.	13627020
Zapomniałeś o Polsce.	You forgot Poland.	13627051
Oni chcą izolować Rosję.	They want to isolate Russia.	13627079
Zimy w Rosji są ciężkie.	The winters in Russia are hard.	13627089
Algieria i Rosja są strategicznymi partnerami.	Algeria and Russia are strategic partners.	13627091
On negocjuje nowe kontrakty w Rosji.	He negotiates new contracts in Russia.	13627097
Samy zadał swoje pytania.	Samy asked his questions.	13653873
Poczucie humoru przyda się w trudnych chwilach.	A sense of humour will stand you in good stead in difficult times.	13654001
Powiedziała mu do słuchu za spóźnienie.	She gave him an earful for being late.	13654010
Zrobiła mu wykład za spóźnienie.	She gave him an earful for being late.	13654011
Nie bierzcie wszystkiego za dobrą monetę.	Don't take everything at face value.	13654055
Włożyłam w to całe serce.	It's a labor of love.	13654066
Wybory już za rogiem.	Elections are just around the corner.	13654084
To nie jest wielka filozofia.	It's not exactly rocket science.	13654085
Ten stary komputer jest wolny jak żółw.	This old computer is slow as molasses.	13654145
W zeszłym tygodniu pracowaliśmy dzień i noc.	Last week we worked day and night.	13654153
W zeszłym tygodniu pracowałyśmy dzień i noc.	Last week we worked day and night.	13654154
Nie róbmy z tego wielkiej sprawy.	Let's not make a big deal out of this.	13654171
Nie róbmy z tego wielkiego halo.	Let's not make a big deal out of this.	13654172
Powiedz chłopakowi, że czas iść spać.	Tell the lad it's time he got his head down.	13654182
Komu w drogę, temu rower.	It's time to hit the road.	13654185
Gdyby babcia miała wąsy, toby była dziadkiem.	If my uncle had a fanny, he'd be my aunt.	13654187
Media będą miały używanie.	The media will have a field day.	13654193
Zawsze kiedy mnie widzi, omija mnie szerokim łukiem.	Whenever she sees me, she gives me a wide berth.	13654195
Pół światu tego kwiatu.	There are many fish in the sea.	13654200
Szewc bez butów chodzi.	The cobbler always wears the worst shoes.	13654215
Ona rzuca się w oczy.	She sticks out like a sore thumb.	13655251
On nie dorasta mu do pięt.	He's not a patch on him.	13655283
Nie chcę wprowadzać zamieszania.	I don't want to rock the boat.	13655311
On zna to miejsce jak własną kieszeń.	He knows this place like the back of his hand.	13655343
Zawsze skaczą sobie do gardeł.	They are always at each other's throats.	13655354
Nigdy nie wbiłabym ci noża w plecy.	I would never stab you in the back.	13655482
Proszę powiedz mi, że nie przekonuje cię ta szopka.	Please tell me you're not buying this dog and pony show.	13655491
Proszę powiedz mi, że nie przekonuje cię ten teatrzyk.	Please tell me you're not buying this dog and pony show.	13655492
Nie kłam mi w żywe oczy.	Don't piss on my leg and tell me it's raining.	13655509
Plotka rozniosła się po szkole lotem błyskawicy.	The gossip spread around the school like wildfire.	13655517
Od razu znalazłyśmy wspólny język.	We got on like a house on fire.	13655522
Mamy nadzieję przetrzeć nowe szlaki.	We hope to break new ground.	13655544
Bułka z masłem!	Easy peasy!	13655554
On znacznie wyprzedzał swoje czasy.	He was far ahead of his time.	13655571
Trzeba walczyć do końca.	It's not over till it's over.	13655575
Nawet najdłuższą podróż zaczyna się od pierwszego kroku.	A journey of thousand miles begins with a single step.	13655580
Co oni budują?	What are they building?	13655674
Wpuszczono cię w maliny.	You've been properly led up the garden path.	13657501
Wpuścili cię w maliny.	You've been properly led up the garden path.	13657503
Zawróciłeś mi w głowie.	You swept me off my feet.	13657519
Zawróciłaś mi w głowie.	You swept me off my feet.	13657520
Nie będę owijała w bawełnę.	I'm not going to beat around the bush.	13657534
On jest twardym zawodnikiem.	He's a tough customer.	13657563
W tamtych czasach żyliśmy z dnia na dzień.	We lived from hand to mouth in those days.	13657593
Wypił o jeden kieliszek za dużo.	He's had one too many.	13657595
Będziesz pasować jak pięść do nosa.	You'll stick out like a sore thumb.	13657599
Zdałem egzamin na piątkę.	I passed the exam with flying colors.	13657609
Zdałam egzamin na piątkę.	I passed the exam with flying colors.	13657610
Nie będę liczyć na zbyt wiele.	I'm not going to hold my breath.	13657613
W takim razie będę musiała chwycić byka za rogi.	I'll have to grasp the nettle, then.	13657623
To jest tanie jak barszcz.	It's cheap as chips.	13657626
Poniedziałek, wtorek, środa, czwartek, piątek, sobota, niedziela.	Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.	13658273
Plany wciąż są niepewne.	The plans are still up in the air.	13659430
To była tylko wisienka na torcie.	That was just icing on the cake.	13659435
To nazwisko nic mi nie mówi.	That name doesn't ring a bell.	13659459
To święta prawda.	It's the gospel truth.	13659467
To jest bułka z masłem.	This is a piece of cake.	13659506
On klnie jak szewc.	He swears like a trooper.	13659514
Zupełnie nie mam ręki do roślin.	I don't have a green thumb at all.	13659523
Czy to imię coś ci mówi?	Does that name ring a bell?	13659556
Czy to nazwisko coś ci mówi?	Does that name ring a bell?	13659557
Przez ostatnie dwa miesiące byłam bardzo zajęta.	I've been as busy as a bee for the past two months.	13661813
Bez okularów on jest ślepy jak kret.	Without his glasses, he's as blind as a bat.	13661823
Trzymajcie tak dalej.	Keep on keeping on.	13661837
Z pustego i Salomon nie naleje.	You cannot get blood out of a stone.	13661843
Dostałam to za grosze.	I got this for peanuts.	13661875
Ubicie takiego interesu jest powodem do dumy dla sprzedawcy.	Making such a large sale is a feather in the salesman's cap.	13661899
Nie mogę się połapać w tym zadaniu.	I can't make heads or tails of this assignment.	13661930
Daj komuś palec, weźmie całą rękę.	If the camel once gets his nose in the tent, his body will soon follow.	13661947
Kto stoi, ten się cofa.	Not to advance is to go back.	13661952
Głód jest najlepszą przyprawą.	Hunger is the best seasoning.	13661953
Przez żołądek do serca.	The way to a man's heart is through his stomach.	13661980
Czas nie czeka na nikogo.	Time waits for no one.	13662000
Nie stawiaj wszystkiego na jedną kartę.	Don't put all your eggs in one basket.	13662001
Nie odkładaj na jutro tego, co możesz zrobić dziś.	Don't delay today's work until tomorrow.	13662029
Dobry zwyczaj: nie pożyczaj.	Lend your money and lose your friend.	13662053
Kto się sparzył na gorącym, ten na zimne dmucha.	A burnt child dreads fire.	13662065
Tylko krowa nie zmienia zdania.	A wise man changes his mind, a fool never will.	13662096
Kto pyta, nie błądzi.	Better to ask the way than go astray.	13662120
Nie ucz ojca dzieci robić.	Don't teach your grandmother to suck eggs.	13662142
Łatwiej powiedzieć niż zrobić!	It's easier said than done!	13662145
Umyłam ręce od całej tej sprawy.	I washed my hands of the whole business.	13668198
Nie kupujcie kota w worku.	Don't buy a pig in a poke.	13669880
Musisz spać z otwartymi oczami.	You need to sleep with one eye open.	13669936
Ja to znalazłam. Znalezione nie kradzione.	I found it. Finders keepers.	13669973
Jak cię widzą, tak cię piszą.	Fine feathers make fine birds.	13669975
Czasami historia lubi się powtarzać.	Sometimes history repeats itself.	13669989
To burza w szklance wody.	It's a storm in a teacup.	13677413
Znajdź coś lepszego.	Find something better.	13679690
Nikt mu nie pomaga.	Nobody helps him.	13679697
Czyje to są klucze?	Whose keys are these?	13679709
Nikt nie lubi przegrywać.	No one likes to lose.	13679713
Pies przestał szczekać.	The dog stopped barking.	13684058
On nigdy nie kupuje nowych ubrań.	He never buys new clothes.	13684059
Ona pracuje w Belgii.	She works in Belgium.	13684060
Poproszę wegetariańskie menu.	The vegetarian menu, please.	13685918
Nikt cię nie zmusza.	No one is holding a gun to your head.	13690201
Ta kurtka musiała cię kosztować majątek.	That jacket must've cost you an arm and a leg.	13690236
Zawsze mam asa w rękawie.	I always have an ace up my sleeve.	13690258
Mam jeszcze jednego asa w rękawie.	I have another ace up my sleeve.	13690259
To nie moja działka.	That's not in my wheelhouse.	13690531
Bilety sprzedawały się jak świeże bułeczki.	The tickets sold like hot cakes.	13690541
Nie nosi się drewna do lasu.	That's like taking coals to Newcastle.	13692416
On jest Polakiem.	He's Polish.	13709470
Ona była jej jedyną córką.	She was her only daughter.	13731634
Program zaczął się instalować.	The program started installing.	13748838
Jak po maśle!	Piece of cake!	13767411
Odszedł wczoraj na lepszy świat.	He kicked the bucket yesterday.	13767482
Powiedz to bez ogródek.	What's in your mind?	13778294
Wiele filmów Disneya bazuje na baśniach braci Grimm.	A lot of Disney movies are based on the fairy tales of the Brothers Grimm.	13781625
Zacząłem oglądać rosyjskie filmy na YouTube.	I started watching Russian movies on YouTube.	13782737
Nie będę w domu w następną niedzielę.	I'll not be at home next Sunday.	13782745
Nie będę w domu w przyszłą niedzielę.	I'll not be at home next Sunday.	13782747
Złość to emocja.	Anger is an emotion.	13782806
Zazwyczaj nie pozwalasz innym zobaczyć twoich strachów.	You usually don’t let others see your fears.	13783769
Płacz nie oznacza słabości. Od urodzenia jest znakiem, że żyjesz.	Crying does not indicate that you are weak. Since birth, it has always been a sign that you are alive.	13783818
Kto nie ryzykuje ten nie pije szampana.	If you never try, you'll never know.	13784860
Co jest nie tak ze społeczeństwem?	What is wrong with society?	13784905
Nie wysyłaj mi więcej niż jedną.	Don't send me more than one.	13785842
Nie wysyłajcie mi więcej niż jednego.	Don't send me more than one.	13785845
To najlepszy prezent, jaki kiedykolwiek dostałem!	This is the best present I've ever received!	13785951
Oni ich chronią.	They protect them.	13786014
Całkowite zrozumienie sensu nauk Mistrza, zajęło mi lata.	Years have passed before I fully understood my Master's teachings.	13786122
Nic nie ma znaczenia... Nawet to zdanie.	Nothing matters... Not even this sentence.	13787357
Ogień to zabawna rzecz, prawda?	Fire is a funny thing, isn't it?	13788072
Jaka jest różnica między goframi a naleśnikami?	What is the difference between waffles and pancakes?	13788125
Wychodzisz jeszcze na zewnątrz, gdy jest mróz?	Do you still go outside when it is freezing?	13788377
Pieniądze nie zawsze dają szczęście.	Money doesn't always bring happiness.	13788528
Moi przyjaciele krwawią.	My friends are bleeding.	13788600
On pisze gdy tylko jest sam.	He writes as soon as he is alone.	13788700
Po tej imprezie niczego nie pamiętał.	After that party he didn't remember anything.	13789156
Moi rodzice chcieliby nam kupić telewizor.	My parents would like to buy a TV for us.	13789235
Jeśli chcesz chronić środowisko, nie używaj tego.	If you want to help the environment, don't use this.	13789258
Potrzebujemy większego noża, żeby pokroić tego ananasa.	We need a bigger knife to cut this pineapple.	13789267
Mogę złapać robaka do tego słoika.	I might catch a bug in this jar.	13789269
Nasza firma musi się rozwijać.	Our company must grow.	13789280
Czy ten lekarz ma cztery lata?	Is that doctor four years old?	13789318
Nie kocham cię, kocham tylko majonez.	I don't love you, I only love mayonnaise.	13789353
Mój współlokator powoli zamieniał się w wilkołaka.	My roommate was slowly turning into a werewolf.	13791088
Na torcie są truskawki.	There are strawberries on the cake.	13791096
Możliwe, że całe jego życie to kłamstwo.	It's possible that his whole life is a lie.	13796429
Zabrało mi to dużo czasu.	It took me a lot of time.	13796448
Rejsy wycieczkowe nie są zbyt przyjazne dla środowiska.	The cruise isn't really environmentally friendly.	13797426
Czy energia wiatrowa jest lepsza dla środowiska?	Is wind energy better for the environment?	13797445
Jak twoje zdrowie dzisiaj?	What is your health like today?	13797473
Gdzie kupiłeś te eleganckie buty?	Where did you buy these elegant shoes?	13798105
Zewnętrzne blizny to tylko część historii.	The external scars tell only part of the story.	13802148
Spojrzeli w górę i zobaczyli milion gwiazd.	They looked up at the sky and saw a million stars.	13802168
Ufam wszystkiemu, co jest napisane fioletowym atramentem.	I trust everything that's written in purple ink.	13802204
Kelnerka nie była zachwycona, gdy zamówił zielone jajka z szynką.	The waitress was not amused when he ordered green eggs and ham.	13802209
To może stać się problemem.	This could become a problem.	13804031
Wiedz, że napisałem ponad pięćdziesiąt powieści.	I'll have you know I've written over fifty novels.	13804054
Ile kosztuje wynajęcie żaglówki?	How much does it cost to rent a sailboat?	13804822
Te dwie linie są pod kątem prostym.	These two lines are at right angles.	13804843
Te duże domy na wzgórzu są niebieskie.	The big houses on the hill are blue.	13806364
Kradzież to przestępstwo, napad na bank to zbrodnia.	Theft is a crime, a bank heist is a serious crime.	13871904
W tej kawiarni zawsze pachnie cynamonem.	It always smells of cinnamon in this café.	13899302
Lubię słuchać radia podczas gotowania obiadu.	I like listening to the radio while making lunch.	13899313
Jest pan w moich oczach bohaterem.	You're a hero in my eyes.	13920324
Nikt nie chce wspierać mojego kraju.	Nobody wants to support my country.	13933103
W Finlandii jest wiele jezior.	In Finnland, there is a large number of lakes.	13947831
Rób tylko to, co sprawia, że jesteś szczęśliwa.	Do only what makes you happy.	14000076
W miasteczku są dwie Biedronki.	The little town has two Biedronkas.	14015959
Możesz wziąć albo duże albo małe pudło.	You may take either the big box or the small one.	14018626
Pamiętajcie, że wszyscy jesteśmy w jednej łodzi.	Remember that we are all in the same boat.	14021679
Znany błąd jest lepszy niż nieznana prawda.	A known mistake is better than an unknown truth.	14021680
Musisz skończyć tę pracę do południa.	You have to get this work finished by noon.	14021686
Las jest naturalnym środowiskiem życia wielu dzikich zwierząt.	The forest is the natural habitat of many wild animals.	14023807
Cierpliwość jest ważną cechą dobrego menedżera.	Patience is an important trait for a good manager.	14024011
Była oburzona sposobem, w jaki jej kierownik traktował pracowników.	She was outraged by the way her manager treated the employees.	14033378
Już cię ostrzegałam.	I've warned you before.	14034489`;
const EX_IDX = `a|a|3443
aby|aby|3660
adopcja|adopcja|4326
adres|adres|5124,1005,1293
adwokat|adwokat|901,261
afryka|Afryka|1792,2123
akademik|akademik|1513,837
akcent|akcent|1532,876
akceptować|akceptować|3438
akcja|akcja|4252,1365
akordeon|akordeon|4888,4887
aktor / aktorka|aktor|3008,3597,58
aktualizacja|aktualizacja|2679
akumulator|akumulator|3573
akurat|akurat|2349,2216,2107
akwarium|akwarium|4854,3857
alarm|alarm|2668
albo|albo|2242
album|album|3999,637
ale|ale|4621
aleja|aleja|4462,4697
alergia|alergia|2270,1044
aluminium|aluminium|3426,4509
ambasada|ambasada|2018,4014
ambitny|ambitny|3818
ameryka|Ameryka|2051,1720
amerykanin / amerykanka|Amerykanin|3889,4280,3896
ananas|ananas|5478,4164
angielski|angielski|787,1694
anglia|Anglia|4742,1462,761
anglik / angielka|Anglik|2,1430,595
ani|ani|2895
ankieta|ankieta|2664,2804
antarktyda|Antarktyda|1645,4375
aplikacja|aplikacja|4221,1630,3988
apteczka|apteczka|3957,3461
apteka|apteka|561,2169,1714
arbuz|arbuz|1999,393
architekt|architekt|442
architektura|architektura|2246,3361
arcydzieło|arcydzieło|141
aresztować|aresztować|2189,372
argument|argument|2033,5072
armia|armia|5079,834
artykuł|artykuł|2180,1023,1401
artysta|artysta|391,1890
astma|astma|2212,4960
asystent|asystent|2447,2295
atak|atak|2212,166
atrakcyjny|atrakcyjny|1790,2564
audycja|audycja|3982
australia|Australia|4007,2563
austria|Austria|4084,4629,2583
auto|auto|1824,2547
autobus|autobus|2860,1374,2431
autor|autor|2422,562
autostrada|autostrada|3706,1030,388
awans|awans|1236,577,5120
awansować|awansować|2950
awaria|awaria|3658
azja|Azja|3108,4898
babcia|babcia|5320,708,3227
badanie|badanie|430,2299,1295
badać|badać|4356,368
bagaż|bagaż|177,2440,1152
bagażnik|bagażnik|4366,3020
bagno|bagno|1384,1385
bajka|bajka|2606,4313
bakteria|bakteria|4588
bakłażan|bakłażan|1021,39
balet|balet|4884
balkon|balkon|2251,1343,4791
banan|banan|4573,2026,2580
bank|bank|3696,5181,2185
bankomat|bankomat|2591,1242
bardzo|bardzo|4947
barman|barman|3415
barszcz|barszcz|5395,4362
barwa|barwa|5201,3966
basen|basen|2423,3280,4656
bateria|bateria|4392,2291,1176
bawełna|bawełna|327,5386
bałagan|bałagan|5139,1052
baśń|baśń|3217,5454
belgia|Belgia|5439,996
belgrad|Belgrad|2938
benzyna|benzyna|209,2940
beton|beton|3624,4847
bez|bez|822
bezokolicznik|bezokolicznik|5008
bezpieczeństwo|bezpieczeństwo|1112,2533
bezpieczny|bezpieczny|2913,2791,4777
bezpłatny|bezpłatny|4215,3885
bezrobotny|bezrobotny|1014,3036,3035
białoruś|Białoruś|976
biały|biały|3547,2685,1490
biblioteka|biblioteka|2090,2499,2496
biec|biec|1973,5306
bieda|bieda|1059,411
biedny|biedny|1859,4572
biedronka|biedronka|3075,5507
bieganie|bieganie|5138
biegać|biegać|1699,825,5215
bielizna|bielizna|1423
bilet|bilet|3062,2165,3503
biodro|biodro|870,4369
biografia|biografia|2365,1584
biologia|biologia|392,2709,3345
biurko|biurko|333,2225,111
biuro|biuro|3207,2736,2448
biustonosz|biustonosz|4289
biznesmen|biznesmen|1701,780
bić|bić|3450,3295
biżuteria|biżuteria|808,5010
blacha|blacha|657
blady|blady|604,1906
blender|blender|1153
bliski|bliski|344,2052
blisko|blisko|3160,2491
blizna|blizna|5491,4246
bliźniaki|bliźniaki|5050
blok|blok|888
blondyn / blondynka|blondyn|457,986
bluza|bluza|3346
bluzka|bluzka|2850,4714
bo|bo|2692
bocian|bocian|4063,1388,4062
bogactwo|bogactwo|3554,479
bogaty|bogaty|4320,3340
bohater|bohater|3715,5503
boisko|boisko|3854
boleć|boleć|5194,1170
borsuk|borsuk|3241,3963
brak|brak|626,850
brakować|brakować|2837,3204
brama|brama|1955,1878
bramka|bramka|1151
bransoletka|bransoletka|2268
brat|brat|3748,2734,2319
brawo!|Brawo|3843
brazylia|Brazylia|2489,3085
brać|brać|351,703,605
brać / wziąć|brać|351,703,605
brew|brew|3724
broda|broda|2602,3023,3029
brokuł|brokuł|4568,1007
bronić|bronić|5291
brudny|brudny|4545,4544,3519
brunet / brunetka|brunet|986
brzeg|brzeg|4842,4665,4850
brzmieć|brzmieć|5023,4519,2318
brzoskwinia|brzoskwinia|2972,190
brzoza|brzoza|1389,2426
brzuch|brzuch|631,3895,5194
brzydki|brzydki|243,2781,1065
brązowy|brązowy|2060,1113,4743
buda|buda|902,3365
budować / zbudować|budować|140,5381,885
budynek|budynek|3575,1787,2610
budzik|budzik|3742,1802
budzić|budzić|1254,2266
budżet|budżet|1744
burak|burak|3306,3305
burza|burza|5432,817,3232
butelka|butelka|3214,2113,67
buty|buty|4767
bułgaria|Bułgaria|2931,5150,2932
bułka|bułka|5401,418,5377
byk|byk|5394,4793
być|być|5255,5021
bóg|Bóg|5253,4190
ból|ból|3648,5016,1435
błyskawica|błyskawica|5374,3040
błąd|błąd|900,1481,1436
błądzić|błądzić|1018,5423
całkiem|całkiem|3111
całkowicie|całkowicie|3230
całować|całować|3754,3245,3244
całość|całość|1476,449
cały / cała / całe|cały|5426,4292,525
cebula|cebula|1680,1681,1194
cecha|cecha|5513,208
cegła|cegła|1557,1929
cel|cel|206,3043,280
cena|cena|2222,1742,2317
cenić|cenić|2738,4869
centrum|centrum|3207
centymetr|centymetr|2486,383
cerkiew|cerkiew|3863
charakter|charakter|2071,1794,2655
chcieć|chcieć|5476,5254,4683
chcę|chcę|5249
chemia|chemia|1773,455
chiny|Chiny|1602,5205
chipsy|chipsy|4088,3588
chirurg|chirurg|4113
chleb|chleb|2691,999,1273
chlew|chlew|1733
chmura|chmura|481,298,795
chociaż|chociaż|1875
chodnik|chodnik|5169,3453
chodzić|chodzić|4872,4686,3366
chomik|chomik|1141
choroba|choroba|1171,2813,2899
chorować|chorować|1035,4688
chorwacja|Chorwacja|1452
chorwat|Chorwat|4979
chory / chora|chory|3983,3821,3716
chować|chować|4512,2057
choć|choć|3998,2630
chrapać|chrapać|448
chronić|chronić|2373,5466,5217
chrzestny|chrzestny|1715,1716
chudy|chudy|5116,5202
chusteczka|chusteczka|472,80
chwalić|chwalić|953,2611
chwast|chwast|806
chwila|chwila|3322,186,2456
chyba|chyba|4958
chór|chór|5128,4382
chętnie!|Chętnie|4513
chłodny|chłodny|1119,89
chłopak|chłopak|5358,3607,3404
chłopiec|chłopiec|1789,4970,3890
chłód|chłód|3114
ciasny|ciasny|3185,3897
ciastko|ciastko|1510,3593,1478
ciasto|ciasto|2125,2343
ciało|ciało|3358,755
cicho|cicho|2615,1937
cichy|cichy|3992,1923,578
ciekawość|ciekawość|3612,2527
ciekawszy|ciekawszy|1930,3786,1559
ciekawy|ciekawy|2575,928,2732
cielę|cielę|4798,4828
ciemno|ciemno|4964
cienki|cienki|2900,3243
ciepło|ciepło|2845,2460
ciepły|ciepły|3968,519
cierpieć|cierpieć|1044,4991
cierpliwość|cierpliwość|3502,1761
cierpliwy|cierpliwy|4690,4488,4119
cień|cień|4151,2322
ciocia|ciocia|1650,4570,2148
cisza|cisza|5176,3232
ciąć|ciąć|560,1566
ciąża|ciąża|2524,3770
ciężarówka|ciężarówka|2923,1012
ciężki / lekki|ciężki|1529,5342,4121
ciśnienie|ciśnienie|3589,2087,1307
cmentarz|cmentarz|4395,1560
codziennie|codziennie|4423
codzienny|codzienny|20,2178
cofać|cofać|5414
coraz|coraz|408
cotygodniowy|cotygodniowy|4442
coś|coś|5405,3500,2714
cudowny|cudowny|598,3469
cudzoziemiec / cudzoziemka|cudzoziemiec|506,1685
cukier|cukier|2919,325,64
cukierek|cukierek|5100,3088,2749
cukiernia|cukiernia|384
cukinia|cukinia|3785
cv|CV|4702,3356
cyfra|cyfra|1614
cynamon|cynamon|5501
cyrk|cyrk|1466,3304
cytować|cytować|590,580
cytryna|cytryna|2186,1730
czajnik|czajnik|1938,1849,4528
czapka|czapka|4258,3042,375
czapla|czapla|4065,4064
czarny|czarny|4500,2685,1997
czas|czas|5358,4198,3436
czasopismo|czasopismo|3242,3830,3707
czasownik|czasownik|1039,5008
czekać|czekać|4182,5417,5104
czekolada|czekolada|2377,1056,5011
czerwiec|czerwiec|617
czerwony|czerwony|4034,3231,1053
czeski|czeski|2926,980
cześć|cześć|3148,2397
czosnek|czosnek|971,5091
czoło|czoło|3838,2302
czterdzieści|czterdzieści|2269,2221
czternaście|czternaście|1117,2211,1279
cztery|cztery|1443,750
czuć|czuć|4949,2960,2791
czwartek|czwartek|2696,2695,5396
czy|czy|5405
czyj|czyj|5435,3530
czyli|czyli|162,398
czynsz|czynsz|2876,225
czysty|czysty|4767,3980,3926
czytanie|czytanie|4122,3722,1267
czytać|czytać|5107,2360,441
czytać / przeczytać|czytać|5107,2360,441
czytelnia|czytelnia|2500
czytelnik|czytelnik|310,5319
czyścić|czyścić|3375
często|często|4419
częstować|częstować|1015,3842
część|część|5207,2876,3950
człowiek|człowiek|2360,3563,3479
człowiek / ludzie|człowiek|2360,3563,3479
córka|córka|4455,2002,5449
cło|cło|1355
dach|dach|1850,364
daleki|daleki|4971,3428
daleko|daleko|3364,3806
dania|Dania|1756,4139
danie|danie|1089
darmowy|darmowy|3096,4336
data|data|3850,29
dawać|dawać|3752,5472,5276
dawać / dać|dawać|3752,5472,5276
dawno|dawno|2423,2280
dawny|dawny|2114,1108
dać|dać|3291,2919,2265
dbać|dbać|4948,4897
decydować / zdecydować|decydować|1827,1008,1300
decyzja|decyzja|1236,4567,5294
dekada|dekada|4305,4304
deklaracja|deklaracja|2073,237
delfin|delfin|1678
demokracja|demokracja|1073
dentysta / dentystka|dentysta|1620,485,1798
depresja|depresja|3018
deser|deser|249,4329,3972
deszcz|deszcz|3487,794,2562
deszczowy|deszczowy|3058,1167
diagnoza|diagnoza|4779
dialekt|dialekt|834
dieta|dieta|2041,2435,4505
dla|dla|5193
dlaczego?|dlaczego|5251
dlatego|dlatego|3558
dmuchać|dmuchać|2245,5421
do|do|5403
doba|doba|3252
dobranoc!|Dobranoc|3662
dobrobyt|dobrobyt|4904,4905
dobry|dobry|4958,4943,4331
dobrze|dobrze|4949
dochód|dochód|2893,233
dodawać|dodawać|4547,1275
dodać|dodać|3550,1736,1809
dojechać / dojeżdżać|dojechać|244,3339,3386
dojść / dochodzić|dojść|3466,1104,3583
dokoła|dokoła|734,1274
doktorat|doktorat|599,596
dokument|dokument|2437,1865,552
dokąd?|Dokąd|4683
dokładać|dokładać|3363
dokładnie|dokładnie|3566
dokładność|dokładność|3637
dokładny|dokładny|4919,1261
dolina|dolina|4851,4163,801
dom|dom|5320,5162,5061
domowy|domowy|4953,4677
dopiero|dopiero|5228
dopóki|dopóki|2574
dorastać|dorastać|5061,4330,5366
dorosły|dorosły|2775,1535,1682
dorosły / dorośli|dorosły|2775,1535,1682
dorsz|dorsz|5202
doskonały|doskonały|4115,4249
dostawać / dostać|dostawać|275,2315,2743
dostosowywać|dostosowywać|342,1354
dostępny|dostępny|3793,1796
dotyk|dotyk|856,277
dotykać|dotykać|1965,361
dowód|dowód|3497,1613
doświadczać|doświadczać|2200
doświadczenie|doświadczenie|351,323,978
dość|dość|4475
drabina|drabina|5286,236
drewno|drewno|5447,1133
droga|droga|3956,5359,4186
drogeria|drogeria|4710
drogi|drogi|2995,3011,1598
droższy|droższy|3267,3763,1154
drugi|drugi|3118,1038,3542
drukarka|drukarka|1403
drużyna|drużyna|1751,3626
drzewo|drzewo|5164,3923,3398
drzwi|drzwi|3924,1870,1209
dręczyć|dręczyć|3673,1869
drżeć|drżeć|5245,81
duma|duma|678,1009
dumny|dumny|3939,3671
durszlak|durszlak|5037
dusza|dusza|3709,5112
duszno|duszno|2609,1313
dużo|dużo|5389
duży|duży|4422,4030,5499
dwa|dwa|4353,365,3906
dwadzieścia|dwadzieścia|4929,3984
dwanaście|dwanaście|645,4402
dwieście|dwieście|512,100,2404
dworzec|dworzec|2959,1281,1952
dwujęzyczny|dwujęzyczny|2273,1454
dym|dym|217,4564
dynia|dynia|1160
dyplom|dyplom|3848
dyplomata|dyplomata|1701,433
dyrektor|dyrektor|454,3162,594
dysk|dysk|4530
dyskutować|dyskutować|4781,763
dywan|dywan|3291,1920,5106
dziadek|dziadek|5320,4392,1490
dział|dział|798,4909,4908
działać|działać|3603,685,1990
działka|działka|5445,463
dzieciństwo|dzieciństwo|897,960
dziecko|dziecko|5100,4455,5142
dziecko / dzieci|dziecko|5100,4455,5142
dzielić|dzielić|2118,3044
dzielnica|dzielnica|516,143,216
dziennik|dziennik|3799,257
dziennikarz / dziennikarka|dziennikarz|4495,4140,3253
dziesięć|dziesięć|3560,2959
dziewczyna|dziewczyna|3245,2176,197
dziewczynka|dziewczynka|529,2786,2690
dziewięć|dziewięć|4285,5331
dziewięćdziesiąt|dziewięćdziesiąt|4578,4711,3536
dzieło|dzieło|1020,1738
dzień|dzień|3917,3870,3592
dzisiaj|dzisiaj|5285
dziwny|dziwny|701,3054,2390
dziób|dziób|5212
dzięki|dzięki|3148
dziękować|dziękować|4962,2375,2020
dziękuję|dziękuję|4902
dziś|dziś|2058
dzwonek|dzwonek|5154,4552,2312
dzwonić|dzwonić|2450,5154,3959
dzwonić / zadzwonić|dzwonić|2450,5154,3959
dąb|dąb|5218,3866,3040
dłoń|dłoń|4849,4848
dług|dług|1212
długi / krótki|długi|4741,3163,133
długo|długo|2467
długopis|długopis|4671,193
długość|długość|3640,3173
dłuższy|dłuższy|5021,3778,2523
dźwięk|dźwięk|5204,3618
dżem|dżem|4556,5069,5068
dżinsy|dżinsy|1515,958,4017
edukacja|edukacja|536,1601
egipt|Egipt|1427,2484
ekologiczny|ekologiczny|2155
ekonomia|ekonomia|612,1376
ekonomista|ekonomista|763
ekran|ekran|4516
eksperyment|eksperyment|4809,2504
eksport|eksport|675
elegancki|elegancki|5490,3293
elegancko|elegancko|1894
elektrownia|elektrownia|2278,2937
elektryk|elektryk|4085
emeryt / emerytka|emeryt|5302
emerytura|emerytura|5303,3496
emocja|emocja|1896,5458
encyklopedia|encyklopedia|1632,464
energia|energia|5488,2247
energiczny|energiczny|2056
epoka|epoka|4412
etat|etat|3488,3470
etykieta|etykieta|5233,4797
euro|euro|5000
europa|Europa|2836,4211,4148
europejski|europejski|2625,2708
ewakuacja|ewakuacja|4154
fabryka|fabryka|1434,2305,3193
fabuła|fabuła|288
fakt|fakt|4681,1711,2012
fala|fala|3526,3955
farba|farba|1700,4386
farmaceuta|farmaceuta|998
fartuch|fartuch|4024,4986
fasola|fasola|4108,4107
fatalny|fatalny|1100,4470
fałszywy|fałszywy|3371
festiwal|festiwal|4159,4657,4546
filiżanka|filiżanka|355,5022,1474
film|film|4566,4325,4003
filozofia|filozofia|5352
finlandia|Finlandia|5505,2935
fioletowy|fioletowy|387,5493
firanka|firanka|4622
firma|firma|3200,2094,2595
fizyka|fizyka|4235,269,4713
flaming|flaming|2865
flet|flet|1586,1127
fontanna|fontanna|3561,4426
formalny|formalny|981
formularz|formularz|858,4822,3131
fortepian|fortepian|490,5318
fotel|fotel|3824,3534,3377
fotograf|fotograf|3812,2488
fotografia|fotografia|1070,3309,1626
francja|Francja|4689,4623,132
francuski|francuski|5283,1933
francuz|Francuz|1245,961
frytki|frytki|4089,2281,1292
fryzjer|fryzjer|2889,3432,2640
furgonetka|furgonetka|4963
futro|futro|4988,1862
gabinet|gabinet|3987,4815
gadać|gadać|1094,3663
galaretka|galaretka|3396,3393
galeria|galeria|469,4226
garaż|garaż|3146,4132,2797
gardło|gardło|1652,2412,4595
garnek|garnek|3431,4827,4826
garnitur|garnitur|540,4968
gasić|gasić|122
gatunek|gatunek|1697,3712
gaz|gaz|2477,2351
gazeta|gazeta|2371,1842,5157
gałąź|gałąź|2707,5252
gaśnica|gaśnica|2633,2632
gdy|gdy|2417
gdyby|gdyby|3087
gdybym|gdybym|3779
gdzie?|Gdzie|5023
gdziekolwiek|gdziekolwiek|646
gdzieś|gdzieś|3355
geografia|geografia|600,1222,4383
gepard|gepard|3170
giełda|giełda|319
ginąć|ginąć|2293,1520
gitara|gitara|649,2470
gniazdko|gniazdko|3667,5066,3564
gniazdo|gniazdo|407,4707
gniew|gniew|379
gnić|gnić|4380
godzina|godzina|2188,926,4775
gol|gol|429,3463
gonić|gonić|420,2021
gorszy|gorszy|3397,3265,2378
goryl|goryl|4635
gorzki|gorzki|1594,747
gorąco|gorąco|820,2572
gorący|gorący|355,3336,1232
gorączka|gorączka|406,2412,1377
gospodarka|gospodarka|4868,218
gospodarstwo|gospodarstwo|1217,4881
gospodarz|gospodarz|4829
gotowanie|gotowanie|495,756,5502
gotować|gotować|4238,1849,3262
gotowy|gotowy|3708,3462,1136
gotówka|gotówka|3759,5129,4451
gołąb|gołąb|1438,4674
gość|gość|159,3562
gra|gra|2641,4680,4218
gram|gram|3468,1082
gramatyka|gramatyka|2684,1493
granica|granica|1740,647,2913
gratulacje!|Gratulacje|5102,883
grać|grać|874,4680,4679
grecja|Grecja|2836,944,4483
grejpfrut|grejpfrut|676,4261
grek|Grek|4466,459
grill|grill|3411,3429
grillować|grillować|3430,2964
gromadzić|gromadzić|3781,3782
grosz|grosz|5410,2184,354
groszek|groszek|1174
grozić|grozić|3512,1785
gruby|gruby|3787,2748,550
grudzień|grudzień|484,337,3003
gruszka|gruszka|5041,2567
grypa|grypa|3074,1904,549
gryźć|gryźć|1265,1067
grzebień|grzebień|4168,3794
grzech|grzech|1157,4911
grzmot|grzmot|1617,3549
grzyb|grzyb|5272,5087,3836
gubić / zgubić|gubić|977,1477
guma|guma|2962
gumka|gumka|1178,1182
guzik|guzik|4627,3995
gwarancja|gwarancja|3604,1959,1457
gwiazda|gwiazda|811,5492
gwizdać|gwizdać|4562,1848
gwóźdź|gwóźdź|2648,4018
góra|góra|5218,284,1571
góra / góry|góra|5218,284,1571
górnik|górnik|5321
górny|górny|1706
górski|górski|340
gąbka|gąbka|4078,4077
gąsienica|gąsienica|3311
gęś|gęś|4349,3655
gładki|gładki|1574,1573
głaskać|głaskać|4430
głodny|głodny|3985,2692,2531
głos|głos|4693,2315
głosować|głosować|2036,957
głowa|głowa|4471,3189,4254
głośnik|głośnik|4068,5235
głośno|głośno|2324,557
głośny|głośny|4658,1616,4776
głupi|głupi|3059,2614,1976
głód|głód|1352,412
główny|główny|719,924
głęboki|głęboki|4244,191
głębokość|głębokość|3173,4129
halo?|Halo|4565,5357,10
hamować|hamować|2202
hamulec|hamulec|772,1879
handel|handel|224,2207
handlowiec|handlowiec|4883
hasło|hasło|4004,2159,1347
hałas|hałas|2802,3337
hej|hej|3796
herbata|herbata|2919,4421,1672
hipopotam|hipopotam|4503
hipoteka|hipoteka|1029
hipoteza|hipoteza|5039,681
historia|historia|1465,4521,53
hiszpan|Hiszpan|1379,348
hiszpania|Hiszpania|2835,2826
hiszpański|hiszpański|3345,3598
hobby|hobby|4015
hodować|hodować|576,4480
hojny|hojny|2208,2233
holandia|Holandia|1253,69
horror|horror|684,624,1358
hotel|hotel|4943,121,4106
humor|humor|2072,5346
huragan|huragan|5270
huśtawka|huśtawka|2662
i|i|5320
idea|idea|609,3440
idealny|idealny|3101,5222
idiom|idiom|3070
ignorować|ignorować|1762,662
igła|igła|3031,797
ile?|Ile|3045
ilość|ilość|3717,4035
imbir|imbir|4857,4858
imigrant|imigrant|3765,1611
imię|imię|5404,3154,1252
import|import|812,675
impreza|impreza|5475,2314,4890
indie|Indie|1230,2047
indyk|indyk|2517,4559
infekcja|infekcja|2515
inflacja|inflacja|1985,4590
informacja|informacja|940,4359,3242
informować|informować|4852,240
inny|inny|4471,3034,2309
instalować|instalować|5450
instrukcja|instrukcja|5140,3121
instrument|instrument|4491,2867
inteligencja|inteligencja|2958,1311
inteligentny|inteligentny|927,744
interesujący|interesujący|4192,3636
internet|Internet|4219,5209,5071
inwestycja|inwestycja|3107
inżynier|inżynier|946,667,71
irlandia|Irlandia|3044
irytować|irytować|535,2445
istotny|istotny|5199,910
iść|iść|5358,2596,1814
ja|ja|5193,4981
jabłko|jabłko|2652,1380,42
jabłoń|jabłoń|1854,3237
jadalnia|jadalnia|3533,2034
jagody|jagody|2956
jajecznica|jajecznica|731
jajko|jajko|4423,1729,2774
jakby|jakby|335
jaki|jaki|5465,4959
jakość|jakość|4432,15
japonia|Japonia|1795,1462
jaskinia|jaskinia|2271,444
jaskrawy|jaskrawy|3421
jaskółka|jaskółka|3853
jasno|jasno|2328,715
jasny / ciemny|jasny|4626,2818,1901
jaszczurka|jaszczurka|4373
jechać|jechać|255,1208,86
jeden|jeden|5463,5389,270
jeden / jedna / jedno|jeden|5463,5389,270
jedenaście|jedenaście|2166,1895,4732
jednak|jednak|303
jedwab|jedwab|4820,683
jedynak / jedynaczka|jedynak|1050
jedynie|jedynie|3083
jedynka|jedynka|1826
jedyny|jedyny|2195,5449,5030
jedzenie|jedzenie|5155,37
jeleń|jeleń|3053
jesienny|jesienny|183,3169
jesień|jesień|4454,405,1772
jeszcze|jeszcze|4518
jezioro|jezioro|4580,4842,679
jeśli|jeśli|4319
jeśli / jeżeli|jeśli|4319
jeść / zjeść|jeść|4422,2895,2067
jeździć|jeździć|4308,2970,2090
jeż|jeż|3388
joga|joga|3277
jogurt|jogurt|4047,1782
judo|judo|4417,386
jutro|jutro|5073,5195,4021
już|już|5226
język|język|3928,5238,4449
kabel|kabel|3647,4372
kaczka|kaczka|4571
kaganiec|kaganiec|4704
kajak|kajak|2252
kaktus|kaktus|2827
kalafior|kalafior|4043
kalendarz|kalendarz|2008,2064,2728
kaloryfer|kaloryfer|1344
kamera|kamera|4008,3540
kamień|kamień|1043,1373
kamizelka|kamizelka|4212
kampania|kampania|3157
kanada|Kanada|1866,3978
kanapa|kanapa|2334,5273,2556
kanapka|kanapka|4207,4206,1624
kanał|kanał|2898,2382,4493
kandydat|kandydat|2315,4864,2482
kangur|kangur|2699,2698
kapelusz|kapelusz|5167,765
kapusta|kapusta|4041,4039
kara|kara|3390,1093,4733
karać|karać|4551,4694
karetka|karetka|5173,5175,4589
kark|kark|3057
karma|karma|3093,1563
karmić|karmić|2694,972
karta|karta|2352,2276,4166
kartka|kartka|1721,1322,4334
karton|karton|5293
kasa|kasa|1302,783,3651
kasjer|kasjer|4602
kask|kask|2525,5151
kaszel|kaszel|951,2796,1719
kaszleć|kaszleć|1060
kasztan|kasztan|4695
katar|katar|1653,1045,1392
katedra|katedra|3342
kawa|kawa|4067,2788,1996
kawałek|kawałek|4268,1830,5290
kawiarnia|kawiarnia|3949,3266,352
każdy|każdy|5241,4136,4056
kciuk|kciuk|2061,4378
kelner / kelnerka|kelner|2988,2987,1339
ketchup|ketchup|4583
kibic|kibic|4241,1329
kichać|kichać|4357
kiedy|kiedy|3833
kiedykolwiek|kiedykolwiek|2067
kiedyś|kiedyś|3992
kieliszek|kieliszek|5389,3264,4560
kierować|kierować|4233
kierowca|kierowca|4331,2825,5014
kierownica|kierownica|840,2363
kierownik / kierowniczka|kierownik|1675,1690,5514
kierunek|kierunek|3331,1446,1665
kieszeń|kieszeń|5368,3201
kiełbasa|kiełbasa|1331
kilka|kilka|3870,5027,4972
kilkoro|kilkoro|161,4140,2711
kilo|kilo|2054,3153,2884
kilogram|kilogram|5262,4224
kilometr|kilometr|2720,3686
kino|kino|4872,4026,4789
kiosk|kiosk|784,1499
kiwi|kiwi|5309
klamka|klamka|4520,553
klasówka|klasówka|3569
klatka|klatka|3172,3399
klawiatura|klawiatura|5239,4416
klej|klej|3514,4821
klient / klientka|klient|4391,3590,5282
klimat|klimat|52,3049
klimatyzacja|klimatyzacja|2096,2498
klon|klon|3908,3907
klucz|klucz|3491,2341,2789
koala|koala|4084
kobieta|kobieta|3350,3290,4351
koc|koc|3317,749
kochać|kochać|3705,2839,2612
kogut|kogut|3082,3229
kojarzyć|kojarzyć|3674
kolacja|kolacja|1062,3723,791
kolano|kolano|4984,4985
kolczyki|kolczyki|2905
kolega|kolega|4126,168
kolejka|kolejka|4340,3619,445
kolejność|kolejność|4654,1815
kolekcja|kolekcja|4309,3518
koleżanka|koleżanka|5323,3078
kolor|kolor|2254,3
kolorowy|kolorowy|3180,3191,3177
komar|komar|4649,380
komedia|komedia|3611
komentarz|komentarz|2385,2425,3676
kominek|kominek|1350
kompas|kompas|483
kompozytor|kompozytor|4731,606,1627
kompromis|kompromis|4574,2814
komputer|komputer|2222,5211,4278
komu?|Komu|5359
komórka|komórka|2808,3358,1494
koncert|koncert|1249,3158,3868
konduktor|konduktor|3062
konflikt|konflikt|1103,1464
koniec|koniec|3367,5379,5265
konieczny|konieczny|4725
konkurencja|konkurencja|4819,223
konkurs|konkurs|2059,2706,2705
konstytucja|konstytucja|338
kontakt|kontakt|3804,2766
konto|konto|3285,2793,688
kontrolować|kontrolować|2794,1126
kontynent|kontynent|4901,4899
kontynuować|kontynuować|3052,2643
kopać|kopać|2084,886
koperta|koperta|4747,954,271
kopia|kopia|1223,2469
kopiować|kopiować|1936,359
kopyto|kopyto|2769,1142
kora|kora|2426
korek|korek|809,1578,2621
korkociąg|korkociąg|1450
korytarz|korytarz|2400,2187
korzeń|korzeń|3222,848
korzystać|korzystać|5055,2644
kosmos|kosmos|1207,5032
kostium|kostium|723
kostka|kostka|250,2037
koszt|koszt|4157,3927
kosztować|kosztować|4053,4033,3208
koszula|koszula|1218,2994,4260
koszulka|koszulka|2230,92
koszyk|koszyk|1729,107,2855
koszykówka|koszykówka|622,494
kot|kot|4575,4203,4965
kotek|kotek|1649,2238
koza|koza|5098,5097
kołdra|kołdra|3318,3316
kołnierz|kołnierz|4542
koło|koło|1284,2249,3523
koń|koń|4308,3338,2685
kończyć / skończyć|kończyć|1443,3931,2969
końcówka|końcówka|532,39
kościół|kościół|4101,3315,1687
kość|kość|2062
krab|krab|2999
kradzież|kradzież|3874,1399
kraj|kraj|525,1603,2929
krajobraz|krajobraz|3292,3135,4487
kran|kran|1537,3424,3423
krawat|krawat|4279,2298
krawiec|krawiec|4708,466
krawędź|krawędź|4839
kraść|kraść|5429,4785
kreatywny|kreatywny|3935
kredyt|kredyt|1356
krem|krem|3835,1486
kreskówka|kreskówka|2239
kret|kret|5407,4446
krew|krew|5196,3817
krewetka|krewetka|3827,3829
krewny / krewna|krewny|370
kroić|kroić|2025,2424
krok / kroki|krok|4359,2885,5380
krokodyl|krokodyl|3556,4076
kromka|kromka|1393
kropka|kropka|1725,1724
krople|krople|1674,1225
krowa|krowa|3752,4996,48
kruk|kruk|3606,350
krwawić|krwawić|2336,5473
kryminał|kryminał|3379
krytykować|krytykować|1507,872
kryzys|kryzys|4197
krzak|krzak|3714,3098,2127
krzesło|krzesło|3750,1243,2223
krzyczeć|krzyczeć|814,5075,2275
krzyknąć|krzyknąć|4523
krzywy|krzywy|4379
krzyżówka|krzyżówka|3000
król|król|3755,4299
królik|królik|5021,4508,1580
królowa|królowa|4506,1034
krótkoterminowy|krótkoterminowy|1368
krótszy|krótszy|49,4598,1270
kręcić|kręcić|3025,909
kręgosłup|kręgosłup|1411,4456
książeczka|książeczka|915
książka|książka|5073,5023,3659
książę|książę|339,3670
księgarnia|księgarnia|1975,4459
księgowość|księgowość|584
księgowy / księgowa|księgowy|4602
księżniczka|księżniczka|1900
księżyc|księżyc|1081,471
kształt|kształt|4112,2011
ktoś|ktoś|4518,2478,2104
który / która / które|który|5061,2195,2188
którędy?|którędy|4667,974,293
kubek|kubek|1382,4314,2503
kucharz / kucharka|kucharz|1022,4673,691
kuchenka|kuchenka|3865,1848,4716
kuchnia|kuchnia|1996,3602,470
kukurydza|kukurydza|2680,4393
kula|kula|2667,263
kultura|kultura|3102,3101,2514
kupić|kupić|5476,34,4913
kupować|kupować|5438,2922,2536
kupować / kupić|kupować|5438,2922,2536
kura|kura|2237,3174,781
kurczak|kurczak|5012,581,3378
kurs|kurs|759,4585,2256
kurtka|kurtka|4211,4210,4209
kuweta|kuweta|1648
kuzyn / kuzynka|kuzyn|5094,5093,4147
kwadrans|kwadrans|4291,4227,3184
kwadrat|kwadrat|4720,2909
kwadratowy|kwadratowy|5331,4517
kwalifikacje|kwalifikacje|1064,1318
kwartał|kwartał|4734
kwaśny|kwaśny|2744,2677,1810
kwestia|kwestia|3979,2773
kwiaciarnia|kwiaciarnia|2910
kwiat|kwiat|1252,83,1487
kwiecień|kwiecień|843,198,5246
kwitnąć|kwitnąć|3097,3136
kąpielówki|kąpielówki|4368
kąt|kąt|5498,849
kłamać|kłamać|2631,3555,1516
kłamstwo|kłamstwo|5485,2688
kłaść / położyć|kłaść|2428,1804,292
kłopot|kłopot|1408,1114
kłótnia|kłótnia|3100,2721
laboratorium|laboratorium|3441,3565
lada|lada|1128,4265
lalka|lalka|227,3735
lampa|lampa|3072,3071,171
lampart|lampart|3405
laptop|laptop|4954,4310
las|las|3458,4158,5447
lata / lat|lata|4160,3212
latarka|latarka|3451,5067
latać|latać|4074,3962
lato|lato|1166,5170,2370
lawina|lawina|1149
lać|lać|127,5068
lecieć|lecieć|2416,4616
leczenie|leczenie|1215,3991
leczyć|leczyć|2516,4615
ledwo|ledwo|4208
legalny|legalny|1912,2272
legenda|legenda|4237,1562
lek|lek|2559,671,1551
lek / lekarstwo|lek|2559,671,1551
lekarz / lekarka|lekarz|3481,2777,1432
lekceważyć|lekceważyć|3313,3312
lemoniada|lemoniada|1200,1372
len|len|5007
lenistwo|lenistwo|1727,1922
leniwy|leniwy|1998,884,1570
lepszy|lepszy|4999,712,5433
letni|letni|228,3447
lew|lew|4485,2149
lewy|lewy|1168,3849
leżeć|leżeć|2713,4452,2508
liceum|liceum|3039,347,1774
liczba|liczba|2511,2368
liczebnik|liczebnik|1750,1614
liczyć|liczyć|5393,5240
lina|lina|1470,776
linia|linia|2761,4397
linijka|linijka|2901,128
link|link|2347,2147
lipiec|lipiec|2209,4087,2198
lis|lis|5021,451,4593
list|list|665,155
lista|lista|3697,3690
listonosz|listonosz|975
listopad|listopad|65,4832,4830
litera|litera|1286,5336
literatura|literatura|1806,210
litr|litr|5241
lizać|lizać|2980,3594
liść|liść|1644,3537,1433
lodówka|lodówka|2561,2774,638
lokalny|lokalny|4297,4296
lokomotywa|lokomotywa|3734
lot|lot|279,3454,4050
lotnisko|lotnisko|244,2623,661
lubić|lubić|4957,4955,4510
lustro|lustro|2019,816
luty|luty|843,3209,3792
luźny|luźny|769,4859
lód|lód|4329,2414
lęk|lęk|1211,1567
macocha|macocha|3239,4347
maj|maj|1235,4837,4833
majonez|majonez|5482
majtki|majtki|563,4360
majątek|majątek|5442,4922
mak|mak|4581
makaron|makaron|2526
makijaż|makijaż|2419
makowiec|makowiec|5300
malarz / malarka|malarz|2099,862,4498
malina|malina|5383,5382
malować|malować|4927,3094,2398
mama|mama|5403,4471,2903
mandarynka|mandarynka|4263,4262
mandat|mandat|1080,833
mapa|mapa|82,3825,2374
marchew|marchew|2003,4746
margaryna|margaryna|4614,2070
marka|marka|1147,1336
marketing|marketing|1357
marnować|marnować|4049,4871
martwy|martwy|762,5060
marzec|marzec|843,3152
marzenie|marzenie|3945,3439,1871
marznąć|marznąć|3055
marzyć|marzyć|3994,852,1120
maszyna|maszyna|673,3888
masło|masło|2691,1628,5451
matematyka|matematyka|26,1251,3823
materac|materac|4312
materiał|materiał|3223,2686
matka|matka|3314,311,2474
mało|mało|2890
małpa|małpa|3213,4231
mały|mały|2934,2673,529
małżeństwo|małżeństwo|3568,4915,2250
mdleć|mdleć|1317,4596
meble|meble|2205,129,487
mechanik|mechanik|3250,3206,3249
mecz|mecz|3487,416,982
meczet|meczet|4494,4338
medal|medal|4083,4013
media|media|3672,5361
meduza|meduza|5001,3531
medycyna|medycyna|1708,1461
medyczny|medyczny|4425,4424
meksyk|Meksyk|1686
melodia|melodia|3418,3419
melon|melon|3007
menedżer|menedżer|5513
metal|metal|3621,4515
metoda|metoda|1990,1812
metr|metr|3427,153
metro|metro|2745,4484,4481
mewa|mewa|5159,3002
mgła|mgła|3457,5053,1475
miasto|miasto|5249,4026,3207
miauczeć|miauczeć|3140,3738
miedź|miedź|4514,346
miejsce|miejsce|4025,3350,4204
miejski|miejski|3240,3878
mierzyć|mierzyć|560,3226
miesiąc|miesiąc|2776,2413,5406
miesięczny|miesięczny|2582
mieszać|mieszać|1941,169
mieszkanie|mieszkanie|3046,2502
mieszkaniec|mieszkaniec|4431,73
mieszkać|mieszkać|4896,2505,1490
mieć|mieć|5481,5314
mijać|mijać|4611,150
mikrofalówka|mikrofalówka|2136
mikrofon|mikrofon|4,3400
milczeć|milczeć|5288,2507
milion|milion|5492,4751,1352
mimo|mimo|3334
minister|minister|4846,4816
minuta|minuta|2860,477,4153
miotła|miotła|2892,1968
miska|miska|4698,1203
mistrz|mistrz|76,5467
mistrzostwa|mistrzostwa|4584
miód|miód|5153,4555
między|między|843
międzynarodowy|międzynarodowy|378,2864
miękki|miękki|841,2441
mięsień|mięsień|1583,438
mięso|mięso|3778,1969,4110
miłość|miłość|5193,2833,4662
miły|miły|4947,2415,3628
miś|miś|5015,2649
mleko|mleko|3752,1809,5295
mniejszy|mniejszy|1722,3837,3682
mnożyć|mnożyć|4907,1637
mnóstwo|mnóstwo|75
mocno|mocno|4812,648
modlitwa|modlitwa|2787,2579
modny|modny|3017,887,1485
mokry|mokry|4438,3127
molo|molo|3210,1622
moment|moment|3357,2975,1889
moneta|moneta|5349,3165
monitor|monitor|2151
morderstwo|morderstwo|1185,587
morski|morski|1409,2065
morze|morze|4795,3553,1838
most|most|3163,630,1546
motocykl|motocykl|2974,4803
motyl|motyl|4952,2442
możliwość|możliwość|2647,882,5141
możliwy|możliwy|4081,5118,2853
można|można|4659
mroźny|mroźny|2133
mrugać|mrugać|3104
mrówka|mrówka|4061,5084
mróz|mróz|5471,3347,838
msza|msza|4661,1362
mucha|mucha|3384,2724
musieć|musieć|4914,3501,1129
muszka|muszka|1927,2687
muzeum|muzeum|3884,2323,3218
muzyk|muzyk|2785,3323
muzyka|muzyka|2297,859,1016
mydło|mydło|3989,2918,583
mysz|mysz|3860,420
myszka|myszka|1334
myć / umyć|myć|2420,64,3815
myśleć|myśleć|2757,2464,4573
móc|móc|4930,4193,2710
mój / moja / moje|mój|5476,5249,5162
mówienie|mówienie|810,1755
mówić|mówić|5064,4617,3710
mówić / powiedzieć|mówić|5064,4617,3710
mózg|mózg|5115,3538
mądrość|mądrość|2872,247
mądry|mądry|164,3016,221
mąka|mąka|2191,918,184
mąż|mąż|4173,1979,2501
męczyć|męczyć|713,295
mężczyzna|mężczyzna|5278,3832,1467
młodość|młodość|185,964
młodszy|młodszy|4324,586,3517
młody|młody|1875,4603,1790
młotek|młotek|116,1459
mżawka|mżawka|5214
na|na|5052
nad|nad|4580
nadal|nadal|2509
nadawać|nadawać|542,4806
nadać|nadać|1252,4230,3084
nadgarstek|nadgarstek|4944,3056
nadmiar|nadmiar|2898,1109
nadużywać|nadużywać|3302
nadzieja|nadzieja|4663,3021
nagle|nagle|4613
nagroda|nagroda|1789,3892,717
nagrywać|nagrywać|903
nagły|nagły|544,1453
najbardziej|najbardziej|5335
najbliższy|najbliższy|469,2571,528
najczęściej|najczęściej|3526,1183
najlepiej|najlepiej|3175
najlepszy|najlepszy|4306,500,458
najpierw|najpierw|91
nalać|nalać|2723,3431,5409
naleśnik|naleśnik|3894,5470
należeć|należeć|4646,4788
namiot|namiot|1264,1046,2733
napad|napad|1606,5500
napis|napis|4152,2147
napiwek|napiwek|2988,2987,608
naprawa|naprawa|955,4954,2902
naprawdę|naprawdę|4955
naprawiać|naprawiać|1821,439
naprawić|naprawić|3511,1514,1396
naprzeciwko|naprzeciwko|2490,1281,3506
napój|napój|5266,1829,3885
narada|narada|200
narciarstwo|narciarstwo|1328,1326
narodowość|narodowość|5328,5327,5326
narodowy|narodowy|2601,1834
narodziny|narodziny|3448,2369
narty|narty|3359,3220
narzeczony / narzeczona|narzeczony|3775
narzekać|narzekać|4183,2897
narzędzie|narzędzie|4469,2772
naród|naród|4831,419
nasiono|nasiono|3133,1851
nastolatek|nastolatek|4703
nastrój|nastrój|4287,4257
następnie|następnie|1518,2443,821
następny|następny|4683,5456,3299
nasz / nasza / nasze|nasz|2971,741,3146
naszyjnik|naszyjnik|3348,4082
natomiast|natomiast|4924,239,4923
natura|natura|4807,1656
naturalny|naturalny|1840,5512
natychmiast|natychmiast|2778
nauczyciel / nauczycielka|nauczyciel|1882,4288,2727
nauka|nauka|51,4317
naukowiec|naukowiec|4294,2968
nawet|nawet|3154
nawias|nawias|3918,912
nawyk|nawyk|5143,3161,2197
nawzajem!|Nawzajem|1995
nazwa|nazwa|956,2274
nazwisko|nazwisko|5405,3270,12
nazywać|nazywać|2573,1805
naśladować|naśladować|341
negocjować|negocjować|5344
nerka|nerka|4637,4975
nerw|nerw|706,373
nerwowy|nerwowy|186,367,764
nic|nic|5475,5399,3847
niebezpieczny|niebezpieczny|4169,3996,2465
niebieski|niebieski|4034,5499,4352
niebo|niebo|5200,54
niechętnie|niechętnie|3653
niecierpliwy|niecierpliwy|709
nieczynny|nieczynny|742,892
niedaleko|niedaleko|642
niedawno|niedawno|397
niedostępny|niedostępny|2411,402
niedziela|niedziela|5456,3873,3024
niedługo|niedługo|2777
niedźwiedź|niedźwiedź|50,5221,1049
niegrzeczny|niegrzeczny|3623,1241
nielegalny|nielegalny|4525,1880
niemal|niemal|3596
niemcy|Niemcy|2467
niemiec / niemka|Niemiec|1599,1324,431
niemiecki|niemiecki|2805,1088
niemowlę|niemowlę|1737,3498
niemożliwy|niemożliwy|1718,366
nienawiść|nienawiść|3730,3256
nieobecność|nieobecność|1857,1351
niepewny|niepewny|2055,5397
nieporozumienie|nieporozumienie|4666,3721
niepotrzebny|niepotrzebny|167,2878
nieruchomość|nieruchomość|4921,1456
niesamowity|niesamowity|2993,1501
niespodzianka|niespodzianka|716,2287,1079
niestety|niestety|3273
nieszczęśliwy|nieszczęśliwy|2285,2284
nietoperz|nietoperz|3677,2979
niewinny|niewinny|125,664
niewłaściwy|niewłaściwy|3330,456
niezadowolony|niezadowolony|575,1956,1092
niezależność|niezależność|4433
nieznajomy|nieznajomy|4339,4995
nieznany|nieznany|5510,1077
niezwykły|niezwykły|3852,2750
nieśmiały|nieśmiały|2597,4114,1497
nieźle.|Nieźle|2494
nigdy|nigdy|5438
nigdzie|nigdzie|4718
nikt|nikt|4981,3969,5417
niski|niski|2222,104,297
niszczyć|niszczyć|3529,3006
niż|niż|5464
niższy|niższy|875,4964,3221
no|no|5237
noc / noce|noc|4203,328,1390
nocleg|nocleg|4376
nocny|nocny|3953,4653
noga|noga|3659,2946,4634
normalny|normalny|5312,5258,3640
normalny / ulgowy|normalny|5312,5258,3640
norwegia|Norwegia|5250
nos|nos|2887,3433
nosić|nosić|2146,1845,4255
notatka|notatka|3976,866
notatnik|notatnik|4036,4000
notes|notes|651
nowoczesny|nowoczesny|262,3819
nowy|nowy|5438,4566,955
nożyczki|nożyczki|1132
nuda|nuda|175,3965
nudny|nudny|2283,3795,4619
numer|numer|2587,2512,3622
nurkować|nurkować|3505
nóż|nóż|3922,2078,3816
o|o|5389
oba|oba|4631,3482
obchodzić|obchodzić|5033,2386
obcinać|obcinać|3259
obcokrajowiec|obcokrajowiec|1285,1150
obcy|obcy|4994,145
obcęgi|obcęgi|1216
obecnie|obecnie|3645
obecność|obecność|2605,565
obecny|obecny|3644,4709
obejmować|obejmować|828,4436
obejrzeć|obejrzeć|3472,220,3473
obiad|obiad|2392,5108,3745
obiecać|obiecać|2589,1512,2229
obiecywać|obiecywać|199
obietnica|obietnica|939,1926
oblać|oblać|1414,1935,2607
oblewać|oblewać|779
oboje|oboje|2120,2231,4205
obok|obok|4896
obowiązek|obowiązek|3567,2551,2006
obracać|obracać|4177,4176
obraz|obraz|4992,4219,1297
obrazek|obrazek|5281,2506
obroża|obroża|1287
obrus|obrus|5057
obrączka|obrączka|5227,437
obserwować|obserwować|3746,2251,573
obszar|obszar|775,1314
obsługiwać|obsługiwać|732,70
obyczaj|obyczaj|112
obywatel|obywatel|331,356
obywatelstwo|obywatelstwo|3581
ocean|ocean|68,3618
ocena|ocena|25,4920,1419
oceniać|oceniać|579,135
ocet|ocet|2681,3047
ochroniarz|ochroniarz|5172
oczekiwać|oczekiwać|4165,2568
oczywiście|oczywiście|4976
od|od|5426
odcinek|odcinek|2626,1950
odczuwać|odczuwać|1116
oddawać|oddawać|2235
oddać|oddać|2868,2642,1874
oddech|oddech|4761,3281
oddychać|oddychać|2594,2172
oddział|oddział|2756,4385
oddzwonić|oddzwonić|3195,3197,3196
oddzwonię.|Oddzwonię|1137,1760
odebrać|odebrać|4196,4335,1978
odejść / odchodzić|odejść|5452,281,3879
odjazd|odjazd|154,2881,452
odjechać / odjeżdżać|odjechać|2663,4298,4980
odjeżdżać|odjeżdżać|2860,661,1767
odkrywać|odkrywać|2199
odkurzacz|odkurzacz|847,2214
odkąd|odkąd|3882
odkładać|odkładać|1873,5419
odlatywać|odlatywać|2803
odległość|odległość|2217,1366
odlot|odlot|2882
odlot / przylot|odlot|2882
odmawiać|odmawiać|5148,1195
odmiana|odmiana|530,2997
odpoczynek|odpoczynek|2348,616,4145
odpoczywać|odpoczywać|5275,4504,5161
odpoczywać / odpocząć|odpoczywać|5275,4504,5161
odpocząć|odpocząć|201,5257,3527
odpowiadać|odpowiadać|3296,4012,3521
odpowiadać / odpowiedzieć|odpowiadać|3296,4012,3521
odpowiedni|odpowiedni|1861,4928
odpowiedzialność|odpowiedzialność|1779,2557
odpowiedzialny|odpowiedzialny|2518,3693
odpowiedź|odpowiedź|4902,3967,4768
odprawa|odprawa|3880
odprowadzać|odprowadzać|353
odtwarzacz|odtwarzacz|807
odwaga|odwaga|4149,3412
odważny|odważny|2242,1415,1397
odwiedzać|odwiedzać|3997,3218
odwiedzić|odwiedzić|4445,714,5168
odwołać|odwołać|477,38,3406
odwoływać|odwoływać|967
odzież|odzież|1683,5081
ofiara|ofiara|4162,2468
oficjalny|oficjalny|4467
ogień|ogień|5469,966
oglądać|oglądać|3748,2181,2820
oglądać / obejrzeć|oglądać|3748,2181,2820
ognisko|ognisko|428,1133
ogon|ogon|1072,2201
ogrodnik|ogrodnik|1421
ogromny|ogromny|3901,2849
ogrzewanie|ogrzewanie|1387,1513
ogród|ogród|2049,1031,633
ogródek|ogródek|5036,5453
ogórek|ogórek|3964
ogłoszenie|ogłoszenie|382
ojciec|ojciec|3847,2873,2319
ojczym|ojczym|4346
ojczyzna|ojczyzna|1604,322
okienko|okienko|130,938
okno|okno|2736,814,328
oko|oko|5024,4736,3725
oko / oczy|oko|5024,4736,3725
okolica|okolica|3992,3464,2307
około|około|2860
okres|okres|3769,3768
okropny|okropny|3301,2992
okrągły|okrągły|2985,4712
okulary|okulary|822,3233,1845
okładka|okładka|579
okłamywać|okłamywać|5110,1868
olej|olej|2681,74,1941
olimpiada|olimpiada|997
oliwa|oliwa|672,214
omawiać|omawiać|2253,2109
omlet|omlet|4763,1803
ona|ona|2546,1843
opalony|opalony|5077
opera|opera|3570,1075,3571
operacja|operacja|4633,948
opiekunka|opiekunka|3585,3586
opinia|opinia|4681,2168,1877
opona|opona|2257,829
opowiadanie|opowiadanie|1143,1369
opowiadać / opowiedzieć|opowiadać|2344,5158,3060
oprogramowanie|oprogramowanie|5261,2628
oprócz|oprócz|527
optymistyczny|optymistyczny|3664,2462
opuszczać|opuszczać|5149,3729
opóźnienie|opóźnienie|345,1608,1654
opłacalny|opłacalny|1540
opłata|opłata|1607,2812,1917
organizować|organizować|113
orkiestra|orkiestra|4499
oryginał|oryginał|158,531
orzech|orzech|1071
orzeł|orzeł|4118,3343
osa|osa|3186,4079
osiedle|osiedle|4856
osiem|osiem|2028,5232
osiemdziesiąt|osiemdziesiąt|555,3640,4460
osiemnaście|osiemnaście|5048,3110,2454
osioł|osioł|4554,1405
osiągać|osiągać|2112
oskarżony|oskarżony|4645,1441
osoba|osoba|4099,4974
osobisty|osobisty|3572,2570
osobiście|osobiście|881
osobno|osobno|908
osobowość|osobowość|4717,1659
ostatni|ostatni|3753,2244,5406
ostatnio|ostatnio|3764
ostrożnie|ostrożnie|3314,3524,2282
ostry|ostry|3922,2017,1679
ostrzegać|ostrzegać|273,5515
oszczędności|oszczędności|1658,2712
oszczędzać|oszczędzać|1704,898,3927
oszukiwać|oszukiwać|5040,2255
oszustwo|oszustwo|2737,2027
otoczenie|otoczenie|746
otrzymywać|otrzymywać|1002
otwarty|otwarty|3225,5428,5261
otwierać / otworzyć|otwierać|2569,2342,5137
otwierać / zamykać|otwierać|2569,2342,5137
owad|owad|3075,4070
owca|owca|5096,358
owoce|owoce|4620
oznaczać|oznaczać|2989,2305,1268
ołówek|ołówek|3948,3946,453
ośmiornica|ośmiornica|3079,1146
pachnieć|pachnieć|3582,4144
pacjent|pacjent|114,2325
paczka|paczka|4429,1866,2792
padać|padać|5236,3156
pająk|pająk|3961,5089
pajęczyna|pajęczyna|4069
pakować|pakować|4323,2722
palec|palec|5413,985
paliwo|paliwo|3413,1341
palić|palić|1539,187
pamiątka|pamiątka|2841,425,2043
pamiętać|pamiętać|5475,2331,4130
pamięć|pamięć|2875,4946
pan / pani|pan|4865,4987,4863
panda|panda|1924,880
papier|papier|1721,1447
papryka|papryka|4042
papuga|papuga|3076,251
para|para|2590,2406,2410
paragon|paragon|33,722,1954
parapet|parapet|5114,3751
parasol|parasol|860,4234
park|park|3633,4660,2326
parking|parking|2122,2380,2393
parkować|parkować|1074,2427
parlament|parlament|2708,4507
parter|parter|4838,3353,1024
partia|partia|515
partner|partner|1227,5343
partykuła|partykuła|677
pas|pas|1316,4300
pasażer|pasażer|3190,1004
pasierb|pasierb|4348
pasować|pasować|4726,2396,3274
paszport|paszport|4983,2439,522
patelnia|patelnia|962,966,3758
patrzeć|patrzeć|3747,4966,2261
paznokieć|paznokieć|2161
pałac|pałac|4060,4109
państwo|państwo|2309,5335,3887
państwowy|państwowy|2657
październik|październik|5047,4454,4675
pejzaż|pejzaż|400
pensja|pensja|875,297,478
pensjonat|pensjonat|5019
perfumy|perfumy|1290
perkusja|perkusja|2101
peron|peron|5265,2663,1553
pewnie|pewnie|2917
pewność|pewność|2846,4990
pewny|pewny|5292,2576
pełny|pełny|3648,2622,103
pianino|pianino|2676,2403
piasek|piasek|5308,886
piaskownica|piaskownica|4060,1335
piec|piec|421,4472
pieczywo|pieczywo|1017
piekarnia|piekarnia|1754,3150
piekarnik|piekarnik|2117,2125,657
piekarz|piekarz|5059
pielęgniarz / pielęgniarka|pielęgniarz|4414,1575
pieniądze|pieniądze|4686
pieprz|pieprz|1424,1190
pierwszy|pierwszy|2068,1736,718
pierś|pierś|3771,1398
pierścionek|pierścionek|4788
pies|pies|5024,1098,1040
pies / psy|pies|5024,1098,1040
pieszo|pieszo|735
pieszy|pieszy|5014,5013
pietruszka|pietruszka|4377
pień|pień|4597,4367
piknik|piknik|98,3455
pilnować|pilnować|5287,857
pilny|pilny|3380,1759
pilot|pilot|1898,5101
pin|PIN|705,1631
pingwin|pingwin|4073,4311
piorun|piorun|1967,4895
piosenka|piosenka|2089,2487
piosenkarka|piosenkarka|2077,863
piosenkarz|piosenkarz|1974,59
pisanie|pisanie|570,618
pisarz / pisarka|pisarz|32,1140,2383
pisać|pisać|5430,3761,3733
pisać / napisać|pisać|5430,3761,3733
piwnica|piwnica|2301,4998,4699
piwo|piwo|4957,628,3559
pizza|pizza|4270,234,3378
pizzeria|pizzeria|4924,1907
pióro|pióro|694,4579
piątek|piątek|2429,3891
piątka|piątka|5392,5391
pić / wypić|pić|4957,4104,4098
piękny|piękny|4767,3352,2782
pięta|pięta|5366,5284
piętnaście|piętnaście|4933,1163
piętro|piętro|3903,4964,2483
pięć|pięć|2652
pięćdziesiąt|pięćdziesiąt|5496,644
pięćset|pięćset|4199
pięść|pięść|5390,1277
piłka|piłka|1156,874,507
piżama|piżama|2920,3938
plac|plac|865,4461,2030
plan|plan|1505,3376,3333
planeta|planeta|2880,4672
planować|planować|2828,2758,2340
plasterek|plasterek|2900,2753
plastik|plastik|1359,1298
plaża|plaża|255,213,2856
plecak|plecak|2697,3904,2529
plecy|plecy|4575,2754,5370
pleśń|pleśń|5127
plik|plik|4214,4217
plon|plon|1547,1306
plotka|plotka|4194,1585
plotkować|plotkować|195
po|po|5475
pobieranie|pobieranie|5086
pobierać|pobierać|4213,4216
pobrać|pobrać|4394,4221,4220
pochmurno|pochmurno|3335,488,3936
pociąg|pociąg|3273,3061,758
poczekalnia|poczekalnia|2857
poczta|poczta|3551,1543,3414
pocztówka|pocztówka|4428,911
początek|początek|4510,4454,4760
początkujący|początkujący|5268,1758
pod|pod|2060
podanie|podanie|1610
podatek|podatek|2990,1741
podawać / podać|podawać|1005,725,3260
podczas|podczas|5125
podejrzewać|podejrzewać|2215,5184
podlewać|podlewać|2132,680,2007
podnosić|podnosić|3840,1743
podobieństwo|podobieństwo|1256,777
podobny|podobny|1444,708,22
podpis|podpis|4501,4502,4405
podpisać|podpisać|4822,4232,2549
podpisywać|podpisywać|2859,2858
podróż|podróż|3422,634
podróżny|podróżny|19,539
podróżować|podróżować|4722,4038,726
podręcznik|podręcznik|4418,2226
podstawowy|podstawowy|148,4524
poduszka|poduszka|215,4543,3977
podwyżka|podwyżka|3320,5185
podwójny|podwójny|4156
podwórko|podwórko|4878,2300,2740
podziwiać|podziwiać|4303,3234
podłoga|podłoga|3747,3685,3608
poeta / poetka|poeta|3490,1410,1989
poezja|poezja|632,3215
pogląd|pogląd|330,3081
pogoda|pogoda|243,3005,2783
pogotowie|pogotowie|3001
pogrzeb|pogrzeb|3010,2042
pojechać|pojechać|5249,243,5269
pojedynczy|pojedynczy|4374
pojemnik|pojemnik|4728,4727
pojutrze|pojutrze|3695,374,1670
pokazać|pokazać|3373,3372,3367
pokazywać|pokazywać|3374,1739
pokolenie|pokolenie|3687,653
pokroić|pokroić|4582,2900,40
pokrywka|pokrywka|4825,5131
pokój|pokój|4795,3322,2166
polak / polka|Polak|5448,410,404
pole|pole|3856,1531,4486
polecić / polecać|polecić|238,2471,2463
policja|policja|5177,2379
policjant / policjantka|policjant|2196,3278,2031
policzek|policzek|3809,3435
policzyć|policzyć|4282,4577,3038
polityk|polityk|4274,4273
polska|Polska|5340,1321,4333
polski|polski|992,2924
polubić|polubić|4992,4477,4476
pomagać|pomagać|3501,5434,3552
pomagać / pomóc|pomagać|3501,5434,3552
pomarańcza|pomarańcza|2744,4266,3893
pomarańczowy|pomarańczowy|489,4264,4260
pomidor|pomidor|2900,1028,1971
pomnik|pomnik|1299
pomoc|pomoc|3579,629
pomysł|pomysł|4958,2354,1964
pomyłka.|Pomyłka|1651,1346,3577
pomóc|pomóc|4170,3803,3501
poniedziałek|poniedziałek|4894,3862,2429
ponieważ|ponieważ|699
popełniać|popełniać|4773,4877
popierać|popierać|3912,979
popołudnie|popołudnie|3125,1939
poprawiać|poprawiać|2726,2822
poproszę…|Poproszę|325
poprzedni|poprzedni|2613,5307
popularny|popularny|2155,1757
por|por|3601,278
porada|porada|2991,890,1312
poranny|poranny|3116,3113
porażka|porażka|3680,3155
porcja|porcja|2952,394,385
porozmawiać|porozmawiać|4769,3711,2714
port|port|1115,212
portfel|portfel|1374,1745
portmonetka|portmonetka|654
portret|portret|1337,1931
portugalia|Portugalia|1778
porządek|porządek|3467,3760
poród|poród|3767,3766
porównywać|porównywać|589
posada|posada|2869
poseł|poseł|2717
posiadać|posiadać|2481,5267
posiłek|posiłek|301,4612
post|post|4719,4977
postać|postać|4918,5026
pot|pot|509
potrzeba|potrzeba|5259,35
potrzebny|potrzebny|4681,3579,3736
potrzebować|potrzebować|3779,3616,955
potwierdzać|potwierdzać|710
potwierdzić|potwierdzić|452,1717,1315
poważnie|poważnie|142
poważny|poważny|2947,2156,2296
powieka|powieka|1272
powierzchnia|powierzchnia|2961,3960
powietrze|powietrze|2457,5229
powieść|powieść|4122,3333,3167
powinienem / powinnam|powinienem|498
powinieneś / powinnaś|powinieneś|3870
powodować|powodować|504,3526
powodzenia!|Powodzenia|5263,4723,4006
powoli|powoli|1823
powolny|powolny|752,120
powstawać|powstawać|3064
powtarzać|powtarzać|5431,766
powód|powód|3557,2811,2815
powódź|powódź|2128,1492
poza|poza|2480
poziom|poziom|635,789
poznawać|poznawać|411
pozostawać|pozostawać|2674,1491
pozwalać|pozwalać|4325,3484
pozwolenie|pozwolenie|436
pozwolić|pozwolić|4391,1031,3483
połowa|połowa|4617,27,4527
południe|południe|3120,11,5511
południowy|południowy|2954,851
połączenie|połączenie|1867,1761
pożar|pożar|1524,757
pożyczać / pożyczyć|pożyczać|3200,5420,3509
pożyczka|pożyczka|1749,1095
pożyczyć|pożyczyć|5183,2683,2682
praca|praca|4307,2367,712
pracować|pracować|3702,5355,5354
pracowity|pracowity|3288,2755,894
pracownik|pracownik|2461,3144,2943
pracownik / pracownica|pracownik|2461,3144,2943
pradziadek|pradziadek|2636,2635
pragnienie|pragnienie|3883,3276
praktyka|praktyka|3370,3392
pralka|pralka|192,2735,5186
pralnia|pralnia|3772,1625,3408
prasa|prasa|4051,1219,1455
prasować|prasować|2126,87
prawda?|prawda|4621,3087,2833
prawdopodobny|prawdopodobny|2362
prawdziwy|prawdziwy|3367,4189,3694
prawnik / prawniczka|prawnik|875,1705
prawo|prawo|2066,331
prawy|prawy|696,4850
prać|prać|3932,4223,396
premia|premia|260,3634,1548
premier|premier|2936
prezent|prezent|2592,4624,2536
prezenter|prezenter|1226
prezes|prezes|474,844
prezydent|prezydent|5330,5329
problem|problem|3383,5495,4171
procent|procent|3683,4322
proces|proces|1841,3091
produkt|produkt|3327,90
profesor|profesor|4188,178,1280
program|program|928,4644,152
programista / programistka|programista|395
projekt|projekt|3731,482,77
prom|prom|245
promocja|promocja|3324,4398
proponować|proponować|2537,2535
propozycja|propozycja|1846,670
prosić|prosić|4780,963
prosto|prosto|1768
prostokąt|prostokąt|2909
prostokątny|prostokątny|2823
prosty|prosty|5100,2459,1135
proszę|proszę|5073
prowadzić|prowadzić|4225,13,2406
prowizja|prowizja|2821
prośba|prośba|4668,2877,3251
prysznic|prysznic|2220,109,1448
prywatny|prywatny|4155,3381
przebieralnia|przebieralnia|4758
przecież|przecież|3254,5325,5324
przeciw|przeciw|3844
przeciwieństwo|przeciwieństwo|4086,1367,3494
przeciętny|przeciętny|1419,3652
przed|przed|5320
przedmieście|przedmieście|2545,804,1572
przedmiot|przedmiot|2402,1251,60
przedpołudnie|przedpołudnie|3027,434
przedsiębiorca|przedsiębiorca|1121,1640
przedsiębiorstwo|przedsiębiorstwo|296,4295
przedstawiać|przedstawiać|4413
przedszkole|przedszkole|3629,3630
przedwczoraj|przedwczoraj|5156,1918,264
przedział|przedział|1577
przedłużacz|przedłużacz|2294
przeglądarka|przeglądarka|4606,3513
przegrywać / przegrać|przegrywać|5436,268,1525
przejechać / przejeżdżać|przejechać|2079,2434,3183
przejść|przejść|1467,4601,3495
przejść / przechodzić|przejść|1467,4601,3495
przekazywać|przekazywać|2395,1660
przeklinać|przeklinać|1528
przekonanie|przekonanie|4873,655
przekonywać|przekonywać|5372,5371
przekraczać|przekraczać|882
przekąska|przekąska|1071,1913
przelewać|przelewać|4479,4478
przemysł|przemysł|4399,4398
przepis|przepis|2552,3041,4387
przepraszam|przepraszam|2977
przepraszać|przepraszać|823,689,4457
przeprosiny|przeprosiny|1822
przeprowadzka|przeprowadzka|1517,899
przerwa|przerwa|2308,3143,1202
przerywać|przerywać|2891,1420
przesadzać|przesadzać|3783,1780
przesiadka|przesiadka|3099
przestawać|przestawać|753,547
przestać|przestać|2190,2612,4548
przestrzeń|przestrzeń|2586,5311
przestępca|przestępca|1835,1836
przestępstwo|przestępstwo|4259,1833
przesyłka|przesyłka|205
przeszkadzać|przeszkadzać|1963,666,2290
przeszłość|przeszłość|4754,1091
przewidywać|przewidywać|4787,4630
przewodnik|przewodnik|3898,591,47
przez|przez|4292
przeziębienie|przeziębienie|935,703,697
prześcieradło|prześcieradło|5005,5006
przeżywać|przeżywać|5322
przy|przy|3911
przychodzić / przyjść|przychodzić|4473,2311,2171
przyciągać|przyciągać|3032,2565
przyczyna|przyczyna|5208,2819
przygoda|przygoda|4603,2242,1792
przygotowywać / przygotować|przygotowywać|993,5163,4864
przyjaciel|przyjaciel|5249,5027,4931
przyjaciel / przyjaciele|przyjaciel|5249,5027,4931
przyjaciółka|przyjaciółka|2670,2806,4116
przyjazd|przyjazd|1250,1234,31
przyjazny|przyjazny|2945,5487
przyjaźń|przyjaźń|207,2335
przyjechać / przyjeżdżać|przyjechać|1844,177,44
przyjeżdżać|przyjeżdżać|163,4600,1148
przyjmować|przyjmować|2444,1641
przyjęcie|przyjęcie|877,4889
przyjść / przychodzić|przyjść|4319,3189,2710
przykład|przykład|2957,63
przylot|przylot|1748,84
przymierzać|przymierzać|3145
przymierzyć|przymierzyć|1722,3681,5260
przymiotnik|przymiotnik|4801,4800
przynajmniej|przynajmniej|2543
przynieść|przynieść|3214,1201,650
przynosić|przynosić|4062,1538
przypadek|przypadek|4550,4031,321
przypisywać|przypisywać|1550
przypominać|przypominać|4965,3493,1555
przypominać / przypomnieć|przypominać|4965,3493,1555
przyprawa|przyprawa|41,5415
przyroda|przyroda|4281,4202,2358
przyspieszać|przyspieszać|16
przystanek|przystanek|2948,3211,1199
przystojny|przystojny|1903,2779
przyszłość|przyszłość|4293,4969
przyszły|przyszły|5457,3193
przysłowie|przysłowie|831
przytulać|przytulać|2452,1262
przytulić|przytulić|4328,1511,5092
przywilej|przywilej|203,443
przyzwyczajenie|przyzwyczajenie|1210,3881
próbować|próbować|1811,5171,4137
próbować / spróbować|próbować|1811,5171,4137
prąd|prąd|3667,3614
prędkość|prędkość|2082,357
pstrąg|pstrąg|3080
psychologia|psychologia|156
pszczoła|pszczoła|5289,3186
pszenica|pszenica|918,314
ptak|ptak|2637,2251,748
publicznie|publicznie|830
publiczny|publiczny|4370,3831
publikować|publikować|4740
puchar|puchar|334
pudełko|pudełko|2652,2359,5182
pudło|pudło|771,5508
pukać|pukać|3605,2418
punkt|punkt|2599,1770
punktualnie|punktualnie|468,170,1
punktualność|punktualność|1193,721
punktualny|punktualny|2763,526
pusty|pusty|2399,874,303
pustynia|pustynia|4029,4028
puszcza|puszcza|3465
puszczać|puszczać|989,4344
puszka|puszka|874,3952,4563
puzzle|puzzle|943
pyszny|pyszny|302,290
pytanie|pytanie|652,3296,4522
pytać|pytać|3839,2190,3475
pytać / zapytać|pytać|3839,2190,3475
pójść|pójść|5251,4682,1837
pół|pół|5241
półka|półka|1980,4532,611
północ|północ|4950,3516,1972
północny|północny|2741,574
półtora|półtora|147
półwysep|półwysep|2015,1897
późno|późno|4445
późny|późny|332,3128
pączek|pączek|4632,1204,2376
pędzel|pędzel|4956,4492
pętla|pętla|4853
płacić / zapłacić|płacić|4391,3832,5042
płakać|płakać|1615,1595,2692
płaszcz|płaszcz|2213,3341,110
płatki|płatki|3657,2240
płatny|płatny|1791
płeć|płeć|2241,4059,4058
płonąć|płonąć|835
płot|płot|2053,950
płuco|płuco|1944,1237
płynąć|płynąć|1055,0
płyta|płyta|1122,1229
płytki|płytki|4355,4354
pływanie|pływanie|3546,4684
pływać|pływać|3360,5198,3553
rabat|rabat|194
rachunek|rachunek|3515,4676,3905
raczej|raczej|1175
rada|rada|543,4906
radio|radio|417,5220,465
radość|radość|211,2560,2665
radzić|radzić|2807,2304
rak|rak|639,3073
rakieta|rakieta|736,1325
ramię|ramię|2840,3508
rana|rana|4251,4245
rano|rano|480,1801
raport|raport|3066,2387
rata|rata|832,1029
ratownik|ratownik|3236,5274
ratunek|ratunek|2760
ratusz|ratusz|5123,427
raz|raz|3753,3575,2596
realizować|realizować|5313
recenzja|recenzja|4855,2653,376
recepcja|recepcja|4187,1402
recepta|recepta|1551,1692
recesja|recesja|4590
redaktor|redaktor|2389
regał|regał|1288,707
region|region|2650,4737
regularnie|regularnie|3460,1914,4439
rejs|rejs|1191,5487
rekin|rekin|3009,1047
reklama|reklama|2624,291,2585
reklamować|reklamować|106
reklamówka|reklamówka|2879
religia|religia|4993,4876
remis|remis|867
remont|remont|3726,3092
republika|republika|994,2924
restauracja|restauracja|3832,1192,467
reszta|reszta|3705,1723,2260
resztki|resztki|1106
rezerwacja|rezerwacja|222,1468,615
rezygnować|rezygnować|607,3444
reżyser|reżyser|3069,1689,4411
robak|robak|5479,4093
robić|robić|4914,4655,4292
robić / zrobić|robić|4914,4655,4292
robot|robot|3504,1449
robotnik|robotnik|3219,4276
rocznica|rocznica|2384,1668,3004
roczny|roczny|1283
rodzaj|rodzaj|2606,1986
rodzeństwo|rodzeństwo|3788,3587,2177
rodzice|rodzice|5476
rodzicom|rodzicom|2589
rodzinny|rodzinny|3369,1905
rodzić|rodzić|4167,1458
rok|rok|3886,2832,2780
rok / lata|rok|3886,2832,2780
rola|rola|893,4864,1395
rolnictwo|rolnictwo|4916
rolnik|rolnik|660,2598,3133
rosja|Rosja|5342,2075,5341
rosjanin|Rosjanin|2984,359
rosjanka|Rosjanka|4450
rosnąć|rosnąć|1742,5088,5002
rosyjski|rosyjski|5455,942
rosół|rosół|1063
rower|rower|3617,3616,3615
rowerzysta|rowerzysta|3142
rozczarowany|rozczarowany|1855,1508,2022
rozdział|rozdział|3065,923
rozmawiać|rozmawiać|4184,2834
rozmiar|rozmiar|1722,4250,3330
rozmowny|rozmowny|3086
rozpacz|rozpacz|493,5189
rozpoczynać|rozpoczynać|2863,1655
rozpoznawać|rozpoznawać|1353
rozrywka|rozrywka|131,62
rozumieć|rozumieć|1703,2752,2751
rozumieć / zrozumieć|rozumieć|1703,2752,2751
rozważać|rozważać|5299,2357
rozwijać|rozwijać|5480,4932
rozwiązanie|rozwiązanie|786,4135
rozwiązywać|rozwiązywać|371,462
rozwód|rozwód|2719,2338
roślina|roślina|5403,3137,3409
rumunia|Rumunia|2934,861,1816
rura|rura|4706
ruszać|ruszać|2330,5244
ryba|ryba|5255,3700,4102
rybak|rybak|1198
rybka|rybka|363,2784
rynek|rynek|1671,3033
rysować|rysować|2671,4052,2966
ryzyko|ryzyko|4142,4009,1828
ryzykowny|ryzykowny|1734,3713
ryś|ryś|5090,2638
ryż|ryż|1113,3258,61
rzadko|rzadko|389
rzecz / rzeczy|rzecz|4626,5160,2510
rzeczownik|rzeczownik|4801,677
rzeczywistość|rzeczywistość|3471,3282
rzeka|rzeka|5255,1992,1001
rzeźnik|rzeźnik|4410,4363
rzucać|rzucać|5365,1373
rząd|rząd|4123,2848
róg|róg|3867,5351
również|również|1942
równina|równina|499,4581
równość|równość|4640
równy|równy|1635,1019
róża|róża|2049,733,2767
różnica|różnica|1711,2861,3199
różnorodność|różnorodność|2762
różny|różny|1811,1416,1813
różowy|różowy|3790,2634,5210
ręcznik|ręcznik|3814,1378,3820
ręka|ręka|5403,529,303
ręka / ręce|ręka|5403,529,303
rękaw|rękaw|5444,5443
rękawiczki|rękawiczki|1587
sad|sad|3679,3678
sadzić|sadzić|2263,3134
saldo|saldo|1165
salon|salon|3344,2139,3407
sam|sam|5474,5345
samochód|samochód|3095,66,2152
samodzielność|samodzielność|4435
samogłoska|samogłoska|4019,4020
samolot|samolot|2072,726,3902
samotność|samotność|5332,4811
samotny|samotny|5317,3801,1054
sandały|sandały|4092
sałata|sałata|2005,5301
sałatka|sałatka|3263,2689
scena|scena|1521,2746
schodami|schodami|640,4201
schody|schody|4094,4095
schronisko|schronisko|4625
schudnąć|schudnąć|2435,4870,603
sejf|sejf|4120,1259
sekretarka|sekretarka|2801,4096
sekunda|sekunda|4283,5082,4535
seler|seler|2904,4377
semestr|semestr|588,2854
sen|sen|658,3054,2344
senat|Senat|304,4749
sens|sens|4022,3631,4652
ser|ser|3528,3037,4002
serbia|Serbia|14,2938,752
serce|serce|5350,4691,4553
serial|serial|3182,984
sernik|sernik|1417,2228,2227
serwetka|serwetka|728
siadać / usiąść|siadać|1057,1162
siano|siano|3951,1609
siatkówka|siatkówka|1793
siedem|siedem|1117,5219
siedemdziesiąt|siedemdziesiąt|1960,3640,1940
siedemnaście|siedemnaście|1860,873,126
siedzieć|siedzieć|3747,3746,4288
sierpień|sierpień|930,4783,2485
sierść|sierść|745
sieć|sieć|3981,4799
silnik|silnik|4752,3689
silny|silny|4604,1000
siniak|siniak|4440
siostra|siostra|5064,4324,566
siwy|siwy|3286,1221
siła|siła|2672,28
siłownia|siłownia|949,2543,1633
skakać|skakać|884,5369
skarga|skarga|2530,3916,713
skarpetki|skarpetki|497,1752
skała|skała|2466,3518,4133
sklep|sklep|4764,3578,3024
skomplikowany|skomplikowany|559,4755
skracać|skracać|1030
skromność|skromność|1899,4608
skromny|skromny|503,4175
skrzydło|skrzydło|3287,572
skrzynka|skrzynka|4692,5298
skrzypce|skrzypce|518,5318
skrzyżowanie|skrzyżowanie|4169,7,2066
skrócić|skrócić|72,1363
skrót|skrót|1710,3489
skręcić|skręcić|2066,4750,357
skręcić / skręcać|skręcić|2066,4750,357
skutek|skutek|737,925
skóra|skóra|1184,965
skąpy|skąpy|96,4989
składać|składać|2408,189
składnik|składnik|2144,4730
smaczny|smaczny|2155,4643,1422
smak|smak|4623,1248
smakować|smakować|3175
smażyć|smażyć|5054,3429
sms|SMS|2176
smutek|smutek|2816
smutny|smutny|4794,2258,3797
sobota|sobota|3696,1523,2162
soczewki|soczewki|3178
sok|sok|489,4664,4048
sos|sos|1257,1025
sosna|sosna|5003
sowa|sowa|4997,4180
spacer|spacer|415,5297,3458
spacerować|spacerować|3115,1993
spadać|spadać|2091,2981
spadek|spadek|1605,4409
spać|spać|5358,4575,4351
spaść|spaść|3019,1852,4745
specjalnie|specjalnie|768,1582
specjalny|specjalny|2603,2388
spektakl|spektakl|855,5062,399
spełniać|spełniać|740,2600
spiker|spiker|2194
spinacz|spinacz|2391
spis|spis|2092,4715
spiżarnia|spiżarnia|1099
spodnie|spodnie|3394,3208,3395
spoglądać|spoglądać|274,5017
spokojnie!|Spokojnie|5056,124,5109
spokojny|spokojny|369,201,400
spokój|spokój|2870,1406
spontaniczny|spontaniczny|1125
sporo|sporo|2435
sport|sport|1942,2996,1220
sposób|sposób|4655,1811,3362
spotkanie|spotkanie|2843,1947
spotkać|spotkać|3118,1832,718
spotykać / spotkać|spotykać|4511,1961,3576
społeczeństwo|społeczeństwo|5462,1437
społeczność|społeczność|4705,2128
spragniony|spragniony|2137,4701
sprawa|sprawa|5426,4030,2110
sprawdzać|sprawdzać|3744
sprawdzian|sprawdzian|286,4723,3574
sprawiać|sprawiać|2830,5506
sprawiedliwość|sprawiedliwość|258,2289
sprawozdanie|sprawozdanie|1994
sprzedawać / sprzedać|sprzedawać|492,5106,5446
sprzedawca / sprzedawczyni|sprzedawca|1238,5009,5411
sprzątać|sprzątać|2002,4316,2401
sprzątać / posprzątać|sprzątać|2002,4316,2401
sprzęt|sprzęt|3203,1959
spróbować|spróbować|5085,2303,4301
spódnica|spódnica|2716,2675
spór|spór|995,283
spółka|spółka|1858
spóźnienie|spóźnienie|936,2076
spędzać|spędzać|1037,4453
spędzić|spędzić|2641,5142,4790
srebrny|srebrny|3669,4179
srebro|srebro|5338,1881
sroka|sroka|138,2023
stacja|stacja|952,514
stadion|stadion|4242,4240,4243
stado|stado|343,1788
stal|stal|5147,446
stanowisko|stanowisko|513,3859,4361
starość|starość|743,289
starszy|starszy|1467,2446,571
startować|startować|1130,3452
staruszek|staruszek|3445
staruszka|staruszka|2492
stary|stary|2715,1084,874
statek|statek|17,727,1451
staw|staw|1041,1797,1932
stawiać|stawiać|5418,1110
stać|stać|5279,5031,4569
stały|stały|2372,917
staż|staż|3164
stek|stek|551,3635
sto|sto|2327,3683
stodoła|stodoła|3068,2704
stolarz|stolarz|3914,643
stolica|stolica|2938,4496
stolik|stolik|2371,440,3953
stopa|stopa|3692,4538
stopień|stopień|5076,4917,4561
stosować|stosować|321,316
stołówka|stołówka|4444,4529
strach|strach|2103,5459,3737
straszny|straszny|3103,2111
straszyć|straszyć|2472,188
strata|strata|2350,2455
strażak|strażak|3973,3668
stres|stres|891,4892,1214
strona|strona|2158,1813
strumień|strumień|4879,4489
struś|struś|582
strych|strych|2566
strzelać|strzelać|2145,3012
student / studentka|student|2058,475,1498
studiować|studiować|2193,601,173
stulecie|stulecie|136,3179
styczeń|styczeń|3822,3354,5144
stypendium|stypendium|2381,932,625
stół|stół|2060,3300,2725
subskrybować|subskrybować|3090
suchy|suchy|3990,2827
sufit|sufit|3077,754,4075
sukces|sukces|3321,678
sukienka|sukienka|3774,4269,3773
suma|suma|1083,854
supermarket|supermarket|2329,2949,2356
surowy|surowy|3260,1158
susza|susza|4805
suszarka|suszarka|5117,4406
suszyć|suszyć|2581
sweter|sweter|4034,4771,1629
swój / swoja / swoje|swój|3808,3753,2873
sylaba|sylaba|4371,5049
sylwester|sylwester|5159,2135
symbol|symbol|3151
sympatyczny|sympatyczny|4607,254
syn|syn|2873,1554,987
synagoga|synagoga|4337
synonim|synonim|1576,4090
sypialnia|sypialnia|3813,1883,4926
system|system|1206,2768
sytuacja|sytuacja|18,21,3638
szachy|szachy|2029,515
szacunek|szacunek|2976,2102
szafa|szafa|3168,552,1545
szafka|szafka|3834,4951
szalik|szalik|5152,2121
szampan|szampan|309,5461
szampon|szampon|5035,5034,2729
szanować|szanować|178,4808,824
szansa|szansa|3934,5296
szarlotka|szarlotka|422,1345
szary|szary|4203,1308
szczególny|szczególny|3900,1818
szczegółowy|szczegółowy|1732,641
szczekać|szczekać|4576,4342,5437
szczeniak|szczeniak|1305,5099
szczerość|szczerość|2978,889
szczery|szczery|2346,1489,1473
szczerze|szczerze|900
szczotka|szczotka|1320
szczupły|szczupły|4861,4860,4862
szczur|szczur|4271,4272
szczyt|szczyt|4841,1144,2430
szczęście|szczęście|5472,2616,3994
szczęśliwie|szczęśliwie|299,1747
szczęśliwy|szczęśliwy|3279,2960,287
szef / szefowa|szef|1145,496,564
szeroki / wąski|szeroki|4741,1001,5362
szerszeń|szerszeń|1712
szesnaście|szesnaście|4835,730,627
szewc|szewc|5402,5364
sześć|sześć|3568,2718
sześćdziesiąt|sześćdziesiąt|4537,4866,4536
szklanka|szklanka|4067,2874,3519
szklarnia|szklarnia|5165
szkoda!|Szkoda|4045
szkodzić|szkodzić|4447
szkoła|szkoła|3956,2068,1026
szkło|szkło|5018,5190
szlafrok|szlafrok|3871
szlak|szlak|4823,4824,5376
szminka|szminka|3861
sznurek|sznurek|3941
szorty|szorty|4792
szpak|szpak|3800,432
szpinak|szpinak|1188
szpital|szpital|2413,1502,115
sztuczny|sztuczny|2048,3284
sztuka|sztuka|4463,469,4143
szuflada|szuflada|4534,266
szukać|szukać|3921,3500,567
szukać / znaleźć|szukać|3921,3500,567
szwagier / szwagierka|szwagier|3171,1657,1303
szwajcaria|Szwajcaria|4834,308
szwecja|Szwecja|5078,57
szybki|szybki|4902,3030,1196
szybko|szybko|2204,4222
szybkość|szybkość|3308,3307
szyja|szyja|2040,1698
szykować|szykować|4005,2539
szynka|szynka|5494,4410
szyć|szyć|2035,1663
szóstka|szóstka|2337
sól|sól|64,1636,4547
sąd|sąd|4403,1271
sądzić|sądzić|3762,1104,176
sąsiad / sąsiadka|sąsiad|2942,3425,3385
sąsiad / sąsiedzi|sąsiad|2942,3425,3385
sąsiedni|sąsiedni|235,3028
sąsiedztwo|sąsiedztwo|592,5135
sędzia|sędzia|4011,2032
sęp|sęp|3170,3013
słabość|słabość|5460
słaby|słaby|2039,770
sławny|sławny|537,1884
słodki|słodki|2744,1417,4388
słodycze|słodycze|1771
słoik|słoik|5065,2693,5479
słomka|słomka|5063
słonecznie|słonecznie|2528
słonecznik|słonecznik|3134,3789
słoneczny|słoneczny|3520,2154
słony|słony|2164,2160,1561
słowacja|Słowacja|5126,2175
słowak|Słowak|5126
słownictwo|słownictwo|1684,2119
słownik|słownik|4786,1439
słoń|słoń|4434,4097
słońce|słońce|2782,920,229
słuch|słuch|1282,5347
słuchacz|słuchacz|1413,2540
słucham.|Słucham|5220
słuchanie|słuchanie|1301
słuchawki|słuchawki|896,839
słuchać|słuchać|2886,4647,3261
słuszny|słuszny|4638,3332
służbowy|służbowy|738,1239
słyszeć|słyszeć|2244,1615,5207
słyszeć / usłyszeć|słyszeć|2244,1615,5207
tablet|tablet|3402,3401
tabletka|tabletka|1864,2129,4641
taczka|taczka|4925
tajemnica|tajemnica|2844,2243
tak|tak|5430
taki|taki|5256,4978
taksówka|taksówka|3763,3112,2588
taksówkarz|taksówkarz|695,2842
także|także|4838
talent|talent|3699,3872
talerz|talerz|4541,4540,1068
tam|tam|2436
tamten / tamta / tamto|tamten|3917,3095,2067
tancerz|tancerz|2116
tani|tani|5395,2069,79
taniec|taniec|1807,1463
tanio|tanio|3192,4362
targ|targ|4900,3858
tarka|tarka|2578
tata|tata|5254,403,2986
tańczyć|tańczyć|252,1902,2453
tańszy|tańszy|3269,3265,983
teatr|teatr|813,3319,1400
technika|technika|3228
technologia|technologia|1338,3819
teczka|teczka|3798,5029
tekst|tekst|3437,4468
telewizja|telewizja|3748,2181,895
telewizor|telewizor|5476,1898,1342
temat|temat|3060,4474
temperatura|temperatura|3181,682,4598
ten / ta / to|ten|5475,5278,5226
tenis|tenis|2355,1003
teoria|teoria|907,1799
teraz|teraz|4914
teraźniejszość|teraźniejszość|1542,805
teren|teren|2405,1925
termin|termin|4248,3105
terminarz|terminarz|4531
teść / teściowa|teść|1481,2292,1472
też|też|5124
thriller|thriller|4817
toaleta|toaleta|1934,4037
topnieć|topnieć|3132,906
tor|tor|933,3543,5284
torba|torba|1036,4266,3944
torebka|torebka|4774,4420
tort|tort|5484,4582,5398
tost|tost|2503
towar|towar|5277,362,285
towarzyski|towarzyski|2262,1395
tracić / stracić|tracić|123,3159,4757
tradycja|tradycja|4131
tramwaj|tramwaj|4200,2741,2203
transmisja|transmisja|2277
transport|transport|4429,5310
trawa|trawa|1186,569,4125
trawnik|trawnik|204,3544
trener|trener|1519,2364
trening|trening|3805,1892
trenować|trenować|3937,386
trochę|trochę|2561
trolejbus|trolejbus|4027
trudniejszy|trudniejszy|4893,4128,2100
trudno|trudno|3446,5213
trudność|trudność|3545
trudny|trudny|2009,4880,2013
truskawka|truskawka|2795,1565
trwać|trwać|2883,3477
trzeba|trzeba|4392
trzeci|trzeci|3903,3122,558
trzy|trzy|3510,5238
trzydzieści|trzydzieści|2917,4282
trzymać|trzymać|3780,5408,4247
trzynaście|trzynaście|2577,5334
trzysta|trzysta|2955,1951
trójka|trójka|1496,4936,1790
trójkąt|trójkąt|1591
trąbka|trąbka|4678
tsunami|tsunami|246
tulipan|tulipan|502,4581
tunel|tunel|3548,5166
turcja|Turcja|1643,1197
turek|Turek|2911
turniej|turniej|790,1504
turysta|turysta|2618,4840
tutaj|tutaj|2971
tuzin|tuzin|1589,1375
twardy|twardy|2466,4605
twarz|twarz|3367,1218,4288
twierdzić|twierdzić|521,2771
tworzyć|tworzyć|105,4497
twój / twoja / twoje|twój|4576,3541,3154
ty|ty|5430,5028
tydzień|tydzień|5278,3733,3592
tygrys|tygrys|3942,2081
tyle|tyle|3627,1460
tylko|tylko|4981
tylny|tylny|602,3434
tymczasowy|tymczasowy|1278,4814
typ|typ|1442,1164
typowy|typowy|219,3403
tysiąc|tysiąc|2617,5240,4685
tysięczny|tysięczny|2928
tytuł|tytuł|1921
tyć|tyć|4813,1698
tęcza|tęcza|3639,4594,2521
tędy|tędy|3718,778
tępy|tępy|3791,4400
tęsknić|tęsknić|4482,3382
tłok|tłok|5130,282
tłumaczenie|tłumaczenie|4185,5113
tłumaczyć|tłumaczyć|1530,4721
tłumić|tłumić|2497
u|u|3062
ubezpieczenie|ubezpieczenie|1783,1010,1623
ubierać|ubierać|2742,2514
ubranie|ubranie|5438,3777,3728
ucho|ucho|3525,2275,3417
ucho / uszy|ucho|3525,2275,3417
uchodźca|uchodźca|2702,2703
uciec|uciec|32,5171,4891
uciekać|uciekać|1970,4023
uczciwość|uczciwość|1916
uczciwy|uczciwy|97,424,2620
uczelnia|uczelnia|593,1982
uczestniczyć|uczestniczyć|3970,2279
uczeń / uczennica|uczeń|4972,5264,4937
uczucie|uczucie|3048,2851
uczyć|uczyć|3743,146,5424
uczęszczać|uczęszczać|2210
udar|udar|1642
udawać|udawać|4650,3187
udo|udo|4796
udowadniać|udowadniać|3703
ufać|ufać|5043,424,5231
ugotować|ugotować|5136,5339,4804
ukraina|Ukraina|2930,2929,1569
ukraiński|ukraiński|2998,4358
ukraść|ukraść|937,4778,3294
ukrywać|ukrywać|2045,242
układać|układać|1691,520
ul|ul|4396,4091
ulepszać|ulepszać|1590
ulewa|ulewa|3456,3486
ulga|ulga|1856,1069
ulica|ulica|4345,3633,244
ulotka|ulotka|4843
ulubiony|ulubiony|3592,5047,1070
umiejętność|umiejętność|1775,1673
umierać / umrzeć|umierać|4874,3945,1011
umieć|umieć|3761,2093,1991
umowa|umowa|741,2549,4010
umożliwiać|umożliwiać|4639
umywalka|umywalka|921
unikać|unikać|2083,1763
uniwersytet|uniwersytet|2193,2394,991
upadać|upadać|4138
uparty|uparty|4782,1647,1781
upał|upał|3126,1593,4628
upiec|upiec|3411,422,4277
uprawiać|uprawiać|3139,803
uprzejmość|uprzejmość|842,668
uprzejmy|uprzejmy|1875,409,1541
urlop|urlop|3459,133,3026
uroczy|uroczy|2700,1588
urodzinowy|urodzinowy|1471,5206
urodziny|urodziny|4463,2331,3283
urząd|urząd|4275,1945
urządzenie|urządzenie|180,3368
urzędnik / urzędniczka|urzędnik|2522,545,5132
usmażyć|usmażyć|4441,4762,447
usta|usta|2236,4256
ustawa|ustawa|3971
usterka|usterka|3255,294
usługi|usługi|2234
utrzymywać|utrzymywać|767,1483
uwaga|uwaga|3289,241,5188
uważać|uważać|4350,6,3784
uważnie|uważnie|4332,1107
uwielbiać|uwielbiać|1503,3610,3609
uwierzyć|uwierzyć|3650,3257,2619
użytkownik|użytkownik|1097,1123
używać|używać|546,3933,1765
w|w|5279
wada|wada|5242,4167,1327
waga|waga|1482,1051,5216
wagon|wagon|2660,2659,3734
wakacje|wakacje|3701,5125,2656
walczyć|walczyć|3492,5379,2286
walizka|walizka|2862,1592,179
waluta|waluta|4586,4587
wanna|wanna|360,2944
warga|warga|1042
warsztat|warsztat|1394
warto|warto|4056
warunek|warunek|1619,3625
warzywa|warzywa|4620
wazon|wazon|157,232
ważka|ważka|3851
ważny|ważny|5193,4032,6
ważyć|ważyć|3153,5234
wbrew|wbrew|3654,3106
wciąż|wciąż|3943
wczesny|wczesny|1105,5074
wcześnie|wcześnie|3710
wczoraj|wczoraj|2888
wdowa / wdowiec|wdowa|1805,1266
wdzięczność|wdzięczność|4696,2852
według|według|1600
weekend|weekend|4683,5333,1695
weekendowy|weekendowy|3646
wegański|wegański|5133,4089,4088
wegetariański|wegetariański|1676,5440
wejść / wchodzić|wejść|3322,1506,1031
wentylator|wentylator|1304,969
wersja|wersja|1310,1786
wesele|wesele|1981,118,1983
wesoły|wesoły|3925,1661,2361
weterynarz|weterynarz|1735,970
wewnętrzny|wewnętrzny|2666,272
wełna|wełna|3720,1289
wiadomość|wiadomość|4659,1855,2153
wiadro|wiadro|24,1309
wiara|wiara|1946,968
wiatr|wiatr|2953,2038,4046
wiatrak|wiatrak|4766,3675
wiać|wiać|2953,751
widelec|widelec|4539,2554,1677
wideo|wideo|265,5192,4117
widok|widok|4795,2140,4735
widzieć / zobaczyć|widzieć|5430,5024,3764
wieczorem|wieczorem|3130
wieczorny|wieczorny|5051
wiedza|wiedza|4939,3188
wiedzieć|wiedzieć|5226,5225,4981
wiejski|wiejski|3135,1213
wiek|wiek|2098,3595,241
wielbłąd|wielbłąd|423,2046
wiele|wiele|4026,3928,4160
wielkanoc|Wielkanoc|4415,3864,4591
wielki|wielki|5357,5356
wielkość|wielkość|4146
wieloryb|wieloryb|3869,1078
wieprzowina|wieprzowina|1159,1157
wiercić|wiercić|3846,3845
wierny|wierny|4987,836,56
wiersz|wiersz|2731,2163,3490
wierzba|wierzba|5004
wierzyć|wierzyć|4621,4744,149
wieszak|wieszak|4407
wieszać|wieszać|4161
wietrzny|wietrzny|3691,1479
wiewiórka|wiewiórka|2967,2965
wieś|wieś|4880,2997
wieża|wieża|5304,656
wigilia|Wigilia|3315,3225,3224
wilk|wilk|3661,2004,3756
winda|winda|3600,4458,5247
winny|winny|2519,4973
wino|wino|5241,3547,2352
winogrono|winogrono|3740,3739
wiosenny|wiosenny|1469,4642
wiosna|wiosna|3137,500,43
wirus|wirus|2306,2646
wisieć|wisieć|2728,1337
witam!|Witam|1544,1224
witamina|witamina|4267,792
witać|witać|3807,879
wiza|wiza|4401
wizyta|wizyta|4609,3248,1134
więc|więc|2921
większość|większość|3761,799
większy|większy|3063,349,1526
więzienie|więzienie|1825,2933
wiśnia|wiśnia|137,846
wjechać / wjeżdżać|wjechać|2483,4753,1872
wkrótce|wkrótce|3050
wkładać / włożyć|wkładać|1729,623,1153
wniosek|wniosek|1440,5316,2810
wnuk / wnuczka|wnuk|1554,904,3909
woda|woda|3214,5136,2925
wodny|wodny|1726,4080
wodospad|wodospad|2618,3719
wojna|wojna|1948,134
wojsko|wojsko|4724,1618
wokół|wokół|4174
woleć|woleć|931,3632,3268
wolniejszy|wolniejszy|3273,3272,3271
wolność|wolność|1219,3986
wolny|wolny|1247,2896,313
wolny / wolna|wolny|1247,2896,313
wolę|wolę|1113
worek|worek|5427,4526
wołowina|wołowina|2537,3643
wpadać|wpadać|2106,5243
wpis|wpis|4845,1085,4844
wprowadzać|wprowadzać|248,5367
wpłacić|wpłacić|5181
wpłata|wpłata|871
wpływ|wpływ|510,934
wpływać|wpływać|1707,1888
wracać / wrócić|wracać|2532,303,1915
wreszcie|wreszcie|1166,3474,230
wrona|wrona|4784,2983
wrzesień|wrzesień|2838,4748,1534
wróbel|wróbel|3176,5315
wrócić|wrócić|5145,5146,5083
wróg|wróg|2871,3522
wschodni|wschodni|1124
wschód|wschód|920,3410,692
wschód / zachód słońca|wschód|920,3410,692
wsiadać / wysiadać|wsiadać|4339,511
wsiąść / wysiąść|wsiąść|2072,4886,4885
wspaniały|wspaniały|2182,3665
wsparcie|wsparcie|5224,5223
wspierać|wspierać|2739,508,5504
wspominać|wspominać|2550,2451
wspomnienie|wspomnienie|2080,739
wspólnie|wspólnie|2593
wspólny|wspólny|5375,4253
współczesny|współczesny|2548,315
współlokator / współlokatorka|współlokator|1139,3656,1349
współpraca|współpraca|2232,788
wstawać|wstawać|4648,2421,4172
wstawać / wstać|wstawać|4648,2421,4172
wstyd|wstyd|916,1638
wszyscy|wszyscy|4957
wszystkie|wszystkie|5028
wszystko|wszystko|5134,1090,5119
wszędzie|wszędzie|3921
wtedy|wtedy|2436
wtorek|wtorek|4319,2206
wujek|wujek|2790,426,3666
wulkan|wulkan|1908,2115
wy|wy|1984,4221
wybaczać|wybaczać|959,1407
wybaczyć|wybaczyć|3087,1178,2264
wybierać / wybrać|wybierać|4103,3524,3855
wyborca|wyborca|202
wybuchać|wybuchać|905
wybór|wybór|2829,4195,304
wychodzić / wyjść|wychodzić|4173,1832,5305
wychowywać|wychowywać|1172,1173
wycieczka|wycieczka|2310,3258,3349
wycieraczka|wycieraczka|3067
wydarzenie|wydarzenie|922,1310,1369
wydatek|wydatek|2131,2130
wydawać|wydawać|2183,760
wydawnictwo|wydawnictwo|3253
wydział|wydział|102
wyglądać|wyglądać|5280,5191
wygodnie|wygodnie|36,802
wygodny|wygodny|1634,30,3534
wygrywać / wygrać|wygrywać|2574,1027,268
wyjazd|wyjazd|3947,1795,3051
wyjaśniać|wyjaśniać|306,3303
wyjechać / wyjeżdżać|wyjechać|1404,4942,2321
wyjątek|wyjątek|610,1847
wyjątkowy|wyjątkowy|2973,3899,3235
wyjść / wychodzić|wyjść|3832,2645,2417
wykałaczka|wykałaczka|1533
wykonywać|wykonywać|3478,4439
wykorzystywać|wykorzystywać|1731,4318
wykres|wykres|1693,1418
wykształcenie|wykształcenie|4043,196,329
wykład|wykład|597,2150,5348
wykładowca|wykładowca|1579
wymagający|wymagający|1568
wymagać|wymagać|1820,3993
wymawiać|wymawiać|4549,1269
wymiana|wymiana|2894,759,1176
wymieniać|wymieniać|1484
wymienić|wymienić|4392,1233,1371
wymieszać|wymieszać|4389
wymiotować|wymiotować|1412,1258
wymioty|wymioty|1276
wymowa|wymowa|4490,2765
wymyślać|wymyślać|3613
wynajmować / wynająć|wynajmować|46,1246
wynająć / wynajmować|wynająć|5125,1498,3391
wynalazek|wynalazek|864,724
wynik|wynik|2316,1784,4756
wynosić|wynosić|2495,1891
wypadać|wypadać|3138,3205
wypadek|wypadek|2824,4253
wypełniać|wypełniać|2014
wypełnić|wypełnić|1592,858,4665
wypoczywać|wypoczywać|1361
wypożyczać|wypożyczać|486
wypracowanie|wypracowanie|785,818
wyprzedaż|wyprzedaż|4934,4739,947
wyprzedzać|wyprzedzać|5378
wypłacić|wypłacić|5180
wypłacić / wpłacić pieniądze|wypłacić|5180
wypłata|wypłata|4001,2629,700
wyraz|wyraz|2730,793
wyrażać|wyrażać|3215,2138
wyrok|wyrok|523,4404
wyrzucać|wyrzucać|517,1536
wysiłek|wysiłek|690,461
wysoki|wysoki|1919,614,4236
wysokość|wysokość|1211,1428
wyspa|wyspa|5317,4452,1495
wystarczać|wystarczać|4284,1087
wystawa|wystawa|1296,4610,1746
wysypka|wysypka|1639,4440
wysyłać / wysłać|wysyłać|5464,5463,1111
wysłać|wysłać|2544,1886,4624
wytrzymywać|wytrzymywać|1425
wywiad|wywiad|72,3123
wywoływać|wywoływać|88
wyścig|wyścig|4427,2088
wyższy|wyższy|3119,2912,593
wzdłuż|wzdłuż|1769
wzgórze|wzgórze|5499,2140,663
wzrok|wzrok|317,1527
wzrost|wzrost|320,1987
wzruszający|wzruszający|5230,3841
wzór|wzór|2916,2915
wódka|wódka|1370,1033
wózek|wózek|3591,1893,1556
wąchać|wąchać|1669
wąsy|wąsy|3764,5360,4464
wątpić|wątpić|800,4239
wątpliwość|wątpliwość|1957,1581
wąż|wąż|3247,3246
węch|węch|119,4381
wędkarstwo|wędkarstwo|720,95
węgiel|węgiel|4286,5020
węgry|Węgry|2927,3297,404
władza|władza|4910,3109
własność|własność|5038,4618
własny|własny|5111,4038,3525
właściciel / właścicielka|właściciel|3575,2179,2438
właściwie|właściwie|2095
właściwy|właściwy|1817,2473
właśnie|właśnie|3557
włochy|Włochy|1909
włos|włos|101,5117
włoski|włoski|686,3811
włączać|włączać|4882,2407
wściekły|wściekły|1949,702
z|z|4992
za|za|5389
zabawka|zabawka|5271,2534
zabawny|zabawny|4350,2678,2105
zabierać|zabierać|2475,1911
zabrać|zabrać|5100,5486,5108
zabronione|zabronione|2906,187,2427
zabytek|zabytek|1662
zabytkowy|zabytkowy|1181
zachodni|zachodni|913,2831
zachowanie|zachowanie|2366,541
zachód|zachód|2782,953,1977
zaczynać / kończyć|zaczynać|3701,3357,267
zaczynać / zacząć|zaczynać|3701,3357,267
zadanie|zadanie|4938,1831,5412
zadowolenie|zadowolenie|2333
zadowolony|zadowolony|3975,501,117
zadzwonić|zadzwonić|5173,4912,3117
zagranica|zagranica|1728,2044
zagraniczny|zagraniczny|9,1348
zainteresowanie|zainteresowanie|2608,1006
zajmować|zajmować|1764,4437
zając|zając|1048,4072
zajęcia|zajęcia|1
zajęty|zajęty|2555,4636,1596
zakaz|zakaz|2914,2907
zakochany|zakochany|5105,78,2651
zakończenie|zakończenie|2267,1559
zakupy|zakupy|3124
zakład|zakład|4669
zakładać|zakładać|2449,460
zaleta|zaleta|5248,3275,1480
zależeć|zależeć|1236,1131,390
zaliczka|zaliczka|868
zamawiać|zamawiać|174,2313
zamek|zamek|4290,312,435
zamiast|zamiast|4134
zamieniać|zamieniać|5483
zamierzać|zamierzać|2592,1776,3198
zamknięty|zamknięty|1900,1260
zamykać / zamknąć|zamykać|2124,1155,930
zamówienie|zamówienie|2541,2408,1360
zamówić|zamówić|1696,4802,613
zamężna|zamężna|2098,3727,326
zanieczyszczenie|zanieczyszczenie|2000,4867
zanieść|zanieść|1086
zanikać|zanikać|99
zanim|zanim|3743
zapach|zapach|704,5025
zapalać|zapalać|1391
zapalniczka|zapalniczka|5
zapałki|zapałki|354
zapisywać|zapisywać|2008,3642
zapominać / zapomnieć|zapominać|2345,929,1522
zapraszać / zaprosić|zapraszać|5046,5045,2142
zaproszenie|zaproszenie|3915,3910,2143
zaprzeczać|zaprzeczać|4558
zapłacić|zapłacić|5285,2800,4976
zarabiać|zarabiać|2001,853,3920
zaraz|zaraz|878
zarażać|zarażać|1333
zarezerwować|zarezerwować|1621,324,2660
zarządzać|zarządzać|1685,1323
zasada|zasada|1887,4191,2288
zasięg|zasięg|300,1527,774
zasiłek|zasiłek|1013
zaskoczony|zaskoczony|4982,1839
zastrzyk|zastrzyk|659,4343
zastępować|zastępować|4186
zasypiać|zasypiać|3722
zasłona|zasłona|3022,3704
zasługiwać|zasługiwać|4055,1885
zatem|zatem|1863,2224
zatrudnić|zatrudnić|4626,1597,1340
zatrzymywać|zatrzymywać|2476,1709
zaufanie|zaufanie|1180,1946,1558
zauważać|zauważać|491
zauważyć|zauważyć|5174,5157,2669
zawał|zawał|5044,4341
zawierać|zawierać|226,4729
zawodnik|zawodnik|5387,1330
zawodowy|zawodowy|711,1426
zawracać|zawracać|4315,2157
zawrócić|zawrócić|5385,5384,1294
zawsze|zawsze|4576
zawód|zawód|1688,1488,485
zazdrosny|zazdrosny|2063,2661,1096
zazdrość|zazdrość|669,413
zazwyczaj|zazwyczaj|3130
załatwiać / załatwić|załatwiać|524,1648
zbierać|zbierać|3507,3166
zboże|zboże|3328,3329
zbyt|zbyt|3922
zdanie|zdanie|3442,1255,3238
zdarzenie|zdarzenie|1189,3584
zdawać|zdawać|2432,3757
zdejmować / zdjąć|zdejmować|4759,2584,4592
zdjęcie|zdjęcie|5028,4321,3999
zdolność|zdolność|556,4364
zdolny|zdolny|1876,4100
zdrowie|zdrowie|636,5489,4141
zdrowieć|zdrowieć|2542
zdrowo|zdrowo|585,1102,3826
zdrowotny|zdrowotny|2817,1010
zdrowy|zdrowy|3732,3404,2024
zdziwienie|zdziwienie|401,1364
zdążyć|zdążyć|1928,3351,4044
zebranie|zebranie|619,554,381
zegar|zegar|4390,3741
zegarek|zegarek|4392,1666,3749
zepsuty|zepsuty|1910,4127,3599
zero|zero|3147,1826,1612
zespół|zespół|476,869,4670
zeszyt|zeszyt|919,139
zeszły|zeszły|5278,2776,2050
zewnętrzny|zewnętrzny|5491
zgadywać|zgadywać|4465,3776
zginąć|zginąć|5337,4875,1429
zgoda|zgoda|1552,1564,1228
zgubić|zgubić|1666,34,3749
zgłaszać|zgłaszać|3014
zgłosić|zgłosić|3015,4016,2482
zielony|zielony|2994,1381,569
ziemia|ziemia|4940,307
ziemniak|ziemniak|1383,3202
zima|zima|5342,945,43
zimny|zimny|4738,4105,2513
zimowy|zimowy|914,538
zjawisko|zjawisko|1646
zjeść|zjeść|2770,5272,2866
zmartwienie|zmartwienie|1962
zmarły|zmarły|2847,1066,182
zmiana|zmiana|3802,3731,1505
zmieniać / zmienić|zmieniać|3575,5422,569
zmierzch|zmierzch|2269,3129
zmuszać|zmuszać|4178,5441
zmywarka|zmywarka|4327,5187
zmywać|zmywać|3913,1161
zmęczenie|zmęczenie|4810,4811
zmęczony|zmęczony|2259,5179,2747
znaczek|znaczek|4302,2409,271
znaczenie|znaczenie|5468,2085
znaczyć|znaczyć|2839,533,687
znajdować|znajdować|5242,1244
znajomość|znajomość|1179
znajomy / znajoma|znajomy|3292,2493,4335
znak|znak|2479,782
znaleźć|znaleźć|3921,3500,1984
znać|znać|3154,2942,2316
zniszczony|zniszczony|1988
zniżka|zniżka|3325,3326,1713
zoo|zoo|3310
zostawać / zostać|zostawać|2461,2174,2339
zostawiać|zostawiać|2520,2108
zostawić|zostawić|2736,1374,796
zostać|zostać|3487,2908,2561
zrozumiały|zrozumiały|3449,2809
zrywać|zrywać|1853,151
zszywacz|zszywacz|2963
zupa|zupa|2086,1232,3216
zupełnie|zupełnie|5403
zwiedzanie|zwiedzanie|3919
zwiedzać|zwiedzać|2563,4109,4651
zwiedzić|zwiedzić|826,819,1800
zwierzę|zwierzę|3338,4961,2939
zwolnienie|zwolnienie|3539,3485
zwolnić|zwolnić|5278,4124,2141
zwracać|zwracać|1766,2332
zwrot|zwrot|5073,2951,2016
zwrócić|zwrócić|2219,2218,2991
zwycięstwo|zwycięstwo|548,1500
zwycięzca|zwycięzca|4967
zwyczaj|zwyczaj|2170,3298
zwykle|zwykle|4104
zwykły|zwykły|1966,2764,3620
zysk|zysk|1032,1177
ząb|ząb|2420,1263,4228
złamać|złamać|2946,741,4634
złodziej|złodziej|2604,3532,94
złoto|złoto|45
złoty|złoty|4202,4788,4448
złość|złość|2622,220,698
zły|zły|2799,2458,2354
ćwiczenie|ćwiczenie|5080,2627
ćwiczyć|ćwiczyć|1291,2320,941
ćwierć|ćwierć|172
łabędź|łabędź|4057,4054
ładny|ładny|1753,3005,2433
ładować|ładować|3649,1445
łagodny|łagodny|3420,1240
łamać|łamać|3698,473
łapa|łapa|231,3476,4408
łapać|łapać|568,165
łatwiejszy|łatwiejszy|3877,3828
łatwo|łatwo|4941,5425
łatwy|łatwy|2353,4567,4823
łazienka|łazienka|3954,2538,4533
łańcuch|łańcuch|2639,4365
łokieć|łokieć|1231,3974
łopata|łopata|4384
łosoś|łosoś|1205,1187
łoś|łoś|3706,4150
łysy|łysy|1058,3958
łyżeczka|łyżeczka|4557
łyżka|łyżka|3387,2759,1549
łyżwy|łyżwy|4066,4753
łza|łza|534,2167
łódź|łódź|5509,3416
łóżko|łóżko|4935,2713,4770
łączyć|łączyć|414,1332
łąka|łąka|2173,93,358
ściana|ściana|1777,2134,1381
ścierka|ścierka|4903
ścieżka|ścieżka|1431,85
ściskać|ściskać|144
ściągać|ściągać|1076,845
śledzić|śledzić|990
śledztwo|śledztwo|160,5203
ślimak|ślimak|3272,4040
ślub|ślub|3194,2847,815
ślubny|ślubny|4443
śmieci|śmieci|5254
śmierć|śmierć|4760,2941
śmieszny|śmieszny|1702,2010
śmietanka|śmietanka|2561,325,1808
śniadanie|śniadanie|4423,4422,2553
śnieg|śnieg|1664,3089,693
śnieżyca|śnieżyca|253,256
śnić|śnić|658,8,3940
śpiewać|śpiewać|252,55,2446
środa|środa|3389,3141,1138
środek|środek|5122,4229
środkowy|środkowy|3297,5235
środowisko|środowisko|2000,5477,5512
śruba|śruba|4818,450
śrubokręt|śrubokręt|3641
świadek|świadek|1061,1386,2192
świat|świat|3163,940,5363
światowy|światowy|4687,336
światło|światło|2982,1118
świeca|świeca|3580,4071
świecić|świecić|973,3688
świetnie!|Świetnie|2596
świetny|świetny|305,1509
świeży|świeży|2024,1819,2457
świnia|świnia|4772,505
świt|świt|5103,3929
świąteczny|świąteczny|773,1169
święto|święto|4836,5400,23
świętować|świętować|4945
źle|źle|3149
źródło|źródło|5193,519,5178
żaba|żaba|1101,5058
żaden / żadna / żadne|żaden|1414
żaglówka|żaglówka|5497
żal|żal|3930,4181
żart|żart|2798,620
żartować|żartować|3875,3499,729
żałować|żałować|5121,2658
że|że|5358
żeby|żeby|4445
żeglować|żeglować|1958
żegnać|żegnać|2654,1943
żelazko|żelazko|2701,181
żelazo|żelazo|1953,4515
żniwa|żniwa|4599,314
żona|żona|3754,3753,4765
żonaty|żonaty|2097,5197,988
żołnierz|żołnierz|4685,3684
żołądek|żołądek|5416,2074
życie|życie|3705,318,3535
życzenia|życzenia|259,3810
życzliwy|życzliwy|3876,3480,4700
życzyć|życzyć|827,108,621
żyrafa|żyrafa|4111,5095
żywność|żywność|1667,377
żywy|żywy|5373,4110
żyć|żyć|674,2248,5388
żyła|żyła|276,5321
żółty|żółty|1156,2558,2490
żółw|żółw|5353,5070
żądać|żądać|1319`;
