import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModifier) {
    if (pipeModifier) {
      return pipeData.filter((eachItem) => 
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    }

    return pipeData;
  }
}