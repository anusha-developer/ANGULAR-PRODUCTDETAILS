import { Component, OnInit } from '@angular/core';

export class Student{
  Sno:number=0;
  Sname:string="";
  Sbranch:string="";
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  Studentdata:Student= new Student();
  studentArray:Student[]=[];

  constructor() { }

  ngOnInit(): void {
    this.Studentdata.Sno=1;
    this.Studentdata.Sname="Skill";
    this.Studentdata.Sbranch="CSe";
    this.studentArray.push(this.Studentdata);
    console.log(this.Studentdata);
    
    
  }

}
