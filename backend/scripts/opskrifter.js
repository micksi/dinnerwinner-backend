/**
 * Noter til dataen
 * - Kartofler findes ikke i ingredienserne
 * - Kun 14 Types
 */
const fs = require('fs')

const str = fs.readFileSync('./../src/assets/opskrifter.json', { encoding: 'utf8' });
const bundle = JSON.parse(str)
const recipes = bundle.Recipes

const allTypes = recipes.map(r => r.Types).reduce((acc, x) => acc.concat(x))
const uniqueTypes = new Set(allTypes)
const typesCount = {}
uniqueTypes.forEach(t => { typesCount[t] = 0 })
allTypes.forEach(t => { typesCount[t] = typesCount[t] + 1 })

const allIngredients = recipes.map(r => r.Ingredients).reduce((acc, x) => acc.concat(x))
const uniqueIngredients = new Set(allIngredients)
const keywordCount = {}
uniqueIngredients.forEach(t => { keywordCount[t] = 0 })
allIngredients.forEach(t => { keywordCount[t] = keywordCount[t] + 1 })



// ######################################################################

const strs = fs.readFileSync('./../src/assets/ingredients.json', { encoding: 'utf8' });
const ingredients = JSON.parse(strs)

Object.keys(keywordCount)
  .forEach(k => console.log(k, keywordCount[k] + '  \t', ingredients.find(ing => ing.Id === Number(k)).Header))

console.log("Keywords", keywordCount)
console.log("Types", typesCount)

// output

