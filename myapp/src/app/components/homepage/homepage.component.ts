import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SearchComponent } from "../searchComponent/search.component";
import { GithubApiService } from "../../services/github.service";
import { GitUser } from "../../interfaces/git-users-interface";

@Component({
    selector: "homepage",
    imports: [CommonModule,SearchComponent],
    providers: [GithubApiService],
    standalone: true,
    templateUrl: "homepage.component.html",
    styleUrl: "homepage.component.scss",

})

export class HomepageComponent implements OnInit{
    allUsers: GitUser[] = [];
    tempAllUsers: GitUser[] = [];
    isLoading = false
    constructor( private apiService: GithubApiService){}

    ngOnInit():void{
        this.apiService.getUsers().subscribe((res: GitUser[])=>{
        // console.log('USERS:', res);
        this.tempAllUsers = [...res]
        this.allUsers = res
        console.log("this.allUsers",this.allUsers);
        
        },(err:any)=>{
            console.log("err",err);
            
        })
    }

    onLoadingChange(event:any){
        this.isLoading = event
    }
}