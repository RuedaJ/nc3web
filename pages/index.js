import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MapWrapper = dynamic(() => import('../components/Map'), { ssr: false })
const Dashboard = dynamic(() => import('../components/Dashboard'), { ssr: false })
// Si algún día vuelves a usar los botones de exportación, descomenta la línea siguiente:
// const ExportButtons = dynamic(() => import('../components/ExportButtons'), { ssr: false })

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, transition: { duration: 0.6 }, y: 0 }
}

export default function Home() {
  const [tab, setTab] = useState('inversores')

  return (
    <>
      <Head>
        <title>NatureTargets</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Integramos Soluciones Basadas en la Naturaleza (NbS) en la estrategia empresarial con análisis GIS, dashboards y casos de negocio basados en evidencia."
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-stone-800">NatureTargets</a>
          <nav className="hidden md:flex gap-6 text-stone-700">
            <a href="#como-funciona" className="hover:text-emerald-700">Cómo Funciona</a>
            <a href="#soluciones" className="hover:text-emerald-700">Soluciones</a>
            <a href="#equipo" className="hover:text-emerald-700">Equipo</a>
            <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="hidden md:inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800"
          >
            Solicita Demo
          </a>
        </div>
      </header>

      {/* Main */}
      <main id="home">
        {/* Hero */}
        <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-stone-900">
                🌱 Transformamos ambición en acción con Soluciones Basadas en la Naturaleza
              </h1>

              <p className="text-lg text-stone-700">
                Frente a la triple crisis global —cambio climático, pérdida de naturaleza y creciente desigualdad—
                las empresas tienen la responsabilidad y la oportunidad de actuar.
              </p>
              <p className="text-lg text-stone-700">
                En <span className="font-semibold">NatureTarget</span>, ayudamos a las organizaciones a integrar
                Soluciones Basadas en la Naturaleza (SbN/NbS) en su estrategia, desbloqueando valor más allá del
                beneficio financiero. Identificamos oportunidades, comparamos alternativas y construimos casos de negocio
                que integran beneficios climáticos, de biodiversidad y sociales - basados en evidencia y listos para decidir.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#contacto" className="px-5 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">
                  Solicita una Demo
                </a>
                <a href="#contacto" className="px-5 py-3 rounded-lg border border-emerald-300 text-emerald-800 hover:bg-emerald-50">
                  Únete a la Prueba Piloto
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'Metodología basada en evidencia',
                  'Plataforma GIS interactiva',
                  'Casos de negocio listos para decidir',
                ].map((t) => (
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

        {/* Metodología NbS (6 pasos) */}
        <section id="metodologia" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
              De la ambición a la acción: Metodología SbN/NbS
            </h2>
            <p className="text-stone-700 mb-8 max-w-3xl">
              Un proceso estructurado y basado en evidencia para maximizar valor empresarial y contribuciones a objetivos
              net-zero, naturaleza positiva y equidad.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['1. Identificar desafíos y oportunidades', 'Detectamos retos y oportunidades comerciales clave donde aplicar SbN/NbS con sentido estratégico.'],
                ['2. Explorar SbN/NbS relevantes', 'Relacionamos los desafíos con tipologías de SbN/NbS pertinentes para el contexto de la empresa.'],
                ['3. Recopilar impactos y beneficios', 'Cuantificamos beneficios climáticos, de biodiversidad y sociales, además de riesgos y dependencias.'],
                ['4. Definir diseño e implementación', 'Especificamos alcance, fases, gobernanza y métricas para una implementación efectiva.'],
                ['5. Estimar costos de las actividades', 'Calculamos CAPEX/OPEX y escenarios de financiación para la cartera de SbN/NbS.'],
                ['6. Comparar con alternativas', 'Comparamos SbN/NbS frente a otras soluciones considerando el conjunto de beneficios y costos.'],
              ].map(([title, desc]) => (
                <div key={title} className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40">
                  <div className="text-sm text-emerald-700 mb-1">Metodología SbN/NbS</div>
                  <div className="text-lg font-semibold text-stone-900">{title}</div>
                  <p className="text-stone-700 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo Funciona (3 pasos productizados) */}
        <section id="como-funciona" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Tres pasos para transformar tu territorio</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Recopilación Inteligente', 'Integramos datos de satélites, mapas oficiales y registros históricos para crear una visión completa de tu territorio.'],
                ['Análisis Profundo', 'Generamos puntuaciones precisas por variable ambiental y un score global de potencial regenerativo.'],
                ['Resultados Ejecutables', 'Recibe mapas interactivos, gráficos claros y recomendaciones prácticas listas para presentar.'],
              ].map(([title, desc], i) => (
                <div key={title} className="p-6 rounded-2xl border border-emerald-200 bg-white">
                  <div className="text-sm text-emerald-700 mb-1">Paso {i + 1}</div>
                  <div className="text-xl font-semibold text-stone-900">{title}</div>
                  <p className="text-stone-700 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soluciones por Sector (tabs) */}
        <section id="soluciones" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Soluciones por Sector</h2>

            {/* Tabs (simple, sin librerías extra) */}
            <div className="mb-4 flex flex-wrap gap-2">
              {['inversores', 'gobiernos', 'ongs', 'gestores'].map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`px-4 py-2 rounded-lg border ${
                    tab === k
                      ? 'bg-white text-emerald-800 border-emerald-300'
                      : 'bg-emerald-50 text-stone-700 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  {k === 'inversores' && 'Inversores'}
                  {k === 'gobiernos' && 'Gobiernos'}
                  {k === 'ongs' && 'ONGs'}
                  {k === 'gestores' && 'Gestores'}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                {tab === 'inversores' && (
                  <>
                    <ul className="space-y-2 text-stone-800">
                      <li>✓ Portafolios resilientes y alineados con naturaleza positiva</li>
                      <li>✓ Indicadores de riesgo–oportunidad de SbN/NbS para screening y due diligence</li>
                      <li>✓ Casos de negocio comparables y trazables</li>
                    </ul>
                    <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
                      “Identificamos áreas con alto potencial y riesgo hídrico controlado para un portafolio más resiliente.”
                    </blockquote>
                  </>
                )}

                {tab === 'gobiernos' && (
                  <>
                    <ul className="space-y-2 text-stone-800">
                      <li>✓ Planificación territorial con SbN/NbS basada en evidencia</li>
                      <li>✓ Priorización por impacto múltiple (clima, biodiversidad y social)</li>
                      <li>✓ KPIs y seguimiento de políticas públicas</li>
                    </ul>
                    <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
                      “Datos irrefutables para fundamentar decisiones y transparentar resultados ante la ciudadanía.”
                    </blockquote>
                  </>
                )}

                {tab === 'ongs' && (
                  <>
                    <ul className="space-y-2 text-stone-800">
                      <li>✓ Priorización de paisajes y proyectos con co-beneficios</li>
                      <li>✓ Comunicación de impacto clara y verificable</li>
                      <li>✓ Optimización de recursos y alianzas</li>
                    </ul>
                    <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
                      “La plataforma nos ayudó a focalizar esfuerzos en corredores ecológicos clave.”
                    </blockquote>
                  </>
                )}

                {tab === 'gestores' && (
                  <>
                    <ul className="space-y-2 text-stone-800">
                      <li>✓ Diseño de intervenciones SbN/NbS adaptadas al sitio</li>
                      <li>✓ Costeo y planificación por fases</li>
                      <li>✓ Monitoreo con mapas y dashboards</li>
                    </ul>
                    <blockquote className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-700">
                      “Implementamos soluciones con ROI ecológico tangible en meses, no años.”
                    </blockquote>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className="py-16 bg-gradient-to-b from-white to-lime-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Equipo Experto</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cristina - card clickable */}
              <div className="border border-emerald-200/70 rounded-2xl p-6 bg-white relative cursor-pointer hover:shadow-md transition-shadow">
                <a
                  href="https://www.linkedin.com/in/cristinalafuente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Abrir LinkedIn de Cristina Lafuente"
                />
                <div className="flex gap-4 items-start">
                  <div className="h-20 w-20 rounded-xl bg-emerald-200 border border-emerald-300"></div>
                  <div>
                    <div className="text-lg font-semibold text-stone-900">Cristina Lafuente</div>
                    <div className="text-emerald-800 font-medium">Directora de Soluciones Regenerativas</div>
                    <p className="text-stone-700 mt-2">
                      Experta en planificación de paisajes regenerativos, soluciones basadas en la naturaleza y análisis GIS avanzado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Juan - card clickable */}
              <div className="border border-emerald-200/70 rounded-2xl p-6 bg-white relative cursor-pointer hover:shadow-md transition-shadow">
                <a
                  href="https://www.linkedin.com/in/jean-rueda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Abrir LinkedIn de Juan Rueda"
                />
                <div className="flex gap-4 items-start">
                  <div className="h-20 w-20 rounded-xl bg-emerald-200 border border-emerald-300"></div>
                  <div>
                    <div className="text-lg font-semibold text-stone-900">Juan Rueda</div>
                    <div className="text-emerald-800 font-medium">Asesor en Tecnología y ESG</div>
                    <p className="text-stone-700 mt-2">
                      Especialista en desarrollo de plataformas ambientales y ESG reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-16 bg-gradient-to-br from-emerald-700 to-lime-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Únete al Cambio Regenerativo</h3>
              <p className="mt-3 text-emerald-100">
                Transforma la manera en que entiendes y gestionas el capital natural.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <div className="w-full mt-6 md:mt-0 md:w-auto md:ml-auto text-white/90">
                <div className="mt-4">📧 info@naturetargets.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-stone-600">
        © 2025 Auditoría y Evaluación de Capital Natural.
      </footer>
    </>
  )
}
