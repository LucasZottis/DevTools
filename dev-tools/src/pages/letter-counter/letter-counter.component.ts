import { Component, OnInit } from '@angular/core';
import { PageBase } from '../pageBase';

@Component({
  selector: 'letter-counter',
  standalone: true,
  imports: [],
  templateUrl: './letter-counter.component.html',
  styleUrl: './letter-counter.component.scss'
})

export class LetterCounterComponent extends PageBase implements OnInit {
  private _caseSensitive: string = "g";

  caracteres: number = 0;
  caracteresWithoutWhiteSpace: number = 0;
  whiteSpace: number = 0;
  vowels: number = 0;
  consonant: number = 0;
  numbers: number = 0;
  words: number = 0;
  phrases: number = 0;
  searchedFor: number = 0;

  search?: string;
  text?: string;

  private _phraseCounter() {
    let expression = /[.!?](?:\s|$)/g;
    let count = this.text?.match(expression);
    this.phrases = count ? count.length : 0;
  }

  private _count() {
    this.caracteres = this.text?.length ?? 0;
    this.caracteresWithoutWhiteSpace = this.text?.replace(/\s/g, '').length ?? 0;
    this.whiteSpace = this.text?.split(' ').length ?? 0;
    this.vowels = this.text?.match(/[aeiou]/gi)?.length || 0;
    this.consonant = this.text?.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
    this.numbers = this.text?.match(/\d/g)?.length || 0;
    this.words = this.text?.trim().split(' ').length ?? 0;
    this._phraseCounter();
    if (this.search)
      this.searchedFor = (this.text?.split(new RegExp(this.search, this._caseSensitive))?.length ?? 0) - 1;
    else
      this.searchedFor = 0;
  }

  onInputTextArea(event: any) {
    this.text = event.target.value;
    this._count();
  }

  onInputSearchValue(event: any) {
    this.search = event.target.value;
    this._count();
  }

  onChangeCheckBox(event: any) {
    if (event.target.checked)
      this._caseSensitive = "g";
    else
      this._caseSensitive = "gi";

    this._count();
  }

  ngOnInit(): void {
    this.addDescription('Ferramenta para contagem de caracteres.');
  }
}