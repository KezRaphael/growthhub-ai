export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">

      <button className="bg-green-600 p-5 rounded-xl hover:bg-green-700 transition">
        🌐
        <br />
        Create Website
      </button>

      <button className="bg-blue-600 p-5 rounded-xl hover:bg-blue-700 transition">
        🎨
        <br />
        AI Creative Studio
      </button>

      <button className="bg-purple-600 p-5 rounded-xl hover:bg-purple-700 transition">
        📱
        <br />
        Social Hub
      </button>

      <button className="bg-orange-600 p-5 rounded-xl hover:bg-orange-700 transition">
        📊
        <br />
        Analytics
      </button>

    </div>
  );
}
