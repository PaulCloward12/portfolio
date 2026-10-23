import {setGlobalOptions} from "firebase-functions";
import {onCall, HttpsError} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

setGlobalOptions({maxInstances: 10});

export const sendContactMessage = onCall(async (request) => {
  const {name, email, message} = request.data;

  if (!name || !email || !message) {
    throw new HttpsError(
      "invalid-argument",
      "Name, email, and message are required."
    );
  }

  // Save to Firestore
  await db.collection("contactMessages").add({
    name,
    email,
    message,
    createdAt: new Date(),
  });

  logger.info("New contact message saved", {name, email});

  return {success: true};
});
