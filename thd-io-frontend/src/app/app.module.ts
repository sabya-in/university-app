import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterceptorsService } from './interceptors.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { ChatComponent } from './chat/chat.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SelectLanguageComponent,
    CoursesCardListComponent,
    ChatComponent,
    FooterComponent,
    CourseDialogComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXAQrYFTFqbFxsyLMvDtWfacxR_J0hGrk'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    I18nModule
  ],
  providers: [{
     provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
