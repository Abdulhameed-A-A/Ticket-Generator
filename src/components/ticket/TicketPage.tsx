import CongratSHeader from './CongratsHeader';
import TicketCard from './TicketCard';
import { type UserData } from '../../types';

export default function SuccessPage({ userData }: { userData: UserData }) {
  return (
    <div className="p-4 md:p-6">
      <CongratSHeader name={userData.name} />
      <p className="text-sm mb-4 md:text-base md:mb-6">
        We've emailed your ticket to<br />
        <span className="font-medium">{userData.email}</span>
      </p>
      <div className="border-t border-gray-200 my-3 md:my-4"></div>
      <TicketCard 
        name={userData.name}
        githubUsername={userData.userName}
      />
    </div>
  );
}