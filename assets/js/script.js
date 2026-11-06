const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`


// ================================
// ISI PESAN
// ================================

const pengirim = "Baby"

const pesan = `hi mortous petterson, happy 5th monthsary! i'm really happy that i get to spend these months with you. thank you for being here, for loving me, and for making even the little things feel special. i know we're not always going to have good days, but i hope we can always figure things out together and never get tired of choosing each other.

masih banyak hal yang bakal kita jalanin bareng, dede masih mau bikin lebih banyak kenangan, happy sedih bareng sama kamu, ngobrol sampai larut, dengerin cerita kamu, di temenin terus di semua kegiatan dan juga ngelakuin banyak hal kecil lainnya sama kamu. dede gaa tau ke depannya akan seperti apa, tapi satu hal yang dede tau, i still want you to be part of every story and everything that comes my way. 

i love you so much, cito! happy 5 months to us <3`


// Nama pengirim tetap digunakan pada header notifikasi.
nama.textContent = pengirim
nama1.textContent = pengirim

// Coba putar musik saat halaman pertama kali dibuka.
// Browser tertentu memblokir autoplay dengan suara; tombol Mulai menjadi fallback.
const mulaiMusik = () => {
  if (!audio) return
  audio.play().catch(() => {
    // Autoplay bersuara diblokir browser. Musik akan dicoba lagi saat pengguna
    // melakukan interaksi pertama melalui tombol Mulai.
  })
}

document.addEventListener('DOMContentLoaded', mulaiMusik)
if (document.readyState !== 'loading') mulaiMusik()


// ================================
// TOMBOL MULAI
// ================================

btnPlay.addEventListener('click', () => {
  mulaiMusik()

  messege1.style.display = "block"
  messege1.style.transform = "translateX(0)"

  btnPlay.style.display = "none"
  hilang1.style.display = "block"
})


// ================================
// TOMBOL LANJUT
// ================================

hilang1.addEventListener('click', () => {
  messege1.style.display = "none"
  messege2.style.transform = "translateX(0)"

  hilang1.style.display = "none"
  hilang2.style.display = "none"

  let i = 0
  const speed = 50
  const txt = pesan

  // Bersihkan isi sebelumnya agar animasi selalu dimulai dari awal.
  messege2P.textContent = ""

  const typeWriter = () => {
    if (i < txt.length) {
      messege2P.textContent += txt.charAt(i)
      i++
      messege2.classList.remove('kelip')
      setTimeout(typeWriter, speed)
    } else {
      messege2.classList.add('kelip')
      body.classList.replace('background1', 'background2')
      body.classList.add('muncul')
      hilang2.style.display = "block"
    }
  }

  typeWriter()
})


// ================================
// TOMBOL AKHIR
// ================================

hilang2.addEventListener('click', () => {

})
