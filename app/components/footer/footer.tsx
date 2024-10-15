import Timer from "../timer";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center h-16 bg-gray-800 text-white px-4">
      <div className="text-sm">
        &copy; MZS. All rights reserved.
      </div>
      <div className="text-sm">
        <Timer />
      </div>
    </footer>
  );
}
