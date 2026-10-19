
import { WizardRepository, SpellRepository } from "./repository.js";
import { Cache } from "./decorators.js";
import type { SpellCastEvent, House, Wizard } from "./types.js";

// Exercises 1 and 2: Add and search for wizards

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

console.log("Harry:", wizard);
console.log("Hermione:", hermione);

console.log(
  "Gryffindor wizards:",
  repository.findByHouse("Gryffindor")
);

console.log(
  "Slytherin wizards:",
  repository.findByHouse("Slytherin")
);

// Exercise 3: Use Extract for spell-cast events

function handleSpell(event: SpellCastEvent): void {
  console.log(
    event.wizardId,
    "cast the spell",
    event.spell
  );
}

handleSpell({
  type: "spell-cast",
  wizardId: 1,
  spell: "Expelliarmus"
});

// Exercise 4: Validate spell power

const spellRepository = new SpellRepository();

spellRepository.add({
  name: "Expelliarmus",
  power: 10
});

try {
  spellRepository.add({
    name: "Invalid Spell",
    power: -5
  });
} catch (error) {
  console.log("Error:", (error as Error).message);
}

console.log("Final spell list:", spellRepository.getAll());

// Exercise 5: Cache calculation results

class CalculationService {
  @Cache
  add(a: number, b: number): number {
    console.log("Calculating...");
    return a + b;
  }
}

const service = new CalculationService();

console.log(service.add(2, 3));
console.log(service.add(2, 3));
console.log(service.add(4, 6));

// Exercise 6: Check valid houses and wizards

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

console.log("Gryffindor is valid:", isHouse("Gryffindor"));
console.log("Durmstrang is valid:", isHouse("Durmstrang"));
console.log("Harry is a valid wizard:", isWizard(wizard));

console.log(
  "Invalid wizard:",
  isWizard({
    id: 3,
    name: "Draco",
    house: "Durmstrang",
    level: 4,
    active: true
  })
);
