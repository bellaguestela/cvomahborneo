import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Shield, AlertCircle, Users, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV OMAH BORNEO IT</h1>
                <p className="text-xs text-gray-500">Terms & Conditions</p>
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
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            CV OMAH BORNEO IT - Perjanjian Layanan
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
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Pendahuluan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Selamat datang di CV OMAH BORNEO IT. Syarat dan Ketentuan ini mengatur penggunaan 
              layanan yang kami sediakan, termasuk layanan pemrograman komputer, penjualan alat elektronik, 
              dan konsultasi IT.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
              Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, jangan gunakan layanan kami.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Deskripsi Layanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              CV OMAH BORNEO IT menyediakan layanan-layanan berikut:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Pemrograman Komputer:</strong> Pengembangan software, aplikasi web, desktop, dan solusi enterprise
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Alat Elektronik:</strong> Penjualan, instalasi, dan service perangkat elektronik dan gadget
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>IT Consulting:</strong> Konsultasi teknologi, analisis sistem, dan solusi bisnis digital
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Jaringan & Infrastruktur:</strong> Instalasi jaringan, CCTV, server management, dan cloud solutions
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span>Kewajiban Pengguna</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Sebagai pengguna layanan kami, Anda setuju untuk:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Memberikan informasi yang akurat dan lengkap</li>
              <li>• Mematuhi semua hukum dan regulasi yang berlaku</li>
              <li>• Tidak menggunakan layanan untuk tujuan ilegal atau tidak etis</li>
              <li>• Menghormati hak kekayaan intelektual kami</li>
              <li>• Memberikan informasi yang diperlukan untuk kelancaran proyek</li>
              <li>• Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
              <li>• Tidak mencoba membobol atau merusak sistem kami</li>
              <li>• Bertanggung jawab atas keamanan akun dan data Anda</li>
            </ul>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Syarat Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Struktur Pembayaran:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Uang Muka:</strong> Minimal 30% dari total nilai proyek</li>
                <li>• <strong>Pembayaran Progress:</strong> Sesuai milestone yang disepakati</li>
                <li>• <strong>Pelunasan:</strong> Sebelum handover atau go-live</li>
                <li>• <strong>Metode Pembayaran:</strong> Transfer bank, tunai, atau sesuai kesepakatan</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Kebijakan Pembayaran:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pembayaran dianggap sah setelah diterima di rekening kami</li>
                <li>• Keterlambatan pembayaran akan dikenakan denda 2% per bulan</li>
                <li>• Proyek dapat dihentikan sementara jika pembayaran terlambat</li>
                <li>• Semua biaya bank ditanggung oleh klien</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hak Kekayaan Intelektual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Hak Milik CV OMAH BORNEO IT:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Source code yang dikembangkan sebelum proyek</li>
                <li>• Framework, library, dan tools internal</li>
                <li>• Metodologi dan proses kerja</li>
                <li>• Dokumentasi dan materi pelatihan</li>
                <li>• Branding dan materi promosi</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Hak Milik Klien:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Source code yang dikembangkan khusus untuk proyek</li>
                <li>• Design dan konten yang disediakan oleh klien</li>
                <li>• Data dan informasi bisnis klien</li>
                <li>• Customized solution setelah pelunasan pembayaran</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Warranty and Support */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Garansi dan Dukungan Teknis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Periode Garansi:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Software Development:</strong> 3-6 bulan garansi</li>
                <li>• <strong>Hardware Sales:</strong> 1 tahun garansi produsen</li>
                <li>• <strong>Installation Service:</strong> 1 bulan garansi</li>
                <li>• <strong>Consulting:</strong> Tidak ada garansi, tersedia support berbayar</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Layanan Support:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Email support: 24x7 response dalam 24 jam</li>
                <li>• Phone support: Senin-Jumat, 09:00-17:00 WIB</li>
                <li>• Remote support: Tersedia dengan kesepakatan</li>
                <li>• On-site support: Sesuai lokasi dan kesepakatan</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <span>Pembatasan Tanggung Jawab</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              CV OMAH BORNEO IT tidak bertanggung jawab atas:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Kerugian tidak langsung, insidental, atau konsekuensial</li>
              <li>• Kehilangan data, keuntungan, atau peluang bisnis</li>
              <li>• Downtime yang disebabkan oleh pihak ketiga</li>
              <li>• Kerusakan akibat penggunaan yang tidak benar</li>
              <li>• Force majeure (bencana alam, perang, dll)</li>
              <li>• Kegagalan sistem akibat virus atau malware</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Tanggung jawab maksimal kami adalah sebesar nilai kontrak untuk layanan yang bersangkutan.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Terminasi Layanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Terminasi oleh Klien:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dapat dilakukan kapan saja dengan pemberitahuan 14 hari</li>
                <li>• Pembayaran untuk pekerjaan yang sudah selesai tetap wajib</li>
                <li>• Biaya terminasi: 20% dari sisa nilai kontrak</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Terminasi oleh CV OMAH BORNEO IT:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Jika klien melanggar syarat dan ketentuan</li>
                <li>• Jika pembayaran terlambat lebih dari 30 hari</li>
                <li>• Jika ada aktivitas ilegal atau tidak etis</li>
                <li>• Dengan pemberitahuan 7 hari</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Penyelesaian Sengketa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Semua sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>1. <strong>Negosiasi:</strong> Diskusi langsung antara kedua belah pihak</li>
              <li>2. <strong>Mediasi:</strong> Melalui mediator netral yang disepakati</li>
              <li>3. <strong>Arbitrase:</strong> Badan Arbitrase Nasional Indonesia (BANI)</li>
              <li>4. <strong>Pengadilan:</strong> Pengadilan Negeri Kabupaten Kapuas</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Hukum yang berlaku adalah hukum Republik Indonesia.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Informasi Kontak</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, silakan hubungi:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> legal@omahborneoit.com
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

        {/* Agreement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Persetujuan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggunakan layanan CV OMAH BORNEO IT, Anda menyatakan bahwa telah membaca, 
              memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini.
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