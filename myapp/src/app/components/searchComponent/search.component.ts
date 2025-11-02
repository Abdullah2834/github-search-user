import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input,OnChanges,OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GitUser } from "../../interfaces/git-users-interface";
import { GithubApiService } from "../../services/github.service";

@Component({
    selector: "search-component",
    standalone: true,
    imports: [FormsModule,CommonModule],
    templateUrl: "search.component.html",
    styleUrl: "search.component.scss"
})

export class SearchComponent{    
    searchUser = ""
    isError:any = false
    isEmpty:any = true
    @Input() allUsers:any
    @Input() tempAllUsers:any    
    @Output() loadingChange = new EventEmitter<any>;
    
    constructor( private apiService: GithubApiService){}
    
    

    // handleKeyChange($event: any){
    //     const name = $event.target.value
    //     this.searchUser = name
    //     this.allUsers = this.tempAllUsers.filter((item: GitUser)=>item.login.toLowerCase().includes(name))        
        
    // }


    handleSearchClick(){        
        this.loadingChange.emit(true)
        this.apiService.getUserByUsername(this.searchUser).subscribe((res: GitUser[])=>{        
            this.allUsers = [res]                
            this.loadingChange.emit(false)     
            this.isEmpty= false      
            console.log("res",res);
            
        },(err:any)=>{            
            this.isError = true                                   
            this.loadingChange.emit(false)
            setTimeout(()=>{
                this.isError = false 
            },2000)  
            console.log("err",err); 
                              
        })
        
    }

}