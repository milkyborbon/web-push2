var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BGlFCGsO5eAj_kMeDjKzwpQ_ElWna-HQcb063UpT-xx8UJ1ILsOGLbwsioIRsd1JNTHmKpE5RXNKeFTQtzj0ipg',
    privateKey: 'EdAv-CHNKmSPa0IveEDkQ-vbE-h6TEVpgcF03pYZBig'
  };

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/e3jYJY0i6Cc:APA91bGEUY2SKxObTNvbWhC7fEh62JSaW5eluH6P4gtZj0HKL2zqWNOxiUIPpQ190hUae_-cYYVlzb5yBFv_OYBQZj56o7aqZQM7E-cv6PSZVtAhf9Soj0ZdN9qW8l854fF7NOGlvcXq","expirationTime":null,"keys":{"p256dh":"BBRsTZWc0mC8ARPBlShul9bk4ZgYzL9bF5fPT3nCfKFl3weLLAVFa7I4f91SXNbeDsfhq6YLRe-ar5fKf9AqSkM","auth":"0SpjNa5g7OOcQ0bLpk4_JA"}};
push.sendNotification(sub, 'This is the Test Message');