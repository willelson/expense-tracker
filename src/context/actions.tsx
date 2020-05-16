export function deleteTransaction(id: number): any {
  return {
    type: 'DELETE_TRANSACTION',
    payload: id
  };
}
