import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV OMAH BORNEO IT</h1>
                <p className="text-xs text-gray-500">Privacy Policy</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600">
            CV OMAH BORNEO IT - Perlindungan Data Pribadi Anda
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-6 h-6 text-blue-600" />
              <span>Pendahuluan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Selamat datang di CV OMAH BORNEO IT. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
              pribadi Anda saat menggunakan layanan kami.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggunakan layanan CV OMAH BORNEO IT, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-blue-600" />
              <span>Pengumpulan Data Pribadi</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Informasi yang Kami Kumpulkan:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Informasi Identitas:</strong> Nama lengkap, alamat email, nomor telepon, alamat fisik
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Informasi Kontak:</strong> Email, telepon, media sosial, dan informasi komunikasi lainnya
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Informasi Bisnis:</strong> Nama perusahaan, jabatan, industri, dan kebutuhan layanan
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Informasi Teknis:</strong> Alamat IP, browser, perangkat, dan data penggunaan website
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Informasi Transaksi:</strong> Detail pembelian, riwayat layanan, dan informasi penagihan
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Cara Kami Mengumpulkan Informasi:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Formulir kontak dan pendaftaran online</li>
                <li>• Komunikasi langsung (email, telepon, meeting)</li>
                <li>• Penggunaan website dan layanan digital kami</li>
                <li>• Cookies dan teknologi pelacakan lainnya</li>
                <li>• Informasi yang Anda berikan secara sukarela</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <span>Penggunaan Data Pribadi</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Penyediaan Layanan:</strong> Memproses permintaan, mengelola proyek, dan memberikan dukungan teknis
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Komunikasi:</strong> Mengirimkan informasi penting, update layanan, dan materi promosi
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Penyempurnaan Layanan:</strong> Menganalisis penggunaan untuk meningkatkan kualitas layanan
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Keamanan:</strong> Melindungi dari penipuan, penyalahgunaan, dan aktivitas ilegal
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan regulasi yang berlaku
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="w-6 h-6 text-blue-600" />
              <span>Perlindungan Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Kami berkomitmen untuk melindungi data pribadi Anda dengan:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Enkripsi data selama transmisi dan penyimpanan</li>
              <li>• Akses terbatas hanya untuk personel yang berwenang</li>
              <li>• Sistem keamanan berlapis untuk mencegah akses tidak sah</li>
              <li>• Backup data teratur dan recovery plan</li>
              <li>• Audit keamanan berkala</li>
              <li>• Pelatihan staf tentang keamanan data</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pembagian Data Pihak Ketiga</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
              kecuali dalam kondisi berikut:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Dengan persetujuan eksplisit dari Anda</li>
              <li>• Untuk mitra bisnis yang membantu menyediakan layanan</li>
              <li>• Ketika diwajibkan oleh hukum atau regulasi</li>
              <li>• Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
              <li>• Dalam konteks merger, akuisisi, atau penjualan aset perusahaan</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hak Anda Sebagai Pengguna</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Sebagai pemilik data, Anda memiliki hak-hak berikut:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
              <li>• <strong>Hak Koreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap</li>
              <li>• <strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi dalam kondisi tertentu</li>
              <li>• <strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
              <li>• <strong>Hak Portabilitas:</strong> Memindahkan data ke layanan lain</li>
              <li>• <strong>Hak Penolakan:</strong> Menolak pemrosesan data untuk tujuan pemasaran</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hubungi Kami</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, 
              silakan hubungi kami melalui:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> privacy@omahborneoit.com
                </div>
                <div>
                  <strong>Telepon:</strong> +6282221617477
                </div>
                <div>
                  <strong>Alamat:</strong><br />
                  R.A.Kartini No. 89, Desa/Kelurahan Selat Hilir<br />
                  Kec. Selat, Kab. Kapuas<br />
                  Provinsi Kalimantan Tengah, 7351
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Perubahan Kebijakan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
              diumumkan melalui website atau komunikasi langsung. Penggunaan layanan kami yang 
              berkelanjutan setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
            </p>
          </CardContent>
        </Card>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 CV OMAH BORNEO IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}