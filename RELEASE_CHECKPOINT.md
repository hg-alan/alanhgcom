# Website, galleries and CV checkpoint

Updated 2026-10-08. Engineering checks passed; protected previews verified, latest revision recorded in the ignored release status; production unchanged. Actual iPhone/Safari acceptance remains pending.

## Scope and provenance

- Checkout `/Users/alanhg/agent-projects/alanhgcom`, public remote `https://github.com/hg-alan/alanhgcom.git`, branch `codex/website-inbox-gallery`.
- Base/main `66cee7488dbcfb2fa313f49bc274a43230351637`. No pre-existing local work was overwritten. Original portfolio destinations and employment text preserved.
- User explicitly requested this phase after Inbox Distiller: add the project, improve every photo folder, update the CV using their supplied PDF. The product description accurately states the public launch preview is under review; live public access and subscription delivery are not open yet.
- Supplied `/Users/alanhg/Downloads/Alan_Healey-Greene_CV.pdf` copied byte-for-byte to the existing CV URL. SHA256 `a048e4b59ef5649b5bac1a40cec1a67bb49a85306ddcb8eb7739afa2ba310854`; source PDF unchanged. It already includes Inbox Distiller; no employment content rewritten.

## Implemented

Homepage: one “LLM + Jev: Inbox Distiller” link appears above Ecommerce, with Mosaic AI named and linked. The footer now uses visible Email, LinkedIn, Resume, GitHub and Substack labels, preserving every destination and the supplied PDF. Each label has a thin, subdued outline that strengthens on hover or keyboard focus; responsive padding and gaps retain one row with 44px tap targets. Compact portrait spacing and a short-landscape layout fit the tested viewports without hiding content or disabling scrolling. Enlarged accessibility text and arbitrarily small windows can still scroll; universal no-scroll behavior is not claimed.

Four compact contact sheets (City22, Concert27, Outside18, Other21) place uncropped photographs directly below a small home/category header. Proportional rows preserve each photograph's intrinsic aspect ratio and original order without padded thumbnail boxes. The immersive viewer devotes the full viewport to the image apart from a compact lower caption/control strip; it has no large upper title area or stacked button boxes. Previous/next, keyboard and touch navigation, Escape/Close/focus return, browser history, copyable links and failure recovery remain. Screen readers receive the current title/position after a change. No autoplay, accounts or additional product areas.

All88curated photographs, titles and ordering retained; all91original files under the photo directory match the Git baseline. Thumbnail delivery is responsive; the measured first City image was25,930bytes on desktop and155,440bytes on phone versus1,329,628originalbytes. Original-download links remain available.

Actual Impeccable4.5.0 guidance at official pinned commit `778c8a7b71ccd5bfe3ca6ac68c15d9d872d0f87d` informed the gallery review. Independent adversarial review found the missing photo-change announcement; fixed and retested. Browser testing also caught and fixed the Tab loop, large-text image collapse and prototype-key category handling.

## Validation

- Production build, TypeScript and ESLint:pass; lint has zero errors/warnings.
- Twelve production-build Playwright cases passed on desktop Chrome and phone emulation, one worker, no retries. Includes gallery counts, navigation, deep links/history, focus, swipe, portrait fit,320px+200%text, failed images/copy fallback, unknown category404s, preserved homepage destinations, new project page, and served CV checksum.
- The footer refinement reran that suite and added a nine-viewport homepage check: 320×480, 320×568, 375×550, 390×664, 430×745, 568×300, 667×300, 844×300 and 1280×800. Thirteen cases passed; the duplicate matrix is intentionally skipped in the phone project. The matrix verifies no page overflow at normal text size, one footer row and 44px targets. First-pass failures at the two smallest viewports were fixed through spacing and layout, then the full suite passed. Evidence: `website-text-footer-*` logs and `footer-*` screenshots.
- The follow-up outlined footer passed lint, typecheck, production build and all 13 browser cases, including the same nine-viewport matrix, on its first verification pass. Desktop and compact-phone renders were inspected. Evidence: `website-outlined-footer-*` logs and refreshed `footer-*` screenshots.
- The immersive gallery refinement passes lint, typecheck, production build and14browser cases, with two duplicate viewport matrices intentionally skipped in the phone project. Added viewer checks at320×480,390×664,844×390 and1280×800 verify zero outer image padding, a control strip at most80px high, visible controls and no normal-size viewer overflow. Desktop/phone renders and200%text behavior were inspected. Original91photo files were rechecked byte-for-byte against the baseline, and the CV checksum is unchanged. Initial phone navigation timeouts persisted despite DOM-ready waiting and resolved after replacing the agent-owned local servers with a fresh production-build server; failed logs and a trace remain under `.release-evidence/website-immersive-gallery-*`. Final complete suite:14passed in8.5seconds.
- Runtime dependency audit:zero findings. Unsupported Next14.1/React18 upgraded within the existing stack to Next16.3.8/React19.3, maintained Node22/24. Compatible dependency patches applied. Full audit retains5development-tool nodes from one unpatched braces3.0.3 deeply nested glob denial-of-service advisory, through ESLint's fast-glob/micromatch. The app accepts no glob/build configuration input; do not use npm audit's suggested downgrade to unsupported Next14.
- Original image/CV integrity recorded in ignored `.release-evidence/asset-integrity.json`; test logs, rendered screenshots, actual image-delivery measurements, dependency audits and independent review are in that same ignored folder.

## Preview and resumption

Vercel `hgalans-projects/alanhgcom-vzpz`, project `prj_cOE5wZoEoiykl9o9wGCQ7kN4heA4`. Existing production `dpl_5vXSRDMWiBdRisAXRB8wBUZyYLrd`, base/main above; https://www.alanhg.com remains unchanged. No preview environment variables or integrations are needed by this static portfolio. Existing Vercel protection covers all previews. `vercel.json` disables automatic deployments for this branch; explicit preview only. `.vercelignore` excludes env files, captures and local evidence.

Final SHA, actual preview and upload/provenance receipts are stored in ignored `.release-evidence/release-status.json` after deployment. Public PR records the source revision. Never push or merge main as part of preview preparation.

Resume: `npm run build && npm run lint && npm run typecheck`; serve `npx next start -H 127.0.0.1 -p 3129`; `WEBSITE_TEST_URL=http://127.0.0.1:3129 npm run test:e2e`. The latest agent-owned loopback server uses3129; preserve unrelated sessions. Hosted acceptance verifies all four galleries, optimized images, project text and exact CV. Final review/publication follows Inbox Distiller acceptance and the owner's approval boundary; no claim of production change or actual-device acceptance is made here.
