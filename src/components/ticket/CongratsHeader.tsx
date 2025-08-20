export default function CongratSHeader({ name }: { name: string }) {
  return (
    <div className="mb-3 md:mb-4">
      <h1 className="text-xl font-bold md:text-2xl">Congrats, {name}!</h1>
      <p className="text-gray-600 text-sm md:text-base">Your ticket is ready.</p>
    </div>
  );
}