import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { envirnoment } from "../environments/environments.development";
import { GitUser } from "../interfaces/git-users-interface";

@Injectable({
    providedIn:"root"
})

export class GithubApiService{

    constructor(private http: HttpClient){}

    getUsers(){
        // htttps://api.github.com/users

        return this.http.get<GitUser[]>(`${envirnoment.baseUrl}/users`,{
            headers:{
                "Accept":"application/vnd.github+json",
                "Authorization": `Bearer ${envirnoment.token}`,
                "X-Github-Api-Version": "2022-11-28"               
            }
        })
    }

    getUserByUsername(username:any){
        // htttps://api.github.com/users/:username        
        return this.http.get<GitUser[]>(`${envirnoment.baseUrl}/users/${username}`,{
            headers:{
                "Accept":"application/vnd.github+json",
                "Authorization": `Bearer ${envirnoment.token}`,
                "X-Github-Api-Version": "2022-11-28"                                
            }
        })
    }

    

}