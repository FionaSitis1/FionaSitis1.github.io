import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { Blog } from 'src/assets/interface/blog';
import { FileReadService } from '../file-read.service';

@Component({
  selector: 'app-somebody-to-love',
  templateUrl: './somebody-to-love.component.html',
  styleUrls: ['./somebody-to-love.component.css']
})
export class SomebodyToLoveComponent implements OnInit, OnChanges{
  public blog: Blog;

  constructor(private getBlog: FileReadService){
  }

  ngOnInit(): void {
    this.getBlog.getSTLBlogByChapter(1).subscribe( //initiate first chapter
      blog => {
        this.blog = blog[0];
      }
    )
}

receiveChp(value: number){
  this.getBlog.getSTLBlogByChapter(value).subscribe(
    blog => {
      console.log(value);
      console.log(blog)
      this.blog = blog[0];
      console.log(this.blog)
    }
  )
}
ngOnChanges(changes: SimpleChanges): void {
  if(changes['blog'].currentValue()){
    console.log(changes['blog'].currentValue())
  }
}



}
