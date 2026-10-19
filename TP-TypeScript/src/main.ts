import { WizardRepository, SpellRepository } from "./repository.js";
import { Cache } from "./decorators.js";
import type { SpellCastEvent, House, Wizard } from "./types.js";

// Exercice 1 et 2 : ajouter et rechercher des sorciers

const repository = new WizardRepository();

const wizard = repository.add({
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true
});

const hermione = repository.add({
  name: "Hermione Granger",
  house: "Gryffindor",
  level: 6,
  active: true
});

console.log("Harry :", wizard);
console.log("Hermione :", hermione);

console.log(
  "Sorciers de Gryffindor :",
  repository.findByHouse("Gryffindor")
);

console.log(
  "Sorciers de Slytherin :",
  repository.findByHouse("Slytherin")
);

// Exercice 3 : utiliser Extract pour les événements de sorts

function handleSpell(event: SpellCastEvent): void {
  console.log(
    event.wizardId,
    "a lancé le sort",
    event.spell
  );
}

handleSpell({
  type: "spell-cast",
  wizardId: 1,
  spell: "Expelliarmus"
});

// Exercice 4 : valider la puissance des sorts

const spellRepository = new SpellRepository();

spellRepository.add({
  name: "Expelliarmus",
  power: 10
});

try {
  spellRepository.add({
    name: "Sort invalide",
    power: -5
  });
} catch (error) {
  console.log("Erreur :", (error as Error).message);
}

console.log("Liste finale des sorts :", spellRepository.getAll());

// Exercice 5 : mettre en cache les résultats

class CalculationService {
  @Cache
  add(a: number, b: number): number {
    console.log("Calcul en cours...");
    return a + b;
  }
}

const service = new CalculationService();

console.log(service.add(2, 3));
console.log(service.add(2, 3));
console.log(service.add(4, 6));

// Exercice 6 : vérifier les maisons autorisées

function isHouse(value: string): value is House {
  return [
    "Gryffindor",
    "Slytherin",
    "Ravenclaw",
    "Hufflepuff"
  ].includes(value);
}

function isWizard(value: any): value is Wizard {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    isHouse(value.house) &&
    typeof value.level === "number" &&
    typeof value.active === "boolean"
  );
}

console.log("Gryffindor :", isHouse("Gryffindor"));
console.log("Durmstrang :", isHouse("Durmstrang"));
console.log("Harry est un sorcier :", isWizard(wizard));

console.log(
  "Sorcier invalide :",
  isWizard({
    id: 3,
    name: "Drago",
    house: "Durmstrang",
    level: 4,
    active: true
  })
);