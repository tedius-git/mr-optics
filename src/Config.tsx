import { Signal } from "@preact/signals";
import { calcRadius, Lens } from "./lenses.ts";

let nextId = 1;

const addLens = (lenses: Signal<Lens[]>) => {
  if (lenses.value.length < 3) {
    lenses.value = [...lenses.value, {
      id: nextId++,
      type: "biconvex",
      index: 1.5,
    }];
  }
};

const deleteLens = (lenses: Signal<Lens[]>, id: number) => {
  lenses.value = lenses.value.filter((l) => l.id !== id);
};

const updateLensPower = (
  lenses: Signal<Lens[]>,
  id: number,
  newPower: number,
) => {
  lenses.value = lenses.value.map((l) => {
    if (l.id === id) {
      const radius = calcRadius(newPower, l.index, l.type);
      return {
        ...l,
        power: newPower,
        r: radius ?? undefined,
      };
    }
    return l;
  });
};

const updateLensIndex = (
  lenses: Signal<Lens[]>,
  id: number,
  newIndex: number,
) => {
  if (newIndex >= 1.5) {
    lenses.value = lenses.value.map((l) => {
      if (l.id === id && l.power) {
        const radius = calcRadius(l.power, newIndex, l.type);
        return {
          ...l,
          index: newIndex,
          r: radius ?? undefined,
        };
      } else if (l.id === id) {
        return { ...l, index: newIndex };
      }
      return l;
    });
  }
};

const LensConfig = ({
  lens,
  lenses,
}: {
  lens: Lens;
  lenses: Signal<Lens[]>;
}) => {
  const powerId = `power-${lens.id}`;
  const indexId = `index-${lens.id}`;

  return (
    <div className="entry">
      <label htmlFor={powerId}>Potencia</label>
      <input
        id={powerId}
        name="Power"
        type="number"
        step="0.1"
        value={lens.power || ""}
        onChange={(e) => {
          const newPower = parseFloat(e.currentTarget.value);
          if (!isNaN(newPower) && newPower !== 0) {
            updateLensPower(lenses, lens.id, newPower);
          }
        }}
      />
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
          if (!isNaN(newIndex) && newIndex >= 1.5) {
            updateLensIndex(lenses, lens.id, newIndex);
          }
        }}
        onBlur={(e) => {
          const currentValue = parseFloat(e.currentTarget.value);
          if (isNaN(currentValue) || currentValue < 1.5) {
            updateLensIndex(lenses, lens.id, 1.5);
          }
        }}
      />
      <p>R:{lens.r ? lens.r : ""}</p>
      <button type="button" onClick={() => deleteLens(lenses, lens.id)}>
        -
      </button>
    </div>
  );
};

export const LensConfigurator = ({ lenses }: { lenses: Signal<Lens[]> }) => {
  return (
    <div className="input">
      <div>
        <button
          type="button"
          className="add-button"
          onClick={() => addLens(lenses)}
        >
          +
        </button>
      </div>
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
