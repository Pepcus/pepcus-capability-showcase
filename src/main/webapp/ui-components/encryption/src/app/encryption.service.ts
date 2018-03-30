import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Data} from "@angular/router";

@Injectable()
export class EncryptionService {
  constructor(private http: HttpClient) { }

  encryptPassword(algorithm: string, password: string) {
    const head = new HttpHeaders({'content-type' : 'application/json'});
    return this.http.post('http://localhost:8383/pepcuscapability-showcase/encrypt',
                          {algorithm: algorithm , password: password},
                          {headers: head});
  }

  encryptFile(data: Data) {
    return this.http.post('http://localhost:8383/pepcuscapability-showcase/encrypt/file',
      data);
  }
}
