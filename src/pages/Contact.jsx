const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2">
        
        {/* İletişim Bilgileri */}
        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            İletişim
          </h1>

          <p className="mb-8 text-gray-600">
            Bizimle iletişime geçmekten çekinmeyin. Sorularınız,
            önerileriniz veya geri bildirimleriniz için size yardımcı
            olmaktan mutluluk duyarız.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-gray-800">
                📍 Adres
              </h2>
              <p className="text-gray-600">
                xxxxx, xxxx
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                📧 E-posta
              </h2>
              <p className="text-gray-600">
                info@travelxxxx.com
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                📞 Telefon
              </h2>
              <p className="text-gray-600">
                +90 (xxx) xxx xx xx
              </p>
            </div>
          </div>
        </section>


        {/* İletişim Formu */}
        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Mesaj Gönder
          </h2>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                İsim
              </label>

              <input
                type="text"
                placeholder="Adınızı giriniz"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>


            <div>
              <label className="mb-2 block font-medium text-gray-700">
                E-posta
              </label>

              <input
                type="email"
                placeholder="ornek@email.com"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>


            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Konu
              </label>

              <input
                type="text"
                placeholder="Mesaj konusu"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>


            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Mesaj
              </label>

              <textarea
                rows="5"
                placeholder="Mesajınızı yazınız..."
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              ></textarea>
            </div>


            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Mesaj Gönder
            </button>

          </form>
        </section>

      </div>
    </main>
  );
};

export default Contact;