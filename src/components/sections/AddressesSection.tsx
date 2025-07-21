'use client';

import { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar, Phone, Mail } from 'lucide-react';
import { getAllAddresses } from '@/data';
import { Button } from '@/components/ui/button';
import { useSectionAnimation } from '@/lib/animations';

export function AddressesSection() {
  const addresses = getAllAddresses();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useSectionAnimation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleLocation = (locationName: string) => {
    setSelectedLocation(selectedLocation === locationName ? null : locationName);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 section-title">
            Nossas <span className="text-gradient">Unidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto section-description">
            Encontre a unidade mais próxima de você e confira os horários de funcionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addresses.map((address) => (
            <div
              key={address.name}
              className="card address-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{address.name}</h3>
                <div className="flex items-center text-white/90">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{address.city}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Endereço */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin size={18} className="mr-2 text-primary-600" />
                    Endereço
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {address.street}
                    <br />
                    {address.city} - {address.state}
                    {address.zipCode && (
                      <>
                        <br />
                        CEP {address.zipCode}
                      </>
                    )}
                  </p>
                </div>

                {/* Horários */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock size={18} className="mr-2 text-primary-600" />
                    Horários de Funcionamento
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Segunda à Sábado:</span>
                      <span className="font-medium">{address.workingHours.weekdays.split(': ')[1]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingo:</span>
                      <span className="font-medium">{address.workingHours.weekends.split(': ')[1]}</span>
                    </div>
                    {address.workingHours.holidays && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Feriados:</span>
                        <span className="font-medium">{address.workingHours.holidays.split(': ')[1]}</span>
                      </div>
                    )}
                  </div>

                  {/* Período Especial */}
                  {address.workingHours.specialPeriod && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar size={16} className="mr-2 text-yellow-600" />
                        <span className="font-semibold text-yellow-800 text-sm">
                          {address.workingHours.specialPeriod.title}
                        </span>
                      </div>
                      <p className="text-yellow-700 text-xs mb-2">
                        {address.workingHours.specialPeriod.period}
                      </p>
                      <div className="space-y-1 text-xs text-yellow-700">
                        <div className="flex justify-between">
                          <span>Segunda à Sábado:</span>
                          <span className="font-medium">
                            {address.workingHours.specialPeriod.weekdays.split(': ')[1]}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Domingo e Feriados:</span>
                          <span className="font-medium">
                            {address.workingHours.specialPeriod.weekends.split(': ')[1]}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botão para expandir detalhes */}
                {isClient && (
                  <Button
                    onClick={() => toggleLocation(address.name)}
                    className="w-full text-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    {selectedLocation === address.name ? 'Ocultar detalhes' : 'Ver mais detalhes'}
                  </Button>
                )}

                {/* Detalhes expandidos */}
                {isClient && selectedLocation === address.name && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone size={16} className="mr-2 text-primary-600" />
                        <span>Telefone: (11) 2385-2640</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail size={16} className="mr-2 text-primary-600" />
                        <span>Email: sac@altitudepark.com.br</span>
                      </div>
                      {address.mapLink && (
                        <a
                          href={address.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <MapPin size={16} className="mr-2" />
                          Ver no mapa
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 cta-buttons">
          <p className="text-gray-600 mb-6">
            Não encontrou uma unidade próxima? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" size="xl">
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 