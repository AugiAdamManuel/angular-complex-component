import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class <%= name %>Service {
  constructor (private httpClient: HttpClient) {}

  public getNotes (): Observable<any[]> {
    return this.httpClient.get('https://example.com/api/notes').pipe(
      map((res: { success: boolean; response: any[] }) => {
        return res.response
      })
    )
  }
}
