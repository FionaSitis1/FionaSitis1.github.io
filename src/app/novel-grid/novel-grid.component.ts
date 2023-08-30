import { Component } from '@angular/core';
import { FileReadService } from '../file-read.service';
import { Novel } from 'src/assets/interface/novel';

@Component({
  selector: 'app-novel-grid',
  templateUrl: './novel-grid.component.html',
  styleUrls: ['./novel-grid.component.css']
})
export class NovelGridComponent {
  posts: Novel[];



  constructor(
    private filereadservice: FileReadService
    ){}

  ngOnInit(): void {
    this.getAllNovels();
   
  }

  getAllNovels(){
    this.filereadservice.getAllNovel().subscribe(novels =>{
      this.posts = novels;
    })
  }

}
