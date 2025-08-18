import type { TicketData, UserData } from "../types";

export const generateTicketData = (userData: UserData): TicketData => {
  return {
    ...userData,
    eventDate: "Jan 31, 2025",
    eventLocation: "Austin, TX"
  }
}