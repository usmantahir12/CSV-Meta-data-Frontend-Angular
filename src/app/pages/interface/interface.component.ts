import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'] // fixed typo in 'styleUrls'
})
export class InterfaceComponent {}
