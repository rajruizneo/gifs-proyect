import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs:Gif[] = [];

  constructor(private gifsService:GifsService){
    this.gifs = gifsService.gifsList;
  }


}
