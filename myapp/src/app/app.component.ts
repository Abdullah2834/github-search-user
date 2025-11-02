import { Component, OnInit } from '@angular/core';

import { HomepageComponent } from './components/homepage/homepage.component';
import { GithubApiService } from './services/github.service';

@Component({
  selector: 'app-root',
  imports: [HomepageComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'myapp';

  


}
