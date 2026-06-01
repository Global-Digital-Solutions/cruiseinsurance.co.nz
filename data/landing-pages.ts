export interface LandingPage {
  slug: string;
  title: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  coveragePoints?: string[];
  costGuide?: { item: string; range: string }[];
  faqs: { q: string; a: string }[];
}

export const landingPages: LandingPage[] = [
  {
    slug: 'cheap-cruise-insurance',
    title: 'Cheap Cruise Insurance',
    heroHeading: 'Affordable Cruise Insurance — Quality Cover at the Best Price',
    metaTitle: 'Cheap Cruise Insurance NZ — Compare Affordable Cruise Cover',
    metaDescription: 'Find affordable cruise insurance without sacrificing critical cover. Compare NZ providers on price, medical limits, cabin confinement and cancellation to find the best value policy.',
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
    intro: 'Affordable cruise insurance and quality protection are not mutually exclusive — but finding the right balance requires knowing what to compare. Premiums vary by 25–40% across providers for equivalent cover, and our independent comparison helps you find the best value for your voyage.',
    sections: [
      {
        heading: 'What Makes Cruise Insurance Affordable?',
        body: [
          'Cruise insurance pricing is driven by four main variables: your age, destination, voyage duration, and cover level. Age has the biggest impact from 65 onwards, where premiums increase steeply with each five-year band. Destination is the second largest factor — domestic cruises within New Zealand waters are the cheapest to insure, while European and worldwide voyages command the highest premiums due to higher onshore medical costs and longer evacuation distances.',
          'Duration matters less than most people expect — the difference between a 7-day and 14-day policy on the same voyage is typically 20–30% of premium, not double. Cover level is where smart buyers can save the most: stripping optional extras you genuinely don\'t need (like adventure sports cover for a relaxing cruise) can reduce premiums by 10–20% without affecting the benefits you actually use.',
          'Comparing multiple providers is the single most effective way to reduce your premium. The spread between the cheapest and most expensive quote for identical cover on the same voyage is commonly 25–40%. A cruise insurance comparison that takes five minutes can save $50–$150 per person on a typical voyage.',
        ],
      },
      {
        heading: 'How Much Does Cruise Insurance Cost?',
        body: [
          'As a general guide, expect to pay $120–$180 per person for a 7-day domestic New Zealand cruise. South Pacific itineraries (Fiji, Vanuatu, Cook Islands) typically cost $170–$290 per person for a 10-day voyage. Australian cruises run $200–$340 per person, and Asian itineraries (Japan, Singapore, Vietnam) range from $260–$440 per person for two weeks.',
          'European and Mediterranean cruises are the most expensive to insure at $360–$620 per person for a 21-day voyage, reflecting higher medical costs in European countries and longer repatriation distances. World cruise policies covering 60–90 days can run $700–$1,200 per person.',
          'These figures assume a healthy adult under 65. Add 30–50% for travellers aged 65–74, and 50–100% more for travellers aged 75–84. Pre-existing conditions add a further loading that varies by condition and provider — always declare fully, as non-disclosure can void your entire policy.',
        ],
      },
      {
        heading: 'What You Should Never Cut to Save Money',
        body: [
          'Unlimited emergency medical cover is non-negotiable. Cruise ship medical centres charge fully private rates — a consultation with the ship\'s doctor costs $200–$350. Serious illness requiring onboard stabilisation plus helicopter evacuation to a shore hospital can cost $30,000–$150,000, and that\'s before repatriation home. The premium difference between a $500,000 medical limit and unlimited cover is typically $30–$80. Always choose unlimited.',
          'Medical evacuation cover is equally essential. Helicopter extraction from a ship in the South Pacific costs $20,000–$60,000. Fixed-wing medical repatriation from Europe or Asia back to New Zealand can exceed $100,000–$150,000. A policy that covers evacuation but caps medical expenses at $500,000 could leave you exposed to a six-figure shortfall from a serious event.',
          '24/7 emergency assistance is the third essential. Reputable providers operate round-the-clock medical case management teams who coordinate with the ship\'s medical staff, arrange shore-based hospital admission, and manage your return home. Without this service, you are navigating a crisis alone in a foreign country or in international waters. Do not purchase a policy that does not include genuine 24/7 emergency assistance.',
        ],
      },
      {
        heading: 'Smart Ways to Reduce Your Premium',
        body: [
          'Choosing a higher voluntary excess is the most direct lever for reducing cruise insurance premiums. Increasing your excess from $100 to $250 or $500 typically reduces the premium by 10–20%. This makes sense if you are healthy, travelling domestically, and mainly want cover for catastrophic medical events rather than minor inconveniences.',
          'Annual multi-trip policies offer significant savings for frequent cruisers. If you take two or more cruises per year — or mix cruises with other international travel — an annual policy covering all trips typically costs less than two separate single-trip policies. Most annual policies allow you to specify a maximum trip duration (30, 45, or 90 days) and cover unlimited trips within that limit.',
          'Resist the temptation to over-insure on ancillary benefits. Rental car excess cover, adventure sports extension, and high-value item cover add to the premium without benefiting most cruise travellers. Stick to the core benefits: unlimited medical, evacuation, cancellation, cabin confinement, and luggage. Once the core is solid, only add extras that match your specific itinerary.',
        ],
      },
      {
        heading: 'Comparing Value Across Providers',
        body: [
          'Travel Insurance Direct and InsureandGo are consistently among the most affordable options for younger travellers on domestic and South Pacific voyages. 1Cover offers strong value with unlimited medical on all policies and a straightforward online process. Cover-More and Southern Cross sit in the mid-range on price but lead on claims support quality and emergency assistance networks.',
          'For families, 1Cover and Cover-More stand out: both include dependent children at no extra cost when travelling with a parent. A family of two adults and two children can save $240–$400 by choosing a family policy over four individual ones. Check the definition of a dependent child — most providers require children to be under 19, not in full-time employment, and travelling the entire journey.',
          'Do not use price alone as the comparison metric. A policy at $180 per person with a $500,000 medical cap is genuinely worse value than one at $220 per person with unlimited medical. Use our comparison table to evaluate medical limits, evacuation cover, cabin confinement benefit, missed port cover, and cancellation limit alongside the price.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited emergency medical expenses',
      'Helicopter evacuation from ship to shore',
      'Medical repatriation to New Zealand',
      'Cabin confinement daily benefit',
      'Missed port departure cover',
      'Cancelled shore excursion reimbursement',
      'Trip cancellation & lost deposits',
      'Lost, stolen or delayed luggage',
      '24/7 worldwide emergency assistance',
      'Personal liability cover',
      'Travel delay and disruption expenses',
      'Family emergency travel costs',
    ],
    costGuide: [
      { item: '7-day NZ domestic cruise (per person)', range: '$120–$180' },
      { item: '10-day South Pacific cruise (per person)', range: '$170–$290' },
      { item: '14-day Australian cruise (per person)', range: '$200–$340' },
      { item: '14-day Asian cruise (per person)', range: '$260–$440' },
      { item: '21-day Mediterranean cruise (per person)', range: '$360–$620' },
      { item: 'Annual multi-trip (all cruises, per person)', range: '$320–$580' },
    ],
    faqs: [
      {
        q: 'What is the cheapest cruise insurance option in NZ?',
        a: 'For healthy adults under 65 on a domestic or South Pacific cruise, basic policies start from $120–$150 per person. Travel Insurance Direct and InsureandGo are typically the most affordable options for straightforward itineraries. However, the cheapest policy is not always the best value — always verify that unlimited medical cover and evacuation are included regardless of the price point. A policy with a $500,000 medical cap may cost $30 less but expose you to significant financial risk.',
      },
      {
        q: 'Can I get affordable cruise insurance with pre-existing conditions?',
        a: 'Yes. Most NZ providers offer online medical assessments that determine whether your pre-existing conditions can be covered and at what additional loading. Premiums will be higher, but comparing providers is especially important here — the loading applied to the same condition varies significantly between insurers. Southern Cross and 1Cover are known for competitive pre-existing condition pricing. Always declare all conditions fully: undisclosed conditions can invalidate not just the condition-related claim but your entire policy.',
      },
      {
        q: 'Is domestic cruise insurance cheaper than international?',
        a: 'Yes, significantly. A domestic cruise within New Zealand waters is cheaper to insure because evacuation distances to shore hospitals are shorter and New Zealand\'s private medical costs are lower than most international destinations. Expect to pay 30–50% less for a domestic cruise policy compared to an equivalent South Pacific voyage, and 50–70% less than an Asian or European itinerary. Even so, domestic cruise insurance is essential — public healthcare does not cover onboard treatment once your ship leaves port.',
      },
      {
        q: 'Does increasing my excess really reduce the premium?',
        a: 'Yes, meaningfully. Choosing a $250 excess instead of $100 typically reduces the premium by 10–15%. Jumping to a $500 excess can save 15–25%. This strategy works best if you are in good health and mainly want catastrophic medical cover — the excess only applies when you claim, so if you are unlikely to make small claims, a higher excess reduces your ongoing premium cost without significantly affecting your protection for the events that matter most.',
      },
      {
        q: 'Is annual cruise insurance cheaper than buying per voyage?',
        a: 'For most people who cruise two or more times a year, yes. Annual multi-trip policies typically cost $320–$580 per person and cover unlimited trips within a maximum trip duration (usually 30 or 45 days per trip). Two separate cruise policies might cost $300–$600 in total, meaning annual cover is comparable or cheaper while also covering any other travel you do during the year. If you cruise once a year and take no other overseas trips, a single-trip policy is likely better value.',
      },
      {
        q: 'What benefits can I safely skip to lower my premium?',
        a: 'Rental car excess cover, adventure sports extension, and high-value item floaters are typically not needed for a standard cruise holiday. If you are not hiring a car, not doing high-risk activities, and not travelling with expensive jewellery or cameras worth more than the standard luggage limit, removing these options can reduce your premium by $20–$60. Never remove unlimited medical, evacuation, emergency assistance, trip cancellation, or cabin confinement — these are the core cruise benefits.',
      },
      {
        q: 'How do I compare cruise insurance quotes properly?',
        a: 'Compare on six criteria in order of importance: (1) medical limit — unlimited only; (2) evacuation and repatriation cover — check both limits; (3) cabin confinement daily benefit and total limit; (4) missed port cover per port and total; (5) cancellation limit — should match your total non-refundable booking cost; (6) premium. Use our comparison table to see all six metrics side by side for all providers. Do not compare on price alone — a $20 saving that reduces your medical limit from unlimited to $500,000 is a poor trade.',
      },
      {
        q: 'Can I buy cheap cruise insurance and still get good claims service?',
        a: 'Yes — price and claims quality are not always correlated. 1Cover and Cover-More consistently rate well on claims service and emergency assistance despite competitive pricing. Read recent reviews on platforms like Trustpilot and Canstar to check claims satisfaction before purchasing. The emergency assistance team matters most on a cruise — this is the service that coordinates your evacuation and return home if something goes seriously wrong. Verify the provider operates a genuine 24/7 team, not just a business-hours service.',
      },
    ],
  },

  {
    slug: 'best-cruise-insurance-nz',
    title: 'Best Cruise Insurance',
    heroHeading: 'The Best Cruise Insurance — Top-Rated Providers Compared',
    metaTitle: 'Best Cruise Insurance NZ 2026 — Top-Rated Providers Compared',
    metaDescription: 'Find the best cruise insurance for your voyage. Independent comparison of top NZ providers on medical cover, cabin confinement, missed port, emergency assistance and value.',
    heroImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80',
    intro: 'The best cruise insurance is not a single product — it depends on your age, destination, travel companions, and specific risk profile. Our independent comparison evaluates the top providers across every measure that matters so you can choose with confidence.',
    sections: [
      {
        heading: 'What Separates Good Cruise Insurance from the Best',
        body: [
          'Standard travel insurance is not designed for cruising. The best cruise insurance adds specialist benefits that cover the unique risks of being at sea: onboard medical treatment at private rates, helicopter evacuation from international waters, daily cash for cabin confinement, reimbursement for missed port departures, and cover for cancelled shore excursions. Without these, you have a policy with dangerous gaps.',
          'Unlimited emergency medical cover is the baseline benchmark for any policy worth considering. Cruise ship medical facilities are equipped for stabilisation only — serious illness will require helicopter evacuation to a shore hospital, which costs $20,000–$100,000, and possibly fixed-wing repatriation home, which can cost another $80,000–$150,000. Any policy with a capped medical limit (even $1,000,000) can be inadequate for a catastrophic event.',
          'Beyond medical, the best providers distinguish themselves on three measures: the quality of their 24/7 emergency assistance service (do they have medical professionals who actively manage your care, or just a call centre?), their claims settlement speed and customer satisfaction scores, and their flexibility on pre-existing conditions. These are harder to compare on price alone — which is why our side-by-side comparison is essential.',
        ],
      },
      {
        heading: 'Top-Rated Providers for 2026',
        body: [
          'Southern Cross Travel Insurance has won the Canstar Outstanding Value Travel Insurance — Cruise award multiple consecutive years. They offer no upper age limit on most policies, excellent pre-existing condition handling, and a well-regarded emergency assistance network. Their cruise-specific benefits are comprehensive and their claims satisfaction scores are consistently among the highest in the market.',
          '1Cover has received multiple Canstar awards including Outstanding Value for International and Senior travel insurance. Their online process is simple and fast, unlimited medical is standard across all policies, and they accept purchases right up to 24 hours before departure. Their Cruise Pack add-on includes cabin confinement up to $1,500, missed port cover up to $750, and formal attire cover.',
          'Cover-More is one of the largest travel insurers in the Australasia-Pacific region and has the widest international emergency assistance network. Their claim support is consistently rated well, and their pre-existing condition online assessment is thorough and transparent. They are particularly strong for international and long-haul cruises where a large emergency network matters most.',
        ],
      },
      {
        heading: 'Best Cruise Insurance for Different Traveller Types',
        body: [
          'For senior cruisers aged 65–84: Southern Cross (no maximum age limit on most plans) and 1Cover (covered up to 85) are the strongest options. Both offer competitive pre-existing condition loading and strong medical cover. Compare their specific limits for your age band and conditions, as pricing diverges significantly from age 70 onwards.',
          'For families: 1Cover and Cover-More both include dependent children at no additional cost when travelling with a parent. A dependent is typically defined as under 19, not in full-time employment, and travelling the entire journey. For families of four, this saves $240–$500 compared to individual policies and simplifies the process of a single combined policy.',
          'For budget travellers: Travel Insurance Direct and InsureandGo offer the lowest premiums without compromising on unlimited medical. They are best suited to domestic and South Pacific voyages where the risk profile is lower. For first-time cruisers on short voyages, these providers offer good entry-level protection at accessible price points.',
        ],
      },
      {
        heading: 'Cruise-Specific Benefits That Make the Difference',
        body: [
          'Cabin confinement cover is unique to cruise policies. If you are confined to your cabin by the ship\'s medical officer due to illness, the best policies pay a daily cash benefit — typically $100–$150 per day up to a total of $1,000–$1,500. This compensates for the loss of enjoyment of your holiday while you recover. Standard travel insurance does not include this benefit.',
          'Missed port departure cover pays for transport expenses to join the cruise at the next port if you miss your embarkation. This could be due to a delayed connecting flight, mechanical breakdown, or illness. The best policies pay $1,500–$2,500 for this benefit. Without it, missing embarkation means either paying out of pocket to catch up with the ship or losing the cruise entirely.',
          'Shore excursion cover reimburses prepaid excursion costs if you cannot attend due to illness or injury. For cruises where you have pre-booked expensive excursions — helicopter tours in Alaska, historical tours in Egypt, or diving in the Great Barrier Reef — this benefit can be worth hundreds or thousands of dollars. Check both the per-excursion limit and the total limit before purchasing.',
        ],
      },
      {
        heading: 'How to Choose the Best Policy for Your Cruise',
        body: [
          'Start with your destination. Domestic and South Pacific cruises have a lower risk profile than Asian, European or worldwide itineraries. Ensure the provider covers your specific cruise region — some policies use broad regional categories (e.g., "South Pacific") that include all the countries your ship visits, so check that every port on your itinerary falls within the covered region.',
          'Assess your medical situation honestly. If you have a pre-existing condition — cardiovascular disease, diabetes, respiratory conditions, joint replacements — run the online medical assessment with at least two providers before purchasing. The price difference for the same condition coverage can be $100–$300 per person, and the policy with the lowest base premium is rarely the best value once conditions are assessed.',
          'Finally, read the Product Disclosure Statement (PDS) before purchasing, specifically the exclusions section. Key exclusions to check: alcohol and drug exclusions, adventure activity exclusions, mental health exclusions, and the definition of a pre-existing condition. The best cruise insurance policy is one where you clearly understand exactly what is and is not covered before you need to claim.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited overseas emergency medical',
      'Helicopter & fixed-wing evacuation',
      'Medical repatriation to New Zealand',
      'Cabin confinement daily cash benefit',
      'Missed port departure allowance',
      'Cancelled shore excursion reimbursement',
      'Cruise-specific emergency assistance',
      'Trip cancellation & curtailment',
      'Pre-existing condition cover (declared)',
      'Lost, stolen or damaged luggage',
      'Personal liability at sea',
      '24/7 emergency assistance worldwide',
    ],
    costGuide: [
      { item: 'Domestic NZ cruise — standard cover (per person)', range: '$130–$200' },
      { item: 'South Pacific — comprehensive cover (per person)', range: '$200–$320' },
      { item: 'Australian cruise — comprehensive (per person)', range: '$220–$360' },
      { item: 'Asia cruise — comprehensive (per person)', range: '$280–$480' },
      { item: 'Mediterranean / Europe (per person)', range: '$380–$650' },
      { item: 'Senior (70+) South Pacific cruise (per person)', range: '$350–$600' },
    ],
    faqs: [
      {
        q: 'Which NZ provider wins best cruise insurance overall?',
        a: 'Southern Cross Travel Insurance has won the Canstar Outstanding Value Cruise award multiple consecutive years, making them the benchmark for overall quality. However, the best provider for you depends on your specific age, destination, and pre-existing conditions. Southern Cross leads on senior coverage and claims satisfaction; 1Cover leads on simplicity and online experience; Cover-More leads on international emergency network reach. Compare all three for your specific voyage before deciding.',
      },
      {
        q: 'What cruise-specific benefits should the best policy include?',
        a: 'At minimum: unlimited emergency medical (not capped), helicopter evacuation from ship to shore, cabin confinement daily cash benefit (at least $100/day), missed port departure cover (at least $1,500), cancelled shore excursion reimbursement, trip cancellation with a limit matching your total booking cost, and 24/7 emergency assistance with qualified medical professionals. Policies that include formal attire cover and travel delay expenses are a bonus. Any policy missing unlimited medical or evacuation is not among the best.',
      },
      {
        q: 'Is annual or single-trip cruise insurance better value?',
        a: 'If you cruise two or more times per year, or combine cruises with other international travel, an annual multi-trip policy typically offers better value. Annual policies run $320–$580 per person and cover unlimited trips within a maximum trip duration per journey (commonly 30 or 45 days). A single round-the-world cruise may still require a single-trip policy depending on duration. For one cruise per year with no other overseas travel, a single-trip policy purchased early is the most cost-effective option.',
      },
      {
        q: 'How do I know if a provider genuinely offers the best claims service?',
        a: 'Look at independent review platforms: Trustpilot, Canstar, and Consumer NZ all publish cruise insurance ratings based on real policyholder experiences. Focus on claims settlement speed, communication during emergencies, and how disputes were resolved. A provider with high awards but poor claims reviews is a red flag. Southern Cross, 1Cover, and Cover-More consistently receive strong claims reviews. Avoid providers with patterns of delayed settlements or disputed exclusion clauses in reviews.',
      },
      {
        q: 'Does the best cruise insurance cover pre-existing conditions?',
        a: 'Yes — the best providers all offer online medical assessments that can cover most common pre-existing conditions including cardiovascular disease, diabetes, hypertension, respiratory conditions, and previous cancer. Coverage is subject to assessment and an additional loading. The loading varies significantly between providers for the same condition, which is why comparing at least two providers after the assessment is important. Always complete the medical assessment honestly — non-disclosure of known conditions typically voids the entire policy, not just the condition-related claim.',
      },
      {
        q: 'What is cabin confinement cover and why does it matter?',
        a: 'Cabin confinement cover pays a daily cash benefit if the ship\'s medical officer confines you to your cabin due to illness. Standard travel insurance does not include this — it is a cruise-specific benefit. The best policies pay $100–$150 per day up to a total of $1,000–$1,500. On a 14-day cruise, being confined for 4 days could mean a $400–$600 benefit payment. For passengers who have paid thousands of dollars for the cruise experience, this compensation matters, particularly on longer voyages.',
      },
      {
        q: 'What\'s the difference between "cruise cover" as an add-on vs a dedicated cruise policy?',
        a: 'Many standard travel insurers (including 1Cover and Cover-More) offer cruise cover as an add-on to their standard comprehensive policies. You purchase the base policy then add the cruise pack for an extra premium. This approach gives you the full benefits of their standard policy plus the cruise-specific extras. Dedicated cruise-only products are rarer in New Zealand and are typically not better value than a comprehensive policy with cruise add-on. The important thing is to confirm the cruise pack is on your certificate of insurance before departure.',
      },
      {
        q: 'Does the best cruise insurance cover COVID-19?',
        a: 'Most leading NZ providers include COVID-19 medical cover for treatment if you test positive while cruising. Emergency medical expenses from COVID-19 are typically covered under the standard unlimited medical benefit. Cancellation due to COVID-19 is more complex — most policies cover cancellation if you test positive immediately before departure, but not if you choose to cancel due to general concerns about the virus. Check the specific COVID-19 clause in the PDS before purchasing if this is a concern.',
      },
    ],
  },

  {
    slug: 'cruise-travel-insurance',
    title: 'Cruise Travel Insurance',
    heroHeading: 'Cruise Travel Insurance — Specialist Cover for Every Voyage',
    metaTitle: 'Cruise Travel Insurance NZ — Compare Specialist Cruise Cover 2026',
    metaDescription: 'Cruise travel insurance is different from standard travel insurance. Compare specialist cruise cover for onboard medical, evacuation, cabin confinement, missed ports and cancellation.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    intro: 'Cruise travel insurance provides specialist cover for the unique risks of being at sea — onboard medical treatment at private rates, helicopter evacuation, cabin confinement, missed port departures, and shore excursion cover that standard travel insurance simply does not include.',
    sections: [
      {
        heading: 'Why Cruise Travel Insurance Is Different',
        body: [
          'Standard travel insurance is designed for land-based holidays. The moment your ship leaves port — even on a domestic New Zealand cruise in your own coastal waters — you are in an environment where public healthcare no longer applies and where medical treatment comes at fully private international rates. A GP consultation on a cruise ship costs $200–$350. Prescription medication dispensed on board is billed at ship rates. Any specialist procedure requiring onboard surgery can cost $5,000–$20,000 before evacuation.',
          'Cruise-specific risks — cabin confinement, missed ports, shore excursion cancellations — simply do not exist in standard travel insurance products. If you have an existing travel policy and board a cruise without specifically adding cruise cover, these risks are uninsured. Most mainstream providers require you to declare that you are travelling on a cruise and add a "cruise pack" to your policy for these benefits to apply.',
          'The regulatory environment at sea is also different. In international waters, there is no equivalent of a national health system, ACC, or consumer protection framework. You are subject to the cruise line\'s own medical protocols, pricing, and evacuation procedures. Your insurer\'s emergency assistance team acts as your advocate in this environment — coordinating between you, the ship\'s medical staff, and shore-based hospitals to ensure you receive appropriate care.',
        ],
      },
      {
        heading: 'What Cruise Travel Insurance Covers',
        body: [
          'Unlimited emergency medical expenses are the cornerstone of any cruise policy. This covers all onboard medical treatment including ship doctor consultations, procedures, specialist referrals, and ICU time. The "unlimited" part matters enormously — a serious illness requiring 72+ hours of intensive onboard treatment followed by helicopter evacuation and shore hospitalisation can easily exceed $200,000 in combined costs.',
          'Medical evacuation and repatriation are separate benefits that work in sequence. Evacuation covers the cost of moving you from the ship to a shore hospital — helicopter transfers in the South Pacific cost $20,000–$60,000; fixed-wing from Europe can cost $80,000–$120,000. Repatriation covers returning you to New Zealand once medically stable, typically $30,000–$80,000 depending on the distance and medical equipment required.',
          'Cruise-specific benefits include: cabin confinement (daily cash if confined by medical officer), missed port departure (transport costs to rejoin the ship), cancelled shore excursions (reimbursement of prepaid activities), and formal attire cover (for formalwear damaged or lost in transit for formal cruise nights). These benefits typically add $20–$60 to the premium but can be worth hundreds or thousands of dollars if needed.',
        ],
      },
      {
        heading: 'Domestic vs International Cruise Insurance',
        body: [
          'Even domestic cruises within New Zealand waters require cruise-specific insurance. Once your ship leaves a New Zealand port, public healthcare and ACC no longer cover treatment onboard. Medical bills from the ship\'s clinic are charged at private international rates regardless of whether the ship is in NZ coastal waters or the South Pacific. Domestic cruise policies are cheaper than international ones — $120–$180 per person versus $170–$440 for international itineraries — but they are not optional.',
          'International cruise insurance adds cover for the higher medical costs in foreign countries and longer evacuation distances. South Pacific destinations (Fiji, Vanuatu, New Caledonia, Samoa) are well within helicopter range for most of the voyage, but an event in the middle of the Pacific Ocean still requires an expensive evacuation. European and Asian cruises add the complexity of different healthcare systems, higher hospital costs, and much longer repatriation journeys.',
          'If your cruise visits multiple countries, ensure your policy covers every country on your itinerary. Some providers use broad regional categories (e.g., "South Pacific" or "Europe") that cover all countries within the region; others require you to list every country. For cruises that span multiple regions — a voyage from New Zealand to Alaska via the Pacific, for example — a "Worldwide" policy is typically required.',
        ],
      },
      {
        heading: 'When to Buy Cruise Travel Insurance',
        body: [
          'The best time to buy cruise travel insurance is at the same time as your booking deposit. Purchasing early locks in cancellation cover from day one — if something prevents you from travelling before departure (illness, redundancy, bereavement), you are covered from the date the policy starts. Purchasing just before departure means you have no cancellation cover for the entire pre-departure period, which is often when the most financially significant events (needing to cancel the cruise) occur.',
          'For cruises booked 12+ months in advance, buying insurance at deposit is particularly important. Cruise lines increasingly enforce strict cancellation policies where 100% of the cruise cost is non-refundable from 30–60 days before departure. A $5,000 cruise deposit is at risk from day one if you do not have cancellation cover in place.',
          'Most providers allow purchase right up to 24 hours before sailing for travellers who have left it late. In this case, the medical, evacuation, cabin confinement, and missed port benefits apply from the policy start date, but cancellation cover cannot apply retrospectively. If you have already missed the pre-departure window, purchase immediately — any protection is better than none.',
        ],
      },
      {
        heading: 'How to Buy Cruise Travel Insurance',
        body: [
          'Purchasing cruise travel insurance is straightforward. You will need: your cruise itinerary (destinations visited), travel dates, ages of all travellers, total trip cost (for setting cancellation cover), and details of any pre-existing medical conditions. Most providers offer instant online purchase with a certificate of insurance issued by email within minutes.',
          'If you have pre-existing conditions, complete the online medical assessment before finalising your purchase. This typically takes 5–10 minutes and will confirm whether your conditions can be covered, at what loading, and with what exclusions. Always complete this assessment honestly — the loading is a known cost, while the risk of non-disclosure voiding your entire policy is much larger.',
          'After purchasing, save your certificate of insurance, the PDS, and your emergency assistance phone number to your phone and email them to yourself. In a medical emergency at sea, you need to be able to contact your emergency assistance team quickly and provide your policy number. Pre-programming the emergency number into your phone before boarding is a small step that can make a significant difference in a crisis.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited emergency medical expenses',
      'Helicopter evacuation to shore hospital',
      'Fixed-wing medical repatriation',
      'Cabin confinement daily cash benefit',
      'Missed port departure transport cover',
      'Cancelled shore excursion reimbursement',
      'Formal attire loss or damage',
      'Trip cancellation & non-refundable costs',
      'Personal liability cover',
      'Lost, damaged or delayed luggage',
      'Travel delay and disruption',
      '24/7 emergency medical assistance',
    ],
    costGuide: [
      { item: '7-day domestic NZ cruise (per person)', range: '$120–$180' },
      { item: '10-day South Pacific (per person)', range: '$170–$290' },
      { item: '14-day Australian cruise (per person)', range: '$200–$340' },
      { item: '14-day Asia (per person)', range: '$260–$450' },
      { item: '21-day Europe / Mediterranean (per person)', range: '$360–$640' },
      { item: '60+ day world cruise (per person)', range: '$700–$1,200' },
    ],
    faqs: [
      {
        q: 'Do I really need cruise travel insurance for a domestic NZ cruise?',
        a: 'Yes, absolutely. Once your ship leaves a New Zealand port — even for a voyage that stays entirely within New Zealand coastal waters — public healthcare and ACC no longer cover treatment onboard. The ship\'s medical clinic charges fully private rates for every consultation, medication, and procedure. A domestic cruise policy is cheaper than international cover ($120–$180 per person for 7 days) but is not optional. The financial risk of a serious medical event without insurance far exceeds the premium cost.',
      },
      {
        q: 'What is the difference between cruise travel insurance and standard travel insurance?',
        a: 'Standard travel insurance covers the core risks of any overseas trip: emergency medical, trip cancellation, lost luggage, and travel delays. Cruise travel insurance adds specialist benefits specific to being at sea: onboard medical treatment at ship rates (not just shore-based hospitals), helicopter evacuation from international waters, cabin confinement daily cash, missed port departure cover, and cancelled shore excursion reimbursement. Without these cruise-specific benefits, you have significant coverage gaps for the unique risks of cruising.',
      },
      {
        q: 'How much does cruise travel insurance cost for a family of four?',
        a: 'A family of two adults under 45 with two dependent children on a 10-day South Pacific cruise typically costs $300–$500 total with a family policy where children are included at no extra cost. Most major NZ providers (1Cover, Cover-More) include dependent children (under 19, not in full-time employment, travelling the full journey) at no additional premium on a family policy. For comparison, four individual policies for the same trip would cost $680–$1,160 — a saving of $200–$660 with a family policy.',
      },
      {
        q: 'What happens if I get sick on a cruise and need evacuation?',
        a: 'Contact your insurer\'s emergency assistance team immediately — the number should be on your certificate of insurance. They will liaise with the ship\'s medical staff, assess whether evacuation is needed, arrange and authorise the helicopter or fixed-wing transfer to the nearest appropriate shore hospital, and manage your ongoing care and eventual repatriation home. Do not wait to contact them — early contact allows the team to plan the best medical outcome and manage costs. In a genuine emergency, call them before worrying about paperwork.',
      },
      {
        q: 'Does cruise travel insurance cover cancelled shore excursions?',
        a: 'Yes, comprehensive cruise policies typically reimburse the cost of prepaid shore excursions that you cannot attend due to illness, injury, or if the ship misses the port entirely. The per-excursion limit is usually $500–$1,000 and the total limit $1,000–$2,000. Check the specific limit in your policy before booking expensive excursions — if you have booked a $1,500 helicopter glacier tour in Alaska, verify that your policy\'s per-excursion limit covers the full cost.',
      },
      {
        q: 'Can I buy cruise travel insurance after I\'ve already departed?',
        a: 'Most NZ providers do not sell policies to travellers who have already departed. A small number offer "already overseas" products for travellers who forgot to purchase before leaving. These are available only if you are aged 69 or under, have a permanent NZ address, and purchase within 5 days of departing NZ (or your previous policy expiring). Medical cover under these policies does not apply for the first 72 hours from purchase. If you are already on your cruise without insurance, options are very limited — purchase anything you can find immediately.',
      },
      {
        q: 'Does cruise travel insurance cover COVID-19?',
        a: 'Most leading NZ providers cover COVID-19 medical expenses under the standard unlimited medical benefit. If you test positive and require onboard treatment, your medical costs are covered. Cancellation cover for COVID-19 is more nuanced — most policies cover cancellation if you test positive immediately before departure and cannot travel, but not voluntary cancellation due to general COVID-19 concerns or government travel advice at lower levels. Check the specific COVID-19 clause in the PDS for your chosen policy.',
      },
      {
        q: 'What is the best cruise travel insurance for a river cruise?',
        a: 'River cruises require cruise travel insurance just as ocean cruises do. Most providers cover river cruises under the same cruise pack as ocean voyages — you need to declare you are on a cruise (not a land trip with a river boat segment). River cruise medical facilities are typically more limited than ocean cruise ships, making evacuation cover important. European river cruises also add the complexity of multi-country itineraries — ensure your policy covers every country on the route. Cover-More and Southern Cross both handle European river cruises well.',
      },
    ],
  },

  {
    slug: 'cruise-insurance-quotes',
    title: 'Cruise Insurance Quotes',
    heroHeading: 'Cruise Insurance Quotes — Compare and Save',
    metaTitle: 'Cruise Insurance Quotes NZ — Compare Prices from Top Providers',
    metaDescription: 'Get cruise insurance quotes from leading NZ providers. Compare prices, medical limits, cabin confinement and cancellation cover side by side to find the best value.',
    heroImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80',
    intro: 'Comparing cruise insurance quotes can save you 25–40% on the same level of cover. Our comparison links you directly to the six leading NZ providers — compare prices, limits, and benefits side by side before purchasing.',
    sections: [
      {
        heading: 'What You Need to Get an Accurate Quote',
        body: [
          'For an accurate cruise insurance quote you need four pieces of information: your cruise itinerary (destinations visited, not just the embarkation country), travel dates (departure and return), ages of all travellers, and any pre-existing medical conditions. Providing accurate information is not just good practice — it is a legal requirement. Misrepresenting your health or the destinations you are visiting can invalidate your policy entirely.',
          'Destination is critical. A policy rated for "South Pacific" that does not specifically list the countries your ship visits may leave you underinsured. If your South Pacific cruise stops in Australia as part of the voyage, your policy must cover Australian healthcare costs, which are higher than most South Pacific island healthcare costs. If in doubt, list every country your ship will visit.',
          'The total trip cost you enter determines your cancellation cover limit. Enter the full non-refundable cost: the cruise booking, flights, pre/post accommodation, and any prepaid shore excursions. If you enter only the cruise cost and have $1,500 in non-refundable flights and hotels, that $1,500 is exposed if you need to cancel before departure.',
        ],
      },
      {
        heading: 'What Affects Cruise Insurance Quote Prices',
        body: [
          'Age is the single biggest factor in cruise insurance pricing. Premiums are relatively flat from age 18 to 64, then increase steeply with each five-year band from 65 onwards. A 70-year-old can expect to pay 40–70% more than a 60-year-old for the same policy on the same cruise. An 80-year-old may pay double or triple compared to a 70-year-old. Some providers impose age limits — 1Cover covers up to 85, while Southern Cross has no maximum age limit on many policies.',
          'Destination and duration drive the second tier of pricing. Domestic NZ cruises are cheapest; Asia, Europe, and worldwide itineraries are most expensive. Duration adds cost but not linearly — the difference between a 7-day and 14-day policy on the same voyage is typically 25–35% rather than 100%. This is because most medical events and large claims occur during the first days of a voyage when the risk of something going wrong is highest.',
          'Pre-existing conditions add a loading that varies significantly between providers and conditions. Cardiovascular conditions, chronic respiratory disease, and recent cancer treatment typically carry the highest loadings. Stable, well-controlled conditions (managed hypertension, type 2 diabetes with no complications) often carry modest loadings. Always complete the medical assessment with at least two providers and compare the loaded premiums before choosing.',
        ],
      },
      {
        heading: 'How to Compare Cruise Insurance Quotes Properly',
        body: [
          'A cheaper premium does not mean better value if the coverage is inferior. Compare on these six criteria in order of importance: (1) medical limit — accept only unlimited; (2) evacuation cover — confirm both helicopter evacuation and fixed-wing repatriation; (3) cancellation limit — must equal your total non-refundable trip cost; (4) cabin confinement — daily benefit and total limit; (5) missed port cover — per port and total limit; (6) premium. Only after verifying the first five should price be the deciding factor.',
          'Watch for policies that advertise "cruise cover" but only add the label without changing the underlying benefits. A standard travel insurance policy relabelled as "cruise insurance" may not include cabin confinement, missed port departure, or shore excursion cover. Always read the benefit schedule or the Product Disclosure Statement to confirm each cruise-specific benefit is explicitly listed and has a meaningful limit.',
          'Excess amounts affect the total cost of owning a policy, not just the upfront premium. A policy at $220 per person with a $100 excess and another at $190 per person with a $400 excess — if you make one small claim of $350 (a ship doctor visit and medication), the cheaper upfront policy could cost you $560 net versus $470 net. Factor in likely claims scenarios when comparing, not just the headline premium.',
        ],
      },
      {
        heading: 'When to Get Cruise Insurance Quotes',
        body: [
          'Get your quotes and purchase as soon as you make your booking deposit. Most people defer insurance until closer to departure, but this is the riskiest approach. Cancellation cover only starts from the date of purchase — if you become seriously ill six months before departure and cannot travel, a policy you bought at booking (even before deposit was fully paid) covers your cancellation. A policy bought one week before departure does not.',
          'For cruises booked far in advance — 12 to 18 months out — the premium will be the same whether you buy today or in 11 months. There is no financial reason to delay, and significant financial risk in doing so. Premium rates are calculated on age at departure, duration, and destination — not on how far in advance you purchase.',
          'If you are shopping for the best deal, compare quotes from multiple providers on the same day using the same input data. Premiums can change between providers based on market conditions, seasonal adjustments, and promotional periods. A comparison done today reflects today\'s pricing — do not assume the comparison result from three months ago still applies.',
        ],
      },
      {
        heading: 'Reading Your Quote Before You Buy',
        body: [
          'Before confirming purchase, open the benefit schedule (sometimes called the table of benefits) and verify six specific numbers: the medical limit (should say "Unlimited"); the evacuation and repatriation limit (verify both); the cancellation limit (must cover your full trip cost); the cabin confinement daily benefit and total limit; the missed port departure limit; and the excess amount per claim.',
          'The excess is important and often overlooked. Some policies have different excesses for different benefit types — a $100 excess for medical claims, a $200 excess for cancellation, and $0 for emergency assistance. Read the excess schedule carefully, as a $0 excess on medical does not mean $0 excess on everything.',
          'Check for any age-related sub-limits. Some policies offer unlimited medical overall but apply a lower medical limit for travellers over 75, or cap the evacuation benefit for certain ages. These sub-limits are sometimes buried in the fine print of the PDS rather than highlighted in the benefit schedule. If in doubt, call the provider and confirm the specific limits for your age before purchasing.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited emergency medical',
      'Evacuation to shore hospital',
      'Medical repatriation home',
      'Cabin confinement daily benefit',
      'Missed port departure cover',
      'Shore excursion cancellation',
      'Trip cancellation & deposits',
      'Lost or delayed luggage',
      '24/7 emergency assistance',
      'Personal liability',
      'Travel delay expenses',
      'Pre-existing condition cover (assessed)',
    ],
    costGuide: [
      { item: 'Domestic NZ, 7 days (per person)', range: '$120–$180' },
      { item: 'South Pacific, 10 days (per person)', range: '$170–$290' },
      { item: 'Australian cruise, 14 days (per person)', range: '$200–$340' },
      { item: 'Asian cruise, 14 days (per person)', range: '$260–$450' },
      { item: 'Mediterranean, 21 days (per person)', range: '$360–$640' },
      { item: 'Senior 70+, South Pacific 10 days (per person)', range: '$350–$580' },
    ],
    faqs: [
      {
        q: 'How do I get a cruise insurance quote?',
        a: 'Click any "Get a Quote" button on our comparison page to go directly to the provider\'s quote page. You will need: your cruise destination(s), travel dates, ages of all travellers, and a declaration of pre-existing medical conditions. Most providers generate a quote instantly online — the process takes around 3–5 minutes. For pre-existing conditions, you will complete an additional medical assessment that takes 5–10 minutes. Save and compare quotes from at least two providers before purchasing.',
      },
      {
        q: 'Why do cruise insurance quotes vary so much between providers?',
        a: 'Each provider uses its own actuarial model to assess risk and price policies. Their pricing reflects their claims experience with different age groups, destinations, and conditions, as well as their commercial strategy. Some providers compete aggressively on price for younger travellers; others specialise in seniors and pre-existing conditions. A 35-year-old on a South Pacific cruise may find 1Cover and Travel Insurance Direct offer the best value; a 70-year-old with managed hypertension may find Southern Cross offers a significantly better deal. Always compare for your specific profile.',
      },
      {
        q: 'Does the cruise insurance quote price change if I buy earlier or later?',
        a: 'The premium is calculated based on your age, destination, duration, and cover level at the time of departure — not when you purchase. Buying early does not increase or decrease the upfront premium. However, buying early is strongly recommended because cancellation cover starts from the purchase date, not the departure date. If you book a cruise 12 months in advance and buy insurance immediately, you are protected for cancellation events from day one — a significant financial benefit at no extra premium cost.',
      },
      {
        q: 'What information do I need to have ready before getting a quote?',
        a: 'Have the following ready: departure and return dates, all cruise ports and countries visited, ages of all travellers (exact ages, as pricing can differ significantly around age thresholds), any pre-existing medical conditions with diagnosis dates and current medication, total non-refundable trip cost (cruise + flights + accommodation), and your passport or travel document details. Accurate information at the quote stage ensures the policy you purchase will actually pay claims when needed.',
      },
      {
        q: 'Can I get a cruise insurance quote if I have a pre-existing condition?',
        a: 'Yes. Most providers offer an online medical assessment during the quote process that takes 5–10 minutes. You will answer questions about your conditions, medications, stability, and recent medical history. The assessment will confirm whether your conditions can be covered, at what additional premium loading, and with what specific exclusions. Complete the assessment with at least two providers to compare the loaded premiums — the pricing difference for the same condition between providers is often significant.',
      },
      {
        q: 'Is the cheapest cruise insurance quote always the worst quality?',
        a: 'No. Cheaper premiums sometimes reflect a provider competing aggressively for a particular market segment rather than inferior coverage. 1Cover and Travel Insurance Direct consistently offer competitive prices while including unlimited medical cover as standard. However, some very cheap policies do reduce benefits — capping medical at $500,000, limiting evacuation cover, or increasing the excess significantly. Always verify the key benefits before purchasing and never accept a capped medical limit in exchange for a lower premium.',
      },
      {
        q: 'Should I compare cruise insurance quotes on price or on benefits?',
        a: 'Benefits first, then price. Establish a minimum standard: unlimited medical cover, helicopter evacuation, cabin confinement daily benefit, missed port cover, and cancellation limit matching your trip cost. Any policy that meets these criteria is a legitimate candidate. Among those that meet the standard, price becomes the deciding factor. This approach prevents the common mistake of purchasing the cheapest policy and discovering a critical gap only when making a claim.',
      },
      {
        q: 'How do I know if a cruise insurance quote covers all the ports on my itinerary?',
        a: 'Read the geographic coverage section in the Policy Wording or PDS carefully. Some providers use broad regional categories ("South Pacific" or "Europe") that include all countries within the region; others require you to list specific countries. If your cruise visits ports in multiple regions — for example, a voyage from Auckland that stops in both Australia and New Caledonia — ensure both are covered under the same policy. When in doubt, call the provider before purchasing and get written confirmation that every port on your itinerary is covered.',
      },
    ],
  },

  {
    slug: 'last-minute-cruise-insurance',
    title: 'Last Minute Cruise Insurance',
    heroHeading: 'Last Minute Cruise Insurance — Cover Before You Sail',
    metaTitle: 'Last Minute Cruise Insurance NZ — Buy Same-Day Cruise Cover',
    metaDescription: 'Need last minute cruise insurance? Compare NZ providers offering same-day cover for medical, evacuation, cabin confinement and missed ports. Buy before you sail.',
    heroImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80',
    intro: 'Leaving it to the last minute? Most leading NZ providers offer same-day cruise insurance — purchasable up to 24 hours before sailing and sometimes on the day of departure. Here is what you need to know and which providers to use.',
    sections: [
      {
        heading: 'Can You Really Buy Cruise Insurance at the Last Minute?',
        body: [
          'Yes — most major New Zealand cruise insurance providers accept online purchases up to 24 hours before your ship departs. Some (including 1Cover and Cover-More) will issue a policy on the day of sailing if you have not yet boarded. The policy becomes effective from the start date you select, and core benefits — unlimited medical, evacuation, cabin confinement, and missed port cover — apply from that moment forward.',
          'The key limitation of last-minute purchase is cancellation cover. Trip cancellation insurance protects you against events that prevent you from travelling before departure. A policy purchased 24 hours before sailing cannot retroactively cover a cancellation event that occurred before the purchase date — and events that were already known (a diagnosed illness, a family member in hospital) are typically excluded even if they occurred on the same day as purchase.',
          'For travellers who have left it very late, the good news is that the most financially significant risks on a cruise — medical emergencies at sea, helicopter evacuation, cabin confinement — all occur during the voyage, not before departure. A last-minute policy provides full cover for these risks from the moment the policy starts.',
        ],
      },
      {
        heading: 'Best Providers for Last Minute Cruise Insurance',
        body: [
          '1Cover accepts online purchases until 24 hours before the cruise departure time. Their Cruise Pack can be added to any standard Comprehensive policy during the online quote process — the entire process takes around five minutes and the certificate of insurance arrives by email almost immediately. 1Cover is particularly well-suited for last-minute purchases because their online process requires no phone calls or manual assessments unless you have complex pre-existing conditions.',
          'Cover-More similarly offers online purchase up to the day before departure. They also have a robust mobile app that lets you manage your policy and access emergency contacts quickly — useful when you are boarding in a hurry. Their emergency assistance number is accessible directly through the app, which matters if you leave your printed policy documents at home.',
          'Southern Cross and Travel Insurance Direct also accept last-minute purchases online for standard itineraries. For travellers with pre-existing conditions who are buying at the last minute, the medical assessment can still be completed online during the quote process — it takes 5–10 minutes additional time. If you have multiple complex conditions, allow 15–20 minutes to complete the assessment accurately.',
        ],
      },
      {
        heading: 'What Is and Is Not Covered with Last Minute Purchase',
        body: [
          'From the moment your last-minute policy activates, you are fully covered for: unlimited emergency medical expenses on board and ashore, helicopter evacuation and fixed-wing repatriation, cabin confinement daily cash, missed port departure, cancelled shore excursions, lost luggage, personal liability, and 24/7 emergency assistance. These core cruise benefits are in full effect regardless of when you purchased the policy.',
          'What is not covered is cancellation cover for events that occurred before purchase. If you purchase insurance on Monday morning and your cruise departs Monday afternoon, a cancellation event that occurred over the weekend (a fall resulting in injury, for example) would not be covered because it pre-dates the policy. A cancellation event that occurs after purchase (a medical emergency on the morning of departure, for instance) would typically be covered — subject to the standard conditions in the PDS.',
          'Pre-existing conditions are still subject to the standard disclosure and assessment requirements even for last-minute purchases. You must declare all conditions truthfully during the online medical assessment. The common misconception that buying insurance late somehow allows you to skip disclosure is incorrect and legally dangerous — non-disclosure voids the policy regardless of when you purchased.',
        ],
      },
      {
        heading: 'What to Have Ready for a Last Minute Purchase',
        body: [
          'To buy cruise insurance quickly before departure, have the following ready: your cruise itinerary details (departure port, all destinations, return date), ages of all travellers, a list of any pre-existing medical conditions (with diagnosis dates and current medications), your total non-refundable trip cost (for setting the cancellation limit), and your payment method. Most providers accept all major credit cards — VISA, Mastercard, and AMEX.',
          'If you are purchasing for multiple travellers, have everyone\'s ages and medical information ready before starting the quote. Stopping partway through a quote to find someone\'s medical history typically times out the session and requires starting again. A five-minute preparation before starting will save you time overall.',
          'After purchasing, download or screenshot your certificate of insurance immediately and email it to yourself. Note the emergency assistance phone number in your phone contacts. If you are boarding within the hour, there may not be time to print the policy — a saved PDF in your email or a screenshot is a perfectly valid substitute. Most emergency assistance teams can locate your policy by name and passport number if you do not have your policy number available.',
        ],
      },
      {
        heading: 'How to Make a Claim from a Last Minute Policy',
        body: [
          'Making a claim from a last-minute policy is identical to claiming from any other policy. In a medical emergency at sea, call the emergency assistance number immediately — it is available 24 hours a day, seven days a week. The team will ask for your policy number, personal details, and a brief description of the medical situation. They will then coordinate with the ship\'s medical staff directly.',
          'For non-emergency claims — missed luggage, travel delays, cabin confinement, missed ports — document the event with written evidence from the ship or airline (a letter from the cruise line confirming the port was missed, a property irregularity report for lost bags, a medical confinement notice from the ship\'s doctor). Claim as soon as possible after the event — most providers require notification within 30 days.',
          'Keep all receipts for expenses incurred as a result of an insured event. Hotel costs from a missed port, transport costs to rejoin the ship, clothing purchased due to delayed luggage — these are all potentially reimbursable with the right documentation. A last-minute policy that was purchased one hour before departure has exactly the same claims obligations and rights as a policy purchased 12 months earlier.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited emergency medical',
      'Helicopter evacuation from ship',
      'Medical repatriation home',
      'Cabin confinement daily benefit',
      'Missed port departure cover',
      'Shore excursion cancellation',
      'Lost or delayed luggage',
      '24/7 emergency assistance',
      'Personal liability',
      'Travel delay expenses',
      'Pre-existing condition cover (assessed)',
      'Same-day policy issuance',
    ],
    costGuide: [
      { item: '7-day domestic NZ cruise (last minute, per person)', range: '$120–$190' },
      { item: '10-day South Pacific (last minute, per person)', range: '$175–$300' },
      { item: '14-day Asian cruise (last minute, per person)', range: '$270–$460' },
      { item: '21-day Mediterranean (last minute, per person)', range: '$370–$650' },
      { item: 'Senior 65+ South Pacific 10 days (per person)', range: '$250–$420' },
      { item: 'Family 2 adults + 2 children, South Pacific (total)', range: '$340–$580' },
    ],
    faqs: [
      {
        q: 'How late can I buy cruise insurance before departure?',
        a: 'Most major NZ providers accept purchases up to 24 hours before your ship departs. 1Cover and Cover-More typically accept purchases on the same day as departure for standard itineraries. The key condition is that you must not have already boarded the ship. If you are at the port but have not yet passed through the gangway, you can still purchase insurance. Once you are onboard and the ship has departed, no NZ provider will issue a new policy.',
      },
      {
        q: 'What medical cover applies with a last minute policy?',
        a: 'Full unlimited emergency medical cover applies from the policy start time — exactly the same as a policy purchased 12 months in advance. There is no waiting period for medical cover (unlike some domestic health insurance products). If you purchase a policy at 9am and board at 11am, you are covered for any medical event that occurs from 9am onwards. The only limitation is pre-existing conditions — these must be declared and assessed during the purchase process, and any undisclosed condition will not be covered regardless of when the policy was purchased.',
      },
      {
        q: 'Is trip cancellation covered if I buy last minute?',
        a: 'Trip cancellation is covered from the date of purchase for events that occur after that date. A last-minute policy purchased 24 hours before departure covers cancellation events that occur within that 24-hour window — for example, if you have a serious accident on the morning of departure. It does not cover cancellation events that occurred before the policy was purchased. If you are already feeling unwell before purchasing, that existing condition is likely excluded from cancellation cover, though emergency medical cover still applies.',
      },
      {
        q: 'Can I buy last minute cruise insurance with pre-existing conditions?',
        a: 'Yes. The online medical assessment can be completed in 5–10 minutes as part of the purchase process. Most stable, well-managed conditions (hypertension, diabetes, joint replacements) can be covered with an appropriate loading. More complex conditions (recent cardiac events, active cancer treatment) may be excluded or require a higher loading. There is no penalty for leaving it late — the assessment and loading are the same regardless of when you purchase. Complete the assessment honestly; non-disclosure is the main risk regardless of timing.',
      },
      {
        q: 'What if I forgot to buy insurance and am already on the cruise?',
        a: 'Once you are on the ship and it has sailed, you cannot purchase New Zealand cruise insurance. A small number of international travel insurance providers offer mid-trip cover, but these are rare and expensive. If you discover you have no insurance after departing, contact your credit card provider immediately — some premium credit cards include travel insurance as a cardholder benefit that may cover you. Otherwise, you are financially exposed for the duration of the voyage. The lesson: purchase insurance before boarding, even if it is just an hour before.',
      },
      {
        q: 'Does a last minute policy cover the entire voyage?',
        a: 'Yes. The policy covers the full voyage duration you specify when purchasing, from the start date/time to the return date. There is no reduced benefit because you purchased late — the policy operates identically to one purchased months in advance. If you are boarding a 14-day cruise and purchase a last-minute policy that covers 14 days from today, you are covered for the full 14 days.',
      },
      {
        q: 'How quickly is a last minute policy issued?',
        a: 'All major NZ providers issue certificates of insurance instantly by email after online purchase. For standard itineraries without pre-existing conditions, the entire process — entering details, completing the quote, and paying — takes 3–5 minutes. For travellers with pre-existing conditions completing the medical assessment, allow 10–15 minutes. The certificate arrives in your email almost immediately after payment confirmation. Save it to your phone and note the emergency assistance number before boarding.',
      },
      {
        q: 'Is last minute cruise insurance more expensive than buying early?',
        a: 'No. The premium is calculated based on your age, destination, duration, and cover level at the time of departure — not on when you purchase. Buying an hour before sailing costs exactly the same as buying 12 months in advance. The only cost of waiting is the loss of pre-departure cancellation cover — any cancellation event that occurs before your policy is purchased is not covered. Buying early provides this pre-departure protection at no additional premium.',
      },
    ],
  },

  {
    slug: 'cruise-cancellation-insurance',
    title: 'Cruise Cancellation Insurance',
    heroHeading: 'Cruise Cancellation Insurance — Protect Your Investment',
    metaTitle: 'Cruise Cancellation Insurance NZ — Protect Your Cruise Booking',
    metaDescription: 'Cruise cancellation insurance protects your non-refundable deposits and prepaid costs. Compare NZ providers for trip cancellation, curtailment, and disruption cover.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    intro: 'With cruise bookings costing $3,000–$20,000 per couple and cruise lines enforcing strict non-refundable cancellation policies, cruise cancellation insurance is the most financially significant cover you can purchase. Buying it at the time of booking is the only way to ensure full protection.',
    sections: [
      {
        heading: 'What Cruise Cancellation Insurance Covers',
        body: [
          'Cruise cancellation insurance reimburses your non-refundable booking costs if you are unable to travel due to a covered event. The most common covered events are: sudden illness or injury to you or a close family member, death of a close family member, unforeseen redundancy, jury service or court subpoena, a government-issued "do not travel" warning for your destination, and natural disasters or extreme weather that prevent departure.',
          'The cancellation benefit typically covers: your cruise booking deposits and balance payments, pre-paid and non-refundable flights, pre/post cruise accommodation, pre-booked shore excursions, and any other non-refundable prepaid travel costs. The limit must equal the total non-refundable value of all these components — not just the cruise itself. For a two-week Europe cruise with business class flights, the total non-refundable cost could easily be $15,000–$25,000 per couple.',
          'Curtailment cover — which pays if you have to cut short a cruise already in progress — is included in most comprehensive policies. This covers the unused portion of your prepaid cruise costs plus any additional transport expenses to return home early. If a family emergency at home forces you to fly back from the Mediterranean mid-voyage, curtailment cover reimburses your unused cruise days and your emergency flights home.',
        ],
      },
      {
        heading: 'When to Buy Cruise Cancellation Insurance',
        body: [
          'The single most important timing rule: buy cancellation cover on the same day as your booking deposit. Cancellation cover only applies to events that occur after the policy purchase date. A cruise booked today with insurance purchased today is covered from today. A cruise booked today with insurance purchased in six months leaves six months of pre-departure risk uninsured.',
          'Cruise lines have progressively tightened their cancellation policies. Most major cruise lines enforce 100% non-refundable cancellation penalties from 30–60 days before departure — and some luxury lines extend this to 90–120 days. Earlier in the booking, penalties are typically 10–25% of the booking value. Even at the initial deposit stage, many cruise lines retain the deposit entirely if you cancel.',
          'The premium for a policy purchased 12 months before departure is identical to one purchased one week before. There is no financial benefit in waiting. The only benefit of early purchase is that you are protected from the moment the policy starts — which is why buying at deposit is not just good practice, it is the only rational approach.',
        ],
      },
      {
        heading: 'How Much Cancellation Cover Do You Need?',
        body: [
          'Your cancellation limit should equal the total maximum non-refundable amount you could lose if you cancelled on the worst possible day. For most policies, this is: the full cruise cost (including all deposits and final balance), return flights if booked separately, pre/post cruise hotels, and any prepaid non-refundable shore excursions or activities. Add these up and ensure your policy\'s cancellation limit matches or exceeds the total.',
          'Many travellers underestimate their total non-refundable exposure. A couple booking a 21-day Mediterranean cruise might have: $8,000 cruise cost, $4,000 in business class flights, $1,200 in pre/post hotels in Rome, and $600 in prepaid excursions — a total of $13,800. A cancellation limit of $10,000 (the standard on many basic policies) would leave $3,800 exposed. Choose a cancellation limit that covers the actual total, not a round number.',
          'Most major providers offer unlimited cancellation cover on their Comprehensive policies, which eliminates the calculation entirely. Unlimited cancellation is worth the marginal additional premium for high-value cruises — it removes the need to manually verify that your limit is sufficient and provides peace of mind that the full cost of the cruise is protected regardless of the total.',
        ],
      },
      {
        heading: 'What Cruise Cancellation Insurance Does Not Cover',
        body: [
          'Understanding exclusions is as important as understanding what is covered. Cruise cancellation insurance does not cover: disinclination to travel (changing your mind), pre-existing conditions that were not declared and assessed, events that were already known when the policy was purchased, cancellation due to travel warnings that existed before your policy start date, financial collapse of the cruise line (this requires separate supplier insolvency cover), and pandemics or government-mandated travel restrictions (varies significantly by policy and provider).',
          'The "change of mind" exclusion is the most commonly misunderstood. Travel insurance cancellation cover is not the same as a fully flexible ticket — it requires a genuine, documented insured event. Work stress, relationship breakdown, and personal inconvenience are not covered events. Providers that advertise "cancel for any reason" cover charge significantly higher premiums for this benefit and may reimburse only 50–75% of costs rather than 100%.',
          'COVID-19 cancellation cover varies significantly between providers. Most mainstream NZ policies cover cancellation if you personally test positive immediately before departure and cannot travel. They do not cover cancellation due to a government travel warning issued after your policy was purchased (unless the destination has a "Do Not Travel" advisory), or voluntary cancellation due to general health concerns. Read the specific COVID-19 clause in the PDS before purchasing if this is a consideration.',
        ],
      },
      {
        heading: 'How to Claim Cruise Cancellation Insurance',
        body: [
          'If you need to cancel your cruise, notify your insurer as soon as the cancellation event occurs — do not wait until you have resolved all your refunds from the cruise line and airline. Most policies require notification within 30–60 days of the cancellation event, and some require notification before the trip was due to depart. Early notification allows the insurer to advise you on documentation requirements and potentially manage the process with providers on your behalf.',
          'Documentation is the key to a successful cancellation claim. For medical cancellations: a certificate from a treating doctor confirming you are unfit to travel, written on the doctor\'s letterhead and dated at or before the cancellation date. For other events: redundancy — formal redundancy notice from employer; bereavement — death certificate of the deceased; jury service — jury summons. All non-refundable costs must be evidenced by original booking confirmations and correspondence confirming the amounts forfeited.',
          'Obtain written cancellation confirmations from the cruise line, airline, and hotels showing the amounts forfeited (the non-refundable portions). Submit all documentation together with your completed claim form. Insurers cannot process a claim for a cost they cannot verify was actually forfeited — detailed documentation significantly accelerates the settlement process.',
        ],
      },
    ],
    coveragePoints: [
      'Non-refundable cruise costs',
      'Pre-paid flights and accommodation',
      'Shore excursion prepayments',
      'Cruise curtailment (cutting short)',
      'Family emergency disruptions',
      'Redundancy cancellation',
      'Jury service cancellation',
      'Natural disaster cancellations',
      'Government travel warning cancellation',
      'Death of traveller or family member',
      'Medical incapacity to travel',
      'Additional transport to return home',
    ],
    costGuide: [
      { item: '7-day domestic cruise, $3,000 trip (per person)', range: '$120–$180' },
      { item: '14-day South Pacific, $5,000 trip (per person)', range: '$180–$300' },
      { item: '21-day Europe, $8,000 trip (per person)', range: '$360–$640' },
      { item: '21-day Europe, $15,000 trip (per person)', range: '$400–$700' },
      { item: 'Senior 70+, 14-day cruise (per person)', range: '$350–$600' },
      { item: 'Unlimited cancellation policy (any value)', range: '$250–$650' },
    ],
    faqs: [
      {
        q: 'What is the most common reason for a cruise cancellation claim?',
        a: 'Medical reasons — sudden illness or injury to the traveller or a close family member — account for the majority of cruise cancellation claims. Other common reasons include bereavement (death of a close family member), unexpected redundancy, and adverse weather preventing departure. Medical cancellations require a doctor\'s certificate confirming you are medically unfit to travel on the intended departure date. The certificate should be written on the doctor\'s letterhead and obtained as close to the cancellation date as possible.',
      },
      {
        q: 'What cancellation limit do I need for my cruise?',
        a: 'Your cancellation limit should cover your total maximum non-refundable exposure: the full cruise cost (deposits and balance), separately booked flights, pre/post cruise hotels, and prepaid shore excursions. For many international cruises this total is $8,000–$20,000 per couple. If your total exceeds the standard cancellation limit on a basic policy, choose a Comprehensive policy with a higher limit or unlimited cancellation. Verify the limit covers your actual total before purchasing — not after.',
      },
      {
        q: 'Does cruise cancellation insurance cover cancellation by the cruise line?',
        a: 'Standard cancellation insurance covers your decision to cancel due to an insured event — not the cruise line cancelling the voyage. If the cruise line cancels, they are obligated to refund your payments under the booking contract. Travel insurance cancellation cover is for your-side cancellations. However, if the cruise line cancels and you have non-refundable flights or hotels booked independently, your travel insurance may cover those costs as part of "trip disruption" or "cancellation of travel plans" benefits — check the specific PDS language.',
      },
      {
        q: 'Is there a waiting period for cancellation cover to apply?',
        a: 'No waiting period — cruise cancellation insurance is in effect from the policy start date. However, events that were already known, diagnosed, or foreseeable before the policy was purchased are excluded. Buying insurance after being diagnosed with an illness does not cover cancellation related to that illness. "Already foreseeable" events — such as a close family member who was already seriously ill — are also excluded even if they were not yet certain at the time of purchase. The principle is that insurance covers unforeseen events, not known risks.',
      },
      {
        q: 'Can I get cancellation cover for a cruise I booked several months ago?',
        a: 'Yes, you can purchase travel insurance for a cruise you booked months ago. However, cancellation cover only applies from the date of purchase — any events that occurred between your booking date and the insurance purchase date are not covered. If you have had a clean bill of health since booking and no known risk factors, purchasing now still provides meaningful protection for the remainder of the pre-departure period. For maximum coverage, always buy at the time of booking.',
      },
      {
        q: 'Does cruise cancellation insurance cover a change of mind?',
        a: 'No. Standard cruise cancellation insurance does not cover cancellation due to change of mind, work schedule changes, relationship breakdown, or personal inconvenience. These are not insured events. "Cancel for any reason" cover exists as an optional extra with some providers but is significantly more expensive (often 40–60% premium loading) and typically reimburses only 50–75% of non-refundable costs rather than 100%. Standard cancellation cover requires a genuine, documented insured event such as illness, injury, bereavement, or redundancy.',
      },
      {
        q: 'What documentation do I need for a cancellation claim?',
        a: 'For a medical cancellation: a doctor\'s certificate on letterhead confirming you are unfit to travel, dated at the time of cancellation. For all claims: original booking confirmations showing the total amounts paid, written cancellation confirmations from the cruise line and any other suppliers showing the amounts forfeited (the non-refundable portions), your completed claim form, and any correspondence with the cruise line about refunds already obtained. Submit all documents together to accelerate the settlement process.',
      },
      {
        q: 'Is curtailment (cutting short a cruise) covered by cancellation insurance?',
        a: 'Yes. Curtailment cover is typically included in comprehensive cruise policies and covers the unused non-refundable portion of your cruise if you must return home early due to an insured event — typically a serious illness or injury to you or a family emergency at home. It also covers the cost of additional transport to return home (flights, transfers) above what was in your original travel plan. Curtailment is distinct from cancellation: cancellation applies before departure, curtailment applies after the voyage has begun.',
      },
    ],
  },

  {
    slug: 'senior-cruise-insurance',
    title: 'Senior Cruise Insurance',
    heroHeading: 'Senior Cruise Insurance — Comprehensive Cover Over 60',
    metaTitle: 'Senior Cruise Insurance NZ — Compare Cover for Over 60s, 65s and 70s',
    metaDescription: 'Compare senior cruise insurance from NZ providers. Find comprehensive medical cover, pre-existing condition options and competitive pricing for cruisers over 60, 65, and 70.',
    heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80',
    intro: 'Senior cruisers face unique insurance requirements — higher medical risk at sea, greater likelihood of pre-existing conditions, and steeper age-related premiums. Getting the right cover matters more for older travellers, not less, and comparing providers is the most effective way to find the best combination of cover and value.',
    sections: [
      {
        heading: 'Why Cruise Insurance Matters More for Senior Travellers',
        body: [
          'Cruises are one of the most popular holiday formats for travellers over 60 — the relaxed pace, varied destinations, and all-inclusive structure suit a wide range of mobility and health situations. But the same factors that make cruising attractive for older travellers also make insurance more important. Cruise ship medical facilities are equipped for stabilisation only, and the likelihood of needing emergency medical care increases significantly with age. A 70-year-old has roughly three times the medical claim rate of a 40-year-old on the same voyage.',
          'Medical treatment at sea is charged at fully private international rates regardless of your age or residency. A ship\'s doctor consultation costs $200–$350. Specialist procedures onboard — cardiac monitoring, intravenous medication, overnight observation — can cost $2,000–$8,000 before any evacuation is considered. A serious cardiac event requiring ship stabilisation, helicopter evacuation, and shore hospitalisation can cost $80,000–$200,000. Without insurance, these costs fall entirely on the traveller.',
          'Pre-existing conditions are significantly more common among senior travellers, and cruise ship environments can exacerbate them. Extended periods at sea, changes in diet, altitude variations during port excursions, and reduced access to regular medication supplies all create additional risk. Having a policy that specifically covers your pre-existing conditions — rather than excluding them — is not optional for most seniors over 65.',
        ],
      },
      {
        heading: 'Age Limits and Senior-Friendly Providers',
        body: [
          'Southern Cross Travel Insurance has no maximum age limit on most of their policies — they will issue cover for travellers of any age who can successfully complete the medical assessment process. This makes them the benchmark option for travellers aged 80 and above. Their emergency assistance network is well-regarded, and their pre-existing condition assessment process is thorough and transparent.',
          '1Cover covers travellers up to age 85 on standard policies. For travellers aged 75–85, the online medical assessment is more comprehensive than for younger travellers, and premiums increase steeply in this age range. 1Cover\'s Cruise Pack (an add-on to their standard Comprehensive policy) includes cabin confinement, missed port, and shore excursion benefits. They consistently receive strong Canstar ratings for seniors.',
          'Cover-More covers travellers up to age 89 and has a dedicated seniors page with guidance on common conditions and how their assessment works. Travel Insurance Direct and InsureandGo both have maximum age limits of 69 or 74 depending on the policy, making them suitable for younger seniors but not for travellers in their late 70s or 80s. Always check the maximum age limit before starting a quote for an older traveller.',
        ],
      },
      {
        heading: 'Pre-Existing Conditions and Senior Cruise Cover',
        body: [
          'The majority of travellers over 65 have at least one pre-existing medical condition. The most common are hypertension (high blood pressure), hypercholesterolaemia (high cholesterol), type 2 diabetes, osteoarthritis, coronary artery disease, and previous cancer in remission. Most of these conditions can be covered by NZ cruise insurance providers through an online medical assessment — but the loading varies significantly between providers and conditions.',
          'Declare every condition fully during the medical assessment, including medications, treatment dates, and most recent review results. The temptation to omit conditions to reduce the premium is financially dangerous: non-disclosure typically voids the entire policy — not just the claim related to the undisclosed condition. A policy that costs $40 more to cover your hypertension is dramatically better value than a cheaper policy that denies your cardiac evacuation claim because hypertension was not declared.',
          'Compare the post-assessment loaded premium from at least two providers before purchasing. The assessment loading for the same condition can vary by $100–$300 per person between providers. Running two assessments takes 20–30 minutes but can result in meaningful savings without compromising cover quality. Both major providers (Southern Cross and 1Cover) retain your assessment results if you need to start the quote again.',
        ],
      },
      {
        heading: 'Senior Cruise Insurance Costs',
        body: [
          'Premium increases with age are significant from 65 onwards. A healthy 55-year-old on a 10-day South Pacific cruise might pay $180–$250 per person. The same itinerary for a 70-year-old will cost $300–$450 per person, and for an 80-year-old, $450–$700 per person — before any pre-existing condition loading. For international cruises (Europe, Asia, worldwide), these figures increase further due to higher medical costs in those destinations.',
          'Annual multi-trip policies can still offer value for senior travellers who cruise two or more times per year. Southern Cross offers annual policies for travellers up to their maximum age limit that can cover multiple short cruises within a 12-month period. For a 70-year-old who takes two South Pacific cruises per year, an annual policy may cost less than two separate single-trip policies — compare both options when planning.',
          'Pre-existing condition loading can add $100–$400 per person to the base premium. For couples where both partners have conditions, the total additional loading can be $200–$800 for a single voyage. This makes senior cruise insurance a significant purchase decision, and using our comparison tool to identify the best combination of cover and price for your specific conditions is especially valuable.',
        ],
      },
      {
        heading: 'Planning Your Cruise as a Senior Traveller',
        body: [
          'Before booking your cruise, assess your mobility and health requirements against the specific itinerary. Some ports require tender transfers (small boats from ship to shore) that may be difficult for travellers with mobility limitations. Shore excursions at some destinations involve significant walking, uneven terrain, or physical activity — check with the cruise line before booking excursions that may be beyond your physical capacity.',
          'Carry a comprehensive medical kit including all prescription medications in original labelled containers with enough supply for the voyage plus at least 5 additional days (in case of delays or medical need). Carry your medical history summary and a list of all medications, dosages, and prescribing doctors in English. If you take medications that could be questioned at customs (opioid pain medications, some psychiatric drugs), carry a doctor\'s letter explaining the medical necessity.',
          'Register your policy with your insurer before departure and save the emergency assistance number prominently in your phone. Some insurers offer pre-trip medical consultations for senior travellers with complex conditions — ask about this service when purchasing. Notify the cruise line of any special medical needs when booking — most large ships have medical facilities that can be briefed in advance for travellers with known conditions.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited overseas emergency medical',
      'Helicopter evacuation from ship',
      'Medical repatriation to New Zealand',
      'Pre-existing condition cover (declared)',
      'Cabin confinement daily benefit',
      'Missed port departure',
      'Shore excursion cancellation',
      'Trip cancellation & deposits',
      'Lost or damaged medical equipment',
      'Family emergency expenses',
      '24/7 emergency medical assistance',
      'Personal liability at sea',
    ],
    costGuide: [
      { item: 'Age 60–64, 10-day South Pacific (per person)', range: '$200–$320' },
      { item: 'Age 65–69, 10-day South Pacific (per person)', range: '$250–$400' },
      { item: 'Age 70–74, 10-day South Pacific (per person)', range: '$320–$500' },
      { item: 'Age 75–79, 10-day South Pacific (per person)', range: '$400–$620' },
      { item: 'Age 70–74, 21-day Europe (per person)', range: '$500–$800' },
      { item: 'Age 80+, 10-day South Pacific (per person)', range: '$500–$850' },
    ],
    faqs: [
      {
        q: 'Is there a maximum age for cruise insurance in NZ?',
        a: 'It depends on the provider. Southern Cross Travel Insurance has no maximum age limit on most policies and will cover travellers of any age who can complete the medical assessment. 1Cover covers up to age 85. Cover-More covers up to 89. Travel Insurance Direct and InsureandGo typically cap at 69–74. For travellers aged 80 and above, Southern Cross is the primary option. Always check the age limit before starting a quote — some providers stop the quote process if your age exceeds their limit.',
      },
      {
        q: 'Can seniors with pre-existing conditions get cruise insurance?',
        a: 'Yes — most common senior health conditions can be covered through the online medical assessment process. Stable hypertension, well-controlled type 2 diabetes, previous joint replacements, managed respiratory conditions, and cancer in remission for 5+ years are commonly covered at reasonable loadings. More complex conditions (recent cardiac events, active cancer treatment, uncontrolled diabetes with complications) may be partially excluded or carry higher loadings. Run the assessment with at least two providers and compare the loaded premiums before deciding.',
      },
      {
        q: 'What is the best cruise insurance for over 70s?',
        a: 'Southern Cross Travel Insurance is widely considered the best option for travellers over 70 due to their no maximum age limit, strong emergency assistance network, and competitive pre-existing condition pricing. 1Cover is a strong alternative for travellers up to 85, particularly for those who prefer a simple online process. For travellers with complex medical histories, Cover-More\'s thorough assessment process and large emergency network make them a strong contender. Compare all three with your specific conditions and destination before deciding.',
      },
      {
        q: 'How much does senior cruise insurance cost over 70?',
        a: 'A healthy 70-year-old on a 10-day South Pacific cruise can expect to pay $320–$500 per person for comprehensive cover. With pre-existing conditions adding a loading of $80–$200, the total could reach $400–$700. For European or Asian cruises, premiums are higher: $500–$800 per person for a 21-day voyage at age 70–74. Premiums increase steeply from age 75 onwards. Annual multi-trip policies are available for senior travellers and can offer savings for those who cruise twice or more per year.',
      },
      {
        q: 'Does senior cruise insurance cover medical evacuation?',
        a: 'Yes — medical evacuation from the cruise ship to a shore hospital is one of the core benefits of any senior cruise policy. This is particularly important for older travellers, as cardiac events and strokes — which are more common with age — often require immediate evacuation to a facility with intensive care capacity. Helicopter evacuation in the South Pacific costs $20,000–$60,000. Ensure your policy explicitly includes both evacuation from ship to shore AND medical repatriation back to New Zealand.',
      },
      {
        q: 'What happens if I have a medical emergency on my cruise?',
        a: 'Contact your insurer\'s emergency assistance team immediately on the number shown on your certificate of insurance. Available 24/7, the team will liaise directly with the ship\'s medical staff, authorise treatment, arrange evacuation if necessary, and manage your return home. Do not wait to call — early contact allows the team to influence the clinical decisions and logistics, which can improve both your medical outcome and the management of costs. Keep your policy number and emergency number in your phone before boarding.',
      },
      {
        q: 'Should senior travellers buy single-trip or annual cruise insurance?',
        a: 'For seniors who take one cruise per year, a single-trip policy purchased at the time of booking is typically better value. For those who cruise twice or more per year, or combine cruises with other overseas travel, annual multi-trip policies can offer savings. However, the maximum trip duration on annual policies (often 30 or 45 days per trip) may not suit long international cruises. Compare both options for your specific travel pattern. Southern Cross and Cover-More both offer annual policies for senior travellers.',
      },
      {
        q: 'Do I need to declare all medications when applying for senior cruise insurance?',
        a: 'Yes. All prescription medications must be declared during the medical assessment, as they provide the insurer with important information about your health conditions and their severity. Failure to disclose medications can constitute non-disclosure of the underlying condition, potentially voiding your policy for related claims. Prepare a complete medication list (drug name, dosage, and indication) before starting your quote — the online assessment will ask for this information. Having it ready makes the process faster and ensures accuracy.',
      },
    ],
  },

  {
    slug: 'family-cruise-insurance',
    title: 'Family Cruise Insurance',
    heroHeading: 'Family Cruise Insurance — One Policy Covers Everyone',
    metaTitle: 'Family Cruise Insurance NZ — Compare Cover for the Whole Family',
    metaDescription: 'Family cruise insurance covers adults and children under one policy. Compare NZ providers for family cruise cover including children\'s medical, cancellation and cabin confinement.',
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
    intro: 'A family cruise is one of the most memorable ways to travel together — and one policy that covers everyone, including children at no extra cost, makes the insurance straightforward and typically much more affordable than individual policies for each family member.',
    sections: [
      {
        heading: 'How Family Cruise Insurance Works',
        body: [
          'A family cruise insurance policy covers all listed adults and their dependent children on a single policy document. Most New Zealand providers include dependent children at no additional premium when they are travelling with a parent or guardian. The standard definition of a dependent child is: under the age of 19, not in full-time employment, and travelling the entire journey with the insured adult.',
          'Each adult listed on the policy is individually assessed and covered — medical limits, cancellation cover, and evacuation benefits apply per person. Children listed as dependants receive the same level of medical and evacuation cover as the adults on the policy. If a child requires onboard medical treatment, the unlimited medical benefit applies to them exactly as it does to the adults.',
          'Family policies simplify claims management. In a medical emergency affecting a child on a cruise, having one policy number rather than multiple individual policies makes the emergency assistance call faster and clearer. The insurer can see the full family\'s policy in one place, which is particularly valuable if multiple family members are affected by the same event (a gastroenteritis outbreak affecting the whole family, for instance).',
        ],
      },
      {
        heading: 'Which Providers Are Best for Families?',
        body: [
          '1Cover includes dependent children at no additional cost on their standard Comprehensive family policies. A family of two adults and two dependent children on a 10-day South Pacific cruise would pay for two adult premiums only — the children are automatically covered. 1Cover\'s Cruise Pack must be added to the base policy, which adds a per-policy (not per-person) charge. Their online process is straightforward and family quotes are generated in a few minutes.',
          'Cover-More also includes dependent children at no extra cost and has particularly strong family-focused content in their pre-trip planning tools. Their emergency assistance app is useful for families — in a chaotic situation with multiple children, having the emergency number and policy details in a mobile app rather than a printed document is genuinely helpful.',
          'Southern Cross covers families with strong medical benefits and a no-age-cap approach for adult family members. If you have a multi-generational family cruise — grandparents, parents, and grandchildren all travelling together — Southern Cross can cover all age groups on appropriately structured policies. However, different age groups may need separate policies, and the older generation\'s policies will carry higher premiums.',
        ],
      },
      {
        heading: 'Family-Specific Cruise Risks and Cover',
        body: [
          'Children on cruises are exposed to specific risks that parents should consider. Motion sickness is common and can lead to repeated visits to the ship\'s medical clinic — which charges private rates for each visit. Gastroenteritis outbreaks occur on cruise ships, and children are often more severely affected. Shore excursion injuries — from water sports, beach activities, or simply running on uneven surfaces — are a significant source of paediatric claims. All of these are covered under a family cruise insurance policy.',
          'Cabin confinement cover is particularly relevant for families. If a child is confined to the cabin by the ship\'s medical officer due to illness, the daily confinement benefit applies to the child just as it does to an adult. On a 14-day cruise with two children, a cabin confinement event of 3 days per child could generate $600–$900 in total confinement benefits — meaningful compensation for the loss of your cruise experience while your children recover.',
          'Family emergencies ashore can also trigger cover. If a close family member at home (a grandparent, for example) is suddenly hospitalised, most comprehensive policies cover the cost of returning family members home early to deal with the emergency. This curtailment cover is included in most family cruise policies and is particularly relevant for families with elderly relatives at home.',
        ],
      },
      {
        heading: 'Multi-Generational Cruise Insurance',
        body: [
          'Multi-generational cruises — where grandparents, parents, and grandchildren travel together — are increasingly popular. Insuring the whole group requires careful thought because the different generations have different risk profiles and premium levels. A 70-year-old grandparent pays significantly more than a 45-year-old parent for the same cover.',
          'The most straightforward approach for a multi-generational group is separate policies for different generations: a family policy covering the parents and children (where children travel free), and separate individual policies for grandparents. This approach is typically more cost-effective than trying to fit everyone on one policy, and it allows each generation\'s pre-existing conditions to be assessed separately.',
          'Group policies (covering 5+ travellers) are available from some providers and can offer a slight discount over individual policies. However, group policies typically require all travellers to share the same itinerary dates and destination, which can be limiting for multi-generational trips where different family members might arrive or depart at different times. Check whether a group discount applies to your specific booking before assuming it is better value.',
        ],
      },
      {
        heading: 'Getting the Most From Your Family Cruise Policy',
        body: [
          'Purchase the policy at the same time as your booking deposit, even if children\'s final details are not yet confirmed. Most providers allow you to update the traveller list before departure if names or ages change slightly. The key is to start the cancellation cover clock running from your first payment.',
          'Ensure the cancellation limit covers the full family\'s non-refundable costs. A family of four on a 14-day South Pacific cruise with return flights could have $8,000–$15,000 in non-refundable costs. Check that the cancellation limit on the family policy equals or exceeds this total — some policies cap cancellation at a per-person limit that may be adequate for two adults but insufficient when multiplied across a family.',
          'Carry a copy of the policy certificate and emergency assistance number for each adult in the party. If the group separates during shore excursions and an emergency occurs, every adult should be able to contact the insurer independently. Programme the emergency assistance number into every adult\'s phone before boarding. For children, ensure an adult always has their details (ages, any medical conditions) readily accessible.',
        ],
      },
    ],
    coveragePoints: [
      'Dependent children included at no extra cost',
      'Unlimited medical for all family members',
      'Medical evacuation — adults and children',
      'Family cabin confinement benefit',
      'Family emergency return home',
      'Shore excursion cancellation',
      'Missed port departure',
      'Trip cancellation for all family members',
      'Lost or delayed family luggage',
      'Child injury and illness cover',
      '24/7 family emergency assistance',
      'Personal liability for all travellers',
    ],
    costGuide: [
      { item: '2 adults, 2 children — 10-day South Pacific (total)', range: '$340–$580' },
      { item: '2 adults, 2 children — 14-day Australian cruise (total)', range: '$400–$680' },
      { item: '2 adults, 2 children — 21-day Europe (total)', range: '$720–$1,280' },
      { item: '2 adults only — 14-day South Pacific (total)', range: '$340–$580' },
      { item: 'Multi-gen: 2 seniors + 2 adults + 2 children (total)', range: '$1,200–$2,400' },
      { item: 'Annual family policy (unlimited trips per year)', range: '$640–$1,100' },
    ],
    faqs: [
      {
        q: 'Are children included free on family cruise insurance?',
        a: 'Yes, with most major NZ providers. 1Cover, Cover-More, and Southern Cross all include dependent children at no additional premium on family cruise policies. The standard definition of a dependent child is: under 19 years old, not in full-time employment, and travelling the entire journey with the insured parent or guardian. Some providers extend this to age 24 for full-time students. Check the specific definition in the PDS, as minor variations between providers can affect eligibility.',
      },
      {
        q: 'How do I insure teenagers on a family cruise policy?',
        a: 'Teenagers under 19 who meet the dependent child definition (not in full-time employment, travelling the full journey with a parent) are covered at no extra cost on most family policies. A 17-year-old who is studying full-time and travelling with parents qualifies as a dependent. A 19-year-old in full-time employment does not, and would need their own individual policy. For teenagers aged 18–19, check the specific dependent definition with your chosen provider, as the rules vary.',
      },
      {
        q: 'Does family cruise insurance cover a child\'s pre-existing conditions?',
        a: 'Children\'s pre-existing conditions must be declared just as adult conditions must. Most minor conditions common in children — controlled asthma, managed food allergies, eczema — can be covered with an appropriate loading or exclusion. Serious paediatric conditions (congenital heart defects, childhood cancer in treatment) may be excluded or require specialist assessment. Declare all conditions honestly during the online assessment — non-disclosure for a child\'s condition is treated the same as adult non-disclosure.',
      },
      {
        q: 'What if a child is injured on a shore excursion?',
        a: 'Shore excursion injuries to children are covered under the family cruise insurance policy in the same way as adult injuries. Immediate medical treatment ashore, transport to a hospital if needed, and any ongoing medical care are covered under the unlimited medical benefit. If the injury requires early return home, curtailment cover applies. Contact the emergency assistance team immediately for any serious injury — they will manage the medical and logistical process. Keep the emergency number in every adult\'s phone before shore excursions.',
      },
      {
        q: 'Can grandparents be added to a family cruise policy?',
        a: 'Most family cruise policies are structured for parents and their dependent children. Grandparents are typically not covered as "family" on a standard family policy — they would need their own separate policy. For multi-generational cruises, the most practical approach is a family policy for the parents and children, plus separate individual or couples policies for the grandparents. This allows each generation\'s age and medical profile to be correctly assessed and priced.',
      },
      {
        q: 'What is the cancellation limit on a family cruise policy?',
        a: 'Family policies typically offer cancellation cover at a per-person limit multiplied by the number of adults, with children\'s cancellation often included. The total cancellation limit must cover the entire family\'s non-refundable costs: the cruise booking for all family members, all flights, and any pre/post accommodation. For a family of four on an international cruise, total non-refundable costs can be $8,000–$16,000. Verify the family policy\'s total cancellation limit equals or exceeds this before purchasing.',
      },
      {
        q: 'Should we buy one family policy or individual policies for each family member?',
        a: 'In almost all cases, one family policy where children are included at no extra cost is better value than individual policies for each family member. The main exceptions are: if an adult family member has significantly different pre-existing conditions that benefit from a different provider, or if family members are travelling different itineraries. For standard family cruises where everyone travels together, a single family policy is simpler, often cheaper, and equally comprehensive.',
      },
      {
        q: 'Does a family cruise policy cover activities like snorkelling or water slides?',
        a: 'Most comprehensive family cruise policies cover standard water activities including snorkelling, swimming, and the ship\'s water park. More adventurous activities — scuba diving, water skiing, jet skiing — may require an adventure sports extension. Check the activities list in the PDS before booking excursions that involve any activity more vigorous than standard swimming. If in doubt, call the provider before the cruise to confirm a specific activity is covered. Adding adventure cover is typically inexpensive and removes uncertainty.',
      },
    ],
  },

  {
    slug: 'medical-cover-cruise',
    title: 'Medical Cover for Cruise',
    heroHeading: 'Cruise Medical Insurance — Unlimited Cover at Sea',
    metaTitle: 'Medical Cover for Cruise NZ — Compare Unlimited Medical Cruise Insurance',
    metaDescription: 'Medical cover is the most critical part of cruise insurance. Compare NZ providers for unlimited medical expenses, emergency evacuation and repatriation for cruise travellers.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    intro: 'Medical emergencies are the most financially devastating risk on a cruise. Onboard treatment is charged at private international rates, evacuation from sea is expensive, and you are far from shore-based hospitals. Unlimited medical cover is not optional.',
    sections: [
      {
        heading: 'Why Unlimited Medical Cover Is Essential at Sea',
        body: [
          'Once your cruise ship leaves port — even within New Zealand coastal waters — you are in an environment where public healthcare no longer applies. The ship\'s medical facility charges fully private rates for every interaction: a consultation with the ship\'s doctor costs $200–$350, intravenous medication $500–$1,500 per course, and a night in the ship\'s limited ICU facility $2,000–$5,000. These costs accumulate rapidly for any serious medical event.',
          'Serious illness requiring evacuation is where the costs become potentially life-changing. Helicopter transfer from a South Pacific cruise to a New Zealand or Australian hospital costs $20,000–$60,000. Fixed-wing air ambulance from Asia or Europe can cost $80,000–$150,000. Medical repatriation back to New Zealand once stable — in a medically configured aircraft with accompanying medical staff — adds another $30,000–$100,000.',
          'A policy with a $500,000 or even $1,000,000 medical limit can be exhausted by a catastrophic medical event that combines onboard treatment, helicopter evacuation, overseas hospitalisation, and repatriation. Unlimited medical cover is not marketing language — it is the only rational standard for cruise medical insurance, and all reputable NZ providers offer it.',
        ],
      },
      {
        heading: 'What Cruise Medical Cover Includes',
        body: [
          'Emergency medical expenses cover all reasonable and necessary treatment for sudden illness or injury while on your cruise. This includes ship doctor consultations and treatment, prescribed medications dispensed onboard, specialist procedures (X-rays, ECGs, ultrasound), surgical procedures performed onboard, and ICU admission. It also covers admission to a shore-based hospital if you are evacuated from the ship or are in port when the medical event occurs.',
          'Medical evacuation is a separate benefit that covers the cost of physically moving you from the ship to a medical facility. This includes helicopter transfer to a shore hospital, transfer by tender to a port where land ambulance is available, and fixed-wing air ambulance for longer distances. Emergency evacuation is arranged and authorised by the insurer\'s emergency assistance team — in most cases, you do not pay the costs directly and then claim reimbursement.',
          'Medical repatriation covers returning you to New Zealand for ongoing treatment once you are medically stable. This may involve a medically supervised commercial flight with premium seating, or in serious cases, a dedicated air ambulance with medical staff onboard. The insurer\'s medical case manager coordinates the repatriation plan with your treating doctors and manages the logistics. Repatriation also covers returning a deceased person\'s remains to New Zealand if the worst occurs.',
        ],
      },
      {
        heading: 'Pre-Existing Conditions and Medical Cover',
        body: [
          'Pre-existing medical conditions must be declared during the insurance purchase process for them to be covered. The online medical assessment — typically 5–15 minutes — determines whether your conditions can be covered, at what loading, and with what specific exclusions. Stable, well-controlled conditions (managed hypertension, type 2 diabetes with no complications, joint replacements) are commonly approved with modest loadings.',
          'Non-disclosure of a known medical condition is the most common reason for cruise insurance claims being declined. This applies not just to the specific condition — insurers can deny an unrelated claim on the basis that non-disclosure fundamentally undermines the policy contract. A traveller who fails to declare their heart condition may find their broken leg claim declined because the non-disclosure voids the entire policy.',
          'For complex medical histories, consider calling the insurer directly to discuss your conditions before completing the online assessment. Some providers have specialist medical underwriters who can assess complex cases with nuance that an online questionnaire cannot fully capture. This is particularly relevant for travellers with multiple conditions, recent hospitalisations, or conditions that have recently changed in severity.',
        ],
      },
      {
        heading: 'How the Emergency Assistance Service Works',
        body: [
          'The 24/7 emergency assistance service is the most important feature of any cruise medical insurance policy — more important than the premium and, in some ways, more important than the specific benefit limits. This service provides real-time medical case management when you are in a crisis situation far from home. The quality of this service can determine whether you receive appropriate treatment quickly or navigate a medical crisis alone.',
          'When you call the emergency assistance line, a qualified medical professional assesses your situation, liaises directly with the ship\'s medical team, authorises treatment and evacuation if necessary, coordinates with shore hospitals, manages communications with your family at home, and oversees your repatriation. They also handle the financial authorisation of your treatment so you are not required to pay $80,000 out of pocket and claim back later.',
          'Not all emergency assistance services are equal. Some providers operate genuine in-house 24/7 medical teams; others outsource to third-party call centres that may not have qualified medical staff at all hours. Ask your insurer specifically: "Does your emergency assistance service have qualified medical professionals available 24 hours a day, 7 days a week?" Southern Cross, Cover-More, and 1Cover all operate high-quality emergency assistance services.',
        ],
      },
      {
        heading: 'Medical Cover for Specific Cruise Risks',
        body: [
          'Gastroenteritis outbreaks are one of the most common medical events on cruise ships. Norovirus spreads rapidly in the shared food service environment, and a shipwide outbreak can affect hundreds of passengers. Treatment — hydration, medication, rest — is typically managed onboard, and costs are covered under the medical benefit. If you are hospitalised ashore due to a severe gastrointestinal illness, that is also covered.',
          'Cardiac events are the leading cause of serious medical claims on cruises, particularly for older travellers. Heart attacks and serious arrhythmias require immediate onboard stabilisation (at significant cost) and typically require evacuation to a cardiac care facility ashore. The combination of onboard treatment plus evacuation plus hospitalisation plus repatriation can easily reach $150,000–$300,000 for a serious cardiac event in international waters.',
          'Allergic reactions and anaphylaxis are a risk for travellers with known severe allergies. The ship\'s medical facility stocks epinephrine (adrenaline) auto-injectors, but severe anaphylaxis may require evacuation to a shore facility with ICU capacity. If you have a known severe allergy, inform the ship\'s medical staff before departure and carry your own emergency medication. Coverage for anaphylaxis treatment and evacuation is included under the medical benefit.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited emergency medical expenses',
      'Onboard treatment at ship\'s clinic',
      'Specialist procedures onboard',
      'Helicopter evacuation to shore',
      'Fixed-wing air ambulance transfer',
      'Shore hospital admission',
      'Medical repatriation to New Zealand',
      'Return of remains if deceased',
      'Pre-existing condition cover (declared)',
      'Dental emergency treatment',
      '24/7 emergency medical assistance',
      'Medical case management service',
    ],
    costGuide: [
      { item: 'Typical GP visit on cruise ship', range: '$200–$350' },
      { item: 'Overnight ship clinic admission', range: '$1,500–$5,000' },
      { item: 'Helicopter evacuation — South Pacific', range: '$20,000–$60,000' },
      { item: 'Fixed-wing from Asia to NZ', range: '$80,000–$150,000' },
      { item: 'Medical repatriation from Europe', range: '$60,000–$120,000' },
      { item: 'Insurance premium (10-day South Pacific)', range: '$170–$290/person' },
    ],
    faqs: [
      {
        q: 'What medical limit do I need for a cruise?',
        a: 'Unlimited emergency medical cover is the only appropriate standard for cruise travel insurance. Medical limits of $500,000 or $1,000,000 sound large but can be exhausted by a catastrophic event: $50,000 onboard treatment + $60,000 helicopter evacuation + $80,000 shore hospitalisation + $100,000 fixed-wing repatriation from Europe = $290,000. For an extended serious illness, costs can easily exceed $500,000. All reputable NZ providers offer unlimited medical as their standard — do not accept a policy with a capped limit.',
      },
      {
        q: 'Does cruise medical insurance cover treatment in the ship\'s clinic?',
        a: 'Yes. The unlimited emergency medical benefit covers all treatment in the ship\'s medical facility including consultations with the ship\'s doctor, specialist procedures (X-rays, ECGs, infusions), prescribed medications, and admission to the ship\'s limited ICU. These services are charged at private international rates, and the costs are covered directly by the insurer\'s emergency assistance team after authorisation. You should not need to pay out of pocket and claim reimbursement for onboard treatment.',
      },
      {
        q: 'Will my cruise medical insurance cover pre-existing conditions?',
        a: 'Yes, with full and honest declaration during the online medical assessment. Most stable, well-controlled conditions can be covered at an additional premium loading. The assessment typically takes 5–15 minutes and will confirm cover for specific conditions, any exclusions, and the additional premium. Complete the assessment with at least two providers and compare the loaded premiums. Non-disclosure of a known condition is the primary reason for claim denials — it is never worth the premium saving.',
      },
      {
        q: 'What happens if I need a medical evacuation from my cruise?',
        a: 'Contact the emergency assistance number on your certificate of insurance immediately. The team — staffed by qualified medical professionals around the clock — will assess your condition with the ship\'s medical staff, authorise evacuation if required, and coordinate the helicopter or fixed-wing transfer. They will arrange and pay for the evacuation directly, so you do not need to organise or pay for it yourself. They will also coordinate your admission to the shore hospital and manage communications with your family.',
      },
      {
        q: 'Does medical insurance cover dental emergencies on a cruise?',
        a: 'Yes — most comprehensive cruise policies include emergency dental treatment as part of the medical benefit. Emergency dental cover typically has a sub-limit (commonly $500–$1,500 per person) and covers treatment required to relieve acute pain, not routine dental work or pre-existing dental conditions. If a tooth breaks or causes severe pain during your cruise, treatment in the ship\'s dental clinic (if available) or ashore at a port is typically covered. Check the specific dental limit in your policy.',
      },
      {
        q: 'Is norovirus treatment on a cruise covered by medical insurance?',
        a: 'Yes. Gastroenteritis including norovirus is covered as a sudden illness under the medical benefit. Treatment onboard — doctor consultation, rehydration, medication — is covered at ship rates. If a severe case requires hospitalisation ashore, the hospital admission and any ongoing treatment are also covered. Cabin confinement due to a medical order from the ship\'s doctor (common practice during gastro outbreaks) triggers the cabin confinement daily benefit. Keep all medical treatment receipts and obtain a medical certificate from the ship\'s doctor for any significant illness.',
      },
      {
        q: 'Does cruise medical insurance cover mental health emergencies?',
        a: 'Coverage for mental health emergencies varies between providers. Most policies cover acute psychiatric emergencies that require hospitalisation — a severe episode of psychosis, a mental health crisis requiring immediate clinical intervention, for instance. Ongoing mental health treatment and pre-existing mental health conditions are typically excluded or subject to significant limitations. Check the mental health clause in the PDS of any policy you are considering. If you have a diagnosed mental health condition, disclose it during the medical assessment to understand what is and is not covered.',
      },
      {
        q: 'What documentation do I need to make a medical claim from a cruise?',
        a: 'Keep all documentation from any medical event: the ship\'s doctor consultation notes, itemised medical bills from the ship\'s clinic, hospital admission and discharge summaries from any shore hospitalisation, receipts for all medications, and any written medical certificates. Contact the emergency assistance team as soon as a significant medical event occurs — they will guide you on documentation requirements in real time. For repatriation claims, the emergency assistance team typically manages the documentation process on your behalf.',
      },
    ],
  },

  {
    slug: 'comprehensive-cruise-insurance',
    title: 'Comprehensive Cruise Insurance',
    heroHeading: 'Comprehensive Cruise Insurance — Complete Protection at Sea',
    metaTitle: 'Comprehensive Cruise Insurance NZ — Full Cover for Every Risk',
    metaDescription: 'Comprehensive cruise insurance provides complete cover for medical, evacuation, cabin confinement, cancellation, missed ports and more. Compare top NZ providers for full cruise protection.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    intro: 'Comprehensive cruise insurance provides the highest level of protection — unlimited medical, full evacuation, cabin confinement, trip cancellation, missed ports, and shore excursion cover — in one complete policy. For any cruise costing more than $2,000 per person, comprehensive cover is the rational choice.',
    sections: [
      {
        heading: 'What Comprehensive Cruise Insurance Includes',
        body: [
          'A comprehensive cruise policy is built on an unlimited emergency medical foundation, then layers all cruise-specific benefits on top. Medical cover includes: all treatment in the ship\'s medical facility at private rates, emergency hospitalisation ashore in any country, specialist care, surgery, and ICU admission. Evacuation cover includes helicopter transfer from ship to shore, fixed-wing air ambulance for longer distances, and full medical repatriation back to New Zealand.',
          'Cruise-specific benefits in a comprehensive policy include: cabin confinement daily cash (typically $100–$150 per day, total $1,000–$1,500 per person), missed port departure (transport costs to rejoin the ship at the next port, typically $1,500–$2,500), cancelled shore excursions (reimbursement of prepaid activity costs, typically $1,000–$2,000 per person), and formal attire cover (loss or damage to formalwear packed for cruise formal nights).',
          'Standard travel benefits are also included: trip cancellation (matching your total non-refundable booking cost), travel curtailment (if you cut the cruise short due to a covered event), lost, stolen, or damaged luggage (typically $15,000–$20,000 per person), personal liability (typically $2.5–$5 million), and travel delay expenses. These benefits give you comprehensive protection across every phase of your cruise journey.',
        ],
      },
      {
        heading: 'Comprehensive vs Basic Cruise Insurance',
        body: [
          'Basic cruise insurance provides core medical and evacuation cover with limited cancellation benefits and minimal cruise-specific extras. It is appropriate for budget-conscious short domestic cruises where the financial risk is low. Comprehensive cover is warranted when the financial stakes are higher — international cruises, longer voyages, or any cruise where the non-refundable booking cost exceeds $3,000 per person.',
          'The key differences between basic and comprehensive cover are in the cancellation limit and the cruise-specific benefit levels. A basic policy might offer $5,000 cancellation per person and $500 for missed ports. A comprehensive policy might offer unlimited cancellation and $2,500 for missed port departure. For a $7,000 cruise, the basic policy leaves $2,000 uninsured if you cancel. For a European cruise with $2,000 in prepaid shore excursions, the basic policy\'s $500 excursion limit leaves $1,500 exposed.',
          'The premium difference between basic and comprehensive cover is typically $50–$150 per person for a standard international cruise. Against the financial exposure of a $6,000–$15,000 cruise booking, the additional premium for comprehensive cover represents excellent value. The question is not whether you can afford comprehensive cover — it is whether you can afford to be without it.',
        ],
      },
      {
        heading: 'Comprehensive Cover for Different Cruise Destinations',
        body: [
          'Domestic New Zealand cruises: Even for short domestic voyages, comprehensive cover provides peace of mind that basic policies cannot. The unlimited medical benefit is equally relevant on a NZ domestic cruise — the ship\'s clinic charges the same private rates regardless of whether you are in NZ waters or the South Pacific. For a 7-day domestic cruise at $2,000–$3,000 per person, comprehensive cover costs $140–$200 and covers the full financial and medical risk.',
          'South Pacific cruises (Fiji, Vanuatu, Samoa, Cook Islands): Comprehensive cover is the standard recommendation. Medical facilities at South Pacific island ports are limited, which increases the likelihood of evacuation to New Zealand or Australia for serious medical events. Shore excursion cancellations are common due to weather, and cabin confinement benefits are frequently triggered by sea-motion illness in rougher Pacific crossings.',
          'European and Mediterranean cruises: Comprehensive cover is essential for any European voyage. Medical costs in European countries (particularly Scandinavia, UK, and Switzerland) are high, and cruise itineraries that span multiple countries require a policy that provides consistent cover regardless of which country the medical event occurs in. Trip cancellation for a European cruise with flights and hotels can easily run to $15,000–$25,000 per couple — comprehensive unlimited cancellation cover is the only appropriate approach.',
        ],
      },
      {
        heading: 'Comprehensive Cover for Different Traveller Types',
        body: [
          'Senior travellers aged 65 and above benefit most significantly from comprehensive cover. Higher medical claim rates, greater likelihood of pre-existing conditions requiring ship clinic visits, and a longer recovery profile if an event occurs all argue for the highest level of cover available. For seniors, the additional $50–$100 premium for comprehensive over basic cover is a clearly justified expenditure.',
          'Families travelling with young children also benefit from comprehensive policies. Children\'s medical claim rates on cruises are relatively high (gastro, injuries, motion sickness), and comprehensive policies provide higher per-child medical cover, better cabin confinement benefits, and stronger cancellation limits that protect the full family booking cost. Most providers include children at no extra cost on family comprehensive policies.',
          'First-time cruisers benefit from comprehensive cover simply because they are unfamiliar with the specific risks and costs of cruising. The cabin confinement benefit is relevant to first-time cruisers who may not anticipate sea sickness. Shore excursion cover is relevant if they book multiple prepaid activities. And the peace of mind of having maximum cover allows first-time cruisers to focus on the experience rather than the financial risks.',
        ],
      },
      {
        heading: 'How to Choose a Comprehensive Cruise Policy',
        body: [
          'Start with the medical cover: confirm "unlimited" is explicitly stated in the benefit schedule, not just implied. Some policies use "up to $X million" language that technically caps the medical benefit — only accept "unlimited" as the medical limit. Verify that evacuation and repatriation are also explicitly included and described in the benefit schedule, not just referenced in the fine print.',
          'Check the cancellation limit against your total non-refundable cost. A "comprehensive" policy with a $10,000 cancellation limit is not comprehensive for a $15,000 cruise. Look for policies with unlimited cancellation or a limit that you have specifically verified covers your total trip cost. Some providers allow you to select a custom cancellation limit; others offer unlimited cancellation as standard on their Comprehensive product tier.',
          'Finally, read the PDS exclusions section specifically. Common exclusions that can reduce a "comprehensive" policy\'s actual coverage include: pre-existing conditions not assessed, high-risk activities, self-inflicted injury, influence of alcohol, war and civil unrest, and travel to government-advised "do not travel" destinations. A comprehensive policy with broad exclusions provides less actual cover than a well-targeted basic policy with narrow exclusions.',
        ],
      },
    ],
    coveragePoints: [
      'Unlimited emergency medical',
      'Helicopter and fixed-wing evacuation',
      'Medical repatriation home',
      'Unlimited trip cancellation',
      'Cruise curtailment cover',
      'Cabin confinement daily benefit',
      'Missed port departure allowance',
      'Shore excursion cancellation ($2,000)',
      'Formal attire cover',
      'Lost luggage ($15,000+)',
      'Personal liability ($5M)',
      '24/7 emergency assistance',
    ],
    costGuide: [
      { item: 'Domestic NZ 7-day — comprehensive (per person)', range: '$140–$200' },
      { item: 'South Pacific 10-day — comprehensive (per person)', range: '$200–$320' },
      { item: 'Australian cruise 14-day — comprehensive (per person)', range: '$230–$370' },
      { item: 'Asia 14-day — comprehensive (per person)', range: '$290–$480' },
      { item: 'Mediterranean 21-day — comprehensive (per person)', range: '$390–$660' },
      { item: 'Senior 70+, South Pacific 10-day (per person)', range: '$360–$600' },
    ],
    faqs: [
      {
        q: 'What does comprehensive cruise insurance include?',
        a: 'Comprehensive cruise insurance includes: unlimited emergency medical expenses (onboard and ashore), helicopter evacuation from ship to shore, fixed-wing air ambulance for longer distances, full medical repatriation to New Zealand, cabin confinement daily cash benefit, missed port departure transport cover, cancelled shore excursion reimbursement, formal attire cover, trip cancellation matching your full booking cost, travel curtailment, lost and delayed luggage ($15,000+), personal liability ($2.5–5M), and 24/7 worldwide emergency assistance.',
      },
      {
        q: 'Is comprehensive cruise insurance worth the extra cost?',
        a: 'For almost all international cruises, yes. The additional premium over basic cover is typically $50–$150 per person. Against the financial exposure of a $5,000–$15,000 cruise booking, this is a small incremental cost for meaningfully higher protection. The cancellation benefit alone — protecting your full non-refundable booking cost versus a capped basic policy limit — often justifies the upgrade. For domestic short cruises with low financial exposure, basic cover may be adequate. For anything international, comprehensive is the right choice.',
      },
      {
        q: 'Does comprehensive cruise insurance cover pre-existing conditions?',
        a: 'Comprehensive policies cover pre-existing conditions that have been declared and assessed during the purchase process. The assessment is an online questionnaire that takes 5–15 minutes and determines whether your conditions can be covered, at what loading, and with what exclusions. Most stable, well-controlled conditions can be covered. The comprehensive tier does not automatically mean all conditions are covered — full disclosure and assessment is still required. Non-disclosed conditions are excluded regardless of the policy tier.',
      },
      {
        q: 'What is the cabin confinement benefit and how does it work?',
        a: 'Cabin confinement cover pays a daily cash benefit if the ship\'s medical officer formally confines you to your cabin due to illness. This is a cruise-specific benefit unique to cruise insurance policies. The daily benefit is typically $100–$150 per day with a total limit of $1,000–$1,500 per person. To claim, you need written certification from the ship\'s medical officer confirming the dates and medical reason for confinement. On a 14-day cruise, 3 days of confinement generates $300–$450 per person — meaningful compensation for the disruption to your holiday.',
      },
      {
        q: 'Does comprehensive cruise insurance cover missed port departures?',
        a: 'Yes. Missed port departure cover pays for transport expenses to catch up with the cruise at the next port if you miss your scheduled embarkation due to a covered cause — delayed connecting flight, mechanical breakdown of transport, accident, or sudden illness. The benefit typically pays $1,500–$2,500 per person for transport costs (flights, transfers, hotels) to rejoin the ship. Without this cover, missing embarkation means either forfeiting the remainder of the cruise or paying out of pocket to rejoin it.',
      },
      {
        q: 'What shore excursion cover does comprehensive insurance include?',
        a: 'Comprehensive cruise policies typically include $1,000–$2,000 per person for cancelled or unused shore excursions. This covers prepaid excursion costs that you cannot use due to illness, injury, or the ship missing a port. For expensive excursions — helicopter tours in Alaska ($500–$800 per person), luxury dining experiences in European ports, historical guided tours in Asia — this benefit can reimburse a significant amount. Always check the per-excursion limit and the total limit before booking high-value activities.',
      },
      {
        q: 'Does comprehensive cruise cover include COVID-19?',
        a: 'Most comprehensive NZ cruise policies include COVID-19 medical cover under the standard unlimited medical benefit. Emergency treatment if you test positive on the cruise is covered. COVID-19 cancellation cover is more nuanced: most policies cover cancellation if you personally test positive immediately before departure, but not voluntary cancellation due to general COVID-19 concerns or lower-level travel advisories. Cancel-for-any-reason cover is available as an additional option with some providers at significant extra cost. Check the specific COVID-19 clause in the PDS.',
      },
      {
        q: 'How do comprehensive policies handle multiple destinations?',
        a: 'Comprehensive cruise policies cover your full itinerary including all countries and regions visited. When purchasing, declare every destination your ship visits — the provider will select the appropriate regional rating that covers all countries on your itinerary. For cruises spanning multiple regions (e.g., a voyage from Auckland visiting Australia, New Caledonia, and Vanuatu), a single policy covering all regions is typically issued at the highest applicable regional rate. Do not attempt to declare only the primary destination to save on premium — claims at uncovered destinations will be declined.',
      },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find(p => p.slug === slug);
}
