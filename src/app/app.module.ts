import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';

@NgModule({
  imports:      [
     BrowserModule,
      FormsModule,
      RouterModule.forRoot(
        [
          {path:'', component: HomeComponent},
          {path:'tasks', component: TasksComponent}
        ]
      )
     ],
  declarations: [
     AppComponent,
     HelloComponent,
     HomeComponent,
     TasksComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [
    TimerService,
    TasksService
  ]
})
export class AppModule { }
