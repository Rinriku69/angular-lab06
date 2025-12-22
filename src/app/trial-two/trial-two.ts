import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-trial-two',
  imports: [],
  templateUrl: './trial-two.html',
  styleUrl: './trial-two.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialTwo {
  protected items = signal<number[]>([0, 0]);

  protected onChange(index: number, value: number): void {
    /*   this.items.update((prev) => {
      const current = [...prev];
      current[index] = value;
      return current;
    }); */
    this.items()[index] = value;
    this.items.set([...this.items()]);
    console.info(this.items);
  }

  protected add(): void {
    this.items.update((old) => [...old, 0]);
    console.info(this.items);
  }

  protected remove(indextoRemove: number): void {
    this.items.update((items) => items.filter((_, index) => index !== indextoRemove));
    console.info(this.items);
  }

  protected changeColor(elem: HTMLElement): void {
    elem.style.backgroundColor = 'yellow';
  }
}
