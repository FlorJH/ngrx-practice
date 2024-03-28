import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosVarios } from 'src/app/filter/filter.action';
import * as actions from '../../filter/filter.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  
  filtroActual: string | filtrosVarios = 'todos';
  filtros: actions.filtrosVarios[] = ['completados','pendientes', 'todos']
  pendientes: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro => {
    this.filtroActual = filtro
    })
  }

  cambiarFiltro(filtro: actions.filtrosVarios){
   this.store.dispatch(actions.setFiltro({filtro:filtro}))
  }

}
