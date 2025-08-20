export default function TicketCard({ name, githubUsername }: { name: string; githubUsername: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 md:p-6">
      <h2 className="text-lg font-bold mb-2 md:text-xl md:mb-4">Coding Conf</h2>
      <p className="text-gray-600 text-sm mb-3 md:text-base md:mb-4">
        Jan 31, 2025 / Austin, TX
      </p>
      <div className="border-t border-gray-200 pt-3 md:pt-4">
        <p className="font-semibold text-sm md:text-base">{name}</p>
        <p className="text-gray-600 text-sm md:text-base">@{githubUsername}</p>
      </div>
    </div>
  );
}