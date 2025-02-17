import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from './Services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  translationService =inject(TranslationService)
  ngOnInit(): void {
    this.translationService.setDefaultLang('en')
  }
}
