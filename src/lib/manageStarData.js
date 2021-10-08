// remove duplicates from data based on existing stars
function filterForUniqueStars(data, stars) {
  const dataSet = new Set(data.map(item => item.full_name));
  const starSet = new Set(stars.map(item => item.full_name));
  return [
    ...data.filter(item => !starSet.has(item.full_name)),
    ...stars.filter(item => !dataSet.has(item.full_name))
  ];
}

// only return starts not represent in the data.json
function remainingStars(data, stars) {
  try {
    const remainingStars = filterForUniqueStars(data, stars);
    return [...remainingStars.slice(0, 3)] || [];
  } catch {
    console.log("You have no stars stored in your open-sauced-goals repo. Check to see if the Open Sauced integration is up to date.");
    return [];
  }
}

export {remainingStars};
