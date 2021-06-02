import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MaterialComponent = [ 
                MatButtonModule,
                MatIconModule ,
                MatDividerModule,
                MatButtonToggleModule,
                MatBadgeModule,
                MatProgressSpinnerModule,
                MatToolbarModule,
                MatSidenavModule,
                FormsModule,
                MatMenuModule,
                MatListModule,
                MatGridListModule,
                MatExpansionModule,
                MatCardModule,
                MatTabsModule,
                MatStepperModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
                MatCheckboxModule,
                MatRadioModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatTooltipModule,
                MatSnackBarModule,
                MatDialogModule,
                MatTableModule,
                MatSortModule,
                MatPaginatorModule,
                ScrollingModule  
];

@NgModule({
   imports : [MaterialComponent],
   exports : [MaterialComponent]
})
export class MaterialModule { }
