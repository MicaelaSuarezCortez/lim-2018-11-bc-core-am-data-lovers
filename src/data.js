const sortData = (data, sortBy, sortOrder) => {
  let newArraySort = [];
  for (let i = 0; i < data.length; i++) {
    newArraySort.push(Object.assign({}, data[i]));	   
  }  

  switch (sortOrder) {
  case 'asc':
    if (sortBy === 'name') {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.name > elementB.name ? 1 : -1));
    } else {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.id > elementB.id ? 1 : -1));
    }
    break;
  case 'desc':
    if (sortBy === 'name') {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.name < elementB.name ? 1 : -1));
    } else {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.id < elementB.id ? 1 : -1));
    }
    break;
  }
  return newArraySort;
};

const filterData = (data, filterBy, condition) => {
  let newArrayFilter = [];
  switch (filterBy) {
  case 'Tipo':
    newArrayFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    break;
  }
  return newArrayFilter;
};

const computeStats = (data) =>
  data.reduce((acum, element) =>
    (acum.spawn_chance > element.spawn_chance)
      ? acum :
      element);

const filterDataCandy = (data, condition) => {  
  const newArrayFilter = data.filter(compare => (compare.candy_count === condition));
  return newArrayFilter; 
};

function statsEgg(data, condition) {
  if (condition === 'Not') {
    const newArrayFilter = data.filter(compare => (compare.egg === 'Not in Eggs'));
    const cantEgg = newArrayFilter.length;
    return cantEgg;
  } else if (condition === '2') {
    const newArrayFilter = data.filter(compare => (compare.egg === '2 km'));
    const cantEgg = newArrayFilter.length;
    return cantEgg;
  } else if (condition === '5') {
    const newArrayFilter = data.filter(compare => (compare.egg === '5 km'));
    const cantEgg = newArrayFilter.length;
    return cantEgg;
  } else {
    const newArrayFilter = data.filter(compare => (compare.egg === '10 km'));
    const cantEgg = newArrayFilter.length;
    return cantEgg;
  }
}


window.dataPokemon = {
  sortData,
  filterData,
  computeStats,
  filterDataCandy,
  statsEgg
};