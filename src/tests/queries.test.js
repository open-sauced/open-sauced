import {
  allRepoQuery,
  createRepo,
  deleteRepo,
  repoQuery,
} from "../queries";

it("should be the correct query", () => {
  expect(allRepoQuery).toMatchSnapshot();
});

it("should be the correct query", () => {
  expect(createRepo).toMatchSnapshot();
});

it("should be the correct query", () => {
  expect(deleteRepo).toMatchSnapshot();
});

it("should be the correct query", () => {
  expect(repoQuery).toMatchSnapshot();
});
