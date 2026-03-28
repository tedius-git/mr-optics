import { Signal } from "@preact/signals";
import { addLens, deleteLens, Lens, LIMITS, updateLens } from "./lenses.ts";

// Global counter for generating unique lens IDs
// Ensures each lens has a unique identifier across the app lifecycle
let nextId = 1;

const InputField = <K extends keyof Lens>(props: {
  lens: Lens;
  lenses: Signal<Lens[]>;
  lensKey: K;
}) => {
  const { lens, lenses, lensKey } = props;
  const uniqueId = `${lensKey}-${lens.id}`;
  const { min, max } = LIMITS[lensKey as keyof typeof LIMITS];
  return (
    <>
      <label htmlFor={uniqueId}>{lensKey}{lens[lensKey]}</label>
      <div className="input-group">
        <input
          id={uniqueId}
          name={uniqueId}
          type="range"
          min={min}
          max={max}
          step={(max - min) / 20}
          value={lens[lensKey]}
          onInput={(e) => {
            lenses.value = updateLens(
              lenses.value,
              lens.id,
              lensKey,
              parseFloat(e.currentTarget.value) as Lens[K],
            );
          }}
        />
      </div>
    </>
  );
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
  return (
    <>
      <div className="entry">
        {/* Power input field */}

        <InputField lens={lens} lenses={lenses} lensKey="power" />
        <InputField lens={lens} lenses={lenses} lensKey="index" />
        <InputField lens={lens} lenses={lenses} lensKey="xPos" />

        {/* Display calculated radius of curvature */}
        <p>R: {lens.r.toFixed(1)}</p>

        {/* Delete button for this lens */}
        <button
          type="button"
          className="delete-button"
          onClick={() => {
            lenses.value = deleteLens(lenses.value, lens.id);
          }}
        >
          <span class="icon">
            <img src="./assets/delete.svg" />
          </span>
          <span class="text">Eliminar lente</span>
        </button>
      </div>
    </>
  );
};

/**
 * Main configurator component
 * Manages the collection of lenses and renders individual lens configs
 */
export const LensConfigurator = (
  { lenses }: {
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
        onClick={() => {
          [lenses.value, nextId] = addLens(lenses.value, nextId);
        }}
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
        />
      ))}
    </div>
  );
};
