import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAppService } from 'src/app/service/movieApp.service';

@Component({
  selector: 'app-movieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private servie:MovieAppService,private route:ActivatedRoute) { }


  getMovieDetailResult:any;
  getMovieVideoTrailerResult:any;
  getMovieCLipResult:any;
  getMovieCastResult:any[]=[];



  ngOnInit() {
    let getParamid=this.route.snapshot.paramMap.get('id');
    console.log("Oninit",getParamid);
    this.getMovieDetail(getParamid);
    this.GetVideoMovie(getParamid);
    this.GetMovieCast(getParamid);
  }

  getMovieDetail(id:any)
  {
this.servie.movieDetails(id).subscribe(
  val=>
  {
this.getMovieDetailResult=val;
  }
)
  }


  GetVideoMovie(id:any)
  {
this.servie.getMovievideo(id).subscribe(val=>
  {
console.log("result video",val);
val.results.forEach((e:any) => {
  if(e.type==="Trailer")
  {
    this.getMovieVideoTrailerResult=e.key;
    this.getMovieCLipResult=e.key;

  }
  else if(e.type==="Clip")
  {
    this.getMovieCLipResult=e.key;

  }
});
  })
  }



  GetMovieCast(id:any)
  {
this.servie.getMovieCast(id).subscribe((val:any)=>
  {
this.getMovieCastResult=val.cast;
console.log("result cast",this.getMovieCastResult);


  })
  }


}
