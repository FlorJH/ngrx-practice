import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';

import { crear, editar, toggle, borrar, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al  mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Salvar al  mundo'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { //para no mutar obj
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  // el on indica una nueva procedimiento para un action en especifico
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {completado}) => {
    return state.map((todo) => {
        return {
          ...todo,
          completado: completado,
        };
    });
  }),
  );

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
