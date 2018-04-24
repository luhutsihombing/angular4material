import { ConfirmationService } from './_service/confirmation.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  private idConfirmation : string;
  confirmationData;

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        public confirmationAPI: ConfirmationService

  ) {
   
  }

  ngOnInit() {
        this.idConfirmation = this.route.snapshot.paramMap.get('id');
        console.log("IDDDDDDDDDDDDD")
        console.log(this.idConfirmation)
    this.loadData()
  }

  loadData() 
  {
   this.confirmationAPI.getConfirmation(this.idConfirmation)
   .subscribe((confitmationMODEL) => {
      this.confirmationData = confitmationMODEL;
      console.log("AAAAAAAAAAAAAAAAAAAAAAAa")
      console.log( this.confirmationData)
      });    
  }


}
