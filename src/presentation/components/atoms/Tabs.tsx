import Tab, { ITab } from "./Tab";

export interface TabsProps extends React.PropsWithChildren<{}> {
  tabs: ITab[];
  className?: string;
}

const Tabs = ({ tabs, className }: TabsProps) => {
  return (
    <nav
      className={`-mb-px flex space-x-8 h-full` + className}
      aria-label="Tabs"
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          name={tab.name}
          active={tab.active}
          label={tab.label}
          to={tab.to}
          onClick={tab.onClick}
          aria-current={tab.name ? "page" : undefined}
        ></Tab>
      ))}
    </nav>
  );
};

export default Tabs;
