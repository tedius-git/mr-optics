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
const addLens = (lenses: Signal<Lens[]>, distances: Signal<number[]>) => {
  const length = lenses.value.length;
  // Enforce maximum limit of 3 lenses
  if (length < 3) {
    // Create new array with spread operator to maintain immutability
    // This triggers Preact signal updates properly
    lenses.value = [...lenses.value, {
      id: nextId++, // Assign unique ID and increment counter
      type: "biconvex", // Default lens type
      index: 1.5, // Default refractive index (minimum allowed)
      power: 6,
      r: calcRadius(6, 1.5, "biconvex"),
    }];
  }
  if (length > 0) {
    distances.value = [...distances.value, 1.0];
  }
};

/**
 * Removes a lens from the collection by ID
 */
const deleteLens = (
  lenses: Signal<Lens[]>,
  distances: Signal<number[]>,
  id: number,
) => {
  const deletedIndex = lenses.value.findIndex((l) => l.id === id);

  lenses.value = lenses.value.filter((l) => l.id !== id);

  // If we eliminate one other than the last, we eliminate that distance
  // If we eliminate the last lenst, we eliminate the last distance
  if (deletedIndex < lenses.value.length) {
    distances.value = distances.value.filter((_, i) => i !== deletedIndex);
  } else if (distances.value.length > 0) {
    distances.value = distances.value.slice(0, -1);
  }
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
    // Zero power is excluded as it would create invalid optical calculations
    if (l.id === id && newPower !== 0 && newPower > -7.8) {
      // Recalculate radius based on new power, current index, and lens type
      const radius = calcRadius(newPower, l.index, l.type);
      return {
        ...l, // Preserve all other properties
        power: newPower, // Update power
        r: radius, // Update radius (handle null case)
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
      if (l.id === id) {
        const radius = calcRadius(l.power, newIndex, l.type);
        return {
          ...l,
          index: newIndex,
          r: radius,
        };
      }
      return l;
    });
  }
};

/**
 * Updates the distance between lenses
 */
const updateDistance = (
  distances: Signal<number[]>,
  index: number,
  newDistance: number,
) => {
  if (!isNaN(newDistance) && newDistance >= 0.2) {
    distances.value = distances.value.map((d, i) =>
      i === index ? newDistance : d
    );
  }
};

/**
 * Individual lens configuration component
 * Renders input controls for a single lens
 */
const LensConfig = ({
  lens,
  lenses,
  distances,
}: {
  lens: Lens;
  lenses: Signal<Lens[]>;
  distances: Signal<number[]>;
}) => {
  // Generate unique IDs for input accessibility
  const powerId = `power-${lens.id}`;
  const indexId = `index-${lens.id}`;
  const lensIndex = lenses.value.indexOf(lens);
  const distance = distances.value[lensIndex];
  const distanceId = `distance-${lens.id}`;

  return (
    <>
      <div className="entry">
        {/* Power input field */}
        <label htmlFor={powerId}>Potencia</label>
        <div className="input-group">
          <button
            type="button"
            className="stepper-button"
            onClick={() =>
              updateLensPower(
                lenses,
                lens.id,
                Math.floor((lens.power - 0.1) * 10) / 10,
              )}
          >
            −
          </button>
          <input
            id={powerId}
            name="Power"
            type="number"
            min="-7.8"
            step="0.1"
            value={lens.power}
            onChange={(e) => {
              const newPower = parseFloat(e.currentTarget.value);
              // Only update if valid number
              if (!isNaN(newPower)) {
                updateLensPower(lenses, lens.id, newPower);
              }
            }}
          />
          <button
            type="button"
            className="stepper-button"
            onClick={() =>
              updateLensPower(
                lenses,
                lens.id,
                Math.ceil((lens.power + 0.1) * 10) / 10, // a work around floating numbers prescition
              )}
          >
            +
          </button>
        </div>

        {/* Refractive index input field */}
        <label htmlFor={indexId}>Índice</label>
        <div className="input-group">
          <button
            type="button"
            className="stepper-button"
            onClick={() =>
              updateLensIndex(
                lenses,
                lens.id,
                Math.floor((lens.index - 0.1) * 10) / 10,
              )}
          >
            −
          </button>
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
          <button
            type="button"
            className="stepper-button"
            onClick={() =>
              updateLensIndex(
                lenses,
                lens.id,
                Math.ceil((lens.index + 0.1) * 10) / 10,
              )}
          >
            +
          </button>
        </div>

        {/* Display calculated radius of curvature */}
        <p>R: {Math.round(lens.r * 1000) / 1000}</p>
        {/* Delete button for this lens */}
        <button
          type="button"
          className="delete-button"
          onClick={() => deleteLens(lenses, distances, lens.id)}
        >
          <span class="icon">
            <img src="./assets/delete.svg" />
          </span>
          <span class="text">Eliminar lente</span>
        </button>
      </div>
      {distance !== undefined
        ? (
          <div className="entry">
            <div className="input-group">
              <label htmlFor={distanceId}>Distancia</label>
              <button
                type="button"
                className="stepper-button"
                onClick={() =>
                  updateDistance(
                    distances,
                    lensIndex,
                    Math.floor((distance - 0.1) * 10) / 10,
                  )}
              >
                −
              </button>
              <input
                id={distanceId}
                name="distance"
                type="number"
                min="0.2"
                step="0.1"
                value={distance}
                onChange={(e) => {
                  const newDistance = parseFloat(e.currentTarget.value);
                  updateDistance(distances, lensIndex, newDistance);
                }}
                onBlur={(e) => {
                  const currentValue = parseFloat(e.currentTarget.value);
                  if (isNaN(currentValue) || currentValue < 0.2) {
                    updateDistance(distances, lensIndex, 0.2);
                  }
                }}
              />
              <button
                type="button"
                className="stepper-button"
                onClick={() =>
                  updateDistance(
                    distances,
                    lensIndex,
                    Math.floor((distance + 0.1) * 10) / 10,
                  )}
              >
                +
              </button>
            </div>
          </div>
        )
        : null}
    </>
  );
};

/**
 * Main configurator component
 * Manages the collection of lenses and renders individual lens configs
 */
export const LensConfigurator = (
  { lenses, distances }: {
    lenses: Signal<Lens[]>;
    distances: Signal<number[]>;
  },
) => {
  return (
    <div className="input">
      {/* Add lens button */}
      <button
        type="button"
        className="add-button"
        title="3 Max"
        disabled={lenses.value.length >= 3}
        onClick={() => addLens(lenses, distances)}
      >
        <span class="icon">
          <img src="./assets/add.svg" />
        </span>
        <span class="text">Añadir lente</span>
      </button>

      {/* Render configuration panel for each lens */}
      {lenses.value.map((lens) => (
        <LensConfig
          key={lens.id}
          lens={lens}
          lenses={lenses}
          distances={distances}
        />
      ))}
    </div>
  );
};
