import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!:number;
constructor(private router:ActivatedRoute){};
getParam(){
this.router.paramMap.subscribe(data=>this.id=Number(data.get('id')))}
ngOnInit():void{
this.getParam();
}
}
