
import type { Spell } from "./types.js";

export function ValidateSpellPower(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (spell: Spell) {
    if (spell.power < 0) {
      throw new Error("Spell power cannot be negative!");
    }

    return originalMethod.call(this, spell);
  };

  return descriptor;
}

const instanceCaches = new WeakMap<object, Map<string, any>>();

export function Cache(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const instance = this as object;

    if (!instanceCaches.has(instance)) {
      instanceCaches.set(instance, new Map<string, any>());
    }

    const cache = instanceCaches.get(instance)!;
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Result retrieved from cache");
      return cache.get(key);
    }

    const result = originalMethod.apply(this, args);
    cache.set(key, result);

    return result;
  };

  return descriptor;
}
