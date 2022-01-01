const months = [
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
const randomData = (key) =>
  new Array(12).fill({}).map((value, index) => {
    return {
      name: `${months[index]}`,
      [key]: Math.floor(Math.random() * 1300) + 2000,
    };
  });
module.exports = { months, randomData };
