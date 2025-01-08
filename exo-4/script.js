// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
// Initialisation du tableau secretMessage
let secretMessage = ['Learning', 'to', 'code', 'is', 'easily', 'done'];

// 1. Supprimer le dernier élément du tableau
secretMessage.pop();

// 2. Ajouter les mots 'to' et 'program' à la fin du tableau
secretMessage.push('to', 'program');

// 3. Changer le mot 'easily' en 'right' en accédant à l'index correct
secretMessage[4] = 'right';  // L'index de 'easily' est 4

// 4. Supprimer le premier élément du tableau
secretMessage.shift();

// 5. Ajouter le mot "Programming" au début du tableau
secretMessage.unshift('Programming');

// 6. Remplacer la série de cinq mots : 'get', 'right', 'the', 'first', 'time' par un seul mot : 'know'
secretMessage.splice(2, 5, 'know'); // À partir de l'index 2, on supprime 5 éléments et on les remplace par 'know'

// 7. Utiliser la méthode .join pour afficher le message secret dans la console
console.log(secretMessage.join(' ')); // Affiche le message en une seule chaîne