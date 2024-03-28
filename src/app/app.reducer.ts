import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosVarios } from './filter/filter.action';
import { filtroReducer } from "./filter/filter.reducers";

export interface AppState{
    todos: Todo[],
    filtro: filtrosVarios | string
}

export const appReducers: ActionReducerMap<AppState> = {
    todos : todoReducer,
    filtro: filtroReducer
}