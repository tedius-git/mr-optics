export type LensType = "biconvex" | "biconcave";

export type Lens = {
  id: number;
  power: number;
  index: number;
  type: LensType;
  r: number;
  xPos: number;
};

const IndexMax = 1.5;
const PowerMax = 5;

export const LIMITS = {
  power: { min: -PowerMax, max: PowerMax },
  index: { min: 1.0, max: IndexMax },
  xPos: { min: 0.1, max: 10 },
};

function isValid(key: keyof typeof LIMITS, value: number): boolean {
  const { min, max } = LIMITS[key];
  return value >= min && value <= max && value !== 0;
}

function calcRadius(
  power: number,
  index: number,
  type: "biconvex" | "biconcave",
): number {
  if (power === 0) {
    return 0;
  }

  if (type === "biconvex") {
    return 2 * (index - 1) / power;
  } else {
    return 2 * (index - 1) / power;
  }
}

export function addLens(lenses: Lens[], nextId: number): [Lens[], number] {
  const length = lenses.length;
  // Enforce maximum limit of 3 lenses
  if (length >= 3) {
    return [lenses, nextId];
  }

  const newLences: Lens[] = [...lenses, {
    id: nextId, // Assign unique ID and increment counter
    type: "biconvex", // Default lens type
    index: 1.5, // Default refractive index (minimum allowed)
    power: 3,
    r: calcRadius(3, 1.5, "biconvex"),
    xPos: length > 0 ? lenses[length - 1].xPos + 1.0 : 1.0,
  }];
  nextId += 1;
  return [newLences, nextId];
}

export function deleteLens(
  lenses: Lens[],
  id: number,
): Lens[] {
  return lenses.filter((l) => l.id !== id);
}

export function updateLens<K extends keyof Lens>(
  lenses: Lens[],
  id: number,
  key: K,
  newValue: Lens[K],
): Lens[] {
  return lenses.map((l) => {
    if (l.id !== id) return l;

    if (
      key in LIMITS && !isValid(key as keyof typeof LIMITS, newValue as number)
    ) {
      return l;
    }

    const updated = { ...l, [key]: newValue };

    if (key === "power" || key === "index" || key === "type") {
      updated.r = calcRadius(updated.power, updated.index, updated.type);
    }

    return updated;
  });
}

function _calcRayPath(_lenses: Lens[], _startY: number) {
}
