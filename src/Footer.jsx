export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="px-16 py-4 flex justify-center items-center text-base font-bold text-gray-950">
        &copy; {new Date().getFullYear()}. All rights reserved by Deeptha
      </div>
    </footer>
  );
}
