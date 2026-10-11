/* =========================================================
   FFF Phuket – script.js
   1. Settings
   2. Translations (all the words on the page, in English and Thai)
   3. Players (the "Meet the squad" cards)
   4. Page code (you shouldn't need to change anything below)
   ========================================================= */

/* ---------- 1. SETTINGS ---------- */
var SETTINGS = {
  // WhatsApp number in international format, digits only (66 = Thailand).
  whatsappNumber: "66806990686",
  // Language shown to first-time visitors: "en" or "th".
  defaultLanguage: "en"
};

/* ---------- 2. TRANSLATIONS ----------
   NOTE: The Thai (th) translations were written without a native speaker and
   NEED CHECKING BY A NATIVE THAI SPEAKER before relying on them.

   Every piece of text on the page has a key (e.g. "hero.intro").
   To change wording, edit the text between the quotes for "en" (English) or "th" (Thai).
   Keep {years}, {name} and {year} exactly as they are – they are filled in automatically.
*/
var TRANSLATIONS = {
  en: {
    "meta.title": "FFF Phuket – Football for Fun & Fitness | Over-60s football in Phuket",
    "meta.description": "FFF Phuket is a friendly over-60s football team in Phuket, Thailand. Visiting teams and players are welcome – 7-a-side every Saturday at The Hatrix.",
    "skip": "Skip to main content",
    "brand.home": "FFF Phuket – back to top",

    "nav.label": "Main",
    "nav.home": "Home",
    "nav.play": "How we play",
    "nav.welcome": "Who we welcome",
    "nav.squad": "The squad",
    "nav.where": "Where & when",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "lang.label": "Choose language",

    "hero.kicker": "Over-60s football in Phuket, Thailand",
    "hero.tagline": "Football for Fun & Fitness",
    "hero.intro": "We started FFF Phuket so that older players could keep enjoying the game they love – and to meet the visiting teams and groups who come to Phuket. Whether you're here for a week or for good, come and play with us.",
    "hero.ctaMatch": "Arrange a match",
    "hero.ctaWhatsapp": "Message us on WhatsApp",

    "play.title": "How we play",
    "play.intro": "Proper football, played in a friendly spirit. Here's what to expect.",
    "play.sevenTitle": "7-a-side",
    "play.sevenText": "Seven players per team on the pitch – plenty of touches of the ball for everyone.",
    "play.subsTitle": "Rolling substitutions",
    "play.subsText": "Come off for a breather and go back on whenever you're ready.",
    "play.keeperTitle": "With a goalkeeper",
    "play.keeperText": "Each team plays with a goalkeeper.",
    "play.tackleTitle": "No slide tackles",
    "play.tackleText": "We keep it safe, so everyone can play again next week.",
    "play.squadTitle": "Our squad",
    "play.squadText": "Mainly players in their 60s, plus two players over 50 and two over 70.",
    "play.pitchTitle": "Astro-turf pitch",
    "play.pitchText": "A true, even surface that's kind on the knees.",

    "welcome.title": "Who we welcome",
    "welcome.intro": "Everyone who loves the game is welcome – especially if you're visiting Phuket.",
    "welcome.teamsTitle": "Visiting over-60s teams",
    "welcome.teamsText": "Bringing an over-60s team to Phuket? We'd love to arrange a friendly match – followed by a drink together at the bar.",
    "welcome.teamsCta": "Arrange a match",
    "welcome.playersTitle": "Individual players & walk-ins",
    "welcome.playersText": "On holiday or new in town? Individual players and walk-ins are welcome at our training sessions – just turn up, or send us a message first.",
    "welcome.playersCta": "Message us on WhatsApp",

    "squad.title": "Meet the squad",
    "squad.intro": "A few of the friendly faces you'll meet on a Saturday.",
    "squad.years": "Playing for {years} years",
    "squad.yearsUnknown": "Years playing: coming soon",
    "squad.funFact": "Fun fact",
    "squad.photoAlt": "Photo of {name}",

    "where.title": "Where & when we play",
    "where.venueLabel": "Venue",
    "where.venue": "The Hatrix, Phuket",
    "where.fac1": "Artificial grass pitch",
    "where.fac2": "Changing rooms",
    "where.fac3": "Parking",
    "where.fac4": "Bar for after the match",
    "where.matchesLabel": "Matches",
    "where.matches": "Saturdays at 5:00 pm",
    "where.trainingLabel": "Training",
    "where.training": "Saturdays at 5:00 pm",
    "where.trainingNote": "when no match is scheduled",
    "where.feeLabel": "Pitch fee",
    "where.fee": "To be confirmed",   // <-- change the pitch fee here, e.g. "200 baht per player"
    "where.directions": "Get directions",
    "where.mapTitle": "Map showing The Hatrix, Phuket",

    "gallery.title": "Gallery",
    "gallery.intro": "Photos and videos from our matches – more coming soon!",
    "gallery.photo1": "Gallery photo 1 – coming soon",
    "gallery.photo2": "Gallery photo 2 – coming soon",
    "gallery.photo3": "Gallery photo 3 – coming soon",
    "gallery.photo4": "Gallery photo 4 – coming soon",
    "gallery.photo5": "Gallery photo 5 – coming soon",
    "gallery.photo6": "Gallery photo 6 – coming soon",
    "gallery.videoSoon": "Match video coming soon",

    "contact.title": "Arrange a game",
    "contact.intro": "Planning a trip to Phuket, or want to join a training session? Send us a message and we'll get back to you.",
    "contact.name": "Your name",
    "contact.email": "Email",
    "contact.phone": "WhatsApp or phone",
    "contact.team": "Team name",
    "contact.players": "Number of players",
    "contact.dates": "Preferred dates",
    "contact.datesPlaceholder": "e.g. Saturday 14 or 21 March",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us a little about your team or yourself",
    "contact.required": "(required)",
    "contact.submit": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "Thank you! Your message has been sent. We'll be in touch soon.",
    "contact.error": "Sorry, something went wrong and your message wasn't sent. Please try again, or message us on WhatsApp.",
    "contact.notSetUp": "Sorry, the contact form isn't switched on yet. Please message us on WhatsApp for now.",
    "contact.errRequired": "Please fill in this field.",
    "contact.errEmail": "Please enter a valid email address, e.g. name@example.com",
    "contact.waTitle": "Prefer WhatsApp?",
    "contact.waText": "It's often the quickest way to reach us. Tap the button to start a chat.",
    "contact.waButton": "Chat on WhatsApp",

    "whatsapp.message": "Hi FFF Phuket, we'd like to arrange a game",
    "whatsapp.float": "Message FFF Phuket on WhatsApp",

    "sponsor.title": "Proudly sponsored by Riverhouse",
    "sponsor.alt": "Riverhouse logo",
    "sponsor.text": "Thank you to Riverhouse for supporting FFF Phuket.",

    "footer.follow": "Follow us",
    "footer.backToTop": "Back to top",
    "footer.rights": "All rights reserved."
  },

  th: {
    "meta.title": "FFF Phuket – ฟุตบอลเพื่อความสนุกและสุขภาพ | ฟุตบอลรุ่น 60 ปีขึ้นไปในภูเก็ต",
    "meta.description": "FFF Phuket ทีมฟุตบอลรุ่นอายุ 60 ปีขึ้นไปที่เป็นกันเองในภูเก็ต ยินดีต้อนรับทีมและนักเตะที่มาเยือน เตะ 7 คนทุกวันเสาร์ที่สนาม The Hatrix",
    "skip": "ข้ามไปยังเนื้อหาหลัก",
    "brand.home": "FFF Phuket – กลับขึ้นด้านบน",

    "nav.label": "เมนูหลัก",
    "nav.home": "หน้าแรก",
    "nav.play": "รูปแบบการเล่น",
    "nav.welcome": "ใครร่วมเล่นได้บ้าง",
    "nav.squad": "นักเตะของเรา",
    "nav.where": "สถานที่และเวลา",
    "nav.gallery": "แกลเลอรี",
    "nav.contact": "ติดต่อเรา",
    "nav.menu": "เมนู",
    "lang.label": "เลือกภาษา",

    "hero.kicker": "ฟุตบอลรุ่นอายุ 60 ปีขึ้นไป ที่ภูเก็ต ประเทศไทย",
    "hero.tagline": "ฟุตบอลเพื่อความสนุกและสุขภาพ",
    "hero.intro": "เราก่อตั้ง FFF Phuket ขึ้นเพื่อให้นักฟุตบอลสูงวัยได้สนุกกับกีฬาที่รักต่อไป และได้พบปะกับทีมและกลุ่มต่าง ๆ ที่มาเยือนภูเก็ต ไม่ว่าคุณจะมาเที่ยวสักสัปดาห์หรือมาอยู่ที่นี่ถาวร มาเตะบอลด้วยกันนะครับ",
    "hero.ctaMatch": "นัดแข่งกับเรา",
    "hero.ctaWhatsapp": "ส่งข้อความทาง WhatsApp",

    "play.title": "รูปแบบการเล่นของเรา",
    "play.intro": "ฟุตบอลแบบจริงจังในบรรยากาศที่เป็นมิตร นี่คือสิ่งที่คุณจะได้พบ",
    "play.sevenTitle": "ฟุตบอล 7 คน",
    "play.sevenText": "ลงสนามทีมละ 7 คน ทุกคนได้สัมผัสบอลอย่างเต็มที่",
    "play.subsTitle": "เปลี่ยนตัวได้ตลอดเกม",
    "play.subsText": "ออกมาพักเหนื่อย แล้วกลับลงสนามได้ทุกเมื่อที่พร้อม",
    "play.keeperTitle": "มีผู้รักษาประตู",
    "play.keeperText": "แต่ละทีมมีผู้รักษาประตูของตัวเอง",
    "play.tackleTitle": "ห้ามสไลด์เสียบสกัด",
    "play.tackleText": "เราเล่นกันอย่างปลอดภัย เพื่อให้ทุกคนได้กลับมาเล่นอีกในสัปดาห์หน้า",
    "play.squadTitle": "นักเตะในทีม",
    "play.squadText": "ส่วนใหญ่อายุ 60 กว่าปี มีนักเตะอายุเกิน 50 ปีสองคน และเกิน 70 ปีอีกสองคน",
    "play.pitchTitle": "สนามหญ้าเทียม",
    "play.pitchText": "พื้นสนามเรียบสม่ำเสมอ ถนอมหัวเข่า",

    "welcome.title": "ใครร่วมเล่นกับเราได้บ้าง",
    "welcome.intro": "ยินดีต้อนรับทุกคนที่รักฟุตบอล โดยเฉพาะผู้ที่มาเยือนภูเก็ต",
    "welcome.teamsTitle": "ทีมรุ่น 60 ปีขึ้นไปที่มาเยือน",
    "welcome.teamsText": "จะพาทีมรุ่น 60 ปีขึ้นไปมาภูเก็ตใช่ไหม เรายินดีจัดแมตช์กระชับมิตร แล้วไปดื่มสังสรรค์ด้วยกันที่บาร์หลังเกม",
    "welcome.teamsCta": "นัดแข่งกับเรา",
    "welcome.playersTitle": "นักเตะรายบุคคลและผู้ที่แวะมา",
    "welcome.playersText": "มาเที่ยวหรือเพิ่งย้ายมาใช่ไหม นักเตะรายบุคคลและผู้ที่แวะมาร่วมซ้อมกับเราได้เลย แค่มาที่สนาม หรือส่งข้อความหาเราก่อนก็ได้",
    "welcome.playersCta": "ส่งข้อความทาง WhatsApp",

    "squad.title": "พบกับนักเตะของเรา",
    "squad.intro": "ส่วนหนึ่งของเพื่อน ๆ ที่คุณจะได้พบในวันเสาร์",
    "squad.years": "เล่นฟุตบอลมา {years} ปี",
    "squad.yearsUnknown": "จำนวนปีที่เล่น: เร็ว ๆ นี้",
    "squad.funFact": "เรื่องน่ารู้",
    "squad.photoAlt": "รูปของ {name}",

    "where.title": "สถานที่และเวลาที่เราเล่น",
    "where.venueLabel": "สนาม",
    "where.venue": "The Hatrix ภูเก็ต",
    "where.fac1": "สนามหญ้าเทียม",
    "where.fac2": "ห้องเปลี่ยนเสื้อผ้า",
    "where.fac3": "ที่จอดรถ",
    "where.fac4": "บาร์สำหรับสังสรรค์หลังเกม",
    "where.matchesLabel": "การแข่งขัน",
    "where.matches": "ทุกวันเสาร์ เวลา 17:00 น.",
    "where.trainingLabel": "การฝึกซ้อม",
    "where.training": "ทุกวันเสาร์ เวลา 17:00 น.",
    "where.trainingNote": "ในสัปดาห์ที่ไม่มีการแข่งขัน",
    "where.feeLabel": "ค่าสนาม",
    "where.fee": "รอยืนยัน",   // <-- เปลี่ยนค่าสนามที่นี่
    "where.directions": "ดูเส้นทาง",
    "where.mapTitle": "แผนที่สนาม The Hatrix ภูเก็ต",

    "gallery.title": "แกลเลอรี",
    "gallery.intro": "ภาพและวิดีโอจากการแข่งขันของเรา เร็ว ๆ นี้จะมีเพิ่มอีก",
    "gallery.photo1": "ภาพแกลเลอรีที่ 1 – เร็ว ๆ นี้",
    "gallery.photo2": "ภาพแกลเลอรีที่ 2 – เร็ว ๆ นี้",
    "gallery.photo3": "ภาพแกลเลอรีที่ 3 – เร็ว ๆ นี้",
    "gallery.photo4": "ภาพแกลเลอรีที่ 4 – เร็ว ๆ นี้",
    "gallery.photo5": "ภาพแกลเลอรีที่ 5 – เร็ว ๆ นี้",
    "gallery.photo6": "ภาพแกลเลอรีที่ 6 – เร็ว ๆ นี้",
    "gallery.videoSoon": "วิดีโอการแข่งขัน เร็ว ๆ นี้",

    "contact.title": "นัดเตะกับเรา",
    "contact.intro": "กำลังวางแผนมาภูเก็ต หรืออยากร่วมซ้อมกับเรา ส่งข้อความมาได้เลย แล้วเราจะติดต่อกลับไป",
    "contact.name": "ชื่อของคุณ",
    "contact.email": "อีเมล",
    "contact.phone": "WhatsApp หรือเบอร์โทรศัพท์",
    "contact.team": "ชื่อทีม",
    "contact.players": "จำนวนผู้เล่น",
    "contact.dates": "วันที่สะดวก",
    "contact.datesPlaceholder": "เช่น วันเสาร์ที่ 14 หรือ 21 มีนาคม",
    "contact.message": "ข้อความ",
    "contact.messagePlaceholder": "เล่าเกี่ยวกับทีมหรือตัวคุณให้เราฟังสักนิด",
    "contact.required": "(จำเป็น)",
    "contact.submit": "ส่งข้อความ",
    "contact.sending": "กำลังส่ง…",
    "contact.success": "ขอบคุณครับ! ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็ว",
    "contact.error": "ขออภัย เกิดข้อผิดพลาด ข้อความยังไม่ถูกส่ง กรุณาลองอีกครั้ง หรือส่งข้อความหาเราทาง WhatsApp",
    "contact.notSetUp": "ขออภัย แบบฟอร์มติดต่อยังไม่เปิดใช้งาน กรุณาส่งข้อความหาเราทาง WhatsApp ไปก่อน",
    "contact.errRequired": "กรุณากรอกข้อมูลช่องนี้",
    "contact.errEmail": "กรุณากรอกอีเมลให้ถูกต้อง เช่น name@example.com",
    "contact.waTitle": "สะดวกใช้ WhatsApp ใช่ไหม",
    "contact.waText": "เป็นวิธีที่ติดต่อเราได้เร็วที่สุด แตะปุ่มด้านล่างเพื่อเริ่มแชท",
    "contact.waButton": "แชททาง WhatsApp",

    "whatsapp.message": "สวัสดีครับ FFF Phuket เราอยากนัดเตะฟุตบอลกับทีมของคุณ",
    "whatsapp.float": "ส่งข้อความหา FFF Phuket ทาง WhatsApp",

    "sponsor.title": "ได้รับการสนับสนุนอย่างภาคภูมิใจจาก Riverhouse",
    "sponsor.alt": "โลโก้ Riverhouse",
    "sponsor.text": "ขอขอบคุณ Riverhouse ที่ให้การสนับสนุน FFF Phuket",

    "footer.follow": "ติดตามเรา",
    "footer.backToTop": "กลับขึ้นด้านบน",
    "footer.rights": "สงวนลิขสิทธิ์"
  }
};

