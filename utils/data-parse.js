const constants = require("./constants");
const defaultDataCharts = (city, country) => [
  {
    title: `People tested positive  - ${city ?? country}`,
    color: "#FBECEC",
    lineDataKey: "positive",
    data: [...constants.randomData("positive")],
  },
  {
    title: `Virus tests conducted - ${city ?? country}`,
    color: "#E5FBC1",
    lineDataKey: "conducted",
    data: [...constants.randomData("conducted")],
  },
  {
    title: `Deaths within 12 months of positive test - ${city ?? country}`,
    color: "#FBECEC",
    lineDataKey: "death",
    data: [...constants.randomData("death")],
  },

  {
    title: `Patients admitted - ${city ?? country}`,
    color: "#E5FBC1",
    lineDataKey: "admitted",
    data: [...constants.randomData("admitted")],
  },
];
const defaultDataStats = () => {
  return {
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
  };
};

const mockedData = (country, city, isCharts = true) => {
  let data = {};
  if (isCharts)
    data[country] = {
      [city ?? "default"]: defaultDataCharts(city, country),
    };
  else data[country] = { [city ?? "default"]: defaultDataStats() };
  return data[country][city ?? "default"];
};
module.exports = { mockedData };
