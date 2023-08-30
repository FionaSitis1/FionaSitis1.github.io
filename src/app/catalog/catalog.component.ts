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

<<<<<<< HEAD
=======
  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      var x = document.getElementById("prev")!;
      var y = document.getElementById("next")!;
      if(event instanceof NavigationStart){
        if(event.url == '/' || event.url =='/ch1'){
          x.style.display = "none";
          y.style.display = "block";
        }
        else if(event.url == '/ch20')
        {
          x.style.display = "block";
          y.style.display = "none";
        }
       else{
        x.style.display = "block";
          y.style.display = "block";
        }
        }
      
    })
>>>>>>> gh-pages


  constructor(private router: Router, private fileRead: FileReadService) {
  
    }
 
<<<<<<< HEAD

=======
  chapterList: Array<IMenuLink> = [
    
    
    {
      routePath: '/ch1',
      linkName: '1. Can Anybody'
    },
    {
      routePath: '/ch2',
      linkName: '2. find me'
    },
    {
      routePath: '/ch3',
      linkName: '3. somebody to'
    },
    {
      routePath: '/ch4',
      linkName: '4. love?'
    },
    {
      routePath: '/ch5',
      linkName: '5. I get down'
    },
    {
      routePath: '/ch6',
      linkName: '6. on my knees'
    },
    {
      routePath: '/ch7',
      linkName: '7. and I start to pray'
    },
    {
      routePath: '/ch8',
      linkName: '8. Till the tears run down from my eyes'
    },
    {
      routePath: '/ch9',
      linkName: '9. Lord'
    },
    {
      routePath: '/ch10',
      linkName: '10. Every day I try and I try and I try'
    },
    {
      routePath: '/ch11',
      linkName: '11. But everybody wants to put me down'
    },
    {
      routePath: '/ch12',
      linkName: '12. They say I\'m going crazy'
    },
    {
      routePath: '/ch13',
      linkName: '13. They say I got a lot of water in my brain'
    },
    {
      routePath: '/ch14',
      linkName: '14. I got no common sense'
    },
    {
      routePath: '/ch15',
      linkName: '15. got nobody left to believe in'
    },
    {
      routePath: '/ch16',
      linkName: '16. Anybody find me somebody to love?'
    },
    {
      routePath: '/ch17',
      linkName: '17. Got no feel, I got no rhythm'
    },
    {
      routePath: '/ch18',
      linkName: '18. I just keep losing my beat'
    },
    {
      routePath: '/ch19',
      linkName: "19. I ain't gonna face no defeat"
    },
    {
      routePath: '/ch20',
      linkName: "20. I just gotta get out of this prison cell"
    },
  ]
>>>>>>> gh-pages

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
