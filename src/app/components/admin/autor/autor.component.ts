import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  authors$!: Observable<Autor[]>;
  edit!: boolean;
  displayDialogAuthor!: boolean;
  formGroup!: FormGroup;

  constructor(
    private authorService: AutorService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.authors$ = this.authorService.browse();
    this.configForm();
  }

  configForm(): void {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(),
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      ultimoAcesso: new FormControl('')
    });
  }

    // Acrônimo B.R.E.A.D
    add(): void{
      this.formGroup.reset();
      this.edit = false;
      this.displayDialogAuthor = true;
    }

    save(): void {
      this.authorService.addOrEdit(this.formGroup.value)
        .then(() => {
          this.displayDialogAuthor = false;
          Swal.fire(`Autor ${ !this.edit ? 'salvo' : 'atualizado' } com sucesso.`, '', 'success');
        })
        .catch((error) => {
          this.displayDialogAuthor = false;
          Swal.fire(`Erro ao ${ !this.edit ? 'salvar' : 'atualizar' } o autor.`, `Detalhes: ${ error }`, 'error');
        });
    }

    delete(categoria: Autor): void {
      Swal.fire({
        title: 'Confirma a exclusão do autor?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          this.authorService.delete(categoria.id).then(() => {
            Swal.fire('Autor excluído com sucesso!', '', 'success');
          });
        }
      });
    }

    selectCategoria(categoria: Autor): void {
      this.edit = true;
      this.displayDialogAuthor = true;
      this.formGroup.setValue(categoria);
    }

}
