import React from "react";
import { ArrowLeft } from "lucide-react";



const PrivacyScreen: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-b-2xl shadow-lg">
        <div className="flex items-center px-6 pt-10 pb-6">
          <button
            onClick={() => router.back()}
            className="mr-4 p-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Política de Privacidade</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 shadow-lg p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          Política de Privacidade – Barza
        </h2>
        <p className="text-gray-600 mb-4">Última atualização: [09/09/2025]</p>

        <p className="text-gray-700 mb-4">
          A <span className="font-bold text-gray-900">Barza</span> valoriza a sua privacidade e
          compromete-se a proteger os dados pessoais dos seus utilizadores. Este documento explica
          como recolhemos, utilizamos, armazenamos e partilhamos as suas informações ao utilizar o
          nosso aplicativo móvel.
        </p>

        {/* Section 1 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          1. Informações que Recolhemos
        </h3>
        <p className="text-gray-700 mb-4">
          Durante a utilização da aplicação, podemos recolher as seguintes informações:
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Cadastro</h4>
        <p className="text-gray-700 mb-4">
          • Nome completo <br />• Endereço de e-mail <br />• Número de telefone <br />• Palavra-passe
          (encriptada) <br />• Tipo de conta (Cliente, Profissional Móvel ou Estabelecimento)
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Perfil</h4>
        <p className="text-gray-700 mb-4">
          • Fotografia de perfil <br />• Idioma preferido <br />• Descrição dos serviços
          (profissionais/estabelecimentos) <br />• Localização (fixa ou área de atendimento)
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Utilização</h4>
        <p className="text-gray-700 mb-4">
          • Histórico de agendamentos <br />• Serviços selecionados <br />• Notificações recebidas{" "}
          <br />• Interações no app
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Localização</h4>
        <p className="text-gray-700 mb-4">
          • Localização em tempo real (quando autorizada) <br />• Encontrar profissionais próximos{" "}
          <br />• Mostrar localização do cliente ao profissional após aceite <br />• Traçar rotas no
          mapa
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados Técnicos</h4>
        <p className="text-gray-700 mb-4">
          • Modelo do dispositivo e sistema operativo <br />• Endereço IP <br />• Dados de navegação
          no app (estatísticas internas)
        </p>

        {/* Section 2 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          2. Como Utilizamos as Informações
        </h3>
        <p className="text-gray-700 mb-4">
          • Criar e gerir a sua conta <br />• Permitir agendamento de serviços <br />• Mostrar
          profissionais e salões próximos <br />• Enviar notificações relevantes <br />• Melhorar a
          experiência do utilizador <br />• Garantir segurança e prevenir fraudes
        </p>

        {/* Section 3 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          3. Partilha de Informações
        </h3>
        <p className="text-gray-700 mb-4">
          A Barza não vende dados pessoais. <br />
          <br />Podemos partilhar informações:
        </p>
        <p className="text-gray-700 mb-4">
          • Entre utilizadores (clientes veem perfis de profissionais; profissionais veem localização
          apenas após aceite). <br />• Com serviços externos: Firebase (autenticação, notificações),
          Google Maps (rotas). <br />• Quando exigido por lei ou autoridades.
        </p>

        {/* Section 4 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">4. Armazenamento e Segurança</h3>
        <p className="text-gray-700 mb-4">
          • Dados guardados em servidores seguros (Firebase/Google Cloud). <br />• Palavras-passe
          encriptadas. <br />• Medidas técnicas para prevenir acessos não autorizados.
        </p>

        {/* Section 5 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">5. Direitos do Utilizador</h3>
        <p className="text-gray-700 mb-4">
          De acordo com o RGPD, o utilizador pode: <br />• Aceder, atualizar ou corrigir dados.{" "}
          <br />• Solicitar eliminação da conta (“direito a ser esquecido”). <br />• Retirar
          consentimento para localização/notificações. <br />• Exportar dados em formato acessível.{" "}
          <br />
          <br /> Para exercer os direitos: 📧 privacidade@barza.com
        </p>

        {/* Section 6 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">6. Retenção de Dados</h3>
        <p className="text-gray-700 mb-4">
          • Mantemos dados enquanto a conta estiver ativa. <br />• Após eliminação, dados são
          apagados ou anonimizados, exceto quando exigido por lei (ex.: fiscais).
        </p>

        {/* Section 7 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          7. Cookies e Tecnologias Semelhantes
        </h3>
        <p className="text-gray-700 mb-4">
          A versão web pode utilizar cookies para: <br />• Autenticação <br />• Preferências de
          idioma <br />• Estatísticas de uso
        </p>

        {/* Section 8 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">8. Alterações</h3>
        <p className="text-gray-700 mb-4">
          Esta Política pode ser atualizada periodicamente. Alterações serão notificadas no app ou
          via e-mail.
        </p>

        {/* Section 9 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">9. Contacto</h3>
        <p className="text-gray-700 mb-4">
          Em caso de dúvidas, contacte-nos através do e-mail: <br />📧 gongamiguel@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyScreen;
