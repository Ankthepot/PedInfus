// Tipos de retorno para padronização
interface HydrationSolution {
  base: {
    name: string;
    volume: number;
  };
  additives: Array<{
    name: string;
    volume: number;
    description?: string;
  }>;
  finalVolume: number;
  rate: number;
  duration: number;
  instructions?: string;
  tig?: number;
}

interface DoseCalculation {
  display: string;
  diluted?: string;
}

// Maximum dose limits for pediatric patients
const maxDoses: { [key: string]: number } = {
  "Adrenalina 1:1.000": 1, // 1mg max per ACLS/ATLS
  "Adenosina": 12, // 12mg max for 2nd/3rd doses
  "Amiodarona": 300, // 300mg max per dose
  "Atropina": 1, // 1mg max for adolescents
  "Bicarbonato 8.4%": 50, // 50mEq max
  "Cálcio Gluconato 10%": 2000, // 2g max
  "Dexametasona": 10, // 10mg max
  "Diazepam": 10, // 10mg max per dose
  "Dipirona": 1000, // 1g max
  "Dobutamina": 40, // 40mcg/kg/min max
  "Dopamina": 20, // 20mcg/kg/min max
  "Fenitoína": 1250, // 1.25g max
  "Fenobarbital": 1000, // 1g max
  "Fentanil": 50, // 50mcg max per dose
  "Furosemida": 40, // 40mg max per dose
  "Hidrocortisona": 500, // 500mg max
  "Ketamina": 200, // 200mg max
  "Midazolam": 5, // 5mg max per dose
  "Morfina": 5, // 5mg max per dose
  "Noradrenalina": 2 // 2mcg/kg/min max
};

// Adult doses according to ACLS/ATLS 2020-2025 guidelines
const adultDoses: { [key: string]: { dose: number; unit: string; reference: string } } = {
  "Adrenalina 1:1.000": { dose: 1, unit: "mg", reference: "ACLS 2020" }, // 1mg q3-5min
  "Adenosina": { dose: 6, unit: "mg", reference: "ACLS 2020" }, // 6mg, then 12mg x2
  "Amiodarona": { dose: 300, unit: "mg", reference: "ACLS 2020" }, // 300mg bolus, then 150mg
  "Atropina": { dose: 0.5, unit: "mg", reference: "ACLS 2020" }, // 0.5mg q3-5min, max 3mg
  "Bicarbonato 8.4%": { dose: 50, unit: "mEq", reference: "ACLS 2020" }, // 50mEq
  "Cálcio Gluconato 10%": { dose: 2000, unit: "mg", reference: "ACLS 2020" }, // 2g
  "Dexametasona": { dose: 10, unit: "mg", reference: "ATLS 2020" },
  "Diazepam": { dose: 10, unit: "mg", reference: "ATLS 2020" },
  "Dipirona": { dose: 1000, unit: "mg", reference: "WHO 2020" },
  "Dobutamina": { dose: 40, unit: "mcg/kg/min", reference: "ACLS 2020" },
  "Dopamina": { dose: 20, unit: "mcg/kg/min", reference: "ACLS 2020" },
  "Fenitoína": { dose: 1250, unit: "mg", reference: "ACLS 2020" },
  "Fenobarbital": { dose: 1000, unit: "mg", reference: "ATLS 2020" },
  "Fentanil": { dose: 50, unit: "mcg", reference: "ATLS 2020" },
  "Furosemida": { dose: 40, unit: "mg", reference: "ACLS 2020" },
  "Hidrocortisona": { dose: 500, unit: "mg", reference: "ATLS 2020" },
  "Ketamina": { dose: 200, unit: "mg", reference: "ATLS 2020" },
  "Midazolam": { dose: 5, unit: "mg", reference: "ACLS 2020" },
  "Morfina": { dose: 5, unit: "mg", reference: "ACLS 2020" },
  "Noradrenalina": { dose: 2, unit: "mcg/kg/min", reference: "ACLS 2020" }
};

// Funções de hidratação
export function calculateHollidaySegar(weight: number): HydrationSolution {
  let volume = 0;
  if (weight <= 10) {
    volume = weight * 100;
  } else if (weight <= 20) {
    volume = 1000 + (weight - 10) * 50;
  } else {
    volume = 1500 + (weight - 20) * 20;
  }

  const hourlyRate = Math.round(volume / 24);
  const naPerKg = 3; // mEq/kg/dia
  const totalNa = weight * naPerKg;
  const naVolume = Math.round((totalNa * 0.3)); // 0.3ml de NaCl 20% = 1mEq Na+
  const kclPerKg = 2; // mEq/kg/dia
  const totalKCl = weight * kclPerKg;
  const kclVolume = Math.round(totalKCl * 0.4); // 0.4ml de KCl 10% = 1mEq K+

  return {
    base: {
      name: "SG5%",
      volume: volume
    },
    additives: [
      {
        name: "NaCl 20%",
        volume: naVolume,
        description: `${Math.round(totalNa)}mEq Na+`
      },
      {
        name: "KCl 10%",
        volume: kclVolume,
        description: `${Math.round(totalKCl)}mEq K+`
      }
    ],
    finalVolume: volume + naVolume + kclVolume,
    rate: hourlyRate,
    duration: 24
  };
}

