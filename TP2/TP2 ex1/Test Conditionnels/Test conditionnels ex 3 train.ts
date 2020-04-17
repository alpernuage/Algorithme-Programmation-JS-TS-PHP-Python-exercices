let traintype: string = "TGV"
let numbertrain: number = 2516
let provenance: string = ""
let destination: string = ""
let track: number = 4
let delay: number = 10
let message: string = "Thanks for moving away from the edge of the dock."
let messagedelay: string = "We are sorry for the delay."

if (delay > 0) {
  console.log("The train " + traintype + " no " + numbertrain + " provenance from " + provenance + " destination to " + destination + " arrive track " + track + " with " + delay + " mins of retard. " + messagedelay);
} else if (delay == 0) {
  console.log("The train " + traintype + " no " + numbertrain + " provenance from " + provenance + " destination to " + destination + " arrive track " + track + "." + message);
}
