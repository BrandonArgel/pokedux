// 1. Store de la aplicación
// 2. next: función que permite pasar al siguiente middleware
// 3. action: acción que se está ejecutando

export const logger = (store: any) => (next: any) => (action: any) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};