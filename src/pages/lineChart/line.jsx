
import { Box ,  useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";



const data = [
    {
      "id": "Cairo",
      "color": "hsl(182, 70%, 50%)",
      "data": [
        {
          "x": "missing",
          "y": 263
        },
        {
          "x": "identify",
          "y": 13
        },
        {
          "x": "crime",
          "y": 97
        },
        {
          "x": "disaster",
          "y": 204
        },
        {
          "x": "paternity",
          "y": 193
        },
        
      ]
    },
    {
      "id": "Alexandria",
      "color": "hsl(60, 70%, 50%)",
      "data": [
        {
          "x": "missing",
          "y": 12
        },
        {
          "x": "identify",
          "y": 15
        },
        {
          "x": "crime",
          "y": 167
        },
        {
          "x": "disaster",
          "y": 49
        },
        {
          "x": "paternity",
          "y": 71
        },
        
      ]
    },
    {
      "id": "Benha",
      "color": "hsl(337, 70%, 50%)",
      "data": [
        {
          "x": "missing",
          "y": 229
        },
        {
          "x": "identify",
          "y": 238
        },
        {
          "x": "crime",
          "y": 287
        },
        {
          "x": "disaster",
          "y": 183
        },
        {
          "x": "paternity",
          "y": 287
        },
        
      ]
    },
    {
      "id": "Port Said",
      "color": "hsl(316, 70%, 50%)",
      "data": [
        {
          "x": "missing",
          "y": 132
        },
        {
          "x": "identify",
          "y": 253
        },
        {
          "x": "crime",
          "y": 227
        },
        {
          "x": "disaster",
          "y": 255
        },
        {
          "x": "paternity",
          "y": 244
        },
        
      ]
    },
    {
      "id": "Aswan",
      "color": "hsl(37, 70%, 50%)",
      "data": [
        {
          "x": "missing",
          "y": 244
        },
        {
          "x": "identify",
          "y": 195
        },
        {
          "x": "crime",
          "y": 74
        },
        {
          "x": "disaster",
          "y": 100
        },
        {
          "x": "paternity",
          "y": 22
        },
        
      ]
    }
  ]
  
// eslint-disable-next-line react/prop-types
const Line = ({isDashboard = false}) => {
    const theme = useTheme();

    return (
        <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>





      <ResponsiveLine
        data={data}
        // curve="catmullRom"

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
                  fontSize: 20,
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
                  fontSize: 13,
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

        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Cases",
          legendOffset: 40,
          legendPosition: "middle",
          truncateTickAt: 0,
          
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "count",
          legendOffset: -50,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
    );
}

export default Line;
