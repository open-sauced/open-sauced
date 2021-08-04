// remove duplicates from data based on existing stars
function filterForUniqueStars(data, stars) {
  return stars.filter(repo => {
    return data.find(repoData => repoData.full_name === repo.full_name) === undefined;
  });
}

function remainingStars(data, stars) {
  const remainingStars = filterForUniqueStars(data, stars);
  return [...remainingStars.slice(0, 3)];
}

export {remainingStars};
