import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface InputComp {
  name: string;
  value: number;
}

interface SectionComp {
  name: string;
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
  protected sections: SectionComp[] = ([
    {
      name: `Section 1`,
      items: [{ name: 'i0', value: 0 }],
    },
  ]);

  protected addSection() {
    const newSection: SectionComp = {
      name: `Section ${this.sections().length + 1}`,
      items: [],
    };
    this.sections.update((old) => [...old, newSection]);
  }

  protected removeSection(sectionName: string): void {
    this.sections.update((prev) => prev.filter((s) => s.name !== sectionName));
  }

  protected addInput(sectionName: string): void {
    this.sections.update((sections) =>
      sections.map((s) => {
        if (s.name === sectionName) {
          const newInput = `i${s.name}-${s.items.length}`;
          return { ...s, items: [...s.items, { name: newInput, value: 0 }] };
        }
        return s;
      }),
    );
  }

  protected InputChange(sectionName: string, inputName: string, newValue: number): void {
    this.sections.update((sections) =>
      sections.map((s) => {
        if (s.name === sectionName) {
          return {
            ...s,
            items: s.items.map((item) =>
              item.name === inputName ? { ...item, value: newValue } : item,
            ),
          };
        }
        return s;
      }),
    );
  }

  protected results = computed(() => {
    return this.sections().map((section) => {
      const total = section.items.reduce((sum, item) => sum + item.value, 0);
      return {
        ...section,
        Sectotal: total,
      };
    });
  });

  protected RemoveInput(sectionname: string, name: string) {
    this.sections.update((sections) =>
      sections.map((s) => {
        if (s.name === sectionname) {
          return {
            ...s,

            items: s.items.filter((item) => item.name !== name),
          };
        }
        return s;
      }),
    );
  }
}
