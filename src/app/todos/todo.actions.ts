import { createAction, props } from '@ngrx/store';

export const crear = createAction (
    '[TODO] Crear Todo',
    props<{texto:string}>());

export const toggle = createAction (
    '[TODO] Toggle Todo',
    props<{id:number}>());

export const editar = createAction (
    '[TODO] TODO Editar',
    props<{id:number, texto: string}>());

export const borrar = createAction (
    '[TODO] TODO Borrar',
    props<{id:number}>());

export const toggleAll = createAction (
    '[TODO] Toggle all',
    props<{completado:boolean}>());
