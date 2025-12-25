import { ChangeDetectionStrategy, Component } from '@angular/core';

interface InputComp {
  Inname: number;
  value: number;
}

interface SectionComp {
  Secname: number;
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
    Secname: 1,
    items: [{
      Inname: 1,
      value: 0
    }],
    Sectotal: 0
  }]

  addinput(Secname: number): void {
    this.sections.forEach((sec) => {
      if (sec.Secname == Secname) {
        sec.items.push({
          Inname: sec.items.length + 1
          , value: 0
        })
      }
    }
    )
  }

  addsection(): void {
    this.sections.push({
      Secname: this.sections.length + 1,
      items: [{
        Inname: 1,
        value: 0
      }],
      Sectotal: 0
    })
  }

  InputChange(secname: number, value: number, inputname: number): void {
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

      }
    })
  }


  removeSection(index: number): void {
    this.sections.splice(index, 1)
    this.sections.forEach((section, idx) => {
      section.Secname = idx + 1
    })
  }

  removeInput(sectionname: number, inputindex: number): void {
    this.sections.forEach((section) => {
      if (section.Secname == sectionname) {
        section.items.splice(inputindex, 1)
        section.items.forEach((input, idx) => {
          input.Inname = idx + 1
        })
      }
    })

  }

}
