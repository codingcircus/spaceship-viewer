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

  add(spaceship) {
    return this.http.post(`${this.baseUrl}/spaceships`, spaceship)
      .map(response => {});
  }
}

function mapSpaceships(response: Response): Spaceship[] {
  // The response of the API has a results
  // property with the actual results
  return response.json().map(toSpaceship)
}

function toSpaceship(r:any): Spaceship{
  let spaceship = <Spaceship>({
    _id: r._id,
    name: r.name,
    pilot: r.pilot,
    image: r.image,
    rating: parseInt(r.rating, 10),
  });
  return spaceship;
}