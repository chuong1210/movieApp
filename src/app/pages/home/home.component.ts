import { Component, OnInit } from '@angular/core';
import { MovieAppService } from 'src/app/service/movieApp.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private service:MovieAppService)
{

}
testIf:Boolean=false;
bannerResult!:Array<any>;
trendingMovieResult:any[]=[];
actionMovieRs:any=[];
adventureMovieRs:any=[];
animationMovieRs:any=[];
comdedyMovieRs:any=[];
thrillerMovieRs:any=[];
documentaryMovieRs:any=[];
sciencefictionMovieRs:any=[];


ngOnInit():void
{
  this.bannerData();
  this.trendingData();
  this.actionMovie();
  this.adventureMovie();
  this.animationMovie();
  this.documentMovie();
  this.comedyMovie();
  this.sciencefictionnMovie();
this.thrillerMovie();
}

bannerData()
{
  this.service.bannerApiData().subscribe((val:any)=>
    {
      this.bannerResult=val.results;
      console.log(this.bannerResult);



  })
}



trendingData()
{
  this.service.trendingMovieApiDdata().subscribe(
    (val:any)=>
    {
      this.trendingMovieResult=val.results;
      console.log(this.trendingMovieResult,'trending');

    }
  )
}


actionMovie()
{
  this.service.FectActionMovie().subscribe((val)=>
  {
    console.log(val);
    this.actionMovieRs=val.results;
  })
}


adventureMovie()
{
  this.service.FectAdventureMovie().subscribe((val)=>
  {
    console.log(val);
    this.adventureMovieRs=val.results;
  })
}



animationMovie()
{
  this.service.FectAnimationMovie().subscribe((val)=>
  {
    console.log(val);
    this.animationMovieRs=val.results;
  })
}

comedyMovie()
{
  this.service.FectComedyMovie().subscribe((val)=>
  {
    console.log(val);
    this.comdedyMovieRs=val.results;
  })
}


documentMovie()
{
  this.service.FectDocumentaryMovie().subscribe((val)=>
  {
    console.log(val);
    this.documentaryMovieRs=val.results;
  })
}

sciencefictionnMovie()
{
  this.service.FectSciencefictionMovie().subscribe((val)=>
  {
    console.log(val);
    this.sciencefictionMovieRs=val.results;
  })
}


thrillerMovie()
{
  this.service.FectThrillerMovie().subscribe((val)=>
  {
    console.log(val);
    this.thrillerMovieRs=val.results;
  })
}



}
