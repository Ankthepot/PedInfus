import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Política de Privacidade</h2>
      <p className="text-gray-700 text-base mb-4">
        A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais:
      </p>
      <ol className="list-decimal list-inside text-gray-700 text-base mb-4" style={{ listStylePosition: 'inside', paddingLeft: '1.2em' }}>
        <li className="mb-2">
          <b>Coleta de Informações:</b> Podemos coletar informações pessoais identificáveis, como nome, e-mail e telefone, quando você se cadastra em nossos serviços ou preenche formulários em nosso site.
        </li>
        <li className="mb-2">
          <b>Uso das Informações:</b> As informações coletadas são utilizadas para fornecer e melhorar nossos serviços, personalizar sua experiência e enviar comunicações relevantes.
        </li>
        <li className="mb-2">
          <b>Compartilhamento de Informações:</b> Não vendemos, trocamos ou transferimos suas informações pessoais a terceiros sem o seu consentimento, exceto quando necessário para cumprir a lei ou proteger nossos direitos.
        </li>
        <li className="mb-2">
          <b>Segurança das Informações:</b> Implementamos medidas de segurança adequadas para proteger suas informações pessoais. No entanto, nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro.
        </li>
        <li className="mb-2">
          <b>Alterações na Política de Privacidade:</b> Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página, e recomendamos que você a revise periodicamente.
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPolicy;
