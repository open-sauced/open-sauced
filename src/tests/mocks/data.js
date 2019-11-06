const data = {
  user: {login: "sam"},
  allRepositories: [
    {
      id: Math.random(),
      name: "Mock Repository A",
    },
    {
      id: Math.random(),
      name: "Mock Repository B",
    },
  ],
  refetch: () => {},
  goals: {
    nodes: [
      {
        id: Math.random(),
        name: "Mock Repository A",
        title: "mock/A",
      },
      {
        id: Math.random(),
        name: "Mock Repository B",
        title: "mock/B",
      },
    ],
  },
};

export default data;
