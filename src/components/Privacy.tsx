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
        <p className="text-gray-600 mb-4">Última atualização: [01/10/2025]</p>

        <p className="text-gray-700 mb-4">
          A <span className="font-bold text-gray-900">Barza</span> valoriza a sua privacidade e compromete-se a proteger os dados pessoais dos seus utilizadores. 
          Explicamos de forma clara quais os dados que recolhemos, porque os recolhemos e como os utilizamos, seguindo as exigências da App Store.
        </p>

        {/* Section 1 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          1. Informações que Recolhemos e Porque
        </h3>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Cadastros</h4>
        <p className="text-gray-700 mb-2">
          • Nome, e-mail, telefone e palavra-passe (encriptada).
        </p>
        <p className="text-gray-500 italic mb-4">
          👉 Porque: para criar e autenticar a conta, permitir login seguro e contacto básico.  
          Exemplo: usamos o seu e-mail para recuperar a conta caso esqueça a palavra-passe.
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Perfil</h4>
        <p className="text-gray-700 mb-2">
          • Foto de perfil, idioma preferido, descrição de serviços, localização fixa ou área de atuação.
        </p>
        <p className="text-gray-500 italic mb-4">
          👉 Porque: para mostrar o seu perfil a outros utilizadores de forma completa e relevante.  
          Exemplo: um barbeiro pode adicionar “Especialista em cortes clássicos” e definir que atende apenas no centro da cidade.
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Utilização</h4>
        <p className="text-gray-700 mb-2">
          • Histórico de agendamentos, serviços escolhidos, interações no app.
        </p>
        <p className="text-gray-500 italic mb-4">
          👉 Porque: para melhorar a experiência, permitir repetir serviços e enviar notificações úteis.  
          Exemplo: guardamos o histórico para recomendar serviços semelhantes que já utilizou.
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados de Localização</h4>
        <p className="text-gray-700 mb-2">
          • Localização em tempo real (quando autorizado pelo utilizador).
        </p>
        <p className="text-gray-500 italic mb-4">
          👉 Porque: para recomendar profissionais próximos e calcular rotas.  
          Exemplo: ao pedir um barbeiro em casa, mostramos apenas profissionais disponíveis na sua zona.
        </p>

        <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">🔹 Dados Técnicos</h4>
        <p className="text-gray-700 mb-2">
          • Modelo do dispositivo, sistema operativo, endereço IP e dados de navegação.
        </p>
        <p className="text-gray-500 italic mb-4">
          👉 Porque: para garantir compatibilidade técnica e segurança do app.  
          Exemplo: registamos que usa Android 14 para resolver erros específicos dessa versão.
        </p>

        {/* Section 2 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          2. Como Utilizamos as Informações
        </h3>
        <p className="text-gray-700 mb-2">
          • Criar e gerir a sua conta. <br />
          • Mostrar profissionais e estabelecimentos próximos. <br />
          • Enviar notificações sobre agendamentos e promoções. <br />
          • Melhorar a performance e segurança da aplicação.
        </p>
        <p className="text-gray-500 italic mb-4">
          Exemplo: notificamos quando a hora do seu agendamento se aproxima, ou quando há promoções no seu salão favorito.
        </p>

        {/* Section 3 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">
          3. Partilha de Informações
        </h3>
        <p className="text-gray-700 mb-2">
          A Barza não vende dados pessoais. Apenas partilhamos quando necessário:
        </p>
        <p className="text-gray-700 mb-2">
          • Entre utilizadores: clientes veem perfis públicos dos profissionais. <br />
          • Com serviços externos: Firebase (login, notificações), Google Maps (localização e rotas). <br />
          • Autoridades legais, quando exigido por lei.
        </p>
        <p className="text-gray-500 italic mb-4">
          Exemplo: se marcar um barbeiro, ele só vê a sua morada depois de aceitar o serviço.
        </p>

        {/* Section 4 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">4. Armazenamento e Segurança</h3>
        <p className="text-gray-700 mb-2">
          • Dados guardados em servidores seguros (Google Cloud). <br />
          • Palavras-passe encriptadas. <br />
          • Proteção contra acessos não autorizados.
        </p>
        <p className="text-gray-500 italic mb-4">
          Exemplo: mesmo a equipa Barza não consegue ver a sua palavra-passe.
        </p>

        {/* Section 5 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">5. Direitos do Utilizador</h3>
        <p className="text-gray-700 mb-2">
          Pode a qualquer momento: aceder, atualizar ou corrigir dados; pedir a eliminação da conta; retirar consentimentos; exportar informações.
        </p>
        <p className="text-gray-500 italic mb-4">
          Exemplo: pode pedir a eliminação da sua conta e todos os dados associados serão removidos dos nossos sistemas.
        </p>

        {/* Section 6 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">6. Retenção de Dados</h3>
        <p className="text-gray-700 mb-2">
          Mantemos os dados enquanto a conta estiver ativa. Após eliminação, dados são apagados ou anonimizados, salvo exigência legal.
        </p>
        <p className="text-gray-500 italic mb-4">
          Exemplo: podemos guardar faturas por obrigações fiscais, mesmo após eliminar a conta.
        </p>

        {/* Section 7 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">7. Cookies e Tecnologias Semelhantes</h3>
        <p className="text-gray-700 mb-2">
          Na versão web, usamos cookies para autenticação, idioma e estatísticas.
        </p>
        <p className="text-gray-500 italic mb-4">
          Exemplo: se escolher "Português", guardamos essa preferência num cookie para não ter que repetir.
        </p>

        {/* Section 8 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">8. Alterações</h3>
        <p className="text-gray-700 mb-2">
          Podemos atualizar esta política e notificaremos no app ou por e-mail.
        </p>

        {/* Section 9 */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">9. Contacto</h3>
        <p className="text-gray-700 mb-2">
          📧 gongamiguel@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyScreen;
