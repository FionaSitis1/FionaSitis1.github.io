import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/assets/interface/blog';
import { Novel } from 'src/assets/interface/novel';
import { IMenuLink } from 'src/assets/interface/imenulink'

@Injectable({
  providedIn: 'root'
})
export class FileReadService {
  private fileText: any;
  private _allNovel = "assets/json/novel.json"

// stl
  private _stlCatalog = "assets/json/stl/chp.json";
  private _stlBlog = "assets/json/stl/file.json";

// Du
  private _duCatalog = "assets/json/du/chp.json";
  private _duBlog = "assets/json/du/file.json";
 



  constructor(private http: HttpClient) { }

  // to get all novel lists
  getAllNovel(): Observable<Novel[]>{
    return this.http.get<Novel[]>(this._allNovel)
  }

// get stl catalog info
  getSTLCatalog(): Observable<IMenuLink[]>{
    return this.http.get<IMenuLink[]>(this._stlCatalog)
  }

  // get stl blog by chapter
  getSTLBlogByChapter(chp: number): Observable<Blog[]>{
    return this.http.get<Blog[]>(this._stlBlog)
  }



// get du catalog info TODO:
  getDuCatalog(): Observable<IMenuLink[]>{
    return this.http.get<IMenuLink[]>(this._duCatalog)
  }

  // get du blog by chapter TODO:
  getDuBlogByChapter(chp: number): Observable<Blog[]>{
    return this.http.get<Blog[]>(this._duBlog)
  }



}
