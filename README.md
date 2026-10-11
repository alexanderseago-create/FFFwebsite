# FFF Phuket website

The website for **FFF Phuket – Football for Fun & Fitness**, an over-60s football team in Phuket, Thailand.

It is a simple one-page website made of just a few files:

| File / folder | What it is |
|---|---|
| `index.html` | The page itself (layout and English wording) |
| `styles.css` | Colours, fonts and layout |
| `script.js` | **All the wording in English and Thai**, the player list and a few settings |
| `assets/` | Photos, the sponsor logo and the little icons |

You can edit every file directly on GitHub in your web browser: open the file, click the **pencil icon** (Edit), make your change, then click **Commit changes**. The live website updates by itself a minute or two later.

---

## 1. Editing text and translations

All the words on the page, in both English and Thai, are in **`script.js`**, near the top, in the section called `TRANSLATIONS`.

Each line looks like this:

```js
"hero.intro": "We started FFF Phuket so that older players could ...",
```

- The part on the left (`"hero.intro"`) is the label – **don't change it**.
- The part on the right, between the quotes, is the text – **change this**.
- The English text is in the `en:` block and the Thai text is in the `th:` block. If you change something in English, remember to change the Thai version too.
- Keep the quote marks `"` at each end and the comma `,` at the end of the line.
- If your text needs a double quote mark inside it, use a curly one (“ ”) instead.

**Important:** the Thai translations were written without a native speaker. Please ask a native Thai speaker to check them.

**Pitch fee:** look for the line `"where.fee": "To be confirmed",` (and the Thai line `"where.fee": "รอยืนยัน",`) and change the text, e.g. `"200 baht per player"`.

**WhatsApp number:** in `script.js`, at the top under `SETTINGS`, change `whatsappNumber`. Use the international format with digits only (66 for Thailand, then the number without the first 0). Also search `index.html` for `66806990686` and replace it everywhere, so the buttons work even before the page has fully loaded.

**WhatsApp starting message:** change `"whatsapp.message"` in the translations.

---

## 2. Updating the player cards

The players are in **`script.js`**, in the section called `PLAYERS`. Each player is one block like this:

```js
  {
    name: "Somchai Jaidee",
    flag: "🇹🇭",
    nationality: { en: "Thai", th: "ไทย" },
    years: 52,
    funFact: { en: "Scored in his first ever match aged 9", th: "ยิงประตูได้ในนัดแรกตอนอายุ 9 ขวบ" },
    photo: "assets/player-1.jpg"
  },
```

