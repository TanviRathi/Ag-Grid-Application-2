import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;
  title = 'getdat';
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
registrationForm = new FormGroup({
    make: new FormControl(''),
    model: new FormControl(''),
    price: new FormControl(''),
  });
  //tslint:disable-next-line: typedef
    Add(){ 
      var obj={
        make: this.registrationForm.get('make')!.value,
                  // tslint:disable-next-line: no-non-null-assertion
        model:  this.registrationForm.get('model')!.value ,
                  // tslint:disable-next-line: no-non-null-assertion
        price:  this.registrationForm.get('price')!.value
      }
        //
         // if (this.rowData.indexOf(obj)=== -1){
           var x = new Set(this.rowData.map(res=>res.make));
          if(x.size<this.rowData.length)
           {
             alert('Duplicate')
           }
           else{
            this.rowData.push(obj);
           }
           
          //}
          
           this.agGrid.api.setRowData(this.rowData);
       }
  }
