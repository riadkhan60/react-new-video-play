'use client';
import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import styled from 'styled-components';

// Interface for props with lowercase names
interface CustomSliderProps {
  width?: string;
  height?: string;
  trackcolor?: string;
  trackheight?: string;
  rangecolor?: string;
  thumbsize?: string;
  thumbcolor?: string;
  thumbradius?: string;
  thumbborder?: string;
  defaultvalue?: number[];
  maxvalue?: number;
  minvalue?: number;
  step?: number;
  value?: number[];
  arialabel?: string;
  thumbboxshadow?: string;
  onvaluechangefunc?: (value: number[]) => void;
  hovertrackcolor?: string;
  hoverthumbcolor?: string;
  hoverthumbborder?: string;
}

// Styled component for SliderRoot
const SliderRoot = styled(Slider.Root)<{ width?: string; height?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};

  @media (max-width: 768px) {
    height: ${(props) => props.height || '10px'};
  }
`;

// Styled component for SliderTrack
const SliderTrack = styled(Slider.Track)<{
  $trackcolor?: string; // Transient prop
  $trackheight?: string; // Transient prop
  $hovertrackcolor?: string; // Transient prop
}>`
  background-color: ${(props) => props.$trackcolor || '#ccc'};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: ${(props) => props.$trackheight || '2px'};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.$hovertrackcolor || '#575757'};
  }

  @media (max-width: 768px) {
    height: ${(props) => props.$trackheight || '4px'};
  }
`;

// Styled component for SliderRange
const SliderRange = styled(Slider.Range)<{ $rangecolor?: string }>`
  background-color: ${(props) => props.$rangecolor || '#ffffff'};
  position: absolute;
  border-radius: 9999px;
  height: 100%;
`;

// Styled component for SliderThumb with transient props
const SliderThumb = styled(Slider.Thumb)<{
  $thumbsize?: string; // Transient prop
  $thumbcolor?: string; // Transient prop
  $thumbborder?: string; // Transient prop
  $thumbradius?: string; // Transient prop
  $thumbboxshadow?: string; // Transient prop
  $hoverthumbcolor?: string; // Transient prop
  $hoverthumbborder?: string; // Transient prop
}>`
  display: block;
  width: ${(props) => props.$thumbsize || '16px'};
  height: ${(props) => props.$thumbsize || '16px'};
  background-color: ${(props) => props.$thumbcolor || '#fff'};
  border-radius: ${(props) => props.$thumbradius || '50%'};
  box-shadow: ${(props) =>
    props.$thumbboxshadow || '0px 0px 0px rgba(0, 0, 0, 0.25)'};
  border: ${(props) => props.$thumbborder || '1px solid #ccc'};
  cursor: pointer;
  transition: background-color 0.2s ease, border 0.2s ease;

  &:hover {
    background-color: ${(props) => props.$hoverthumbcolor || '#eee'};
    border: ${(props) => props.$hoverthumbborder || '1px solid #888'};
  }

  @media (max-width: 768px) {
    width: ${(props) => props.$thumbsize || '12px'};
    height: ${(props) => props.$thumbsize || '12px'};
  }
`;

const CustomSlider: React.FC<CustomSliderProps> = ({
  width,
  height,
  trackcolor,
  trackheight,
  rangecolor,
  thumbsize,
  thumbcolor,
  thumbborder,
  thumbradius,
  defaultvalue,
  value,
  maxvalue,
  minvalue,
  step,
  thumbboxshadow,
  arialabel,
  onvaluechangefunc,
  hovertrackcolor,
  hoverthumbcolor,
  hoverthumbborder,
}) => {
  return (
    <div>
      <SliderRoot
        width={width}
        height={height}
        defaultValue={defaultvalue || [50]}
        value={value || [50]}
        max={maxvalue || 100}
        min={minvalue || 0}
        step={step || 1}
        onValueChange={onvaluechangefunc}
      >
        <SliderTrack
          $trackcolor={trackcolor} // Using transient props
          $trackheight={trackheight} // Using transient props
          $hovertrackcolor={hovertrackcolor} // Using transient props
        >
          <SliderRange $rangecolor={rangecolor} /> 
        </SliderTrack>
        <SliderThumb
          $thumbsize={thumbsize} // Using transient props
          $thumbcolor={thumbcolor} // Using transient props
          $thumbborder={thumbborder} // Using transient props
          $thumbradius={thumbradius} // Using transient props
          $thumbboxshadow={thumbboxshadow} // Using transient props
          $hoverthumbcolor={hoverthumbcolor} // Using transient props
          $hoverthumbborder={hoverthumbborder} // Using transient props
          aria-label={arialabel}
        />
      </SliderRoot>
    </div>
  );
};

export default CustomSlider;
