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
        "Event basketnya seru-seru dan gampang daftar. Semua info lengkap di aplikasinya!",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    centerMode: false,
    centerPadding: "0",
    adaptiveHeight: true,
  };

  return (
    <main className="font-sans bg-white text-black">
      <section
        className="relative min-h-[70vh] flex items-center px-6 md:px-24 py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Competify, <span className="text-[#FF521B]">Super App</span>{" "}
            Olahraga Kamu
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8">
            Satu aplikasi untuk semua kebutuhan olahraga: booking lapangan,
            gabung komunitas, dan ikuti event seru.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
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
              className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
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
      </section>

      <section className="bg-white py-28 px-6 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Semua Fitur Olahraga,{" "}
            <span className="text-[#FF521B]">Dalam Satu App</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-20">
            Competify menyatukan segala keperluan olahraga harian dalam satu
            platform lengkap, efisien, dan menyenangkan.
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: "📍",
                title: "Booking Lapangan Instan",
                desc: "Pesan lapangan olahraga favoritmu kapan saja secara real-time, lengkap dengan jadwal, harga, dan review.",
              },
              {
                icon: "🧑‍🤝‍🧑",
                title: "Komunitas Terhubung",
                desc: "Gabung komunitas olahraga berdasarkan minatmu dan main rutin bareng teman-teman baru.",
              },
              {
                icon: "🏆",
                title: "Event & Turnamen",
                desc: "Ikuti fun match hingga turnamen resmi. Semuanya terjadwal dan bisa dikelola langsung dari aplikasi.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="w-16 h-16 rounded-2xl bg-[#FF521B]/10 flex items-center justify-center mb-4 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#FF521B] transition">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#f7f7f7] py-24 px-6 md:px-24 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Dipercaya oleh{" "}
            <span className="text-[#FF521B]">Penggemar Olahraga</span> di
            Jabodetabek
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 aspect-video">
              <iframe
                className="w-full h-full rounded-3xl shadow-xl"
                src="https://www.youtube.com/embed/De7siLixZyQ?autoplay=1&mute0&rel=0"
                title="Testimonial Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full md:w-1/2 overflow-visible">
              <Slider {...sliderSettings}>
                {testimonials.map((t, index) => (
                  <div key={index} className="px-2">
                    <div className="bg-white p-8 shadow-xl border border-gray-100 text-center rounded-xl">
                      <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                        “{t.quote}”
                      </p>
                      <p className="font-bold text-gray-900 text-base">
                        {t.name}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-24 px-6 md:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mb-10 relative">
            <input
              type="text"
              placeholder="Search for a question"
              className="w-full rounded-full px-5 py-3 pl-12 text-sm text-gray-700 shadow-sm focus:outline-none border border-gray-300"
            />
            <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "✕" : "+"}
                  </span>
                </button>
                <Transition
                  show={openIndex === index}
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-y-0 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-200 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-0 opacity-0"
                >
                  <div className="px-6 pb-6 text-gray-600 text-sm origin-top">
                    {faq.answer}
                  </div>
                </Transition>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Masih ada pertanyaan lainnya?
          </h3>
          <p className="text-gray-600 mb-6">
            Unduh aplikasi kami sekarang dan rasakan kemudahannya.
          </p>
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
      </section>

      <footer className="bg-gray-100 py-10 text-center text-sm text-gray-500">
        © 2025 Competify. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
