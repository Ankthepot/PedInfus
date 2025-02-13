import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Sobre PediInfus</h2>
      <p className="text-gray-700 text-sm mb-2">
        Auxilia profissionais na administração segura de medicamentos e soluções pediátricas.
      </p>
      <h3 className="text-md font-semibold mb-1">Recursos:</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
        <li>Cálculo de doses</li>
        <li>Módulo de hidratação</li>
        <li>Info de dispositivos</li>
        <li>Protocolos de hipoglicemia</li>
      </ul>
      <h3 className="text-md font-semibold mb-1">Aplicações:</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
        <li>Emergências</li>
        <li>UTIs</li>
        <li>Enfermarias</li>
        <li>Pronto atendimento</li>
      </ul>
      <h3 className="text-md font-semibold mb-1">Benefícios:</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
        <li>Segurança</li>
        <li>Eficiência</li>
        <li>Confiabilidade</li>
        <li>Acessibilidade</li>
      </ul>
    </div>
  );
};

export default About;
