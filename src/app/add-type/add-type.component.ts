import { Component, OnInit } from '@angular/core';
import {TypeService} from '../type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  name: string;

  constructor(public ts: TypeService) { }

  ngOnInit() {
  }

  save(): void {
    this.ts.save(this.name);
  }

}
