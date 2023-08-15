import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
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



  constructor(private router: Router, private fileRead: FileReadService) { 
    this.router.events.subscribe((event) => {

      if(event instanceof NavigationStart){
        console.log(event.url)
        if(event.url == "/somebody-to-love"){

        }
        else if(event.url == "/赌"){

        }
      }


      // var x = document.getElementById("prev")!;
      // var y = document.getElementById("next")!;
      // if(event instanceof NavigationStart){
      //   if(event.url == '/' || event.url =='/ch1'){
      //     x.style.display = "none";
      //     y.style.display = "block";
      //   }
      //   else if(event.url == '/ch17')
      //   {
      //     x.style.display = "block";
      //     y.style.display = "none";
      //   }
      //  else{
      //   x.style.display = "block";
      //     y.style.display = "block";
      //   }
      //   }
    }) 
  }
 


  ngOnInit(): void {
    this.current_index = 1; //initiate with first chapter
    this.changeChapter(this.current_index);
    console.log(this.router.url);
    if(this.router.url === "/somebody-to-love"){
      this.fileRead.getSTLCatalog().subscribe(
        response => {
          this.chapter = response;
        }
      )
    }else if(this.router.url === "/赌"){
      this.fileRead.getDuCatalog().subscribe(
        response => {
          this.chapter = response;
        }
      )
    }
     
  }





  

  previousCha(){
    // let newUrl = this.router.url.toString();
    // let indnum = (Number(newUrl.substring(3,)) - 1).toString();
    // let newChp = ('ch').concat(indnum);
    // this.router.navigateByUrl(newChp);
    this.current_index-=1;
    this.changeChapter(this.current_index);
 
  }

  nextCha(){
    // let newUrl = this.router.url.toString();
    // let indnum = (Number(newUrl.substring(3,)) + 1).toString();
    // let newChp = ('ch').concat(indnum);
    // this.router.navigateByUrl(newChp);
    this.current_index+=1;
    this.theCurrentChp.emit(this.current_index);

  }

  changeChapter(value: number){
    this.theCurrentChp.emit(value)
  }



}
