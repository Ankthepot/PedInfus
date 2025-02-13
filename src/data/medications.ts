export const medications = [
  {
    name: "Adrenalina 1:1.000",
    dosePerKg: "0.01 ml/kg",
    instructions: `
      Concentração inicial: 1mg/mL (1:1.000)
      Diluição PCR (IV/IO):
      - Volume: 1mL ampola + 9mL SF
      - Concentração final: 0.1mg/mL (1:10.000)
      - Estabilidade: 24h sob refrigeração
      - Proteger da luz
      
      Via ET em PCR:
      - Usar sem diluição (1:1.000)
      - Administrar direto
      
      Infusão contínua:
      - Diluir 1mg (1mL) em 100mL SF/SG5%
      - Concentração: 10mcg/mL
      - Trocar a cada 24h`,
    administration: "IV/IO/ET",
    preparation: "1mL (1mg) + 9mL SF = 1:10.000",
    maxDose: "1mg (1mL)"
  },
  {
    name: "Adenosina",
    dosePerKg: "0.1 mg/kg",
    instructions: `
      Concentração inicial: 3mg/mL
      Apresentação: Pronto para uso
      Estabilidade: Uso imediato após abertura
      
      Administração:
      - 1ª dose: 0.1mg/kg
      - 2ª e 3ª doses: 0.2mg/kg
      - Bolus rápido (1-2 segundos)
      - Flush imediato com 5-10mL SF
      
      Observações:
      - Não diluir
      - Usar acesso calibroso proximal
      - Monitorização contínua do ECG
      - Manter material de ressuscitação disponível`,
    administration: "IV/IO rápido",
    preparation: "Pronto para uso\nArmazenar entre 15-30°C\nProteger da luz",
    maxDose: "6mg (2mL) 1ª dose, 12mg (4mL) 2ª/3ª doses"
  },
  {
    name: "Amiodarona",
    dosePerKg: "5 mg/kg",
    instructions: `
      Concentração inicial: 50mg/mL
      
      PCR:
      - Usar sem diluição
      - Bolus rápido
      - Flush com 5mL SF
      
      Infusão:
      - Diluir em SF/SG5% para 1-2mg/mL
      - Volume final mínimo: 20mL
      - Estabilidade: 24h temperatura ambiente
      - Usar equipo e filtro fotoprotetor
      
      Observações:
      - Incompatível com heparina e bicarbonato
      - Não misturar com outros medicamentos
      - Monitorar PA, FC e ECG
      - Acesso exclusivo`,
    administration: "IV/IO",
    preparation: "Infusão: diluir para 1-2mg/mL\nPCR: sem diluição",
    maxDose: "300mg (6mL)"
  },
  {
    name: "Atropina",
    dosePerKg: "0.02 mg/kg",
    instructions: `
      Concentração inicial: 0.5mg/mL
      
      Diluição padrão:
      - 1mL (0.5mg) + 9mL SF
      - Concentração final: 0.05mg/mL
      - Estabilidade: 24h temperatura ambiente
      - Volume final: 10mL
      
      Preparo alternativo para doses menores:
      - 0.5mL (0.25mg) + 4.5mL SF
      - Volume final: 5mL
      
      Observações:
      - Dose mínima: 0.1mg (2mL da solução diluída)
      - Bradicardia: dose única 0.02mg/kg
      - PCR: dose única 0.04mg/kg
      - Proteger da luz`,
    administration: "IV/IO/ET",
    preparation: "1mL (0.5mg) + 9mL SF = 0.05mg/mL\nEstável por 24h entre 15-30°C",
    maxDose: "0.5mg criança, 1mg adolescente"
  },
  {
    name: "Bicarbonato 8.4%",
    dosePerKg: "1 mEq/kg",
    instructions: `
      Concentração inicial: 1mEq/mL
      Diluição: 1:1 com água destilada
      Volume final: dobro do volume inicial
      Dose: 1mL/kg da solução inicial
      Estabilidade: 24h temperatura ambiente
      Observações:
      - PCR: pode ser usado sem diluição
      - Infusão: diluir 1:1
      - Não misturar com catecolaminas`,
    administration: "IV/IO",
    preparation: "1mL = 1mEq, diluir 1:1",
    maxDose: "50mEq"
  },
  {
    name: "Cálcio Gluconato 10%",
    dosePerKg: "50 mg/kg",
    instructions: `
      Concentração inicial: 100mg/mL
      Diluição: 1:1 com SF
      Volume final: dobro do volume inicial
      Dose: 0.5mL/kg da solução inicial
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Infusão em 5-10min
      - Monitorar FC e local de infusão
      - Não misturar com bicarbonato`,
    administration: "IV/IO lento",
    preparation: "Diluir 1:1 com SF",
    maxDose: "2g (20mL)"
  },
  {
    name: "Dexametasona",
    dosePerKg: "0.15 mg/kg",
    instructions: `
      Concentração inicial: 4mg/mL
      Sem diluição necessária para dose única
      Dose em mL: 0.0375mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Pode ser diluída em SF/SG5% para infusão
      - Volume mínimo para infusão: 20mL
      - Tempo de infusão: 15-20min`,
    administration: "IV/IM",
    preparation: "Usar sem diluição ou diluir conforme necessário",
    maxDose: "10mg (2.5mL)"
  },
  {
    name: "Diazepam",
    dosePerKg: "0.2 mg/kg",
    instructions: `
      Concentração inicial: 5mg/mL
      Sem diluição necessária
      Dose em mL: 0.04mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Infusão lenta: 1mg/min
      - Pode ser diluído em SF para infusão
      - Proteger da luz`,
    administration: "IV/IM",
    preparation: "Sem diluição",
    maxDose: "10mg (2mL)"
  },
  {
    name: "Dipirona",
    dosePerKg: "20 mg/kg",
    instructions: `
      Concentração inicial: 500mg/mL
      Diluição: até 20mL SF
      Volume final: 20mL
      Dose em mL: 0.04mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Infusão em 15-20min
      - Diluir sempre para uso IV`,
    administration: "IV/IM",
    preparation: "Diluir em 20mL SF",
    maxDose: "1g (2mL)"
  },
  {
    name: "Dobutamina",
    dosePerKg: "5-20 mcg/kg/min",
    instructions: `
      Concentração inicial: 12.5mg/mL
      Diluição padrão: 4mL (50mg) + 46mL SF
      Volume final: 50mL (1mg/mL)
      Dose: Calcular conforme peso e dose desejada
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Iniciar com 5mcg/kg/min
      - Titular conforme resposta
      - Proteger da luz`,
    administration: "IV contínuo",
    preparation: "4mL (50mg) + 46mL SF = 1mg/mL",
    maxDose: "40mcg/kg/min"
  },
  {
    name: "Dopamina",
    dosePerKg: "5-20 mcg/kg/min",
    instructions: `
      Concentração inicial: 5mg/mL
      Diluição padrão: 10mL (50mg) + 40mL SF
      Volume final: 50mL (1mg/mL)
      Dose: Calcular conforme peso e dose desejada
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Iniciar com 5mcg/kg/min
      - Titular conforme resposta
      - Proteger da luz`,
    administration: "IV contínuo",
    preparation: "10mL (50mg) + 40mL SF = 1mg/mL",
    maxDose: "20mcg/kg/min"
  },
  {
    name: "Fenitoína",
    dosePerKg: "20 mg/kg",
    instructions: `
      Concentração inicial: 50mg/mL
      Diluição: 1:1 com SF
      Volume final: dobro do volume inicial
      Dose em mL: 0.4mL/kg da solução inicial
      Estabilidade: uso imediato
      Observações:
      - Infusão máxima: 1mg/kg/min
      - Usar equipo e cateter próprios
      - Não misturar com outras drogas`,
    administration: "IV lento",
    preparation: "Diluir 1:1 com SF",
    maxDose: "1.25g"
  },
  {
    name: "Fenobarbital",
    dosePerKg: "20 mg/kg",
    instructions: `
      Concentração inicial: 100mg/mL
      Diluição: 1:1 com AD
      Volume final: dobro do volume inicial
      Dose em mL: 0.2mL/kg da solução inicial
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Infusão máxima: 1mg/kg/min
      - Não exceder 30mg/min
      - Monitorar respiração`,
    administration: "IV lento",
    preparation: "Diluir 1:1 com AD",
    maxDose: "1g (10mL)"
  },
  {
    name: "Fentanil",
    dosePerKg: "1-2 mcg/kg",
    instructions: `
      Concentração inicial: 50mcg/mL
      Sem diluição para bolus
      Diluição para infusão: 2-10mcg/mL
      Dose em mL: 0.02-0.04mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Bolus em 3-5min
      - Infusão: 1-5mcg/kg/h
      - Monitorar respiração`,
    administration: "IV/IM",
    preparation: "Sem diluição para bolus, diluir para infusão",
    maxDose: "50mcg (1mL) por dose"
  },
  {
    name: "Furosemida",
    dosePerKg: "1 mg/kg",
    instructions: `
      Concentração inicial: 10mg/mL
      Sem diluição necessária para bolus
      Diluição para infusão: 1-2mg/mL
      Dose em mL: 0.1mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Infusão em 5-10min
      - Proteger da luz
      - Monitorar eletrólitos`,
    administration: "IV/IM",
    preparation: "Sem diluição para bolus, diluir para infusão",
    maxDose: "20mg (2mL) por dose"
  },
  {
    name: "Hidrocortisona",
    dosePerKg: "4-8 mg/kg",
    instructions: `
      Concentração após reconstituição: 50mg/mL
      Diluição: Conforme volume do fabricante
      Dose em mL: 0.08-0.16mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Reconstituir conforme fabricante
      - Pode ser diluído em SF/SG5%
      - Infusão em 10-20min`,
    administration: "IV/IM",
    preparation: "Reconstituir conforme fabricante",
    maxDose: "500mg"
  },
  {
    name: "Ketamina",
    dosePerKg: "1-2 mg/kg",
    instructions: `
      Concentração inicial: 50mg/mL
      Sem diluição para IM
      Diluição para IV: até 1mg/mL
      Dose em mL: 0.02-0.04mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - IV: infusão em 1-2min
      - Pode causar laringoespasmo
      - Monitorar via aérea`,
    administration: "IV/IM",
    preparation: "Sem diluição para IM, diluir para IV",
    maxDose: "200mg"
  },
  {
    name: "Midazolam",
    dosePerKg: "0.1 mg/kg",
    instructions: `
      Concentração inicial: 5mg/mL
      Sem diluição para bolus
      Diluição para infusão: 0.1-0.5mg/mL
      Dose em mL: 0.02mL/kg
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Bolus em 2-3min
      - Infusão: 0.05-0.4mg/kg/h
      - Monitorar respiração`,
    administration: "IV/IM/IN",
    preparation: "Sem diluição para bolus, diluir para infusão",
    maxDose: "5mg por dose"
  },
  {
    name: "Morfina",
    dosePerKg: "0.1 mg/kg",
    instructions: `
      Concentração inicial: 10mg/mL
      Diluição: 1mg/mL para bolus
      Diluição infusão: 0.1-1mg/mL
      Dose em mL: 0.1mL/kg da solução diluída
      Estabilidade: 24h temperatura ambiente
      Observações:
      - Bolus em 5min
      - Infusão: 0.01-0.04mg/kg/h
      - Monitorar respiração`,
    administration: "IV/IM",
    preparation: "Diluir para 1mg/mL",
    maxDose: "5mg por dose"
  },
  {
    name: "Noradrenalina",
    dosePerKg: "0.05-2 mcg/kg/min",
    instructions: `
      Concentração inicial: 1mg/mL
      Diluição padrão: 4mg (4mL) + 46mL SF
      Volume final: 50mL (0.08mg/mL)
      Dose: Calcular conforme peso e dose desejada
      Estabilidade: 24h sob refrigeração
      Observações:
      - Iniciar com 0.05mcg/kg/min
      - Titular conforme resposta
      - Usar em acesso central`,
    administration: "IV contínuo",
    preparation: "4mL (4mg) + 46mL SF = 0.08mg/mL",
    maxDose: "2mcg/kg/min"
  }
];

