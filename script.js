//Create arrays of 10 words each for the six classes outlined.
//Use a DOM query to return a list of elements based on the class names provided.
//For each of the NodeLists returned, loop through the list and replace the text content with the matching type from the arrays you created
//Classes Provided: Noun, Verb, Adjective, Adverb, Plural-Noun, Body-part;

var nounArray = document.getElementsByClassName('noun');

for (var n = 0; n < nounArray.length; n++) {
var nouns = ['dancer', 'dj', 'scoundral', 'coward', 'king', 'pioneer', 'master', 'liar', 'titan', 'goliath', 'monster', 'burger', 'clown'];

var random = Math.floor(Math.random() * nouns.length);
  nounArray[n].textContent = nouns[random];
  }


  var verbArray = document.getElementsByClassName('verb');

  for (var v = 0; v < verbArray.length; v++) {
  var verbs = ['sabotage', 'kill', 'talk', 'dance', 'fight', 'cry', 'kiss', 'lack', 'watch', 'act', 'lynch', 'run', 'jump'];

  var random = Math.floor(Math.random() * verbs.length);
    verbArray[v].textContent = verbs[random];
    }


var adverbArray = document.getElementsByClassName('adverb');

for (var av = 0; av < adverbArray.length; av++) {
  var adverbs = ['cheerfully', 'angrily', 'mechanically', 'sadly', 'exactly', 'elegantly', 'madly', 'blissfully', 'terribly', 'gently', 'mostly', 'significantly', 'awkwardly'];

  var random = Math.floor(Math.random() * adverbs.length);
  adverbArray[av].textContent = adverbs[random];
      }

var adjectivesArray = document.getElementsByClassName('adjective');

for (var a = 0; a < adjectivesArray.length; a++) {
  var adjectives = ['silly', 'wicked', 'brown', 'whispering', 'unruly', 'outrageous', 'illegal', 'aberrant', 'resonant', 'knowledgeable', 'nauseating', 'colorful', 'gigantic'];

  var random = Math.floor(Math.random() * adjectives.length);
  adjectivesArray[a].textContent = adjectives[random];
      }

var pluralNounArray = document.getElementsByClassName('plural-noun');

for (var p = 0; p < pluralNounArray.length; p++) {
  var pluralNouns = ['djays', 'dancers', 'pirates', 'zombies', 'women', 'brothers', 'sisters', 'soldiers', 'killers', 'thieves', 'murderers', 'ministers', 'frauds'];

  var random = Math.floor(Math.random() * pluralNouns.length);
  pluralNounArray[p].textContent = pluralNouns[random];
}
var bodyPartArray = document.getElementsByClassName('body-part');

for (var z = 0; z < bodyPartArray.length; z++) {
  var bodyParts = ['Nose', 'Hand', 'Foot', 'Finger', 'Chest', 'Shoulder', 'Femur', 'Knee', 'Eye', 'Heart', 'Elbow', 'Tongue', 'Scrotum'];

  var random = Math.floor(Math.random() * bodyParts.length);
  bodyPartArray[z].textContent = bodyParts[random];
}

//Create function getWord with paramaters being type that returns a word each time function is called.
const getWord = function(type) {
  selectRand = Math.floor(Math.random() * verbArray.length);
  if (type == "verb") {
    return verbs[random];
  } else if (type == "noun") {
    return nouns[random];
  } else if (type == "adverb") {
    return adverbs[random];
  } else if (type == "bodyparts") {
    return bodyParts[random];
  } else if (type == "adjectives") {
    return adjectives[random];
  } else if (type == "pluralnoun") {
    return pluralNouns[random];
  }
}
