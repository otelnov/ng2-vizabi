import {Component} from '@angular/core';
import {query} from './sg';

declare var DDFCsvReader: any;

// webpack html imports
let doc = require('html-loader!markdown-loader!../../doc.md');

@Component({
  selector: 'vizabi-section',
  template: `
<br>
<div class="row">
  <h2>API</h2>
  <div class="card card-block panel panel-default panel-body" [innerHTML]="doc"></div>
</div>

<section [attr.id]="name">
  <div class="row"><h1>{{name}}<small>(<a [attr.href]="src">src</a>)</small></h1></div>

  <hr>

  <div class="row">
    <h2>Example</h2>
      
    <div style="height: 600px;">
        <button (click)="loadAdditionalData()">Load additional data</button>
        <vizabi class="vzb-placeholder"
                [readerModuleObject]="readerModuleObject"
                [readerGetMethod]="readerGetMethod"
                [readerParams]="readerParams"
                [readerName]="readerName"
                [model]="model"
                [modelHash]="modelHash"
                [stopUrlRedirect]="stopUrlRedirect"
                [additionalItems]="additionalItems"
                [chartType]="chartType"></vizabi>
    </div>
  </div>

  <br>

</section>
  `
})

export class VizabiSectionComponent {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: Array<any>;
  private readerName: string;
  private model: any;
  private modelHash: string;
  private chartType: string;
  private stopUrlRedirect: boolean;
  private additionalItems: Array<any> = [];

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerParams = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerParams = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = query;
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
  }

  loadAdditionalData() {
    this.additionalItems = [
      {
        reader: 'csv',
        path: 'ddf--datapoints--migrant_stock--by--geo--time.csv'
      },
      {
        reader: 'csv',
        path: 'basic-indicators.csv'
      }
    ];
  }
}
