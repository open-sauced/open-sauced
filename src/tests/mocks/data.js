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
        full_name: "mock/A",
        labels: {data: []},
      },
      {
        id: Math.random(),
        name: "Mock Repository B",
        full_name: "mock/B",
        labels: {data: []},
      },
    ],
  },
};

export default data;
