import { ExpirationCompleteEvent, Publisher, Subjects } from "@kurreyyh/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
