export interface Patient {
  weightKg: number;
  ageYears: number;
  ageMonths: number;
}

export interface Medication {
  name: string;
  dosePerKg: string;
  instructions: string;
  administration: string;
}

export interface Device {
  name: string;
  recommended: string;
  options: string[];
}

export interface Solution {
  name: string;
  options: {
    concentration: string;
    volume: string;
    instructions: string;
  }[];
}
