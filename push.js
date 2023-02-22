var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BGlFCGsO5eAj_kMeDjKzwpQ_ElWna-HQcb063UpT-xx8UJ1ILsOGLbwsioIRsd1JNTHmKpE5RXNKeFTQtzj0ipg',
    privateKey: 'EdAv-CHNKmSPa0IveEDkQ-vbE-h6TEVpgcF03pYZBig'
  };

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fxDGwmJVuuE:APA91bEdEdsl3AbryhpKKia7ZRt5NYTGm2OUzW_frNOWeb9b8czRBXtYMGijSAYs3cghV34F_f99e24wUZsbD1mgVq5O0PvkPYS9V835Oku49RV-pfwaE0uUqesaN-g-NJeGV9j2H__X","expirationTime":null,"keys":{"p256dh":"BLuwV_ohcowothh44S-xRJUhrd2Yeh4waoD0z-Sn-mmk28qlP4QZMtJgk2s5LVqoB7k5LdZO-Qlu0UAVdBugwW4","auth":"qoKaWx-a04oQinU7FuiZmw"}};
push.sendNotification(sub, 'This is the Test Message');