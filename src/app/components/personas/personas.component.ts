import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { DialogService } from 'src/app/services/dialog-service.service';
import { PersonaService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{

  currentPage: number = 1;
  totalPages: number = 1; 
  limit: number = 2; 

  constructor( private _personaService:PersonaService, private _router: Router, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  personas: Persona [] = [];

  getPersonas(){
    this._personaService.getPersonas(this.currentPage, this.limit).subscribe(data => {
      this.personas = data.personas;
      this.totalPages = data.totalPages;
    }, error => {
      console.log(error);
    })
  }

  prevPage() {
    this.currentPage = this.currentPage - 1; 
    this.getPersonas();
  }

  nextPage() {
    this.currentPage = this.currentPage + 1; 
    this.getPersonas();
  }

}
