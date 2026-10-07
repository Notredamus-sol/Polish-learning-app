/* Dictionary, part 1: body, health, food, kitchen, home, clothes, household.
   One entry per line: polish|english|grammar. Grammar: m / f / n = noun gender, pl = plural only. */
const DICT_1 = `
ciało|body|n
głowa|head|f
twarz|face|f
czoło|forehead|n
brew|eyebrow|f
rzęsa|eyelash|f
powieka|eyelid|f
oko|eye|n
ucho|ear|n
nos|nose|m
policzek|cheek|m
usta|mouth, lips|pl
warga|lip|f
ząb|tooth|m
język|tongue; language|m
gardło|throat|n
szyja|neck|f
kark|back of the neck|m
broda|chin; beard|f
wąsy|moustache|pl
włosy|hair|pl
włos|a single hair|m
ramię|arm; shoulder|n
bark|shoulder (joint)|m
łokieć|elbow|m
nadgarstek|wrist|m
dłoń|palm, hand|f
pięść|fist|f
palec|finger; toe|m
kciuk|thumb|m
paznokieć|nail (finger, toe)|m
pierś|breast, chest|f
klatka piersiowa|chest|f
brzuch|belly, stomach|m
plecy|back|pl
kręgosłup|spine|m
biodro|hip|n
pośladek|buttock|m
udo|thigh|n
kolano|knee|n
łydka|calf (of the leg)|f
kostka|ankle; cube|f
stopa|foot|f
pięta|heel|f
skóra|skin; leather|f
kość|bone|f
mięsień|muscle|m
krew|blood|f
serce|heart|n
płuco|lung|n
wątroba|liver|f
nerka|kidney|f
żołądek|stomach (organ)|m
jelito|intestine|n
mózg|brain|m
nerw|nerve|m
żyła|vein|f
pot|sweat|m
łza|tear|f
oddech|breath|m
głos|voice; vote|m
wzrok|eyesight|m
słuch|hearing|m
węch|sense of smell|m
smak|taste|m
dotyk|touch|m
zdrowie|health|n
choroba|illness, disease|f
ból|pain|m
ból głowy|headache|m
ból zęba|toothache|m
gorączka|fever|f
kaszel|cough|m
katar|runny nose|m
przeziębienie|cold (illness)|n
grypa|flu|f
alergia|allergy|f
astma|asthma|f
cukrzyca|diabetes|f
nadciśnienie|high blood pressure|n
zawał|heart attack|m
udar|stroke|m
rak|cancer; crayfish|m
infekcja|infection|f
zapalenie|inflammation|n
wirus|virus|m
bakteria|bacterium|f
rana|wound|f
skaleczenie|cut (on the skin)|n
siniak|bruise|m
oparzenie|burn (injury)|n
złamanie|fracture|n
zwichnięcie|dislocation (of a joint)|n
skręcenie|sprain (e.g. an ankle)|n
blizna|scar|f
wysypka|rash|f
swędzenie|itching|n
mdłości|nausea|pl
wymioty|vomiting|pl
biegunka|diarrhoea|f
zaparcie|constipation|n
zawroty głowy|dizziness|pl
omdlenie|fainting|n
bezsenność|insomnia|f
zmęczenie|tiredness|n
stres|stress|m
depresja|depression|f
ciąża|pregnancy|f
poród|childbirth|m
pacjent|patient|m
lekarz rodzinny|GP, family doctor|m
pielęgniarka|nurse|f
dentysta|dentist|m
chirurg|surgeon|m
okulista|eye doctor|m
pediatra|paediatrician|m
ginekolog|gynaecologist|m
psycholog|psychologist|m
ratownik|paramedic; lifeguard|m
przychodnia|clinic, health centre|f
gabinet|doctor's office; study|m
poczekalnia|waiting room|f
izba przyjęć|A&E admissions|f
oddział|hospital ward; branch|m
karetka|ambulance|f
pogotowie|emergency service|n
badanie|examination, test|n
wizyta|appointment, visit|f
skierowanie|referral|n
recepta|prescription|f
diagnoza|diagnosis|f
leczenie|treatment|n
operacja|operation, surgery|f
zastrzyk|injection|m
szczepionka|vaccine|f
szczepienie|vaccination|n
lekarstwo|medicine|n
tabletka|pill, tablet|f
syrop|syrup|m
maść|ointment|f
krople|drops|pl
plaster|plaster, band-aid|m
bandaż|bandage|m
termometr|thermometer|m
ciśnienie|blood pressure; pressure|n
temperatura|temperature|f
puls|pulse|m
wynik|result|m
okulary|glasses|pl
soczewki|contact lenses|pl
aparat słuchowy|hearing aid|m
wózek inwalidzki|wheelchair|m
kula|crutch; ball, sphere|f
ubezpieczenie zdrowotne|health insurance|n
zwolnienie lekarskie|sick note|n
dieta|diet|f
witamina|vitamin|f
odporność|immunity|f
higiena|hygiene|f
mydło|soap|n
szampon|shampoo|m
odżywka|conditioner|f
pasta do zębów|toothpaste|f
szczoteczka do zębów|toothbrush|f
nić dentystyczna|dental floss|f
grzebień|comb|m
szczotka|brush|f
ręcznik|towel|m
golarka|shaver|f
maszynka do golenia|razor|f
krem|cream|m
dezodorant|deodorant|m
perfumy|perfume|pl
makijaż|make-up|m
szminka|lipstick|f
lakier do paznokci|nail polish|m
chusteczka|tissue; handkerchief|f
papier toaletowy|toilet paper|m
podpaska|sanitary pad|f
pieluszka|nappy, diaper|f
żywność|food (in general)|f
jedzenie|food; eating|n
posiłek|meal|m
przekąska|snack|f
danie|dish, course|n
przystawka|starter|f
zupa|soup|f
deser|dessert|m
pieczywo|bread products|n
bułka|bread roll|f
rogal|crescent roll, croissant|m
chleb razowy|wholemeal bread|m
kromka|slice of bread|f
tost|toast|m
kanapka|sandwich|f
mąka|flour|f
kasza|groats, kasha|f
ryż|rice|m
makaron|pasta, noodles|m
płatki|cereal; flakes|pl
owsianka|porridge|f
naleśnik|pancake|m
pierogi|dumplings (pierogi)|pl
gołąbki|stuffed cabbage rolls|pl
bigos|hunter's stew (sauerkraut and meat)|m
żurek|sour rye soup|m
barszcz|beetroot soup|m
rosół|chicken broth|m
kotlet|cutlet|m
schabowy|breaded pork cutlet|m
kiełbasa|sausage|f
parówka|frankfurter|f
szynka|ham|f
boczek|bacon|m
wołowina|beef|f
wieprzowina|pork|f
cielęcina|veal|f
baranina|mutton, lamb|f
drób|poultry|m
indyk|turkey|m
kaczka|duck|f
gęś|goose|f
pierś z kurczaka|chicken breast|f
udko|drumstick|n
mięso mielone|minced meat|n
stek|steak|m
pasztet|pâté|m
smalec|lard|m
ryba|fish|f
łosoś|salmon|m
dorsz|cod|m
śledź|herring|m
karp|carp|m
pstrąg|trout|m
tuńczyk|tuna|m
krewetka|prawn, shrimp|f
owoce morza|seafood|pl
nabiał|dairy products|m
twaróg|curd cheese|m
ser żółty|hard cheese|m
śmietana|sour cream|f
śmietanka|cream (for coffee)|f
jogurt|yoghurt|m
kefir|kefir|m
maślanka|buttermilk|f
masło|butter|n
margaryna|margarine|f
olej|oil|m
oliwa|olive oil|f
ocet|vinegar|m
sól|salt|f
pieprz|pepper (spice)|m
cukier|sugar|m
miód|honey|m
dżem|jam|m
konfitura|preserve, jam|f
musztarda|mustard|f
ketchup|ketchup|m
majonez|mayonnaise|m
sos|sauce|m
przyprawa|spice, seasoning|f
cynamon|cinnamon|m
koper|dill|m
pietruszka|parsley|f
bazylia|basil|f
czosnek|garlic|m
imbir|ginger|m
papryka|pepper (vegetable); paprika|f
ogórek|cucumber|m
pomidor|tomato|m
kapusta|cabbage|f
kalafior|cauliflower|m
brokuł|broccoli|m
marchew|carrot|f
burak|beetroot|m
cebula|onion|f
por|leek|m
seler|celery|m
rzodkiewka|radish|f
sałata|lettuce|f
szpinak|spinach|m
groszek|peas|m
fasola|beans|f
soczewica|lentils|f
kukurydza|maize, sweetcorn|f
dynia|pumpkin|f
cukinia|courgette|f
bakłażan|aubergine|m
grzyb|mushroom|m
pieczarka|button mushroom|f
ziemniak|potato|m
frytki|chips, fries|pl
jabłko|apple|n
gruszka|pear|f
śliwka|plum|f
wiśnia|sour cherry|f
czereśnia|sweet cherry|f
truskawka|strawberry|f
malina|raspberry|f
borówka|blueberry|f
porzeczka|currant|f
agrest|gooseberry|m
brzoskwinia|peach|f
morela|apricot|f
winogrono|grape|n
arbuz|watermelon|m
melon|melon|m
banan|banana|m
pomarańcza|orange|f
mandarynka|tangerine|f
cytryna|lemon|f
grejpfrut|grapefruit|m
ananas|pineapple|m
kiwi|kiwi|n
orzech|nut|m
migdał|almond|m
rodzynki|raisins|pl
jajko|egg|n
jajecznica|scrambled eggs|f
omlet|omelette|m
ciasto|cake; dough|n
ciastko|biscuit, small cake|n
sernik|cheesecake|m
szarlotka|apple pie|f
pączek|doughnut|m
tort|layer cake|m
czekolada|chocolate|f
cukierek|sweet, candy|m
lody|ice cream|pl
guma do żucia|chewing gum|f
chipsy|crisps|pl
napój|drink|m
woda mineralna|mineral water|f
sok|juice|m
kompot|fruit drink (stewed fruit)|m
lemoniada|lemonade|f
herbata|tea|f
kakao|cocoa|n
piwo|beer|n
wino|wine|n
wódka|vodka|f
nalewka|fruit liqueur|f
szampan|champagne|m
kieliszek|small (wine) glass|m
szklanka|glass (for water)|f
kubek|mug|m
filiżanka|cup|f
talerz|plate|m
miska|bowl|f
półmisek|serving dish|m
sztućce|cutlery|pl
łyżka|spoon|f
łyżeczka|teaspoon|f
widelec|fork|m
nóż|knife|m
serwetka|napkin|f
obrus|tablecloth|m
garnek|pot|m
patelnia|frying pan|f
czajnik|kettle|m
deska do krojenia|chopping board|f
tarka|grater|f
otwieracz|opener|m
korkociąg|corkscrew|m
durszlak|colander|m
chochla|ladle|f
łopatka|spatula|f
blacha|baking tray|f
piekarnik|oven|m
kuchenka|cooker, stove|f
mikrofalówka|microwave|f
lodówka|fridge|f
zamrażarka|freezer|f
zmywarka|dishwasher|f
toster|toaster|m
ekspres do kawy|coffee machine|m
mikser|mixer|m
blender|blender|m
przepis|recipe; regulation|m
składnik|ingredient|m
porcja|portion|f
kawałek|piece|m
plasterek|slice|m
szczypta|pinch|f
smaczny|tasty|adj
pyszny|delicious|adj
słodki|sweet|adj
słony|salty|adj
kwaśny|sour|adj
gorzki|bitter|adj
ostry|spicy; sharp|adj
łagodny|mild, gentle|adj
świeży|fresh|adj
nieświeży|stale, not fresh|adj
surowy|raw; strict|adj
gotowany|boiled|adj
smażony|fried|adj
pieczony|roasted, baked|adj
duszony|stewed|adj
wędzony|smoked|adj
mrożony|frozen|adj
wegetariański|vegetarian|adj
wegański|vegan|adj
bezglutenowy|gluten-free|adj
dom jednorodzinny|detached house|m
blok|block of flats|m
kamienica|tenement house|f
osiedle|housing estate|n
mieszkanie własnościowe|owner-occupied flat|n
kawalerka|studio flat|f
piętro|floor, storey|n
parter|ground floor|m
piwnica|cellar, basement|f
strych|attic|m
dach|roof|m
ściana|wall|f
sufit|ceiling|m
podłoga|floor|f
schody|stairs|pl
winda|lift, elevator|f
korytarz|corridor|m
przedpokój|hall|m
salon|living room|m
jadalnia|dining room|f
sypialnia|bedroom|f
pokój dziecięcy|children's room|m
łazienka|bathroom|f
toaleta|toilet|f
balkon|balcony|m
taras|terrace|m
garaż|garage|m
ogródek|small garden|m
płot|fence|m
brama|gate|f
furtka|garden gate|f
drzwi|door|pl
klamka|door handle|f
zamek|lock; castle|m
klucz|key|m
dzwonek|doorbell; bell|m
domofon|intercom|m
skrzynka pocztowa|mailbox|f
okno|window|n
parapet|windowsill|m
roleta|roller blind|f
zasłona|curtain|f
firanka|net curtain|f
meble|furniture|pl
szafa|wardrobe|f
szafka|cupboard, cabinet|f
komoda|chest of drawers|f
szuflada|drawer|f
półka|shelf|f
regał|bookcase|m
stolik|small table|m
biurko|desk|n
fotel|armchair|m
kanapa|sofa|f
łóżko|bed|n
materac|mattress|m
poduszka|pillow, cushion|f
kołdra|duvet|f
koc|blanket|m
pościel|bed linen|f
prześcieradło|bed sheet|n
dywan|carpet, rug|m
wykładzina|fitted carpet|f
lustro|mirror|n
lampa|lamp|f
żarówka|light bulb|f
kontakt|socket; contact|m
gniazdko|power socket|n
włącznik|switch|m
kabel|cable|m
przedłużacz|extension lead|m
kaloryfer|radiator|m
ogrzewanie|heating|n
klimatyzacja|air conditioning|f
wentylator|fan|m
kominek|fireplace|m
piec|stove; furnace|m
wanna|bathtub|f
prysznic|shower|m
umywalka|washbasin|f
zlew|sink|m
kran|tap|m
muszla klozetowa|toilet bowl|f
pralka|washing machine|f
suszarka|dryer; hairdryer|f
żelazko|iron (for clothes)|n
deska do prasowania|ironing board|f
odkurzacz|vacuum cleaner|m
miotła|broom|f
szufelka|dustpan|f
mop|mop|m
wiadro|bucket|n
ścierka|cloth, rag|f
gąbka|sponge|f
płyn do naczyń|washing-up liquid|m
proszek do prania|washing powder|m
śmieci|rubbish|pl
kosz na śmieci|bin|m
worek|bag, sack|m
recykling|recycling|m
czynsz|rent|m
rachunek za prąd|electricity bill|m
prąd|electricity; current|m
gaz|gas|m
woda bieżąca|running water|f
właściciel|owner, landlord|m
lokator|tenant|m
najemca|tenant (in a contract)|m
umowa najmu|tenancy agreement|f
kaucja|deposit|f
sąsiedztwo|neighbourhood|n
remont|renovation|m
przeprowadzka|moving house|f
hydraulik|plumber|m
elektryk|electrician|m
awaria|breakdown, failure|f
usterka|fault, defect|f
ubranie|clothes|n
odzież|clothing|f
koszula|shirt|f
bluzka|blouse|f
koszulka|T-shirt|f
podkoszulek|vest, undershirt|m
sweter|sweater|m
bluza|sweatshirt|f
kamizelka|waistcoat|f
marynarka|jacket (suit)|f
garnitur|suit|m
kostium|suit (women's); costume|m
żakiet|women's jacket|m
płaszcz|coat|m
kurtka|jacket|f
kożuch|sheepskin coat|m
spodnie|trousers|pl
dżinsy|jeans|pl
szorty|shorts|pl
spódnica|skirt|f
sukienka|dress|f
piżama|pyjamas|f
szlafrok|bathrobe|m
bielizna|underwear|f
majtki|knickers, underpants|pl
biustonosz|bra|m
skarpetki|socks|pl
rajstopy|tights|pl
strój kąpielowy|swimsuit|m
kąpielówki|swimming trunks|pl
buty|shoes|pl
kozaki|boots (women's)|pl
trampki|sneakers|pl
sandały|sandals|pl
kapcie|slippers|pl
czapka|cap, hat|f
kapelusz|hat (with brim)|m
szalik|scarf|m
chusta|headscarf, shawl|f
rękawiczki|gloves|pl
pasek|belt; strap|m
krawat|tie|m
muszka|bow tie|f
kieszeń|pocket|f
guzik|button|m
zamek błyskawiczny|zip|m
kaptur|hood|m
rękaw|sleeve|m
kołnierz|collar|m
rozmiar|size|m
fason|cut, style|m
materiał|material, fabric|m
bawełna|cotton|f
wełna|wool|f
jedwab|silk|m
len|linen|m
torebka|handbag|f
plecak|backpack|m
portfel|wallet|m
parasol|umbrella|m
zegarek|watch|m
biżuteria|jewellery|f
pierścionek|ring|m
obrączka|wedding ring|f
naszyjnik|necklace|m
bransoletka|bracelet|f
kolczyki|earrings|pl
przebieralnia|fitting room|f
elegancki|elegant|adj
wygodny|comfortable|adj
modny|fashionable|adj
ciasny|tight|adj
luźny|loose|adj
w kratkę|checked|phr
w paski|striped|phr
w kropki|polka-dot|phr
`;
