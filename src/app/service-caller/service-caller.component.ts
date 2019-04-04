import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-service-caller',
  templateUrl: './service-caller.component.html',
  styleUrls: ['./service-caller.component.scss']
})
export class ServiceCallerComponent implements OnInit {
  constructor(private service: CounterService) { }

  ngOnInit() {
  }

  callTheService() {
    this.service.increment()
  }

}
