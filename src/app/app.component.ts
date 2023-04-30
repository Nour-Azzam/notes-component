import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Note } from './note.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes';

  constructor(private httpClient: HttpClient) {

  }

  notes$ = this.httpClient
    .get<any>('../../assets/notes.json')
    .pipe(map((notes) => notes as Note[]));
}
