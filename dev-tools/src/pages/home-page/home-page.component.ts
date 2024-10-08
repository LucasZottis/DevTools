import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PageBase } from '../pageBase';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends PageBase implements OnInit {
  ngOnInit(): void {
    this.addDescription('As melhores ferramentas para desenvolvedores estão aqui!');
  }
}