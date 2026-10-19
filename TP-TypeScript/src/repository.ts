
import type { Wizard, NewWizard, House, Spell } from "./types.js";
import { ValidateSpellPower } from "./decorators.js";

export class WizardRepository {
  private wizards: Wizard[] = [];
  private nextId = 1;

  add(wizard: NewWizard): Wizard {
    const newWizard: Wizard = {
      id: this.nextId,
      ...wizard
    };

    this.wizards.push(newWizard);
    this.nextId++;

    return newWizard;
  }

  findByHouse(house: House): Wizard[] {
    return this.wizards.filter(
      wizard => wizard.house === house
    );
  }
}

export class SpellRepository {
  private spells: Spell[] = [];

  @ValidateSpellPower
  add(spell: Spell): void {
    this.spells.push(spell);
  }

  getAll(): Spell[] {
    return this.spells;
  }
}
