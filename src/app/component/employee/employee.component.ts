import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private emp: Employee) { }

  formModal: any;

  empList: any = [];

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('employeeModal'),
    );
    this.loadData();
  }

  loadData(){
    this.empList = this.emp.getEmployee();
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

  empName = ""

  searchByEmployeeName(form: any) {
    let x = form.target.value
    return x != 0 ? this.empList = this.emp.serchByEmployeeName(form.target.value) : this.loadData();
  }

  onSubmit(form: any) {
     
    if(form.value.empId in this.empList){
      alert("Employee already exists")
    } else {
      this.emp.addEmployee(form.value);
      this.loadData();
      this.formModal.hide();
      form.reset();
    }
  }


}
