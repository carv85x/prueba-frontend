import { ActivoService } from './../activo.service';
import { Component, OnInit } from '@angular/core';
import { Activo } from '../activo';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  providers: [ActivoService],
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

  activos: Activo[] = [];

  constructor(private service: ActivoService) { }

  getActivos(): void {
    this.service.getActivos().subscribe((response: any) => {
      this.activos=response;
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getActivos();
    console.log(this.activos);
  }

}
