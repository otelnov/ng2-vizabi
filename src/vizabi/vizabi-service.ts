import {Injectable} from '@angular/core';

const urlon = require('URLON');

@Injectable()
export class VizabiService {

  constructor() {
  }

  public modelToString(model: any): string {
    model = model || {};

    return urlon.stringify(model);
  }

  public stringToModel(str: string): any {
    str = str || '_';
    if (str) {
      try {
        return urlon.parse(str);
      } catch (err) {
        console.error("Urlon Exception:", err);
        return {};
      }
    }
    return {};
  }

}
