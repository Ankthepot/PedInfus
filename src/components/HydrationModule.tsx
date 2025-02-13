import React, { useState, useMemo } from 'react';
import { 
  calculateHollidaySegar,
  calculateUrgentHydrationSolution,
  calculateHypoglycemiaSolution,
  calculateNewbornCalciumSolution,
  calculateHypokalemiaSolution,
  calculateHyponatremiaSolution
} from '../utils/calculations';
import { solutions, hypoglycemiaSolutions } from '../data/medications';

interface Props {
  weight: number;
}

export const HydrationModule: React.FC<Props> = ({ weight }) => {
  const [targetTIG, setTargetTIG] = useState(5);
  const [showProtocols, setShowProtocols] = useState(false);
  
  const calculations = useMemo(() => ({
    hollidaySegar: calculateHollidaySegar(weight),
    urgentHydration: calculateUrgentHydrationSolution(weight),
    hypoglycemiaSolution: calculateHypoglycemiaSolution(weight, targetTIG),
    newbornCalciumSolution: calculateNewbornCalciumSolution(weight),
    hypokalemiaSolution: calculateHypokalemiaSolution(weight),
    hyponatremiaSolution: calculateHyponatremiaSolution(weight)
  }), [weight, targetTIG]);

  const renderMaintenanceSolution = () => {
    const { hollidaySegar } = calculations;
    let volume = 0;
    if (weight <= 10) {
      volume = weight * 100;
    } else if (weight <= 20) {
      volume = 1000 + (weight - 10) * 50;
    } else {
      volume = 1500 + (weight - 20) * 20;
    }

    const hourlyRate = Math.round(volume / 24);
    const naPerKg = 3; // mEq/kg/dia
    const totalNa = weight * naPerKg;
    const naVolume = Math.round((totalNa * 0.3)); // 0.3ml de NaCl 20% = 1mEq Na+
    const kclPerKg = 2; // mEq/kg/dia
    const totalKCl = weight * kclPerKg;
    const kclVolume = Math.round(totalKCl * 0.4); // 0.4ml de KCl 10% = 1mEq K+

    // Cálculos para bolsas de 250ml
    const numBags250 = Math.ceil(volume / 250);
    const naPerBag250 = Math.round(naVolume / numBags250);
    const kclPerBag250 = Math.round(kclVolume / numBags250);
    const hoursPerBag250 = Math.round(24 / numBags250);
    const rate250 = Math.round((250 + naPerBag250 + kclPerBag250) / hoursPerBag250);

    // Cálculos para bolsas de 500ml
    const numBags500 = Math.ceil(volume / 500);
    const naPerBag500 = Math.round(naVolume / numBags500);
    const kclPerBag500 = Math.round(kclVolume / numBags500);
    const hoursPerBag500 = Math.round(24 / numBags500);
    const rate500 = Math.round((500 + naPerBag500 + kclPerBag500) / hoursPerBag500);

    return (
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-6">
        <h3 className="font-medium text-lg mb-3">Solução de Manutenção (Holliday-Segar)</h3>
        <div className="bg-white p-4 rounded-lg">
          <div className="mb-4">
            <p className="text-sm mb-2">
              <span className="font-medium">Volume Total:</span> {volume}mL/24h ({hourlyRate}mL/h)
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Eletrólitos Totais/24h:</span>
              <br />• NaCl 20%: {naVolume}mL ({Math.round(naVolume * 3.4)}mEq Na+)
              <br />• KCl 10%: {kclVolume}mL ({Math.round(kclVolume * 2.5)}mEq K+)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Opção com bolsas de 250ml */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-lg mb-2">Opção 1: Bolsas de 250mL</h4>
              <div className="space-y-2 text-sm">
                <p>Número de bolsas: {numBags250}</p>
                <p>Composição por bolsa:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>SG5%: 250mL</li>
                  <li>NaCl 20%: {naPerBag250}mL ({Math.round(naPerBag250 * 3.4)}mEq Na+)</li>
                  <li>KCl 10%: {kclPerBag250}mL ({Math.round(kclPerBag250 * 2.5)}mEq K+)</li>
                </ul>
                <p className="text-blue-600">Velocidade de infusão: {rate250}mL/h</p>
                <p className="text-blue-600">Trocar a cada {hoursPerBag250} horas</p>
              </div>
            </div>

            {/* Opção com bolsas de 500ml */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-lg mb-2">Opção 2: Bolsas de 500mL</h4>
              <div className="space-y-2 text-sm">
                <p>Número de bolsas: {numBags500}</p>
                <p>Composição por bolsa:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>SG5%: 500mL</li>
                  <li>NaCl 20%: {naPerBag500}mL ({Math.round(naPerBag500 * 3.4)}mEq Na+)</li>
                  <li>KCl 10%: {kclPerBag500}mL ({Math.round(kclPerBag500 * 2.5)}mEq K+)</li>
                </ul>
                <p className="text-blue-600">Velocidade de infusão: {rate500}mL/h</p>
                <p className="text-blue-600">Trocar a cada {hoursPerBag500} horas</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-sm">
            <p className="font-medium text-yellow-800">Observações:</p>
            <ul className="list-disc list-inside text-yellow-700">
              <li>Volumes e eletrólitos são calculados para 24h</li>
              <li>Velocidade de infusão ajustada para o volume de cada bolsa</li>
              <li>Monitorar balanço hídrico e eletrólitos</li>
              <li>Ajustar conforme evolução clínica</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderHypoglycemiaSolution = () => (
    <div className="bg-yellow-50 p-4 rounded-lg shadow-sm mb-6">
      <h3 className="font-medium text-lg mb-3">Solução para Hipoglicemia</h3>
      <div className="bg-white p-4 rounded-lg">
        <div className="mb-4 flex items-center space-x-4">
          <label className="font-medium">TIG (mg/kg/min):</label>
          <input
            type="number"
            min="4"
            max="12"
            step="1"
            value={targetTIG}
            onChange={(e) => setTargetTIG(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded"
          />
          <span className="text-sm text-gray-600">(4-12 mg/kg/min)</span>
        </div>
        
        <button
          onClick={() => setShowProtocols(!showProtocols)}
          className="mb-4 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-md text-sm transition-colors"
        >
          {showProtocols ? 'Ocultar' : 'Mostrar'} Protocolos de Hipoglicemia
        </button>

        {showProtocols && (
          <div className="mb-4 bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Protocolos por Gravidade</h4>
            {hypoglycemiaSolutions.protocols.map((protocol, index) => (
              <div key={index} className="mb-3 p-2 bg-white rounded">
                <p className="font-medium">{protocol.condition}</p>
                <p>Solução: {protocol.solution}</p>
                <p>Dose: {protocol.dose}</p>
                <p>Velocidade: {protocol.rate}</p>
                <p className="text-sm text-gray-600">Manutenção: {protocol.maintenance}</p>
              </div>
            ))}

            <h4 className="font-medium mt-4 mb-2">Faixas de TIG</h4>
            {hypoglycemiaSolutions.tigRanges.map((range, index) => (
              <div key={index} className="mb-2">
                <p><span className="font-medium">{range.range}:</span> {range.use}</p>
                <p className="text-sm text-gray-600">Concentração: {range.concentration}</p>
              </div>
            ))}

            <h4 className="font-medium mt-4 mb-2">Preparo das Soluções</h4>
            {Object.entries(hypoglycemiaSolutions.preparation).map(([key, prep]) => (
              <div key={key} className="mb-2">
                <p className="font-medium">Solução {prep.concentration}</p>
                <p className="text-sm">{prep.method}</p>
                <p className="text-sm text-gray-600">Volume final: {prep.finalVolume}</p>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <div>
            <p className="font-medium">Solução Base:</p>
            <p className="ml-4">{calculations.hypoglycemiaSolution.base.volume}mL de {calculations.hypoglycemiaSolution.base.name}</p>
          </div>

          {calculations.hypoglycemiaSolution.additives.length > 0 && (
            <div>
              <p className="font-medium">Aditivos:</p>
              {calculations.hypoglycemiaSolution.additives.map((additive: any, index: number) => (
                <p key={index} className="ml-4">
                  + {additive.volume}mL de {additive.name}
                  {additive.description && (
                    <span className="text-sm text-gray-600"> ({additive.description})</span>
                  )}
                </p>
              ))}
            </div>
          )}

          <div>
            <p className="font-medium">Volume Final: {calculations.hypoglycemiaSolution.finalVolume}mL</p>
            <p className="font-medium">Velocidade de Infusão: {calculations.hypoglycemiaSolution.rate}mL/h</p>
            <p className="font-medium">Trocar a cada: {calculations.hypoglycemiaSolution.duration} horas</p>
            <p className="font-medium">TIG: {calculations.hypoglycemiaSolution.tig} mg/kg/min</p>
          </div>

          {calculations.hypoglycemiaSolution.instructions && (
            <p className="text-sm text-gray-600 mt-2">{calculations.hypoglycemiaSolution.instructions}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderElectrolyteSolution = (solution: any, title: string, bgColor: string) => (
    <div className={`${bgColor} p-4 rounded-lg shadow-sm mb-6`}>
      <h3 className="font-medium text-lg mb-3">{title}</h3>
      <div className="bg-white p-4 rounded-lg">
        <div className="space-y-2">
          <div>
            <p className="font-medium">Solução Base:</p>
            <p className="ml-4">{solution.base.volume}mL de {solution.base.name}</p>
          </div>

          {solution.additives.length > 0 && (
            <div>
              <p className="font-medium">Aditivos:</p>
              {solution.additives.map((additive: any, index: number) => (
                <p key={index} className="ml-4">
                  + {additive.volume}mL de {additive.name}
                  {additive.description && (
                    <span className="text-sm text-gray-600"> ({additive.description})</span>
                  )}
                </p>
              ))}
            </div>
          )}

          <div>
            <p className="font-medium">Volume Final: {solution.finalVolume}mL</p>
            <p className="font-medium">Velocidade de Infusão: {solution.rate}mL/h</p>
            <p className="font-medium">Trocar a cada: {solution.duration} horas</p>
          </div>

          {solution.instructions && (
            <p className="text-sm text-gray-600 mt-2">{solution.instructions}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-6">Hidratação</h2>

      {renderMaintenanceSolution()}
      {renderElectrolyteSolution(calculations.urgentHydration, "Hidratação de Urgência", "bg-red-50")}
      {renderHypoglycemiaSolution()}
      {renderElectrolyteSolution(calculations.newbornCalciumSolution, "Solução de Cálcio para RN", "bg-green-50")}
      {renderElectrolyteSolution(calculations.hypokalemiaSolution, "Solução para Hipocalemia", "bg-purple-50")}
      {renderElectrolyteSolution(calculations.hyponatremiaSolution, "Solução para Hiponatremia", "bg-indigo-50")}

      <div className="bg-gray-50 p-4 rounded-lg mt-6">
        <h3 className="font-medium text-lg mb-2">Observações Importantes:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Todas as soluções devem ser preparadas com técnica asséptica</li>
          <li>Homogeneizar suavemente após adição de cada componente</li>
          <li>Monitorar sinais de infiltração e compatibilidade</li>
          <li>Ajustar velocidade conforme resposta clínica e prescrição médica</li>
          <li>Verificar glicemia capilar regularmente ao usar soluções glicosadas</li>
          <li>Monitorar eletrólitos séricos conforme protocolo</li>
          <li>Atenção aos limites máximos de correção de eletrólitos</li>
          <li>Em caso de alterações cardíacas, ajustar velocidade de infusão</li>
        </ul>
      </div>
    </div>
  );
};
