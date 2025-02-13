import React, { useState, useMemo } from 'react';
import { Medication } from '../types';
import { calculateDose } from '../utils/calculations';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  medications: Medication[];
  weight: number;
}

export const MedicationList: React.FC<Props> = ({ medications, weight }) => {
  const [expandedMed, setExpandedMed] = useState<string | null>(null);

  const calculatedDoses = useMemo(() => 
    medications.map(med => ({
      ...med,
      dose: calculateDose(med.dosePerKg, weight, med.name)
    })), [medications, weight]
  );

  const toggleInstructions = (medName: string) => {
    setExpandedMed(expandedMed === medName ? null : medName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Medicamentos</h2>
      </div>
      <div className="overflow-hidden">
        <div className="hidden md:block">
          {/* Desktop view */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medicamento
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dose
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Via
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Detalhes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {calculatedDoses.map((med, idx) => {
                const volumeInfo = med.dose.diluted?.split('\n').find(line => 
                  line.includes('Volume a administrar') || 
                  line.includes('Velocidade inicial')
                );
                
                return (
                  <React.Fragment key={idx}>
                    <tr className={idx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                      <td className="px-3 py-2">
                        <div className="text-sm font-medium text-gray-900">{med.name}</div>
                      </td>
                      <td className="px-3 py-2">
                        <div className="text-sm text-gray-900">
                          <p>{med.dose.display}</p>
                          <p className="text-xs text-gray-600">
                            Máx: {med.maxDose}
                          </p>
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <div className="text-sm text-gray-900">{med.administration}</div>
                      </td>
                      <td className="px-3 py-2">
                        <div className="text-sm text-gray-900 font-medium">
                          {volumeInfo ? volumeInfo.split(': ')[1] : 'N/A'}
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <button
                          onClick={() => toggleInstructions(med.name)}
                          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {expandedMed === med.name ? (
                            <>
                              Ocultar <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Detalhes <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedMed === med.name && (
                      <tr className="bg-gray-50">
                        <td colSpan={5} className="px-3 py-3">
                          <div className="text-sm text-gray-900">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Preparo/Diluição:</h4>
                                <div className="space-y-1 text-gray-600">
                                  {med.dose.diluted?.split('\n')
                                    .filter(line => !line.includes('Volume a administrar') && !line.includes('Velocidade inicial'))
                                    .map((line, i) => (
                                      <p key={i}>{line}</p>
                                    ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Instruções:</h4>
                                <div className="space-y-1 text-gray-600">
                                  {med.instructions.split('\n')
                                    .filter(line => line.trim())
                                    .map((line, i) => (
                                      <p key={i} className={line.startsWith('-') ? 'ml-2' : ''}>
                                        {line.trim()}
                                      </p>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          {calculatedDoses.map((med, idx) => {
            const volumeInfo = med.dose.diluted?.split('\n').find(line => 
              line.includes('Volume a administrar') || 
              line.includes('Velocidade inicial')
            );

            return (
              <div key={idx} className="border-b border-gray-200 p-4">
                <div className="space-y-2">
                  <div>
                    <div className="text-base font-medium text-gray-900">{med.name}</div>
                    <button
                      onClick={() => toggleInstructions(med.name)}
                      className="mt-2 w-full inline-flex items-center justify-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {expandedMed === med.name ? (
                        <>
                          Ocultar detalhes <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Ver detalhes <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Dose:</span>
                      <div className="font-medium">{med.dose.display}</div>
                      <div className="text-xs text-gray-600">Máx: {med.maxDose}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Via:</span>
                      <div className="font-medium">{med.administration}</div>
                    </div>
                  </div>
                  {volumeInfo && (
                    <div>
                      <span className="text-gray-500">Volume:</span>
                      <div className="font-medium">{volumeInfo.split(': ')[1]}</div>
                    </div>
                  )}
                </div>

                {expandedMed === med.name && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Preparo/Diluição:</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          {med.dose.diluted?.split('\n')
                            .filter(line => !line.includes('Volume a administrar') && !line.includes('Velocidade inicial'))
                            .map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Instruções:</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          {med.instructions.split('\n')
                            .filter(line => line.trim())
                            .map((line, i) => (
                              <p key={i} className={line.startsWith('-') ? 'ml-2' : ''}>
                                {line.trim()}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-b-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Observações Gerais:</h3>
        <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
          <li>Todas as doses são calculadas com base no peso atual do paciente</li>
          <li>Sempre verificar dose máxima antes da administração</li>
          <li>Para medicações IV, confirmar permeabilidade do acesso</li>
          <li>Monitorar sinais vitais durante a administração</li>
          <li>Em caso de reações adversas, interromper imediatamente</li>
          <li>Registrar horário, via e dose administrada</li>
          <li>Verificar compatibilidade para administração simultânea</li>
        </ul>
      </div>
    </div>
  );
};
