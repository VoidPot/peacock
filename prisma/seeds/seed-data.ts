import seedJSON from "./seed.json";
const seedData = {
  group: [
    {
      name: "Alpha",
      slug: "alpha",
      amount: 1000,
      startAt: new Date("09/01/2020"),
      endAt: new Date("08/31/2023"),
    },
    {
      name: "Bravo",
      slug: "bravo",
      amount: 2000,
      startAt: new Date("09/01/2023"),
    },
  ],
  users: seedJSON.data.users,
  transactions: seedJSON.data.transactions.filter(
    (each) => each.deleted === false
  ),
};

export default seedData;
