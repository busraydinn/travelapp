const About = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <section className="rounded-2xl bg-white p-10 shadow-lg">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            Hakkımızda
          </h1>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            <span className="font-semibold text-blue-600">Travel Explorer</span>,
            seyahat etmeyi seven herkes için ilham verici destinasyonları tek
            bir platformda buluşturmayı amaçlayan bir seyahat rehberidir.
            Dünyanın dört bir yanındaki şehirleri, doğal güzellikleri ve
            kültürel zenginlikleri keşfetmenize yardımcı olacak içerikler
            sunuyoruz.
          </p>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            Amacımız, kullanıcıların yeni rotalar keşfetmesini kolaylaştırmak,
            farklı şehirler hakkında bilgi edinmesini sağlamak ve seyahat
            planlarını daha bilinçli bir şekilde yapmalarına katkıda
            bulunmaktır.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center">
              <h2 className="mb-2 text-3xl font-bold text-blue-600">100+</h2>
              <p className="text-gray-600">Keşfedilecek Şehir</p>
            </div>

            <div className="rounded-xl border p-6 text-center">
              <h2 className="mb-2 text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-600">Seyahat Önerisi</p>
            </div>

            <div className="rounded-xl border p-6 text-center">
              <h2 className="mb-2 text-3xl font-bold text-blue-600">%100</h2>
              <p className="text-gray-600">Keşif Odaklı İçerik</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Misyonumuz
            </h2>

            <p className="leading-8 text-gray-600">
              Her yaştan gezgin için güvenilir, anlaşılır ve ilham verici
              içerikler hazırlayarak dünyanın güzelliklerini daha fazla
              insanın keşfetmesine katkı sağlamaktır.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Vizyonumuz
            </h2>

            <p className="leading-8 text-gray-600">
              Seyahat planlamasında akla gelen güvenilir platformlardan biri
              olmak ve kullanıcılarımıza her zaman güncel, faydalı ve kaliteli
              içerikler sunmaktır.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;