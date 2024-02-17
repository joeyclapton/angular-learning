import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Travel } from '../../../shared/models/travel.model';

// TODO: Replace this with your own data model type

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Travel[] = [
  { id: 1, city: 'Hydrogen', country: 'Brazil', stars: 4, date: new Date() },
  { id: 2, city: 'Helium', country: 'Brazil', stars: 4, date: new Date() },
  { id: 3, city: 'Lithium', country: 'Brazil', stars: 4, date: new Date() },
  { id: 4, city: 'Beryllium', country: 'Brazil', stars: 4, date: new Date() },
  { id: 5, city: 'Boron', country: 'Brazil', stars: 4, date: new Date() },
  { id: 6, city: 'Carbon', country: 'Brazil', stars: 4, date: new Date() },
  { id: 7, city: 'Nitrogen', country: 'Brazil', stars: 4, date: new Date() },
  { id: 8, city: 'Oxygen', country: 'Brazil', stars: 4, date: new Date() },
  { id: 9, city: 'Fluorine', country: 'Brazil', stars: 4, date: new Date() },
  { id: 10, city: 'Neon', country: 'Brazil', stars: 4, date: new Date() },
  { id: 11, city: 'Sodium', country: 'Brazil', stars: 4, date: new Date() },
  { id: 12, city: 'Magnesium', country: 'Brazil', stars: 4, date: new Date() },
  { id: 13, city: 'Aluminum', country: 'Brazil', stars: 4, date: new Date() },
  { id: 14, city: 'Silicon', country: 'Brazil', stars: 4, date: new Date() },
  { id: 15, city: 'Phosphorus', country: 'Brazil', stars: 4, date: new Date() },
  { id: 16, city: 'Sulfur', country: 'Brazil', stars: 4, date: new Date() },
  { id: 17, city: 'Chlorine', country: 'Brazil', stars: 4, date: new Date() },
  { id: 18, city: 'Argon', country: 'Brazil', stars: 4, date: new Date() },
  { id: 19, city: 'Potassium', country: 'Brazil', stars: 4, date: new Date() },
  { id: 20, city: 'Calcium', country: 'Brazil', stars: 4, date: new Date() },
];

/**
 * Data source for the TravelsDetailsSchematics view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TravelsDetailsSchematicsDataSource extends DataSource<Travel> {
  data: Travel[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Travel[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Travel[]): Travel[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Travel[]): Travel[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(
            a.stars as unknown as string,
            b.stars as unknown as string,
            isAsc
          );
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
