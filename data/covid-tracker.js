const covidDataCities = {
  usa: {
    cibledPeople: 10000000,
    doses: {
      dose_1: { daily: 3000, total: 14000 },
      dose_2: { daily: 1000, total: 7000 },
    },
  },
};
const covidDataStats = {
  usa: { ...covidDataCities.usa },
};

const dataTracks = {
  usa: {
    newYork: [
      {
        title: "hello world",
        color: "#FBECEC",
        lineDataKey: "death",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `item_${index}`,
            death: Math.floor(Math.random() * 16) + 5,
          };
        }),
      },
    ],
    default: [
      {
        title: "hello world default",
        color: "#FBECEC",
        lineDataKey: "death",
        data: new Array(12).fill({}).map((value, index) => {
          return {
            name: `item_${index}`,
            death: Math.floor(Math.random() * 16) + 5,
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
