const {xixo} = require('@xixo/xixo');
const {spawn} = require('child_process');

(async () => {
  const {packages} = await xixo('@xixo/boot');
  const boot = (cwd) => {
    spawn('npm', ['run', 'xixo'], {
      stdio: 'inherit',
      stderr: 'inherit',
      env: {
        XIXO: process.cwd(),
        ...process.env,
      },
      cwd
    }, console.log);
  };

  packages.forEach((pkg) => {
    pkg['@xixo/boot'] ? boot(pkg.__dirname) : null
  });
})();
