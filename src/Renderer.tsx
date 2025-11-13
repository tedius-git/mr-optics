import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";
import { Lens } from "./lenses.ts";

interface RendererProps {
  lenses: Signal<Lens[]>;
}

export const LensRenderer = ({ lenses }: RendererProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateDimensions();
    globalThis.addEventListener("resize", updateDimensions);

    return () => globalThis.removeEventListener("resize", updateDimensions);
  }, []);

  const centerY = dimensions.height / 2;
  const currentLenses = lenses.value.filter((l) => l.r);
  const lensesDistance = dimensions.width / (currentLenses.length + 1);
  const h = 200;

  return (
    <svg
      ref={svgRef}
      className="renderer"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <line
        x1={0}
        y1={centerY}
        x2={dimensions.width}
        y2={centerY}
        stroke="#666"
        stroke-width={2}
        stroke-dasharray="10 5"
      />

      {currentLenses.map((lens, i) => {
        const lensCenterX = lensesDistance * (i + 1);
        let d: number;
        if (lens.r && lens.r < 0) {
          d = 15 / lens.r;
        } else {
          d = 0;
        }
        return (
          <>
            <line
              key={lens.id}
              x1={lensCenterX}
              y1={dimensions.height / 3}
              x2={lensCenterX}
              y2={2 * dimensions.height / 3}
              stroke="#000000"
              stroke-width={2}
              stroke-dasharray="20 10"
            />
            <path
              d={`
M ${lensCenterX + d / 2},${centerY - h / 2}
L ${lensCenterX - d / 2},${centerY - h / 2}
M ${lensCenterX + d / 2},${centerY - h / 2}
  A ${lens.r ? lens.r * 1000 : 1},${lens.r ? lens.r * 1000 : 1} 0 0 1 ${
                lensCenterX + d / 2
              } ${centerY + h / 2}
L ${lensCenterX - d / 2},${centerY + h / 2}
  A ${lens.r ? lens.r * 1000 : 1},${lens.r ? lens.r * 1000 : 1} 0 0 1 ${
                lensCenterX - d / 2
              } ${centerY - h / 2}
`}
            />
          </>
        );
      })}
    </svg>
  );
};
