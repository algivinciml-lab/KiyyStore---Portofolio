import gunung from '../assets/gunung.jpg'
import billiard from '../assets/billiard.jpg'
import bukti1 from '../assets/bukti-1.jpg'
import bukti2 from '../assets/bukti-2.jpg'

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'portfolio', label: 'Portofolio' },
  { id: 'contact', label: 'Contact' },
]

export const SITE_TITLE = 'kiiystore - Portofolio'

export const TITLES = {
  home: SITE_TITLE,
  about: SITE_TITLE,
  portfolio: SITE_TITLE,
  contact: SITE_TITLE,
}

export const HOBBIES = [
  {
    title: 'Mendaki Gunung',
    image: gunung,
    alt: 'Rizky duduk di puncak gunung dengan lautan awan di belakangnya',
    text: 'Ini adalah salah satu hobi yang senang saya lakukan. Ketika liburan akhir pekan atau libur panjang perkuliahan, saya selalu mendaki gunung bersama teman-teman saya.',
  },
  {
    title: 'Bermain Billiard',
    image: billiard,
    alt: 'Rizky membidik bola saat bermain billiard',
    text: 'Saya senang bermain billiard ketika ada waktu luang di sela-sela perkuliahan dan pekerjaan, biasanya bersama teman-teman. Saya memilih billiard karena menurut saya olahraga ini bisa melatih kefokusan dan kesabaran.',
  },
]

export const PROOFS = [
  {
    src: bukti1,
    alt: 'Bukti transfer Rp1.300.000 dari pembeli akun game',
    amount: 'Rp 1.300.000',
    date: '24 Februari 2026',
    position: '12% top',
  },
  {
    src: bukti2,
    alt: 'Bukti transfer Rp2.800.000 dari pembeli akun game',
    amount: 'Rp 2.800.000',
    date: '20 Januari 2026',
    position: 'center top',
  },
]

// Contoh percakapan untuk animasi chat di halaman Portofolio.
// Data rekening, ID, dan password di bawah hanyalah contoh dan akan diburamkan di tampilan.
// Untuk memakai screenshot asli, import gambarnya lalu isi `src` di bagian shot.
export const CHAT = [
  { from: 'buyer', name: 'Buyer', text: 'Bang, mau beli akun', time: '13.40' },
  {
    from: 'seller',
    name: 'kiiystore',
    text: 'Silakan, mau beli akun apa, budget berapa? Stok bisa dilihat di Instagram yaa.',
    time: '13.41',
  },
  {
    from: 'buyer',
    name: 'Buyer',
    text: 'Yang ini bang, boleh nego ga?',
    time: '13.42',
    shot: { price: 'Rp 1.500.000', src: null },
  },
  { from: 'seller', name: 'kiiystore', text: 'Boleh banget, mau nego berapa?', time: '13.42' },
  { from: 'buyer', name: 'Buyer', text: '1,3 boleh bang?', time: '13.43' },
  {
    from: 'seller',
    name: 'kiiystore',
    text: 'Sikatt, transfer di sini ya. Kirim ss hasil transaksinya.',
    time: '13.43',
    account: { label: 'Rekening tujuan', number: '1234 5678 9012', holder: 'a.n. Nama Pemilik' },
  },
  {
    from: 'buyer',
    name: 'Buyer',
    text: 'Done ya bang.',
    time: '13.45',
    receipt: { amount: 'Rp 1.300.000', date: 'Hari ini, 13.45 WIB' },
  },
  {
    from: 'seller',
    name: 'kiiystore',
    text: 'Oke sipp, nih ID dan Password akunnya. Terima kasih sudah bertransaksi bersama kiiystore.',
    time: '13.46',
    creds: [
      { label: 'ID', value: 'kiiy_88231' },
      { label: 'Password', value: 'contoh1234' },
    ],
  },
]

export const STORE_URL = 'https://lynk.id/kiiystore'

export const CONTACTS = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@kiiybouu',
    url: 'https://www.instagram.com/kiiybouu',
    cta: 'Buka Instagram',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: '+62 831 6876 2032',
    url: 'https://wa.me/6283168762032',
    cta: 'Chat WhatsApp',
  },
]