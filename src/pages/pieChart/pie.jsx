import { useEffect, useState } from 'react';
import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Pie = ({isDashboard = false}) => {
    const theme = useTheme();
    const [statusData, setStatusData] = useState([]);
    const token = localStorage.getItem('token');
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    useEffect(() => {
      const fetchLabData = async () => {
        try {
          const response = await axios.get('https://dna-testing-system-jl95.onrender.com/api/getAllPopulation', {
            headers: {
              'token': token,
            },
          });
          if (response.data && Array.isArray(response.data.population)) {
            // Calculate the count of each status value
            const statusCounts = response.data.population.reduce((acc, cur) => {
              acc[cur.status] = (acc[cur.status] || 0) + 1;
              return acc;
            }, {});
            
            // Convert status counts to the format expected by the pie chart
            const pieData = Object.keys(statusCounts).map(status => ({
              id: status,
              label: status.toLowerCase(),
              value: statusCounts[status],
              color: getRandomColor(), // You can define a function to generate random colors
            }));
            
            // Use the pieData for the pie chart
            setStatusData(pieData);
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
        <Box sx={{ height: isDashboard ? "220px" : "75vh" }}>
       
  
        <ResponsivePie
          data={statusData}
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
          margin={ isDashboard ? {top: 10, right: 0, bottom: 10, left: 0 } : {top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={isDashboard ? 0.7 : 0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "accent" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}

          enableArcLabels= {isDashboard ? false : true} 
          enableArcLinkLabels= {isDashboard ? false : true}



          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: theme.palette.text.primary,
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: theme.palette.text.primary,
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={

            isDashboard ? []: 
            
            [
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: theme.palette.text.primary,
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: theme.palette.text.primary,
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    );
}

export default Pie;
