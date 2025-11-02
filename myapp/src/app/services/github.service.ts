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

        return this.http.get<GitUser[]>(`https://api.github.com/users`)
    }

    getUserByUsername(username:any){
        // htttps://api.github.com/users/:username        
        return this.http.get<GitUser[]>(`https://api.github.com/users/${username}`)
    }
    

    

}