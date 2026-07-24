export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-950 p-6">
      <h1 className="text-2xl font-bold text-green-400">
        🚀 GrowthHub AI
      </h1>

      <nav className="mt-10 space-y-4">

        <a href="/dashboard" className="block hover:text-green-400">
          🏠 Dashboard
        </a>

        <a href="/website" className="block hover:text-green-400">
          🌐 Website Builder
        </a>

        <a href="/studio" className="block hover:text-green-400">
          🎨 AI Studio
        </a>

        <a href="/social" className="block hover:text-green-400">
          📱 Social Hub
        </a>

        <a href="/analytics" className="block hover:text-green-400">
          📊 Analytics
        </a>

        <a href="/settings" className="block hover:text-green-400">
          ⚙️ Settings
        </a>

      </nav>
    </aside>
  );
}
