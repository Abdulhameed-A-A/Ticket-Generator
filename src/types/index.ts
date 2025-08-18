export interface UserData {
  name: string,
  email: string,
  userName: string,
  avatar: string
}

export interface TicketData extends UserData {
  eventDate: string,
  eventLocation: string
}