/* ---------- 3. PLAYERS ----------
   Each { … } block below is one player card, shown in this order.

   TO ADD A PLAYER: copy one whole block (from { to },), paste it at the end of
   the list, and change the details. Then put their photo in the assets folder
   with the matching name (e.g. assets/player-7.jpg).

   - name:        the player's name
   - flag:        a flag emoji, e.g. "🇬🇧" "🇹🇭" "🇦🇺" "🇩🇪" "🇸🇪" "🇳🇱"
   - nationality: in English (en) and Thai (th), e.g. { en: "English", th: "อังกฤษ" }
   - years:       how many years they have played, as a number (e.g. 50),
                  or null if not known yet
   - funFact:     in English (en) and Thai (th). If you only write English,
                  English is shown in both languages.
   - photo:       the photo file (square photos look best)
*/
var PLAYERS = [
  {
    name: "Player Name",
    flag: "🏳️",
    nationality: { en: "Nationality", th: "สัญชาติ" },
    years: null,
    funFact: { en: "Fun fact coming soon", th: "เรื่องน่ารู้ เร็ว ๆ นี้" },
    photo: "assets/player-1.jpg"
  },
  {
    name: "Player Name",
    flag: "🏳️",
    nationality: { en: "Nationality", th: "สัญชาติ" },
    years: null,
    funFact: { en: "Fun fact coming soon", th: "เรื่องน่ารู้ เร็ว ๆ นี้" },
    photo: "assets/player-2.jpg"
  },
  {
    name: "Player Name",
    flag: "🏳️",
    nationality: { en: "Nationality", th: "สัญชาติ" },
    years: null,
    funFact: { en: "Fun fact coming soon", th: "เรื่องน่ารู้ เร็ว ๆ นี้" },
    photo: "assets/player-3.jpg"
  },
  {
    name: "Player Name",
    flag: "🏳️",
    nationality: { en: "Nationality", th: "สัญชาติ" },
    years: null,
    funFact: { en: "Fun fact coming soon", th: "เรื่องน่ารู้ เร็ว ๆ นี้" },
    photo: "assets/player-4.jpg"
  },
  {
    name: "Player Name",
    flag: "🏳️",
    nationality: { en: "Nationality", th: "สัญชาติ" },
    years: null,
    funFact: { en: "Fun fact coming soon", th: "เรื่องน่ารู้ เร็ว ๆ นี้" },
    photo: "assets/player-5.jpg"
  },
  {
    name: "Player Name",
    flag: "🏳️",
    nationality: { en: "Nationality", th: "สัญชาติ" },
    years: null,
    funFact: { en: "Fun fact coming soon", th: "เรื่องน่ารู้ เร็ว ๆ นี้" },
    photo: "assets/player-6.jpg"
  }
];


