import { Signal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";
import { Lens } from "./lenses.ts";

const svgScale = 25;

interface RendererProps {
  lenses: Signal<Lens[]>;
  distances: Signal<number[]>;
}

const DotGrid = (props: { width: number; height: number; centerY: number }) => {
  const dotRadius = props.height / 300;

  // Generate fixed grid points
  const dots = [];
  const cols = Math.ceil(props.width / svgScale) + 2;
  const rows = Math.ceil(props.height / svgScale) + 2;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * svgScale;
      const y = row * svgScale;
      dots.push(
        <circle
          key={`${col}-${row}`}
          cx={x}
          cy={props.centerY - y}
          r={dotRadius}
          fill="var(--dark-gray)"
        />,
      );
      dots.push(
        <circle
          key={`${col}-${row}`}
          cx={x}
          cy={props.centerY + y}
          r={dotRadius}
          fill="var(--dark-gray)"
        />,
      );
    }
  }

  return <g className="dot-grid">{dots}</g>;
};

const OpticalAxis = (props: { svgHeight: number; svgWidth: number }) => {
  return (
    <line
      x1={svgScale / 4}
      y1={props.svgHeight / 2}
      x2={props.svgWidth - svgScale / 4}
      y2={props.svgHeight / 2}
      stroke="var(--dark-gray)"
      stroke-width={props.svgHeight / 300}
      stroke-dasharray={svgScale / 2}
    />
  );
};

const LenseSVG = (props: { lense: Lens; y: number; key: number }) => {
  return (
    <line
      key={props.key}
      x1={props.lense.xPos * 50}
      y1={props.y - svgScale * (4 + 1 / 4)}
      x2={props.lense.xPos * 50}
      y2={props.y + svgScale * (4 + 1 / 4)}
      stroke="var(--black)"
      stroke-width={svgScale / 10}
      stroke-dasharray={svgScale / 2}
    />
  );
};

/**
 * SVG-based renderer component that visualizes optical lenses
 * Displays lenses as curved shapes along an optical axis with configurable distances
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

  // Calculate required width based on lens positions

  return (
    <svg
      ref={svgRef}
      className="renderer"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio when scaling
    >
      {/* Optical axis - horizontal dashed line through center */}
      <OpticalAxis svgHeight={dimensions.height} svgWidth={dimensions.width} />

      <DotGrid
        width={dimensions.width}
        height={dimensions.height}
        centerY={centerY}
      />

      {/* Ray lines */}

      {/* Render each lens */}
      {lenses.value.map((l) => <LenseSVG lense={l} y={centerY} key={l.id} />)}
    </svg>
  );
};
