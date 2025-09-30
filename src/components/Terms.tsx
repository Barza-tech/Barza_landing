import React from "react";
import { ArrowLeft } from "lucide-react";

const TermsScreen: React.FC = () => {

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
          <h1 className="text-2xl font-bold">Termos de Uso</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 shadow-lg p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          Termos e Condições de Uso – Barza
        </h2>
        <p className="text-gray-600 mb-4">Última atualização: [09/09/2025]</p>

        <p className="text-gray-700 mb-4">
          Bem-vindo ao <span className="font-bold text-gray-900">Barza</span>, uma aplicação
          mobile-first para agendamento de serviços de barbearia e salão de beleza.
        </p>

        <p className="text-gray-700 mb-6">
          Ao utilizar o Barza, o utilizador aceita integralmente os presentes Termos e Condições.
          Caso não concorde, deverá desinstalar a aplicação e cessar o uso imediatamente.
        </p>

        {/* Section Example */}
        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-2">1. Definições</h3>
        <p className="text-gray-700 mb-4">
          • <span className="font-bold">“Barza”</span> – Aplicação móvel desenvolvida para interligar
          clientes, profissionais móveis e estabelecimentos de beleza. <br />
          • <span className="font-bold">“Utilizador”</span> – Qualquer pessoa que utilize a
          aplicação. <br />
          • <span className="font-bold">“Serviços”</span> – Funcionalidades da aplicação, incluindo
          registo, agendamento, notificações, geolocalização e histórico.
        </p>

        {/* Continua igual para as outras seções */}
      </div>
    </div>
  );
};

export default TermsScreen;
