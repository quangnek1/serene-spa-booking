import { Menu, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
}

export function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_role');
    navigate('/login');
  };

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 md:px-6 shrink-0">
      <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-muted">
        <Menu className="h-5 w-5 text-muted-foreground" />
      </button>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground hidden sm:block">Admin</span>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}
