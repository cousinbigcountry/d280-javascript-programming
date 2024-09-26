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
}
