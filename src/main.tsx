import { render } from "preact";
import { signal } from "@preact/signals";
import { Lens } from "./lenses.ts";
import { LensConfigurator } from "./Config.tsx";
import { LensRenderer } from "./Renderer.tsx";

export const lenses = signal<Lens[]>([]);
export const distances = signal<number[]>([]);

const App = () => {
  return (
    <div className="app">
      <LensConfigurator lenses={lenses} distances={distances} />
      <LensRenderer lenses={lenses} distances={distances} />
    </div>
  );
};

render(<App />, document.body);