export function calculateUrgentHydrationSolution(weight: number): HydrationSolution {
  const volume = weight * 20; // 20mL/kg

  return {
    base: {
      name: "SF 0.9%",
      volume: volume
    },
    additives: [],
    finalVolume: volume,
    rate: Math.round(volume / 1), // infundir em 1h
    duration: 1,
    instructions: "Infundir em 1 hora, reavaliar e repetir se necessário"
  };
}

export function calculateHypoglycemiaSolution(weight: number, targetTIG: number): HydrationSolution {
  const dailyVolume = calculateHollidaySegar(weight).base.volume;
  const hourlyVolume = dailyVolume / 24;
  const glucoseConcentration = (targetTIG * 144 * weight) / hourlyVolume;
  
  let baseGlucose = "SG5%";
  let additionalGlucose = 0;
  
  if (glucoseConcentration <= 5) {
    baseGlucose = "SG5%";
  } else if (glucoseConcentration <= 10) {
    baseGlucose = "SG10%";
  } else {
    baseGlucose = "SG5%";
    additionalGlucose = Math.round((glucoseConcentration - 5) * hourlyVolume / 50);
  }

  return {
    base: {
      name: baseGlucose,
      volume: Math.round(hourlyVolume)
    },
    additives: additionalGlucose > 0 ? [
      {
        name: "SG50%",
        volume: additionalGlucose,
        description: "Para atingir concentração desejada"
      }
    ] : [],
    finalVolume: Math.round(hourlyVolume + additionalGlucose),
    rate: Math.round(hourlyVolume),
    duration: 1,
    tig: targetTIG,
    instructions: "Monitorar glicemia a cada 1-2h e ajustar conforme necessário"
  };
}

export function calculateNewbornCalciumSolution(weight: number): HydrationSolution {
  const volume = weight * 2;
  return {
    base: {
      name: "Gluconato de Cálcio 10%",
      volume: volume
    },
    additives: [],
    finalVolume: volume,
    rate: Math.round(volume / 0.5),
    duration: 0.5,
    instructions: "Infundir em 30 minutos, monitorar FC e local de infusão"
  };
}

export function calculateHypokalemiaSolution(weight: number): HydrationSolution {
  const kclPerKg = 0.5;
  const totalKCl = weight * kclPerKg;
  const kclVolume = Math.round(totalKCl * 0.4);
  const dilutionVolume = Math.max(50, kclVolume * 10);

  return {
    base: {
      name: "SF 0.9%",
      volume: dilutionVolume - kclVolume
    },
    additives: [
      {
        name: "KCl 10%",
        volume: kclVolume,
        description: `${Math.round(totalKCl)}mEq K+`
      }
    ],
    finalVolume: dilutionVolume,
    rate: Math.round(dilutionVolume / 2),
    duration: 2,
    instructions: "Infundir em 2 horas, monitorar ECG e potássio sérico"
  };
}

export function calculateHyponatremiaSolution(weight: number): HydrationSolution {
  const naPerKg = 2;
  const totalNa = weight * naPerKg;
  const naVolume = Math.round(totalNa * 0.3);
  const dilutionVolume = Math.max(50, naVolume * 10);

  return {
    base: {
      name: "SF 0.9%",
      volume: dilutionVolume - naVolume
    },
    additives: [
      {
        name: "NaCl 20%",
        volume: naVolume,
        description: `${Math.round(totalNa)}mEq Na+`
      }
    ],
    finalVolume: dilutionVolume,
    rate: Math.round(dilutionVolume / 2),
    duration: 2,
    instructions: "Infundir em 2 horas, monitorar sódio sérico a cada 2h"
  };
}

