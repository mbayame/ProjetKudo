import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Kudos} from '../infokudo/kudos';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService{

  labelAttribute = 'structure';
  formValueAttribute ='id';
  private endpoint = 'http://127.0.0.1:8080/add/user';
  private URL = 'http://127.0.0.1:8080/user/showstructures/{id}';
  private endpoint1 = 'http://127.0.0.1:8080/kudo/personne';
  private endpoint2 = 'http://127.0.0.1:8080/kudo/liste';
  private urliste = 'http://127.0.0.1:8080/add/listekudopoint';
  private urllsiteStructure = 'http://127.0.0.1:8080/add/liste-structures';
  private endpoint3 = 'http://127.0.0.1:8080/kudo/team';
  private endpoint4 = 'http://127.0.0.1:8080/add/liste-user';
  private detailV= 'http://127.0.0.1:8080/add/genereuxPeriode/start/{debut}/end/{fin}'


  constructor(private http: HttpClient) { }
    
      FindBySousStructure(data):Observable<any>{
        return this.http.post(this.URL, data);
      }

    inscription(Data):Observable<any> {
      return this.http.post(this.endpoint, Data);
    }

    faireKudo(data2):Observable<any>{
      return this.http.post(this.endpoint1,data2)
    }
    faireKudoTeam(data3):Observable<any> {
      return this.http.post(this.endpoint3,data3)
    }

    kudowall():Observable<any>{
      return this.http.get(this.endpoint2)
    }
      
    listekudoP(){
      return this.http.get(this.urliste);
    }

    listeStructure(){
      return this.http.get(this.urllsiteStructure)
    }
    listerUser(){
      return this.http.get(this.endpoint4)
    }
    listeUtilisateur(data){
      return this.http.get<any>(this.detailV,data)
    }

  //   async check_initial_cpfObservable(something){
  //   return this.http.get(this.endpoint1,).pipe(CATCH_ERROR_VAR(error => throwError(error)));
    
  // }

  }