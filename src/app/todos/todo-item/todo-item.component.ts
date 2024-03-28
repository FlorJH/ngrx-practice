import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';
import { toggle } from '../todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | any;
  editando: boolean = false;
  @ViewChild('inputFisico') txtInputFisico: ElementRef | any;

  chkCompletado: FormControl | any;
  txtInput: FormControl | any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log(this.todo.completado);
    // this.todo.completado =true;
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((valor: any) => {
      console.log(valor);
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}))
  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtInput.invalid){return;}
    if(this.txtInput.value === this.todo.texto){return;}

    this.store.dispatch(actions.editar(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
        })
        ))
  }
}
