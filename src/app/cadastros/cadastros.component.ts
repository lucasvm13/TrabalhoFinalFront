import { Component, OnInit } from '@angular/core';
import {CadastrosService} from './cadastros.service'

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

  constructor(private cadastrosService: CadastrosService) { }

  ngOnInit() {
  }

}
