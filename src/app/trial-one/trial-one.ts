import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-trial-one',
  imports: [],
  templateUrl: './trial-one.html',
  styleUrl: './trial-one.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialOne {
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
}
