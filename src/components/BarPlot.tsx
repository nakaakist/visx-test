import { Group } from '@visx/group';
import letterFrequency, {
  LetterFrequency,
} from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import { FC, useMemo } from 'react';
import { useDivWidth } from '../hooks/useDivWidth';
import { themeVars } from '../theme.css';

const height = 500;
const data = letterFrequency;
const verticalMargin = 80;

// accessors
const getLetter = (d: LetterFrequency) => d.letter;
const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;

const BarPlot: FC = () => {
  const { divRef, divWidth } = useDivWidth();
  // bounds
  const xMax = divWidth - 20;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.2,
      }),
    [xMax]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax]
  );

  return xMax < 10 ? null : (
    <div ref={divRef}>
      <svg width={xMax} height={height}>
        <rect
          width={xMax}
          height={height}
          fill={themeVars.color.brand4}
          rx={10}
        />
        <Group top={verticalMargin / 2}>
          {data.map((d) => {
            const letter = getLetter(d);
            const frequency = getLetterFrequency(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
            const barX = xScale(letter);
            const barY = yMax - barHeight;
            return (
              <Group key={`bar-${letter}`}>
                <Bar
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={themeVars.color.brand}
                  onClick={() => {
                    alert(`clicked: ${JSON.stringify(Object.values(d))}`);
                  }}
                />
                <text
                  key={`pl-${letter}`}
                  fill={themeVars.color.brand3}
                  x={xScale(letter)}
                  y={yMax - barHeight}
                  fontSize={12}
                  dx={barWidth / 2 - 5}
                  dy={-10}
                  style={{ fontFamily: 'arial' }}
                >
                  {letter}
                </text>
                <text
                  key={`pf-${letter}`}
                  fill={themeVars.color.whiteText}
                  x={xScale(letter)}
                  y={yMax - barHeight}
                  fontSize={12}
                  dx={barWidth / 2}
                  dy={barHeight / 2}
                  style={{ fontFamily: 'arial', writingMode: 'vertical-rl' }}
                >
                  {`${Math.floor(frequency * 10) / 10}`}
                </text>
              </Group>
            );
          })}
        </Group>
      </svg>
    </div>
  );
};

export default BarPlot;
