# Lavie Frontend

Modern e-ticaret ve blog platformu için React tabanlı frontend uygulaması.

## Özellikler

- 🛍️ **E-ticaret**: Ürün listeleme, sepet yönetimi, ödeme sistemi
- 📝 **Blog**: Blog yazıları ve detay sayfaları
- 👨‍💼 **Admin Paneli**: Kategori, ürün, kupon ve kullanıcı yönetimi
- 🎨 **Modern UI**: Responsive tasarım ve kullanıcı dostu arayüz
- 🔐 **Kimlik Doğrulama**: Kullanıcı girişi ve yetkilendirme
- 💳 **Ödeme**: Stripe entegrasyonu

## Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **Ant Design** - UI components
- **Context API** - State management
- **Stripe** - Payment processing
- **Recharts** - Data visualization

## Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Environment variables'ları ayarlayın:**
   ```bash
   cp env.example .env
   ```
   
   `.env` dosyasını düzenleyerek gerekli değerleri girin:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   VITE_API_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key_here
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## Kullanım

### Genel Kullanıcı
- Ana sayfa: Ürünleri görüntüleme
- Mağaza: Ürün filtreleme ve arama
- Sepet: Ürün ekleme/çıkarma ve miktar güncelleme
- Blog: Blog yazılarını okuma
- İletişim: İletişim formu

### Admin Kullanıcı
- Dashboard: İstatistikler ve grafikler
- Kategoriler: Kategori ekleme/düzenleme/silme
- Ürünler: Ürün ekleme/düzenleme/silme
- Kuponlar: Kupon oluşturma ve yönetimi
- Kullanıcılar: Kullanıcı listesi
- Siparişler: Sipariş takibi

## API Entegrasyonu

Proje, backend API'si ile entegre çalışır. API URL'i environment variable olarak tanımlanmalıdır:

```env
VITE_API_BASE_URL=http://localhost:5000
```

API mevcut değilse, proje local `data.json` dosyasını kullanır.

## Build

Production build için:
```bash
npm run build
```

## Lint

Kod kalitesi kontrolü için:
```bash
npm run lint
```

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
