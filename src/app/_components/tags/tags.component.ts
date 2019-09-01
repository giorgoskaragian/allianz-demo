import { Component, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsComponent),
    multi: true
  }]
})
export class TagsComponent implements ControlValueAccessor {

  tags: string[] = [];
  newTag = '';

  constructor() { }

  onInputKeyDown($event: KeyboardEvent) {
    if (this.newTag) {
      // || $event.key === ','
      if ($event.key === 'Enter') {
        this.tags.push(this.newTag);
        this.newTag = '';
        this.emitTags();
      }
    }
    else { 
      if ($event.key === 'Backspace') {
        this.tags.pop();
        this.emitTags();
      } 
      else {
        this.newTag = '';
        this.emitTags();
      }
    }
  }

  
  removeTag(index: number) {
    this.tags.splice(index, 1);
    this.emitTags();
  }

  private emitTags() {
    this.tags = this.tags.slice(0);
    this.onChange(this.tags);
    this.onTouched();
  }

  writeValue(value: string[]): void {
    this.tags = value || [];
  }

  registerOnChange(fn: any):void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
  }

  
  onChange: (value: string[]) => void = () => {};
  onTouched: () => void = () => {};

}