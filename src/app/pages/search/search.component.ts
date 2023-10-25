import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieAppService } from 'src/app/service/movieApp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieAppService)
  {

  }
  ngOnInit(): void {
  }

  searchResult:any=[];

  searchForm= new FormGroup(
    {
'movieName':new FormControl(null),
    }
  )

  submitForm():void
  {
console.log(this.searchForm.value.movieName);

this.service.searchMovie(this.searchForm.value.movieName+'').subscribe((val)=>
{

  this.searchResult=val.results;
  console.log("search movie: ",this.searchResult);

});
  }






}
