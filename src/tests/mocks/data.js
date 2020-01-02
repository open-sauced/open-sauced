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
  createRepository: jest.fn(),
  gitHub: {viewer: {}},
  goals: {
    nodes: [
      {
        id: Math.random(),
        name: "Mock Repository A",
        title: "mock/A",
        labels: {data: []},
      },
      {
        id: Math.random(),
        name: "Mock Repository B",
        title: "mock/B",
        labels: {data: []},
      },
    ],
  },
};

export default data;
