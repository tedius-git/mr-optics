import { render } from "preact";
import { signal } from "@preact/signals";
import { Lens } from "./lenses.ts";
import { LensConfigurator } from "./Config.tsx";
import { LensRenderer } from "./Renderer.tsx";

export const lenses = signal<Lens[]>([]);

const App = () => {
  return (
    <div className="app">
      <LensConfigurator lenses={lenses} />
      <LensRenderer lenses={lenses} />
    </div>
  );
};

render(<App />, document.body);
