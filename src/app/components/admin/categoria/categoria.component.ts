import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias$!: Observable<Categoria[]>;
  edit!: boolean;
  displayDialogCategoria!: boolean;
  formGroup!: FormGroup;

  constructor(private categoriaService: CategoriaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.browse();
    this.configForm();
  }

  // Acrônimo B.R.E.A.D
  add(): void{
    this.formGroup.reset();
    this.edit = false;
    this.displayDialogCategoria = true;
  }

  save(): void {
    this.categoriaService.addOrEdit(this.formGroup.value)
      .then(() => {
        this.displayDialogCategoria = false;
        Swal.fire(`Departamento ${ !this.edit ? 'salvo' : 'atualizado' } com sucesso.`, '', 'success');
      })
      .catch((error) => {
        this.displayDialogCategoria = false;
        Swal.fire(`Erro ao ${ !this.edit ? 'salvar' : 'atualizar' } a categoria.`, `Detalhes: ${ error }`, 'error');
      });
  }

  delete(categoria: Categoria): void {
    Swal.fire({
      title: 'Confirma a exclusão do dapartamento?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.categoriaService.delete(categoria.id).then(() => {
          Swal.fire('Categoria excluída com sucesso!', '', 'success');
        });
      }
    });
  }

  selectCategoria(categoria: Categoria): void {
    this.edit = true;
    this.displayDialogCategoria = true;
    this.formGroup.setValue(categoria);
  }

  configForm(): void {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(),
      nome: new FormControl('', Validators.required)
    });
  }
}
