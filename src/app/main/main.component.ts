import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  synsets = [];
  synonymsAmount = 'keine';

  ngOnInit(): void {
  }

  async getSynonyms() {
    let url = 'https://www.openthesaurus.de/synonyme/search?q=test&format=application/json';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    this.synsets = await responseAsJson['synsets'];
    let synsets2 = this.synsets;
    console.log(synsets2);

    this.rendersynsets(synsets2);
  }

  rendersynsets(synsets) {
    let container = document.getElementById('container');
    
    //let synonymsAmount = document.getElementById('synonymsAmount');
    //synonymsAmount.innerHTML = '&nbsp;' + synsets.length + '&nbsp;';
    this.synonymsAmount = synsets.length;
    container.classList.remove('d-none');
  }
}
