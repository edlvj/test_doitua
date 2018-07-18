module.exports = shipit => {
  require('shipit-deploy')(shipit)
  require('shipit-shared')(shipit);

  shipit.initConfig({
    shared: {
      files: [
        {
          path: 'src/config.js',
          overwrite: false,
          chmod: '755',
        }
      ],
    },    
    default: {
      deployTo: '/home/deploy/projects/test_doitua',
      repositoryUrl: 'https://github.com/edlvj/test_doitua',
    },
    staging: {
      servers: 'deploy@18.195.216.164',
    },
  });

  shipit.blTask('npm_install', function () {
    return shipit.remote( "cd /home/deploy/projects/test_doitua/current && npm install");
  });

  shipit.on('deployed', function () {
    console.log("Deployed !");
    shipit.start('npm_install');
  });
}