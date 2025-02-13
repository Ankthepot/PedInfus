import React, { useState, useRef, useEffect } from 'react';
import { PatientInfo } from './components/PatientInfo';
import { MedicationList } from './components/MedicationList';
import { DeviceInfo } from './components/DeviceInfo';
import { HydrationModule } from './components/HydrationModule';
import { medications, devices, solutions } from './data/medications';
import { Patient } from './types';
import { Stethoscope, Menu, X, Info } from 'lucide-react';
import About from './components/About';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [patient, setPatient] = useState<Patient>({
    weightKg: 8,
    ageYears: 1,
    ageMonths: 0
  });

  const [showHydration, setShowHydration] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleTerms = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  const togglePrivacy = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  // Close the modal when clicking outside
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
        setIsTermsOpen(false);
        setIsPrivacyOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  PediInfus
                </h1>
                <p className="text-xs text-gray-600">Precisão em cada gota</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <button onClick={toggleAbout} className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                <Info className="h-4 w-4" />
                <span>Sobre</span>
              </button>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                Contato
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={toggleAbout} className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              <Info className="h-4 w-4" />
              <span>Sobre</span>
            </button>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Contato
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <PatientInfo patient={patient} onUpdate={setPatient} />
          <MedicationList medications={medications} weight={patient.weightKg} />
          <DeviceInfo devices={Object.values(devices)} />
          
          <div className="mt-6">
            <button
              onClick={() => setShowHydration(!showHydration)}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              {showHydration ? 'Ocultar' : 'Mostrar'} Módulo de Hidratação e Aporte Calórico
            </button>
          </div>

          {showHydration && (
            <HydrationModule 
              weight={patient.weightKg}
              solutions={solutions}
            />
          )}
        </div>
      </main>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:max-w-sm mx-4 overflow-y-auto" ref={modalRef}>
            <div className="flex justify-end">
              <button onClick={toggleAbout} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-3">
              <About />
            </div>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:max-w-sm mx-4 overflow-y-auto" ref={modalRef}>
            <div className="flex justify-end">
              <button onClick={toggleTerms} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-3">
              <TermsOfUse />
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 my-8 overflow-y-auto" ref={modalRef} style={{ maxHeight: '80vh' }}>
            <div className="flex justify-end">
              <button onClick={togglePrivacy} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <PrivacyPolicy />
            </div>
          </div>
        </div>
      )}

      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3">
                <div className className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">PediInfus</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Precisão e segurança em cálculos de infusão pediátrica
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Links Úteis
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button onClick={toggleTerms} className="text-sm text-gray-600 hover:text-blue-600">
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button onClick={togglePrivacy} className="text-sm text-gray-600 hover:text-blue-600">
                    Política de Privacidade
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Contato
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="mailto:contato@pediinfus.com" className="text-sm text-gray-600 hover:text-blue-600">
                    contato@pediinfus.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} PediInfus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
