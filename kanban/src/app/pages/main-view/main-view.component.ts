import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  constructor(){}

  board:Board = new Board('Project One', [
    new Column('ToDO',[
      "Eleven",
      "Eight",
      "Nine",
      "Ten"
    ]),
    new Column('Ongoing',[
      "Four",
      "Five",
      "Six",
      "Seven"
    ]),
    new Column('Done',[
      "One",
      "Two",
      "Three",
      "Zero"
    ])
  ]);


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
