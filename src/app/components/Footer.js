export default function Footer() {
  return (
    <footer className="bg-[#f9f7f1] text-center py-8 border-t border-[#e0dcd3] text-gray-700">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} <span className="font-semibold text-[#1e293b]">Mr. Walter Simuyu</span>. All Rights Reserved.
      </p>
      <p className="text-xs italic text-[#c08457]">
        “Words build worlds — let yours be beautiful.”
      </p>
    </footer>
  );
}
