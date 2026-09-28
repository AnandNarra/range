import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Users, CheckCircle2, ArrowRight, 
  Building2, Cpu, Wrench, ThermometerSnowflake, Compass, Layers 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function About() {
  const values = [
    {
      title: "Structural Integrity First",
      desc: "Every shed we design is calculated for local wind loads, roof load bearing, and thermal insulation efficiency.",
      icon: Building2
    },
    {
      title: "Climate Intelligence",
      desc: "Our automated climate control systems protect your flock from deadly heat stress and harmful ammonia concentration.",
      icon: ThermometerSnowflake
    },
    {
      title: "Farmer-Centric Economics",
      desc: "We prioritize solutions that reduce feed waste, minimize energy consumption, and lower operational overheads.",
      icon: Users
    },
    {
      title: "Lifetime Support & Spare Parts",
      desc: "We stand behind our installations with prompt spare parts availability, technical guidance, and calibration support.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/modern_poultry_farm_shed.jpg"
            alt="Orange Structures Engineering Facility"
            className="w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "About Us" }]} />
          
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              About Orange Structures
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Pioneering Modern Agricultural Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We engineer commercial poultry sheds, automated rearing equipment, and smart climate control systems that redefine farm productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <SectionHeading
                badge="Our Purpose"
                title="Building Smarter Poultry Farms for a Better Tomorrow"
                description="Orange Structures was founded with a singular conviction: that modern poultry farming requires seamless cohesion between structural engineering, mechanical equipment, and digital climate control."
                center={false}
              />

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Traditional open sheds in tropical climates frequently suffer severe mortality during summer heatwaves, unmanageable ammonia levels during monsoon, and excessive feed wastage from manual labor. Orange Structures eliminates these vulnerabilities with scientifically designed, pre-engineered steel poultry houses and automated environmental solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100 space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900">Our Mission</h4>
                  <p className="text-xs text-zinc-600">
                    To deliver reliable, high-yield poultry infrastructure that maximizes farmer profitability and flock welfare.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900">Our Vision</h4>
                  <p className="text-xs text-zinc-600">
                    To set the benchmark for poultry automation and climate resilience across expanding poultry farming regions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 aspect-4/3">
                <img
                  src="/images/poultry_house_fans.jpg"
                  alt="Ventilation fan installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Guiding Principles"
            title="What Sets Orange Structures Apart"
            description="Our core values reflect our dedication to structural safety, biological performance, and customer satisfaction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 font-heading">
                    {v.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-black text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
                Engineering Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
                Industrial Durability & Rigorous Quality Benchmarks
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Poultry environments are notoriously corrosive due to high humidity, ammonia, and sanitization chemicals. That is why Orange Structures specifies only heavy hot-dip galvanized steel (≥ 275 g/m²), surgical grade stainless steel drinking pins, and UV-stabilized engineering plastics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-zinc-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Structural Wind-Load Compliant Framing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>IP55 / IP65 Protected Electric Motors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Class-A Fire Retardant PUF Roof Insulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Precision Aerodynamic Air Jet Testing</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white px-6 py-3 rounded-xl font-bold text-sm shadow-brand transition-all"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