// id   stk   navn
// 2550 13  	Cox Orange
// 2562 91    Rødløg
// 2566 6  	  Belle de Boskoop
// 2573 2  	  Jonagold
// 2575 2  	  Rød Gråsten
// 2576 126  	 Tomat
// 2577 41  	 Persillerod
// 2578 46  	 Blomkål
// 2579 51  	 Knoldselleri
// 2582 22  	 Bladselleri
// 2583 44  	 Broccoli
// 2588 53  	 Rødbede
// 2589 38  	 Ærter
// 2592 139  	 Løg
// 2599 19  	 Rødkål
// 2600 49  	 Dild
// 2601 89  	 Basilikum, grøn
// 2603 35  	 Rosmarin
// 2609 118  	 Æbler
// 2610 17  	 Estragon
// 2613 9  	 Peberrod
// 2614 27  	 Bredbladet persille
// 2619 45  	 Mynte
// 2621 2  	 Discovery
// 2625 53  	 Purløg
// 2626 28  	 Oregano
// 2630 21  	 Basilikum, rød
// 2631 159  	 Gulerødder
// 2634 20  	 Grønkål
// 2635 3  	 Guldborg
// 2637 115  	 Persille
// 2645 12  	 Rød Ingrid Marie
// 2650 40  	 Porre
// 2652 69  	 Koriander
// 2654 40  	 Hvidkål
// 2656 10  	 Rosenkål
// 2657 35  	 Jordskokker
// 2664 2  	 Rød Aroma
// 2667 51  	 Pastinak
// 2669 3  	 Elstar
// 2670 49  	 Peberfrugt
// 2674 1  	 Pigeon
// 2675 2  	 Beder, farvet
// 2724 14  	 Cocktailtomat
// 2727 30  	 Babyleave, grøn
// 2733 1  	 Enoki
// 2741 45  	 Cherrytomat
// 2744 33  	 Rabarber
// 2747 11  	 Blommer
// 2751 39  	 Hindbær
// 2754 1  	 Skorzonerrod
// 2755 9  	 Savoykål
// 2763 1  	 Mangold, rød
// 2780 19  	 Blåbær
// 2783 2  	 Skoleagurk
// 2785 2  	 Conference
// 2794 3  	 Stikkelsbær
// 2796 3  	 Glaskål
// 2803 43  	 Squash
// 2806 5  	 Feldsalat
// 2811 38  	 Champignon
// 2812 51  	 Timian
// 2828 23  	 Kørvel
// 2838 2  	 Gulerod, farvet
// 2845 6  	 Egebladsalat, grøn
// 2850 8  	 Kejserhat
// 2851 2  	 Frillice/ærtesalat
// 2861 9  	 Krølsalat
// 2872 1  	 Spirer
// 2877 8  	 Hokkaido
// 2879 6  	 Citronmelisse
// 2880 36  	 Asparges, grønne
// 2882 15  	 Majs
// 2884 2  	 Alexander Lukas
// 2885 11  	 Brøndkarse
// 2899 19  	 Fennikel
// 2901 20  	 Hjertesalat
// 2908 34  	 Radiser
// 2909 12  	 Brombær
// 2913 61  	 Forårsløg
// 2916 27  	 Rucola
// 2928 13  	 Østershat
// 2932 4  	 Sukkerærter
// 2934 8  	 Clara Friis
// 2942 58  	 Spidskål
// 2944 33  	 Babyspinat
// 2960 10  	 Tomat, rund
// 2962 9  	 Solbær
// 2966 4  	 Friseesalat
// 2973 1  	 Champignon, Brun
// 2975 16  	 Babyleave, rød
// 2995 1  	 Bøftomat
// 3006 10  	 Blommetomat
// 3008 5  	 Lollo Bionda
// 3009 4  	 Salvie
// 3015 13  	 Iceberg
// 3019 3  	 Sommerhvidkål
// 3023 2  	 Egebladsalat, rød
// 3027 3  	 Shii-take
// 3033 27  	 Pærer
// 3035 15  	 Romainesalat
// 3044 5  	 Bøgehat
// 3054 29  	 Spinat
// 3056 3  	 Kinakål
// 3060 1  	 Concorde
// 3066 3  	 Portobello
// 3068 16  	 Skalotteløg
// 3071 6  	 Asparges, hvide
// 3074 69  	 Jordbær
// 3075 1  	 Majroe
// 3090 15  	 Bønner, grønne
// 3096 4  	 Lollo Rossa
// 3099 10  	 Hovedsalat
// 3109 9  	 Ribs
// 3111 1  	 Chili
// 3120 5  	 Løg med top
// 3123 112  	 Agurk
// 3124 2  	 Ærteskud
// 3128 4  	 Kirsebær
// Keywords { '2550': 13,
//   '2562': 91,
//   '2566': 6,
//   '2573': 2,
//   '2575': 2,
//   '2576': 126,
//   '2577': 41,
//   '2578': 46,
//   '2579': 51,
//   '2582': 22,
//   '2583': 44,
//   '2588': 53,
//   '2589': 38,
//   '2592': 139,
//   '2599': 19,
//   '2600': 49,
//   '2601': 89,
//   '2603': 35,
//   '2609': 118,
//   '2610': 17,
//   '2613': 9,
//   '2614': 27,
//   '2619': 45,
//   '2621': 2,
//   '2625': 53,
//   '2626': 28,
//   '2630': 21,
//   '2631': 159,
//   '2634': 20,
//   '2635': 3,
//   '2637': 115,
//   '2645': 12,
//   '2650': 40,
//   '2652': 69,
//   '2654': 40,
//   '2656': 10,
//   '2657': 35,
//   '2664': 2,
//   '2667': 51,
//   '2669': 3,
//   '2670': 49,
//   '2674': 1,
//   '2675': 2,
//   '2724': 14,
//   '2727': 30,
//   '2733': 1,
//   '2741': 45,
//   '2744': 33,
//   '2747': 11,
//   '2751': 39,
//   '2754': 1,
//   '2755': 9,
//   '2763': 1,
//   '2780': 19,
//   '2783': 2,
//   '2785': 2,
//   '2794': 3,
//   '2796': 3,
//   '2803': 43,
//   '2806': 5,
//   '2811': 38,
//   '2812': 51,
//   '2828': 23,
//   '2838': 2,
//   '2845': 6,
//   '2850': 8,
//   '2851': 2,
//   '2861': 9,
//   '2872': 1,
//   '2877': 8,
//   '2879': 6,
//   '2880': 36,
//   '2882': 15,
//   '2884': 2,
//   '2885': 11,
//   '2899': 19,
//   '2901': 20,
//   '2908': 34,
//   '2909': 12,
//   '2913': 61,
//   '2916': 27,
//   '2928': 13,
//   '2932': 4,
//   '2934': 8,
//   '2942': 58,
//   '2944': 33,
//   '2960': 10,
//   '2962': 9,
//   '2966': 4,
//   '2973': 1,
//   '2975': 16,
//   '2995': 1,
//   '3006': 10,
//   '3008': 5,
//   '3009': 4,
//   '3015': 13,
//   '3019': 3,
//   '3023': 2,
//   '3027': 3,
//   '3033': 27,
//   '3035': 15,
//   '3044': 5,
//   '3054': 29,
//   '3056': 3,
//   '3060': 1,
//   '3066': 3,
//   '3068': 16,
//   '3071': 6,
//   '3074': 69,
//   '3075': 1,
//   '3090': 15,
//   '3096': 4,
//   '3099': 10,
//   '3109': 9,
//   '3111': 1,
//   '3120': 5,
//   '3123': 112,
//   '3124': 2,
//   '3128': 4 }
// Types { '2551': 165,
//   '2615': 164,
//   '2632': 92,
//   '2638': 23,
//   '2643': 142,
//   '2647': 132,
//   '2649': 12,
//   '2660': 142,
//   '3069': 38,
//   '4094': 7,
//   '4279': 8,
//   '4379': 5,
//   '4419': 2,
//   '4633': 346 }
