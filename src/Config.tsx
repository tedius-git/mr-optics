import { Signal } from "@preact/signals";
import { calcRadius, Lens } from "./lenses.ts";

// Global counter for generating unique lens IDs
// Ensures each lens has a unique identifier across the app lifecycle
let nextId = 1;

/**
 * Adds a new lens to the collection
 * Maximum of 3 lenses allowed
 * New lenses are initialized with default values (biconvex, index 1.5)
 */
const addLens = (lenses: Signal<Lens[]>) => {
  // Enforce maximum limit of 3 lenses
  if (lenses.value.length < 3) {
    // Create new array with spread operator to maintain immutability
    // This triggers Preact signal updates properly
    lenses.value = [...lenses.value, {
      id: nextId++, // Assign unique ID and increment counter
      type: "biconvex", // Default lens type
      index: 1.5, // Default refractive index (minimum allowed)
    }];
  }
};

/**
 * Removes a lens from the collection by ID
 */
const deleteLens = (lenses: Signal<Lens[]>, id: number) => {
  lenses.value = lenses.value.filter((l) => l.id !== id);
};

/**
 * Updates the optical power of a specific lens
 * Recalculates the radius of curvature based on new power
 */
const updateLensPower = (
  lenses: Signal<Lens[]>,
  id: number,
  newPower: number,
) => {
  lenses.value = lenses.value.map((l) => {
    // Only update the lens with matching ID
    if (l.id === id) {
      // Recalculate radius based on new power, current index, and lens type
      const radius = calcRadius(newPower, l.index, l.type);
      return {
        ...l, // Preserve all other properties
        power: newPower, // Update power
        r: radius ?? undefined, // Update radius (handle null case)
      };
    }
    // Return unchanged lens for non-matching IDs
    return l;
  });
};

/**
 * Updates the refractive index of a specific lens
 * Recalculates radius if power is already defined
 */
const updateLensIndex = (
  lenses: Signal<Lens[]>,
  id: number,
  newIndex: number,
) => {
  // Validate that new index meets minimum requirement
  if (newIndex >= 1.5) {
    lenses.value = lenses.value.map((l) => {
      // If lens has power defined, recalculate radius with new index
      if (l.id === id && l.power) {
        const radius = calcRadius(l.power, newIndex, l.type);
        return {
          ...l,
          index: newIndex,
          r: radius ?? undefined, // Update radius with new calculation
        };
      } // If lens doesn't have power, just update index
      else if (l.id === id) {
        return { ...l, index: newIndex };
      }
      return l;
    });
  }
};

/**
 * Individual lens configuration component
 * Renders input controls for a single lens
 */
const LensConfig = ({
  lens,
  lenses,
}: {
  lens: Lens;
  lenses: Signal<Lens[]>;
}) => {
  // Generate unique IDs for input accessibility
  const powerId = `power-${lens.id}`;
  const indexId = `index-${lens.id}`;

  return (
    <div className="entry">
      {/* Power input field */}
      <label htmlFor={powerId}>Potencia</label>
      <input
        id={powerId}
        name="Power"
        type="number"
        step="0.1"
        value={lens.power || ""} // Show empty string if power undefined
        onChange={(e) => {
          const newPower = parseFloat(e.currentTarget.value);
          // Only update if valid number and not zero
          // Zero power is excluded as it would create invalid optical calculations
          if (!isNaN(newPower) && newPower !== 0) {
            updateLensPower(lenses, lens.id, newPower);
          }
        }}
      />

      {/* Refractive index input field */}
      <label htmlFor={indexId}>Indice</label>
      <input
        id={indexId}
        name="index"
        type="number"
        min="1.5"
        step="0.1"
        value={lens.index}
        onChange={(e) => {
          const newIndex = parseFloat(e.currentTarget.value);
          // Enforce minimum refractive index of 1.5
          if (!isNaN(newIndex) && newIndex >= 1.5) {
            updateLensIndex(lenses, lens.id, newIndex);
          }
        }}
        onBlur={(e) => {
          // Safety check: reset to minimum if user leaves field with invalid value
          const currentValue = parseFloat(e.currentTarget.value);
          if (isNaN(currentValue) || currentValue < 1.5) {
            updateLensIndex(lenses, lens.id, 1.5);
          }
        }}
      />

      {/* Display calculated radius of curvature */}
      <p>R:{lens.r ? lens.r : ""}</p>

      {/* Delete button for this lens */}
      <button type="button" onClick={() => deleteLens(lenses, lens.id)}>
        -
      </button>
    </div>
  );
};

/**
 * Main configurator component
 * Manages the collection of lenses and renders individual lens configs
 */
export const LensConfigurator = ({ lenses }: { lenses: Signal<Lens[]> }) => {
  return (
    <div className="input">
      {/* Add lens button */}
      <div>
        <button
          type="button"
          className="add-button"
          onClick={() => addLens(lenses)}
          // TODO: Could add disabled state when length >= 3
        >
          +
        </button>
      </div>

      {/* Render configuration panel for each lens */}
      {lenses.value.map((lens) => (
        <LensConfig
          key={lens.id} // Unique key for React reconciliation
          lens={lens}
          lenses={lenses}
        />
      ))}
    </div>
  );
};
