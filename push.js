var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BGlFCGsO5eAj_kMeDjKzwpQ_ElWna-HQcb063UpT-xx8UJ1ILsOGLbwsioIRsd1JNTHmKpE5RXNKeFTQtzj0ipg',
    privateKey: 'EdAv-CHNKmSPa0IveEDkQ-vbE-h6TEVpgcF03pYZBig'
  };

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/duSa0u5czk4:APA91bGDdVqqsu2-ntSbRioR9vrnOA7H8Gr96kEK-lD1ajstrVo2RTjS8ZTsQ5bkNS3WI_17kgtxNKAqYWSIxrA2xiutct8mgOtM7wJqZia24eawUkQMe_48R6dWCQqYuUUDDQjKus5t","expirationTime":null,"keys":{"p256dh":"BFPYUB1Wlh97aMP7gA0x-Rd0cxZS87ImDDFisTzY1FhtdtUkQwDovdEulC22kfr8-9U8pBtIrnYDqlFMMxn9uYo","auth":"qx8ipvW42AZIcSFmHNfz0g"}};
push.sendNotification(sub, 'This is the Test Message');