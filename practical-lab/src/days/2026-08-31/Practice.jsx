import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>{children}</div>;
}

function Tab({ index, children }) {
  // TODO 1: read activeIndex/setActiveIndex from TabsContext, call
  // setActiveIndex(index) on click, and bold this button when active
  return <button>{children}</button>;
}

function TabPanel({ index, children }) {
  // TODO 2: read activeIndex from TabsContext; return null unless
  // it matches "index"
  return <div>{children}</div>;
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default function Practice() {
  return (
    <Tabs defaultIndex={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>Home</Tabs.Tab>
        <Tabs.Tab index={1}>Profile</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel index={0}>🏠 Home content</Tabs.Panel>
      <Tabs.Panel index={1}>👤 Profile content</Tabs.Panel>
    </Tabs>
  );
}