- **name** – the player's name.
- **flag** – a flag emoji. You can copy one from [emojipedia.org/flags](https://emojipedia.org/flags), e.g. 🇬🇧 🇹🇭 🇦🇺 🇩🇪 🇸🇪 🇳🇱 🇮🇪 🏴󠁧󠁢󠁳󠁣󠁴󠁿.
- **nationality** – in English (`en`) and Thai (`th`).
- **years** – how many years they've been playing, as a plain number (no quotes). Write `null` if you don't know yet.
- **funFact** – in English and Thai. If you only have English, you can write `funFact: "Loves a post-match curry",` and English will show in both languages.
- **photo** – the photo file in the `assets` folder.

**To add a 7th player:** copy a whole block (from `{` to `},`), paste it after the last player (before the `];`), change the details, and add their photo as `assets/player-7.jpg`. Make sure there is a comma between blocks.

**To remove a player:** delete their whole block.

---

## 3. Replacing photos

All photos are in the **`assets`** folder. To replace a photo, upload a new file with **exactly the same name** and it will replace the old one.

| File | Where it appears | Best size |
|---|---|---|
| `hero.jpg` | Big background photo at the top | Wide (landscape), about 1920 × 1080 |
| `player-1.jpg` … `player-6.jpg` | Player cards | Square, about 600 × 600 |
| `gallery-1.jpg` … `gallery-6.jpg` | Gallery | Landscape, about 800 × 600 |
| `riverhouse-logo.png` | Sponsor section | Any – **the current file is a placeholder, please replace it with Riverhouse's real logo** |
| `og-image.jpg` | The preview picture when the website link is shared on WhatsApp/Facebook | Exactly 1200 × 630 |
| `favicon.svg`, `apple-touch-icon.png` | The little icon in the browser tab / phone home screen | – |

To upload on GitHub: open the `assets` folder, click **Add file → Upload files**, drag in your photo(s) and click **Commit changes**.

Tips:
- Keep photos under about 500 KB each so the page loads quickly on phones. A free tool such as [squoosh.app](https://squoosh.app) can make photos smaller.
- File names must match exactly, including lower-case letters and `.jpg` (not `.JPG` or `.jpeg`).
- For gallery photos, also update the descriptions (for blind visitors using screen readers): in `script.js` change `"gallery.photo1"` etc. to describe the photo, e.g. `"The team celebrating a goal at The Hatrix"`.

**The logo:** FFF Phuket doesn't have a logo yet, so there is a simple placeholder badge drawn in code at the top of `index.html` (look for `PLACEHOLDER LOGO`). When you have a logo, save it as `assets/logo.png` and follow the instructions in that comment.

---

## 4. Switching on the contact form (Formspree)

The contact form sends messages by email using **Formspree**, a free service, so the email address never appears on the website. Until it is set up, the form shows a polite message asking people to use WhatsApp instead.

1. Go to [formspree.io](https://formspree.io) and click **Get started**. Sign up with the email address that should receive the messages (the team contact address) and confirm the email they send you.
2. Click **+ New form**, give it a name such as "FFF Phuket website", and make sure it sends to that same email address.
3. Formspree shows you the form's address, which looks like `https://formspree.io/f/abcdwxyz`. The letters after `/f/` are your **form ID**.
4. Open `index.html`, search for `YOUR_FORM_ID`, and replace those letters with your form ID, so it looks like:
   `action="https://formspree.io/f/abcdwxyz"`
5. Commit the change. Then send a test message from the live website. (The very first message may ask you to confirm in Formspree.)

The free Formspree plan allows 50 messages a month, which should be plenty.

---

## 5. Adding the exact Google Map

The map currently shows the result of a Google search for "The Hatrix Phuket". To show the exact spot:

1. Open [Google Maps](https://maps.google.com) and find The Hatrix.
2. Click **Share**, then the **Embed a map** tab, then **Copy HTML**.
3. The copied code contains `src="https://www.google.com/maps/embed?pb=..."`. Copy just the web address between the quotes after `src=`.
4. Open `index.html`, search for `GOOGLE MAP`, and just below it replace the web address after `src="` with the one you copied.

The **Get directions** button uses a separate link (`https://maps.app.goo.gl/JShTJBvzwVakECjj6`), so it already works.

---

## 6. Adding a video to the gallery

1. **YouTube:** open the video, click **Share → Embed**, and copy the code.
   **Facebook:** open the video, click the **⋯** menu → **Embed**, and copy the code.
2. Open `index.html` and search for `GALLERY VIDEO`.
3. Replace the block that starts `<div class="video-placeholder">` and ends with its matching `</div>` (4 lines) with the code you copied.
4. In the copied code, delete `width="…"` and `height="…"` – the page sizes the video automatically.

---

## 7. Social media links

Search `index.html` for `SOCIAL MEDIA`. Replace each `href="#"` with the address of the team's page, e.g. `href="https://www.facebook.com/fffphuket"`. Delete the whole line (`<li>…</li>`) for any you don't use.

---

## 8. Publishing on GitHub Pages (step by step)

1. Sign in to [github.com](https://github.com) and open this repository.
2. Make sure the files (`index.html`, `styles.css`, `script.js`, `assets`) are on the **main** branch. (If they are on another branch, open a **Pull request** and click **Merge**.)
3. Click **Settings** (top of the repository), then **Pages** in the left-hand menu.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
6. Wait a minute or two and refresh the page. GitHub shows the address of your live website at the top, e.g.
   `https://alexanderseago-create.github.io/FFFwebsite/`
7. Open it on your phone and computer to check everything looks right.

After this, every change you commit to the **main** branch goes live automatically within a couple of minutes.

**If the website address is different** from the one above (for example if the repository is renamed or you buy your own domain name), open `index.html` and update the two addresses in the lines starting `<meta property="og:url"` and `<meta property="og:image"`, so the link preview on WhatsApp and Facebook still shows the picture.

**Seeing an old version?** Your browser may have saved the old page. Refresh with Ctrl + F5 (Windows) or Cmd + Shift + R (Mac), or wait a few minutes. WhatsApp and Facebook also keep old previews for a while; Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) can refresh it.

---

## Checking it on your own computer (optional)

Double-click `index.html` to open it in your web browser. Everything works except the contact form and map, which need the internet.
