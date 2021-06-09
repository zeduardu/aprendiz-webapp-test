import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { Post } from 'src/app/models/post.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$: Observable<Post[]>;
  categories$: Observable<Categoria[]>;
  categoryFilter: string;
  edit: boolean;
  displayDialogPost: boolean;
  form: FormGroup;

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

  configForm() {
    this.form = this.formBuiler.group({
      id: new FormControl(),
      nome: new FormControl('', Validators.required),
      email:  
    });
  }

}