export const devices = {
  tube: { 
    name: "Tubo endotraqueal",
    recommended: "Conforme PALS/ACLS",
    options: ["2.5", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0"],
    reference: "PALS/ACLS 2020-2025",
    guide: {
      "Prematuro (<1kg)": "2.5 sem cuff",
      "RN termo (3-4kg)": "3.0-3.5 sem cuff",
      "1-6 meses": "3.5 com cuff",
      "6-12 meses": "4.0 com cuff",
      "1-2 anos": "4.0-4.5 com cuff",
      "2-3 anos": "4.5 com cuff",
      "3-4 anos": "4.5-5.0 com cuff",
      "4-6 anos": "5.0-5.5 com cuff",
      "6-8 anos": "5.5-6.0 com cuff",
      "8-10 anos": "6.0-6.5 com cuff",
      "10-12 anos": "6.5 com cuff",
      ">12 anos": "7.0-7.5 com cuff",
      "Adulto": "7.0-8.0 com cuff"
    }
  },
  jelco: {
    name: "Jelco/Cateter",
    recommended: "Conforme PALS/ATLS",
    options: ["14G", "16G", "18G", "20G", "22G", "24G"],
    reference: "PALS/ATLS 2020-2025",
    guide: {
      "Emergência neonatal": "24G",
      "RN/Lactente pequeno": "24-22G",
      "Lactente/Pré-escolar": "22-20G",
      "Escolar": "20-18G",
      "Adolescente": "18-16G",
      "Adulto": "16-14G",
      "Trauma adulto": "14G"
    }
  },
  blade: {
    name: "Lâmina Laringoscópio",
    recommended: "Conforme PALS",
    options: ["0", "1", "2", "3", "4"],
    reference: "PALS 2020-2025",
    guide: {
      "Prematuro": "00-0 reta",
      "RN termo": "0-1 reta",
      "1-24 meses": "1 reta",
      "2-5 anos": "2 reta/curva",
      "5-12 anos": "2-3 curva",
      ">12 anos": "3-4 curva",
      "Adulto": "3-4 curva"
    }
  },
  mask: {
    name: "Máscara Laríngea",
    recommended: "Conforme PALS/ACLS",
    options: ["1", "1.5", "2", "2.5", "3", "4", "5"],
    reference: "PALS/ACLS 2020-2025",
    guide: {
      "RN/Lactente <5kg": "1",
      "Lactente 5-10kg": "1.5",
      "Criança 10-20kg": "2",
      "Criança 20-30kg": "2.5",
      "Adolescente 30-50kg": "3",
      "Adulto 50-70kg": "4",
      "Adulto >70kg": "5"
    }
  },
  bvm: {
    name: "Bolsa-Válvula-Máscara",
    recommended: "Conforme PALS",
    options: ["Neonatal", "Pediátrica", "Adulto"],
    reference: "PALS 2020-2025",
    guide: {
      "RN prematuro": "Neonatal 250mL",
      "RN termo/Lactente <6m": "Neonatal 450-500mL",
      "Lactente/Pré-escolar": "Pediátrica 750mL",
      "Escolar/Adolescente": "Pediátrica 1000mL",
      "Adolescente grande/Adulto": "Adulto 1500-2000mL"
    }
  },
  suction: {
    name: "Sonda de Aspiração",
    recommended: "Conforme PALS",
    options: ["6Fr", "8Fr", "10Fr", "12Fr", "14Fr"],
    reference: "PALS 2020-2025",
    guide: {
      "RN prematuro": "6Fr",
      "RN termo": "8Fr",
      "Lactente 1-12m": "8-10Fr",
      "1-2 anos": "10Fr",
      "2-5 anos": "10-12Fr",
      "5-12 anos": "12-14Fr",
      ">12 anos": "14Fr"
    }
  },
  ng_tube: {
    name: "Sonda Nasogástrica",
    recommended: "Conforme PALS/ATLS",
    options: ["5Fr", "8Fr", "10Fr", "12Fr", "14Fr", "16Fr"],
    reference: "PALS/ATLS 2020-2025",
    guide: {
      "RN prematuro": "5Fr",
      "RN termo": "8Fr",
      "1-12 meses": "8-10Fr",
      "1-6 anos": "10-12Fr",
      "6-12 anos": "12-14Fr",
      ">12 anos": "14-16Fr"
    }
  }
};

export const solutions = [
  {
    name: "Soluções de Manutenção (Holliday-Segar)",
    options: [
      {
        name: "Solução de Manutenção Padrão",
        concentration: "SG5% + NaCl 0.9%",
        doses: {
          "≤10kg": "100mL/kg/dia",
          "10-20kg": "1000mL + 50mL/kg/dia para cada kg acima de 10kg",
          ">20kg": "1500mL + 20mL/kg/dia para cada kg acima de 20kg"
        },
        preparation: {
          method: "Volume calculado de SG5% + NaCl 0.9% (2-4mEq/kg/dia)",
          example: "Para 10kg:\n1000mL/dia = 42mL/h\nAdicionar 30mEq Na+ (13mL NaCl 20%)"
        },
        infusionRate: "Volume total diário ÷ 24h"
      }
    ]
  },
  {
    name: "Soluções de Eletrólitos",
    options: [
      {
        name: "Potássio (KCl 19.1%)",
        concentration: "2.5mEq/mL",
        doses: {
          leve: "0.5mEq/kg/dose",
          moderada: "0.75mEq/kg/dose",
          grave: "1mEq/kg/dose"
        },
        preparation: {
          method: "Diluir para concentração máxima de 40mEq/L",
          example: "Para 40mEq em 500mL:\n16mL KCl 19.1% + 484mL SF/SG5%"
        },
        maxRate: "0.5mEq/kg/h",
        infusionRate: {
          calculation: "Dose total × peso ÷ concentração final",
          example: "Para 20kg (0.5mEq/kg/h):\n10mEq/h ÷ 0.08mEq/mL = 125mL/h"
        }
      },
      {
        name: "Sódio (NaCl 20%)",
        concentration: "3.4mEq/mL",
        doses: {
          leve: "2mEq/kg/dose",
          moderada: "4mEq/kg/dose",
          grave: "6mEq/kg/dose"
        },
        preparation: {
          method: "Diluir conforme déficit calculado",
          example: "Para 20mEq em 100mL:\n6mL NaCl 20% + 94mL AD"
        },
        maxRate: "0.5mEq/kg/h",
        infusionRate: {
          calculation: "Dose total × peso ÷ concentração final",
          example: "Para 20kg (0.5mEq/kg/h):\n10mEq/h ÷ 0.2mEq/mL = 50mL/h"
        }
      },
      {
        name: "Cálcio (Gluconato 10%)",
        concentration: "0.465mEq/mL",
        doses: {
          leve: "50mg/kg/dose",
          grave: "100mg/kg/dose"
        },
        preparation: {
          method: "Diluir 1:1 com SF",
          example: "Para 500mg:\n5mL Gluconato + 5mL SF"
        },
        maxRate: "100mg/min",
        infusionRate: {
          calculation: "Dose total ÷ concentração × tempo desejado",
          example: "Para 20kg (50mg/kg):\n1000mg ÷ 100mg/mL = 10mL em 10-20min"
        }
      },
      {
        name: "Magnésio (MgSO4 50%)",
        concentration: "4mEq/mL",
        doses: {
          leve: "25mg/kg/dose",
          grave: "50mg/kg/dose"
        },
        preparation: {
          method: "Diluir até 20%",
          example: "Para 1g:\n2mL MgSO4 50% + 3mL AD"
        },
        maxRate: "150mg/min",
        infusionRate: {
          calculation: "Dose total ÷ concentração × tempo desejado",
          example: "Para 20kg (25mg/kg):\n500mg ÷ 500mg/mL = 1mL, diluir e infundir em 15-30min"
        }
      }
    ]
  }
];

export const hypoglycemiaSolutions = {
  protocols: [
    {
      condition: "Hipoglicemia leve (40-60 mg/dL)",
      solution: "D10%",
      dose: "2mL/kg",
      rate: "infusão em 10-15min",
      maintenance: "D5-10% conforme necessidade"
    },
    {
      condition: "Hipoglicemia moderada (30-40 mg/dL)",
      solution: "D10%",
      dose: "3mL/kg",
      rate: "infusão em 5-10min",
      maintenance: "D10% conforme necessidade"
    },
    {
      condition: "Hipoglicemia grave (<30 mg/dL)",
      solution: "D25%",
      dose: "2mL/kg",
      rate: "infusão em 2-3min",
      maintenance: "D10-25% conforme necessidade"
    }
  ],
  tigRanges: [
    {
      range: "4-6 mg/kg/min",
      use: "Manutenção padrão",
      concentration: "D5-10%"
    },
    {
      range: "6-8 mg/kg/min",
      use: "Hipoglicemia persistente",
      concentration: "D10-15%"
    },
    {
      range: "8-12 mg/kg/min",
      use: "Hipoglicemia refratária",
      concentration: "D15-25%"
    }
  ],
  preparation: {
    d10: {
      method: "100mL D50% + 400mL AD ou 400mL D5%",
      finalVolume: "500mL",
      concentration: "10%"
    },
    d15: {
      method: "150mL D50% + 350mL AD ou 350mL D5%",
      finalVolume: "500mL",
      concentration: "15%"
    },
    d25: {
      method: "250mL D50% + 250mL AD ou 250mL D5%",
      finalVolume: "500mL",
      concentration: "25%"
    }
  }
};
