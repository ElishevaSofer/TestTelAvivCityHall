import { Component, OnInit } from '@angular/core';
import { IssResult } from 'src/IssResult';
import { IssService } from '../iss.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNoteComponent>) { }
  note : IssResult;
   
  ngOnInit(): void {
    this.note = new IssResult();
  }

  send()
  {
    this.dialogRef.close(this.note);
  }
}
