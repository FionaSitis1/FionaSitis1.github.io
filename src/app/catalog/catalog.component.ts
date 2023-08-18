import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

interface IMenuLink{
  routePath: string;
  linkName: string
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

 

  chapter: any;

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      var x = document.getElementById("prev")!;
      var y = document.getElementById("next")!;
      if(event instanceof NavigationStart){
        if(event.url == '/' || event.url =='/ch1'){
          x.style.display = "none";
          y.style.display = "block";
        }
        else if(event.url == '/ch18')
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

    
   
  }
 
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
  ]

  ngOnInit(): void {
   
  }





  

  previousCha(){
    let newUrl = this.router.url.toString();
    let indnum = (Number(newUrl.substring(3,)) - 1).toString();
    let newChp = ('ch').concat(indnum);
    this.router.navigateByUrl(newChp);
 
  }

  nextCha(){
    let newUrl = this.router.url.toString();
    let indnum = (Number(newUrl.substring(3,)) + 1).toString();
    let newChp = ('ch').concat(indnum);
    this.router.navigateByUrl(newChp);
  }





}
