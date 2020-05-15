interface action {
  type: string;
}

interface state {
  transactions: Array<transaction>;
}

interface transaction {
  id: number;
  text: string;
  amount: number;
}

export default (state: state, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};
