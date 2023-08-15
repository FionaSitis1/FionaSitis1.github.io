import { Component, OnInit } from '@angular/core';
import { Novel } from 'src/novel';
import { FileReadService } from '../file-read.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  posts: Novel[];

  constructor(private filereadservice: FileReadService){}

  ngOnInit(): void {
    this.getAllNovels();
  }

  getAllNovels(){
    this.filereadservice.getAllNovel().subscribe(novels =>{
      console.log(novels)
      this.posts = novels;
    })
  }


}
