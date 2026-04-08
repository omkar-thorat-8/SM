import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    { name: 'Mall HVAC System', desc: 'Complete system design' },
    { name: 'Factory Cooling', desc: 'Industrial cooling solution' },
    { name: 'Office AHU Setup', desc: 'Energy-efficient AHU design' }
  ];
}