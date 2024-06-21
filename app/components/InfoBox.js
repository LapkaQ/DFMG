export default function InfoBox({ children }) {
  return (
    <div className="text-[#c4841d] bg-[#c4841d]/30 px-2 py-1 rounded-md text-balance text-center max-w-[80vw]">
      {children}
    </div>
  );
}
