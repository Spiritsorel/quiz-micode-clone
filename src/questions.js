export const Questions = [
  // Variables & constantes
  {
    question: "Comment déclarer une variable qui ne peut pas être modifiée ?",
    answers: ["const", "let", "var"],
    correct: "const",
    category: "Variables & constantes",
  },
  {
    question: "Quelle est la portée d'une variable déclarée avec 'let' ?",
    answers: ["Globale", "Locale au bloc", "Locale à la fonction"],
    correct: "Locale au bloc",
    category: "Variables & constantes",
  },
  {
    question: "Que fait le mot-clé 'var' ?",
    answers: [
      "Déclare une variable globale",
      "Déclare une variable locale",
      "Déclare une variable avec portée fonction",
    ],
    correct: "Déclare une variable avec portée fonction",
    category: "Variables & constantes",
  },
  {
    question: "Peut-on redéclarer une variable avec 'const' ?",
    answers: ["Oui", "Non"],
    correct: "Non",
    category: "Variables & constantes",
  },
  {
    question: "Quelle est la différence principale entre 'var' et 'let' ?",
    answers: ["Scope", "Type de données", "Nom de variable"],
    correct: "Scope",
    category: "Variables & constantes",
  },

  // Nombres
  {
    question: "Quelle méthode transforme une chaîne en nombre entier ?",
    answers: ["parseInt", "parseFloat", "Number"],
    correct: "parseInt",
    category: "Nombres",
  },
  {
    question: 'Quel est le résultat de 2 + "2" en JavaScript ?',
    answers: ["4", '"22"', "22", "Erreur"],
    correct: '"22"',
    category: "Nombres",
  },
  {
    question: "Comment arrondir un nombre à l'entier le plus proche ?",
    answers: ["Math.round()", "Math.floor()", "Math.ceil()"],
    correct: "Math.round()",
    category: "Nombres",
  },
  {
    question: "Quelle est la valeur de NaN ?",
    answers: ["Un nombre", "Not a Number", "Une chaîne"],
    correct: "Not a Number",
    category: "Nombres",
  },
  {
    question: "Que renvoie Number('123abc') ?",
    answers: ["123", "NaN", "Erreur"],
    correct: "NaN",
    category: "Nombres",
  },

  // Chaînes de caractères (Strings)
  {
    question: "Quelle méthode retourne la longueur d'une chaîne ?",
    answers: [".length", ".size", ".count"],
    correct: ".length",
    category: "Chaînes",
  },
  {
    question: "Comment concaténer deux chaînes ?",
    answers: ["Avec +", "Avec concat()", "Les deux"],
    correct: "Les deux",
    category: "Chaînes",
  },
  {
    question: "Quelle méthode transforme une chaîne en majuscules ?",
    answers: [".toUpperCase()", ".toLowerCase()", ".capitalize()"],
    correct: ".toUpperCase()",
    category: "Chaînes",
  },
  {
    question: "Comment accéder au premier caractère d'une chaîne str ?",
    answers: ["str[0]", "str.charAt(0)", "Les deux"],
    correct: "Les deux",
    category: "Chaînes",
  },
  {
    question: "Quelle méthode extrait une sous-chaîne ?",
    answers: [".substring()", ".slice()", ".substr()"],
    correct: ".substring()",
    category: "Chaînes",
  },

  // Fonctions
  {
    question: "Comment définir une fonction en JS ?",
    answers: [
      "function maFonction() {}",
      "def maFonction() {}",
      "func maFonction() {}",
    ],
    correct: "function maFonction() {}",
    category: "Fonctions",
  },
  {
    question: "Qu’est-ce qu’une fonction anonyme ?",
    answers: ["Fonction sans nom", "Fonction nommée", "Fonction fléchée"],
    correct: "Fonction sans nom",
    category: "Fonctions",
  },
  {
    question: "Comment appeler une fonction qui s’appelle elle-même ?",
    answers: ["Fonction récursive", "Fonction circulaire", "Fonction miroir"],
    correct: "Fonction récursive",
    category: "Fonctions",
  },
  {
    question: "Quelle syntaxe pour une fonction fléchée ?",
    answers: ["() => {}", "function => {}", "=> function {}"],
    correct: "() => {}",
    category: "Fonctions",
  },
  {
    question: "Que fait le mot-clé 'return' dans une fonction ?",
    answers: ["Renvoie une valeur", "Arrête la fonction", "Les deux"],
    correct: "Les deux",
    category: "Fonctions",
  },

  // Objets
  {
    question: "Comment créer un objet vide ?",
    answers: ["{}", "[]", "new Object()"],
    correct: "{}",
    category: "Objets",
  },
  {
    question: "Comment accéder à une propriété obj.nom ?",
    answers: ["obj.nom", "obj['nom']", "Les deux"],
    correct: "Les deux",
    category: "Objets",
  },
  {
    question: "Comment ajouter une propriété à un objet ?",
    answers: [
      "obj.propriété = valeur",
      "obj.add(propriété, valeur)",
      "obj['propriété'] = valeur",
    ],
    correct: "obj.propriété = valeur",
    category: "Objets",
  },
  {
    question: "Quelle méthode supprime une propriété d’un objet ?",
    answers: [
      "delete obj.propriété",
      "remove(obj.propriété)",
      "obj.remove('propriété')",
    ],
    correct: "delete obj.propriété",
    category: "Objets",
  },
  {
    question: "Comment vérifier si une propriété existe ?",
    answers: [
      "'propriété' in obj",
      "obj.hasOwnProperty('propriété')",
      "Les deux",
    ],
    correct: "Les deux",
    category: "Objets",
  },

  // Tableaux
  {
    question: "Comment accéder au premier élément d’un tableau arr ?",
    answers: ["arr[0]", "arr.first()", "arr.get(0)"],
    correct: "arr[0]",
    category: "Tableaux",
  },
  {
    question: "Quelle méthode ajoute un élément à la fin d’un tableau ?",
    answers: ["push()", "pop()", "shift()"],
    correct: "push()",
    category: "Tableaux",
  },
  {
    question: "Quelle méthode retire le premier élément d’un tableau ?",
    answers: ["shift()", "pop()", "splice()"],
    correct: "shift()",
    category: "Tableaux",
  },
  {
    question: "Comment vérifier si une variable est un tableau ?",
    answers: ["Array.isArray()", "typeof", "isArray()"],
    correct: "Array.isArray()",
    category: "Tableaux",
  },
  {
    question: "Comment concaténer deux tableaux arr1 et arr2 ?",
    answers: ["arr1.concat(arr2)", "[...arr1, ...arr2]", "Les deux"],
    correct: "Les deux",
    category: "Tableaux",
  },

  // Boucles
  {
    question: "Quelle boucle est utilisée pour parcourir un tableau ?",
    answers: ["for", "while", "do...while"],
    correct: "for",
    category: "Boucles",
  },
  {
    question: "Quelle est la syntaxe d'une boucle 'for' ?",
    answers: [
      "for(let i=0; i<10; i++)",
      "for(i=0; i<10)",
      "for i in range(10)",
    ],
    correct: "for(let i=0; i<10; i++)",
    category: "Boucles",
  },
  {
    question: "Quelle boucle s'exécute au moins une fois ?",
    answers: ["do...while", "while", "for"],
    correct: "do...while",
    category: "Boucles",
  },
  {
    question: "Comment sortir d'une boucle prématurément ?",
    answers: ["break", "continue", "return"],
    correct: "break",
    category: "Boucles",
  },
  {
    question:
      "Quelle instruction passe à l'itération suivante dans une boucle ?",
    answers: ["continue", "break", "skip"],
    correct: "continue",
    category: "Boucles",
  },

  // Structures conditionnelles
  {
    question:
      "Quelle structure conditionnelle est utilisée pour tester plusieurs cas ?",
    answers: ["switch", "if", "while"],
    correct: "switch",
    category: "Structures conditionnelles",
  },
  {
    question: "Comment écrire une condition 'si' en JavaScript ?",
    answers: ["if(condition) {}", "when(condition) {}", "cond(condition) {}"],
    correct: "if(condition) {}",
    category: "Structures conditionnelles",
  },
  {
    question: "Quelle est la syntaxe pour un 'else if' ?",
    answers: ["else if(condition) {}", "elseif {}", "elif {}"],
    correct: "else if(condition) {}",
    category: "Structures conditionnelles",
  },
  {
    question: "Quelle est la valeur de 'false' dans une condition ?",
    answers: ["Fausse", "Vraie", "Undefined"],
    correct: "Fausse",
    category: "Structures conditionnelles",
  },
  {
    question: "Comment écrire une condition ternaire ?",
    answers: [
      "condition ? expr1 : expr2",
      "if condition then",
      "ternary(condition)",
    ],
    correct: "condition ? expr1 : expr2",
    category: "Structures conditionnelles",
  },

  // Null, Undefined & Early return
  {
    question: "Quelle valeur signifie absence de valeur ?",
    answers: ["null", "undefined", "NaN"],
    correct: "null",
    category: "Null & Undefined",
  },
  {
    question: "Quelle valeur signifie variable non définie ?",
    answers: ["undefined", "null", "false"],
    correct: "undefined",
    category: "Null & Undefined",
  },
  {
    question: "Que fait un 'early return' dans une fonction ?",
    answers: [
      "Interrompt la fonction avant la fin",
      "Continue l'exécution",
      "Rien",
    ],
    correct: "Interrompt la fonction avant la fin",
    category: "Early return",
  },
  {
    question: "Pourquoi utiliser un early return ?",
    answers: [
      "Simplifier le code",
      "Complexifier le code",
      "Ralentir le programme",
    ],
    correct: "Simplifier le code",
    category: "Early return",
  },
  {
    question: "Quelle est la syntaxe correcte d'un early return ?",
    answers: [
      "if (!condition) return;",
      "return if (!condition);",
      "if condition then return;",
    ],
    correct: "if (!condition) return;",
    category: "Early return",
  },
];
