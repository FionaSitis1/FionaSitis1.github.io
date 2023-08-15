import { Component, OnInit } from '@angular/core';
import { Novel } from 'src/assets/interface/novel';
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
      this.posts = novels;
    })
  }


}

