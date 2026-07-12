/* VIVA OLINDA — conteúdo trilíngue + dados dos parceiros.
   Edite aqui textos, links, telefones e coordenadas conforme os dados reais chegarem.
   Carregado como window.VIVA_DATA por todas as páginas. */
(function () {
  var data = {
    /* ---------- HOTÉIS AESHO (destaque comercial máximo) ---------- */
    hotels: [
      {
        id: "7colinas",
        name: "Hotel 7 Colinas",
        hood: "Sítio Histórico",
        desc: {
          pt: "Construções integradas a jardins floridos e vegetação tropical, em contraste vivo com a arquitetura colonial.",
          en: "Buildings set among flowering gardens and tropical greenery, in vivid contrast with the colonial architecture.",
          es: "Construcciones integradas a jardines floridos y vegetación tropical, en vivo contraste con la arquitectura colonial."
        }
      },
      {
        id: "saofrancisco",
        name: "Hotel Pousada São Francisco",
        hood: "Carmo",
        desc: {
          pt: "A 100 metros da praia, com infraestrutura completa para negócios e lazer.",
          en: "100 meters from the beach, with full infrastructure for business and leisure.",
          es: "A 100 metros de la playa, con infraestructura completa para negocios y ocio."
        }
      },
      {
        id: "amparo",
        name: "Pousada do Amparo",
        hood: "Amparo",
        desc: {
          pt: "Pousada boutique com mais de 30 anos no Sítio Histórico, piscina com vista para o Recife e dois restaurantes autorais.",
          en: "A 30-year boutique inn in the Historic Site, with a Recife-view pool and two signature restaurants.",
          es: "Posada boutique con más de 30 años en el Sitio Histórico, piscina con vista a Recife y dos restaurantes de autor."
        },
        img: "uploads/hotels/amparo/piscina-por-do-sol.avif",
        gallery: [
          "uploads/hotels/amparo/terraco-vista-noturna.avif",
          "uploads/hotels/amparo/suite-colonial.avif",
          "uploads/hotels/amparo/quarto-mansarda.avif",
          "uploads/hotels/amparo/recepcao.avif",
          "uploads/hotels/amparo/gastronomia.avif"
        ]
      },
      {
        id: "quatrocantos",
        name: "Pousada dos Quatro Cantos",
        hood: "Quatro Cantos",
        desc: {
          pt: "Casarão do século XVIII restaurado, com o autêntico clima do Sítio Histórico de Olinda.",
          en: "A restored 18th-century mansion with the authentic atmosphere of Olinda's Historic Site.",
          es: "Caserón del siglo XVIII restaurado, con el auténtico ambiente del Sitio Histórico de Olinda."
        }
      },
      {
        id: "costeiro",
        name: "Hotel Costeiro",
        hood: "Beira-mar",
        desc: {
          pt: "O primeiro três estrelas à beira-mar de Olinda, a 10 minutos do centro do Recife.",
          en: "Olinda's first beachfront three-star hotel, 10 minutes from downtown Recife.",
          es: "El primer tres estrellas frente al mar de Olinda, a 10 minutos del centro de Recife."
        }
      }
    ],

    /* ---------- 12 RESTAURANTES (coordenadas aproximadas — ajustar) ---------- */
    restaurants: [
      { name: "Oficina do Sabor", tel: "+55 81 0000-0000", link: "#", lat: -8.0079, lng: -34.8431,
        desc: { pt: "Cozinha pernambucana autoral, famosa pelas jericas.", en: "Signature Pernambuco cuisine, famous for its pumpkin 'jericas'.", es: "Cocina pernambucana de autor, famosa por sus 'jericas'." } },
      { name: "Beijupirá Olinda", tel: "+55 81 0000-0000", link: "#", lat: -8.0125, lng: -34.8466,
        desc: { pt: "Frutos do mar criativos com toque afro-pernambucano.", en: "Creative seafood with an Afro-Pernambuco touch.", es: "Mariscos creativos con toque afro-pernambucano." } },
      { name: "Trattoria Dom Francesco", tel: "+55 81 0000-0000", link: "#", lat: -8.0091, lng: -34.8442,
        desc: { pt: "Tradição italiana no coração do Sítio Histórico.", en: "Italian tradition in the heart of the Historic Site.", es: "Tradición italiana en el corazón del Sitio Histórico." } },
      { name: "Bodega de Veio", tel: "+55 81 0000-0000", link: "#", lat: -8.0064, lng: -34.8419,
        desc: { pt: "Bar e mercearia icônicos, símbolo afetivo de Olinda.", en: "Iconic bar and grocery, a beloved Olinda landmark.", es: "Bar y tienda icónicos, símbolo afectivo de Olinda." } },
      { name: "Casbah", tel: "+55 81 0000-0000", link: "#", lat: -8.0102, lng: -34.8408,
        desc: { pt: "Gastronomia e vista panorâmica do alto da cidade.", en: "Dining with a panoramic view from the city's heights.", es: "Gastronomía y vista panorámica desde lo alto de la ciudad." } },
      { name: "Olinda Art & Grill", tel: "+55 81 0000-0000", link: "#", lat: -8.0088, lng: -34.8475,
        desc: { pt: "Grelhados e arte em ambiente descontraído.", en: "Grill and art in a relaxed setting.", es: "Parrilla y arte en un ambiente relajado." } },
      { name: "Boucherie Marine", tel: "+55 81 0000-0000", link: "#", lat: -8.0150, lng: -34.8505,
        desc: { pt: "Carnes e frutos do mar com pegada francesa.", en: "Meats and seafood with a French accent.", es: "Carnes y mariscos con acento francés." } },
      { name: "Restaurante Patuá", tel: "+55 81 0000-0000", link: "#", lat: -8.0055, lng: -34.8447,
        desc: { pt: "Cozinha regional contemporânea e afetiva.", en: "Contemporary, heartfelt regional cuisine.", es: "Cocina regional contemporánea y afectiva." } },
      { name: "Prudente 242", tel: "+55 81 0000-0000", link: "#", lat: -8.0098, lng: -34.8459,
        desc: { pt: "Bistrô charmoso na Rua Prudente de Morais.", en: "Charming bistro on Rua Prudente de Morais.", es: "Bistró con encanto en la Rua Prudente de Morais." } },
      { name: "Estação 4 Cantos", tel: "+55 81 0000-0000", link: "#", lat: -8.0083, lng: -34.8421,
        desc: { pt: "Petiscos e drinks no ponto mais movimentado de Olinda.", en: "Small plates and drinks at Olinda's liveliest corner.", es: "Tapas y tragos en el rincón más animado de Olinda." } },
      { name: "Tribuna Sabores Ibéricos", tel: "+55 81 0000-0000", link: "#", lat: -8.0110, lng: -34.8438,
        desc: { pt: "Sabores ibéricos: tapas, vinhos e paellas.", en: "Iberian flavors: tapas, wines and paellas.", es: "Sabores ibéricos: tapas, vinos y paellas." } },
      { name: "Ateliê Café Arte Machê", tel: "+55 81 0000-0000", link: "#", lat: -8.0070, lng: -34.8452,
        desc: { pt: "Café-galeria que une arte, design e bons quitutes.", en: "Café-gallery uniting art, design and good treats.", es: "Café-galería que une arte, diseño y buenos bocados." } }
    ],

    /* ---------- EXPERIÊNCIAS ---------- */
    experiences: [
      { name: "Receptivo de Olinda", featured: true,
        desc: { pt: "Receptivo local com guias credenciados para roteiros sob medida pelo Sítio Histórico.", en: "Local receptive operator with accredited guides for tailor-made tours of the Historic Site.", es: "Receptivo local con guías acreditados para recorridos a medida por el Sitio Histórico." } },
      { name: "Trilha Ecológica Horto Del Rey", featured: false,
        desc: { pt: "Caminhada guiada pela mata atlântica urbana com vista para o casario colonial.", en: "Guided hike through urban Atlantic Forest overlooking the colonial rooftops.", es: "Caminata guiada por la mata atlántica urbana con vista al casario colonial." } },
      { name: "Tour Histórico", featured: false,
        desc: { pt: "Percurso a pé pelas igrejas barrocas, ladeiras e mirantes de Olinda.", en: "Walking route through Olinda's baroque churches, slopes and lookouts.", es: "Recorrido a pie por las iglesias barrocas, cuestas y miradores de Olinda." } },
      { name: "Olinda Negro", featured: false,
        desc: { pt: "Roteiro pelas raízes afro-pernambucanas de Olinda — terreiros, maracatu, frevo e a memória do quilombo. Conduzido por guias e griots da própria comunidade.", en: "A route through Olinda's Afro-Pernambuco roots — terreiros, maracatu, frevo and quilombo memory. Led by community guides and griots.", es: "Un recorrido por las raíces afro-pernambucanas de Olinda — terreiros, maracatú, frevo y la memoria del quilombo. Conducido por guías y griots de la comunidad." } }
    ],

    /* ---------- LUGARES PARA VISITAR ---------- */
    places: [
      { name: "Casa Estação da Luz", featured: true, placeholder: false,
        desc: { pt: "Espaço cultural e de memória, referência viva da cena artística de Olinda.", en: "Cultural and memory space, a living reference of Olinda's art scene.", es: "Espacio cultural y de memoria, referencia viva de la escena artística de Olinda." } },
      { name: "MAC — Museu de Arte Contemporânea de Pernambuco", featured: false, placeholder: false,
        desc: { pt: "Coleção de arte moderna e contemporânea no coração do Sítio Histórico — pintura, escultura e instalações de artistas pernambucanos e nacionais.", en: "Modern and contemporary art collection in the heart of the Historic Site — paintings, sculptures and installations by Pernambuco and Brazilian artists.", es: "Colección de arte moderno y contemporáneo en el corazón del Sitio Histórico — pinturas, esculturas e instalaciones de artistas pernambucanos y nacionales." } },
      { name: "Casa dos Bonecos Gigantes", featured: false, placeholder: false,
        desc: { pt: "Ateliê-museu onde nascem os bonecos gigantes do Carnaval de Olinda. Visita guiada às oficinas e ao acervo de figuras históricas.", en: "Studio-museum where Olinda Carnival's giant puppets are born. Guided tour of the workshops and collection of historic figures.", es: "Taller-museo donde nacen los muñecos gigantes del Carnaval de Olinda. Visita guiada a los talleres y a la colección de figuras históricas." } }
    ],

    /* ---------- GEOGRAFIA (distâncias relevantes para B2B) ---------- */
    geo: [
      { name: "Centro de Convenções (Cecon-PE)", dist: { pt: "~3 km", en: "~3 km", es: "~3 km" }, img: "assets/geo/recife-mirante.jpg" },
      { name: "Aeroporto Internacional do Recife (Guararapes)", dist: { pt: "~18 km", en: "~18 km", es: "~18 km" }, img: "assets/geo/olinda-aerea.jpg" },
      { name: "Marco Zero / Recife Antigo", dist: { pt: "~7 km", en: "~7 km", es: "~7 km" }, img: "assets/geo/recife-mirante.jpg" },
      { name: "Ilha de Itamaracá / Coroa do Avião", dist: { pt: "~45 km", en: "~45 km", es: "~45 km" }, img: "assets/geo/olinda-aerea.jpg" },
      { name: "Praia de Boa Viagem", dist: { pt: "~15 km", en: "~15 km", es: "~15 km" }, img: "assets/geo/recife-mirante.jpg" },
      { name: "Fernando de Noronha", dist: { pt: "1h de voo", en: "1h flight", es: "1h de vuelo" }, img: "assets/geo/olinda-aerea.jpg" }
    ],

    /* ---------- STRINGS DE INTERFACE ---------- */
    i18n: {
      pt: {
        present: "AESHO apresenta",
        nav: { stay: "Hospedagem", eat: "Gastronomia", do: "Experiências", corp: "Corporativo", contact: "Contato" },
        hero: { kicker: "Sítio Histórico de Olinda · Pernambuco · Brasil", title1: "Viva", title2: "Olinda", sub: "A prateleira de experiências do destino mais autêntico de Pernambuco, pronta para a sua operação.", cta: "Falar com a AESHO", scroll: "Explorar o destino" },
        unesco: { tag: "Patrimônio Mundial", since: "UNESCO · desde 1982" },
        history: { tag: "A cidade", title: "Quatro séculos de história, vivos até hoje", lead: "Diz a tradição que o nome nasceu da exclamação de Duarte Coelho diante da paisagem: “Ó, linda situação para se construir uma vila!”.", body: "Elevada a vila em 1537, com Foral enviado a D. João III, Olinda foi a primeira capital de Pernambuco e um dos grandes centros econômicos e culturais do Brasil colonial." },
        geo: { tag: "Localização", title: "No centro de tudo", sub: "Distâncias a partir do Sítio Histórico de Olinda" },
        stay: { tag: "Ficar", title: "Onde se hospedar", sub: "Os cinco hotéis e pousadas associados à AESHO — o coração da hospitalidade de Olinda.", cta: "Ver os 5 hotéis em detalhe", aesho: "Associado AESHO" },
        eat: { tag: "Comer", title: "Onde comer", sub: "Doze restaurantes geolocalizados no Sítio Histórico. Clique nos pinos para ver detalhes.", mapnote: "Localizações aproximadas — em ajuste" },
        doing: { tag: "Fazer", title: "O que viver em Olinda", sub: "Experiências e lugares selecionados para enriquecer o roteiro.", exp: "Experiências", places: "Lugares para visitar", featured: "Destaque", historic: "Pontos Turísticos, Igrejas e Monumentos" },
        mice: { tag: "Corporativo · MICE", title: "Eventos e grupos em Olinda", body: "Estamos estruturando uma curadoria de espaços corporativos e experiências para grupos no Sítio Histórico. Fale com a gente para saber mais.", soon: "Em breve", cta: "Quero saber mais" },
        contact: { tag: "Contato", title: "Vamos conversar", sub: "Conte o seu interesse e a AESHO retorna com a melhor curadoria para a sua operação.", name: "Nome", email: "E-mail", company: "Empresa / Operadora", phone: "Telefone", interest: "Interesse", send: "Enviar mensagem", or: "ou", whatsapp: "WhatsApp institucional", sent: "Mensagem registrada! A AESHO entrará em contato em breve.", opts: { stay: "Hospedagem", eat: "Gastronomia", corp: "Corporativo", other: "Outro" } },
        buttons: { reserve: "Reservar pelo site", whatsapp: "Falar no WhatsApp", booking: "Ver no Booking" },
        footer: { signature: "AESHO apresenta: Viva Olinda", made: "Feito por: OCCA — Olinda Creative Community Action", rights: "Ferramenta comercial · Road-Show Recife 2026" },
        photo: "imagem ilustrativa",
        back: "Voltar à home"
      },
      en: {
        present: "AESHO presents",
        nav: { stay: "Stay", eat: "Dining", do: "Experiences", corp: "Corporate", contact: "Contact" },
        hero: { kicker: "Olinda Historic Site · Pernambuco · Brazil", title1: "Viva", title2: "Olinda", sub: "The product shelf of Pernambuco's most authentic destination, ready for your operation.", cta: "Talk to AESHO", scroll: "Explore the destination" },
        unesco: { tag: "World Heritage", since: "UNESCO · since 1982" },
        history: { tag: "The city", title: "Four centuries of history, alive today", lead: "Tradition holds that the name was born from Duarte Coelho's exclamation before the landscape: “O, what a beautiful setting to build a town!”.", body: "Elevated to a town in 1537, with its charter sent to King João III, Olinda was the first capital of Pernambuco and one of colonial Brazil's great economic and cultural centers." },
        geo: { tag: "Location", title: "At the center of everything", sub: "Distances from Olinda's Historic Site" },
        stay: { tag: "Stay", title: "Where to stay", sub: "The five hotels and inns associated with AESHO — the heart of Olinda's hospitality.", cta: "See the 5 hotels in detail", aesho: "AESHO member" },
        eat: { tag: "Eat", title: "Where to eat", sub: "Twelve restaurants mapped across the Historic Site. Click the pins for details.", mapnote: "Approximate locations — being refined" },
        doing: { tag: "Do", title: "What to live in Olinda", sub: "Selected experiences and places to enrich the itinerary.", exp: "Experiences", places: "Places to visit", featured: "Featured", historic: "Tourist Sites, Churches & Monuments" },
        mice: { tag: "Corporate · MICE", title: "Events and groups in Olinda", body: "We are building a curated selection of corporate venues and group experiences in the Historic Site. Get in touch to learn more.", soon: "Coming soon", cta: "Tell me more" },
        contact: { tag: "Contact", title: "Let's talk", sub: "Tell us your interest and AESHO will return with the best curation for your operation.", name: "Name", email: "Email", company: "Company / Operator", phone: "Phone", interest: "Interest", send: "Send message", or: "or", whatsapp: "Institutional WhatsApp", sent: "Message received! AESHO will be in touch soon.", opts: { stay: "Accommodation", eat: "Dining", corp: "Corporate", other: "Other" } },
        buttons: { reserve: "Book on website", whatsapp: "Chat on WhatsApp", booking: "View on Booking" },
        footer: { signature: "AESHO presents: Viva Olinda", made: "Made by: OCCA — Olinda Creative Community Action", rights: "Commercial tool · Road-Show Recife 2026" },
        photo: "illustrative image",
        back: "Back to home"
      },
      es: {
        present: "AESHO presenta",
        nav: { stay: "Alojamiento", eat: "Gastronomía", do: "Experiencias", corp: "Corporativo", contact: "Contacto" },
        hero: { kicker: "Sitio Histórico de Olinda · Pernambuco · Brasil", title1: "Viva", title2: "Olinda", sub: "La vitrina de experiencias del destino más auténtico de Pernambuco, lista para tu operación.", cta: "Hablar con AESHO", scroll: "Explorar el destino" },
        unesco: { tag: "Patrimonio Mundial", since: "UNESCO · desde 1982" },
        history: { tag: "La ciudad", title: "Cuatro siglos de historia, vivos hoy", lead: "Cuenta la tradición que el nombre nació de la exclamación de Duarte Coelho ante el paisaje: “¡Oh, linda situación para construir una villa!”.", body: "Elevada a villa en 1537, con Foral enviado a D. João III, Olinda fue la primera capital de Pernambuco y uno de los grandes centros económicos y culturales del Brasil colonial." },
        geo: { tag: "Ubicación", title: "En el centro de todo", sub: "Distancias desde el Sitio Histórico de Olinda" },
        stay: { tag: "Dormir", title: "Dónde alojarse", sub: "Los cinco hoteles y posadas asociados a AESHO — el corazón de la hospitalidad de Olinda.", cta: "Ver los 5 hoteles en detalle", aesho: "Asociado AESHO" },
        eat: { tag: "Comer", title: "Dónde comer", sub: "Doce restaurantes geolocalizados en el Sitio Histórico. Haz clic en los pines para ver detalles.", mapnote: "Ubicaciones aproximadas — en ajuste" },
        doing: { tag: "Hacer", title: "Qué vivir en Olinda", sub: "Experiencias y lugares seleccionados para enriquecer el itinerario.", exp: "Experiencias", places: "Lugares para visitar", featured: "Destacado", historic: "Puntos Turísticos, Iglesias y Monumentos" },
        mice: { tag: "Corporativo · MICE", title: "Eventos y grupos en Olinda", body: "Estamos estructurando una curaduría de espacios corporativos y experiencias para grupos en el Sitio Histórico. Habla con nosotros para saber más.", soon: "Próximamente", cta: "Quiero saber más" },
        contact: { tag: "Contacto", title: "Conversemos", sub: "Cuéntanos tu interés y AESHO volverá con la mejor curaduría para tu operación.", name: "Nombre", email: "Correo", company: "Empresa / Operadora", phone: "Teléfono", interest: "Interés", send: "Enviar mensaje", or: "o", whatsapp: "WhatsApp institucional", sent: "¡Mensaje registrado! AESHO se pondrá en contacto pronto.", opts: { stay: "Alojamiento", eat: "Gastronomía", corp: "Corporativo", other: "Otro" } },
        buttons: { reserve: "Reservar en el sitio", whatsapp: "Hablar por WhatsApp", booking: "Ver en Booking" },
        footer: { signature: "AESHO presenta: Viva Olinda", made: "Hecho por: OCCA — Olinda Creative Community Action", rights: "Herramienta comercial · Road-Show Recife 2026" },
        photo: "imagen ilustrativa",
        back: "Volver al inicio"
      }
    }
  };
  window.VIVA_DATA = data;
})();
