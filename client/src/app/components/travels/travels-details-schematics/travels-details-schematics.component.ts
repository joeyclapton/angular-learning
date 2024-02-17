import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TravelsDetailsSchematicsDataSource } from './travels-details-schematics-datasource';
import { Travel } from '../../../shared/models/travel.model';

@Component({
  selector: 'app-travels-details-schematics',
  templateUrl: './travels-details-schematics.component.html',
  styleUrl: './travels-details-schematics.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class TravelsDetailsSchematicsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Travel>;
  dataSource = new TravelsDetailsSchematicsDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'city', 'country', 'stars', 'date'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
