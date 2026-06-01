export interface BlogSection {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  callout?: { heading: string; items: string[] };
  tip?: string;
  table?: { caption?: string; headers: string[]; rows: string[][] };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  keyTakeaways?: string[];
  sections?: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cruise-insurance-guide',
    title: 'Cruise Insurance Guide: Navigating the Waters of Financial Protection',
    date: '2026-01-12',
    author: 'Sarah M.',
    excerpt: 'A comprehensive guide to cruise insurance for New Zealand travellers — covering medical emergencies, trip cancellation, cabin confinement, and everything you need to know before you sail.',
    category: 'Guides',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-tips',
    title: 'Essential Cruise Insurance Tips for Kiwi Travellers',
    date: '2026-01-28',
    author: 'James H.',
    excerpt: 'Expert tips on choosing the right cruise insurance policy — what to look for, what to avoid, and how to make sure you\'re fully protected on your next voyage.',
    category: 'Tips & Advice',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-options',
    title: 'Understanding Your Cruise Insurance Options',
    date: '2026-02-10',
    author: 'Sarah M.',
    excerpt: 'From single-trip to annual policies, from domestic to worldwide cover — a comprehensive breakdown of all your cruise insurance options and which suits your travel style.',
    category: 'Coverage',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-coverage',
    title: 'What Does Cruise Insurance Actually Cover?',
    date: '2026-02-24',
    author: 'Darin B.',
    excerpt: 'A detailed breakdown of cruise insurance coverage — medical expenses, evacuation, cabin confinement, cancellation, luggage, and the less-known benefits most travellers overlook.',
    category: 'Coverage',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-rates',
    title: 'Cruise Insurance Rates: Complete Cost Guide for New Zealand Travellers',
    date: '2026-03-08',
    author: 'James H.',
    excerpt: 'Everything you need to know about cruise insurance costs — average premiums by destination, age, and policy type, plus tips to get the best rates.',
    category: 'Costs',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    slug: 'seniors-cruise-insurance-guide',
    title: 'The Complete Guide to Cruise Insurance for Seniors',
    date: '2026-03-22',
    author: 'Sarah M.',
    excerpt: 'Senior travellers face unique insurance challenges — pre-existing conditions, age limits, and higher medical risks. This guide helps Kiwis over 60 find the right cruise cover.',
    category: 'Seniors',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
  },
  {
    slug: 'pre-existing-conditions-cruise',
    title: 'Cruise Insurance with Pre-Existing Medical Conditions: What Kiwis Need to Know',
    date: '2026-04-05',
    author: 'Darin B.',
    excerpt: 'Navigating cruise insurance with pre-existing medical conditions doesn\'t have to be difficult. Here\'s everything you need to know about declaration, coverage, and finding the best policy.',
    category: 'Medical',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-vs-travel-insurance',
    title: 'Cruise Insurance vs Travel Insurance: What\'s the Difference?',
    date: '2026-04-20',
    author: 'James H.',
    excerpt: 'Many Kiwis assume their standard travel insurance covers cruise-specific risks. Discover why cruise insurance is different and why dedicated cruise cover matters.',
    category: 'Guides',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
  },
  {
    slug: 'south-pacific-cruise-guide',
    title: 'South Pacific Cruise Insurance: Your Complete Guide for Kiwi Travellers',
    date: '2026-05-10',
    author: 'Sarah M.',
    excerpt: 'Planning a South Pacific cruise? Fiji, Vanuatu, Tonga, and beyond offer incredible experiences — but the right insurance is essential given limited medical facilities across Pacific islands.',
    category: 'Destinations',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
  },

  // ─── DESTINATION & TREND ARTICLES ────────────────────────────────────────────

  {
    slug: 'china-cruise-insurance',
    title: "China Cruise Insurance: What to Know as China's Cruise Market Explodes",
    date: '2026-05-18',
    author: 'Darin B.',
    excerpt: "China just launched its largest ever domestic cruise fleet and its first homegrown cruise ship. For Kiwis booking Asian cruises that stop in Chinese ports, here's what you need to know about insurance coverage, medical facilities, and evacuation logistics.",
    category: 'Destinations',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
    keyTakeaways: [
      'China launched the Adora Magic City in 2024 — its first domestically built large cruise ship',
      "China Tourism Group's new state-owned cruise line is now the largest fleet in Asia",
      'Most NZ "Asia" rated policies cover Chinese ports — but confirm specifically before purchasing',
      'Major Chinese cities have excellent private hospitals; remote ports have limited facilities',
      'Evacuation from Chinese coastal waters to Hong Kong or Singapore is typically faster than to New Zealand',
      'Kiwi travellers can enter China visa-free for transit stops under 144 hours in designated cities',
    ],
    sections: [
      {
        h2: "China's Cruise Market: What Just Changed",
        paragraphs: [
          'In 2024, China launched the Adora Magic City — its first domestically built large cruise ship, a 135,500-tonne vessel that completed over 30 voyages in its first year of operation. Then in 2026, China Tourism Group established a new state-owned cruise line that immediately became the largest fleet in Asia by combining resources from multiple domestic operators. These developments signal that China is no longer just a port of call on Asian itineraries — it is becoming a major cruise origin and destination market in its own right.',
          'For Kiwi travellers, this matters in two ways. First, more Asian cruise itineraries are now including Chinese ports (Shanghai, Tianjin, Guangzhou, Sanya, Xiamen) as key stops rather than optional add-ons. Second, there are now Chinese cruise lines operating voyages that originate from Chinese ports and are aimed at both domestic and international cruisers, with English-language booking available. Asia-Pacific is the fastest-growing cruise region globally, and China is at the centre of that growth.',
          'Understanding what your travel insurance covers when your ship calls at a Chinese port — or when you embark from one — requires specific knowledge. The "Asia" rating most NZ insurers use covers China, but the practical implications of a medical emergency in Chinese waters or at a Chinese port are different from a medical emergency in Singapore or Japan.',
        ],
      },
      {
        h2: 'Does Your Insurance Cover Chinese Ports?',
        paragraphs: [
          'Most New Zealand cruise insurance providers rate Asia as a single region, which typically includes China, Japan, South Korea, Vietnam, Thailand, Singapore, Indonesia, the Philippines, and other Asian countries. A policy rated for "Asia" will cover you at Chinese ports and in Chinese coastal waters. However, there is an important distinction between coverage in principle and practical access to care.',
          'Before purchasing, confirm with your provider that China is specifically included in the Asia regional coverage. Most providers list the countries included in each regional tier either in the policy wording or on their website. If you are boarding a cruise in China (as opposed to merely stopping there), ensure the policy also covers your embarkation city as the journey start point.',
          'The more nuanced issue is the extent to which your emergency assistance team has established relationships with medical facilities in Chinese cities. The best providers (Cover-More, Southern Cross) operate Asia-wide emergency assistance networks that include China. Smaller or budget providers may have less robust Chinese provider networks, which can affect the speed of authorisation and quality of care coordination in an emergency.',
        ],
        callout: {
          heading: 'What to ask your insurer before a China cruise:',
          items: [
            'Is China specifically included in your Asia regional rating?',
            'Does your emergency assistance team have 24/7 Mandarin-language capability?',
            'What is your nearest evacuation facility for Shanghai / Guangzhou / Sanya?',
            'Do you have approved hospital networks in major Chinese port cities?',
          ],
        },
      },
      {
        h2: 'Medical Facilities in Chinese Port Cities',
        paragraphs: [
          "Medical infrastructure in China varies enormously by location. Shanghai, Beijing, Guangzhou, and Shenzhen all have world-class international hospitals — Shanghai United Family Hospital, Raffles Medical, and others — with English-speaking staff and direct billing relationships with major insurers. A medical event in Shanghai can be managed efficiently with the right insurer support network in place.",
          'The picture is different at secondary Chinese ports and island destinations like Sanya (Hainan Island), Xiamen, or Tianjin. Hospital facilities in these cities are functional but may not have English-speaking specialists or direct billing with foreign insurers. Communication is a genuine challenge — having an emergency assistance team with Mandarin speakers who can liaise with the hospital on your behalf is significantly more valuable in these locations than in major metropolitan ports.',
          'For Kiwis on Asian cruises that include Chinese ports, the practical risk management is straightforward: ensure you have unlimited medical cover, choose a provider with a strong Asia-Pacific emergency assistance network, and save the emergency number before you board. The medical facilities in major Chinese cities are better than many people expect — the challenge is navigation and communication, not the absence of competent care.',
        ],
      },
      {
        h2: 'Evacuation from Chinese Waters',
        paragraphs: [
          "Medical evacuation from a cruise ship in Chinese coastal waters follows the same principles as elsewhere — the emergency assistance team coordinates helicopter or vessel transfer to the nearest appropriate onshore facility. China's coastal areas are well serviced by both maritime and air emergency services, particularly along the popular eastern seaboard (Shanghai, Qingdao, Tianjin).",
          "For itineraries that include time in the South China Sea or near island destinations, evacuation to Hong Kong is often the fastest route to internationally equipped trauma and cardiac care. Hong Kong's Queen Mary Hospital and Ruttonjee Hospital have internationally recognised standards and English-language capability. For less time-critical situations, evacuation to major mainland Chinese hospitals in Guangzhou or Shenzhen may be more practical.",
          'Medical repatriation from China to New Zealand involves a flight of 11–13 hours. A medically supervised air ambulance repatriation from China could cost $80,000–$120,000. This reinforces the core message: unlimited medical and evacuation cover is not optional for any Asian cruise itinerary that includes Chinese ports.',
        ],
      },
      {
        h2: 'Travel Advisories and Visa Considerations',
        paragraphs: [
          "New Zealand's Ministry of Foreign Affairs and Trade (MFAT) rates China at Exercise Normal Safety Precautions as of mid-2026 — the same baseline level as most Western European countries. There are no current blanket restrictions on travel to the major cruise port cities of Shanghai, Tianjin, Guangzhou, or Sanya. Travellers should check MFAT's SafeTravel website before departure for any updated advisories.",
          "An important practical note for Kiwis on cruise itineraries: China has a transit visa exemption policy that allows citizens of New Zealand and many other countries to enter China without a visa for port calls of up to 144 hours (6 days) in designated cities including Shanghai, Tianjin, and Guangzhou. This means shore excursions at Chinese ports are straightforward for most itineraries without pre-arranged visas. Confirm this with your cruise line before departure as policies can change.",
          'Cruise insurance does not typically cover costs arising from detention by authorities, visa overstays, or activities prohibited under local law. Being aware of local regulations — particularly around photography near government buildings — is relevant common sense for any Chinese port stop.',
        ],
        tip: "Check MFAT SafeTravel (safetravel.govt.nz) within 48 hours of departure to confirm no new advisories have been issued for your specific Chinese ports of call.",
      },
      {
        h2: 'Getting the Right Policy for a China Cruise',
        paragraphs: [
          "For Kiwis embarking on an Asian cruise that includes Chinese ports, the core requirements are the same as for any international cruise: unlimited emergency medical, helicopter evacuation and fixed-wing repatriation, cabin confinement, missed port cover, and 24/7 emergency assistance. The China-specific differentiator is the quality of the emergency assistance network in-country.",
          "Cover-More and Southern Cross both operate strong Asia-Pacific emergency assistance networks with established Chinese hospital relationships and multilingual support. 1Cover's emergency assistance covers Asia broadly. For a cruise that includes significant time in Chinese ports — as opposed to a brief stop as part of a wider Asian itinerary — it is worth calling the provider before purchasing to specifically confirm their Chinese network capability.",
          'Purchase your policy as soon as you make your booking deposit. Cancellation cover for your full trip cost — cruise, flights, hotels — applies from the policy purchase date. For popular Asian itineraries that sell out quickly and may involve non-refundable deposits, this early purchase protection is particularly important.',
        ],
      },
    ],
  },

  {
    slug: 'european-river-cruise-insurance',
    title: 'European River Cruise Insurance: Rhine, Danube and Seine Guide',
    date: '2026-05-22',
    author: 'James H.',
    excerpt: "European river cruises with AmaWaterways, Viking, and Scenic are booming among Kiwi travellers. But river cruise ships have different risks to ocean vessels — smaller medical facilities, multi-country itineraries, and the very real risk of flooding disruption. Here's what your insurance needs to cover.",
    category: 'Destinations',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
    keyTakeaways: [
      'River cruise ships carry 100–190 passengers vs 3,000+ on ocean ships — medical facilities are minimal',
      'A typical 8-day Rhine cruise visits Germany, France, Netherlands, and Switzerland — 4 healthcare systems',
      'River flooding is a genuine claim event — itinerary changes or cancellations trigger trip disruption cover',
      'Most NZ "Europe" rated policies cover all EU countries, UK, and Switzerland under one premium',
      'AmaWaterways and Viking dominate the Kiwi river cruise market — both recommend third-party insurance',
      'Medical evacuation from a river cruise is faster than ocean — rarely more than 30 minutes from a hospital',
    ],
    sections: [
      {
        h2: 'Why River Cruises Are Different from Ocean Cruises',
        paragraphs: [
          "River cruising has undergone a transformation over the past decade. What was once a niche product for older European travellers has become one of the fastest-growing holiday formats globally, with AmaWaterways, Viking River Cruises, and Scenic all reporting strong demand from Australasian markets. For Kiwi travellers, a European river cruise offers an immersive way to experience multiple countries in one journey — waking up in Amsterdam, dining in Cologne, and exploring Strasbourg's Christmas markets within a single week.",
          "But river cruise ships are fundamentally different from ocean cruise ships in ways that directly affect your insurance needs. An ocean ship like a Royal Caribbean vessel carries 3,000–5,000 passengers and has a full hospital with surgeons, intensive care capacity, and specialist equipment. A river cruise ship carries 100–190 passengers and has a first aid station staffed by a trained nurse — not a doctor. The gap in onboard medical capability between the two formats is significant.",
          'The geographical context is also different. On a river cruise, you are almost always within 20–30 minutes of a major European city and its hospital system. This makes the evacuation logistics faster and often less expensive than a South Pacific or Asian ocean cruise. But it also means the insurance calculation is different — the primary risk is not the cost of maritime evacuation, but the cost of hospitalisation across multiple European countries and the disruption caused by the unique operational risks of river cruising itself.',
        ],
      },
      {
        h2: 'Multi-Country Coverage: What Your Policy Must Include',
        paragraphs: [
          'A standard 8-day Rhine cruise from Amsterdam to Basel visits the Netherlands, Germany, France (Alsace), and Switzerland — four separate countries with four different healthcare systems and billing practices. A Danube cruise from Budapest to Amsterdam adds Hungary, Austria, Slovakia, and Germany. For insurance purposes, you need a policy that provides consistent, equivalent coverage in every country your ship visits.',
          'Most New Zealand travel insurers use a broad "Europe" regional rating that covers all EU member states, plus the UK, Switzerland, and Norway under a single tier. This means a policy rated for "Europe" will cover you in every country on a typical Rhine, Danube, Seine, Douro, or Moselle river cruise without needing to list individual countries. Confirm this with your provider before purchasing — some policies require you to list every country, and missing one can create coverage gaps at ports in that country.',
          'The practical implication of multi-country coverage becomes most apparent in a medical emergency. If you have a cardiac event in Germany, you will be treated in a German hospital and billed at German rates. If you have a fall in Switzerland, Swiss private healthcare is among the most expensive in Europe. Your emergency assistance team manages the authorisation and billing across all countries — ensuring you receive care without upfront payment and that costs are settled directly with the hospital.',
        ],
        table: {
          caption: 'European River Cruise Routes: Countries Visited',
          headers: ['Route', 'Countries Visited', 'Typical Duration'],
          rows: [
            ['Rhine (Amsterdam to Basel)', 'Netherlands, Germany, France, Switzerland', '7–8 days'],
            ['Danube (Budapest to Amsterdam)', 'Hungary, Austria, Slovakia, Germany, Netherlands', '15 days'],
            ['Seine (Paris round trip)', 'France only', '7–8 days'],
            ['Douro (Porto round trip)', 'Portugal, Spain', '7–8 days'],
            ['Moselle and Rhine', 'Germany, France, Luxembourg, Netherlands', '8–14 days'],
            ['Elbe (Prague to Berlin)', 'Czech Republic, Germany', '7–8 days'],
          ],
        },
      },
      {
        h2: 'Onboard Medical Facilities: A Critical Difference',
        paragraphs: [
          'The most significant insurance-relevant difference between river and ocean cruising is the onboard medical capability. River cruise ships are not designed to function as medical facilities — they have a trained first aider and basic first aid supplies, but no doctor, no surgical capability, and no ICU. Any medical event beyond basic first aid requires evacuation to a shore hospital. This is actually fine from an insurance perspective — European shore hospitals are excellent and generally accessible within 20–30 minutes — but it means your medical cover must include shore hospital costs, not just onboard treatment.',
          'Evacuation from a river cruise is managed differently from ocean evacuation. Helicopter transfer is used for life-threatening emergencies; ambulance transfer via the gangway is used for less acute events. The costs are generally lower than ocean evacuation — a helicopter in Europe costs $5,000–$20,000 versus $20,000–$60,000 in the South Pacific — but the frequency may be slightly higher because the lack of onboard medical capability means more events require shore hospital admission.',
          'For Kiwis with pre-existing cardiovascular conditions, the river cruise environment deserves careful thought. On a river ship, staff can perform CPR and use a defibrillator, but nothing more. Getting to a European hospital within the golden hour is typically achievable given the geography — but this assumes the ship is not in a remote river section and that the emergency is recognised quickly. Ensure your emergency assistance team is briefed on your conditions at the time you purchase your policy.',
        ],
      },
      {
        h2: 'Flooding, Low Water, and Itinerary Disruption',
        paragraphs: [
          "River cruising has a risk that simply does not exist on ocean voyages: weather-related itinerary disruption. River water levels fluctuate with rainfall and snowmelt, and when levels are too low or too high, ships cannot operate on certain sections of river. The Rhine experienced severe low water conditions in 2022 and 2023, forcing cruise lines to substitute bus transport for sections where ships could not navigate. The Danube has experienced spring flooding that pushed itinerary changes multiple times in recent years.",
          "When a flooding or low water event forces your ship to change its itinerary — skipping ports, substituting bus transport, or in severe cases cancelling the cruise — you have a trip disruption or cancellation event. Whether your insurance covers it depends on the specific trigger and policy wording. Most comprehensive policies cover itinerary changes caused by events beyond the control of the cruise line, which typically includes extreme flooding or drought conditions. Check your specific policy wording for the phrase 'unforeseen weather event' or 'natural disaster' in the trip disruption section.",
          "Trip curtailment cover is equally relevant. If flooding forces the cruise to terminate early and you are flown home from Frankfurt rather than disembarking in Amsterdam as planned, the cost of rebooking flights and any unused prepaid tour costs are covered under curtailment. Keep all documentation from the cruise line describing the reason for any itinerary changes — you will need this for any claim.",
        ],
        callout: {
          heading: 'River cruise disruption: what is typically covered',
          items: [
            'Itinerary changes caused by extreme flooding or low water (unforeseen weather event)',
            'Additional transport costs if the cruise terminates early at an unplanned port',
            'Unused prepaid shore excursion costs if ports are skipped involuntarily',
            'Emergency accommodation if the cruise is suspended',
            'Alternative transport home if the cruise ends at an unplanned location',
          ],
        },
      },
      {
        h2: 'Costs and What to Expect from Your Premium',
        paragraphs: [
          'European river cruise insurance typically costs less than equivalent ocean cruise cover because evacuation distances and associated costs are lower. A healthy adult under 65 on a 14-day European river cruise can expect to pay $280–$420 per person for comprehensive cover. For travellers aged 65–74, expect $420–$600 per person; for 75 and above, $550–$800 or more depending on pre-existing conditions.',
          "The 'Europe' regional rating generally applies to all river routes — Rhine, Danube, Seine, Douro, Moselle — because all are within European healthcare systems. Some providers have a 'Mediterranean and Europe' tier that covers both ocean Mediterranean cruises and river routes at the same premium. Others separate them. Confirm which tier applies to your specific departure country and itinerary when getting a quote.",
          "Trip cancellation cover deserves attention for river cruises because the bookings often involve significant non-refundable elements: the cruise itself (AmaWaterways and Viking both enforce strict cancellation policies, often 100% non-refundable from 60–90 days out), international flights from New Zealand ($2,500–$5,000 per person), and pre/post accommodation in Amsterdam or Budapest. Total non-refundable exposure for a couple on a 14-day Danube cruise easily reaches $12,000–$20,000. Ensure your cancellation limit matches this total.",
        ],
      },
    ],
  },

  {
    slug: 'middle-east-cruise-insurance',
    title: 'Middle East Cruise Insurance: Dubai, Abu Dhabi and the Arabian Gulf',
    date: '2026-05-26',
    author: 'Sarah M.',
    excerpt: "The Arabian Gulf has emerged as one of the most exciting new cruise destinations, with itineraries covering Dubai, Abu Dhabi, Doha, Bahrain, and Oman. For Kiwis, it's genuinely different insurance territory — here's what the region's unique conditions mean for your cover.",
    category: 'Destinations',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    keyTakeaways: [
      "Celestyal's 7-night Iconic Arabia cruise visits Dubai, Abu Dhabi, Doha, Bahrain, and Oman",
      'Dubai and Abu Dhabi have world-class private hospitals — better-equipped than many European ports',
      'Middle East travel insurance covers UAE, Qatar, Bahrain, and Oman under most NZ policies',
      'Temperatures regularly exceed 45°C in summer — a genuine cardiac and heat stroke risk',
      'MFAT advises Exercise Normal Safety Precautions for UAE and Qatar as of mid-2026',
      'Alcohol restrictions in some ports affect social norms but not your insurance coverage',
    ],
    sections: [
      {
        h2: "The Arabian Gulf: One of Cruising's Fastest Growing Destinations",
        paragraphs: [
          "Five years ago, a cruise itinerary centred on Dubai and the Arabian Gulf would have been an unusual choice for Kiwi travellers. Today it represents one of the most rapidly growing cruise segments in the Asia-Pacific source market. Celestyal Cruises launched its Iconic Arabia product in 2026 — a 7-night itinerary aboard the Celestyal Discovery calling at Dubai, Abu Dhabi, Sir Bani Yas Island, Doha, Ras Al Khaimah, Khasab (Oman), and Bahrain. The voyage offers a genuine immersion in Gulf Arab culture that a land-based stay in Dubai cannot replicate.",
          "The broader Arabian Gulf cruise market has grown significantly. Multiple major cruise lines now base ships in Dubai for the northern hemisphere winter season (November to April) when the Gulf's temperatures are genuinely pleasant — 22–30°C, dry, and sunny. For Kiwis travelling during the Australasian summer, a Dubai-based cruise in December or January is particularly appealing.",
          "From an insurance perspective, the Middle East region presents a genuinely different risk profile from the South Pacific or European destinations most Kiwis default to. Understanding the specific considerations — medical infrastructure quality, travel advisory complexity, heat as a health factor, and the regional political landscape — is essential for confident cruise planning in this region.",
        ],
      },
      {
        h2: 'Medical Infrastructure in the UAE and Gulf States',
        paragraphs: [
          "One of the most important things Kiwi travellers should know about the UAE: Dubai and Abu Dhabi have some of the best private healthcare infrastructure outside of Western Europe. Hospitals like Mediclinic City Hospital in Dubai, Cleveland Clinic Abu Dhabi, and Aster Hospital operate to international standards with English-speaking staff, direct billing relationships with major insurers, and genuine specialist capability. A medical event in Dubai or Abu Dhabi is logistically less complex than a comparable event in many developing-world cruise destinations.",
          "Qatar (Doha) and Bahrain have similarly strong private healthcare sectors, driven by large expatriate populations that demand international-standard care. Sidra Medicine in Doha and the American Mission Hospital in Bahrain are examples of facilities that provide excellent care and are familiar with international insurance billing. Oman (Khasab) is the outlier — facilities in the Musandam peninsula where most cruises stop are more limited, and serious events may require transfer to Muscat or Dubai.",
          "The practical implication: the quality of care at the primary ports — Dubai, Abu Dhabi, Doha — is higher than travellers often expect. Your emergency assistance team can access established hospital networks in the UAE and Qatar. Unlimited medical cover is still essential — private hospital rates in Dubai are comparable to Australia — but the logistics of care are generally smoother than in less-developed destinations.",
        ],
      },
      {
        h2: 'Travel Advisories: Understanding the Regional Context',
        paragraphs: [
          "New Zealand's Ministry of Foreign Affairs and Trade (MFAT) maintains travel advisories for the Middle East that require careful reading. The UAE and Qatar are rated at Exercise Normal Safety Precautions — the same baseline level as most Western countries. Bahrain is rated at Exercise Increased Caution due to occasional civil unrest, though the main port areas used by cruise ships are generally not affected. Oman rates at Exercise Normal Safety Precautions.",
          "The complication for insurance purposes is the broader Middle East region. Yemen, parts of Iraq, and some areas of Lebanon and Syria have active conflict and Do Not Travel advisories. Your insurance policy's regional rating typically uses a geographic definition of Middle East that may include these higher-risk areas alongside the Gulf states. Carefully check that your specific itinerary — and only the specific countries you are visiting — is within your policy's covered destinations.",
          "Most NZ providers offer a Middle East or Middle East and Africa regional tier that covers the Gulf states. Some providers issue policies that cover the UAE, Qatar, Bahrain, and Oman specifically. Confirm the geographic boundary of your policy's Middle East coverage before purchasing, and ensure every port on your itinerary is within the covered zone.",
        ],
        tip: "Save MFAT's SafeTravel app on your phone before departing. It provides real-time travel advisories and emergency contact details for NZ consular assistance in UAE, Qatar, and Oman.",
      },
      {
        h2: 'Heat as a Health Risk: What Cruisers Need to Know',
        paragraphs: [
          "The Arabian Gulf in summer (May to September) reaches temperatures of 40–48°C with high humidity — conditions that are genuinely dangerous for vigorous outdoor activity. Most cruise lines avoid the Gulf during peak summer precisely for this reason, operating their Arabian Gulf itineraries between November and April when temperatures are comfortable. If you are booking a Gulf cruise, confirm the departure months and ensure you are not sailing during the extreme summer heat period.",
          "Even in the comfortable November to April window, temperatures can reach 32–38°C during shore excursions — warmer than most Kiwis are accustomed to. For travellers with cardiovascular conditions or respiratory issues, heat stress is a genuine medical risk. Dehydration happens faster than expected when combined with physical activity on shore excursions. A senior traveller who tours Dubai's Old Souk in March afternoon heat for three hours faces a meaningfully elevated cardiac risk.",
          "From an insurance perspective, heat-related illness — heat stroke, heat exhaustion, severe dehydration — is covered as an acute medical event under standard unlimited medical cover. Declare any conditions that make you more susceptible to heat during the medical assessment. Plan shore excursions in the cooler morning hours, carry adequate water, and use the ship's air conditioning as a refuge during the hottest part of the day.",
        ],
      },
      {
        h2: 'Getting the Right Policy for a Gulf Cruise',
        paragraphs: [
          "For a standard 7-night Arabian Gulf cruise visiting Dubai, Abu Dhabi, Doha, Bahrain, and Oman, the core insurance requirements are the same as for any international cruise: unlimited emergency medical, evacuation and repatriation, cabin confinement, missed port cover, cancellation, and 24/7 emergency assistance. The regional rating will be Middle East or Worldwide depending on the provider.",
          "Expect to pay $200–$360 per person for a healthy adult under 65 on a 7-night Gulf cruise. For travellers aged 65–74, $300–$480; for 75 and above, $420–$650 before any pre-existing condition loading. The Middle East premium is slightly higher than equivalent South Pacific cover due to higher private healthcare costs in the UAE, but generally lower than European premiums.",
          "One specific benefit worth checking: formal attire cover. Gulf cruises often include formal dinner nights, and many Kiwis pack formalwear specifically for these occasions. Comprehensive cruise policies include cover for damage to or loss of formal attire — typically $1,000–$1,500 per person. For a trip where formal wear is genuinely expected, this benefit is worth having.",
        ],
        callout: {
          heading: 'Arabian Gulf cruise: insurance checklist',
          items: [
            'Confirm UAE, Qatar, Bahrain, and Oman are all within your policy geographic coverage',
            "Check MFAT advisories for every port on your itinerary before departure",
            'Declare cardiovascular conditions and mention heat sensitivity during your medical assessment',
            'Ensure cancellation cover matches your full trip cost including international flights',
            "Save your emergency assistance number with the UAE's +971 country code already entered",
          ],
        },
      },
    ],
  },

  {
    slug: 'asia-cruise-insurance-guide',
    title: 'Asia Cruise Insurance Guide: Japan, Vietnam, Thailand, Indonesia and Beyond',
    date: '2026-06-01',
    author: 'James H.',
    excerpt: "Asia is the fastest-growing cruise market in the world, and more Kiwis than ever are choosing Asian itineraries. Norwegian Cruise Line just opened 2027–28 Asian Pacific bookings covering Japan, South Korea, Thailand, Vietnam, and Indonesia. Medical costs, evacuation logistics, and insurance needs vary dramatically across the region — here's what you need to know.",
    category: 'Destinations',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80',
    keyTakeaways: [
      'Asia-Pacific is the fastest-growing cruise region — Norwegian, Royal Caribbean and MSC are all expanding Asian sailings',
      'Medical costs vary enormously: Japan is comparable to Europe; Thailand is affordable; Indonesia is variable by location',
      'A 14-day Asian cruise visiting Japan, South Korea, Vietnam, and Thailand visits 4 very different healthcare systems',
      'Most NZ "Asia" rated policies cover the full region under one premium',
      'Typhoon season (June to November) affects northern Asian ports — check disruption cover',
      'Japan has excellent hospitals but they operate primarily in Japanese — emergency assistance network quality matters most here',
    ],
    sections: [
      {
        h2: "Asia-Pacific Cruising: The World's Fastest Growing Market",
        paragraphs: [
          "The numbers tell a clear story. Asia-Pacific is the fastest-growing cruise region globally, and 2026 marks a turning point with multiple major lines significantly expanding their Asian capacity. Norwegian Cruise Line opened 2027–28 Asian Pacific bookings featuring Japan, South Korea, Thailand, Vietnam, Indonesia, and Australia. Royal Caribbean has ships based in Singapore and Hong Kong year-round. MSC Cruises is expanding into Chinese home-port operations. The global cruise market expects Asia-Pacific to represent 20–25% of total passengers by 2030, up from around 15% today.",
          "For Kiwi travellers, Asian cruise itineraries offer a compelling proposition: exotic destinations that would take weeks to cover independently by land can be experienced in a single 14–21 day voyage, with the comfort and convenience of a large ship. A typical 14-day Norwegian or Royal Caribbean Asian cruise might take in Singapore, Vietnam, Japan, South Korea, and Shanghai — covering more ground in two weeks than most travellers manage in two months of independent travel.",
          "The insurance implications of this geographic diversity are significant. Japan, Vietnam, Thailand, and Indonesia have dramatically different healthcare systems, medical costs, and practical accessibility to care. Understanding what each country means for your insurance needs — and ensuring your policy adequately covers the full breadth of the itinerary — is essential preparation for any Asian cruise.",
        ],
      },
      {
        h2: 'Medical Costs Across Asia: What to Expect by Country',
        paragraphs: [
          "Japan is the most expensive country in Asia for medical care. Japanese hospitals operate to a very high standard with advanced diagnostic equipment, specialist capability, and rigorous infection control. The costs are comparable to Australian or European private healthcare — a hospital admission in Tokyo can cost $500–$1,500 per day, and specialist procedures are priced accordingly. The additional complexity is language: Japanese hospitals operate primarily in Japanese, and English-speaking medical staff are not guaranteed outside major international hospitals in Tokyo, Osaka, and Yokohama.",
          "Thailand sits at the other end of the spectrum. Bangkok's international hospitals — Bumrungrad, Bangkok Hospital, Samitivej — are among the best-value high-quality medical facilities in the world. English-speaking, internationally accredited, with direct billing relationships with most major insurers. Medical tourism to Thailand is significant precisely because quality of care is excellent at a fraction of the cost of equivalent Australian or European treatment.",
          "Vietnam, Indonesia, and the Philippines represent a middle ground. Major cities (Ho Chi Minh City, Jakarta, Manila) have international-quality private hospitals. Secondary ports and island destinations (Ha Long Bay cruise zones, Bali, remote islands) have significantly more limited facilities — basic stabilisation is possible, but serious events require evacuation to a major city or to Singapore.",
        ],
        table: {
          caption: 'Asian Cruise Destinations: Medical Cost and Facility Guide',
          headers: ['Country / Port', 'Medical Cost Level', 'Facility Quality', 'Evacuation Hub'],
          rows: [
            ['Japan (Tokyo, Osaka, Yokohama)', 'High — comparable to Europe', 'Excellent', 'Local hospital'],
            ['South Korea (Busan, Jeju)', 'High–Medium', 'Excellent', 'Local hospital'],
            ['Singapore (home port)', 'High', 'World-class', 'Local hospital'],
            ['Thailand (Bangkok / Laem Chabang)', 'Low–Medium', 'Excellent internationally', 'Bangkok international'],
            ['Vietnam (Ho Chi Minh City)', 'Low–Medium', 'Good in major cities', 'HCMC international'],
            ['Vietnam (Ha Long Bay)', 'Low', 'Limited', 'Hanoi (1–2 hrs)'],
            ['Indonesia (Bali)', 'Low–Medium', 'Good in tourist areas', 'BIMC Bali or Singapore'],
            ['Indonesia (Remote islands)', 'Very Low', 'Very limited', 'Singapore (3–4 hrs)'],
            ['Philippines (Manila)', 'Low–Medium', 'Good in Manila', 'Manila hospital'],
          ],
        },
      },
      {
        h2: 'Evacuation from Asian Waters',
        paragraphs: [
          "Evacuation logistics from Asian cruise ships differ significantly from South Pacific or European scenarios. The proximity to major Asian cities — and their well-equipped hospitals — means evacuation distances are generally shorter than in the remote South Pacific. Singapore, Hong Kong, and Bangkok serve as regional medical hubs that can receive evacuees from much of Southeast Asia within 2–4 hours by fixed-wing aircraft.",
          "Japan presents a different scenario. Medical care in Japan is excellent, but the language barrier means the evacuation decision is often between treating locally (where care is high quality but expensive and communication-intensive) versus repatriating to New Zealand (a 10–12 hour flight). Your emergency assistance team's Japanese network quality matters here — an insurer with established Tokyo hospital relationships and Japanese-speaking case managers can manage a Japanese medical event more effectively than one without.",
          "Indonesia is the highest-risk evacuation scenario on a typical Asian cruise. Ships visiting remote Indonesian islands (Komodo, Raja Ampat, Lombok) may be 2–4 hours from the nearest significant medical facility. In these areas, having an insurer with a strong regional evacuation network — including small fixed-wing and helicopter capability in remote Indonesian areas — is genuinely more valuable than for closer-to-shore ports.",
        ],
      },
      {
        h2: 'Weather and Seasonal Considerations',
        paragraphs: [
          "Asian cruise itineraries are heavily influenced by weather seasons. The South and Southeast Asian monsoon season (June to November) brings typhoons to the Philippines, southern Japan, and Taiwan. Typhoon Haikui forced multiple cruise itinerary changes in Japanese and Taiwanese ports; subsequent seasons have seen similar disruptions. Booking an Asian cruise during typhoon season requires specific attention to trip disruption and missed port cover.",
          "Most cruise lines schedule their Asian itineraries to avoid the worst of typhoon season — the peak Australasian market for Asian cruises is the northern hemisphere winter (November to March) when Asian weather is at its most stable and pleasant. Japanese cherry blossom season (late March to mid-April) creates extremely high demand for Japan-focused itineraries and correspondingly higher cabin prices and more restricted cancellation policies.",
          "Volcanic activity is a lesser-known but real disruption risk on Indonesian itineraries. Indonesia has more active volcanoes than any other country, and eruptions can force port cancellations or itinerary changes. This falls under the natural disaster clause in most trip disruption policies. Ensure your policy covers natural disaster-related itinerary changes, not just weather disruptions.",
        ],
      },
      {
        h2: 'Choosing the Right Asian Cruise Insurance Policy',
        paragraphs: [
          "For any Asian cruise itinerary, the standard requirements apply: unlimited emergency medical, evacuation and repatriation, cabin confinement, missed port cover, trip cancellation, and 24/7 emergency assistance. The Asia-specific priorities are the quality of the insurer's regional emergency network — particularly for Japan and remote Indonesia — and the breadth of the geographic coverage to ensure every country on the itinerary is included.",
          "Cover-More and Southern Cross both maintain strong Asia-Pacific emergency networks. Cover-More has particular depth in Southeast Asia. Southern Cross's no-age-limit policy is especially relevant for older travellers on Asian cruises who might face age-related exclusions with other providers.",
          "For a standard 14-day Asian cruise, expect to pay $260–$450 per person for comprehensive cover for a healthy adult under 65. Senior travellers aged 65–74 can expect $380–$580 per person before any pre-existing condition loading. Asia is priced between South Pacific (cheaper) and Europe (more expensive) for most providers, reflecting the mix of affordable Southeast Asian healthcare and expensive Japanese and South Korean medical systems.",
        ],
        callout: {
          heading: 'Before your Asian cruise: insurance preparation checklist',
          items: [
            "Confirm every country on your itinerary is within your policy's Asia regional coverage",
            'Ask your insurer about their Japan-specific hospital network and English-speaking capability',
            'Check typhoon season advisories if sailing June to November in East or Southeast Asia',
            'Declare pre-existing conditions — particularly cardiovascular — for accurate loading',
            'Save the emergency assistance number with the relevant country code already dialled in',
          ],
        },
      },
    ],
  },

  {
    slug: 'river-cruise-vs-ocean-cruise-insurance',
    title: "River Cruise vs Ocean Cruise Insurance: What's Different and Why It Matters",
    date: '2026-06-01',
    author: 'Sarah M.',
    excerpt: "Booked a European river cruise instead of an ocean voyage this year? The insurance considerations are meaningfully different — from onboard medical capabilities to itinerary disruption risks unique to river travel. Here's how to approach insurance for each cruise type.",
    category: 'Guides',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&q=80',
    keyTakeaways: [
      'River cruise ships carry 100–190 passengers and have minimal medical facilities — no doctor onboard',
      'Ocean cruise ships carry 500–5,000+ passengers with a full ship hospital and medical team',
      'River cruises have lower evacuation costs — rarely more than 30 minutes from a shore hospital',
      'River cruises have unique disruption risks: flooding, low water levels, and bridge clearance issues',
      'Both formats require cruise-specific insurance — standard travel insurance has critical gaps for both',
      'River cruise premiums are typically 15–25% lower than equivalent ocean cruise cover',
    ],
    sections: [
      {
        h2: 'The Core Differences Between River and Ocean Cruising',
        paragraphs: [
          "River cruises and ocean cruises appeal to similar travellers — those who enjoy immersive, multi-destination itineraries with a moving home base. But beyond the surface similarity, they are fundamentally different products with different operational characteristics, risk profiles, and therefore different insurance needs.",
          "An ocean cruise ship is a floating resort. Royal Caribbean's Icon of the Seas carries 7,600 passengers and crew, has a full hospital with surgeons, emergency procedures, and intensive care capability, and operates in open international waters far from shore. A Viking river ship carries 190 passengers, has a first-aid trained staff member and a basic medical kit, and operates on a European river where the nearest hospital is typically 10–20 minutes away by ambulance.",
          "Neither format is inherently more dangerous from an insurance standpoint — the risks are simply different in kind and magnitude. Ocean cruising carries higher per-incident evacuation costs due to maritime distance; river cruising carries higher frequency of smaller disruption events due to weather and operational constraints. Understanding this distinction shapes which insurance benefits matter most for each format.",
        ],
      },
      {
        h2: 'Medical Cover: What Differs?',
        paragraphs: [
          "For ocean cruises, onboard medical treatment is a significant component of the insurance calculation. Ship hospitals on large ocean vessels can provide meaningful treatment — stabilisation, minor procedures, IV medication, monitoring — before evacuation if needed. These services are charged at private rates and can cost $2,000–$10,000 before any evacuation is involved. Unlimited medical cover for onboard treatment is essential.",
          "For river cruises, there is essentially no onboard medical treatment to insure. The first-aid capability on a river ship means staff can provide initial stabilisation, but anything beyond basic first aid goes straight to a shore hospital. Your medical cover is primarily for shore hospitalisation, which may involve multiple countries on a typical European river itinerary.",
          "The practical difference is that on a river cruise, your emergency assistance team spends less time coordinating maritime evacuation logistics and more time managing hospital admission and billing across multiple European countries. The quality of their European hospital network — and their ability to communicate with German, French, Swiss, and Dutch hospitals within a single week — matters more on a river cruise than their helicopter evacuation logistics.",
        ],
      },
      {
        h2: 'Evacuation: Distance and Cost',
        paragraphs: [
          "Ocean cruise evacuation costs are the headline risk for most cruisers. A helicopter transfer from a South Pacific cruise ship to a New Zealand or Australian hospital costs $20,000–$60,000. A fixed-wing air ambulance from Europe or Asia adds another $80,000–$150,000. The unlimited medical and evacuation cover on a cruise policy exists primarily to manage this risk.",
          "River cruise evacuation costs are meaningfully lower. In Europe, an emergency river cruise evacuation typically involves an ambulance to the ship's gangway, a transfer to a local hospital, and in serious cases a fixed-wing repatriation to New Zealand. The ambulance transfer costs $500–$2,000; the repatriation from Europe remains $60,000–$120,000. But the intermediate helicopter or maritime evacuation step that drives the high costs in remote ocean settings simply does not exist on a European river.",
          "This difference in evacuation cost is one reason river cruise insurance premiums are typically 15–25% lower than equivalent ocean cruise cover. The underlying medical and repatriation risk is comparable, but the maritime evacuation element — the largest driver of catastrophic claim costs in ocean cruising — is significantly reduced in the river setting.",
        ],
      },
      {
        h2: 'Unique Disruption Risks on River Cruises',
        paragraphs: [
          "River cruises have disruption risks that simply do not exist on ocean voyages. Water level fluctuations are the primary operational challenge — too high (flooding) prevents safe navigation under bridges; too low (drought-driven) leaves ships unable to navigate shallower sections. Both have occurred with increasing frequency on European rivers in recent years.",
          "The Rhine experienced severe low water levels in 2022 and 2023, forcing cruise lines to substitute bus transport for sections of the river where ships could not navigate. The Danube has experienced spring flooding that pushed itinerary changes multiple times in recent years. These events directly affect the cruising experience — instead of waking up in a new port each morning, passengers may find themselves on a bus while the ship repositions.",
          "From an insurance perspective, these weather-driven itinerary changes are typically covered as trip disruption due to unforeseen weather events on comprehensive policies. Reimbursement of unused prepaid shore excursions, alternative transport costs if the cruise terminates early, and compensation for the diminished cruise experience are all potentially covered. The key is documentation — get written confirmation from the cruise line describing the reason for any itinerary change.",
        ],
        callout: {
          heading: 'River cruise disruption risks not present on ocean cruises:',
          items: [
            'Flooding: water levels too high for safe passage under fixed bridges',
            'Low water: drought conditions leaving ships unable to navigate shallow sections',
            'Bridge clearance: larger ships on some rivers cannot pass certain bridges at high water',
            'Ice: Danube winter sailings can be affected by ice formation',
            'Lock failures: engineering failures at river locks can strand ships for hours or days',
          ],
        },
      },
      {
        h2: 'Which Policy Approach Is Right for Each Cruise Type?',
        paragraphs: [
          "For both river and ocean cruises, cruise-specific insurance is essential — standard travel insurance lacks cabin confinement, missed port departure, and shore excursion cancellation benefits that both formats can trigger. The difference is in prioritisation: for ocean cruises, medical and evacuation cover is the most critical component; for river cruises, trip disruption and cancellation cover deserves equal emphasis.",
          "For ocean cruises: unlimited medical is non-negotiable. Evacuation cover must include both helicopter maritime transfer and fixed-wing repatriation. Emergency assistance team quality matters enormously. Cabin confinement is relevant on longer ocean voyages. Cancellation cover must match your full non-refundable cost.",
          "For river cruises: unlimited medical remains important, but shore hospital costs (not maritime evacuation) drive the risk. Trip disruption cover for weather events is more relevant than for ocean itineraries. Cancellation cover is critical given that AmaWaterways and Viking enforce strict 100% non-refundable policies from 60–90 days out, and river cruise packages often include significant flights and hotels that add to the non-refundable exposure. For both formats: buy the policy on the day of your booking deposit.",
        ],
        table: {
          caption: 'River vs Ocean Cruise Insurance: Priority Comparison',
          headers: ['Insurance Feature', 'River Cruise Priority', 'Ocean Cruise Priority'],
          rows: [
            ['Unlimited medical cover', 'Essential', 'Essential'],
            ['Maritime evacuation', 'Lower (close to shore)', 'Critical (remote waters)'],
            ['Shore hospital access', 'High (multiple countries)', 'Medium'],
            ['Trip disruption — weather', 'High (flooding / low water)', 'Medium'],
            ['Cabin confinement', 'Lower (smaller ships)', 'Medium–High'],
            ['Missed port departure', 'Medium', 'Medium–High'],
            ['Trip cancellation', 'High (strict T&Cs)', 'High'],
            ['Emergency assistance quality', 'High (multi-country)', 'High (evacuation coord)'],
            ['Typical premium vs benchmark', '15–25% lower', 'Benchmark'],
          ],
        },
      },
    ],
  },
];

export const blogCategories = ['All', 'Guides', 'Coverage', 'Tips & Advice', 'Costs', 'Seniors', 'Medical', 'Destinations'];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
