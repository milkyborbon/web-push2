var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BG94pQ6ht1Uc3aBFoSGOed7kGfNzIRTzf5NLj87_eCiox2evWekMvGE2AvQ3yq749TOHV2CpZBmcfyQGG8kiuT0',
    privateKey: 'NOpYZ9VCJQK_sm8oTbdKjZptsP17CQtaqygnoziw3dE'
  };


push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dYFP6au1Jgg:APA91bHE2Kmtps66qFDJKjHTzzA4HAVJIRYU3XtGCihIut-SVdfpWuvY_HqHMMScOyj4v8Jo78d58U_Axelmwoox3ufjo1Oai0aMUGnBLxS7qha_2JWKRcXAL2NtOrDSlfJyHORiEbjD","expirationTime":null,"keys":{"p256dh":"BF5ONeg85HCHYvmPl0-68kVYM-T2lDnqZtcJ6qv99Oi-yUbKhDntNqcsQ4CyI9RdfY8h3oH4bxQa8HEVzyijpyQ","auth":"JUOA8AIk3L70AmjddcQslw"}};

push.sendNotification(sub, 'This is the Test Message');