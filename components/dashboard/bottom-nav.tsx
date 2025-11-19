'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, FileText, Calendar, Sparkles, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/agents', label: 'Home', icon: Home },
  { href: '/passport', label: 'Passport', icon: FileText },
  { href: '/appointments', label: 'Appointments', icon: Calendar },
  { href: '/insights', label: 'Insights', icon: Sparkles },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          const Icon = item.icon;

          return (
            <button
              key={item.href}
              type="button"
              onClick={() => router.push(item.href)}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1 transition-colors',
                isActive
                  ? 'text-emerald-400'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              <Icon className={cn('w-5 h-5', isActive && 'text-emerald-400')} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

