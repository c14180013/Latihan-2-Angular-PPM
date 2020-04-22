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

  edit(nama, penjelasan){
    for (let i = 0; i < this.listJurusan.length; i++)
    {
      if (nama == this.listJurusan[i][0])
      {
        this.listJurusan[i][1] = penjelasan;
        break;
      }
    }
  }

  getListData(){
    return this.listJurusan;
  }

  ngOnInit(){
    this.listJurusan.push(["Informatika", "Jurusan ahli komputer"]);
    this.listJurusan.push(["Manajemen Bisnis", "Jurusan ahli bisnis"]);
    this.listJurusan.push(["SIB", "Jurusan ahli komputer dan bisnis"]);
  }
}