import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements OnInit{
  data: any;

  constructor(private router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras.state;
  }


  ngOnInit(): void {
    
  }
}
