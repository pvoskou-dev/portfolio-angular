import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IContact } from 'src/app/interfaces/interfaces';
import { contactData } from 'src/app/data/default-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: IContact = contactData

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.contact = this.dataService.getContactData();
  }
}
