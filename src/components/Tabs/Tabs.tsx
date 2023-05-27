'use client'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { classNames } from '../../../utils/classNames'

type Tab = {
  name: string
  label: React.ReactNode
  content: React.ReactNode
}

type TabsProps = {
  tabs: Tab[]
}

export function Tabs({ tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].name)

  return (
    <Tab.Group
      onChange={(tabIndex: number) => setCurrentTab(tabs[tabIndex].name)}
    >
      <Tab.List className="flex px-2 py-4 -mt-4 space-x-8 ">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              classNames(
                selected
                  ? 'border-red-400 text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-2xl'
              )
            }
            name={tab.name}
          >
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      {tabs.map((tab) => (
        <Tab.Panel 
          key={tab.name} 
          className={tab.name === 'Cities' ? "grid grid-cols-3 gap-12" : "px-4"}
        >
          {currentTab === tab.name && tab.content}
        </Tab.Panel>
      ))}
    </Tab.Group>
  )
}
