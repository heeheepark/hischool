import { ResponsiveBar } from "@nivo/bar";
import { ClassSchoolRecordDiv } from "../../styles/teacher/TeacherHomeStyle";

const MockSchoolRecord = () => {
  const data = [
    {
      country: "2023-1 중간",
      국어: 1,
      수학: 9,
      영어: 1,
      한국사: 4,
    },
    {
      country: "2023-1 기말",
      국어: 1,
      수학: 2,
      영어: 3,
      한국사: 4,
    },
    {
      country: "2023-2 중간",
      국어: 5,
      수학: 5,
      영어: 6,
      한국사: 8,
    },
    {
      country: "2023-2 기말",
      국어: 1,
      수학: 2,
      영어: 6,
      한국사: 8,
    },
  ];
  return (
    <ClassSchoolRecordDiv>
      <ResponsiveBar
        data={data}
        keys={["국어", "수학", "영어", "한국사"]}
        indexBy="country"
        margin={{ top: 30, right: 60, bottom: 70, left: 60 }}
        padding={0.3}
        // valueScale={{ type: "linear" }}
        // indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        groupMode="grouped"
        // axisLeft={{ tickValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }}
        // gridYValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        // reverse="true"
        defs={
          [
            // {
            //   id: "dots",
            //   type: "patternDots",
            //   background: "inherit",
            //   color: "#38bcb2",
            //   size: 4,
            //   padding: 1,
            //   stagger: true,
            // },
            // {
            //   id: "lines",
            //   type: "patternLines",
            //   background: "inherit",
            //   color: "#eed312",
            //   rotation: -45,
            //   lineWidth: 6,
            //   spacing: 10,
            // },
          ]
        }
        // fill={[
        //   {
        //     match: {
        //       id: "fries",
        //     },
        //     id: "dots",
        //   },
        //   {
        //     match: {
        //       id: "sandwich",
        //     },
        //     id: "lines",
        //   },
        // ]}
        // borderColor={{
        //   from: "color",
        //   modifiers: [["darker", 1.6]],
        // }}
        // axisTop={null}
        // axisRight={null}
        // axisBottom={{
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "country",
        //   legendPosition: "middle",
        //   legendOffset: 32,
        // }}
        // axisLeft={{
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "food",
        //   legendPosition: "middle",
        //   legendOffset: -40,
        // }}
        // labelSkipWidth={12}
        // labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 55,
            // itemsSpacing: 2,
            itemWidth: 70,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: "circle",
            // effects: [
            //   {
            //     on: "hover",
            //     style: {
            //       itemOpacity: 1,
            //     },
            //   },
            // ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </ClassSchoolRecordDiv>
  );
};
export default MockSchoolRecord;
