import { Component, OnInit } from '@angular/core';
import {TypeService} from '../type.service';
import {StudioService} from '../studio.service';

@Component({
  selector: 'app-add-studio',
  templateUrl: './add-studio.component.html',
  styleUrls: ['./add-studio.component.css']
})
export class AddStudioComponent implements OnInit {

  name: string;

  constructor(public ss: StudioService) { }

  ngOnInit() {
  }

  save(): void {
    this.ss.save(this.name);
  }
}
