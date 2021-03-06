import { Component, Input, OnInit } from '@angular/core';
import { HeroGameService } from '../../herogame.service';
import { Result } from '../../models/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: Result;

  constructor(private _api: HeroGameService) { }

  ngOnInit(): void {
  }

}
