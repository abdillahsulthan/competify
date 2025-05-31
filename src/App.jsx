import { useState, useEffect } from "react";
import {
  FaGooglePlay,
  FaApple,
  FaMapMarkerAlt,
  FaUsers,
  FaTrophy,
  FaMobileAlt,
  FaCalendarAlt,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      icon: <FaMobileAlt />,
      title: "Unduh & Daftar",
      desc: "Download Competify lalu daftar dengan cepat. Gratis dan langsung siap pakai.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Booking Instan",
      desc: "Pilih lapangan, atur waktu, dan booking hanya dalam hitungan detik.",
    },
    {
      icon: <FaHandshake />,
      title: "Main & Gabung Komunitas",
      desc: "Datang, main bareng, dan bangun relasi dengan sesama pecinta olahraga.",
    },
  ];

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

  const features = [
    {
      icon: <FaMapMarkerAlt className="text-[#FF521B] w-12 h-12" />,
      title: "Booking Lapangan Instan",
      desc: "Pesan lapangan favoritmu dalam hitungan detik, lengkap dengan info harga & jadwal.",
    },
    {
      icon: <FaUsers className="text-[#FF521B] w-12 h-12" />,
      title: "Komunitas Terhubung",
      desc: "Gabung komunitas olahraga, atur jadwal rutin, dan main bareng teman baru.",
    },
    {
      icon: <FaTrophy className="text-[#FF521B] w-12 h-12" />,
      title: "Event & Turnamen",
      desc: "Ikuti berbagai event, dari fun match santai hingga turnamen serius.",
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main className="font-sans bg-white text-black">
      <section
        className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat px-6 md:px-24 py-20 grid grid-cols-1 md:grid-cols-2 items-center"
        style={{ backgroundImage: "url('/image/hero.jpeg')" }}
        data-aos="fade-up"
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
              <FaGooglePlay className="w-5 h-5" />
              <span className="font-semibold">Google Play</span>
            </a>

            <a
              href="#"
              className="bg-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm shadow hover:scale-105 transition"
            >
              <FaApple className="w-5 h-5" />
              <span className="font-semibold">App Store</span>
            </a>
          </div>
        </div>

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

      <section className="bg-white py-28 px-6 md:px-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Semua Fitur <span className="text-[#FF521B]">Olahraga</span>{" "}
            Favoritmu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-20 leading-relaxed">
            Competify menyatukan berbagai layanan olahraga dalam satu aplikasi
            yang elegan, cepat, dan mudah digunakan.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 cursor-pointer
                     hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-transform duration-300 ease-in-out text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-6 flex justify-center"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-white to-[#f7f7f7] py-32 px-6 md:px-24"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Cerita dari <span className="text-[#FF521B]">Pengguna Setia</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
            Mereka sudah merasakan kemudahan menggunakan Competify untuk
            olahraga dan event setiap minggunya.
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-center">
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

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                  🎥 Video Testimoni
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-[#f7f7f7] to-[#f9f9f9] py-24 px-6 md:px-24"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Competify dalam <span className="text-[#FF521B]">Angka</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Kami terus bertumbuh bersama komunitas olahraga di Jabodetabek.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 25000, suffix: "+", label: "Pengguna Terdaftar" },
              { end: 1200, suffix: "+", label: "Lapangan Terhubung" },
              { end: 5000, suffix: "+", label: "Event Terselenggara" },
              { end: 15, suffix: "+", label: "Kota Aktif" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl md:text-4xl font-extrabold text-[#FF521B] mb-3 tracking-tight">
                  <CountUp
                    end={item.end}
                    duration={2.5}
                    separator=","
                    suffix={item.suffix}
                  />
                </h3>
                <p className="text-gray-800 text-xs md:text-base font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-[#f9f9f9] to-[#f7f7f7] py-28 px-6 md:px-24"
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Langkah Mudah{" "}
            <span className="text-[#FF521B]">Menggunakan Aplikasi</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Mulai olahraga bareng komunitas favoritmu hanya dalam tiga langkah.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-full">
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 h-full bg-[#FF521B]/20 transform -translate-x-1/2 pointer-events-none" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`mb-20 flex flex-col gap-6 md:grid md:grid-cols-3 md:items-center relative z-10`}
            >
              <div className="md:hidden text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="rounded-full bg-gradient-to-br from-[#FF521B] to-[#FF7C4C] text-white flex items-center justify-center shadow-md cursor-pointer
          w-14 h-14 text-2xl mx-auto mb-4"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>

              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:block md:text-right md:pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                  <div className="hidden md:flex w-full justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="rounded-full bg-gradient-to-br from-[#FF521B] to-[#FF7C4C] text-white flex items-center justify-center shadow-md cursor-pointer
              w-20 h-20 text-3xl mx-auto"
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" />
                  <div className="hidden md:flex w-full justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="rounded-full bg-gradient-to-br from-[#FF521B] to-[#FF7C4C] text-white flex items-center justify-center shadow-md cursor-pointer
              w-20 h-20 text-3xl mx-auto"
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:text-left md:pl-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-[#f7f7f7] pt-10 pb-24 px-6 md:px-24"
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm transition-all hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full flex justify-between items-center px-6 py-5 text-left text-gray-900 font-semibold focus:outline-none transition duration-300 ${
                    openIndex === index ? "bg-[#FF521B]/10 text-[#FF521B]" : ""
                  }`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold select-none">
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
                  <div
                    id={`faq-content-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    className="px-6 py-5 text-gray-700 text-sm overflow-hidden"
                  >
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
                <FaGooglePlay className="w-5 h-5" />
                Google Play
              </a>

              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:scale-105 transition flex items-center gap-2"
              >
                <FaApple className="w-5 h-5" />
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F1F1F] text-white py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="text-2xl font-bold mb-2">Competify</h3>
            <p className="text-gray-400">
              Super App untuk semua kebutuhan olahraga kamu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-3 text-gray-400">
              {["Beranda", "Fitur", "Komunitas", "Turnamen"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#FF521B] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-3 text-gray-400">
              {["FAQ", "Kontak", "Kebijakan Privasi", "Syarat & Ketentuan"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#FF521B] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.62 9.87v-6.99H7.1v-2.88h3.28V9.41c0-3.24 1.92-5.03 4.87-5.03 1.41 0 2.89.25 2.89.25v3.17h-1.63c-1.61 0-2.11 1-2.11 2.03v2.44h3.6l-.58 2.88h-3.02v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937a9.685 9.685 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.723c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 0 0-8.38 4.482A13.969 13.969 0 0 1 1.671 3.149a4.902 4.902 0 0 0 1.523 6.556 4.903 4.903 0 0 1-2.229-.616v.06a4.918 4.918 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.6 3.417A9.867 9.867 0 0 1 .96 19.74a13.936 13.936 0 0 0 7.548 2.212c9.057 0 14.01-7.497 14.01-13.986 0-.21-.004-.423-.014-.633A10.012 10.012 0 0 0 24 4.59a9.728 9.728 0 0 1-2.357.647z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.6 0H2.4A2.4 2.4 0 0 0 0 2.4v19.2A2.4 2.4 0 0 0 2.4 24h19.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 21.6 0zM8.1 20.4H4.8V9.6h3.3v10.8zM6.45 8.1a1.95 1.95 0 1 1 0-3.9 1.95 1.95 0 0 1 0 3.9zM20.4 20.4h-3.3v-5.4c0-1.29-.03-2.94-1.8-2.94-1.8 0-2.1 1.41-2.1 2.85v5.49h-3.3V9.6h3.15v1.47h.045c.435-.825 1.5-1.695 3.09-1.695 3.3 0 3.9 2.175 3.9 5.01v6.015z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-12 text-xs border-t border-[#333333] pt-6">
            © 2025 Competify. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
