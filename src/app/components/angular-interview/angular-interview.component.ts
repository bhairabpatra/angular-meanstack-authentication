import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-angular-interview',
  templateUrl: './angular-interview.component.html',
  styleUrls: ['./angular-interview.component.css']
})
export class AngularInterviewComponent implements OnInit {

  constructor(private AuthService:AuthService) { }

  searchField: FormControl;
  searches: string[] = [];

  Userall:any=[]
  ngOnInit(): void {

    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.searches.push(term);
        console.log("----------searches-------------" + this.searches)
      });


    this.getData()
  }

  getData() {
    this.AuthService.getData()
      .subscribe(res => {
        console.log(res);
        this.Userall = res
      }, err => {
        console.log(err);

      });
  }

  trackByMethod(index:number, el:any): number {
    console.log("++++el.id++++++" , el.id)
    return el.id;
  }


 }



