import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from 'src/assets/interface/blog';
import { Novel } from 'src/assets/interface/novel';
import { IMenuLink } from 'src/assets/interface/imenulink'
import { stlBLOGS } from '../assets/db/stl/file'
import { duBLOGS } from '../assets/db/du/file'
import { godzillaBLOGS } from 'src/assets/db/godzilla/file';
import { conspiratorsBLOGS } from 'src/assets/db/conspirators/file';

@Injectable({
  providedIn: 'root'
})
export class FileReadService {
  private fileText: any;
  private _allNovel = "assets/db/novel.json"

// stl
  private _stlCatalog = "assets/db/stl/chp.json";

// Du
  private _duCatalog = "assets/db/du/chp.json";

// godzilla
  private _godzillaCatalog = "assets/db/godzilla/chp.json";
 
  // conpirator
  private _conspiratorCatalog = "assets/db/conspirators/chp.json";



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
  getSTLByChapter(id: number): Observable<Blog>{
    const blog = stlBLOGS.find(b => b.id == id)!;
    return of(blog);
  }



// get du catalog info
  getDuCatalog(): Observable<IMenuLink[]>{
    return this.http.get<IMenuLink[]>(this._duCatalog)
  }

  // get du blog by chapter 
  getDuByChapter(id: number): Observable<Blog>{
    const blog = duBLOGS.find(b => b.id == id)!;
    return of(blog);
  }

  // get godzilla catalog info
  getGodzillaCatalog(): Observable<IMenuLink[]>{
    return this.http.get<IMenuLink[]>(this._godzillaCatalog)
  }

  // get godzilla blog by chapter 
  getGodzillaByChapter(id: number): Observable<Blog>{
    const blog = godzillaBLOGS.find(b => b.id == id)!;
    return of(blog);
  }

    // get conspirators catalog info
    getconspiratorsCatalog(): Observable<IMenuLink[]>{
      return this.http.get<IMenuLink[]>(this._conspiratorCatalog)
    }
  
    // get conspirators blog by chapter 
    getConspiratorsByChapter(id: number): Observable<Blog>{
      const blog = conspiratorsBLOGS.find(b => b.id == id)!;
      return of(blog);
    }




}
