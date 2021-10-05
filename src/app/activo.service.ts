import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private activosUrl = 'http://localhost:7000/activos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:7000' })
  };

  constructor(private http: HttpClient) { }
  
  public getActivos() {
    return this.http.get(this.activosUrl).pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse): any {
    return throwError(error);
  }
}
