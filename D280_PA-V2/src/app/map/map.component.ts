import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    let svgPaths = document.querySelectorAll<SVGPathElement>('path');
    Array.prototype.forEach.call(svgPaths, (svgCount: SVGPathElement) => {
      svgCount.addEventListener('mouseover', (event: MouseEvent) => {
        const path = event.target as SVGPathElement;
        path.style.fill = '#ffffff';
      });

      svgCount.addEventListener('mouseleave', (event: MouseEvent) => {
        const path = event.target as SVGPathElement;
        path.style.fill = '';
      });

      svgCount.addEventListener('click', () => {
        this.loadData(svgCount);
      });
    });
  }

  async loadData(svgCount: SVGPathElement) {
    let api: string =
      'https://api.worldbank.org/V2/country/' + svgCount.id + '?format=json';
    let resp: Response = await fetch(api);
    let data: any = await resp.json();
    let datPath: any = data[1];

    let name: string = datPath[0].name;
    document.getElementById('name')!.innerText = name;
    let capitol: string = datPath[0].capitalCity;
    document.getElementById('capitol')!.innerText = capitol;
    let region: string = datPath[0].region.value;
    document.getElementById('region')!.innerText = region;
    let income: string = datPath[0].incomeLevel.value;
    document.getElementById('income')!.innerText = income;
    let longitude: string = datPath[0].longitude;
    document.getElementById('longitude')!.innerText = longitude;
    let latitude: string = datPath[0].latitude;
    document.getElementById('latitude')!.innerText = latitude;
  }
}
