export function Task(id, name, scheduledTime, scheduledLocation, members) {
  this.id = id;
  this.name = name;
  this.scheduledTime = scheduledTime;
  this.scheduledLocation = scheduledLocation;
  this.members = members;
}
