import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { Post } from 'src/app/models/post.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$!: Observable<Post[]>;
  categories$!: Observable<Categoria[]>;
  categoryFilter!: string;
  edit!: boolean;
  displayDialogPost!: boolean;
  formGroup!: FormGroup;

  constructor(
    private postService: PostService,
    private categoryService: CategoriaService,
    private formBuiler: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.browse();
    this.categories$ = this.categoryService.browse();
    this.categoryFilter = 'TODOS';
    this.configForm();
  }

  configForm(): void {
    this.formGroup = this.formBuiler.group({
      id: new FormControl(''),
      author: new FormControl('', Validators.required),
      publicationDate: new FormControl(''),
      lastUpdate: new FormControl(''),
      title!: new FormControl('', Validators.required),
      body!: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  // Acrônimo B.R.E.A.D
  add(): void{
    this.formGroup.reset();
    this.edit = false;
    this.displayDialogPost = true;
  }

  save(): void {
    this.postService.addOrEdit(this.formGroup.value)
      .then(() => {
        this.displayDialogPost = false;
        Swal.fire(`Departamento ${ !this.edit ? 'salvo' : 'atualizado' } com sucesso.`, '', 'success');
      })
      .catch((error) => {
        this.displayDialogPost = false;
        Swal.fire(`Erro ao ${ !this.edit ? 'salvar' : 'atualizar' } a categoria.`, `Detalhes: ${ error }`, 'error');
      });
  }

  delete(post: Post): void {
    Swal.fire({
      title: 'Confirma a exclusão do dapartamento?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.postService.delete(post.id).then(() => {
          Swal.fire('Categoria excluída com sucesso!', '', 'success');
        });
      }
    });
  }

  selectPost(post: Post): void {
    this.edit = true;
    this.displayDialogPost = true;
    this.formGroup.setValue(post);
  }

}
