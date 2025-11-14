import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";
import { Lens } from "./lenses.ts";

interface RendererProps {
  lenses: Signal<Lens[]>;
}

/**
 * SVG-based renderer component that visualizes optical lenses
 * Displays lenses as curved shapes along an optical axis
 * TODO: Responsive to window resizing
 */
export const LensRenderer = ({ lenses }: RendererProps) => {
  // Reference to the SVG element for dimension calculations
  const svgRef = useRef<SVGSVGElement>(null);

  // State to track SVG dimensions (responsive)
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  /**
   * Effect hook to handle responsive sizing
   * Updates dimensions when component mounts or window resizes
   */
  useEffect(() => {
    /**
     * Measures the actual rendered size of the SVG element
     * and updates the dimensions state
     */
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    // Initial dimension calculation
    updateDimensions();

    // Listen for window resize events
    globalThis.addEventListener("resize", updateDimensions);

    // Cleanup: remove event listener when component unmounts
    return () => globalThis.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate vertical center of the canvas (optical axis position)
  const centerY = dimensions.height / 2;

  // Only lenses with defined radius can be rendered
  const currentLenses = lenses.value.filter((l) => l.r);

  const lensesDistance = (dimensions.width - 400) / (currentLenses.length + 1);

  const h = 200;

  return (
    <svg
      ref={svgRef}
      className="renderer"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio when scaling
    >
      {/* Optical axis - horizontal dashed line through center */}
      <line
        x1={0}
        y1={centerY}
        x2={dimensions.width}
        y2={centerY}
        stroke="#666"
        stroke-width={2}
        stroke-dasharray="10 5" // Dashed line pattern
      />

      {/* Render each lens */}
      {currentLenses.map((lens, i) => {
        // Evenly spaced across the canvas
        const lensCenterX = lensesDistance * (i + 1) + 200;

        // Calculate lens thickness offset (d)
        // For negative radius (diverging lenses), calculate thickness
        // For positive radius (converging lenses), thickness is 0
        let d: number;
        if (lens.r && lens.r < 0) {
          d = 15 / lens.r;
        } else {
          d = 0;
        }

        return (
          <>
            {/* Optical Axis (dashed) */}
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

            {/* Lens shape drawn as SVG path */}
            <path
              d={`
                M ${lensCenterX + d / 2},${centerY - h / 2}
                L ${lensCenterX - d / 2},${centerY - h / 2}
                M ${lensCenterX + d / 2},${centerY - h / 2}
                  A ${lens.r ? lens.r * 1000 : 1},${
                lens.r ? lens.r * 1000 : 1
              } 0 0 1 ${lensCenterX + d / 2} ${centerY + h / 2}
                L ${lensCenterX - d / 2},${centerY + h / 2}
                  A ${lens.r ? lens.r * 1000 : 1},${
                lens.r ? lens.r * 1000 : 1
              } 0 0 1 ${lensCenterX - d / 2} ${centerY - h / 2}
              `}
              // M = Move to top center
              // L = Line to top edge
              // A = Arc for curved lens surface
              // Radius multiplied by 1000 for visual scaling
            />
          </>
        );
      })}
    </svg>
  );
};
