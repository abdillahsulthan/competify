import { useState } from "react";
import { Transition } from "@headlessui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah Competify gratis?",
      answer:
        "Ya! Aplikasi Competify gratis. Biaya hanya berlaku saat booking lapangan atau daftar event berbayar.",
    },
    {
      question: "Bisakah saya gabung banyak komunitas?",
      answer:
        "Tentu! Kamu bebas gabung sebanyak mungkin komunitas olahraga sesuai minatmu.",
    },
    {
      question: "Competify tersedia di kota mana saja?",
      answer:
        "Saat ini aktif di Jabodetabek dan akan segera ekspansi ke kota besar lainnya.",
    },
  ];

  const testimonials = [
    {
      name: "Dimas, 22 — Mahasiswa",
      quote:
        "Competify bikin booking lapangan futsal jadi super gampang. Gak perlu nanya-nanya manual lagi!",
    },
    {
      name: "Yuni, 28 — Karyawan",
      quote:
        "Senang banget bisa gabung komunitas badminton dan langsung dapet jadwal main tiap minggu.",
    },
    {
      name: "Raka, 17 — Pelajar",
      quote:
        "Event basketnya seru-seru dan gampang daftar. Semua info lengkap di aplikasinya, pokoknya Competify keren!",
    },
  ];

  return (
    <main className="font-sans bg-white text-black">
      <section
        className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat px-6 md:px-24 py-20 grid grid-cols-1 md:grid-cols-2 items-center"
        style={{ backgroundImage: "url('/image/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-0" />
        <div className="relative z-10 space-y-6 max-w-xl">
          <p className="text-sm uppercase tracking-wider text-[#FF7C4C] font-semibold">
            All-in-One Super App
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Competify,{" "}
            <span className="bg-gradient-to-r from-[#FF521B] to-[#FF7C4C] bg-clip-text text-transparent">
              Super App
            </span>{" "}
            Olahraga Kamu
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            Satu aplikasi untuk semua kebutuhan olahraga: booking lapangan,
            gabung komunitas, dan ikuti event seru.
          </p>

          <div className="flex gap-4 flex-wrap pt-2">
            <a
              href="#"
              className="bg-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm shadow hover:scale-105 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M325.3 234.3 104.1 23.3c-4.5-4.3-10.6-6.9-16.5-6.9-13 0-23.6 10.6-23.6 23.6v452c0 13 10.6 23.6 23.6 23.6 6 0 12-2.5 16.5-6.9l221.2-211c10.1-9.6 10.1-25.3 0-34.4zM372.8 292.3l-53.3-50.8 53.3-50.8 91.3 86.3-91.3 86.3v-70.9z" />
              </svg>
              <span className="font-semibold">Google Play</span>
            </a>

            <a
              href="#"
              className="bg-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm shadow hover:scale-105 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 384 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M318.7 268.6c-.3-37.2 16.5-65.3 51.3-86.2-19.2-27.9-47.9-43.5-84.4-46.6-35.4-3-74.4 20.5-88 20.5-14.3 0-50.3-19.8-77.9-19.2-40.1.6-76.1 23.2-96.5 59.2-41.3 71.5-10.5 177.5 29.6 235.6 19.6 28.4 42.7 60.2 73.3 59 29.1-1.1 40.2-18.8 75.2-18.8 34.9 0 44.6 18.8 75.3 18.2 31.2-.5 51.1-29.1 70.4-57.8 12.2-18.6 16.9-28.2 26.4-49.4-69.4-26.5-81-121.5-25.2-160.5zM261.1 93.4c20.4-23.4 18.9-51.3 18.1-61.4-27.3 1.1-59.5 18.2-78.7 39.7-17.2 19.3-32.5 48.6-28.4 77.5 30.3 2.4 61.4-15.3 88.9-55.8z" />
              </svg>
              <span className="font-semibold">App Store</span>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="relative z-10 flex justify-end mt-12 md:mt-0">
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FF521B] blur-3xl opacity-20 rounded-full z-0" />
            <img
              src="/image/mockup.png"
              alt="Competify App Mockup"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-6 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Semua Fitur <span className="text-[#FF521B]">Olahraga</span>{" "}
            Favoritmu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-20">
            Competify menyatukan berbagai layanan olahraga dalam satu aplikasi
            yang elegan, cepat, dan mudah digunakan.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "📍",
                title: "Booking Lapangan Instan",
                desc: "Pesan lapangan favoritmu dalam hitungan detik, lengkap dengan info harga & jadwal.",
              },
              {
                icon: "🧑‍🤝‍🧑",
                title: "Komunitas Terhubung",
                desc: "Gabung komunitas olahraga, atur jadwal rutin, dan main bareng teman baru.",
              },
              {
                icon: "🏆",
                title: "Event & Turnamen",
                desc: "Ikuti berbagai event, dari fun match santai hingga turnamen serius.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8 transition hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#f7f7f7] py-32 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Cerita dari <span className="text-[#FF521B]">Pengguna Setia</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
            Mereka sudah merasakan kemudahan menggunakan Competify untuk
            olahraga dan event setiap minggunya.
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Slider Testimonial */}
            <div className="w-full md:w-1/2">
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  arrows: false,
                }}
              >
                {testimonials.map((t, index) => (
                  <div key={index}>
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-800 italic mb-6">
                        “{t.quote}”
                      </p>
                      <p className="text-[#FF521B] font-bold text-sm">
                        {t.name}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Video Testimonial */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl shadow-xl overflow-hidden">
                <iframe
                  className="w-full h-64 md:h-80 object-cover"
                  src="https://www.youtube.com/embed/De7siLixZyQ?autoplay=1&mute=1&rel=0"
                  title="Testimonial Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Badge overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                  🎥 Video Testimoni
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-24 px-6 md:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium focus:outline-none transition duration-300 ${
                    openIndex === index ? "bg-[#FF521B]/10 text-[#FF521B]" : ""
                  }`}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <Transition
                  show={openIndex === index}
                  enter="transition-max-height duration-300 ease-in-out"
                  enterFrom="max-h-0 opacity-0"
                  enterTo="max-h-[500px] opacity-100"
                  leave="transition-max-height duration-200 ease-in-out"
                  leaveFrom="max-h-[500px] opacity-100"
                  leaveTo="max-h-0 opacity-0"
                >
                  <div className="px-6 py-6 text-gray-600 text-sm overflow-hidden">
                    {faq.answer}
                  </div>
                </Transition>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            Masih punya pertanyaan?
          </h3>
          <p className="text-gray-600 mb-6">
            Coba langsung aplikasinya dan rasakan kemudahannya.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:scale-105 transition flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.564 11.52a6.552 6.552 0 0 0-.072-.816H12v2.491h3.16c-.142.947-.566 1.747-1.2 2.288v1.892h1.936c1.134-1.044 1.768-2.584 1.768-4.355z" />
                  <path d="M12 18c1.62 0 2.978-.54 3.97-1.44l-1.936-1.892c-.538.36-1.228.572-2.034.572-1.56 0-2.886-1.052-3.358-2.462H6.616v1.957A5.995 5.995 0 0 0 12 18z" />
                  <path d="M8.642 13.278a3.57 3.57 0 0 1 0-2.282V9.04H6.616a6.005 6.005 0 0 0 0 5.92l2.026-1.682z" />
                  <path d="M12 7.43c.882 0 1.672.304 2.296.902l1.722-1.722C15.972 5.26 14.614 4.72 12 4.72a5.995 5.995 0 0 0-5.384 3.32l2.026 1.682C9.114 8.482 10.44 7.43 12 7.43z" />
                </svg>
                Google Play
              </a>
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:scale-105 transition flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M318.7 268.6c-.3-37.2 16.5-65.3 51.3-86.2-19.2-27.9-47.9-43.5-84.4-46.6-35.4-3-74.4 20.5-88 20.5-14.3 0-50.3-19.8-77.9-19.2-40.1.6-76.1 23.2-96.5 59.2-41.3 71.5-10.5 177.5 29.6 235.6 19.6 28.4 42.7 60.2 73.3 59 29.1-1.1 40.2-18.8 75.2-18.8 34.9 0 44.6 18.8 75.3 18.2 31.2-.5 51.1-29.1 70.4-57.8 12.2-18.6 16.9-28.2 26.4-49.4-69.4-26.5-81-121.5-25.2-160.5zM261.1 93.4C281.5 70 280 42.1 279.2 32c-27.3 1.1-59.5 18.2-78.7 39.7-17.2 19.3-32.5 48.6-28.4 77.5 30.3 2.4 61.4-15.3 88.9-55.8z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F1F1F] text-white py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Competify</h3>
            <p className="text-gray-400">
              Super App untuk semua kebutuhan olahraga kamu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Beranda</a>
              </li>
              <li>
                <a href="#">Fitur</a>
              </li>
              <li>
                <a href="#">Komunitas</a>
              </li>
              <li>
                <a href="#">Turnamen</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Bantuan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
              <li>
                <a href="#">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#">Syarat & Ketentuan</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.62 9.87v-6.99H7.1v-2.88h3.28V9.41c0-3.24 1.92-5.03 4.87-5.03 1.41 0 2.89.25 2.89.25v3.17h-1.63c-1.61 0-2.11 1-2.11 2.03v2.44h3.6l-.58 2.88h-3.02v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937a9.685 9.685 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.723c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 0 0-8.38 4.482A13.969 13.969 0 0 1 1.671 3.149a4.902 4.902 0 0 0 1.523 6.556 4.903 4.903 0 0 1-2.229-.616v.06a4.918 4.918 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.6 3.417A9.867 9.867 0 0 1 .96 19.74a13.936 13.936 0 0 0 7.548 2.212c9.057 0 14.01-7.497 14.01-13.986 0-.21-.004-.423-.014-.633A10.012 10.012 0 0 0 24 4.59a9.728 9.728 0 0 1-2.357.647z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.6 0H2.4A2.4 2.4 0 0 0 0 2.4v19.2A2.4 2.4 0 0 0 2.4 24h19.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 21.6 0zM8.1 20.4H4.8V9.6h3.3v10.8zM6.45 8.1a1.95 1.95 0 1 1 0-3.9 1.95 1.95 0 0 1 0 3.9zM20.4 20.4h-3.3v-5.4c0-1.29-.03-2.94-1.8-2.94-1.8 0-2.1 1.41-2.1 2.85v5.49h-3.3V9.6h3.15v1.47h.045c.435-.825 1.5-1.695 3.09-1.695 3.3 0 3.9 2.175 3.9 5.01v6.015z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-12 text-xs border-t border-[#333333] pt-6">
          © 2025 Competify. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default App;
