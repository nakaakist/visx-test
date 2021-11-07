import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import { LinkHorizontal } from '@visx/shape';
import { FC } from 'react';
import { themeVars } from '../theme.css';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const data: TreeNode = {
  name: 'T',
  children: [
    {
      name: 'A',
      children: [
        { name: 'A1' },
        { name: 'A2' },
        { name: 'A3' },
        {
          name: 'C',
          children: [
            {
              name: 'C1',
            },
            {
              name: 'D',
              children: [
                {
                  name: 'D1',
                },
                {
                  name: 'D2',
                },
                {
                  name: 'D3',
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Z' },
    {
      name: 'B',
      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
    },
  ],
};

const defaultMargin = { top: 30, left: 30, right: 30, bottom: 70 };

export type LinkTypesProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export const CelonisPlot: FC = () => {
  return (
    <ParentSize>
      {(parent) => <InnerCelonisPlot width={parent.width} height={500} />}
    </ParentSize>
  );
};

const InnerCelonisPlot = ({
  width: totalWidth,
  margin = defaultMargin,
}: LinkTypesProps) => {
  const totalHeight = 500;
  const innerWidth = totalWidth - margin.left - margin.right;
  const innerHeight = totalHeight - margin.top - margin.bottom;

  let origin: { x: number; y: number };
  let sizeWidth: number;
  let sizeHeight: number;

  origin = { x: 0, y: 0 };

  sizeWidth = innerHeight;
  sizeHeight = innerWidth;

  return totalWidth < 10 ? null : (
    <div>
      <svg width={totalWidth} height={totalHeight}>
        <rect
          width={totalWidth}
          height={totalHeight}
          rx={14}
          fill={themeVars.color.brand4}
        />
        <Group top={margin.top} left={margin.left}>
          <Tree
            root={hierarchy(data, (d) => d.children)}
            size={[sizeWidth, sizeHeight]}
            separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
          >
            {(tree) => (
              <Group top={origin.y} left={origin.x}>
                {tree.links().map((link, i) => (
                  <LinkHorizontal
                    key={i}
                    data={link}
                    stroke={themeVars.color.brand3}
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
                {tree.descendants().map((node, key) => {
                  const width = 40;
                  const height = 20;
                  const top = node.x;
                  const left = node.y;

                  return (
                    <Group top={top} left={left} key={key}>
                      {node.depth === 0 && (
                        <circle
                          r={12}
                          fill={themeVars.color.brand3}
                          onClick={() => {
                            console.log(node);
                          }}
                        />
                      )}
                      {node.depth !== 0 && (
                        <rect
                          height={height}
                          width={width}
                          y={-height / 2}
                          x={-width / 2}
                          fill={themeVars.color.brand3}
                          rx={node.data.children ? 0 : 10}
                          onClick={() => {
                            console.log(node);
                          }}
                        />
                      )}
                      <text
                        dy=".33em"
                        fontSize={9}
                        fontFamily="Arial"
                        textAnchor="middle"
                        style={{ pointerEvents: 'none' }}
                        fill={themeVars.color.brand4}
                      >
                        {node.data.name}
                      </text>
                    </Group>
                  );
                })}
              </Group>
            )}
          </Tree>
        </Group>
      </svg>
    </div>
  );
};

export default CelonisPlot;
