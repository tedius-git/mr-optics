import { render } from "preact";
import { signal } from "@preact/signals";

const count = signal(0);
const app = (
  <div>
    <p>{count}</p>
    <button type="button" onClick={() => count.value++}>+</button>
    <button type="button" onClick={() => count.value--}>-</button>
  </div>
);

render(app, document.body);
