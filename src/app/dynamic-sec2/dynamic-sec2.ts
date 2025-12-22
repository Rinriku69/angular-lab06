import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';

interface InputComp {
  id: string;
  value: number;
}

interface SectionComp {
  id: string;
  items: InputComp[];
}
@Component({
  selector: 'app-dynamic-sec2',
  imports: [JsonPipe],
  templateUrl: './dynamic-sec2.html',
  styleUrl: './dynamic-sec2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSec2 {
  protected sections = signal<SectionComp[]>([
    { id: crypto.randomUUID(), items: [{ id: crypto.randomUUID(), value: 0 }] },
  ]);

  protected results = computed(() => {
    return this.sections().map((section) => ({
      ...section,
      total: section.items.reduce((sum, item) => sum + item.value, 0),
    }));
  });

  protected addSection(): void {
    this.sections.update((prev) => [...prev, { id: crypto.randomUUID(), items: [] }]);
  }

  protected removeSection(id: string): void {
    this.sections.update((prev) => prev.filter((s) => s.id !== id));
  }

  protected addInput(sectionId: string): void {
    this.sections.update((sections) =>
      sections.map((s) =>
        s.id === sectionId
          ? { ...s, items: [...s.items, { id: crypto.randomUUID(), value: 0 }] }
          : s,
      ),
    );
  }

  protected removeInput(sectionId: string, inputId: string): void {
    this.sections.update((sections) =>
      sections.map((s) =>
        s.id === sectionId ? { ...s, items: s.items.filter((i) => i.id !== inputId) } : s,
      ),
    );
  }

  protected onInputChange(sectionId: string, inputId: string, val: number): void {
    this.sections.update((sections) =>
      sections.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((i) => (i.id === inputId ? { ...i, value: val } : i)) }
          : s,
      ),
    );
  }
}
