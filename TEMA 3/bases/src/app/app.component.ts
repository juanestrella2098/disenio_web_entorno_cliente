import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = "Primera app de angular";
  public contuer: number = 10;

  increaseBy (value:number):void{
    this.contuer+=value;
  }

  resetConter ():void{
    this.contuer = 0;
  }
}
