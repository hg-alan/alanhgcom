# Website, galleries and CV checkpoint

Updated 2026-10-08. Engineering checks passed; protected preview pending; production unchanged. Actual iPhone/Safari acceptance remains pending.

## Scope and provenance

- Checkout `/Users/alanhg/agent-projects/alanhgcom`, public remote `https://github.com/hg-alan/alanhgcom.git`, branch `codex/website-inbox-gallery`.
- Base/main `66cee7488dbcfb2fa313f49bc274a43230351637`. No pre-existing local work was overwritten. Original portfolio destinations and employment text preserved.
- User explicitly requested this phase after Inbox Distiller: add the project, improve every photo folder, update the CV using their supplied PDF. The product description accurately states the public launch preview is under review; live public access and subscription delivery are not open yet.
- Supplied `/Users/alanhg/Downloads/Alan_Healey-Greene_CV.pdf` copied byte-for-byte to the existing CV URL. SHA256 `a048e4b59ef5649b5bac1a40cec1a67bb49a85306ddcb8eb7739afa2ba310854`; source PDF unchanged. It already includes Inbox Distiller; no employment content rewritten.

## Implemented

Four responsive gallery overviews (City22, Concert27, Outside18, Other21), category navigation at the top, correct intrinsic dimensions and image-aware alternative text, an uncropped full-image viewer, previous/next, keyboard and touch navigation, Escape/Close/focus return, browser history, copyable photo links and failure recovery. Screen readers receive the current title/position after a change. No autoplay, accounts or additional product areas.

All88curated photographs, titles and ordering retained; all91original files under the photo directory match the Git baseline. Thumbnail delivery is responsive; the measured first City image was25,930bytes on desktop and155,440bytes on phone versus1,329,628originalbytes. Original-download links remain available.

Actual Impeccable4.5.0 guidance at official pinned commit `778c8a7b71ccd5bfe3ca6ac68c15d9d872d0f87d` informed the gallery review. Independent adversarial review found the missing photo-change announcement; fixed and retested. Browser testing also caught and fixed the Tab loop, large-text image collapse and prototype-key category handling.

## Validation

- Production build, TypeScript and ESLint:pass; lint has zero errors/warnings.
- Twelve production-build Playwright cases passed on desktop Chrome and phone emulation, one worker, no retries. Includes gallery counts, navigation, deep links/history, focus, swipe, portrait fit,320px+200%text, failed images/copy fallback, unknown category404s, preserved homepage destinations, new project page, and served CV checksum.
- Runtime dependency audit:zero findings. Unsupported Next14.1/React18 upgraded within the existing stack to Next16.3.8/React19.3, maintained Node22/24. Compatible dependency patches applied. Full audit retains5development-tool nodes from one unpatched braces3.0.3 deeply nested glob denial-of-service advisory, through ESLint's fast-glob/micromatch. The app accepts no glob/build configuration input; do not use npm audit's suggested downgrade to unsupported Next14.
- Original image/CV integrity recorded in ignored `.release-evidence/asset-integrity.json`; test logs, rendered screenshots, actual image-delivery measurements, dependency audits and independent review are in that same ignored folder.

## Preview and resumption

Vercel `hgalans-projects/alanhgcom-vzpz`, project `prj_cOE5wZoEoiykl9o9wGCQ7kN4heA4`. Existing production `dpl_5vXSRDMWiBdRisAXRB8wBUZyYLrd`, base/main above; https://www.alanhg.com remains unchanged. No preview environment variables or integrations are needed by this static portfolio. Existing Vercel protection covers all previews. `vercel.json` disables automatic deployments for this branch; explicit preview only. `.vercelignore` excludes env files, captures and local evidence.

Final SHA, actual preview and upload/provenance receipts are stored in ignored `.release-evidence/release-status.json` after deployment. Public PR records the source revision. Never push or merge main as part of preview preparation.

Resume: `npm run build && npm run lint && npm run typecheck`; serve `npx next start -H 127.0.0.1 -p 3120`; `npm run test:e2e`. Current loopback server uses3120; preserve unrelated sessions. Hosted acceptance verifies all four galleries, optimized images, project text and exact CV. Final review/publication follows Inbox Distiller acceptance and the owner's approval boundary; no claim of production change or actual-device acceptance is made here.
