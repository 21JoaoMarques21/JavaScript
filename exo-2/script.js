// you can write js here
console.log('exo-2');
let myDate = new Date();  // Crée un nouvel objet Date avec la date et l'heure actuelles
let jourActuel = myDate.getDay();  // Récupère le jour actuel de la semaine (0 = dimanche, 6 = samedi)

let jourSemaineMessage;
let weekendMessage = "C'est le week-end.";  // Message pour le week-end

if (jourActuel >= 1 && jourActuel <= 5) {  // Si le jour est entre lundi (1) et vendredi (5)
    jourSemaineMessage = "C'est un jour de semaine.";
} else {  // Sinon, c'est le week-end (samedi ou dimanche)
    jourSemaineMessage = weekendMessage;
}

console.log(jourSemaineMessage);  // Affiche le message correspondant dans la console