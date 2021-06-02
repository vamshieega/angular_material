import { Component,ViewChild , AfterViewInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularMaterials';
  //Badges
  hidden = false;
  openprofile:boolean=false;
  notifications=0;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  //Progresses Spinner
  ShowSpinner=false;
  loadData(){
    this.ShowSpinner = true;
    setTimeout(() => {
      this.ShowSpinner=false;
    }, 5000);
  }
  //sidenav
  opened=false;

  //menu
  username="Vamshi";

  //tab 
  mychange(index: any){
    console.log(index);
  }
//select Control
mySelectedValue:string | undefined;
mySelectedValue2 : string | undefined;
mySelectedValue3 : string | undefined;
//Date Picker
minDate= new Date();
maxDate= new Date(2021,1,15); 
dateFilter = (date: { getDay: () => any; }) =>{
  const day = date.getDay();
  return day !=0 && day != 6; 
}
// Virtual Scrolling 
// numbers=[];
 
//snack bar
constructor( private snackbar: MatSnackBar,public dialog: MatDialog){
 // Virtual Scrolling 
//   for ( let i = 0; i < 1000; i++) {
//    this.numbers.push(i);
// }
}
openSnackBar(msg: string,action: string | undefined){
let  snackbarref = this.snackbar.open(msg,action,{duration:2000});
snackbarref.afterDismissed().subscribe(
  ()=>{
    console.log("Action Dismissed");
  }
);
snackbarref.onAction().subscribe(
  ()=>{
    console.log("Trigged");
  }
);
}
// Dialog 
 
openDialog(){
let dialogRef = this.dialog.open(DialogComponent,{data:{name: 'Vamshi'}})
dialogRef.afterClosed().subscribe(
  result =>{
    console.log(`Dialog Result: ${result}`);
  }
)
}
//Tables
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator! : MatPaginator;
 
ngAfterViewInit(){
  this.dataSource.sort=this.sort;
  this.dataSource.paginator=this.paginator;
}

logData(row: any){
  console.log(row);
}
name :any
applyFilter(e:any){
  this.name = e.target.value
  console.log("applufilter");
  this.dataSource.filter = this.name.trim();
}
profile(){ 
  this.openprofile=!this.openprofile
}
}
