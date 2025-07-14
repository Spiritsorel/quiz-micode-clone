export const Questions = [
  // Variables & constantes
  {
    question: "Comment déclarer une variable qui ne peut pas être modifiée ?",
    answers: ["const", "let", "var"],
    correct: "const",
    explanation:
      "'const' permet de créer une variable dont la valeur ne peut pas être réassignée.",
    category: "Variables & constantes",
  },
  {
    question: "Quelle est la portée d'une variable déclarée avec 'let' ?",
    answers: ["Globale", "Locale au bloc", "Locale à la fonction"],
    correct: "Locale au bloc",
    explanation:
      "'let' crée une variable dont la portée est limitée au bloc dans lequel elle est définie.",
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
    explanation:
      "Les variables 'var' sont accessibles dans toute la fonction dans laquelle elles sont déclarées.",
    category: "Variables & constantes",
  },
  {
    question: "Peut-on redéclarer une variable avec 'const' ?",
    answers: ["Oui", "Non"],
    correct: "Non",
    explanation:
      "Une variable 'const' ne peut ni être réassignée, ni redéclarée dans le même scope.",
    category: "Variables & constantes",
  },
  {
    question: "Quelle est la différence principale entre 'var' et 'let' ?",
    answers: ["Scope", "Type de données", "Nom de variable"],
    correct: "Scope",
    explanation:
      "'let' a une portée de bloc alors que 'var' a une portée de fonction.",
    category: "Variables & constantes",
  },

  // Nombres
  {
    question: "Quelle méthode transforme une chaîne en nombre entier ?",
    answers: ["parseInt", "parseFloat", "Number"],
    correct: "parseInt",
    explanation:
      "'parseInt' convertit une chaîne en un entier (ex: '10.5' devient 10).",
    category: "Nombres",
  },
  {
    question: 'Quel est le résultat de 2 + "2" en JavaScript ?',
    answers: ["4", '"22"', "22", "Erreur"],
    correct: '"22"',
    explanation:
      "L'opérateur + entre un nombre et une chaîne provoque une concaténation. '2' + '2' = '22'.",
    category: "Nombres",
  },
  {
    question: "Comment arrondir un nombre à l'entier le plus proche ?",
    answers: ["Math.round()", "Math.floor()", "Math.ceil()"],
    correct: "Math.round()",
    explanation:
      "'Math.round()' arrondit au plus proche. 4.5 devient 5, 4.4 devient 4.",
    category: "Nombres",
  },
  {
    question: "Quelle est la valeur de NaN ?",
    answers: ["Un nombre", "Not a Number", "Une chaîne"],
    correct: "Not a Number",
    explanation:
      "'NaN' signifie 'Not a Number' et indique une opération mathématique invalide.",
    category: "Nombres",
  },
  {
    question: "Que renvoie Number('123abc') ?",
    answers: ["123", "NaN", "Erreur"],
    correct: "NaN",
    explanation:
      "'123abc' n'est pas un nombre pur, donc 'Number()' retourne NaN (Not a Number).",
    category: "Nombres",
  },

  // Chaînes de caractères (Strings)
  {
    question: "Quelle méthode retourne la longueur d'une chaîne ?",
    answers: [".length", ".size", ".count"],
    correct: ".length",
    explanation:
      "La propriété .length retourne le nombre de caractères dans une chaîne.",
    category: "Chaînes",
  },
  {
    question: "Comment concaténer deux chaînes ?",
    answers: ["Avec +", "Avec concat()", "Les deux"],
    correct: "Les deux",
    explanation:
      "On peut concaténer des chaînes avec '+' ou avec la méthode 'concat()'.",
    category: "Chaînes",
  },
  {
    question: "Quelle méthode transforme une chaîne en majuscules ?",
    answers: [".toUpperCase()", ".toLowerCase()", ".capitalize()"],
    correct: ".toUpperCase()",
    explanation:
      "La méthode .toUpperCase() retourne une nouvelle chaîne en majuscules.",
    category: "Chaînes",
  },
  {
    question: "Comment accéder au premier caractère d'une chaîne str ?",
    answers: ["str[0]", "str.charAt(0)", "Les deux"],
    correct: "Les deux",
    explanation:
      "str[0] et str.charAt(0) sont deux façons équivalentes d'accéder au 1er caractère.",
    category: "Chaînes",
  },
  {
    question: "Quelle méthode extrait une sous-chaîne ?",
    answers: [".substring()", ".slice()", ".substr()"],
    correct: ".substring()",
    explanation:
      "Les trois méthodes existent, mais .substring() est couramment utilisée pour extraire une sous-chaîne.",
    category: "Chaînes",
  },

  // Suite complète des questions avec explications

  // Fonctions
  {
    question: "Comment définir une fonction en JS ?",
    answers: [
      "function maFonction() {}",
      "def maFonction() {}",
      "func maFonction() {}",
    ],
    correct: "function maFonction() {}",
    explanation:
      "En JavaScript, une fonction se définit avec le mot-clé 'function', suivi du nom et des parenthèses.",
    category: "Fonctions",
  },
  {
    question: "Qu’est-ce qu’une fonction anonyme ?",
    answers: ["Fonction sans nom", "Fonction nommée", "Fonction fléchée"],
    correct: "Fonction sans nom",
    explanation:
      "Une fonction anonyme est une fonction qui n’a pas de nom et est souvent utilisée comme valeur ou callback.",
    category: "Fonctions",
  },
  {
    question: "Comment appeler une fonction qui s’appelle elle-même ?",
    answers: ["Fonction récursive", "Fonction circulaire", "Fonction miroir"],
    correct: "Fonction récursive",
    explanation:
      "Une fonction récursive est une fonction qui s'appelle elle-même pour résoudre un problème.",
    category: "Fonctions",
  },
  {
    question: "Quelle syntaxe pour une fonction fléchée ?",
    answers: ["() => {}", "function => {}", "=> function {}"],
    correct: "() => {}",
    explanation:
      "La fonction fléchée utilise la syntaxe () => {} et permet une écriture plus concise.",
    category: "Fonctions",
  },
  {
    question: "Que fait le mot-clé 'return' dans une fonction ?",
    answers: ["Renvoie une valeur", "Arrête la fonction", "Les deux"],
    correct: "Les deux",
    explanation:
      "'return' renvoie une valeur et arrête l’exécution de la fonction immédiatement.",
    category: "Fonctions",
  },

  // Objets
  {
    question: "Comment créer un objet vide ?",
    answers: ["{}", "[]", "new Object()"],
    correct: "{}",
    explanation:
      "La syntaxe '{}' crée un objet vide. 'new Object()' crée aussi un objet mais c’est moins utilisé.",
    category: "Objets",
  },
  {
    question: "Comment accéder à une propriété obj.nom ?",
    answers: ["obj.nom", "obj['nom']", "Les deux"],
    correct: "Les deux",
    explanation:
      "On peut accéder à une propriété avec la notation point ou crochet selon le contexte.",
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
    explanation:
      "On ajoute une propriété par assignation directe avec la notation point ou crochet.",
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
    explanation: "L’opérateur 'delete' supprime une propriété d’un objet.",
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
    explanation:
      "On peut utiliser l’opérateur 'in' ou la méthode 'hasOwnProperty' pour vérifier la présence d’une propriété.",
    category: "Objets",
  },

  // Tableaux
  {
    question: "Comment accéder au premier élément d’un tableau arr ?",
    answers: ["arr[0]", "arr.first()", "arr.get(0)"],
    correct: "arr[0]",
    explanation:
      "La notation entre crochets accède à l’élément à l’index donné (ici 0 pour le premier).",
    category: "Tableaux",
  },
  {
    question: "Quelle méthode ajoute un élément à la fin d’un tableau ?",
    answers: ["push()", "pop()", "shift()"],
    correct: "push()",
    explanation: "'push()' ajoute un élément à la fin d’un tableau.",
    category: "Tableaux",
  },
  {
    question: "Quelle méthode retire le premier élément d’un tableau ?",
    answers: ["shift()", "pop()", "splice()"],
    correct: "shift()",
    explanation:
      "'shift()' enlève le premier élément et décale les autres vers la gauche.",
    category: "Tableaux",
  },
  {
    question: "Comment vérifier si une variable est un tableau ?",
    answers: ["Array.isArray()", "typeof", "isArray()"],
    correct: "Array.isArray()",
    explanation:
      "'Array.isArray()' retourne true si la variable est un tableau.",
    category: "Tableaux",
  },
  {
    question: "Comment concaténer deux tableaux arr1 et arr2 ?",
    answers: ["arr1.concat(arr2)", "[...arr1, ...arr2]", "Les deux"],
    correct: "Les deux",
    explanation:
      "La méthode 'concat()' et l’opérateur de décomposition '...' permettent de fusionner deux tableaux.",
    category: "Tableaux",
  },

  // Boucles
  {
    question: "Quelle boucle est utilisée pour parcourir un tableau ?",
    answers: ["for", "while", "do...while"],
    correct: "for",
    explanation:
      "La boucle 'for' est idéale pour parcourir des tableaux avec un index.",
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
    explanation:
      "La boucle 'for' classique contient une initialisation, une condition, et un incrément.",
    category: "Boucles",
  },
  {
    question: "Quelle boucle s'exécute au moins une fois ?",
    answers: ["do...while", "while", "for"],
    correct: "do...while",
    explanation:
      "La boucle 'do...while' exécute au moins une fois avant de tester la condition.",
    category: "Boucles",
  },
  {
    question: "Comment sortir d'une boucle prématurément ?",
    answers: ["break", "continue", "return"],
    correct: "break",
    explanation: "'break' interrompt immédiatement la boucle.",
    category: "Boucles",
  },
  {
    question:
      "Quelle instruction passe à l'itération suivante dans une boucle ?",
    answers: ["continue", "break", "skip"],
    correct: "continue",
    explanation:
      "'continue' saute l’itération en cours et passe à la suivante.",
    category: "Boucles",
  },

  // Structures conditionnelles
  {
    question:
      "Quelle structure conditionnelle est utilisée pour tester plusieurs cas ?",
    answers: ["switch", "if", "while"],
    correct: "switch",
    explanation:
      "Le 'switch' teste une expression contre plusieurs cas possibles.",
    category: "Structures conditionnelles",
  },
  {
    question: "Comment écrire une condition 'si' en JavaScript ?",
    answers: ["if(condition) {}", "when(condition) {}", "cond(condition) {}"],
    correct: "if(condition) {}",
    explanation:
      "'if' est la structure conditionnelle pour tester une expression et exécuter du code si vrai.",
    category: "Structures conditionnelles",
  },
  {
    question: "Quelle est la syntaxe pour un 'else if' ?",
    answers: ["else if(condition) {}", "elseif {}", "elif {}"],
    correct: "else if(condition) {}",
    explanation:
      "'else if' permet de tester une autre condition si la première est fausse.",
    category: "Structures conditionnelles",
  },
  {
    question: "Quelle est la valeur de 'false' dans une condition ?",
    answers: ["Fausse", "Vraie", "Undefined"],
    correct: "Fausse",
    explanation:
      "'false' signifie que la condition est fausse et le bloc ne s’exécute pas.",
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
    explanation: "La condition ternaire est une forme abrégée de l’if/else.",
    category: "Structures conditionnelles",
  },

  // Null, Undefined & Early return
  {
    question: "Quelle valeur signifie absence de valeur ?",
    answers: ["null", "undefined", "NaN"],
    correct: "null",
    explanation: "'null' représente l'absence volontaire d'une valeur.",
    category: "Null & Undefined",
  },
  {
    question: "Quelle valeur signifie variable non définie ?",
    answers: ["undefined", "null", "false"],
    correct: "undefined",
    explanation:
      "'undefined' signifie qu'une variable a été déclarée mais pas assignée.",
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
    explanation:
      "Un 'early return' arrête la fonction immédiatement et retourne une valeur.",
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
    explanation:
      "L'early return évite des imbrications et rend le code plus lisible.",
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
    explanation:
      "La syntaxe correcte place le 'return' après la condition dans un 'if'.",
    category: "Early return",
  },
];
