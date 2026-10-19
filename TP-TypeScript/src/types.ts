
export type House =
  | "Gryffindor"
  | "Slytherin"
  | "Ravenclaw"
  | "Hufflepuff";

export type Wizard = {
  id: number;
  name: string;
  house: House;
  level: number;
  active: boolean;
};

export type NewWizard = Omit<Wizard, "id">;

export type AcademyEvent =
  | {
      type: "spell-cast";
      wizardId: number;
      spell: string;
    }
  | {
      type: "wizard-sorted";
      wizardId: number;
      house: House;
    };

export type SpellCastEvent = Extract<
  AcademyEvent,
  { type: "spell-cast" }
>;

export type Spell = {
  name: string;
  power: number;
};
