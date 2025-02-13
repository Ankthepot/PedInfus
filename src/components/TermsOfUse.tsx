import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Políticas de Uso</h2>
      <p className="text-gray-700 text-sm mb-2">
        Ao utilizar nossos serviços, você concorda em cumprir as seguintes condições:
      </p>
      <ol className="list-decimal list-inside text-gray-700 text-sm mb-2">
        <li className="mb-1">
          <b>Aceitação dos Termos:</b> Ao acessar e usar nosso site, você concorda em respeitar todas as diretrizes e políticas estabelecidas. Caso não concorde, solicitamos que não utilize nossos serviços.
        </li>
        <li className="mb-1">
          <b>Uso Responsável:</b> É proibido o uso de nossos serviços para fins ilícitos ou que possam comprometer a integridade do sistema. Você se compromete a não realizar atividades que possam prejudicar ou interromper o funcionamento do site.
        </li>
        <li className="mb-1">
          <b>Propriedade Intelectual:</b> Todo o conteúdo disponível em nosso site, incluindo textos, imagens e logotipos, é protegido por direitos autorais e outras leis de propriedade intelectual. É estritamente proibida a reprodução não autorizada desse conteúdo.
        </li>
        <li className="mb-1">
          <b>Alterações nas Políticas:</b> Reservamo-nos o direito de modificar estas políticas a qualquer momento, sendo responsabilidade do usuário revisar regularmente os termos para se manter atualizado.
        </li>
      </ol>
    </div>
  );
};

export default TermsOfUse;
