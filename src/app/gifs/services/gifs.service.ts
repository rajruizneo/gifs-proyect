import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string = '9qXK9ZGWtNSXHGDoKM4lJedhbhIDqQSZ';
  private serviceUrl:string='https://api.giphy.com/v1/gifs';

  private _tagsHistory:string[]=[];
  public gifsList:Gif[]=[];

  constructor(private http:HttpClient) { }

  get tagsHistory():string[]{
    //return [...this.tagsHistory];
    return this._tagsHistory;
  }

  private organizeHistory(tag:string):void{
    tag=tag.toLowerCase();
    if(this._tagsHistory.includes(tag))
    {
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!==tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  public serchTag(tag:string):void{
    if (tag.length===0) return;

    this.organizeHistory(tag);
    //console.log(this._tagsHistory);

    /*fetch('https://api.giphy.com/v1/gifs/search?api_key=9qXK9ZGWtNSXHGDoKM4lJedhbhIDqQSZ&q=halo&limit=10')
    .then(resp=>resp.json())
    .then(data=>console.log(data));
    */

    const params:HttpParams = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params:params})
    .subscribe(resp=>{
      this.gifsList = resp.data;
      //console.log({gifs:this.gifsList});
    });


  }


}
