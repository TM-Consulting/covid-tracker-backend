const covidDataCities = {
  usa: {
    newYork: {
      cibledPeople: 10000000,
      doses: [
        {
          title: "Daily – first dose",
          amt: Math.floor(Math.random() * 1300) + 2000,
        },
        {
          title: "Daily – second dose",
          amt: Math.floor(Math.random() * 1300) + 2000,
        },
        {
          title: "Total – first dose",
          amt: Math.floor(Math.random() * 1300) + 20000,
        },
        {
          title: "Total – second dose",
          amt: Math.floor(Math.random() * 1300) + 20000,
        },
      ],
    },
    default: {
      cibledPeople: 10000000,
      doses: [
        {
          title: "Daily – first dose",
          amt: Math.floor(Math.random() * 1300) + 2000,
        },
        {
          title: "Daily – second dose",
          amt: Math.floor(Math.random() * 1300) + 2000,
        },
        {
          title: "Total – first dose",
          amt: Math.floor(Math.random() * 1300) + 20000,
        },
        {
          title: "Total – second dose",
          amt: Math.floor(Math.random() * 1300) + 20000,
        },
      ],
    },
  },
};
const covidDataStats = {
  usa: { ...covidDataCities.usa },
};
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dataTracks = {
  usa: {
    newYork: [
      {
        title: "People tested positive  - New York",
        color: "#FBECEC",
        lineDataKey: "positive",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `${MONTHS[index]}`,
            positive: Math.floor(Math.random() * 1300) + 2000,
          };
        }),
      },
      {
        title: "Virus tests conducted - New York",
        color: "#E5FBC1",
        lineDataKey: "conducted",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `${MONTHS[index]}`,
            conducted: Math.floor(Math.random() * 1300) + 2000,
          };
        }),
      },
      {
        title: "Deaths within 12 months of positive test - New York",
        color: "#FBECEC",
        lineDataKey: "death",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `${MONTHS[index]}`,
            death: Math.floor(Math.random() * 1300) + 2000,
          };
        }),
      },

      {
        title: "Patients admitted - New York",
        color: "#E5FBC1",
        lineDataKey: "admitted",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `${MONTHS[index]}`,
            admitted: Math.floor(Math.random() * 1300) + 2000,
          };
        }),
      },
    ],
    default: [
      {
        title: "People tested positive USA",
        color: "#FBECEC",
        lineDataKey: "positive",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `${MONTHS[index]}`,
            positive: Math.floor(Math.random() * 1300) + 2000,
          };
        }),
      },
    ],
  },
};
const covidDataTracks = {
  usa: { ...dataTracks.usa },
};
module.exports = { covidDataStats, covidDataTracks };
