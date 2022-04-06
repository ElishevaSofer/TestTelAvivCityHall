import { Component, OnInit } from '@angular/core';
import {IssResult, position} from '../../IssResult';
import {MatDialogModule} from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';
import { IssService } from '../iss.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public srv: IssService) { }
  currentPosition : position;
  notes: any;
  
  ngOnInit(): void {
    this.setPosition();
  }

  setPosition()
  {
    setTimeout(function() {   
      this.setPosition();                   
    }, 2000)
  }

  addNote()
  {
    let dialogRef = dialog.open(AddNoteComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(note => {
      this.srv.save(note).then(result => this.notes = result);
     });
    }
    
  }

}
