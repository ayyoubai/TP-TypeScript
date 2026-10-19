# TypeScript Homework

## Description

This project contains six exercises to learn and practice TypeScript.

The exercises use wizards, houses, spells, decorators, and type guards.

## Technologies Used

- TypeScript
- Node.js
- npm

## Project Structure

```text
TP-TypeScript/
├── src/
│   ├── types.ts
│   ├── repository.ts
│   ├── decorators.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Exercises

### Exercise 1: Add a Wizard

Create a new wizard and generate an ID automatically.

### Exercise 2: Find Wizards by House

Find all wizards who belong to a specific house.

### Exercise 3: Extract a Type

Use `Extract` to create a type for spell-cast events.

### Exercise 4: Validate Spell Power

Create a decorator to reject spells with negative power.

### Exercise 5: Cache Results

Create a decorator to save calculation results and reuse them when the same arguments are used again.

The cache is separate for each object.

### Exercise 6: Type Guards

Use type guards to check if a house or a wizard is valid.

## Installation

Make sure Node.js and npm are installed.

Install the project dependencies:

```bash
npm install
```

## Run the Project

Run the TypeScript file:

```bash
npx tsx src/main.ts
```

## Check TypeScript Errors

Run the TypeScript compiler to check for errors:

```bash
npx tsc --noEmit
```

## Expected Results

The program demonstrates:

- Creating wizards with automatic IDs.
- Finding wizards by house.
- Handling spell-cast events.
- Rejecting spells with negative power.
- Reusing cached calculation results.
- Checking valid houses and wizards.

## Author

Ayyoub Elmahi

## Conclusion

This homework helped me practice important TypeScript concepts, including types, classes, decorators, utility types, and type guards.
