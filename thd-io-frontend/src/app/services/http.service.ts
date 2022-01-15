import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

     private Url = "http://localhost:3000/room/thabellaevents"

      /**
   * @param http
   */
  constructor(private httpClient: HttpClient) { }

    /**
   * @param roomIdSelected
   * @param dateSelected
   * @param hourSelected
   */
     sendGetRequest(roomIdSelected: string, dateSelected: string, hourSelected: string){

      return this.httpClient.get<any>(this.Url, { params: {roomId: roomIdSelected, date: dateSelected, hour: hourSelected}})
    }
}
