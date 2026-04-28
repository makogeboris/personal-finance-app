"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="@container">
      <Card className="flex flex-col items-center gap-0 p-0 @lg:flex-row">
        <CardHeader className="sr-only items-center pb-0">
          <CardTitle>Budget chart</CardTitle>
          <CardDescription>Showing spending summary</CardDescription>
        </CardHeader>

        <CardContent className="flex-none p-0">
          <ChartContainer
            config={chartConfig}
            className="aspect-square h-65 w-65"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>

        <div className="@container flex w-full flex-1 items-center">
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex gap-4">
              <div className="bg-chart-1 w-1"></div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-muted-foreground text-xs">
                  Entertainment
                </span>
                <span className="text-primary text-sm font-bold">$50.00</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-chart-2 w-1"></div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-muted-foreground text-xs">Bills</span>
                <span className="text-primary text-sm font-bold">$750.00</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-chart-3 w-1"></div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-muted-foreground text-xs">
                  Dining Out
                </span>
                <span className="text-primary text-sm font-bold">$75.00</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-chart-4 w-1"></div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-muted-foreground text-xs">
                  Personal Care
                </span>
                <span className="text-primary text-sm font-bold">$100.00</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
