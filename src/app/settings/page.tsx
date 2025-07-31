import Link from 'next/link'

export default function SettingsPage() {
  const sections = [
    { title: 'Account Info', subtitle: 'Manage your profile', href: '/settings/account' },
    { title: 'Theme Preferences', subtitle: 'Customize appearance', href: '/settings/theme' },
    { title: 'AI Settings', subtitle: 'Orb behavior & responses', href: '/settings/ai' },
    { title: 'Notifications', subtitle: 'Control alerts & sounds', href: '/settings/notifications' },
    { title: 'Data & Privacy', subtitle: 'Manage data usage', href: '/settings/privacy' },
    { title: 'About App', subtitle: 'Version & credits', href: '/settings/about' }
  ]

  return (
    <div className="settings-page min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="settings-list space-y-4">
        {sections.map(({ title, subtitle, href }) => (
          <Link key={title} href={href} className="settings-card block border rounded-lg p-4 hover:bg-gray-100 transition">
            <div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-700">{subtitle}</p>
            </div>
            <span className="text-gray-500 text-right block mt-2">&rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  )
}