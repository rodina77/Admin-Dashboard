import { useEffect, useState } from 'react';
import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import axios from 'axios';
const Bar = ({ isDashboard = false }) => {
    const theme = useTheme();
    const [statusData, setStatusData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
      const fetchLabData = async () => {
          try {
              const response = await axios.get('https://dna-testing-system-jl95.onrender.com/api/getAllPopulation', {
                  headers: {
                      'token': token,
                  },
              });
              if (response.data && Array.isArray(response.data.population)) {
                  // Process the population data to calculate the count of each status value
                  const statusCounts = response.data.population.reduce((acc, cur) => {
                      acc[cur.status] = (acc[cur.status] || 0) + 1;
                      return acc;
                  }, {});
                  // Convert status counts to an array of objects for Nivo bar chart
                  const statusChartData = Object.keys(statusCounts).map(status => ({
                      status,
                      count: statusCounts[status],
                  }));
                  
                  setStatusData(statusChartData);
              } else {
                  console.error('No population array found in the response data');
              }
          } catch (error) {
              console.error('Error fetching population data:', error.message);
          }
      };
  
      if (!token) {
        console.log('Token not found in storage');
      } else {
        fetchLabData();
      }
    }, [token]);

    return (
        <Box sx={{ height: isDashboard ? "400px" : "75vh" }}>
            <ResponsiveBar
                data={statusData}
                keys={["count"]}
                indexBy="status"
                theme={{
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  axis: {
                    domain: {
                      line: {
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                      },
                    },
                    legend: {
                      text: {
                        fontSize: 15,
                        fontFamily: "bold",
                        fill: theme.palette.text.primary,
                        outlineWidth: 0,
                        outlineColor: "transparent",
                      },
                    },
                    ticks: {
                      line: {
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                      },
                      text: {
                        fontSize: 11,
                        fill: theme.palette.text.primary,
                        outlineWidth: 0,
                        outlineColor: "transparent",
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: theme.palette.divider,
                      strokeWidth: 1,
                    },
                  },
                  legends: {
                    title: {
                      text: {
                        fontSize: 11,
                        fill: theme.palette.text.primary,
                        outlineWidth: 0,
                        outlineColor: "transparent",
                      },
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                    ticks: {
                      line: {},
                      text: {
                        fontSize: 10,
                        fill: theme.palette.text.primary,
                        outlineWidth: 0,
                        outlineColor: "transparent",
                      },
                    },
                  },
                  annotations: {
                    text: {
                      fontSize: 13,
                      fill: theme.palette.text.primary,
                      outlineWidth: 2,
                      outlineColor: "#ffffff",
                      outlineOpacity: 1,
                    },
                    link: {
                      stroke: "#000000",
                      strokeWidth: 1,
                      outlineWidth: 2,
                      outlineColor: "#ffffff",
                      outlineOpacity: 1,
                    },
                    outline: {
                      stroke: "#000000",
                      strokeWidth: 2,
                      outlineWidth: 2,
                      outlineColor: "#ffffff",
                      outlineOpacity: 1,
                    },
                    symbol: {
                      fill: "#000000",
                      outlineWidth: 2,
                      outlineColor: "#ffffff",
                      outlineOpacity: 1,
                    },
                  },
                  tooltip: {
                    container: {
                      background: theme.palette.background.default,
                      fontSize: 12,
                    },
                    basic: {},
                    chip: {},
                    table: {},
                    tableCell: {},
                    tableCellValue: {},
                  },
                }}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "paired" }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "fries",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "sandwich",
                    },
                    id: "lines",
                  },
                ]}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: isDashboard ? null :"Year",
                  legendPosition: "middle",
                  legendOffset: 40,
                  truncateTickAt: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: isDashboard ? null : "Missing Person",
                  legendPosition: "middle",
                  legendOffset: -55,
                  truncateTickAt: 0,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={(e) =>
                  e.id + ": " + e.formattedValue + " in country: " + e.indexValue
                }
              />{" "}
        </Box>
    );
}

export default Bar;