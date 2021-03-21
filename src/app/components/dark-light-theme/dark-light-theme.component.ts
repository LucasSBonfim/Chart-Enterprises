
import { DOCUMENT } from '@angular/common';

import { Component, OnInit, Inject, Renderer2 } from '@angular/core';


@Component({

  selector: 'app-dark-light-theme',

  templateUrl: './dark-light-theme.component.html',

  styleUrls: ['./dark-light-theme.component.scss']

})


export class DarkLightThemeComponent implements OnInit {

  theme: Theme = 'ligh-theme';

  constructor(

    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2

  ) { }

  ngOnInit(): void {

    this.initializeTheme();
  }

  switchTheme() {

    this.document.body.classList.replace(this.theme, this.theme === 'ligh-theme' ? (this.theme = 'dark-theme') : (this.theme = 'ligh-theme')
    )
  };

  initializeTheme = (): void => this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'ligh-theme' | 'dark-theme';
