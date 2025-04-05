import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
})
export class UtilitiesModule {
  getDcValue(dc: number, vc: number) {
    const value = ((vc * 1000) / (dc * Math.PI)).toFixed();
    return Number(value);
  }
}
