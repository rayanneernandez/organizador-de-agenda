import React, { useState } from 'react';
import { Calendar, Clock, Building, User, FileText, Hash } from 'lucide-react';

interface EventForm {
  title: string;
  location: string;
  description: string;
  assignedTo: string;
  date: string;
  time: string;
  ticketNumber: string;
}

function App() {
  const [formData, setFormData] = useState<EventForm>({
    title: '',
    location: '',
    description: 'Verificar ',
    assignedTo: '',
    date: '',
    time: '',
    ticketNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a data e hora para o formato do Google Calendar
    const dateTime = `${formData.date}T${formData.time}`;
    
    // Cria a descrição completa com o formato padrão
    const fullDescription = `Local: ${formData.location}\n\n` +
      `Horário de início: ${formData.time}h\n\n` +
      `Técnico responsável: ${formData.assignedTo}\n\n` +
      `Descrição: ${formData.description}\n\n` +
      `Número do chamado atrelado: ${formData.ticketNumber}`;
    
    // Cria a URL do Google Calendar com os parâmetros do evento
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(formData.title)}&details=${encodeURIComponent(fullDescription)}&dates=${encodeURIComponent(dateTime.replace(/[-:]/g, ''))}/${encodeURIComponent(dateTime.replace(/[-:]/g, ''))}&location=${encodeURIComponent(formData.location)}&sf=true&output=xml`;
    
    // Abre a URL em uma nova aba
    window.open(googleCalendarUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Agendar Evento</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ex: Manutenção Preventiva"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Local
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  required
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Endereço completo"
                />
              </div>
            </div>

            <div>
              <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">
                Técnico responsável
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="assignedTo"
                  id="assignedTo"
                  required
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  placeholder="Nome do técnico"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="description"
                  id="description"
                  required
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Detalhes do serviço"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ticketNumber" className="block text-sm font-medium text-gray-700">
                Número do chamado
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="ticketNumber"
                  id="ticketNumber"
                  required
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.ticketNumber}
                  onChange={handleChange}
                  placeholder="Número do ticket"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Data
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Horário
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Clock className="h-5 w-5 mr-2" />
              Adicionar ao Calendário
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;