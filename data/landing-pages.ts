export interface LandingPage {
  slug: string;
  title: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const landingPages: LandingPage[] = [
  {
    slug: 'cheap-cruise-insurance',
    title: 'Cheap Cruise Insurance',
    heroHeading: 'Affordable Cruise Insurance — Quality Cover at the Best Price',
    metaTitle: 'Cheap Cruise Insurance NZ — Compare Affordable Cruise Cover',
    metaDescription: 'Find affordable cruise insurance without sacrificing critical cover. Compare providers on price, medical limits, cabin confinement and cancellation.',
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
    intro: 'Finding cheap cruise insurance does not mean compromising on critical cover. Compare providers to find the right balance between price and protection.',
    sections: [
      { heading: 'What Makes Cruise Insurance Affordable?', body: 'Price is driven by age, destination, duration and cover level. Domestic NZ cruises cost $150–$200 per person to insure vs $350–$500 for European voyages. Comparing providers can reduce premiums by 20–40% for the same cover.' },
      { heading: 'What You Should Never Cut', body: 'Unlimited medical cover and evacuation are non-negotiable. Onboard treatment charges private rates — a medical evacuation costs $15,000–$50,000. The premium difference between adequate and inadequate medical cover is often just $30–$60.' },
      { heading: 'How to Find the Best Value', body: 'Use our comparison table to compare all providers. Look at medical limits, evacuation cover, cabin confinement, missed port benefits, and cancellation cover. The cheapest policy is not always the best value.' },
    ],
    faqs: [
      { q: 'What is the cheapest cruise insurance option?', a: 'Basic domestic NZ cruise policies start from $120–$150 per person. Always compare providers and ensure unlimited medical cover is included, regardless of how budget-focused you are.' },
      { q: 'Can I get cheap cruise insurance with pre-existing conditions?', a: 'Yes. Premiums will be higher but comparing providers is especially important as pricing for pre-existing conditions varies significantly across providers.' },
    ],
  },
  {
    slug: 'best-cruise-insurance-nz',
    title: 'Best Cruise Insurance',
    heroHeading: 'The Best Cruise Insurance — Top-Rated Providers Compared',
    metaTitle: 'Best Cruise Insurance NZ — Top-Rated Providers Compared',
    metaDescription: 'Find the best cruise insurance. Compare top-rated NZ providers on medical cover, cabin confinement, missed port and cancellation — independent comparison.',
    heroImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80',
    intro: 'The best cruise insurance depends on your situation — destination, age, pre-existing conditions, and budget. Our independent comparison helps you find the right policy.',
    sections: [
      { heading: 'What Makes the Best Cruise Insurance?', body: 'Unlimited emergency medical cover, helicopter evacuation, cabin confinement daily benefit, missed port cover, trip cancellation, and 24/7 emergency assistance. Cruise-specific benefits distinguish cruise policies from standard travel insurance.' },
      { heading: 'Top-Rated Providers for 2026', body: 'Southern Cross Travel Insurance consistently wins Canstar Outstanding Value Cruise awards. 1Cover offers strong medical limits with an easy online process. Cover-More has the widest international emergency network. Compare all providers to find your best match.' },
      { heading: 'Best for Different Cruisers', body: 'For seniors: Southern Cross and 1Cover. For families: Cover-More and 1Cover (dependent children free). For budget travellers: Zoom and Travel Insurance Direct. For pre-existing conditions: Southern Cross and SCTI.' },
    ],
    faqs: [
      { q: 'Which NZ cruise insurance provider is rated best?', a: 'Southern Cross Travel Insurance has won the Canstar Outstanding Value Cruise award multiple years. However the best provider depends on your specific age, destination and conditions.' },
      { q: 'Is annual cruise insurance better than single trip?', a: 'If you cruise 2+ times per year, annual multi-trip insurance is typically better value. For a single voyage, single-trip policies are more cost-effective.' },
    ],
  },
  {
    slug: 'cruise-travel-insurance',
    title: 'Cruise Travel Insurance',
    heroHeading: 'Cruise Travel Insurance — Specialist Cover for Every Voyage',
    metaTitle: 'Cruise Travel Insurance NZ — Compare Specialist Cruise Cover',
    metaDescription: 'Cruise travel insurance is different from standard travel insurance. Compare specialist cruise cover for cabin confinement, medical evacuation, missed ports and cancellation.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    intro: 'Cruise travel insurance provides specialist cover for the unique risks of cruising — onboard medical treatment, evacuation from sea, cabin confinement, missed ports, and shore excursion cancellation.',
    sections: [
      { heading: 'Why Cruise Travel Insurance Is Different', body: 'Standard travel insurance excludes cruise-specific risks. Once your ship leaves port — even on a domestic NZ cruise — public healthcare no longer covers onboard treatment. Ship medical centres charge private rates. Helicopter evacuation from sea costs $15,000–$100,000.' },
      { heading: 'What Cruise Travel Insurance Covers', body: 'Unlimited emergency medical (including onboard treatment), helicopter evacuation to shore, medical repatriation, cabin confinement cash benefit, missed port departure, cancelled shore excursions, trip cancellation, lost luggage, and 24/7 emergency assistance.' },
      { heading: 'Domestic vs International Cruise Insurance', body: 'Even domestic NZ cruises require insurance. For international cruises — South Pacific, Australia, Asia, Europe — financial risk from medical emergencies is significantly higher. International premiums reflect destination medical costs.' },
    ],
    faqs: [
      { q: 'Do I need cruise travel insurance for a NZ domestic cruise?', a: 'Yes. Once your ship leaves NZ ports, public healthcare no longer covers onboard medical treatment. All domestic NZ cruise itineraries require cruise-specific travel insurance.' },
      { q: 'What does cruise travel insurance cost?', a: 'From $120–$200 per person for a 7-day domestic NZ cruise, $200–$350 for South Pacific, and $300–$600 for international voyages depending on age and cover level.' },
    ],
  },
  {
    slug: 'cruise-insurance-quotes',
    title: 'Cruise Insurance Quotes',
    heroHeading: 'Cruise Insurance Quotes — Compare and Save',
    metaTitle: 'Cruise Insurance Quotes NZ — Compare Prices from Top Providers',
    metaDescription: 'Get cruise insurance quotes from leading providers. Compare prices, medical limits, cabin confinement and cancellation cover side by side.',
    heroImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80',
    intro: 'Compare cruise insurance quotes from all major NZ providers. Prices vary significantly — comparing multiple providers can save 20–40% while maintaining the same level of cover.',
    sections: [
      { heading: 'How to Get Accurate Cruise Insurance Quotes', body: 'For an accurate quote you need: cruise destination(s), travel dates, ages of all travellers, and any pre-existing medical conditions. Providing accurate information is essential — non-disclosure can invalidate claims.' },
      { heading: 'What Affects Cruise Insurance Quote Prices', body: 'Age is the biggest factor — premiums increase from age 65+. Destination second — domestic cruises are cheaper than Asian, European or world voyages. Pre-existing conditions and cover level also affect price.' },
      { heading: 'Understanding Your Quote', body: 'Ensure you are comparing like-for-like cover. A cheaper quote with a $500,000 medical limit is not equivalent to an unlimited medical policy. Check medical limits, evacuation, cabin confinement and cancellation on each quote.' },
    ],
    faqs: [
      { q: 'How do I compare cruise insurance quotes?', a: 'Compare on medical cover limit, evacuation cover, cabin confinement daily benefit, missed port cover, cancellation limit and premium. Use our comparison table to see all providers side by side.' },
      { q: 'When should I get cruise insurance quotes?', a: 'As soon as you book. Purchasing early ensures cancellation cover from the date of purchase.' },
    ],
  },
  {
    slug: 'last-minute-cruise-insurance',
    title: 'Last Minute Cruise Insurance',
    heroHeading: 'Last Minute Cruise Insurance — Cover Before You Sail',
    metaTitle: 'Last Minute Cruise Insurance NZ — Buy Cover Before You Depart',
    metaDescription: 'Need last minute cruise insurance? Compare NZ providers who offer same-day cover. Protect yourself for medical emergencies, evacuation and cabin confinement.',
    heroImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80',
    intro: 'Most NZ cruise insurance providers offer same-day cover purchasable right up to 24 hours before departure — sometimes on the day itself.',
    sections: [
      { heading: 'Can You Get Cruise Insurance at the Last Minute?', body: 'Yes. Most NZ providers allow purchase up to 24 hours before sailing; some accept same-day purchases. You will be covered for medical, evacuation, cabin confinement and missed ports from the policy start time. Note: trip cancellation cover for events before purchase is not included.' },
      { heading: 'Best Providers for Last Minute Cover', body: 'Cover-More, 1Cover, and Southern Cross all accept last-minute cruise insurance purchases online in around 5 minutes. Have your passport details, cruise itinerary, and medical history ready.' },
    ],
    faqs: [
      { q: 'Can I buy cruise insurance on the day of departure?', a: 'Many NZ providers accept same-day purchases, though some require at least 24 hours before sailing. Medical and evacuation cover applies from the policy start date.' },
      { q: 'What is not covered with last minute cruise insurance?', a: 'Cancellation events that occurred or were foreseeable before the policy purchase date. Medical cover for treatment needed on the cruise is fully covered.' },
    ],
  },
  {
    slug: 'cruise-cancellation-insurance',
    title: 'Cruise Cancellation Insurance',
    heroHeading: 'Cruise Cancellation Insurance — Protect Your Investment',
    metaTitle: 'Cruise Cancellation Insurance NZ — Protect Your Cruise Booking',
    metaDescription: 'Cruise cancellation insurance protects your non-refundable deposits and prepaid costs. Compare NZ providers for trip cancellation, curtailment and disruption cover.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    intro: 'Cruise cancellation insurance protects non-refundable costs if you cannot travel due to illness, injury, or other covered events. With cruise costs often $3,000–$20,000 per couple, cancellation cover is essential.',
    sections: [
      { heading: 'What Cruise Cancellation Insurance Covers', body: 'Non-refundable deposits and prepaid costs if you cannot travel due to: sudden illness or injury, death of a family member, adverse weather, redundancy, jury duty, or a government travel warning. Cancellation limits range from $5,000 to unlimited.' },
      { heading: 'When to Buy Cruise Cancellation Insurance', body: 'Purchase at the time of booking or as soon as possible. Cancellation cover begins from the date of purchase — buying early protects against pre-departure cancellation events. Purchasing within 48 hours of the booking deposit is recommended.' },
    ],
    faqs: [
      { q: 'What cancellation limit do I need?', a: 'Your cancellation cover should equal the total non-refundable value — cruise booking, flights, pre/post accommodation and shore excursions. For a couple on a 14-day cruise this could be $8,000–$20,000.' },
      { q: 'Can I get cruise cancellation insurance after booking?', a: 'Yes, but purchase immediately. Cancellation events before your policy purchase date are not covered.' },
    ],
  },
  {
    slug: 'senior-cruise-insurance',
    title: 'Senior Cruise Insurance',
    heroHeading: 'Senior Cruise Insurance — Comprehensive Cover Over 60',
    metaTitle: 'Senior Cruise Insurance NZ — Compare Cover for Over 60s and 65s',
    metaDescription: 'Compare senior cruise insurance from NZ providers. Find comprehensive medical cover, pre-existing condition options, and competitive pricing for travellers over 60.',
    heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80',
    intro: 'Senior cruisers have unique insurance requirements — pre-existing conditions, higher medical risk at sea, and age-related premium increases. Find the right cover with our independent comparison.',
    sections: [
      { heading: 'Why Senior Cruise Insurance Matters', body: 'Seniors face the highest medical risk at sea. Pre-existing conditions are more common, recovery times longer, and evacuation and treatment costs significant. Cruise ship medical centres charge private rates and are equipped for stabilisation only.' },
      { heading: 'Pre-Existing Conditions and Senior Cover', body: 'Most NZ providers offer online assessments for pre-existing conditions. Cardiovascular disease, diabetes, respiratory conditions and joint replacements can typically be covered with appropriate declaration. Non-declaration can invalidate claims.' },
    ],
    faqs: [
      { q: 'What is the best cruise insurance for seniors over 70?', a: 'Southern Cross Travel Insurance (no maximum age limit), 1Cover (up to age 85), and Cover-More all offer strong senior cruise options. Compare based on your specific conditions and destination.' },
      { q: 'How much does senior cruise insurance cost?', a: 'A 70-year-old on a 14-day South Pacific cruise can expect $350–$600 per person depending on pre-existing conditions and cover level. Comparing providers is especially important for seniors.' },
    ],
  },
  {
    slug: 'family-cruise-insurance',
    title: 'Family Cruise Insurance',
    heroHeading: 'Family Cruise Insurance — One Policy Covers Everyone',
    metaTitle: 'Family Cruise Insurance NZ — Compare Cover for the Whole Family',
    metaDescription: 'Family cruise insurance covers adults and children under one policy. Compare NZ providers for family cruise cover including children medical, activity cover and cancellation.',
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
    intro: 'A family cruise insurance policy covers all family members under one policy, simplifying the purchase and typically offering better value than individual policies.',
    sections: [
      { heading: 'How Family Cruise Insurance Works', body: 'Most NZ providers include dependent children at no additional cost when travelling with a parent. A dependent child is typically under 19, not in full-time employment, and travelling the entire journey. Each adult is listed and children are added to the same policy.' },
      { heading: 'Best Providers for Family Cover', body: 'Cover-More, 1Cover, and Southern Cross all offer family cruise policies where dependent children travel for free. Compare on the definition of dependent child, cover limits, and how each handles pre-existing conditions.' },
    ],
    faqs: [
      { q: 'Do children need their own cruise insurance?', a: 'No. Most NZ providers include dependent children (under 19) at no extra cost when travelling with a parent on a family policy.' },
      { q: 'Can we buy one policy for the whole family?', a: 'Yes. Family cruise insurance covers all listed adults and dependent children on one policy.' },
    ],
  },
  {
    slug: 'medical-cover-cruise',
    title: 'Medical Cover for Cruise',
    heroHeading: 'Cruise Medical Insurance — Unlimited Cover at Sea',
    metaTitle: 'Medical Cover for Cruise NZ — Compare Unlimited Medical Cruise Insurance',
    metaDescription: 'Medical cover is the most critical part of cruise insurance. Compare NZ providers for unlimited medical expenses, evacuation and repatriation for cruise travellers.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    intro: 'Medical emergencies are the primary reason to have cruise insurance. Onboard treatment is charged at private rates, evacuation from sea is expensive, and you are far from shore-based hospitals.',
    sections: [
      { heading: 'Why Unlimited Medical Cover Is Essential', body: 'Cruise ship GP consultations cost $200–$350. Serious illness requiring ship ICU stabilisation and evacuation can cost $50,000–$150,000. All reputable NZ cruise insurance providers offer unlimited medical cover — policies with capped limits are inadequate.' },
      { heading: 'Medical Evacuation from Cruise Ships', body: 'Helicopter or fixed-wing evacuation to shore costs $20,000–$60,000 for South Pacific; international evacuations can exceed $100,000. Medical repatriation to NZ for ongoing treatment can add another $30,000–$100,000.' },
    ],
    faqs: [
      { q: 'What medical cover limit do I need for a cruise?', a: 'Unlimited medical cover is strongly recommended. Capped limits of $500,000 or $1,000,000 can be exhausted by a serious illness requiring evacuation and hospitalisation.' },
      { q: 'Does cruise medical insurance cover pre-existing conditions?', a: 'Yes, with proper declaration and assessment at the time of purchase. Never misrepresent your health — undisclosed conditions are typically not covered.' },
    ],
  },
  {
    slug: 'comprehensive-cruise-insurance',
    title: 'Comprehensive Cruise Insurance',
    heroHeading: 'Comprehensive Cruise Insurance — Complete Protection at Sea',
    metaTitle: 'Comprehensive Cruise Insurance NZ — Full Cover for Every Risk',
    metaDescription: 'Comprehensive cruise insurance provides complete cover for medical, evacuation, cabin confinement, cancellation, missed ports and more. Compare top NZ providers.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    intro: 'Comprehensive cruise insurance provides the highest level of protection — unlimited medical, evacuation, cabin confinement, trip cancellation, missed ports, and shore excursion cover in one complete policy.',
    sections: [
      { heading: 'What Comprehensive Cruise Insurance Includes', body: 'Unlimited overseas emergency medical and hospital cover, helicopter evacuation from ship to shore, medical repatriation, cabin confinement cash benefit, missed port cover, cancelled shore excursion reimbursement, trip cancellation, personal liability, lost luggage, and 24/7 worldwide emergency assistance.' },
      { heading: 'Comprehensive vs Standard Cruise Insurance', body: 'Standard provides basic medical and evacuation with limited cancellation benefits. Comprehensive adds higher cancellation limits, larger cabin confinement benefits, shore excursion cover, and higher luggage limits. For cruises costing $5,000+ per person, comprehensive cover is recommended.' },
    ],
    faqs: [
      { q: 'Is comprehensive cruise insurance worth the extra cost?', a: 'For most cruise holidays, yes. The additional premium over basic cover is typically $50–$150 per person — well worth it given the financial exposure from cancellation of a $5,000+ cruise booking.' },
      { q: 'Does comprehensive cruise insurance cover all destinations?', a: 'Yes, for worldwide itineraries. Ensure the policy is rated for your specific cruise region as premiums vary by destination.' },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find(p => p.slug === slug);
}
