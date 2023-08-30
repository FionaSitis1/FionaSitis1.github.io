import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { FileReadService } from '../file-read.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

 

  chapter: any;
  @Output() theCurrentChp = new EventEmitter<number>();
  current_index: number; 
  max_chap: number;
  hasPrev: boolean;
  hasNext: boolean;



  constructor(private router: Router, private fileRead: FileReadService) {
  
    }
 


  ngOnInit(): void {
    this.current_index = 1; 
    this.changeChapter(this.current_index);
    this.hasPrev = false;
    // manually check which novel catalog to return
    if(this.router.url.indexOf("/somebody-to-love") > -1){
      this.fileRead.getSTLCatalog().subscribe(
        response => {
          this.chapter = response;
          this.max_chap = response.length;
          this.checkChapter(this.current_index, this.max_chap);

        }
      )
    }else if(this.router.url.indexOf("/bet") > -1){
      this.fileRead.getDuCatalog().subscribe(
        response => {
          this.chapter = response;
          this.max_chap = response.length;
          this.checkChapter(this.current_index, this.max_chap);
        }
      )
    }else if(this.router.url.indexOf("/conspirators") > -1){
      this.fileRead.getconspiratorsCatalog().subscribe(
        response => {
          this.chapter = response;
          this.max_chap = response.length;
          this.checkChapter(this.current_index, this.max_chap);
        }
      )
    }else if(this.router.url.indexOf("/godzilla") > -1){
      this.fileRead.getGodzillaCatalog().subscribe(
        response => {
          this.chapter = response;
          this.max_chap = response.length;
          this.checkChapter(this.current_index, this.max_chap);
        }
      )
    }

  }

  checkChapter(current: number, max: number){
    if(current < max){
      this.hasNext = true;
      if(current != 1){
        this.hasPrev = true;
      }
    }else if(current == max){
      this.hasNext = false;
    }else if(current == 1){
      this.hasPrev = false;
    }
  }


  previousCha(){
    this.current_index-=1;
    this.changeChapter(this.current_index);
    this.checkChapter(this.current_index, this.max_chap);
  }

  nextCha(){
    this.current_index+=1;
    this.theCurrentChp.emit(this.current_index);
    this.checkChapter(this.current_index, this.max_chap);
  }

  changeChapter(value: number){
    this.current_index = value;
    this.theCurrentChp.emit(value)
    this.checkChapter(this.current_index, this.max_chap);
  }

  catalogChange(value: number){

    this.changeChapter(value);
  }

  backtoMain(){
    this.router.navigate(['/main']);
  }



}
