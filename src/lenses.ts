export type Lens = {
  id: number;
  power?: number;
  index: number;
  type: "biconvex" | "biconcave";
  r?: number;
};

export function calcRadius(
  power: number,
  index: number,
  type: "biconvex" | "biconcave",
): number | null {
  if (power === 0) {
    return null;
  }

  if (type === "biconvex") {
    return 2 * (index - 1) / power;
  } else {
    return 2 * (index - 1) / power;
  }
}
