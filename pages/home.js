
  pages.home= [
      {
          section: 'hero',
          title: 'Wawan Sismadi, M.Kom.',
          tagline: 'Researcher, Academic & Software Architect',
          description: 'Profesional TI yang menjembatani riset akademis dengan implementasi industri. Berfokus pada optimasi arsitektur perangkat lunak dan Microservices. Aktif sebagai Dosen di IPWIJA, Owner PT Sismadi Langit Solusi, dan Mahasiswa Doktoral di Universitas Ahmad Dahlan.',
          img: 'wawansismadi.jpeg',
          // imgClass: 'di-Sismadi Langit Solusi',

          badges: ['PhD Student UAD','Dosen IPWIJA','Owner PT SLS'],
          cta: { text: 'Diskusikan Proyek &raquo;', link: 'contact' }
      },
      {
          section: 'features',
          items: [
              {
                  icon: 'di-code',
                  title: 'Doctoral Researcher',
                  content: 'Fokus riset pada optimasi arsitektur perangkat lunak dan integrasi <strong>WebAssembly (Wasm)</strong> untuk sistem berperforma tinggi.',
                  linkText: 'Research',
                  linkTarget: 'profile'
              },
              {
                  icon: 'di-edu',
                  title: 'Academician',
                  content: 'Dosen tetap pengampu mata kuliah Pemrograman Web, Wireless Mobile Computing, dan Rekayasa Perangkat Lunak. Membimbing mahasiswa membangun mindset engineering yang kuat.',
                  linkText: 'Teaching',
                  linkTarget: 'profile'
              },
              {
                  icon: 'di-person',
                  title: 'Practitioner',
                  content: 'Owner & Software Architect di PT Sismadi Langit Solusi. Kreator framework <strong>DonatJS</strong>, solusi MVC zero-dependency berbasis JSON-driven.',
                  linkText: 'Portfolio',
                  linkTarget: 'expertise'
              }
          ]
      },
      {
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Pendidikan & Karir',
              lines: [
                  '### Pendidikan',
                  '**S3 Informatika (PhD Student)** - Universitas Ahmad Dahlan (mulai 2025)',
                  '**S2 Ilmu Komputer** - Universitas Budi Luhur',
                  '**S1 Teknik Informatika** - STMIK Triguna Utama',
                  '---',
                  '### Posisi',
                  '**Dosen Tetap** - Universitas IPWIJA',
                  '**Owner** - PT Sismadi Langit Solusi'
              ]
          },
          rightCol: {
              subtitle: 'Fokus Riset & Layanan',
              lines: [
                  'Mengintegrasikan perspektif riset ke dalam solusi digital praktis untuk sektor publik dan enterprise.',
                  'Pengembangan framework **DonatJS** sebagai pembuktian konsep arsitektur yang ringan dan efisien.',
                  '---',
                  'table:table1',
                  'table:[{"Sektor":"Pendidikan","Peran":"Dosen & Peneliti"},{"Sektor":"Industri","Peran":"Solution Architect"},{"Sektor":"Sertifikasi","Peran":"Asesor BNSP IT"}]',
              ],

              table1: [
                  { 'Kategori': 'Consultancy', 'Layanan': 'IT Audit & Architecture Strategy', 'Teknologi': 'Security Standards' }
              ],

          }
      },
      {
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Technical Stack',
              lines: [
                  'skill:85%:Software Architecture (JS/Node)',
                  'skill:85%:Cybersecurity & IT Audit',
                  'skill:75%:Microservices & Wasm (Research)',
                  'skill:75%:Project Management'
              ]
          },
          rightCol: {
              subtitle: 'Fokus Profesional',
              lines: [
                  '**Software Developer**: Membangun ekosistem perangkat lunak melalui DonatJS, BayamJS, dan KtuPad — terdaftar sebagai Hak Cipta resmi.',
                  '**Doctoral Study**: Menjalankan riset aktif di bidang software engineering (terdaftar di SINTA & ResearchGate).',
                  '**Strategic IT Consulting**: Transformasi digital untuk sektor pemerintah dan swasta.'
              ]
          }
      },
      {
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Hubungi Saya',
              lines: [
                  'contact:di-envelope|Email|wawan@sismadi.com|mailto:wawan@sismadi.com',
                  'contact:di-instagram|Instagram|instagram.com/wawansismadi|https://instagram.com/wawansismadi',
                  'contact:di-facebook|Facebook|facebook.com/wawan.sismadi|https://facebook.com/wawan.sismadi',
                  'contact:di-geo|Lokasi|Jakarta Timur, Indonesia'
              ]
          },
          rightCol: {
              subtitle: 'Diskusi Proyek',
              lines: ['form:contact'],
              fields: [
                  { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda' },
                  { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                  { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Konsultasi Arsitektur' },
                  { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 5, placeholder: 'Apa yang bisa saya bantu?' }
              ],
              submitText: 'Kirim Pesan'
          }
      }
  ] ;
