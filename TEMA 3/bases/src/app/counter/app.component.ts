import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h1>{{ title }}</h1>
    <hr />
    <p>Contador: {{ contuer }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetConter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`
})

export class ConterComponent {
    public title: string = "Segundo Componente de angular";
    public contuer: number = 10;

    increaseBy(value: number): void {
        this.contuer += value;
    }

    resetConter(): void {
        this.contuer = 0;
    }
}