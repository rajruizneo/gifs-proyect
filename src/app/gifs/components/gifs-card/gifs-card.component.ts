import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit{
  @Input()
  public gifCard!:Gif;

  constructor(){}

  ngOnInit(): void {
    if(!this.gifCard) throw new Error('Gif property required!');
  }


}
