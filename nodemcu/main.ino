/*we are going to use ultrasonic sensors
these ultrasonic sensors will work by sending out a sound wave and measuring the 
time it takes for the wave to bounce back after hitting the object

we can measure the distance between the coal and sensor and then if the distance cross a certain 
value the then we can say the dumper is filled.

*/

#include<NewPing.h>
//define the pins

#define MAX_DISTANCE 200
#define THRESHOLD_VALUE 30
NewPing sonar(TRIGGER_PIN,ECHO_PIN, MAX_DISTANCE);

void setup() {
    Serial.begin(115200);
  
}

void loop() {

  delay(1000);

    unsigned int distance = sonar.ping_cm();

     if(distance > 0) {
//      Serial.print("Distance : ");
//      Serial.print(distance);

     if(distance <= THRESHOLD_VALUE) {
              Serial.println("coal reached to certain point");
     }else {
      Serial.println("coal is not reached to certain point");
     }

     }
     else {
      Serial.println("nothing is detected");
     }
     
  
}
