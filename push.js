var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BG94pQ6ht1Uc3aBFoSGOed7kGfNzIRTzf5NLj87_eCiox2evWekMvGE2AvQ3yq749TOHV2CpZBmcfyQGG8kiuT0',
    privateKey: 'NOpYZ9VCJQK_sm8oTbdKjZptsP17CQtaqygnoziw3dE'
  };


push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/coTcJTPZYy8:APA91bF30TSMa9qGGOAZV59ATFIYrhNIX5spbJ50ToqKzTehRQ8oxN-EmaTBRVRyNxGII2tWhnEfUjljFR_Qbnampw7bE2exYLr_1RXcvJXklt6ClmB4V8t4QqAYL5eBHgbEjaGunbjb","expirationTime":null,"keys":
{"p256dh":"BOhOjq9v2ZmxWButy280aCdRutydrG_s1oKNKOWmNXeu__5lNIR6Z9XeOITa--CNuWzSWVzTv9ib2607SLKdRa8","auth":"VDkYg DQYtLn3NbtRXWYpyQ"}};
push.sendNotification(sub, 'This is the Test Message');