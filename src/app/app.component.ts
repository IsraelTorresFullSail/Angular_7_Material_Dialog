import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    public dialog: MatDialog
  ){}

  openDialog(): void {
    const dialodRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: 'Are you sure the deletion of this data?'
    });
    dialodRef.afterClosed().subscribe( res => {
      console.log(res);
      if(res){
        console.log('Delete file');
      }
    })
  }
}
