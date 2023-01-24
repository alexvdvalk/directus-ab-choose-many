Directus API commands to create the A/B Choose Many
Create fields programmatically.

Rename .env.sample to .env
Update projectURL and token in the env file. Ensure token has admin rights.
run `npm i`
Open index.ts
update `collection` variable
update field meta to match requirements
- Dropdown options for main field
- Dropdown options for each field
- Field names
run `npm run init` to create the fields
If you need to make any changes, manaully remove all 3 fields in Directus manually and rerun

TODO:
Add some typing.
Use Directus SDK.