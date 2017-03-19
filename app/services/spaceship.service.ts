import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Spaceship } from '../interfaces/spaceship';

@Injectable()
export class SpaceshipService {
  private baseUrl: string = 'http://0.0.0.0:8081/v1';
  constructor(private http: Http) {
  }

  getAll(): Observable<Spaceship[]> {
    let spaceships$ = this.http
      .get(`${this.baseUrl}/spaceships`)
      .map(mapSpaceships);
    return spaceships$;
  }

  get(id): Observable<Spaceship> {
    let spaceship$ = this.http
      .get(`${this.baseUrl}/spaceships/${id}`)
      .map(response => toSpaceship(response.json()));
    return spaceship$;
  }
}

function mapSpaceships(response: Response): Spaceship[] {
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toSpaceship)
}

function toSpaceship(r:any): Spaceship{
  let spaceship = <Spaceship>({
    id: parseInt(r.id),
    name: r.name,
    pilot: r.pilot,
    rating: parseInt(r.rating, 10),
  });
  console.log('Parsed person:', spaceship);
  return spaceship;
}