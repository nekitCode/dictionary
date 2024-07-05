export interface ModalDetails {
  srcImagesList: Array<string>;
  description: string;
  measure?: 'percent' | 'degrees'
  min: number;
  max: number;
  value: number;
  step: number;
}
