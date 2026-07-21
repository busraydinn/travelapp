import React from 'react'
import { useParams } from 'react-router-dom'
import cityData from "../utils/Cities.json";
import { Link } from 'react-router-dom';
function Details() {
    const {id}=useParams();
    const city=cityData.find((item)=>item.id===Number(id));
    if(!city)
    {
        return(
            <div>
                Üzgünüm Böyle Bir Şehir Yok :(
                    <Link to="/">Anasayfaya Dön</Link>
            </div>
        )
    }
  return (
      <div className='min-h-screen'>
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans antialiased text-gray-900">
      
      {/* Üst Kısım: Başlık ve Lokasyon */}
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
          {city.duration}
        </span>
        <h1 className="text-3xl font-extrabold sm:text-4xl mt-2 mb-3 tracking-tight text-gray-950">
          {city.name}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1 font-medium text-gray-700">📍 {city.country}</span>
          <span className="flex items-center gap-1">
            ⭐ <strong className="text-gray-900 font-bold">{city.rating}</strong>
          </span>
        </div>
       <div className="max-w-6xl mx-auto px-4 py-8 font-sans antialiased text-gray-900">
  {/* Üst Kısım: Görsel Alanı */}
  <div className="w-full mb-8 overflow-hidden rounded-2xl shadow-md border border-gray-100">
    <img 
      src={city.image} 
      alt={city.name || "Seyahat Görseli"} 
      className="w-full h-[250px] sm:h-[400px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-300"
    />
  </div>

  {/* Alt Kısım: Detaylar ve Fiyat Kartı (Grid Yapısı) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    
    {/* Sol Taraf: Açıklama ve Detaylar (Geniş alan) */}
    <div className="md:col-span-2 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Şehir Hakkında</h2>
      <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
        {city.description}
      </p>
    </div>

    {/* Sağ Taraf: Fiyat ve Rezervasyon Kartı */}
    <div className="md:sticky md:top-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div>
          <span className="text-xs font-medium text-gray-400 block mb-1">Başlayan Fiyatlarla</span>
          <div className="flex items-baseline gap-1">
            <strong className="text-3xl font-black text-gray-950">
              {Number(city.priceFrom).toLocaleString('tr-TR')}
            </strong>
            <span className="text-lg font-bold text-gray-600">TL</span>
          </div>
        </div>

        {/* Aksiyon Butonu */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition duration-150 shadow-lg shadow-blue-100 active:scale-[0.98]">
          Detayları İncele
        </button>

        <div className="text-center text-xs text-emerald-600 font-medium bg-emerald-50 py-2 rounded-lg">
          ✓ En iyi fiyat garantisi
        </div>
      </div>
    </div>

  </div>
</div>

      </div>

</div>
      </div>
   
  )
}

export default Details