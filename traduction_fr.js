/**
 * Script de traduction pour Vampire Survivors Build Planner.
 * Basé sur les termes du wiki officiel français (Fandom).
 * * INSTRUCTIONS D'INSTALLATION :
 * 1. Placez ce fichier (traduction_fr.js) dans le même dossier que data.js.
 * 2. Dans votre fichier index.html, ajoutez la ligne suivante :
 * <script src="traduction_fr.js"></script>
 * Juste en dessous de la ligne existante : <script src="data.js"></script>
 */

const vsTranslationsFR = {
  // --- Textes de l'interface (UI) ---
  ui: {
    "Character": "Personnage",
    "Weapons": "Armes",
    "Passives": "Objets passifs",
    "Accessories": "Objets passifs",
    "Evolutions": "Évolutions",
    "Synergies": "Synergies",
    "Clear": "Effacer",
    "Share": "Partager",
    "Random": "Aléatoire",
    "Search...": "Rechercher...",
    "Vampire Survivors Build Planner": "Planificateur de Build Vampire Survivors"
  },

  // --- Armes de base ---
  weapons: {
    "Whip": "Fouet",
    "Magic Wand": "Baguette magique",
    "Knife": "Poignard",
    "Axe": "Hache",
    "Cross": "Croix",
    "King Bible": "Bible du roi",
    "Fire Wand": "Baguette de feu",
    "Garlic": "Ail",
    "Santa Water": "Eau sainte",
    "Runetracer": "Traqueur de runes",
    "Lightning Ring": "Bague du tonnerre",
    "Pentagram": "Pentagramme",
    "Peachone": "Pigeonne",
    "Ebony Wings": "Ailes d'ébène",
    "Phiera Der Tuphello": "Phiera Der Tuphello",
    "Eight The Sparrow": "Huit le moineau",
    "Gatti Amari": "Gatti Amari",
    "Song of Mana": "Chanson de Mana",
    "Shadow Pinion": "Shadow Pinion",
    "Clock Lancet": "Bistouri d'horloger",
    "Laurel": "Laurier",
    "Bone": "Os",
    "Cherry Bomb": "Bombe Cerise",
    "Carréllo": "Carréllo",
    "Celestial Dusting": "Celestial Dusting"
  },

  // --- Évolutions & Unions ---
  evolutions: {
    "Bloody Tear": "Larme de sang",
    "Holy Wand": "Sainte baguette",
    "Thousand Edge": "Mille et une lames",
    "Death Spiral": "Spirale Fatale",
    "Heaven Sword": "Épée céleste",
    "Unholy Vespers": "Vêpres impies",
    "Hellfire": "Feu de l'enfer",
    "Soul Eater": "Mangeur d'âmes",
    "La Borra": "La Borra",
    "NO FUTURE": "NO FUTURE",
    "Thunder Loop": "Boucle du tonnerre",
    "Gorgeous Moon": "Gorgeous Moon",
    "Vicious Hunger": "Vicious Hunger",
    "Mannajja": "Mannajja",
    "Valkyrie Turner": "Valkyrie Turner",
    "Infinite Corridor": "Infinite Corridor",
    "Crimson Shroud": "Crimson Shroud",
    "Vandalier": "Vandalier",
    "Phieraggi": "Phieraggi"
  },

  // --- Objets Passifs (Nécessaires aux évolutions) ---
  passives: {
    "Hollow Heart": "Coeur vide",
    "Empty Tome": "Tome vierge",
    "Bracer": "Fortifiant",
    "Candelabrador": "Chandelabrador",
    "Clover": "Trèfle",
    "Spellbinder": "Reliure magique",
    "Spinach": "Épinard",
    "Pummarola": "Pummarola",
    "Attractorb": "Attractorb",
    "Armor": "Armure",
    "Duplicator": "Duplicator",
    "Crown": "Couronne",
    "Stone Mask": "Masque de pierre",
    "Skull O'Maniac": "Crâne O'Maniac",
    "Wings": "Ailes"
  }
};

// --- Logique d'application de la traduction ---

// 1. Traduction des données JS (S'exécute immédiatement après le chargement de data.js)
const applyTranslationToData = (itemArray, dictionary) => {
  if (!Array.isArray(itemArray)) return;
  itemArray.forEach(item => {
    // Si l'objet a une propriété 'name' qui correspond à notre dictionnaire
    if (item.name && dictionary[item.name]) {
      item.name = dictionary[item.name];
    }
  });
};

// Vérification de l'existence des variables globales provenant de data.js
if (typeof weapons !== 'undefined') {
  applyTranslationToData(weapons, vsTranslationsFR.weapons);
  applyTranslationToData(weapons, vsTranslationsFR.evolutions);
}
if (typeof passives !== 'undefined') {
  applyTranslationToData(passives, vsTranslationsFR.passives);
}
// Optionnel : s'il y a un tableau séparé pour les évolutions
if (typeof evolutions !== 'undefined') {
  applyTranslationToData(evolutions, vsTranslationsFR.evolutions);
}

// 2. Traduction de l'interface HTML (S'exécute une fois la page chargée)
document.addEventListener("DOMContentLoaded", () => {
  // Parcours basique pour traduire les titres (h1, h2, h3) et boutons/labels
  const elementsToTranslate = document.querySelectorAll('h1, h2, h3, h4, .title, .label, button');
  
  elementsToTranslate.forEach(el => {
    // Si le texte de l'élément correspond à une clé dans la section UI du dictionnaire
    const originalText = el.textContent.trim();
    if (vsTranslationsFR.ui[originalText]) {
      el.textContent = vsTranslationsFR.ui[originalText];
    }
  });

  // Traduction spécifique pour le champ de recherche
  const searchInput = document.querySelector('input[type="search"], input[type="text"]');
  if (searchInput && searchInput.placeholder === "Search...") {
    searchInput.placeholder = vsTranslationsFR.ui["Search..."];
  }
});
