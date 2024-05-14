import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'app-ultimo',
  templateUrl: './ultimo.component.html',
  styleUrls: ['./ultimo.component.css']
})

export class UltimoComponent implements OnInit {

  data:any = []; 

  constructor(private videos:VideosService){

  }

  ngOnInit() {
    this.data = this.videos.getVideos();
    console.log(this.data);
  }

}