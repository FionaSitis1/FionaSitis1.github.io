import { Component } from '@angular/core';
import { FileReadService } from '../file-read.service';
import { Novel } from 'src/assets/interface/novel';

@Component({
  selector: 'app-novel-list',
  templateUrl: './novel-list.component.html',
  styleUrls: ['./novel-list.component.css']
})
export class NovelListComponent {
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
