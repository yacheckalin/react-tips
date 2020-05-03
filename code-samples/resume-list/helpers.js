export const mapSortByToDefaultValue = (prop, direction) => {
  if (prop == "priority") {
    if (direction == "desc") {
      return 1;
    }
    if (direction == "asc") {
      return 2;
    }
  }
};

export const mapStateToSortObject = (val) => {
  switch (parseInt(val)) {
    case 1: {
      return { prop: "priority", dir: "desc" };
    }
    case 2: {
      return { prop: "priority", dir: "asc" };
    }
    default: {
      return { prop: "priority", dir: "desc" };
    }
  }
};
