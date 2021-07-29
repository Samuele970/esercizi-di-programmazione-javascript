/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var today = 2021;
var myYear = 1997;
var century = 100;

var myAge = today - myYear; //quanti anni ho
console.log(myAge);

var topAge = century - myAge; //quanto mi manca per arrivare a 100 anni
console.log(topAge);
