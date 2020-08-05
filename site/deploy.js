require('dotenv').config();

const NetlifyAPI = require('netlify');

const client = new NetlifyAPI(process.env.NETLIFY_ACCESS_TOKEN);

(async () => {
  console.log('Starting to deploy');
  const deploy = await client.deploy(
    process.env.SITE_API_ID,
    './__sapper__/export/',
    {
      branch: 'docs',
      message: `Deployed at ${new Date().toUTCString()}`,
    },
  );
  console.log(deploy);
  console.log('Completed');
})();
