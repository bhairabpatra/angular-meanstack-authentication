import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {



  loading: boolean;
  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      console.log("fffffffffffffffffffffff"+ v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
  }
}

