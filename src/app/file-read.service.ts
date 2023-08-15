import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novel } from 'src/novel';

@Injectable({
  providedIn: 'root'
})
export class FileReadService {
  private fileText: any;
  private _stl = "assets/texts/stl_full.txt";
  private _allNovel = "assets/json/novel.json"

// TODO
  private _du = "";

  constructor(private http: HttpClient) { }

  getAllNovel(): Observable<Novel[]>{
    return this.http.get<Novel[]>(this._allNovel)
  }

  getSTLFile()  {
     return this.http.get(this._stl, { responseType: 'text'})
  }

  getDuFile()  {
    return this.http.get(this._du, { responseType: 'text'})
 }

}
