export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Basic Coverage
  {
    category: 'Basic Coverage',
    question: 'Do I need cruise insurance if I already have travel insurance?',
    answer: 'Yes — standard travel insurance typically does not cover the unique risks associated with cruising. You need to either add a cruise extension to your existing policy or purchase dedicated cruise insurance. Standard policies often exclude cabin confinement, miss-port departure, and have inadequate limits for maritime medical evacuations.',
  },
  {
    category: 'Basic Coverage',
    question: 'Does my NZ health insurance cover me on a cruise?',
    answer: 'No. Once your ship departs port — even on domestic NZ cruises — you are in a maritime environment where standard NZ health insurance does not apply. Ship\'s doctors charge private rates, and onboard medical costs are entirely your responsibility without cruise insurance.',
  },
  {
    category: 'Basic Coverage',
    question: 'What is cabin confinement cover?',
    answer: 'Cabin confinement cover provides a daily cash benefit (typically $100–$250/day) if illness or injury keeps you confined to your cabin. Since you\'ve paid for excursions and activities you can\'t enjoy, this benefit helps compensate for the experience you\'re missing out on.',
  },
  {
    category: 'Basic Coverage',
    question: 'What is missed port departure cover?',
    answer: 'If your connecting flight or transport to the cruise embarkation port is delayed or cancelled due to a covered reason, missed port departure cover pays for you to catch up with your ship at the next port — including flights, accommodation, and meals while you wait.',
  },
  {
    category: 'Basic Coverage',
    question: 'Does cruise insurance cover sea sickness?',
    answer: 'Motion sickness itself is generally not covered as a medical condition, but if sea sickness leads to a more serious medical event requiring a doctor\'s consultation or hospitalisation, those medical costs are covered. Cabin confinement cover may also apply if you\'re bedridden due to severe motion sickness.',
  },
  // Medical
  {
    category: 'Medical Cover',
    question: 'What does unlimited medical cover actually mean?',
    answer: 'Unlimited medical cover means there is no dollar cap on your medical expenses claim. Whether your treatment costs $10,000 or $500,000, your insurer pays the full amount. This is critical for cruise travel — a single serious illness requiring evacuation and hospitalisation can easily exceed $100,000.',
  },
  {
    category: 'Medical Cover',
    question: 'What does medical evacuation cover?',
    answer: 'Medical evacuation cover pays for emergency transport from the ship to an appropriate medical facility. This may include helicopter evacuation from the ship, fixed-wing aircraft to a major medical centre, and all associated costs. Depending on your location, evacuation costs range from $15,000 to $150,000+.',
  },
  {
    category: 'Medical Cover',
    question: 'What is medical repatriation?',
    answer: 'Medical repatriation covers the cost of transporting you back to New Zealand for ongoing medical treatment following an emergency. Air ambulance repatriation from international destinations can cost $50,000–$180,000. This is one of the most valuable benefits for international cruisers.',
  },
  {
    category: 'Medical Cover',
    question: 'Does cruise insurance cover COVID-19?',
    answer: 'Most current cruise insurance policies include COVID-19 as a covered medical condition — meaning if you contract COVID-19 and require onboard medical treatment, these costs are covered. Trip cancellation due to positive COVID tests before departure may also be covered, but check your specific policy wording.',
  },
  // Pre-Existing Conditions
  {
    category: 'Pre-Existing Conditions',
    question: 'Can I get cruise insurance with a pre-existing medical condition?',
    answer: 'Yes — most cruise insurance providers will cover pre-existing medical conditions, either automatically (for stable, well-controlled conditions) or following a medical assessment. You must declare all conditions. Our advisors specialise in finding policies that cover your specific conditions at competitive premiums.',
  },
  {
    category: 'Pre-Existing Conditions',
    question: 'What happens if I don\'t declare my pre-existing conditions?',
    answer: 'Non-disclosure is extremely serious. If you have a condition-related medical emergency and the condition wasn\'t declared, your insurer may decline your entire claim — leaving you with potentially hundreds of thousands of dollars in medical and evacuation costs. Always declare fully.',
  },
  {
    category: 'Pre-Existing Conditions',
    question: 'Can seniors with heart conditions get cruise insurance?',
    answer: 'Yes — heart conditions including previous heart attacks, stents, bypass surgery, and atrial fibrillation can all be covered under specialist senior cruise insurance policies. The premium will reflect the higher risk, but coverage is available. Our advisors specialise in finding the best cover for cardiac conditions.',
  },
  // Costs & Quotes
  {
    category: 'Costs & Quotes',
    question: 'How much does cruise insurance cost?',
    answer: 'Cruise insurance premiums depend on your age, destination, trip duration, and any pre-existing conditions. As a rough guide: a NZ domestic cruise for a couple under 65 might cost $180–$280, while an international cruise for a senior with pre-existing conditions might cost $600–$1,200. Our advisors compare multiple providers to find the best rate for your specific situation.',
  },
  {
    category: 'Costs & Quotes',
    question: 'Is annual cruise insurance better value?',
    answer: 'If you take 2 or more cruises per year, annual cruise insurance is almost always better value. A typical annual policy for a couple under 65 costs $600–$1,000, compared to $350–$500 per individual cruise. For 3+ cruises per year, the savings are substantial.',
  },
  {
    category: 'Costs & Quotes',
    question: 'When should I buy cruise insurance?',
    answer: 'Buy cruise insurance as soon as you make your first trip payment — ideally on the same day you book. This ensures you\'re covered for cancellation from day one. Waiting until closer to departure may mean cancellation events that occur in the interim aren\'t covered.',
  },
  // Destinations
  {
    category: 'Destinations',
    question: 'Do I need cruise insurance for a NZ domestic cruise?',
    answer: 'Yes — even for domestic cruises that never leave New Zealand waters. Public healthcare does not cover onboard medical expenses, and ship\'s doctors charge private rates regardless of whether you\'re sailing in domestic or international waters. The risk is the same.',
  },
  {
    category: 'Destinations',
    question: 'Does Australian Medicare cover me on an Australian cruise?',
    answer: 'No. Despite the Trans-Tasman reciprocal healthcare agreement, this does not extend to onboard treatment. Once your ship leaves port in Australia, you\'re charged at private medical rates. NZ visitors to Australia have some land-based reciprocal coverage, but this stops at the gangway.',
  },
  {
    category: 'Destinations',
    question: 'Do I need different insurance for different cruise destinations?',
    answer: 'No — your cruise insurance policy covers you for your specified destination (or worldwide). You declare your destination when you purchase the policy, and you\'re covered for all ports on your itinerary. If your cruise visits multiple regions, your policy should match the furthest or most expensive destination.',
  },
  // Claims
  {
    category: 'Claims',
    question: 'How do I make a cruise insurance claim?',
    answer: 'In an emergency, call your insurer\'s 24/7 emergency assistance number first — they can authorise treatment and arrange direct payment. For non-emergency claims, keep all receipts, medical reports, and documentation. Submit your claim online or by post with supporting documents within the timeframe specified in your policy (typically 30–60 days after return).',
  },
  {
    category: 'Claims',
    question: 'What documentation do I need for a medical claim?',
    answer: 'For a medical claim, you\'ll need: all medical receipts and invoices, a detailed medical report from the treating doctor, proof of cruise booking and premium payment, and any relevant pre-existing condition documentation. Your insurer\'s emergency assistance team can advise on specific requirements.',
  },
  {
    category: 'Claims',
    question: 'How long does a cruise insurance claim take to process?',
    answer: 'Simple claims (cabin confinement, minor medical) are typically processed within 5–10 business days. Complex claims involving large medical or evacuation costs may take 15–30 business days as they require more detailed assessment. Keeping detailed records and submitting complete documentation speeds up the process.',
  },
];

export const faqCategories = ['Basic Coverage', 'Medical Cover', 'Pre-Existing Conditions', 'Costs & Quotes', 'Destinations', 'Claims'];
