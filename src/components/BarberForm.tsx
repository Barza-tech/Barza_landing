import React, { useState } from 'react';
import { Send, Scissors, Gift, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import emailjs from '@emailjs/browser';

const BarberForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    barbershopName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous errors when user starts typing
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      const serviceId = 'service_prw1p3p'; // You'll need to create this
      const templateId = 'template_aer9ipn'; // You'll need to create this
      const publicKey = 'yx7HVePx78zv1kcis'; // You'll need to get this

      // Prepare template parameters
      const templateParams = {
        to_email: 'gongamiguel@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        barbershop_name: formData.barbershopName,
        submission_date: new Date().toLocaleString(),
        message: `Nova inscrição de barbeiro recebida:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Nome da Barbearia: ${formData.barbershopName}

Data de inscrição: ${new Date().toLocaleString()}`
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          barbershopName: ''
        });
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.barbershopName;

  if (isSubmitted) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('formSuccessTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('formSuccessMessage')}
            </p>
            <div className="bg-green-100 border border-green-200 rounded-xl p-6">
              <p className="text-green-800 font-medium">
                {t('formSuccessDetails')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <Gift className="w-4 h-4 mr-2" />
              {t('formPromoLabel')}
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('formTitle')}
            </h2>
            
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-lg sm:text-xl font-semibold">
                {t('formPromoMessage')}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('formSubtitle')}</h3>
            </div>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 text-center">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('formNameLabel')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder={t('formNamePlaceholder')}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('formEmailLabel')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder={t('formEmailPlaceholder')}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('formPhoneLabel')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder={t('formPhonePlaceholder')}
                />
              </div>

              {/* Barbershop Name Field */}
              <div>
                <label htmlFor="barbershopName" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('formBarbershopLabel')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="barbershopName"
                  name="barbershopName"
                  value={formData.barbershopName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder={t('formBarbershopPlaceholder')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('formSubmitting')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('formSubmitButton')}
                  </>
                )}
              </button>
            </form>

            {/* Privacy Note */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                {t('formPrivacyNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarberForm;