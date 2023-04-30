import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note?: Note;

  constructor() {}

  ngOnInit(): void {}

  anyUpdates(note: any) {
    if (note.updates.length === 0) return false;
    return true;
  }
}
