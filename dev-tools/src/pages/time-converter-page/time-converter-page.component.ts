import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageBase } from '../pageBase';

@Component({
  selector: 'time-converter-page',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    FormsModule
  ],
  templateUrl: './time-converter-page.component.html',
  styleUrl: './time-converter-page.component.scss'
})

export class TimeConverterPageComponent extends PageBase implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  decimal: number = 0;

  time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    decimal: 0
  };

  private _convert() {
    this.hours = this.toHours();
    this.minutes = this.toMinutes();
    this.seconds = this.toSeconds();
  }

  private formatNumber(value: number): string {
    return (value ?? 0) < 10 ? "0" + (value ?? 0) : (value ?? 0).toString();
  }

  private toHours(): number {
    return (this.time.hours ?? 0)
      + (this.time.minutes ?? 0) / 60
      + (this.time.seconds ?? 0) / 3600
      + (this.time.decimal ?? 0);
  }

  private toMinutes(): number {
    return this.time.hours * 60
      + this.time.minutes
      + this.time.seconds / 60
      + this.time.decimal * 60;
  }

  private toSeconds(): number {
    return this.time.hours * 3600
      + this.time.minutes * 60
      + this.time.seconds
      + this.time.decimal * 3600;
  }

  private toDecimal(): number {
    return this.time.hours
      + (this.time.hours / 60)
      + (this.time.hours / 3600)
      + this.time.decimal;
  }

  onInput() {
    this._convert();
  }

  formatTime(): string {
    return this.formatNumber(this.time.hours) + ":"
      + this.formatNumber(this.time.minutes) + ":"
      + this.formatNumber(this.time.seconds);
  }

  ngOnInit(): void {
    this.addDescription('Converta horas, minutos e segundo para diversos formatos.');
  }
}