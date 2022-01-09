import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'news',component : NewsComponent},
<<<<<<< HEAD
  {path:'events',component : EventsComponent},
  {path:'navigation',component : NavigationComponent},
=======
  {path:'chat',component : ChatComponent},
  {path:'events',component : EventsComponent, canActivate: [AuthGuard]},
  {path:'navigation',component : NavigationComponent, canActivate: [AuthGuard]},
>>>>>>> c05b33b6e113aea90cf336f527e724df98b8aeed
  {path:'login',component : LoginComponent},
  {path:'courses',component : CoursesComponent},
  {path:'rooms',component : RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsComponent, EventsComponent, NavigationComponent, LoginComponent, CoursesComponent, RoomsComponent]
