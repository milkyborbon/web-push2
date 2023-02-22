var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BGlFCGsO5eAj_kMeDjKzwpQ_ElWna-HQcb063UpT-xx8UJ1ILsOGLbwsioIRsd1JNTHmKpE5RXNKeFTQtzj0ipg',
    privateKey: 'EdAv-CHNKmSPa0IveEDkQ-vbE-h6TEVpgcF03pYZBig'
  };

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};
push.sendNotification(sub, 'This is the Test Message');