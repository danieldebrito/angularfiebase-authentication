import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularfiebase-authentication';

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}
