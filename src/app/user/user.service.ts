import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    private api = 'http://localhost:8087/movibe-api/v1/user';

    public getUsers() {
        return this.http.get<User[]>(this.api);
    }
}
