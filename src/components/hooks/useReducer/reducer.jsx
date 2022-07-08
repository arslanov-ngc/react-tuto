export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_VALUE": {
      const newPeople = [...state.people, payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalTxt: "New name added!",
      };
      break;
    }
    case "EMPTY_VALUE": {
      return {
        ...state,
        isModalOpen: true,
        modalTxt: "Please, enter something!",
      };
      break;
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        isModalOpen: false,
      };
      break;
    }
    case "DELETE_VALUE": {
      const newPeople = state.people.filter(({ id }) => id != payload);
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalTxt: "Deleted one name",
      };
      break;
    }
    default: {
      throw new Error("No matching action type!");
    }
  }
};
