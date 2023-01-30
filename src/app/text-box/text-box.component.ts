import { note } from './../note';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit{

  temp_note!:note;
  constructor(){

    this.temp_note = {heading:"", text:""}
  }
  submit(){
    console.log(this.temp_note);
    // this.throw_note.emit(this.temp_note);
    this.temp_note = {heading:"", text:""}
  }

  ngOnInit():void {

  }
}
