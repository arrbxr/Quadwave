export class Employee {
    empId?: number;
    empName?: string;
    Doj?: string;
    Yoe?: number;
    destination?: string;

    empList:any = [
        { empId: 1, empName: 'John', Doj: '01/01/2021', Yoe: 1, destination: 'Bangalore' },
        { empId: 2, empName: 'Smith', Doj: '01/01/2017', Yoe: 5, destination: 'Pune' },
        { empId: 3, empName: 'Peter', Doj: '01/01/2021', Yoe: 1, destination: 'Bangalore' },
        { empId: 4, empName: 'Williams', Doj: '01/01/2019', Yoe: 3, destination: 'Hyderabad' },
        { empId: 5, empName: 'Jones', Doj: '01/01/2020', Yoe: 2, destination: 'Bangalore' },
        
      ]
    
    
      getEmployee() {
        return this.empList;
      }
    
      getEmployeeById(id: number) {
        return this.empList.filter((emp: { empId: number; }) => emp.empId === id);
      }
    
      serchByEmployeeName(name: string){
        return this.empList.filter((emp: { empName: string; }) => emp.empName.includes(name));
      }

      addEmployee(emp: Employee) {
        this.empList.push(emp);
      }
      
    

}
