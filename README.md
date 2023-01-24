Directus API commands to create the A/B Choose Many

Rename .env.sample to .env
run `npm i`
Update projectURL and token in the env file. Ensure token has admin rights.
Open index.ts
update collection
update field meta to match requirements
- Dropdown options for main field
- Dropdown options for each field
- Field names
run `npm run init` to create the fields
If you need to make any changes, manaully remove all 3 fields in Directus manually and rerun