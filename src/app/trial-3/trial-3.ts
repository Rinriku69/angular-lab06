import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

interface Item {
  id: number;
  value: number;
}
@Component({
  selector: 'app-trial-3',
  imports: [JsonPipe],
  templateUrl: './trial-3.html',
  styleUrl: './trial-3.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trial3 {
  protected items = signal<Item[]>([
    { id: Date.now(), value: 0 },
    { id: Date.now() + 1, value: 0 },
  ]);

  protected onChange(id: number, newvalue: number): void {
    /*   this.items.update((prev) => {
      const current = [...prev];
      current[index] = value;
      return current;
    }); */
    /* this.items()[index] = value;
    this.items.set([...this.items()]);
    console.info(this.items); */
    this.items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, value: newvalue } : item)),
    );
  }

  protected add(): void {
    const newItem: Item = { id: Date.now(), value: 0 };
    this.items.update((old) => [...old, newItem]);
    console.info(this.items);
  }

  protected remove(idToRemove: number): void {
    this.items.update((items) => items.filter((item) => item.id !== idToRemove));
    console.info(this.items);
  }

  protected changeColor(elem: HTMLElement): void {
    elem.style.backgroundColor = 'yellow';
  }
}
