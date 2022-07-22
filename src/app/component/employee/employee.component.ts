import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

declare let window: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private emp: Employee) { }

  // Modal realted code
  formModal: any;

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }


 // Employee related code
  empList: any = [];

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('employeeModal')
    );

    this.loadData();
  }

  loadData() {
    this.emp.getEmployee().subscribe((data: any) => {
      this.empList = data;
    });
  }


  // Adding Employee
  onSubmit(form: any) {
    this.emp.addEmployee(form.value).subscribe((_) => {
      alert('Employee added successfully');
      this.loadData();
    }),
      () => {
        alert('Error while adding employee');
      };
    this.formModal.hide();
    form.reset();
  }


  // delete employee
  deleteEmployee(id: number) {
    this.emp.deleteEmployee(id).subscribe((_) => {
      alert('Employee deleted successfully');
      this.loadData();
    }
    ),
      () => {
        alert('Error while deleting employee');
      };
  }



  // Serching name by using filter
  empName = '';

  searchByEmployeeName(form: any) {
    let x = form.target.value;
    return x != 0
      ? (this.empList = this.searchString(form.target.value))
      : this.loadData();
  }

  searchString(name: string) {
    return this.empList.filter((emp: { ename: string }) =>
      emp.ename.toUpperCase().includes(name.toUpperCase())
    );
  }


}
