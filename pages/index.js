import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import ExportButtons from '../components/ExportButtons'

const MapWrapper = dynamic(() => import('../components/Map'), { ssr: false })

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Home() {
  const [tab, setTab] = useState('inversores');

  return (
    <>
      <Head>
        <title>CapitalNaturalEval</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-stone-800">CapitalNaturalEval</a>
          <nav className="hidden md:flex gap-6 text-stone-700">
  <a href="#como-funciona" className="hover:text-emerald-700">Cómo Funciona</a>
  <a href="#soluciones" className="hover:text-emerald-700">Soluciones</a>
  <a href="#casos" className="hover:text-emerald-700">Casos de Éxito</a>
  <a href="#funcionalidades" className="hover:text-emerald-700">Funcionalidades</a>
  <a href="#equipo" className="hover:text-emerald-700">Equipo</a>
  <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
</nav>
          <a href="#contacto" className="hidden md:inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Solicita Demo</a>
        </div>
      </header>

      <main id="home">
        <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-stone-900">🌱 Transformamos datos ambientales en decisiones estratégicas regenerativas</h1>
              <p className="text-lg text-stone-700">Evalúa el potencial regenerativo del capital natural de cualquier territorio mediante análisis visual y datos precisos. Nuestra plataforma integra tecnología GIS avanzada para convertir información compleja en insights accionables.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#contacto" className="px-5 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Solicita una Demo</a>
                <a href="#contacto" className="px-5 py-3 rounded-lg border border-emerald-300 text-emerald-800 hover:bg-emerald-50">Únete a la Prueba Piloto</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Análisis en 48h','Datos Científicos Verificados','Informes Listos para Presentar'].map((t) => (
                  <div key={t} className="p-3 rounded-xl border border-emerald-200 bg-white/70 backdrop-blur">
                    <span className="text-stone-800 font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="space-y-4">
              <MapWrapper />
              <Dashboard />
            </div>
          </div>
        </section>

<section id="como-funciona" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Tres pasos para transformar tu territorio</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        ['Recopilación Inteligente','Integramos datos de satélites, mapas oficiales y registros históricos para crear una visión completa de tu territorio.'],
        ['Análisis Profundo','Generamos puntuaciones precisas por variable ambiental y un score global de potencial regenerativo.'],
        ['Resultados Ejecutables','Recibe mapas interactivos, gráficos claros y recomendaciones prácticas listas para presentar.']
      ].map(([title, desc], i) => (
        <div key={title} className="p-6 rounded-2xl border border-emerald-200 bg-white">
          <div className="text-sm text-emerald-700 mb-1">Paso {i+1}</div>
          <div className="text-xl font-semibold text-stone-900">{title}</div>
          <p className="text-stone-700 mt-2">{desc}</p>
        </div>
   <section id="soluciones" className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Soluciones por Sector</h2>

    {/* Tabs (simple, no extra libs) */}
    <div className="mb-4 flex flex-wrap gap-2">
      {['inversores','gobiernos','ongs','gestores'].map((k) => (
        <button
          key={k}
          onClick={() => setTab(k)}
          className={`px-4 py-2 rounded-lg border ${tab===k ? 'bg-white text-emerald-800 border-emerald-300' : 'bg-emerald-50 text-stone-700 border-emerald-200 hover:bg-emerald-100'}`}
        >
          {k==='inversores' && 'Inversores'}
          {k==='gobiernos' && 'Gobiernos'}
          {k==='ongs' && 'ONGs'}
          {k==='gestores' && 'Gestores'}
        </button>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-3">
        {tab==='inversores' && (
          <>
            <ul className="space-y-2 text-stone-800">
              <li>✓ Identifica oportunidades de inversión sostenible</li>
              <li>✓ Métricas claras de impacto ambiental y retorno regenerativo</li>
              <li>✓ Comparables y trazabilidad de activos</li>
            </ul>
            <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
              “Identificamos áreas con alto potencial y riesgo hídrico controlado para un portafolio más resiliente.”
            </blockquote>
            <a href="#casos" className="inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Ver caso de éxito</a>
          </>
        )}
        {tab==='gobiernos' && (
          <>
            <ul className="space-y-2 text-stone-800">
              <li>✓ Planificación territorial basada en ciencia</li>
              <li>✓ Priorización de intervenciones por impacto</li>
              <li>✓ KPIs y seguimiento de políticas públicas</li>
            </ul>
            <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
              “Datos irrefutables para fundamentar decisiones y transparentar resultados ante la ciudadanía.”
            </blockquote>
            <a href="#casos" className="inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Ver caso de éxito</a>
          </>
        )}
        {tab==='ongs' && (
          <>
            <ul className="space-y-2 text-stone-800">
              <li>✓ Priorización de proyectos de restauración</li>
              <li>✓ Comunicaciones visuales efectivas</li>
              <li>✓ Maximización de recursos y alianzas</li>
            </ul>
            <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
              “La plataforma nos ayudó a focalizar esfuerzos en corredores ecológicos clave.”
            </blockquote>
            <a href="#casos" className="inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Ver caso de éxito</a>
          </>
        )}
        {tab==='gestores' && (
          <>
            <ul className="space-y-2 text-stone-800">
              <li>✓ Mapas detallados para intervención</li>
              <li>✓ Estrategias basadas en naturaleza</li>
              <li>✓ Monitoreo post-implementación</li>
            </ul>
            <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
              “Implementamos soluciones con ROI ecológico tangible en meses, no años.”
            </blockquote>
            <a href="#casos" className="inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Ver caso de éxito</a>
          </>
        )}
      </div>
      <div>
        <div className="rounded-2xl border border-emerald-200/50 overflow-hidden shadow-md">
          <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-200 text-stone-800 font-medium">Dashboard</div>
          <div className="p-4"><div id="sol-dash"><!-- Placeholder to keep layout consistent --></div></div>
        </div>
        {/* Keep the real dashboard elsewhere to avoid duplicate heavy charts; or replace this div with <Dashboard /> if desired */}
      </div>
    </div>

    <div className="mt-6">
      <ExportButtons />
    </div>
  </div>
</section>

<section id="casos" className="py-16 bg-gradient-to-b from-emerald-50/60 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Casos de Éxito</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-emerald-200/70 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-200 font-medium">AWS Zaragoza</div>
        <div className="p-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200/60 p-4 bg-white/70">
            <div className="h-40 rounded-lg border border-emerald-200 bg-emerald-50 flex items-center justify-center">Mapa/Imagen</div>
          </div>
          <div className="space-y-3 text-stone-700">
            <div className="p-3 rounded-xl border border-emerald-200/70 bg-emerald-50/60"><div className="text-sm">Reducción riesgo hídrico</div><div className="text-2xl font-semibold text-stone-900">40% ↑</div></div>
            <div className="p-3 rounded-xl border border-emerald-200/70 bg-emerald-50/60"><div className="text-sm">Tiempo implementación</div><div className="text-2xl font-semibold text-stone-900">3 meses</div></div>
            <div className="p-3 rounded-xl border border-emerald-200/70 bg-emerald-50/60"><div className="text-sm">ROI regenerativo</div><div className="text-2xl font-semibold text-stone-900">2.5x</div></div>
            <p className="text-sm">“La evaluación de escasez hídrica nos permitió diseñar estrategias de regeneración hidrológica para nuestro centro de datos, alineando operaciones con sostenibilidad.”</p>
          </div>
        </div>
      </div>

      <div className="border border-emerald-200/70 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-200 font-medium">Commonland</div>
        <div className="p-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200/60 p-4 bg-white/70">
            <div className="h-40 rounded-lg border border-emerald-200 bg-emerald-50 flex items-center justify-center">Mapa/Imagen</div>
          </div>
          <div className="space-y-3 text-stone-700">
            <div className="p-3 rounded-xl border border-emerald-200/70 bg-emerald-50/60"><div className="text-sm">Áreas priorizadas</div><div className="text-2xl font-semibold text-stone-900">+12</div></div>
            <div className="p-3 rounded-xl border border-emerald-200/70 bg-emerald-50/60"><div className="text-sm">Tiempo de análisis</div><div className="text-2xl font-semibold text-stone-900">2 semanas</div></div>
            <div className="p-3 rounded-xl border border-emerald-200/70 bg-emerald-50/60"><div className="text-sm">Conectores críticos</div><div className="text-2xl font-semibold text-stone-900">7</div></div>
            <p className="text-sm">“Priorizamos áreas críticas para restauración paisajística, logrando conexiones ecológicas más efectivas en tiempo récord.”</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   ))}
    </div>
  </div>
</section>



        <section id="funcionalidades" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Funcionalidades Clave</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <MapWrapper />
              <Dashboard />
            </div>
          </div>
        </section>

        <section id="equipo" className="py-16 bg-gradient-to-b from-white to-lime-50/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Equipo Experto</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-emerald-200/70 rounded-2xl p-6 bg-white">
        <div className="flex gap-4 items-start">
          <div className="h-20 w-20 rounded-xl bg-emerald-200 border border-emerald-300"></div>
          <div>
            <div className="text-lg font-semibold text-stone-900">Cristina Lafuente</div>
            <div className="text-emerald-800 font-medium">Directora de Soluciones Regenerativas</div>
            <p className="text-stone-700 mt-2">Experta en planificación de paisajes regenerativos, soluciones basadas en la naturaleza y análisis GIS avanzado.</p>
          </div>
        </div>
      </div>
      <div className="border border-emerald-200/70 rounded-2xl p-6 bg-white">
        <div className="flex gap-4 items-start">
          <div className="h-20 w-20 rounded-xl bg-emerald-200 border border-emerald-300"></div>
          <div>
            <div className="text-lg font-semibold text-stone-900">Juan Rueda</div>
            <div className="text-emerald-800 font-medium">Director de Tecnología</div>
            <p className="text-stone-700 mt-2">Especialista en desarrollo de plataformas ambientales y ESG reporting.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contacto" className="py-16 bg-gradient-to-br from-emerald-700 to-lime-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Únete al Cambio Regenerativo</h3>
              <p className="mt-3 text-emerald-100">Transforma la manera en que entiendes y gestionas el capital natural.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <div className="w-full mt-6 md:mt-0 md:w-auto md:ml-auto text-white/90">
                <div className="mt-4">📧 info@capitalnaturaleval.com</div>
                <div className="mt-1">📱 +34 XXX XXX XXX</div>
                <div className="mt-1">🌐 LinkedIn | Twitter | Medium</div>
              </div>
              <ExportButtons />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-stone-600">© 2024 Herramienta de Evaluación de Capital Natural.</footer>
    </>
  )
}