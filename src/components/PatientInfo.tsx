import React from 'react';
import { Patient } from '../types';

interface Props {
  patient: Patient;
  onUpdate: (patient: Patient) => void;
}

export const PatientInfo: React.FC<Props> = ({ patient, onUpdate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Dados do Paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Peso (kg)
          </label>
          <input
            type="number"
            value={patient.weightKg}
            onChange={(e) => onUpdate({ ...patient, weightKg: parseFloat(e.target.value) || 0 })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Idade (anos)
          </label>
          <input
            type="number"
            value={patient.ageYears}
            onChange={(e) => onUpdate({ ...patient, ageYears: parseInt(e.target.value) || 0 })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Idade (meses)
          </label>
          <input
            type="number"
            value={patient.ageMonths}
            onChange={(e) => onUpdate({ ...patient, ageMonths: parseInt(e.target.value) || 0 })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            max="11"
          />
        </div>
      </div>
    </div>
  );
};
