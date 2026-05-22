import type { Lang } from "@/contexts/LanguageContext";

const EN = {
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: "Book a Consultation",
    mobileCta: "Book now",
  },
  hero: {
    title: "We Shape Your\nUniversity Journey",
    description:
      "Pine College Counseling guides high school students through every step of studying abroad. A curated, expert-led journey to the world's finest universities.",
    cta1: "Book a Consultation",
    cta2: "Explore Services",
    stat1Label: "Countries / Global Reach",
    stat2Label: "Strategic timeline",
  },
  services: {
    eyebrow: "COMPREHENSIVE CONSULTING",
    heading1: "The Architecture of",
    heading2: "Global Ambition",
    card1: {
      title: "Tailored Consultancy",
      body: "Generic advice leads to generic results.\nWe provide the strategic framework for international success.",
    },
    card2: {
      title: "Application Process",
      body: "We craft application narratives aligned with the expectations of leading university networks, including the Ivy League, Russell Group, and Coimbra Group.",
      link: "Explore Strategy",
    },
    card3: {
      title: "Interview Coaching",
      body: "We ensure you present yourself at your best in academic interviews, the defining stage of competitive application processes.",
      link: "Meet us",
    },
  },
  approach: {
    eyebrow: "OUR APPROACH",
    heading: "Why Pine College Counseling?",
    steps: [
      {
        number: "01",
        title: "Personalized Strategy",
        body: "We move beyond standard templates. Every roadmap is uniquely designed around your academic profile, strengths, and goals.",
      },
      {
        number: "02",
        title: "Long-Term Perspective",
        body: "Many consulting firms focus only on securing admissions. We look beyond acceptance letters, matching students with programs where they can truly grow and succeed.",
      },
      {
        number: "03",
        title: "Complete Transparency",
        body: "No empty promises, only honesty. We maintain clear and open communication with both students and families throughout every step of the process.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "WHAT WE OFFER",
    heading1: "Built",
    heading2: "Around You",
    description:
      "We don't believe in shortcuts or assumptions. Our focus is on building a future beyond admission.",
    cards: [
      {
        title: "Right Fit",
        body: "Programs are selected not only for admission success, but for long-term compatibility and growth.",
      },
      {
        title: "Global Reach",
        body: "Access to a network of distinguished international universities and academic connections.",
      },
      {
        title: "Easy Communication",
        body: "Secure messaging and real-time feedback throughout the entire process.",
      },
      {
        title: "Centralized Tracking",
        body: "Monitor all documents and deadlines in real time through a streamlined process.",
      },
      {
        title: "Continuous Support",
        body: "From the initial evaluation to the final application, we stay by your side at every step.",
      },
      {
        title: "Multilingual Support",
        body: "Consulting services are available in both Turkish and English.",
      },
    ],
  },
  founderQuote: {
    quote:
      '"International university consulting has a reputation problem. Promises are made, folders are filled, and students end up in programs that were never really right for them. We started Pine College Counseling because we believed the process could be honest, and the outcome could actually matter. We work with both students and parents, take the time to understand who the student really is, and build paths around their abilities, personality, and long-term goals. Getting in is just the beginning. We\'re here to make sure what comes after works too."',
    author: "— Pine College Counseling",
  },
  ctaBanner: {
    eyebrow: "NEXT STEP",
    heading: "Not Sure What's Next?",
    body: "Book a free consultation and let's shape your future together",
    button: "Discover Your Strategy",
  },
  footer: {
    pagesLabel: "Pages",
    contactLabel: "Contact",
    copyright: "© 2026 Pine College Counseling. Academic Curator. All rights reserved.",
    pageLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  servicesPage: {
    hero: {
      eyebrow: "SERVICES",
      title: "Crafting Your\nUniversity Journey",
      description: "Comprehensive options tailored to your specific timeline and needs.",
    },
    packages: {
      eyebrow: "PACKAGES",
      heading: "Service Packages",
      cta: "Book a Consultation",
    },
    partnerships: {
      eyebrow: "PARTNERSHIPS",
      heading: "For the Schools",
      body: "We collaborate with schools to support students in building strong, realistic pathways toward international higher education. Through Pine College Counseling Hub, students gain access to curated resources, structured guidance, and ongoing support that complements the school's existing academic framework.",
    },
    hub: {
      eyebrow: "Ecosystem",
      heading: "The Ecosystem of Success",
      body: "Our digital platform aligns students, parents, and consultants in a single, transparent workspace. No lost communications, no missed deadlines.",
      comingSoon: "Coming soon!",
      features: [
        {
          title: "Centralized Tracking",
          body: "Track all documents, deadlines, and decisions in real time.",
        },
        {
          title: "Direct Access",
          body: "Secure messaging and real-time feedback.",
        },
      ],
    },
    pkg1: {
      tag: "Grade 9 to 11",
      price: "€700",
      num: "01",
      title: "Assessment & University Matching",
      intro: "Start your application journey with a strong foundation.",
      bullets: [
        {
          bold: "Parent interview (90 min): ",
          normal:
            "financial expectations, educational background, insights on the student. Alongside a structured assessment of the family's financial capacity to ensure all recommended universities align realistically with the defined budget.",
        },
        {
          bold: "Individual student interview (60-80 min): ",
          normal: "academic interests, career goals and motivations are explored.",
        },
        {
          bold: "Psychometric assessment: ",
          normal: "the student's cognitive abilities, interests, personality and learning style are examined.",
        },
      ],
      outcomeLabel: "Outcome:",
      outcome:
        "As a result of our assessment we will provide 5–7 tailored university program options. Realistic alignment between the student's abilities, academic background, career goals, and financial constraints. Avoids overly ambitious or misaligned applications.",
    },
    pkg2: {
      tag: "For students with high goals",
      price: "€2000",
      num: "02",
      title: "Strategy & Application Support",
      intro: '"With a strategic and supportive approach, gain admission to your dream universities."',
      bullets: [
        { normal: "Everything in Package 1, along with full strategy and application support." },
        {
          normal:
            "Educational planning across different systems (AP, A-Levels, IB, European national curriculums, and the Turkish system) to ensure eligibility and competitiveness.",
        },
        { normal: "Exam preparation strategy (SAT/ACT, IELTS/TOEFL, TOLC, IMAT, university-specific exams)" },
        { normal: "University interview coaching" },
        { normal: "Personalized roadmap to reach selected programs" },
        { normal: "Step-by-step application guidance" },
      ],
      outcomeLabel: "Outcome:",
      outcome:
        "Personalized documents (motivation letters, CVs) and suggestions for building the correct portfolio are part of this package, not Package 1. If Package 1 has already been purchased separately, the €700 paid will be deducted from the total package fee.",
    },
    pkg3: {
      tag: "Intensive support in a short time.",
      price: "€2000",
      num: "03",
      title: "Last Call Support",
      intro: "Strengthen your applications in the final stretch.",
      bullets: [
        { normal: "Rapid assessment of the student's current academic profile" },
        { normal: "Identification of still-open programs and rolling admissions" },
        {
          normal:
            "Fast-track preparation of all application materials (motivation letter, CV, supporting documents)",
        },
        { normal: "University interview coaching" },
        { normal: "Direct university outreach where applicable" },
        { normal: "Gap year strategy if the current intake is no longer viable" },
      ],
      outcomeLabel: "Outcome:",
      outcome: "A placement within the available admission window or a structured plan for the next intake.",
    },
    pkg4: {
      tag: "For high school students",
      price: "From €50/ hour",
      priceMobile: "From €50/hour",
      num: "04",
      title: "Academic Private Tutoring",
      body1:
        "We connect students with experienced educators who have taught international programs such as AP, A-Levels, and IB for many years. Sessions are designed as individualized support based on each student's academic goals, current level, and application plan.",
      body2:
        "You can contact us by specifying the subjects you need academic support in, as well as the curriculum you are following.",
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "ABOUT US",
      title: "Meet the Team\nBehind This Journey",
      description: "We are here to help",
    },
    mission: {
      eyebrow: "OUR MISSION",
      heading: "For what comes after.",
      quote:
        '"Every step is intentional; so the student builds a consistent and credible profile, rather than a scattered list of activities."',
      body: "Many consulting firms focus only on getting students admitted. We look beyond that. At Pine College Counseling, we work with both students and parents to develop a realistic understanding of the student, their strengths, personality, and goals. Based on this, we match them with programs where they can truly thrive, not only academically, but in the long run as well.",
    },
    approach: {
      eyebrow: "OUR APPROACH",
      heading: "How We Work",
      steps: [
        {
          number: "01",
          title: "We Start With the Student",
          body: "We begin with the student, not a shortlist. Every step is shaped according to the individual's profile.",
        },
        {
          number: "02",
          title: "We Prioritize Real Fit",
          body: "Not just admission, but real success. We focus on matching students with programs where they can genuinely grow and thrive.",
        },
        {
          number: "03",
          title: "International Experience",
          body: "Our founder holds postgraduate degrees from universities affiliated with the Coimbra Group.",
        },
      ],
    },
    team: {
      eyebrow: "FOUNDER",
      heading: "Our Team",
      name: "Ekin Gümüş, MSc",
      title: "Clinical Psycho-Sexologist",
      bio1: "Growing up between different countries in Europe and Türkiye gave me the opportunity to experience diverse educational systems and academic approaches firsthand. I began my higher education at the University of Padua, where I studied my undergraduate in psychology with a focus on neuroscience. I later completed my master's degree in Clinical Psychosexology at the Sapienza University of Rome, Faculty of Medicine.",
      bio2: "Alongside my clinical work, I focus on international education systems and university application processes, supporting students through their academic, cultural, and personal development journeys. As a former school psychologist and college counselor, I developed a perspective that considers not only academic performance, but also students' motivation, anxiety, sense of belonging, and future expectations.",
      bio3: "Through hands-on experience in international university admissions and placement processes, I offer an approach that bridges different educational systems, cultures, and expectations. I believe that every student's story is unique, and therefore I avoid standardized models in favor of tailoring each process to individual needs. I also believe that maintaining sustainable and healthy communication with families plays a crucial role in a student's long-term development.",
      readMore: "Read more",
      readLess: "Read less",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Common Questions",
      items: [
        {
          q: "When should we start the university application process?",
          a: "Ideally in 9th or 10th grade. This allows enough time to shape an academic profile and strategically plan extracurricular activities. We also provide comprehensive support for students in 11th grade and above.",
        },
        {
          q: "How does the counseling process work?",
          a: "We begin with individual meetings with both the student and parents. This is followed by a structured process including psychometric assessment, university matching, application strategy development, and full support with document preparation.",
        },
        {
          q: "Which universities do you work with?",
          a: "We have strong connections with selective institutions across more than 30 countries, including universities affiliated with Ivy League, Russell Group, and Coimbra Group.",
        },
        {
          q: "Can parents be involved in the process?",
          a: "Yes, absolutely. Parent involvement is an integral part of our approach. We work closely with families to ensure they understand the process and can provide a supportive environment throughout.",
        },
        {
          q: "Do you help with scholarship applications?",
          a: "Yes. We identify scholarship opportunities aligned with the student's profile, develop a tailored application strategy, and provide guidance in preparing all required documents.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "CONTACT",
      title: "Let's Shape Your\nPath Together",
      description: "Choose your preferred way to reach us. We typically respond within 24 hours.",
    },
    form: {
      heading: "Write to Us",
      name: "Full Name",
      namePlaceholder: "First and Last Name",
      subject: "Subject",
      subjectPlaceholder: "How can we help you?",
      message: "Message",
      messagePlaceholder: "Tell us about your goals…",
      submit: "Send Message",
      disclaimer: "No commitment required",
      successHeading: "Message sent!",
      successBody: "We'll be in touch within 24 hours.",
      successFallback: "If your email app didn't open, you can reach us directly at",
    },
    reach: {
      heading: "Reach Out Directly",
      body: "Ready to explore international education opportunities? Get in touch and let's talk about your future.",
    },
  },
};

const TR = {
  nav: {
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Hizmetler", href: "/services" },
      { label: "Hakkımızda", href: "/about" },
      { label: "İletişim", href: "/contact" },
    ],
    cta: "Danışmanlık Al",
    mobileCta: "Danışmanlık Al",
  },
  hero: {
    title: "Üniversite yolculuğunu\nşekillendiriyoruz",
    description:
      "Pine College Counseling, lise öğrencilerine yurt dışında eğitim sürecinin her adımında rehberlik eder. Dünyanın en seçkin üniversitelerine uzman eşliğinde giden, özenle tasar lanmış bir yolculuk.",
    cta1: "Danışmanlık Al",
    cta2: "Hizmetleri Keşfet",
    stat1Label: "Ülke / Küresel Ağ",
    stat2Label: "Stratejik zaman dilimi",
  },
  services: {
    eyebrow: "KAPSAMLI DANIŞMANLIK",
    heading1: "Küresel Hedeflerin",
    heading2: "Mimarisi",
    card1: {
      title: "Kişiselletirilmiş Danışmanlık",
      body: "Genel tavsiyeler, genel sonuçlar doğurur.\nUluslararası başarı için stratejik çerçeveyi biz sunuyoruz.",
    },
    card2: {
      title: "Başvuru Süreci",
      body: "Ivy League, Russell Group ve Coimbra Group gibi önde gelen üniversite ağlarının beklentileriyle örtüşen başvuru hikayeleri hazırlıyoruz.",
      link: "Stratejiyi Keşfet",
    },
    card3: {
      title: "Mülakat Koçluğu",
      body: "Rekabetçi başvuru süreçlerinin belirleyici aşaması olan akademik mülakatlarınızda en iyi şekilde kendinizi sunmanızı sağlıyoruz.",
      link: "Bize Ulaşın",
    },
  },
  approach: {
    eyebrow: "YAKLAŞIMIMIZ",
    heading: "Neden Pine College Counseling?",
    steps: [
      {
        number: "01",
        title: "Kişiselletirilmiş Strateji",
        body: "Standart şablonların ötesine geçiyoruz. Her yol haritası, sizin akademik profiliniz, güçlü yönleriniz ve hedefleriniz doğrultusunda özgün biçimde tasar lanır.",
      },
      {
        number: "02",
        title: "Uzun Vadeli Perspektif",
        body: "Pek çok danışmanlık firması yalnızca kabul almaya odaklanır. Biz kabul mektuplarının ötesine bakıyor; öğrencileri gerçekten büyüyebilecekleri ve başarılı olabilecekleri programlarla eşleştiriyoruz.",
      },
      {
        number: "03",
        title: "Tam Şeffaflık",
        body: "Boş vaatler yok, yalnızca dürüstlük. Sürecin her adımında öğrenciler ve ailelerle açık ve net bir iletişim sürdürüyoruz.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "NE SUNUYORUZ",
    heading1: "Sizin İçin",
    heading2: "Tasarlandı",
    description:
      "Kestirme yollara ya da varsayımlara inanmıyoruz. Odak noktasımız, kabul ötesinde bir gelecek inşa etmektir.",
    cards: [
      {
        title: "Doğru Uyum",
        body: "Programlar yalnızca kabul başarısı için değil, uzun vadeli uyum ve gelişim için de seçilir.",
      },
      {
        title: "Küresel Ağ",
        body: "Seçkin uluslararası üniversiteler ve akademik bağlantılar ağına erişim.",
      },
      {
        title: "Kolay İletişim",
        body: "Tüm süreç boyunca güvenli mesajlaşma ve anlık geri bildirim.",
      },
      {
        title: "Merkezi Takip",
        body: "Tüm belge ve son tarihleri kolaylaştırılmış bir süreç üzerinden anlık izleyin.",
      },
      {
        title: "Sürekli Destek",
        body: "İlk değerlendirmeden son başvuruya kadar her adımda yanınızdayız.",
      },
      {
        title: "Çok Dilli Destek",
        body: "Danışmanlık hizmetlerimiz Türkçe ve İngilizce olarak sunulmaktadır.",
      },
    ],
  },
  founderQuote: {
    quote:
      '"Uluslararası üniversite danışmanlığının bir itibar sorunu var. Vaatler yapılır, klasörler doldurulur ve öğrenciler kendileri için hiç doğru olmayan programlarda bulunur. Pine College Counseling\'i kurduk çünkü bu sürecin dürüst olabileceğine ve sonucun gerçekten önem taşıyabileceğine inandık. Hem öğrencilerle hem de ailelerle çalışıyor, öğrencinin gerçekte kim olduğunu anlamak için zaman ayırıyor ve yolları onların yetenekleri, kişilikleri ve uzun vadeli hedefleri etrafında inşa ediyoruz. Kabul almak yalnızca bir başlangıçtır. Biz sonrasının da işe yamasını sağlamak için buradayiz."',
    author: "— Pine College Counseling",
  },
  ctaBanner: {
    eyebrow: "SONRAKİ ADIM",
    heading: "Sıradaki Adımın Ne Olduğundan Emin Değil misin?",
    body: "Ücetsiz bir danışmanlık randevusu al ve geleceğini birlikte şekillendırelim",
    button: "Stratejini Keşfet",
  },
  footer: {
    pagesLabel: "Sayfalar",
    contactLabel: "İletişim",
    copyright: "© 2026 Pine College Counseling. Akademik Küratör. Tüm hakları saklıdır.",
    pageLinks: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Hizmetler", href: "/services" },
      { label: "Hakkımızda", href: "/about" },
      { label: "İletişim", href: "/contact" },
    ],
  },
  servicesPage: {
    hero: {
      eyebrow: "HİZMETLER",
      title: "Kapsamlı\nDanışmanlık",
      description: "Spesifik zaman diliminize ve ihtiyaçlarınıza göre uyarlanmış kapsamlı seçenekler.",
    },
    packages: {
      eyebrow: "PAKETLER",
      heading: "Hizmet Paketleri",
      cta: "Danışmanlık Al",
    },
    partnerships: {
      eyebrow: "ORTAKLIKLAR",
      heading: "Okullar İçin",
      body: "Öğrencilerin uluslararası yükseköğrenime giden güçlü ve gerçekçi yollar oluşturmasını desteklemek için okullarla iş birliği yapıyoruz. Pine College Counseling Hub aracılığıyla öğrenciler, okulun mevcut akademik çerçevesini tamamlayan özenle seçilmiş kaynaklara, yapılandırılmış rehberliğe ve sürekli desteğe erişim kazanır.",
    },
    hub: {
      eyebrow: "Ekosistem",
      heading: "Başarının Ekosistemi",
      body: "Dijital platformumuz, öğrencileri, ebeveynleri ve danışmanları tek bir şeffaf çalışma alanında bir araya getirir. Kayıp iletişim yok, kaçırılan son tarih yok.",
      comingSoon: "Yakında!",
      features: [
        {
          title: "Merkezi Takip",
          body: "Tüm belgeleri, teslim tarihlerini ve kararları gerçek zamanlı takip edin.",
        },
        {
          title: "Doğrudan Erişim",
          body: "Güvenli mesajlaşma ve anlık geri bildirim.",
        },
      ],
    },
    pkg1: {
      tag: "9-11. Sınıf",
      price: "€700",
      num: "01",
      title: "Değerlendirme & Üniversite Eşleştirme",
      intro: "Başvuru yolculuğunuza güçlü bir temel ile başlayın.",
      bullets: [
        {
          bold: "Veli görüşmesi (90 dk): ",
          normal:
            "mali beklentiler, eğitim geçmişi, öğrenci hakkında görüşler. Önerilen tüm üniversitelerin belirlenen bütçeyle gerçekçi biçimde örtüştüğünden emin olmak için ailenin finansal kapasitesinin yapılandırılmış bir değerlendirmesi eşliğinde.",
        },
        {
          bold: "Bireysel öğrenci görüşmesi (60-80 dk): ",
          normal: "akademik ilgi alanları, kariyer hedefleri ve motivasyonlar ele alınır.",
        },
        {
          bold: "Psikometrik değerlendirme: ",
          normal:
            "öğrencinin bilişsel yetenekleri, ilgi alanları, kişiliği ve öğrenme stili incelenir.",
        },
      ],
      outcomeLabel: "Sonuç:",
      outcome:
        "Değerlendirmemiz sonucunda 5–7 özelleştirilmiş üniversite programı seçeneği sunacağız. Öğrencinin yetenekleri, akademik geçmişi, kariyer hedefleri ve mali kısıtlamalar arasında gerçekçi bir uyum sağlanır. Fazla hırsıl veya yanlış hizalanmış başvuruların önüne geçilir.",
    },
    pkg2: {
      tag: "Yüksek hedefli öğrenciler için",
      price: "€2000",
      num: "02",
      title: "Strateji & Başvuru Desteği",
      intro: '"Stratejik ve destekleyici bir yaklaşımla, hayalinizdeki üniversitelere kabul alın."',
      bullets: [
        { normal: "Paket 1'deki her şey, artı tam strateji ve başvuru desteği." },
        {
          normal:
            "Uygunluk ve rekabet gürünü sağlamak için farklı sistemlerde (AP, A-Levels, IB, Avrupa ulusal müfredatları ve Türk sistemi) eğitim planlaması.",
        },
        {
          normal:
            "Sınav hazırlık stratejisi (SAT/ACT, IELTS/TOEFL, TOLC, IMAT, üniversiteye özgü sınavlar)",
        },
        { normal: "Üniversite mülakat koçluğu" },
        { normal: "Seçilen programlara ulaşmak için kişiselletirilmiş yol haritası" },
        { normal: "Adım adım başvuru rehberliği" },
      ],
      outcomeLabel: "Sonuç:",
      outcome:
        "Kişiselletirilmiş belgeler (motivasyon mektupları, CV'ler) ve doğru portföyü oluşturmaya yönelik öneriler bu paketin parçasıdır, Paket 1'in değil. Paket 1 ayrı olarak daha önce satın alınmışsa, ödenen €700, toplam paket ücretinden düşülecektir.",
    },
    pkg3: {
      tag: "Kısa sürede yoğun destek.",
      price: "€2000",
      num: "03",
      title: "Son Aşama Desteği",
      intro: "Son düzlükte başvurularınızı güçlendirin.",
      bullets: [
        { normal: "Öğrencinin mevcut akademik profilinin hızlı değerlendirmesi" },
        { normal: "Hâlâ açık olan programların ve sürekli kabul yapan kurumların belirlenmesi" },
        {
          normal:
            "Tüm başvuru materyallerinin (motivasyon mektubu, CV, destekleyici belgeler) hızlandırılmış hazırlığı",
        },
        { normal: "Üniversite mülakat koçluğu" },
        { normal: "Uygulanabilir olduğu durumlarda doğrudan üniversite iletişimi" },
        { normal: "Mevcut kontenjan artık geçerli değilse gap year stratejisi" },
      ],
      outcomeLabel: "Sonuç:",
      outcome:
        "Mevcut kabul penceresi içinde bir yerleştirme veya bir sonraki kontenjan için yapılandırılmış bir plan.",
    },
    pkg4: {
      tag: "Lise öğrencileri için",
      price: "Saatlik €50'den",
      priceMobile: "Saatlik €50'den",
      num: "04",
      title: "Akademik Özel Ders",
      body1:
        "Öğrencileri, AP, A-Levels ve IB gibi uluslararası programları uzun yıllar boyunca öğretmiş deneyimli eğitimcilerle bir araya getiriyoruz. Dersler, her öğrencinin akademik hedefleri, mevcut seviyesi ve başvuru planına göre bireyselletirilmiş destek şeklinde tasar lanır.",
      body2:
        "Akademik destek almak istediğiniz dersleri ve takip ettiğiniz müfredatı belirterek bizimle iletişime geçebilirsiniz.",
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "HAKKIMIZDA",
      title: "Bu Yolculuğun\nArkasındaki Ekip",
      description: "Yardım etmek için buradayiz",
    },
    mission: {
      eyebrow: "MİSYONUMUZ",
      heading: "Sonrası için",
      quote:
        '"Her adım biliçlidir; böylece öğrenci dağınık bir aktiviteler listesi yerine tutarlı ve güvenilir bir profil oluşturur."',
      body: "Pek çok danışmanlık firması yalnızca öğrencilerin kabul almasına odaklanır. Biz daha ötesine bakıyoruz. Pine College Counseling'de, öğrencinin güçlü yönlerini, kişiliğini ve hedeflerini gerçekçi biçimde anlamlandırmak için hem öğrencilerle hem de ebeveynlerle birlikte çalışıyoruz. Buna dayanarak, öğrencileri yalnızca akademik olarak değil, uzun vadede de gerçekten gelişebilecekleri programlarla eşleştiriyoruz.",
    },
    approach: {
      eyebrow: "YAKLAŞIMIMIZ",
      heading: "Nasıl Çalışırız",
      steps: [
        {
          number: "01",
          title: "Öğrenciden Başlıyoruz",
          body: "Kısa bir liste değil, öğrenciden başlıyoruz. Her adım, bireyin profiline göre şekillendırilir.",
        },
        {
          number: "02",
          title: "Gerçek Uyumu Ön Planda Tutarız",
          body: "Sadece kabul değil, gerçek başarı. Öğrencileri gerçekten büyüyebilecekleri ve gelişebilecekleri programlarla eşleştirmeye odaklanıyoruz.",
        },
        {
          number: "03",
          title: "Uluslararası Deneyim",
          body: "Kurucu ortaklarımız, Coimbra Grubu'na bağlı üniversitelerden lisansüstü derecelere sahiptir.",
        },
      ],
    },
    team: {
      eyebrow: "KURUCU",
      heading: "Ekibimiz",
      name: "Ekin Gümüş, MSc",
      title: "Klinik Psikoseksolog",
      bio1: "Avrupa'nın farklı ülkeleri ile Türkiye arasında büyüyen ben, çeşitli eğitim sistemlerini ve akademik yaklaşımları bizzat deneyimleme fırsatı buldum. Yükseköğrenimime Padua Üniversitesi'nde psikoloji lisan sı ile başladım; odak alanım nörobilimdi. Daha sonra Sapienza Roma Üniversitesi Tıp Fakültesi'nde Klinik Psikoseksoloji alanında yüksek lisan sımı tamamladım.",
      bio2: "Klinik çalışmamın yanı sıra, öğrencileri akademik, kültürel ve kişisel gelişim yolculuklarında destekleyerek uluslararası eğitim sistemleri ve üniversite başvuru süreçleri üzerine yoğunlaşıyorum. Eski bir okul psikoloğu ve üniversite danışmanı olarak yalnızca akademik performansı değil, aynı zamanda öğrencilerin motivasyonunu, kaygısını, aidiyet duygusunu ve gelecek beklentilerini de göz önünde bulunduran bir perspektif geliştirdim.",
      bio3: "Uluslararası üniversite kabul ve yerleştirme süreçlerindeki uygulamalı deneyimim sayesinde farklı eğitim sistemleri, kültürler ve beklentiler arasında köprü kuran bir yaklaşım sunuyorum. Her öğrencinin hikayesinin benzersiz olduğuna inanıyorum; bu nedenle standart modeller yerine her süreci bireysel ihtiyaçlara göre uyarlamayı tercih ediyorum. Ailelerle sürdürülebilir ve sağlıklı iletişimin korunmasının da öğrencinin uzun vadeli gelişiminde kritik bir rol oynadığına inanıyorum.",
      readMore: "Devamını oku",
      readLess: "Daha az göster",
    },
    faq: {
      eyebrow: "SSS",
      heading: "Sık Sorulan Sorular",
      items: [
        {
          q: "Üniversite başvuru sürecine ne zaman başlamalıyız?",
          a: "İdeal olarak 9. veya 10. sınıfta. Bu, akademik profili şekillendirmek ve müfredat dışı etkinlikleri stratejik olarak planlamak için yeterli süre sağlar. 11. sınıf ve üzeri öğrencilere de kapsamlı destek sunmaktayız.",
        },
        {
          q: "Danışmanlık süreci nasıl işler?",
          a: "Öğrenci ve ebeveynlerle ayrı ayrı yapılan bireysel görüşmelerle başlıyoruz. Ardından psikometrik değerlendirme, üniversite eşleştirme, başvuru stratejisi geliştirme ve belge hazırlama süreçlerinde tam destek içeren yapılandırılmış bir süreç izliyoruz.",
        },
        {
          q: "Hangi üniversitelerle çalışıyorsunuz?",
          a: "Ivy League, Russell Group ve Coimbra Group'a bağlı üniversiteler dahil, 30'dan fazla ülkedeki seçkin kurumlarla güçlü bağlantılarımız bulunmaktadır.",
        },
        {
          q: "Süreçte ebeveynler yer alabilir mi?",
          a: "Evet, kesinlikle. Ebeveyn katılımı yaklaşımımızın ayrılmaz bir parçasıdır. Süreç boyunca ailelerle yakın çalışarak süreci anlamalarını ve destekleyici bir ortam oluşturmalarını sağlıyoruz.",
        },
        {
          q: "Burs başvurularında yardımcı oluyor musunuz?",
          a: "Evet. Öğrencinin profiline uygun burs fırsatlarını tespit ediyor, özelleştirilmiş bir başvuru stratejisi geliştiriyor ve gerekli tüm belgelerin hazırlanmasında rehberlik ediyoruz.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "İLETİŞİM",
      title: "Yolunu Birlikte\nŞekillendırelim",
      description: "Size en uygun iletişim yöntemini seçin. Genellikle 24 saat içinde yanıt veriyoruz.",
    },
    form: {
      heading: "Bize Yazın",
      name: "Ad Soyad",
      namePlaceholder: "Adınız ve Soyadınız",
      subject: "Konu",
      subjectPlaceholder: "Size nasıl yardımcı olabiliriz?",
      message: "Mesaj",
      messagePlaceholder: "Hedeflerinizden bize bahsedin…",
      submit: "Mesaj Gönder",
      disclaimer: "Herhangi bir taahhüt gerekmez",
      successHeading: "Mesaj gönderildi!",
      successBody: "24 saat içinde sizinle iletişime geçeceğiz.",
      successFallback: "E-posta uygulamanız açılmadıysa bize doğrudan ulaşabilirsiniz:",
    },
    reach: {
      heading: "Doğrudan Ulaşın",
      body: "Uluslararası eğitim fırsatlarını keşfetmeye hazır mısınız? Bize ulaşın, geleceğinizi konuşalım.",
    },
  },
};

export type Translations = typeof EN;
export const translations: Record<Lang, Translations> = { EN, TR } as Record<Lang, Translations>;
