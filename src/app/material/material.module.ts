import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
// import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatSidenavModule
    ],
  exports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatSidenavModule
    ]
})
export class MaterialModule { }
