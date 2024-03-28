import { createReducer, on } from '@ngrx/store';
import { filtrosVarios, setFiltro } from './filter.action';



export const initialState: filtrosVarios | string = 'todos';

const _filtroReducer = createReducer(initialState,
  on( setFiltro ,(state, { filtro }) => filtro ),
);


export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}