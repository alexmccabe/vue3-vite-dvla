export type HTMLInputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface MotTest {
  completedDate: string;
  expiryDate: string;
  motTestNumber: string;
  odometerResultType: string;
  odometerUnit: string;
  odometerValue: string;
  rfrAndComments: unknown[];
  testResult: string;
}
export interface Vehicle {
  engineSize: string;
  firstUsedDate: string;
  fuelType: string;
  make: string;
  manufactureDate: string;
  model: string;
  motTests: MotTest[];
  primaryColour: string;
  registration: string;
  registrationDate: string;
  vehicleId: string;
}