/* =========================================================
   4. PAGE CODE – no need to edit below this line
   ========================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "fff-lang";
  var currentLang = SETTINGS.defaultLanguage;

  function t(key, vars) {
    var dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    var text = dict[key];
    if (text === undefined) text = TRANSLATIONS.en[key];
    if (text === undefined) return "";
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.split("{" + name + "}").join(vars[name]);
      });
    }
    return text;
  }

  // A player field can be plain text or { en: "...", th: "..." }
  function pick(value) {
    if (value && typeof value === "object") return value[currentLang] || value.en || "";
    return value || "";
  }

  function loadLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch (e) { /* storage blocked – use default */ }
    return SETTINGS.defaultLanguage;
  }

  function saveLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function whatsappUrl() {
    return "https://wa.me/" + SETTINGS.whatsappNumber + "?text=" + encodeURIComponent(t("whatsapp.message"));
  }

  /* ----- Players ----- */
  function renderPlayers() {
    var grid = document.getElementById("squad-grid");
    if (!grid) return;
    grid.textContent = "";

    PLAYERS.forEach(function (p) {
      var li = document.createElement("li");
      li.className = "player-card";

      var img = document.createElement("img");
      img.className = "player-photo";
      img.src = p.photo;
      img.alt = t("squad.photoAlt", { name: p.name });
      img.width = 600;
      img.height = 600;
      img.loading = "lazy";
      img.decoding = "async";

      var body = document.createElement("div");
      body.className = "player-body";

      var name = document.createElement("h3");
      name.className = "player-name";
      name.textContent = p.name;

      var nat = document.createElement("p");
      nat.className = "player-meta";
      if (p.flag) {
        var flag = document.createElement("span");
        flag.className = "player-flag";
        flag.setAttribute("aria-hidden", "true");
        flag.textContent = p.flag;
        nat.appendChild(flag);
      }
      nat.appendChild(document.createTextNode(pick(p.nationality)));

      var years = document.createElement("p");
      years.className = "player-meta";
      years.textContent = (typeof p.years === "number")
        ? t("squad.years", { years: p.years })
        : t("squad.yearsUnknown");

      var fact = document.createElement("p");
      fact.className = "player-fact";
      var factLabel = document.createElement("strong");
      factLabel.textContent = t("squad.funFact");
      fact.appendChild(factLabel);
      fact.appendChild(document.createTextNode(pick(p.funFact)));

      body.appendChild(name);
      body.appendChild(nat);
      body.appendChild(years);
      body.appendChild(fact);
      li.appendChild(img);
      li.appendChild(body);
      grid.appendChild(li);
    });
  }

  /* ----- Language ----- */
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = "en";
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var text = t(el.getAttribute("data-i18n"));
      if (text) el.textContent = text;
    });

    // data-i18n-attr="attribute:key; attribute:key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var text = t(parts[1].trim());
        if (text) el.setAttribute(parts[0].trim(), text);
      });
    });

    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));

    document.querySelectorAll(".js-whatsapp").forEach(function (a) {
      a.href = whatsappUrl();
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    renderPlayers();
    refreshFormMessages();
  }

  function initLanguageToggle() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        saveLang(lang);
        applyLanguage(lang);
      });
    });
  }

  /* ----- Mobile menu ----- */
  function initMenu() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !e.target.closest(".site-header")) setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1300) setOpen(false);
    });
  }

  /* ----- Highlight the current section in the menu ----- */
  function initActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll('.site-nav a[href^="#"]').forEach(function (a) {
      links[a.getAttribute("href").slice(1)] = a;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) { links[id].classList.remove("is-active"); });
        var link = links[entry.target.id];
        if (link) link.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ----- Contact form ----- */
  var form, statusBox, submitBtn;
  var lastStatus = null; // remembers the message so it can be re-translated

  function showStatus(kind, key) {
    lastStatus = { kind: kind, key: key };
    statusBox.hidden = false;
    statusBox.className = "form-status " + (kind === "success" ? "is-success" : "is-error");
    statusBox.textContent = t(key);
  }

  function setFieldError(field, key) {
    var err = document.getElementById(field.id + "-err");
    if (key) {
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("data-error", key);
      if (err) err.textContent = t(key);
    } else {
      field.removeAttribute("aria-invalid");
      field.removeAttribute("data-error");
      if (err) err.textContent = "";
    }
  }

  function refreshFormMessages() {
    if (!form) return;
    form.querySelectorAll("[data-error]").forEach(function (field) {
      setFieldError(field, field.getAttribute("data-error"));
    });
    if (lastStatus && !statusBox.hidden) statusBox.textContent = t(lastStatus.key);
  }

  function validateField(field) {
    var value = field.value.trim();
    if (field.required && !value) { setFieldError(field, "contact.errRequired"); return false; }
    if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFieldError(field, "contact.errEmail");
      return false;
    }
    setFieldError(field, null);
    return true;
  }

  function initForm() {
    form = document.getElementById("contact-form");
    if (!form) return;
    statusBox = document.getElementById("form-status");
    submitBtn = form.querySelector('button[type="submit"]');
    var required = form.querySelectorAll("[required]");

    required.forEach(function (field) {
      field.addEventListener("blur", function () {
        if (field.value.trim() || field.hasAttribute("aria-invalid")) validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.hasAttribute("aria-invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstInvalid = null;
      required.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      // Spam trap filled in? Pretend it worked and do nothing.
      var trap = form.querySelector('[name="_gotcha"]');
      if (trap && trap.value) {
        form.reset();
        showStatus("success", "contact.success");
        return;
      }

      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        showStatus("error", "contact.notSetUp");
        statusBox.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = t("contact.sending");

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      }).then(function (response) {
        if (!response.ok) throw new Error("Form error " + response.status);
        form.reset();
        showStatus("success", "contact.success");
      }).catch(function () {
        showStatus("error", "contact.error");
      }).then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = t("contact.submit");
        statusBox.focus();
      });
    });
  }

  /* ----- Start ----- */
  document.addEventListener("DOMContentLoaded", function () {
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    initForm();
    initMenu();
    initLanguageToggle();
    applyLanguage(loadLang());
    initActiveNav();
  });
})();
