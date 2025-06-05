export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 text-center text-gray-500 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-light">© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
      </div>
    </footer>
  )
}
