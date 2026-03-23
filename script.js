document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    ar: {
      logoText: "Loving Homes", home: "الرئيسية", about: "من نحن", services: "الخدمات ", gallery: "معرض الصور", tips: "نصائح", contact: "تواصل معنا", location: "📍 هونغ كونغ", book: "احجز الآن",
      whyNav: "لماذا تختارنا", policiesNav: "الشروط والسياسات", prebookingNav: "متطلبات الحجز", newsNav: "المدونة / الأخبار",
      heroTitle: "راحة وأمان لصديقك الصغير", heroDesc: "تجربة فندقية فاخرة مصممة خصيصاً لكلبك، حيث يتمتع برعاية متخصصة وراحة قصوى في بيئة آمنة وفاخرة.",
      exploreServices: "استكشف المرافق",
      chipCare: "24/7 رعاية",
      chipCam: "كاميرات بث مباشر",
      chipVets: "أطباء بيطريين معتمدين",
      aboutTitle: "من نحن",
      aboutIntroTitle: "نبذة سريعة",
      aboutIntroBody: "«Loving Homes» فندق كلاب فاخر يقدّم إقامة آمنة، برامج ترفيهية، ورعاية طبية خاضعة لمعايير دولية.",
      visionTitle: "رؤيتنا ورسالتنا",
      visionBody: "أن نصبح الوجهة الأولى للمالكين الذين يبحثون عن بيئة حانية وآمنة لأصدقائهم.",
      why1: "تحديثات صور يومية",
      why2: "مسارات لعب داخلية وخارجية",
      why3: "طاقم ثنائي اللغة",
      why4: "خطة تغذية مخصصة",
      servicesTitle: "الخدمات",
      packagesNav: "الحزم",
      servicesIntro: "صالة للحلاقة ومنتجع – المرافق المقدمة.",
      service1: "غرف مزودة بتدفئة/ تبريد تحت الأرضية وتلفزيون", service1Desc: "راحة حرارية وترفيه لضمان إقامة مثالية.",
      service2: "خدمة التوصيل «من وإلى المكان»", service2Desc: "نقل آمن ومريح لكلبك في الاتجاهين.",
      service3: "مراعي خارجية آمنة", service3Desc: "مساحات خضراء مؤمنة للركض واللعب بحرية.",
      service4: "خدمات بيطرية متاحة على مدار 24 ساعة", service4Desc: "أطباء بيطريون جاهزون لأي طارئ طوال اليوم.",
      service5: "مرافق أخرى", service5Desc: "مزايا إضافية تجعل الإقامة أكثر ثراءً.",
      amenityMon: "مراقبة الحيوانات الأليفة", amenityMonDesc: "نظام مراقبة مستمر بالكاميرات لمتابعة حيوانك الأليف وضمان سلامته طوال الوقت.",
      amenityWalk: "التمشية في الغابات", amenityWalkDesc: "جولات تمشية يومية في مسارات طبيعية آمنة تمنح كلبك نشاطًا وحيوية.",
      amenityGrass: "مساحة عشب خاصة", amenityGrassDesc: "منطقة عشب نظيفة ومسيّجة مخصصة للعب والاسترخاء بحرية تامة.",
      amenityBarn: "حظيرة لعب داخلية", amenityBarnDesc: "منطقة لعب داخلية مجهزة بألعاب آمنة للمرح والنشاط في جميع الأوقات.",
      packagesTitle: "حزم الإقامة",
      pkgDay: "حزمة اليوم الواحد", pkgDayPrice: "99 يوان / يوم", pkgDay1: "✓ المشي مرتين يوميًا", pkgDay2: "✓ منطقة لعب خارجية", pkgDay3: "✓ مسار الرشاقة", pkgDay4: "✓ حفر حفرة في الرمل",
      pkgClassic: "الحزمة الكلاسيكية", pkgClassicPrice: "249 يوان / 3 أيام", pkgClassic1: "✓ المشي ثلاث مرات", pkgClassic2: "✓ ممارسة ثلاث أنشطة يوميًا", pkgClassic3: "✓ حظيرة لعب داخلية", pkgClassic4: "✓ منطقة للاسترخاء", pkgClassic5: "✓ جلسة حلاقة وتنظيف",
      pkgPremium: "الحزمة المميزة", pkgPremiumPrice: "499 يوان / أسبوع", pkgPremium1: "✓ المشي أربع مرات وممارسة أربع أنشطة يوميًا", pkgPremium2: "✓ مساحة عشب خاصة", pkgPremium3: "✓ تحديثات صور يومية", pkgPremium4: "✓ مكافآت حسب الاتفاق مع المالك", pkgPremium5: "✓ فحص بيطري شامل",
      pkgCustom: "الحزمة المخصصة", pkgCustomPrice: "حسب الطلب", pkgCustom1: "✓ تختار المدة والمرافق", pkgCustom2: "✓ خطة تغذية بحسب طلبك", pkgCustom3: "✓ إضافة خدمات نقل/صور/تدريب", customRequest: "أرسل طلبك",
      bookingTitle: "نموذج شراء/حجز الحزمة", bookingDesc: "املأ البيانات التالية لإتمام الطلب.", phonePlaceholder: "رقم الهاتف", customReqPlaceholder: "أضف طلبك هنا...",
      paymentTitle: "طريقة الدفع", payCard: "بطاقة ائتمان", payCash: "دفع عند الوصول", payTransfer: "تحويل إلكتروني", confirmBuy: "تأكيد الشراء", bookingSuccess: "تم استلام طلبك وسنتواصل معك للتأكيد.",
      packagesNote: "تتوفر حزم مخصصة للإقامات الطويلة أو للكلاب ذات المتطلبات الإضافية. تواصل معنا لترتيب حزمة خاصة.",
      whyTitle: "لماذا تختارنا",
      whyIntro: "نركّز على الجمع بين الأمان والاحتراف والتواصل الشفاف ليشعر مالكك بالثقة من لحظة الحجز.",
      whyPoint1Title: "مراقبة بالكاميرات على مدار الساعة",
      whyPoint1Body: "فريق المراقبة يتابع كل غرفة ويبلغ فوريًا عن أي تغيرات غير متوقعة.",
      whyPoint2Title: "فريق رعاية متخصص",
      whyPoint2Body: "أخصائيين مدرّبين في التغذية والسلوك والإسعاف لتلبية احتياجات كل كلب.",
      whyPoint3Title: "مرافق آمنة ومسيجة",
      whyPoint3Body: "مسارات فردية وأسوار عالية تضمن بيئة خالية من المفاجآت.",
      whyPoint4Title: "تحديثات يومية وخدمات بيطرية",
      whyPoint4Body: "نرسل صورًا وتحديثات عن الصحة مع إمكانية استشارة الطبيب في أي لحظة.",
      whyStat1Value: "500+",
      whyStat1Label: "عميل راضٍ",
      whyStat2Value: "1000+",
      whyStat2Label: "إقامة ناجحة",
      whyStat3Value: "24/7",
      whyStat3Label: "رعاية متواصلة",
      policiesTitle: "الشروط والسياسات",
      policyCancelTitle: "سياسة الإلغاء",
      policyCancelDesc: "نعالج الإلغاءات بشفافية لتقليل النزاعات.",
      policyCancelRule1: "إلغاء مجاني قبل 48 ساعة من الموعد.",
      policyCancelRule2: "خصم 30% من قيمة الحجز عند الإلغاء خلال 48 ساعة.",
      policyCancelRule3: "نعتمد استثناءات الطوارئ الطبية بعد تقديم وثائق.",
      policyStayTitle: "شروط الإقامة",
      policyStayDesc: "تحدد القواعد سلوك الضيوف لضمان الراحة لכולם.",
      policyStayRule1: "الالتزام بمواعيد التسليم والاستلام.",
      policyStayRule2: "احترام القوانين الداخلية في كافة المناطق.",
      policyStayRule3: "المسؤولية عن الأغراض الشخصية تعود للمالك.",
      policyEmergencyTitle: "سياسة الطوارئ",
      policyEmergencyDesc: "خطة واضحة للتعامل مع الحوادث الصحية والطوارئ.",
      policyEmergencyRule1: "التواصل الفوري مع المالك عند حدوث حالة.",
      policyEmergencyRule2: "نقل الحيوان إلى عيادة معتمدة عند الحاجة.",
      policyEmergencyRule3: "توثيق الحالة وحفظ السجلات للمتابعة.",
      policyLiabilityTitle: "بند المسؤولية",
      policyLiabilityDesc: "نوضح حدود مسؤولياتنا ومسؤولياتك كمالك.",
      policyLiabilityRule1: "الإفصاح عن أي حالة طبية أو حساسية قبل الحجز.",
      policyLiabilityRule2: "المالك مسؤول عن صحة الحيوان عند الوصول.",
      policyLiabilityRule3: "الفندق مسؤول عن الرعاية ضمن النطاق المذكور.",
      prebookingTitle: "المتطلبات قبل الحجز",
      prebookingIntro: "تنظيم القبول يقلّل المخاطر ويضمن بيئة آمنة لكل الحيوانات.",
      prebookingAgeTitle: "عمر الكلب المقبول",
      prebookingAgeBody: "نستقبل الكلاب من عمر 6 أشهر حتى 10 سنوات لتقليل الحالات الفائقة الرعاية.",
      prebookingVaxTitle: "حالة التطعيم",
      prebookingVaxBody: "نطلب تطعيم السعار واللقاحات الأساسية مع شهادة حديثة.",
      prebookingBehaviorTitle: "السلوك المطلوب",
      prebookingBehaviorBody: "يجب أن يكون الكلب غير عدواني، معتاد على الاختلاط ومدرّب على الأساسيات.",
      prebookingBringTitle: "الأشياء التي يجب إحضارها",
      prebookingBringIntro: "أحضِر العناصر المألوفة لتقليل التوتر وضمان روتين مريح.",
      prebookingBringItem1: "طعامه الخاص.",
      prebookingBringItem2: "دفتر التطعيم المحدث.",
      prebookingBringItem3: "أداة أو لعبة مألوفة له.",
      newsTitle: "المدونة / الأخبار",
      newsIntro: "مقالات وأخبار تسلط الضوء على نشاط الفندق والمحتوى التوعوي.",
      newsMeta1: "مقال | مارس 2026",
      newsArticle1Title: "كيفية تجهيز الكلب للإقامة",
      newsArticle1Body: "تدريبات قصيرة قبل الحجز وأدوات مألوفة تقلّل القلق.",
      newsMeta2: "نصائح | فبراير 2026",
      newsArticle2Title: "طرق تقليل القلق عند الحيوانات",
      newsArticle2Body: "التنفس العميق والمكافآت الصغيرة يبنيان ثقة الكلب.",
      newsMeta3: "أخبار | يناير 2026",
      newsArticle3Title: "تحديثات الفندق",
      newsArticle3Body: "أضفنا جناحًا جديدًا للخدمات البيطرية وتوسيع منطقة اللعب الخارجية.",
      choose: "اختر الحزمة", popular: "الأكثر شهرة",
      galleryTitle: "معرض الصور",
      tipsTitle: "نصائح العناية",
      faq: "الأسئلة الشائعة",
      faqTitle: "الأسئلة الشائعة",
      faqQ1: "ما هي ساعات العمل لديكم؟",
      faqA1: "نحن متاحون يوميًا لاستقبال وتسليم الحيوانات الأليفة، كما تتوفر الرعاية على مدار 24 ساعة داخل المنشأة.",
      faqQ2: "هل يمكنني زيارة المكان قبل الحجز؟",
      faqA2: "نعم، نرحب بزيارتك للموقع بعد حجز موعد مسبق للتعرف على المرافق والخدمات.",
      faqQ3: "ماذا يجب أن أحضر مع كلبي عند الإقامة؟",
      faqA3: "يفضل إحضار طعام الكلب الخاص به، وأي أدوية يحتاجها، بالإضافة إلى معلوماته الصحية الأساسية.",
      faqQ4: "هل توفرون خدمة التوصيل؟",
      faqA4: "نعم، نوفر خدمة توصيل آمنة من وإلى الموقع لتسهيل تجربة العملاء.",
      faqQ5: "هل يتم إخراج الكلاب للمشي يوميًا؟",
      faqA5: "نعم، يتم توفير جولات مشي يومية وفقًا للحزمة المختارة لضمان نشاط الكلب وراحته.",
      faqQ6: "ماذا يحدث في حال الطوارئ الطبية؟",
      faqA6: "لدينا خدمات بيطرية متاحة على مدار 24 ساعة للتعامل مع أي حالة طارئة بسرعة واحترافية.",
      faqQ7: "هل يمكن حجز باقات مخصصة؟",
      faqA7: "نعم، نوفر باقات مخصصة للإقامات الطويلة أو للحيوانات ذات الاحتياجات الخاصة. يرجى التواصل معنا للترتيب.",
      faqQ8: "كيف أستلم تحديثات عن كلبي أثناء الإقامة؟",
      faqA8: "نرسل تحديثات وصور يومية لطمأنتك على حالة حيوانك الأليف.",
      faqQ9: "هل المكان آمن للكلاب؟",
      faqA9: "نعم، جميع المرافق مؤمنة وتخضع للمراقبة المستمرة لضمان أعلى مستويات السلامة.",
      faqQ10: "كيف يمكنني الحجز؟",
      faqA10: "يمكنك الحجز عبر صفحة التواصل في الموقع أو الاتصال بنا مباشرة.",
      tipWalkTitle: "نصائح تمشية الكلاب", tipWalkBody: "استخدم طوقًا أو حزامًا مناسبًا، واحمل ماءً نظيفًا لكلبك خاصة في الطقس الحار، وحافظ على وتيرة مشي مريحة مع فترات استراحة قصيرة.",
      tipFurTitle: "العناية بالفرو", tipFurBody: "قم بتمشيط الفرو بانتظام لإزالة الشعر المتساقط ومنع التشابك، واستخدم شامبو مخصص للكلاب عند الاستحمام للحفاظ على صحة الجلد.",
      tipPrepTitle: "تجهيز الكلب للإقامة", tipPrepBody: "أحضر اللعبة أو البطانية المفضلة لكلبك لتقليل التوتر، وتأكد من تحديث بطاقة اللقاحات وتعريف الكلب بالمكان بشكل تدريجي.",
      tipFoodTitle: "تغذية متوازنة", tipFoodBody: "قدّم وجبات متوازنة مرتين إلى ثلاث مرات يوميًا، وتجنب تغيير نوع الطعام بشكل مفاجئ لتفادي مشاكل الهضم.",
      tipMindTitle: "التمارين العقلية", tipMindBody: "قدّم ألعابًا وأنشطة تحفّز عقل الكلب مثل الألغاز أو البحث عن الطعام، فهذا يساعد على تقليل الملل والسلوكيات غير المرغوبة.",
      tipHealthTitle: "الرعاية الصحية الدورية", tipHealthBody: "قم بزيارة الطبيب البيطري بانتظام للفحص الروتيني، وتأكد من متابعة الوقاية ضد الطفيليات مثل البراغيث والقراد.",
      contactTitle: "تواصل معنا", namePlaceholder: "الاسم الكامل", emailPlaceholder: "البريد الإلكتروني", subjectPlaceholder: "الموضوع",
      messagePlaceholder: "اكتب رسالتك هنا...", submitBtn: "إرسال الرسالة", successMsg: "تم إرسال رسالتك بنجاح ✅",
      mapTitle: "موقعنا على الخريطة", footerLogo: "Loving Homes", footerDesc: "فندق كلاب فاخر بمعايير عالمية.",
      footerLinks: "روابط سريعة", footerContact: "تواصل معنا"
    },
    en: {
      logoText: "Loving Homes", home: "Home", about: "About", services: "Services & Packages", gallery: "Gallery", tips: "Tips", contact: "Contact", location: "📍 Hong Kong", book: "Book Now",
      whyNav: "Why Choose Us", policiesNav: "Policies", prebookingNav: "Pre-Booking", newsNav: "Blog / News",
      heroTitle: "Comfort and Safety for Your Little Friend", heroDesc: "A luxury hotel experience designed specifically for your dog with specialized care and maximum comfort.",
      exploreServices: "Explore Services",
      chipCare: "24/7 Care",
      chipCam: "Live Cameras",
      chipVets: "Certified Vets",
      aboutTitle: "About Us",
      aboutIntroTitle: "Quick Intro",
      aboutIntroBody: "“Loving Homes” is a luxury dog hotel offering safe stays, fun programs, and vet-grade care.",
      visionTitle: "Our Vision & Mission",
      visionBody: "To be the first choice for owners seeking a kind and safe home for their dogs.",
      why1: "Daily photo updates",
      why2: "Indoor & outdoor play tracks",
      why3: "Bilingual staff",
      why4: "Custom nutrition plans",
      servicesTitle: "Services & Packages",
      servicesIntro: "Grooming lounge & resort – amenities provided.",
      service1: "Heated/cooled rooms with TV", service1Desc: "Thermal comfort plus entertainment for a perfect stay.",
      service2: "Pickup & drop-off", service2Desc: "Safe, comfortable transport both ways.",
      service3: "Secure outdoor fields", service3Desc: "Guarded green spaces for running and play.",
      service4: "24/7 veterinary care", service4Desc: "Veterinarians ready all day and night for emergencies.",
      service5: "Other facilities", service5Desc: "Extra perks that enrich every stay.",
      amenityMon: "Pet monitoring", amenityMonDesc: "Continuous camera monitoring to keep your pet safe at all times.",
      amenityWalk: "Forest walks", amenityWalkDesc: "Daily guided walks on safe nature trails to keep your dog active and happy.",
      amenityGrass: "Private turf area", amenityGrassDesc: "Clean, fenced turf area dedicated to free play and relaxation.",
      amenityBarn: "Indoor play barn", amenityBarnDesc: "Indoor play barn equipped with safe toys for fun any time.",
      packagesTitle: "Stay Packages",
      pkgDay: "Daily Package", pkgDayPrice: "99 CNY / day", pkgDay1: "✓ 24-hour stay", pkgDay2: "✓ Two healthy meals", pkgDay3: "✓ 1 hour group play", pkgDay4: "✓ Sand-pit play",
      pkgClassic: "Classic Package", pkgClassicPrice: "249 CNY / 3 days", pkgClassic1: "✓ All daily perks", pkgClassic2: "✓ One grooming session", pkgClassic3: "✓ Daily photo updates", pkgClassic4: "✓ Relax lounge access", pkgClassic5: "✓ Grooming & cleaning session",
      pkgPremium: "Premium Package", pkgPremiumPrice: "499 CNY / week", pkgPremium1: "✓ All classic perks", pkgPremium2: "✓ Full vet check", pkgPremium3: "✓ Free pickup & delivery", pkgPremium4: "✓ Treats as agreed", pkgPremium5: "✓ Comprehensive vet exam",
      pkgCustom: "Custom Package", pkgCustomPrice: "On request", pkgCustom1: "✓ Pick duration & facilities", pkgCustom2: "✓ Nutrition plan your way", pkgCustom3: "✓ Add transport/photos/training", customRequest: "Send Request",
      bookingTitle: "Package Booking Form", bookingDesc: "Fill in the details to complete your request.", phonePlaceholder: "Phone number", customReqPlaceholder: "Add your request here...",
      paymentTitle: "Payment method", payCard: "Credit card", payCash: "Pay on arrival", payTransfer: "Bank transfer", confirmBuy: "Confirm purchase", bookingSuccess: "We received your request and will contact you to confirm.",
      packagesNav: "Packages",
      packagesNote: "Custom packages can be designed to fit your dog’s needs.",
      whyTitle: "Why Choose Us",
      whyIntro: "We combine safety, professionalism, and transparent updates so you can trust us from booking onward.",
      whyPoint1Title: "Around-the-clock cameras",
      whyPoint1Body: "Our monitoring team keeps an eye on every suite and notifies staff immediately about unusual changes.",
      whyPoint2Title: "Specialized care team",
      whyPoint2Body: "Trainers, nutritionists, and med techs are prepared to meet each dog's needs.",
      whyPoint3Title: "Secure, fenced facilities",
      whyPoint3Body: "Individual play routes and high barriers keep interactions controlled.",
      whyPoint4Title: "Daily updates & vet support",
      whyPoint4Body: "We send photos, health notes, and offer vet consultations at any time.",
      whyStat1Value: "500+",
      whyStat1Label: "happy clients",
      whyStat2Value: "1000+",
      whyStat2Label: "successful stays",
      whyStat3Value: "24/7",
      whyStat3Label: "continuous care",
      policiesTitle: "Policies",
      policyCancelTitle: "Cancellation Policy",
      policyCancelDesc: "We handle cancellations transparently to minimize disputes.",
      policyCancelRule1: "Free cancellation up to 48 hours before arrival.",
      policyCancelRule2: "30% fee when cancelling within 48 hours.",
      policyCancelRule3: "Medical emergencies are exempt with supporting paperwork.",
      policyStayTitle: "Stay Terms",
      policyStayDesc: "These rules keep behavior predictable and fair for everyone.",
      policyStayRule1: "Drop-off and pick-up must follow the scheduled windows.",
      policyStayRule2: "Guests must respect all internal regulations.",
      policyStayRule3: "Owners remain responsible for personal belongings.",
      policyEmergencyTitle: "Emergency Policy",
      policyEmergencyDesc: "A clear escalation plan helps manage medical or safety incidents.",
      policyEmergencyRule1: "Immediate contact with the owner if an event occurs.",
      policyEmergencyRule2: "Transfer to an approved clinic when needed.",
      policyEmergencyRule3: "Document every case for later review.",
      policyLiabilityTitle: "Liability Clause",
      policyLiabilityDesc: "We explain the hotel’s responsibility versus the owner’s upfront.",
      policyLiabilityRule1: "Disclose any medical conditions before booking.",
      policyLiabilityRule2: "Owners are responsible for the dog’s health at check-in.",
      policyLiabilityRule3: "The hotel covers care within the outlined scope.",
      prebookingTitle: "Pre-Booking Requirements",
      prebookingIntro: "These guidelines reduce risk and keep every guest safe.",
      prebookingAgeTitle: "Accepted Age Range",
      prebookingAgeBody: "We welcome dogs between 6 months and 10 years to avoid cases needing specialized constant care.",
      prebookingVaxTitle: "Vaccination Status",
      prebookingVaxBody: "Rabies and core vaccines must be completed with an up-to-date certificate.",
      prebookingBehaviorTitle: "Behavior Expectations",
      prebookingBehaviorBody: "Dogs should be non-aggressive, socialized, and responsive to basic commands.",
      prebookingBringTitle: "What to Bring",
      prebookingBringIntro: "Pack familiar items to keep your dog calm and keep routines stable.",
      prebookingBringItem1: "Their own food.",
      prebookingBringItem2: "Updated vaccination booklet.",
      prebookingBringItem3: "A favorite toy or comfort item.",
      newsTitle: "Blog / News",
      newsIntro: "Fresh articles and announcements highlight the hotel’s ongoing activity.",
      newsMeta1: "Article | March 2026",
      newsArticle1Title: "Preparing Your Dog for a Stay",
      newsArticle1Body: "Short practice sessions and familiar objects help reduce stress before arrival.",
      newsMeta2: "Tips | February 2026",
      newsArticle2Title: "Calming Anxious Pets",
      newsArticle2Body: "Deep breathing exercises and small rewards build trust in a new environment.",
      newsMeta3: "News | January 2026",
      newsArticle3Title: "Hotel Updates",
      newsArticle3Body: "We added a veterinary wing and expanded outdoor play space.",
      choose: "Choose Package", popular: "Most Popular",
      galleryTitle: "Photo Gallery",
      tipsTitle: "Care Tips",
      faq: "FAQ",
      faqTitle: "Frequently Asked Questions",
      faqQ1: "What are your working hours?",
      faqA1: "We’re available daily for drop-off and pickup, with 24/7 on-site care.",
      faqQ2: "Can I visit before booking?",
      faqA2: "Yes, visits are welcome by prior appointment to see the facilities.",
      faqQ3: "What should I bring for my dog’s stay?",
      faqA3: "Please bring your dog’s own food, any needed medications, and basic health information.",
      faqQ4: "Do you offer delivery service?",
      faqA4: "Yes, we provide safe pickup and drop-off to and from the site.",
      faqQ5: "Do dogs get daily walks?",
      faqA5: "Yes, daily walks are included according to the chosen package to keep your dog active.",
      faqQ6: "What happens in a medical emergency?",
      faqA6: "We have 24/7 veterinary services to handle any emergency quickly and professionally.",
      faqQ7: "Can I book custom packages?",
      faqA7: "Yes, we offer custom packages for long stays or special needs. Contact us to arrange.",
      faqQ8: "How do I get updates about my dog?",
      faqA8: "We send daily updates and photos to keep you reassured about your pet.",
      faqQ9: "Is the place safe for dogs?",
      faqA9: "Yes, all facilities are secured and continuously monitored for top safety.",
      faqQ10: "How can I book?",
      faqA10: "You can book through the contact page or reach us directly.",
      tipWalkTitle: "Walking Tips", tipWalkBody: "Use a proper harness, carry fresh water—especially in heat—and keep a comfy pace with short breaks.",
      tipFurTitle: "Coat Care", tipFurBody: "Brush regularly to remove loose hair and prevent mats; use dog-safe shampoo to keep skin healthy.",
      tipPrepTitle: "Prepare for Stay", tipPrepBody: "Bring your dog’s favorite toy/blanket, update vaccines, and introduce them to the space gradually.",
      tipFoodTitle: "Balanced Feeding", tipFoodBody: "Offer balanced meals 2–3 times daily; avoid sudden food changes to prevent digestion issues.",
      tipMindTitle: "Mental Enrichment", tipMindBody: "Provide puzzles or scent games to curb boredom and unwanted behaviors.",
      tipHealthTitle: "Routine Health", tipHealthBody: "Visit the vet regularly and stay on parasite prevention like flea and tick control.",
      contactTitle: "Contact Us", namePlaceholder: "Full Name", emailPlaceholder: "Email", subjectPlaceholder: "Subject",
      messagePlaceholder: "Write your message here...", submitBtn: "Send Message", successMsg: "Your message was sent successfully ✅",
      mapTitle: "Our Location", footerLogo: "Loving Homes", footerDesc: "Luxury dog hotel with global standards.",
      footerLinks: "Quick Links", footerContact: "Contact Us"
    },
    zh: {
      logoText: "Loving Homes", home: "首页", about: "关于我们", services: "服务与套餐", gallery: "相册", tips: "提示", contact: "联系我们", location: "📍 香港", book: "立即预订",
      whyNav: "为什么选择我们", policiesNav: "政策", prebookingNav: "预订前要求", newsNav: "博客 / 新闻",
      heroTitle: "为您的爱犬提供舒适与安全", heroDesc: "专为您的狗狗打造的豪华酒店体验，提供专业照护与舒适环境。",
      exploreServices: "探索服务",
      chipCare: "24/7 照护",
      chipCam: "实时摄像",
      chipVets: "认证兽医",
      aboutTitle: "关于我们",
      aboutIntroTitle: "快速介绍",
      aboutIntroBody: "“Loving Homes” 是一家豪华犬舍酒店，提供安全住宿、娱乐项目和兽医级护理。",
      visionTitle: "愿景与使命",
      visionBody: "成为主人为爱犬寻找安全温暖之家的首选。",
      why1: "每日照片更新",
      why2: "室内外游乐跑道",
      why3: "双语团队",
      why4: "定制营养方案",
      servicesTitle: "服务与套餐",
      servicesIntro: "美容休闲会所与度假村——提供的设施。",
      service1: "地暖/地冷客房 + 电视", service1Desc: "恒温舒适并配娱乐，入住更安心。",
      service2: "往返接送服务", service2Desc: "双向安全、舒适的接送。",
      service3: "安全户外草场", service3Desc: "有护栏的绿地，安心奔跑玩耍。",
      service4: "24/7 兽医护理", service4Desc: "全天候待命的兽医，应对任何紧急情况。",
      service5: "其他设施", service5Desc: "多项附加福利，让入住更丰富。",
      amenityMon: "宠物监控", amenityMonDesc: "全天候摄像监控，随时保障宠物安全。",
      amenityWalk: "森林散步", amenityWalkDesc: "每日在安全自然步道的遛弯，保持狗狗活力与快乐。",
      amenityGrass: "专属草坪", amenityGrassDesc: "干净围栏的草坪区，可自由玩耍和放松。",
      amenityBarn: "室内游乐棚", amenityBarnDesc: "室内游乐棚配备安全玩具，随时享受玩乐。",
      packagesTitle: "住宿套餐",
      pkgDay: "每日套餐", pkgDayPrice: "99 元 / 天", pkgDay1: "✓ 24 小时住宿", pkgDay2: "✓ 两顿健康餐", pkgDay3: "✓ 1 小时团体游戏", pkgDay4: "✓ 沙坑挖掘",
      pkgClassic: "经典套餐", pkgClassicPrice: "249 元 / 3 天", pkgClassic1: "✓ 含每日套餐全部权益", pkgClassic2: "✓ 一次美容护理", pkgClassic3: "✓ 每日照片更新", pkgClassic4: "✓ 放松休息区", pkgClassic5: "✓ 梳洗清洁一次",
      pkgPremium: "尊享套餐", pkgPremiumPrice: "499 元 / 周", pkgPremium1: "✓ 含经典套餐全部权益", pkgPremium2: "✓ 全面兽医检查", pkgPremium3: "✓ 免费接送", pkgPremium4: "✓ 按约定提供零食奖励", pkgPremium5: "✓ 全面体检",
      pkgCustom: "定制套餐", pkgCustomPrice: "按需报价", pkgCustom1: "✓ 自选时长与设施", pkgCustom2: "✓ 按你要求定制饮食", pkgCustom3: "✓ 可加接送/拍照/训练", customRequest: "提交需求",
      bookingTitle: "套餐预订表单", bookingDesc: "填写信息完成需求提交。", phonePlaceholder: "电话号码", customReqPlaceholder: "在此添加你的需求...",
      paymentTitle: "付款方式", payCard: "信用卡", payCash: "到店付款", payTransfer: "转账支付", confirmBuy: "确认购买", bookingSuccess: "已收到您的需求，我们会尽快与您联系确认。",
      packagesNav: "套餐",
      packagesNote: "可根据爱犬需求定制专属套餐。",
      whyTitle: "为什么选择我们",
      whyIntro: "我们结合安全性、专业性和透明沟通，让您从预订开始就能安心。",
      whyPoint1Title: "全天候摄像监控",
      whyPoint1Body: "监控团队守护每间套房，及时通知任何异常。",
      whyPoint2Title: "专业护理团队",
      whyPoint2Body: "训练师、营养师与医护随时准备满足每只狗狗。",
      whyPoint3Title: "安全围栏设施",
      whyPoint3Body: "独立步道和高隔离墙控制互动，确保秩序。",
      whyPoint4Title: "每日更新与兽医支持",
      whyPoint4Body: "发送照片与健康记录，并可随时咨询兽医。",
      whyStat1Value: "500+",
      whyStat1Label: "满意客户",
      whyStat2Value: "1000+",
      whyStat2Label: "成功入住",
      whyStat3Value: "24/7",
      whyStat3Label: "持续照护",
      policiesTitle: "政策",
      policyCancelTitle: "取消政策",
      policyCancelDesc: "我们透明处理取消，减少争议。",
      policyCancelRule1: "入住前 48 小时可免费取消。",
      policyCancelRule2: "在 48 小时内取消收取 30% 费用。",
      policyCancelRule3: "提交医疗证明可豁免。",
      policyStayTitle: "住宿条件",
      policyStayDesc: "规则帮助所有住客维持舒适秩序。",
      policyStayRule1: "请按照预约时间办理入住与离店。",
      policyStayRule2: "遵守所有内部规定。",
      policyStayRule3: "个人物品由主人自行负责。",
      policyEmergencyTitle: "紧急政策",
      policyEmergencyDesc: "明确流程应对医疗或安全事件。",
      policyEmergencyRule1: "事件发生时立即联系主人。",
      policyEmergencyRule2: "必要时送至指定医院。",
      policyEmergencyRule3: "记录每一案例以备查。",
      policyLiabilityTitle: "责任条款",
      policyLiabilityDesc: "提前说明酒店与主人的责任范围。",
      policyLiabilityRule1: "预订前告知所有健康状况。",
      policyLiabilityRule2: "入住时主人负责狗狗健康。",
      policyLiabilityRule3: "酒店在既定范围内承担照护。",
      prebookingTitle: "预订前要求",
      prebookingIntro: "这些标准减少风险，确保每只狗狗的安全。",
      prebookingAgeTitle: "可接受年龄",
      prebookingAgeBody: "我们只接收 6 个月到 10 岁之间的狗狗，以避免需要高度照料的个案。",
      prebookingVaxTitle: "疫苗接种状态",
      prebookingVaxBody: "狂犬病及核心疫苗必须完成并提供最新证书。",
      prebookingBehaviorTitle: "行为要求",
      prebookingBehaviorBody: "狗狗需无攻击性、善于社交并能回应基本指令。",
      prebookingBringTitle: "需携带物品",
      prebookingBringIntro: "携带熟悉物品可以稳定情绪，维持日常。",
      prebookingBringItem1: "自带食物。",
      prebookingBringItem2: "最新疫苗手册。",
      prebookingBringItem3: "熟悉的玩具或安抚物。",
      newsTitle: "博客 / 新闻",
      newsIntro: "新的文章与动态展示酒店持续的活力。",
      newsMeta1: "文章 | 2026 年 3 月",
      newsArticle1Title: "如何为入驻准备爱犬",
      newsArticle1Body: "短期练习与熟悉物品有助降低到店前的压力。",
      newsMeta2: "提示 | 2026 年 2 月",
      newsArticle2Title: "减轻动物焦虑的方法",
      newsArticle2Body: "深呼吸与小奖励可以在新环境中建立信任。",
      newsMeta3: "新闻 | 2026 年 1 月",
      newsArticle3Title: "酒店更新",
      newsArticle3Body: "我们新增兽医专区并扩展室外活动区。",
      choose: "选择套餐", popular: "最受欢迎",
      galleryTitle: "照片集",
      tipsTitle: "护理提示",
      faq: "常见问题",
      faqTitle: "常见问题",
      faqQ1: "你们的营业时间是？",
      faqA1: "每日可办理接送，场内护理 24 小时全天候提供。",
      faqQ2: "可以在预订前参观吗？",
      faqA2: "可以，提前预约即可到店参观设施与服务。",
      faqQ3: "寄宿时需要为狗狗准备什么？",
      faqA3: "建议带上自备用粮、所需药物以及基本健康信息。",
      faqQ4: "是否提供接送服务？",
      faqA4: "提供，往返地点的安全接送服务。",
      faqQ5: "每天会带狗狗散步吗？",
      faqA5: "会的，根据所选套餐安排每日遛弯，保持活力与舒适。",
      faqQ6: "若发生医疗紧急情况怎么办？",
      faqA6: "我们有 24/7 兽医服务，可迅速、专业处理任何突发状况。",
      faqQ7: "可以定制套餐吗？",
      faqA7: "可以，为长住或特殊需求提供定制套餐，请联系我们安排。",
      faqQ8: "寄宿期间如何收到狗狗的更新？",
      faqA8: "我们会每天发送更新和照片，让你随时放心。",
      faqQ9: "这里对狗狗安全吗？",
      faqA9: "是的，所有设施均有安保并持续监控，确保安全。",
      faqQ10: "如何预订？",
      faqA10: "可通过联系页面预订，或直接与我们联系。",
      tipWalkTitle: "遛狗提示", tipWalkBody: "使用合适的牵引，携带清水（尤其炎热时），保持舒适步伐并适时休息。",
      tipFurTitle: "被毛护理", tipFurBody: "定期梳理去除掉毛防止打结；洗澡时使用宠物安全洗毛液保护皮肤。",
      tipPrepTitle: "入住准备", tipPrepBody: "带上爱犬最喜欢的玩具/毯子，更新疫苗记录，逐步熟悉环境。",
      tipFoodTitle: "均衡饮食", tipFoodBody: "每日 2-3 次均衡喂食，避免突然更换粮食以防肠胃不适。",
      tipMindTitle: "脑力活动", tipMindBody: "提供益智玩具或嗅闻游戏，减少无聊和不良行为。",
      tipHealthTitle: "常规健康", tipHealthBody: "定期兽医检查，并持续跳蚤蜱虫等寄生虫预防。",
      contactTitle: "联系我们", namePlaceholder: "姓名", emailPlaceholder: "邮箱", subjectPlaceholder: "主题",
      messagePlaceholder: "请输入您的消息...", submitBtn: "发送消息", successMsg: "您的消息已成功发送 ✅",
      mapTitle: "我们的位置", footerLogo: "Loving Homes", footerDesc: "高标准豪华宠物酒店。",
      footerLinks: "快速链接", footerContact: "联系我们"
    }
  };

  const applyTheme = (theme) => {
    const html = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      themeBtn && (themeBtn.textContent = '☀️');
    } else {
      html.removeAttribute('data-theme');
      themeBtn && (themeBtn.textContent = '🌙');
    }
    localStorage.setItem('theme', theme);
  };

  const clampFont = (px) => Math.min(20, Math.max(14, px));

  const applyFontSize = (px) => {
    const size = clampFont(px);
    document.documentElement.style.setProperty('--base-font', `${size}px`);
    localStorage.setItem('fontSize', String(size));
  };

  const applyLanguage = (lang) => {
    const t = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-t]').forEach((el) => {
      const key = el.dataset.t;
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-ph]').forEach((el) => {
      const key = el.dataset.ph;
      if (t[key]) el.placeholder = t[key];
    });

    const langSelect = document.getElementById('lang-toggle');
    if (langSelect) langSelect.value = lang;
    localStorage.setItem('language', lang);
  };

  // Settings restore
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedLang = localStorage.getItem('language') || 'ar';
  const savedFont = Number(localStorage.getItem('fontSize')) || 16;
  applyTheme(savedTheme);
  applyLanguage(savedLang);
  applyFontSize(savedFont);

  // UI controls
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  const langToggle = document.getElementById('lang-toggle');
  langToggle?.addEventListener('change', (e) => applyLanguage(e.target.value));

  const fontInc = document.getElementById('font-inc');
  const fontDec = document.getElementById('font-dec');
  fontInc?.addEventListener('click', () => applyFontSize((Number(localStorage.getItem('fontSize')) || 16) + 1));
  fontDec?.addEventListener('click', () => applyFontSize((Number(localStorage.getItem('fontSize')) || 16) - 1));

  // Mobile nav + active link
  const navFlex = document.getElementById('navFlex');
  const hamburger = document.getElementById('hamburger');
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));

  const closeNav = () => {
    navFlex?.classList.remove('open');
    hamburger?.classList.remove('active');
  };

  hamburger?.addEventListener('click', () => {
    navFlex?.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeNav();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });

  const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  navLinks.forEach((link) => {
    const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href === '' && current === 'index.html') {
      link.classList.add('active');
    } else if (href === current || (href === 'index.html' && current === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('successMsg');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveRecord('contacts', {
      name: document.getElementById('name')?.value?.trim() || '',
      email: document.getElementById('email')?.value?.trim() || '',
      subject: document.getElementById('subject')?.value?.trim() || '',
      message: document.getElementById('message')?.value?.trim() || ''
    });
    if (contactMsg) contactMsg.style.display = 'block';
    contactForm.reset();
    if (contactMsg) setTimeout(() => contactMsg.style.display = 'none', 2500);
  });

  // Booking modal
  const bookingButtons = document.querySelectorAll('.booking-btn');
  const modal = document.getElementById('booking-modal');
  const closeBtn = modal?.querySelector('.modal-close');
  const packageSelect = document.getElementById('bk-package');
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const bkName = document.getElementById('bk-name');
  const bkEmail = document.getElementById('bk-email');
  const bkPhone = document.getElementById('bk-phone');
  const bkNote = document.getElementById('bk-note');

  const saveRecord = (key, payload) => {
    try {
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({ ...payload, ts: Date.now() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      console.warn('Persist error', err);
    }
  };

  const openModal = (pkg) => {
    if (packageSelect && pkg) packageSelect.value = pkg;
    modal?.setAttribute('aria-hidden', 'false');
  };
  const hideModal = () => modal?.setAttribute('aria-hidden', 'true');

  bookingButtons.forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.dataset.package));
  });

  closeBtn?.addEventListener('click', hideModal);
  modal?.querySelector('.modal-backdrop')?.addEventListener('click', hideModal);

  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveRecord('bookings', {
      name: bkName?.value?.trim() || '',
      email: bkEmail?.value?.trim() || '',
      phone: bkPhone?.value?.trim() || '',
      pkg: packageSelect?.value || '',
      note: bkNote?.value?.trim() || '',
      pay: bookingForm.pay?.value || ''
    });
    if (bookingSuccess) {
      bookingSuccess.style.display = 'block';
      setTimeout(() => {
        bookingSuccess.style.display = 'none';
        hideModal();
      }, 2000);
    }
    bookingForm.reset();
  });
});