// Funções de cálculo de medicações
export function calculateDose(doseStr: string, weight: number, medName: string): DoseCalculation {
  const parts = doseStr.split(" ");
  const dosePerKg = parseFloat(parts[0].replace(",", "."));
  const unit = parts[1].split("/")[0];
  let totalDose = dosePerKg * weight;
  
  // Check if patient is adult (weight > 50kg or explicitly set)
  const isAdult = weight >= 50;

  if (isAdult && adultDoses[medName]) {
    totalDose = adultDoses[medName].dose;
    console.log(`[ADULT DOSE] ${medName}: Using standard adult dose ${totalDose}${adultDoses[medName].unit} (${adultDoses[medName].reference})`);
  } else if (maxDoses[medName] !== undefined && totalDose > maxDoses[medName]) {
    totalDose = maxDoses[medName];
    console.log(`[MAX DOSE] ${medName}: Limited to ${totalDose}${unit}`);
  }
  
  return {
    display: `${totalDose.toFixed(2)} ${unit} (${isAdult ? 'Dose adulto' : `${dosePerKg} ${parts[1]}`})`,
    diluted: calculateDilution(doseStr, totalDose, weight, medName, isAdult)
  };
}

function calculateDilution(doseStr: string, totalDose: number, weight: number, medName: string, isAdult: boolean): string {
  const medNameLower = medName.toLowerCase();

  // Adrenalina
  if (medNameLower.includes("adrenalina")) {
    const volume = isAdult ? 1 : 0.01 * weight;
    return `PCR - Via IV/IO:\n` +
           `Diluir 1mL (1mg) + 9mL SF = 1:10.000\n` +
           `Volume a administrar: ${(volume * 10).toFixed(1)}mL da solução diluída\n\n` +
           `PCR - Via ET:\n` +
           `Usar sem diluição (1:1.000)\n` +
           `Volume a administrar: ${volume.toFixed(1)}mL`;
  }

  // Atropina
  if (medNameLower.includes("atropina")) {
    const volume = isAdult ? 1 : (0.02 * weight) / 0.05;
    return `Diluir 1mL (0.5mg) + 9mL SF\n` +
           `Concentração final: 0.05mg/mL\n` +
           `Volume a administrar: ${volume.toFixed(1)}mL da solução diluída`;
  }

  // Adenosina
  if (medNameLower.includes("adenosina")) {
    const volume = isAdult ? 2 : (0.1 * weight) / 3;
    return `Usar sem diluição\n` +
           `1ª dose: ${volume.toFixed(2)}mL (${isAdult ? "6" : (0.1 * weight).toFixed(1)}mg)\n` +
           `2ª/3ª doses: ${(volume * 2).toFixed(2)}mL (${isAdult ? "12" : (0.2 * weight).toFixed(1)}mg)\n` +
           `Administrar em bolus rápido seguido de flush 5-10mL SF`;
  }

  // Amiodarona
  if (medNameLower.includes("amiodarona")) {
    const volume = isAdult ? 6 : (5 * weight) / 50;
    return `PCR:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(1)}mL\n\n` +
           `Infusão:\n` +
           `Diluir ${volume.toFixed(1)}mL até 20mL SF\n` +
           `Concentração final: ${isAdult ? "15" : ((5 * weight)/20).toFixed(1)}mg/mL\n` +
           `Infundir em 20-60min`;
  }

  // Bicarbonato
  if (medNameLower.includes("bicarbonato")) {
    const volume = isAdult ? 50 : weight;
    return `PCR:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(1)}mL\n\n` +
           `Infusão:\n` +
           `Diluir 1:1 com água destilada\n` +
           `Volume final: ${(volume * 2).toFixed(1)}mL\n` +
           `Infundir em 20-30min`;
  }

  // Cálcio Gluconato
  if (medNameLower.includes("cálcio")) {
    const volume = isAdult ? 20 : (50 * weight) / 100;
    return `Diluir ${volume.toFixed(1)}mL + ${volume.toFixed(1)}mL SF\n` +
           `Concentração final: 50mg/mL\n` +
           `Volume total: ${(volume * 2).toFixed(1)}mL\n` +
           `Infundir em 5-10min`;
  }

  // Dexametasona
  if (medNameLower.includes("dexametasona")) {
    const volume = isAdult ? 2.5 : (0.15 * weight) / 4;
    return `Dose única:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL\n\n` +
           `Infusão:\n` +
           `Diluir em 20mL SF\n` +
           `Infundir em 15-20min`;
  }

  // Diazepam
  if (medNameLower.includes("diazepam")) {
    const volume = isAdult ? 2 : (0.2 * weight) / 5;
    return `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL\n` +
           `Velocidade máxima: 1mg/min`;
  }

  // Dipirona
  if (medNameLower.includes("dipirona")) {
    const volume = isAdult ? 2 : (20 * weight) / 500;
    return `IV:\n` +
           `Diluir ${volume.toFixed(2)}mL em 20mL SF\n` +
           `Infundir em 15-20min\n\n` +
           `IM:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL`;
  }

  // Dobutamina
  if (medNameLower.includes("dobutamina")) {
    return `Diluição padrão:\n` +
           `4mL (50mg) + 46mL SF = 1mg/mL\n` +
           `Velocidade inicial (5mcg/kg/min):\n` +
           `${(0.3 * weight).toFixed(1)}mL/h da solução\n` +
           `Titular conforme resposta`;
  }

  // Dopamina
  if (medNameLower.includes("dopamina")) {
    return `Diluição padrão:\n` +
           `10mL (50mg) + 40mL SF = 1mg/mL\n` +
           `Velocidade inicial (5mcg/kg/min):\n` +
           `${(0.3 * weight).toFixed(1)}mL/h da solução\n` +
           `Titular conforme resposta`;
  }

  // Fenitoína
  if (medNameLower.includes("fenitoína")) {
    const volume = isAdult ? 25 : (20 * weight) / 50;
    return `Diluir ${volume.toFixed(1)}mL + ${volume.toFixed(1)}mL SF\n` +
           `Concentração final: 25mg/mL\n` +
           `Volume total: ${(volume * 2).toFixed(1)}mL\n` +
           `Infundir em ${Math.ceil(isAdult ? 25 : (20 * weight / 50))}min (máx 50mg/min)`;
  }

  // Fenobarbital
  if (medNameLower.includes("fenobarbital")) {
    const volume = isAdult ? 10 : (20 * weight) / 100;
    return `Diluir ${volume.toFixed(1)}mL + ${volume.toFixed(1)}mL AD\n` +
           `Concentração final: 50mg/mL\n` +
           `Volume total: ${(volume * 2).toFixed(1)}mL\n` +
           `Infundir em ${Math.ceil(isAdult ? 33 : (20 * weight / 30))}min (máx 30mg/min)`;
  }

  // Fentanil
  if (medNameLower.includes("fentanil")) {
    const volume = isAdult ? 1 : (1.5 * weight) / 50;
    return `Bolus:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL em 3-5min\n\n` +
           `Infusão contínua:\n` +
           `Diluir até 50mL SF (1mcg/mL)\n` +
           `Velocidade inicial: ${(0.05 * weight).toFixed(1)}mL/h`;
  }

  // Furosemida
  if (medNameLower.includes("furosemida")) {
    const volume = isAdult ? 4 : weight / 10;
    return `Bolus:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL\n\n` +
           `Infusão:\n` +
           `Diluir em 20mL SF\n` +
           `Infundir em 20min`;
  }

  // Hidrocortisona
  if (medNameLower.includes("hidrocortisona")) {
    const dose = isAdult ? 500 : 6 * weight;
    return `Reconstituir 100mg com 2mL ou 500mg com 4mL\n` +
           `Diluir dose calculada (${dose.toFixed(0)}mg) em 20mL SF\n` +
           `Infundir em 10-20min`;
  }

  // Ketamina
  if (medNameLower.includes("ketamina")) {
    const volume = isAdult ? 4 : (1.5 * weight) / 50;
    return `IV:\n` +
           `Diluir ${volume.toFixed(2)}mL em 10mL SF\n` +
           `Infundir em 1-2min\n\n` +
           `IM:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL`;
  }

  // Midazolam
  if (medNameLower.includes("midazolam")) {
    const volume = isAdult ? 1 : (0.1 * weight) / 5;
    return `Bolus:\n` +
           `Usar sem diluição\n` +
           `Volume a administrar: ${volume.toFixed(2)}mL em 2-3min\n\n` +
           `Infusão contínua:\n` +
           `Diluir até 50mL SF (0.1mg/mL)\n` +
           `Velocidade inicial: ${(0.05 * weight).toFixed(1)}mL/h`;
  }

  // Morfina
  if (medNameLower.includes("morfina")) {
    const volume = isAdult ? 0.5 : (0.1 * weight) / 10;
    return `Bolus:\n` +
           `Diluir ${volume.toFixed(2)}mL até 10mL SF (0.1mg/mL)\n` +
           `Infundir em 5min\n\n` +
           `Infusão contínua:\n` +
           `Diluir até 50mL SF (0.2mg/mL)\n` +
           `Velocidade inicial: ${(0.02 * weight).toFixed(1)}mL/h`;
  }

  // Noradrenalina
  if (medNameLower.includes("noradrenalina")) {
    return `Diluição padrão:\n` +
           `4mg (4mL) + 46mL SF = 0.08mg/mL\n` +
           `Velocidade inicial (0.05mcg/kg/min):\n` +
           `${(0.0375 * weight).toFixed(1)}mL/h da solução\n` +
           `Titular conforme resposta`;
  }

  return "Usar sem diluição";
}
