/**
 * Общий класс для определения форм контроль
 */

export class FormControlBase<T> {
  value: T | undefined;

  key: string;

  label: string;

  required: boolean;

  order: number;

  controlType: string;

  show: boolean;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      show?: boolean;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.show = options.show === undefined ? true : options.show;
  }
}
