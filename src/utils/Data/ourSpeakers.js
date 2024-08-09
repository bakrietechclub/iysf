const locationKeynote = './images/Speakers/1.KeynoteSpeakers/'
const locationHistory = './images/Speakers/5.HistoryCultureandHeritage/'
const locationEnergy = './images/Speakers/2.EnergyTransition/'
const locationBlue = './images/Speakers/3.BlueEconomy/'
const locationHumanCapital = './images/Speakers/4.HumanCapitalTechnologyandInnovation/'
const locationSustainableLiving = './images/Speakers/6.SustainableLiving/'
const locationClosingSpeech = './images/Speakers/ClosingSpeech/'

const ourSpeakers = [
  {
    session: "Keynote Speakers",
    speakers: [
      {
        id: 1,
        name: 'Gibran Rakabuming Raka',
        title: 'Elected Vice President of the Republic of',
        company: 'Indonesia ',
        description: 'Gibran Rakabuming Raka is an Indonesian politician and businessman who is the vice president-elect of Indonesia. He is also the former mayor of Surakarta. He is the eldest child of the seventh President of Indonesia, Joko Widodo. He represents the younger generation in Indonesian politics',
        image: `${locationKeynote}/GibranRakabumingRaka.jpg`
      },
      {
        id: 2,
        name: 'Anindya Novyan Bakrie',
        title: 'Founder',
        company: 'Bakrie Center Foundation',
        description: 'Anindya Novyan Bakrie is an Indonesian entrepreneur in the fields of technology, media, telecommunications, and electric vehicles. He currently serves as the CEO of the Bakrie Group. Anindya is pushing the Bakrie Group to transition to the new and renewable energy sectors. The profits and wealth the Bakrie Group has accumulated from the coal business are being invested in green energy projects and various energy transition programs. In addition, Anindya is also focused on developing the potential of young people in Indonesia through programs conducted by the Bakrie Center Foundation',
        image: `${locationKeynote}/AnindyaNovyanBakrie.png`
      },
      {
        id: 3,
        name: 'Sandiaga Uno',
        title: 'Minister of ',
        company: 'Tourism and Creative Economy of the Republic of Indonesia',
        description: 'Sandiaga Salahuddin Uno, better known as Sandiaga Uno, was appointed by President Joko Widodo as the Minister of Tourism and Creative Economy/Head of the Tourism and Creative Economy Agency on December 23, 2020. Sandiaga Uno is also known as a prominent entrepreneur with various experiences serving on the boards of directors of several companies across different sectors',
        image: `${locationKeynote}/SandiagaUno.png`
      },
      {
        id: 4,
        name: 'Najwa Shihab',
        title: '',
        company: '',
        description: '',
        image: `${locationKeynote}/NajwaShihab.png`
      },
    ],
  },
  {
    session: "History, Cultural, and Heritage",
    speakers: [
      {
        id: 1,
        name: 'Kevindra Soemantri',
        title: 'Culinary Author',
        company: '',
        description: 'Kevindra Prianto Soemantri, also known as Kevindra, is a food writer and culinary observer from and based in Indonesia. He has contributed numerous writings about food and restaurants to publications such as The Jakarta Post and Esquire',
        image: `${locationHistory}/Kevindra Soemantri.jpg`
      },
      {
        id: 2,
        name: 'Era Soekamto',
        title: 'Founder',
        company: 'Nusantara Wisdom',
        description: 'Era Soekamto, a woman born in Lombok on May 3, 1976, is known as a batik and kebaya fashion designer. Since childhood, Era was raised by a family that loved Indonesian culture and fabrics. Her works have received various awards, including Runner-Up in the Indonesia Young Designer Contest (Jakarta), Runner-Up in the Asian Young Designer Contest (Singapore), and Best Up-coming Designer by A+ Magazine.',
        image: `${locationHistory}/Era Soekamto.png`
      },
      {
        id: 3,
        name: 'Gita Wirjawan',
        title: 'Founder',
        company: 'Ancora Group',
        description: 'Gita Wirjawan is an Indonesian investment banker, entrepreneur, philanthropist, musician, and podcaster. He previously served as the Minister of Trade of the Republic of Indonesia during President Susilo Bambang Yudhoyono s Second United Indonesia Cabinet. He is the founder of Ancora Group and Ancora Foundation. He also hosts a podcast called "Endgame," where he invites notable speakers who can inspire many people, including Indonesian youth',
        image: `${locationHistory}/Gita Wirjawan.png`
      },
      {
        id: 4,
        name: 'Hilmar Farid',
        title: 'Director General of Culture',
        company: 'Ministry of Education, Culture, Research, and Technology',
        description: 'Hilmar Farid is an Indonesian historian, activist, and educator. On December 31, 2015, he was appointed as the Director General of Culture. He also has a YouTube channel called Jalin. Through this channel, Hilmar Farid is committed to a continuous effort to communicate cultural advancement through collaboration from multidisciplinary perspectives',
        image: `${locationHistory}/Hilmar Farid.jpg`
      }
    ],
  },
  {
    session: "Energy Transition",
    speakers: [
      {
        id: 1,
        name: 'Nadia Habibi',
        description: '',
        title: 'Secretary General',
        company: 'The Habibie Center',
        image: `${locationEnergy}/Nadia Habibie.JPG`
      },
      {
        id: 2,
        name: 'Ronald Sinaga',
        description: '',
        title: 'CEO',
        company: 'Helio Synar',
        image: `${locationEnergy}/Ronald Sinaga.png`
      },
      {
        id: 3,
        name: 'Fadli Rahman',
        description: '',
        title: 'Chairman',
        company: 'Youth Energy Council',
        image: `${locationEnergy}/Fadli Rahman.png`
      },
      {
        id: 4,
        name: 'Aufar Satria',
        description: 'Aufar Satria is a postgraduate student at Harvard University, bringing a wealth of experience from management consulting, government, and the private sector. As a commissioner of the Society of Renewable Energy (SRE) Indonesia, Aufar plays a pivotal role in advancing sustainable energy initiatives. He holds an MBA from the University of Cambridge and a B.Sc. from the Bandung Institute of Technology (ITB).',
        title: 'Board of Advisors',
        company: 'Society of Renewable Energy',
        image: `${locationEnergy}/AufarSatria.jpg`
      },
    ],
  },
  {
    session: "Blue Economy",
    speakers: [
      {
        id: 1,
        name: 'Bimo Soewadji',
        description: 'Bimo is a sustainability enthusiast with a background in geophysical engineering, a well-rounded commercial track record in the FMCG sector, and ESG investing experience in topics such as Regenerative Agriculture, Watershed Protection, Recycling, and Milk Sourcing. At CarbonEthics, Bimo is the Co-founder and Chief Executive Officer with the mission to restore climate balance, improve the livelihood of farmers, and create green jobs for young people.',
        title: 'CEO',
        company: 'CarbonEthics',
        image: `${locationBlue}/BimoSoewadji.JPG`
      },
      {
        id: 2,
        name: 'Janis Argeswara',
        description: '',
        title: 'Project Leader',
        company: 'Marine Megafauna Foundation',
        image: `${locationBlue}/Janisargeswara.JPG`
      },
      {
        id: 3,
        name: 'Bustar Maitar',
        description: '',
        title: 'Founder and CEO',
        company: 'Econusa Foundation',
        image: `${locationBlue}/Bustarmaitar.JPG`
      },
    ],
  },
  {
    session: "Human Capital, Technology and Innovation",
    speakers: [
      {
        id: 1,
        name: 'Tommy Tjiptadjaja',
        description: 'Tommy Tjiptadjaja is the Co-Founder and CEO of Greenhope, a company that produces oxium (a biodegradable plastic catalyst) and bioplastic materials. In addition to being the CEO of Greenhope, Tommy also serves as the Chairman of the Indonesian Association of Green Community and Industry. He has received several awards, including the Sustainable Business Awards Indonesia in 2017, through the company Greenhope, which he founded. In 2018, Tommy was listed among the Top 100 visionary leaders by Real Reader magazine.',
        title: 'Co-founder & CEO',
        company: 'Greenhope',
        image: `${locationHumanCapital}/TommyTjiptadjaja.JPG`
      },
      {
        id: 2,
        name: 'Utari Octavianty',
        description: 'Utari Octaviany is the Co-Founder and CEO of Aruna. She is also a graduate of Telkom University, where she was recognized as one of the Best Graduate Students with a degree in ICT Business Management. Utari was born in a fishing village in Balikpapan. Her uncle was a fisherman, and her parents made a living by selling fishing gear. This background inspired Utari to establish Aruna. Aruna works with more than 20,000 fishermen in Indonesia, covering over 10 commodities, operating in more than 30 locations, and serving more than 10 countries.',
        title: 'CSO',
        company: 'Aruna',
        image: `${locationHumanCapital}/Utari Octavianty.jpg`
      },
      {
        id: 3,
        name: 'Andhika Sudarman',
        description: 'Andhika Sudarman is a trailblazing entrepreneur and thought leader who has made remarkable strides in education and technology. As a distinguished graduate of Universitas Indonesia and Harvard Law School, Andhika became the first Indonesian ever to speak at the Harvard Law commencement. In 2021, he developed an innovative app that won "Indonesias Best App of 2021 by GooglePlay," marking a historic achievement as the first-ever winner from Indonesia.',
        title: 'CEO',
        company: 'Dealls',
        image: `${locationHumanCapital}/Andhikasudarman.JPG`
      },
    ],
  },
  {
    session: "Sustainable Living",
    speakers: [
      {
        id: 1,
        name: 'Bukhi Prima',
        description: '',
        title: 'Sustainable Living Practitioner',
        company: '',
        image: `${locationSustainableLiving}/Bukhi Prima.png`
      },
      {
        id: 2,
        name: 'Intan Anggita Pratiwie',
        description: 'Intan Anggita is a movement builder using fashion and communication to catalyze action for social and environmental issues. She is the co-founder of Setali Indonesia, a growing social enterprise that carries the spirit of sustainable fashion and slow living. Setali Indonesia empowers the public to reduce fashion waste by inviting people to declutter their belongings and donate unused items to be resold or recycled. Intan now does both downcycling and upcycling, and makes Textile Art as a "closed-loop" fashion recycling effort. She often holds full workshops and is a speaker at sustainable lifestyle events. Most recently, she has been working on Textile Art in collaboration with Ikat Indonesia and Didiet Maulana.',
        title: 'Co-founder',
        company: 'Setali Indonesia',
        image: `${locationSustainableLiving}/Intan Anggita.JPG`
      },
      {
        id: 3,
        name: 'Rara Sekar',
        description: 'Rara Sekar Larasati, aka hara, is an Indonesian vocalist, gardener, researcher, and cultural anthropologist. A powerful voice with a prolific academic background, Rara campaigns for food sovereignty through performances in and about nature, incorporating local food, farms, foraging, and biodiversity into her music. Rara’s solo project, hara, blends inspiration from folk with Indonesian traditional music, ambient and field recording with a focus on exploring themes of ecology, climate crisis, tradition and rituals, life, grief and collective care. Her work communicates critical environmental and social issues and is steeped in a deep research practice that honors traditional Javanese rituals and songs. Rara actively engages her audience in through community practices during her tours which incorporate wild food foraging, community garden to table cooking and community potlucks.',
        title: 'Sustainable Living Practitioner',
        company: '',
        image: `${locationSustainableLiving}/Rara Sekar.JPG`
      },
    ],
  },
  {
    session: "Closing Speech and Performance",
    speakers: [
      {
        id: 1,
        name: 'Maudy Ayunda',
        description: 'Maudy Ayunda is a multifaceted talent who began her career in entertainment at age 9 as an actor and singer, starring in Indonesias box office hits and releasing two albums. She holds a Bachelor of Arts in Philosophy, Politics, and Economics from Oxford and an MBA/MA from Stanford. In late 2023, she launched From This Island, a skincare brand that blends local botanicals with scientific innovation. Alongside her creative work, Maudy is a strong advocate for education literacy and youth issues, dedicated to making a social impact.',
        title: 'Co-Founder',
        company: 'From This Island',
        image: `${locationClosingSpeech}/Chelsea Islan.jpg`
      },
      {
        id: 2,
        name: 'Greysia Polii',
        description: 'Greysia Polii is a former Indonesian badminton athlete who has achieved remarkable success on the international stage. She won a gold medal at the Tokyo 2020 Olympics alongside her partner, Apriyani Rahayu, in the womens doubles category. This success has made her an inspiration to many, especially Indonesian youth, in achieving their dreams through hard work, discipline, and dedication.',
        title: 'Gold Medalists',
        company: 'Tokyo Olympics 2020',
        image: `${locationClosingSpeech}/Greysia Polli.JPG`
      },
      {
        id: 3,
        name: 'Chelsea Islan',
        description: '',
        title: 'SDG Mover',
        company: 'UNDP Indonesia',
        image: `${locationClosingSpeech}/Maudy Ayunda.jpg`
      }
    ],
  },
]

module.exports = ourSpeakers;
