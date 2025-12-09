'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Smartphone, 
  Laptop, 
  Code, 
  Wifi, 
  Shield, 
  Cpu,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Target,
  Zap
} from 'lucide-react';

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Laptop className="w-8 h-8" />,
      title: "Pemrograman Komputer",
      description: "Pengembangan software custom, aplikasi desktop, dan solusi enterprise",
      features: ["Web Development", "Desktop Apps", "Database Design", "System Integration"]
    },
    {
      id: 2,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Alat Elektronik",
      description: "Penjualan dan service perangkat elektronik serta gadget terkini",
      features: ["Smartphone", "Laptop", "Accessories", "Technical Support"]
    },
    {
      id: 3,
      icon: <Code className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Konsultasi dan solusi teknologi informasi untuk bisnis Anda",
      features: ["System Analysis", "IT Strategy", "Digital Transformation", "Training"]
    },
    {
      id: 4,
      icon: <Wifi className="w-8 h-8" />,
      title: "Jaringan & Infrastruktur",
      description: "Instalasi dan maintenance jaringan komputer serta infrastruktur IT",
      features: ["Network Setup", "CCTV Installation", "Server Management", "Cloud Solutions"]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tim Profesional",
      description: "Tenaga ahli berpengalaman di bidang IT dan elektronik"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Layanan Cepat",
      description: "Respon cepat dan solusi tepat waktu untuk kebutuhan Anda"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Solusi Tepat Sasaran",
      description: "Analisis mendalam untuk memberikan solusi yang sesuai kebutuhan"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garansi Layanan",
      description: "Jaminan kepuasan dan support purna jual yang handal"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Teknologi Terkini",
      description: "Mengikuti perkembangan teknologi terbaru dan inovatif"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware Berkualitas",
      description: "Produk elektronik original dengan kualitas terjamin"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV OMAH BORNEO IT</h1>
                <p className="text-xs text-gray-500">Technology Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🇮🇩 Kalimantan Tengah
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                CV OMAH BORNEO IT
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Solusi Teknologi Terpercaya untuk Bisnis Modern
              </p>
              <p className="text-lg mb-8 text-blue-50">
                Spesialis dalam pemrograman komputer, alat elektronik, dan layanan IT profesional. 
                Kami menghadirkan solusi teknologi inovatif untuk mendukung pertumbuhan bisnis Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Konsultasi Gratis
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <img 
                  src="/company-logo.png" 
                  alt="CV OMAH BORNEO IT Logo" 
                  className="w-64 h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan teknologi dan elektronik Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeService === service.id ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                {activeService === service.id && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4" />
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami mitra teknologi terpercaya Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang CV OMAH BORNEO IT
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CV OMAH BORNEO IT adalah perusahaan teknologi yang berbasis di Kalimantan Tengah, 
                Indonesia. Kami berdedikasi untuk menyediakan solusi teknologi terkini dan layanan 
                elektronik berkualitas tinggi untuk memenuhi kebutuhan bisnis modern.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dengan tim profesional yang berpengalaman, kami menghadirkan layanan pemrograman 
                komputer, penjualan alat elektronik, dan konsultasi IT yang komprehensif. 
                Kami memahami bahwa teknologi adalah kunci pertumbuhan bisnis di era digital.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Project Selesai</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Web Development</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Smartphone className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Mobile Apps</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Laptop className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Hardware Sales</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Wifi className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Network Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-blue-100">
              Siap membantu kebutuhan teknologi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alamat</h3>
              <p className="text-blue-100">
                R.A.Kartini No. 89, Desa/Kelurahan Selat Hilir<br />
                Kec. Selat, Kab. Kapuas<br />
                Provinsi Kalimantan Tengah, 7351
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telepon</h3>
              <p className="text-blue-100">
                +6282221617477
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">
                info@omahborneoit.com
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Pesan
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CV OMAH BORNEO IT</h3>
                  <p className="text-sm text-gray-400">Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Solusi teknologi terpercaya untuk mendukung pertumbuhan bisnis Anda di era digital.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pemrograman Komputer</li>
                <li>Alat Elektronik</li>
                <li>IT Consulting</li>
                <li>Jaringan & Infrastruktur</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 CV OMAH BORNEO IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}