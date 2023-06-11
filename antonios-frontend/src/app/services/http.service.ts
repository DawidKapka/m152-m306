import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {

  public post(url: string, body: any): Promise<any> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    }).then(response => response.json())
  };

  public get(url: string): Promise<any> {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  }
}
