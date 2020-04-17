let traintype = "TGV"
let numbertrain = 2516
let provenance = ""
let destination = ""
let track = 4
let delay = 10
let message = "Thanks for moving away from the edge of the dock."
let messagedelay = "We are sorry for the delay."

if (delay > 0) {
  console.log("The train " + traintype + " no " + numbertrain + " provenance from " + provenance + " destination to " + destination + " arrive track " + track + " with " + delay + " mins of retard. " + messagedelay);
} else if (delay == 0) {
  console.log("The train " + traintype + " no " + numbertrain + " provenance from " + provenance + " destination to " + destination + " arrive track " + track + "." + message);
}
