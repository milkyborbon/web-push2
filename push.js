var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BG94pQ6ht1Uc3aBFoSGOed7kGfNzIRTzf5NLj87_eCiox2evWekMvGE2AvQ3yq749TOHV2CpZBmcfyQGG8kiuT0',
    privateKey: 'NOpYZ9VCJQK_sm8oTbdKjZptsP17CQtaqygnoziw3dE'
  };


push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fVrvKpjbWTI:APA91bE3l9f3GtIsI_zt-_tp9dCZ2q_vXgdUtmRebq6YByYWq3MTDIwrkznbayDKxUNz3ArsDjGdmlWNWw10wHBz1bY-2UxNz-mSWOkkyE7LPW4cfTcgOgmGdXGk2tnmmE1ui7FnX0o8","expirationTime":null,"keys":{"p256dh":"BDFU5sEVjXY2yo9BXi-UxvOqXlvt020nTWxBkcgPj5weiLt37lVOd1KqUTawyMevgydvoXaVGDMFhR3rUiOOM3k","auth":"RB5Qco_cFTmMTeWlevXO-w"}};
push.sendNotification(sub, 'This is the Test Message');