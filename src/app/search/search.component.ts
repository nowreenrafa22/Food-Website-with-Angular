import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm:String='';
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params["searchTerm"])
        this.searchTerm = params["searchTerm"];
    })
  }

  search():void{
    if(this.searchTerm)
      this.router.navigateByUrl('/home/search/'+this.searchTerm);
  }
}
