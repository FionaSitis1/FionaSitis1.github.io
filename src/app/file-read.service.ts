import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReadService {
  private fileText: any;
  private _stl = "assets/texts/stl_full.txt";

// TODO
  private _du = "";

  constructor(private http: HttpClient) { }

  getSTLFile()  {
     return this.http.get(this._stl, { responseType: 'text'})
  }

  getDuFile()  {
    return this.http.get(this._du, { responseType: 'text'})
 }

}
