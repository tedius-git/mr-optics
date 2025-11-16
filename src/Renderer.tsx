import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";
import { Lens } from "./lenses.ts";

interface RendererProps {
  lenses: Signal<Lens[]>;
  distances: Signal<number[]>;
}

const DotGrid = (props: { width: number; height: number }) => {
  const spacing = 20;
  const dotRadius = 2;
  return (
    <>
      <defs>
        <pattern
          id="dotPattern"
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={spacing / 2}
            cy={spacing / 2}
            r={dotRadius}
            fill="var(--dark-gray)"
          />
        </pattern>
      </defs>
      <rect
        width={props.width + 20}
        height={props.height + 20}
        fill="url(#dotPattern)"
      />
    </>
  );
};

/**
 * SVG-based renderer component that visualizes optical lenses
 * Displays lenses as curved shapes along an optical axis with configurable distances
 */
export const LensRenderer = ({ lenses, distances }: RendererProps) => {
  // Reference to the SVG element for dimension calculations
  const svgRef = useRef<SVGSVGElement>(null);

  // State to track SVG dimensions (responsive)
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  /**
   * Effect hook to handle responsive sizing
   * Updates dimensions when component mounts or window resizes
   */
  useEffect(() => {
    if (!svgRef.current) return;

    const updateDimensions = () => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    // Observa cambios del tamaño del SVG
    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(svgRef.current);

    // Inicial
    updateDimensions();

    return () => observer.disconnect();
  }, []);

  // Calculate vertical center of the canvas (optical axis position)
  const centerY = dimensions.height / 2;

  // Only lenses with defined radius can be rendered
  const currentLenses = lenses.value.filter((l) => l.r);

  const h = dimensions.height / 3;

  /**
   * Calculate lens X position based on distances
   * Uses cumulative distances to position each lens
   */
  const calculateLensX = (index: number): number => {
    if (index === 0) {
      // First lens at a fixed starting position
      return 200;
    }

    // Calculate cumulative distance from previous lenses
    let totalDistance = 200; // Starting position
    const pixelsPerMeter = 200; // Scale factor: 200 pixels = 1 meter

    for (let i = 0; i < index; i++) {
      const distance = distances.value[i] || 1.0; // Default 1m if not set
      totalDistance += distance * pixelsPerMeter;
    }

    return totalDistance;
  };

  /** Simplified: rays converge/diverge based on lens power
   */
  const simpleRayTrace = (startY: number, lenses: Lens[]): string => {
    let pathData = `M 0 ${startY}`;
    let currentY = startY;

    lenses.forEach((lens, i) => {
      const lensX = calculateLensX(i);

      // Line to lens
      pathData += ` L ${lensX} ${currentY}`;

      // Deflection based on power and distance from axis
      const deflection = lens.power * (currentY - centerY) * 0.25; // times 0.25 for better visualization
      currentY -= deflection;
    });

    // Calculate total width needed
    const lastLensX = calculateLensX(lenses.length - 1);
    const endX = Math.max(dimensions.width, lastLensX + 100);
    pathData += ` L ${endX} ${currentY}`;
    return pathData;
  };

  // Calculate required width based on lens positions
  const lastLensX = currentLenses.length > 0
    ? calculateLensX(currentLenses.length - 1) + 100
    : dimensions.width;
  const viewBoxWidth = Math.max(dimensions.width, lastLensX);

  return (
    <svg
      ref={svgRef}
      className="renderer"
      viewBox={`0 0 ${viewBoxWidth} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio when scaling
    >
      <DotGrid width={viewBoxWidth} height={dimensions.height} />
      {/* Optical axis - horizontal dashed line through center */}
      <line
        x1={0}
        y1={centerY}
        x2={viewBoxWidth}
        y2={centerY}
        stroke="#666"
        stroke-width={2}
        stroke-dasharray="20 10"
      />

      {/* Ray lines */}
      {[1, 2, 3, 4].map((i) => {
        return (
          <>
            <path
              className="ray"
              key={`ray-up-${i}`}
              // h / 8 because there are 4 rays in one half of a lens
              d={simpleRayTrace(centerY - (h / 8) * i, lenses.value)}
            />
            <path
              className="ray"
              key={`ray-down-${i}`}
              d={simpleRayTrace(centerY + (h / 8) * i, lenses.value)}
            />
          </>
        );
      })}

      {/* Render each lens */}
      {currentLenses.map((lens, i) => {
        const lensCenterX = calculateLensX(i);

        // Calculate lens thickness offset (d)
        // For negative radius (diverging lenses), calculate thickness
        // For positive radius (converging lenses), thickness is 0
        let d;
        if (lens.r && lens.r < 0) {
          d = 15 / lens.r;
        } else {
          d = 0;
        }

        return (
          <g key={lens.id}>
            {/* Optical Axis (dashed) */}
            <line
              x1={lensCenterX}
              y1={h - 20} // - 20 so it goes above de lens for better looks
              x2={lensCenterX}
              y2={2 * h + 20}
              stroke="#000000"
              stroke-width={2}
              stroke-dasharray="10 5" // Dashed line pattern
            />

            {/* Lens shape drawn as SVG path */}
            <path
              className="lens"
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
            />

            {/* Distance label */}
            {i < currentLenses.length - 1 && distances.value[i] !== undefined &&
              (
                <text
                  x={(lensCenterX + calculateLensX(i + 1)) / 2}
                  y={centerY + h / 2 + 30}
                  text-anchor="middle"
                  fill="var(--black)"
                  font-size="14"
                  font-weight="bold"
                >
                  {distances.value[i].toFixed(2)}
                </text>
              )}
          </g>
        );
      })}
    </svg>
  );
};
