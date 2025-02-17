import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translateService =inject(TranslateService)
  setDefaultLang(Lang:string): void {
    this.translateService.setDefaultLang(Lang)
  }
  constructor() { }
}
