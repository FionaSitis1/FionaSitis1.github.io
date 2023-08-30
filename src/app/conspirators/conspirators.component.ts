import { Component,OnDestroy,OnInit } from '@angular/core';
import { Blog } from 'src/assets/interface/blog';
import { FileReadService } from '../file-read.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-conspirators',
  templateUrl: './conspirators.component.html',
  styleUrls: ['./conspirators.component.css']
})
export class ConspiratorsComponent {
  public blog: Blog;
  subscriptions: Array<any> = [];
  navigationSubscription;
  current_chap: number;

  constructor(
    private getBlog: FileReadService,
    private route: ActivatedRoute,
    private router: Router
    ){
      this.navigationSubscription = this.router.events.subscribe(
        (e: any) => {
          if(e instanceof NavigationEnd){
            this.receiveChp();
          }
        }
      )
    }

  ngOnInit(): void {
    this.receiveChp()
}

receiveChp(){
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.current_chap = id;
  this.subscriptions.push(
    this.getBlog.getConspiratorsByChapter(id).subscribe(
      blog => {
        if(blog){
          this.blog = blog;
        }
       else{
        Swal.fire('Error','Chapter does not exisit yet, don\'t be a smartass.','error')
       }
      }))
    }

chpChange(value:number){
    this.router.navigate(['/conspirators', value]);
}


 
ngOnDestroy(): void {
  this.subscriptions.forEach(s => s.unsubscribe());
}
}
