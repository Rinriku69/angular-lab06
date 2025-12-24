import { ChangeDetectionStrategy, Component } from '@angular/core';

interface InputComp {
  Inname: string;
  value: number;
}

interface SectionComp {
  Secname: string;
  items: InputComp[];
  Sectotal?: number;
}

@Component({
  selector: 'app-dynamic-section',
  imports: [],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {

  inputs: InputComp[] = []
  sections: SectionComp[] = [{
    Secname: '1',
    items: [{
      Inname: '1',
      value: 0
    }],
    Sectotal: 0
  }]

  addinput(Secname: string): void {
    this.sections.forEach((sec) => {
      if (sec.Secname == Secname) {
        sec.items.push({
          Inname: `1${sec.items.length + 1}`
          , value: 0
        })
      }
    }
    )
  }

  addsection(): void {
    this.sections.push({
      Secname: `${this.sections.length + 1}`,
      items: [{
        Inname: '1',
        value: 0
      }],
      Sectotal: 0
    })
  }

  InputChange(secname: string, value: number, inputname: string): void {
    this.sections.forEach((section) => {
      if (section.Secname == secname) {
        section.items.forEach(element => {
          if (element.Inname == inputname) {
            element.value = value
          }
        });
        const total = section.items.reduce((result, currentvalue) => {
          return result + currentvalue.value
        }, 0);
        section.Sectotal = total;
        // console.log(section.Secname, section.Sectotal)
      }
    })
  }

}
