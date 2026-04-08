import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = [
    { title: 'HVAC Design', desc: 'Load calculation, duct design' },
    { title: 'Installation', desc: 'System execution and setup' },
    { title: 'Consulting', desc: 'Energy-efficient solutions' },
    { title: 'Maintenance', desc: 'Regular service & support' },
    { title: 'Audit', desc: 'System performance analysis' },
    { title: 'Automation', desc: 'Smart HVAC controls' }
  ];
}