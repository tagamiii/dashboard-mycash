export default function Dashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Placeholder Content */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-32" />
                ))}
            </div>
        </div>
    );
}
