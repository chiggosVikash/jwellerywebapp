export default function SettingsPage() {
    const settingsCategories = [
        { name: "Account", icon: "👤" },
        { name: "Privacy", icon: "🔒" },
        { name: "Notifications", icon: "🔔" },
        { name: "Appearance", icon: "🎨" },
        { name: "Security", icon: "🛡️" },
        { name: "Language", icon: "🌐" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Settings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {settingsCategories.map((category, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h2 className="text-xl font-semibold">{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}