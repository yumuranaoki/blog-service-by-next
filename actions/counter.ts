export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = (number: number) => ({
  type: 'INCREMENT' as typeof INCREMENT,
  number,
});

export const decrement = (number: number) => ({
  type: 'DECREMENT' as typeof DECREMENT,
  number,
})

export const counterActions = { increment, decrement }
