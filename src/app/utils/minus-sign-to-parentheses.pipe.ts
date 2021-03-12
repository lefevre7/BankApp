import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "minusSignToParentheses" })
export class MinusSignToParenthesesPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      var v = Number(value.toFixed(2)) * -1;
      var num = v.toFixed(2);
      return `($${num})`;
    }
    return `$${value.toFixed(2)}`;
  }
}
