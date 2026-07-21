# ✈️ Traveler - Travel Web Site

React.js ve Tailwind CSS kullanılarak geliştirilmiş modern bir seyahat web sitesi projesidir.

Bu proje ile React ekosisteminde temel ve önemli konuların uygulanması amaçlanmıştır:

- Component yapısı
- React Router kullanımı
- Layout mimarisi
- Tailwind CSS ile modern UI geliştirme
- JSON mock veri kullanımı
- Clean Code yaklaşımı
- Responsive tasarım

---

# 🚀 Kullanılan Teknolojiler

Projede kullanılan teknolojiler:

| Teknoloji | Açıklama |
|---|---|
| ⚛️ React.js | Kullanıcı arayüzü geliştirme |
| ⚡ Vite | Hızlı geliştirme ortamı |
| 🎨 Tailwind CSS | Modern CSS framework |
| 🔀 React Router DOM | Sayfa yönlendirme |
| 📄 JSON | Mock veri yönetimi |

---

# 📌 Projeyi Oluşturma

Projeyi oluşturmak için **Vite + React** kullanılmıştır.

Terminal ekranında:

```bash
npm create vite@latest travelapp
```

Proje klasörüne giriş:

```bash
cd travelapp
```

Paketleri yükleme:

```bash
npm install
```

---

# 🔀 React Router Kurulumu

Sayfa geçişleri için:

```bash
npm install react-router-dom
```

---

# 🎨 Tailwind CSS Kurulumu

Tailwind CSS kurulumu:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# ⚙️ Vite Config Ayarları

`vite.config.js` dosyası aşağıdaki şekilde düzenlenir:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
});
```

---

# 🎨 Tailwind CSS Ayarı

`src/index.css` içerisindeki varsayılan kodlar temizlenir.

Yerine:

```css
@import "tailwindcss";
```

eklenir.

---

# ▶️ Projeyi Çalıştırma

Projeyi başlatmak için:

```bash
npm run dev
```

komutu kullanılır.

Başarılı çalıştırma sonrası proje Vite tarafından verilen localhost adresinde açılır.

---

# 📁 Proje Klasör Yapısı

Projenin okunabilir, geliştirilebilir ve sürdürülebilir olması için aşağıdaki klasör yapısı oluşturulmuştur.

```
src
│
├── assets
│
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Card.jsx
│
├── landing
│   └── Layout.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── utils
│   └── Cities.json
│
├── App.jsx
└── main.jsx
```

---

# 📂 Klasörlerin Görevleri

## 📌 Landing

Projenin ana yerleşim yapısını oluşturur.

Bu klasör içerisinde:

- Header
- Footer
- Outlet

yapıları bulunur.

Bütün sayfalarda tekrar eden yapılar burada oluşturularak kod tekrarının önüne geçilir.

---

## 📌 Components

Tekrar kullanılabilir React componentlerinin bulunduğu klasördür.

Örnek:

- Header
- Footer
- Card
- Button

gibi yapılar burada tutulur.

Component kullanımı sayesinde:

- Kod tekrarları azalır.
- Proje yönetimi kolaylaşır.
- Daha temiz bir mimari oluşturulur.

---

## 📌 Pages

Kullanıcının görüntülediği sayfaların bulunduğu klasördür.

Örnek:

- Home
- About
- Contact
- NotFound

---

## 📌 Utils

Projede kullanılan yardımcı veri ve fonksiyonların bulunduğu klasördür.

Bu projede şehir bilgileri JSON formatında tutulmuştur.

Örnek:

```json
[
  {
    "id": 1,
    "name": "İstanbul",
    "rating": 5,
    "tags": [
      "History",
      "Culture"
    ]
  }
]
```

Bu yapı sayesinde içerikler sabit kod yerine veri üzerinden yönetilir.

---

# 🔀 React Router Yapısı

Sayfalar arası geçiş için:

```
react-router-dom
```

kütüphanesi kullanılmıştır.

Route işlemleri `App.jsx` içerisinde gerçekleştirilir.

Örnek:

```jsx
<Routes>

<Route path="/" element={<Layout />}>

<Route index element={<Home />} />

<Route 
path="about" 
element={<About />} 
/>

<Route 
path="contact" 
element={<Contact />} 
/>

<Route 
path="*" 
element={<NotFound />} 
/>

</Route>

</Routes>
```

---

# 🏗 Layout Yapısı

`Layout.jsx` uygulamanın ortak tasarım yapısını oluşturur.

İçerisinde:

- Header
- Outlet
- Footer

bulunur.

Bu sayede her sayfada aynı Header ve Footer kodlarını tekrar yazmaya gerek kalmaz.

---

# 🧩 Component Mantığı

React projelerinde tekrar eden yapılar component olarak ayrılır.

Örneğin:

Header ve Footer bütün sayfalarda kullanıldığı için component haline getirilmiştir.

Avantajları:

✅ Daha temiz kod yapısı  
✅ Yeniden kullanılabilir componentler  
✅ Daha kolay bakım  
✅ Profesyonel proje mimarisi  

---

# 🌍 Proje Özellikleri

Bu proje içerisinde:

✅ Responsive tasarım

✅ Şehir kartları

✅ Dinamik JSON veri kullanımı

✅ Sayfa yönlendirme

✅ Component mimarisi

✅ Tailwind CSS tasarımı

bulunmaktadır.

---

# 🔮 Geliştirme Fikirleri

Projeye ilerleyen aşamalarda aşağıdaki özellikler eklenebilir:

- 🔍 Gelişmiş arama sistemi
- ⭐ Rating filtreleme
- ❤️ Favorilere ekleme
- 🗺 Harita entegrasyonu
- 🌙 Dark Mode
- 🔐 Kullanıcı giriş sistemi
- 📱 Mobil menü
- 🌐 Backend API bağlantısı
- 💬 Kullanıcı yorum sistemi

---

# 📚 Kaynaklar

Tailwind CSS Vite kurulumu:

https://tailwindcss.com/docs/installation/using-vite

---

# 👨‍💻 Geliştirici

Bu proje React.js ve modern frontend geliştirme pratiklerini öğrenmek amacıyla hazırlanmıştır.

Projeyi inceleyen herkese teşekkür ederim. 🚀

⭐ Eğer faydalı bulduysanız projeye yıldız vermeyi unutmayın.