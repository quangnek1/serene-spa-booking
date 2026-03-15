import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, CalendarCheck, Users, Briefcase, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Bookings', path: '/admin/bookings', icon: CalendarCheck },
  { label: 'Customers', path: '/admin/customers', icon: Users },
  { label: 'Services', path: '/admin/services', icon: Briefcase },
];

interface AdminSidebarProps {
  open: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ open, onToggle }: AdminSidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-foreground/20 z-40 md:hidden" onClick={onToggle} />
      )}

      <aside
        className={cn(
          'fixed md:sticky top-0 left-0 z-50 md:z-auto h-screen bg-card border-r border-border flex flex-col transition-all duration-300',
          open ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-16 md:translate-x-0'
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border shrink-0">
          {open && (
            <span className="font-semibold text-foreground text-sm truncate">Admin Panel</span>
          )}
          <button onClick={onToggle} className="p-1 rounded-md hover:bg-muted md:hidden">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => { if (window.innerWidth < 768) onToggle(); }}
                className={cn(
                  'flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {open && <span className="truncate">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        {open && (
          <div className="p-4 border-t border-border text-xs text-muted-foreground">
            HANNAH HEADSPA
          </div>
        )}
      </aside>
    </>
  );
}
