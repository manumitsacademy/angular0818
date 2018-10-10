import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {
	
	firstname="Praveen";
	currentTask;
	tasks = [
				{"name":"washing cloths","deadline":"30082018","concern_person":"Kalyani"},
				{"name":"taxfiling","deadline":"31082018","concern_person":"Praveen"},
				{"name":"Fee Payment Manas","deadline":"07092018","concern_person":"Praveen"}
				
			];
	showTask(index){
		this.currentTask=this.tasks[index];	
	}
	  constructor() { }

	  ngOnInit() {
	  }

}
