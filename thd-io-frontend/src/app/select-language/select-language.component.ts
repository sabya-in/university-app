import { Component, OnInit } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

interface Languages {
  value: string;
  viewValue: string;
  langView: string;
  }  

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})

  export class SelectLanguageComponent implements OnInit {

    ngOnInit() {
      console.log("cached lang: " + this.translate.currentLang);
      // based on stored cache from language.currentLanguage offered by i18n cache select one current option 
      switch (this.translate.currentLang) {
        case 'de':
          this.langView = "Sprache";
          this.currLangViewValue = 'DE';
          break;

        case 'fr':
          this.langView = "Langue";
          this.currLangViewValue = 'FR';
          break;
  
        default:
          this.langView = "Language";
          this.currLangViewValue = 'EN';
          break;
      }
      console.log("cached lang: " + this.translate.currentLang);
    }
  
    constructor(public translate: TranslateService) { }
  
    languages: Languages[] = [
      { value: 'en', viewValue: 'EN', langView: 'Language' },
      { value: 'de', viewValue: 'DE', langView: 'Sprache' },
      { value: 'fr', viewValue: 'FR', langView: 'Langue' }
      ];      

    langView = 'Language';
    currLangViewValue = 'EN';
  
    changeLanguage(l: string): void {
      this.translate.use(l);
      console.log("changeLanguage: " + l);
      switch (l) {
        case 'de': this.langView = 'Sprache'; break;
        case 'fr': this.langView = 'Langue'; break;
        default: this.langView = 'Language'
      }
    }
  }
  