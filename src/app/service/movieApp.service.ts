import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAppService {

  constructor(private http: HttpClient) { }

  data!: string;

  apiKey = "00ecec8f73624e6f4148ff956a882005";
  baseUrl = 'http://api.themoviedb.org/3';
  bannerapi: string = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`;
  trendingapi: string = `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`;
  searchapi: string = `${this.baseUrl}/search/movie?api_key=${this.apiKey}`;
  detailapi: string = `${this.baseUrl}/movie/${this.data}?api_key=${this.apiKey}`


  bannerApiData(): Observable<any> {
    return this.http.get(this.bannerapi);
  }


  trendingMovieApiDdata(): Observable<any> {
    return this.http.get(this.trendingapi);
  }


  movieDetails(dataRs: any): Observable<any> {
    this.data = dataRs;
    console.log(this.data);
    return this.http.get(` ${this.baseUrl}/movie/${dataRs}?api_key=${this.apiKey}`);


  }

  searchMovie(data: any): Observable<any> {
    console.log(data, "movie");
    console.log(this.searchapi + `&query=${data}`);
    return this.http.get(this.searchapi + `&query=${data}`);
  }


  getMovievideo(data: any): Observable<any> {

    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`);
  }


  getMovieCast(data: any) {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`);

  }


  FectActionMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);

  }

  FectAdventureMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);

  }
  FectAnimationMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);

  }

  FectComedyMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);

  }

  FectDocumentaryMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);

  }

  FectSciencefictionMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);

  }


  FectThrillerMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);

  }
}
