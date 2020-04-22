import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router : Router) {}

  pageInput(){
    this.router.navigate(['/input']);
  }

  pageEdit(){
    this.router.navigate(['/edit']);
  }
  
  pageList(){
    this.router.navigate(['/list']);
  }

  
  listJurusan = [];
  data = [];
  input(nama, penjelasan){
    this.data = [nama, penjelasan];
    this.listJurusan.push(this.data);
  }

  getListData(){
    return this.listJurusan;
  }
}