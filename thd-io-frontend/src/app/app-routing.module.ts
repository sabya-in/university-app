import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path:'news',component : NewsComponent},
  {path:'events',component : EventsComponent},
  {path:'navigation',component : NavigationComponent},
  {path:'login',component : LoginComponent},
  {path:'courses',component : CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsComponent, EventsComponent, NavigationComponent, LoginComponent, CoursesComponent]
