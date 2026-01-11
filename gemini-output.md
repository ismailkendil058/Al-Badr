I have removed every thing about lovable. I have completed the following steps:
1. Removed `lovable-tagger` from `package.json`.
2. Removed the import of `componentTagger` from `vite.config.ts` and its usage.
3. Removed the "lovable" related content from `README.md`.
4. Removed the meta tags from `index.html` that reference `lovable.dev`.
5. Removed `lovable-tagger` from `package-lock.json`.

I have verified that there are no more occurrences of "lovable" in the project.
I am unable to run `npm install` or `npm run build` to verify the project builds correctly.
