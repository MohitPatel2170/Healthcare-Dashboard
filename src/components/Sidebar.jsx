
// src/components/Sidebar.jsx
import {
  BarChart3,
  Calendar,
  FileText,
  HelpCircle,
  History,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Users
} from 'lucide-react';
import { navigationLinks, toolsLinks } from '../data/navigationLinks';
import styles from '../styles/Sidebar.module.css';

const iconMap = {
  dashboard: LayoutDashboard,
  history: History,
  calendar: Calendar,
  appointments: Users,
  statistics: BarChart3,
  tests: FileText,
  chat: MessageCircle,
  support: HelpCircle,
  setting: Settings
};

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarHeading}>General</h3>
        <nav className={styles.sidebarNav}>
          {navigationLinks.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a 
                key={item.id}
                href="#" 
                className={`${styles.navItem} ${item.active ? styles.active : ''}`}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
      
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarHeading}>Tools</h3>
        <nav className={styles.sidebarNav}>
          {toolsLinks.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a 
                key={item.id}
                href="#" 
                className={`${styles.navItem} ${item.active ? styles.active : ''}`}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;