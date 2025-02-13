import React from 'react';

const deviceCategories = [
  {
    name: "Vias Aéreas",
    color: "bg-blue-100",
    headerColor: "bg-blue-600",
    devices: [
      {
        name: "Tubo Endotraqueal",
        reference: "PALS/ACLS 2020-2025",
        sizes: [
          { group: "Neonatal", items: [
            { size: "2.5", note: "Prematuro <1kg, sem cuff" },
            { size: "3.0-3.5", note: "RN termo 3-4kg, sem cuff" }
          ]},
          { group: "Pediátrico", items: [
            { size: "3.5", note: "1-6 meses, com cuff" },
            { size: "4.0", note: "6-12 meses, com cuff" },
            { size: "4.0-4.5", note: "1-2 anos, com cuff" },
            { size: "4.5", note: "2-3 anos, com cuff" },
            { size: "4.5-5.0", note: "3-4 anos, com cuff" },
            { size: "5.0-5.5", note: "4-6 anos, com cuff" },
            { size: "5.5-6.0", note: "6-8 anos, com cuff" },
            { size: "6.0-6.5", note: "8-10 anos, com cuff" },
            { size: "6.5", note: "10-12 anos, com cuff" }
          ]},
          { group: "Adulto", items: [
            { size: "7.0-7.5", note: ">12 anos, com cuff" },
            { size: "7.0-8.0", note: "Adulto, com cuff" }
          ]}
        ]
      },
      {
        name: "Máscara Laríngea",
        reference: "PALS/ACLS 2020-2025",
        sizes: [
          { group: "Neonatal/Lactente", items: [
            { size: "1.0", note: "<5kg" },
            { size: "1.5", note: "5-10kg" }
          ]},
          { group: "Pediátrico", items: [
            { size: "2.0", note: "10-20kg" },
            { size: "2.5", note: "20-30kg" }
          ]},
          { group: "Adulto", items: [
            { size: "3.0", note: "30-50kg" },
            { size: "4.0", note: "50-70kg" },
            { size: "5.0", note: ">70kg" }
          ]}
        ]
      },
      {
        name: "Lâmina Laringoscópio",
        reference: "PALS 2020-2025",
        sizes: [
          { group: "Neonatal", items: [
            { size: "00-0", note: "Prematuro, reta" },
            { size: "0-1", note: "RN termo, reta" }
          ]},
          { group: "Pediátrico", items: [
            { size: "1", note: "1-24 meses, reta" },
            { size: "2", note: "2-5 anos, reta/curva" },
            { size: "2-3", note: "5-12 anos, curva" }
          ]},
          { group: "Adulto", items: [
            { size: "3-4", note: ">12 anos e adulto, curva" }
          ]}
        ]
      }
    ]
  },
  {
    name: "Ventilação",
    color: "bg-green-100",
    headerColor: "bg-green-600",
    devices: [
      {
        name: "Bolsa-Válvula-Máscara",
        reference: "PALS 2020-2025",
        sizes: [
          { group: "Neonatal", items: [
            { size: "250mL", note: "RN prematuro" },
            { size: "450-500mL", note: "RN termo/Lactente <6m" }
          ]},
          { group: "Pediátrico", items: [
            { size: "750mL", note: "Lactente/Pré-escolar" },
            { size: "1000mL", note: "Escolar/Adolescente" }
          ]},
          { group: "Adulto", items: [
            { size: "1500-2000mL", note: "Adolescente grande/Adulto" }
          ]}
        ]
      }
    ]
  },
  {
    name: "Acesso Vascular",
    color: "bg-red-100",
    headerColor: "bg-red-600",
    devices: [
      {
        name: "Cateter Venoso",
        reference: "PALS/ATLS 2020-2025",
        sizes: [
          { group: "Neonatal/Lactente", items: [
            { size: "24G", note: "Emergência neonatal" },
            { size: "24-22G", note: "RN/Lactente pequeno" }
          ]},
          { group: "Pediátrico", items: [
            { size: "22-20G", note: "Lactente/Pré-escolar" },
            { size: "20-18G", note: "Escolar" }
          ]},
          { group: "Adulto", items: [
            { size: "18-16G", note: "Adolescente" },
            { size: "16-14G", note: "Adulto" },
            { size: "14G", note: "Trauma adulto" }
          ]}
        ]
      }
    ]
  },
  {
    name: "Sondas",
    color: "bg-purple-100",
    headerColor: "bg-purple-600",
    devices: [
      {
        name: "Sonda de Aspiração",
        reference: "PALS 2020-2025",
        sizes: [
          { group: "Neonatal", items: [
            { size: "6Fr", note: "RN prematuro" },
            { size: "8Fr", note: "RN termo" }
          ]},
          { group: "Pediátrico", items: [
            { size: "8-10Fr", note: "Lactente 1-12m" },
            { size: "10Fr", note: "1-2 anos" },
            { size: "10-12Fr", note: "2-5 anos" },
            { size: "12-14Fr", note: "5-12 anos" }
          ]},
          { group: "Adulto", items: [
            { size: "14Fr", note: ">12 anos" }
          ]}
        ]
      },
      {
        name: "Sonda Nasogástrica",
        reference: "PALS/ATLS 2020-2025",
        sizes: [
          { group: "Neonatal", items: [
            { size: "5Fr", note: "RN prematuro" },
            { size: "8Fr", note: "RN termo" }
          ]},
          { group: "Pediátrico", items: [
            { size: "8-10Fr", note: "1-12 meses" },
            { size: "10-12Fr", note: "1-6 anos" },
            { size: "12-14Fr", note: "6-12 anos" }
          ]},
          { group: "Adulto", items: [
            { size: "14-16Fr", note: ">12 anos" }
          ]}
        ]
      }
    ]
  }
];

export const DeviceInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Dispositivos Médicos</h2>
      <div className="space-y-6">
        {deviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`${category.color} rounded-lg overflow-hidden`}>
            <div className={`${category.headerColor} text-white px-4 py-2`}>
              <h3 className="text-lg font-medium">{category.name}</h3>
            </div>
            <div className="p-4">
              {category.devices.map((device, deviceIndex) => (
                <div key={deviceIndex} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-medium text-gray-900">{device.name}</h4>
                    <span className="text-sm text-gray-600">{device.reference}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {device.sizes.map((sizeGroup, groupIndex) => (
                      <div key={groupIndex} className="bg-white rounded-lg p-3 shadow-sm">
                        <h5 className="font-medium text-sm text-gray-700 mb-2">{sizeGroup.group}</h5>
                        <ul className="space-y-2">
                          {sizeGroup.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm">
                              <span className="font-medium">{item.size}</span>
                              <span className="text-gray-600 ml-2">({item.note})</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Observações Importantes:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Todas as recomendações seguem os protocolos PALS/ACLS/ATLS 2020-2025</li>
          <li>Considerar características individuais do paciente na escolha final</li>
          <li>Em situações de emergência, ter sempre disponível uma medida acima e uma abaixo</li>
          <li>Verificar integridade e data de validade dos dispositivos antes do uso</li>
          <li>Manter kit de via aérea difícil sempre acessível</li>
          <li>Registrar tamanho e lote dos dispositivos utilizados</li>
        </ul>
      </div>
    </div>
  );
};
