import { createAction, props } from "@ngrx/store";

export type filtrosVarios = "todos" | "completados" | "pendientes";

export const setFiltro = createAction(
    '[filtro] Set filtro',
    props<{filtro: filtrosVarios}>()
    );