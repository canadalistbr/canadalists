'use client'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

type Tab = {
  name: string
  label: string
  content: React.ReactNode
}

type TabsProps = {
  tabs: Tab[]
}

export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function Tabs({ tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].name)
  return (
    <Tab.Group
      onChange={(tabIndex: number) => setCurrentTab(tabs[tabIndex].name)}
    >
      <Tab.List className="flex space-x-8 p-4 -mt-4 ">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              classNames(
                selected
                  ? // TODO: Temporary colors
                    'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-3xl'
              )
            }
            name={tab.name}
          >
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      {tabs.map((tab) => (
        <Tab.Panel key={tab.name} className="p-4">
          {currentTab === tab.name && tab.content}
        </Tab.Panel>
      ))}
    </Tab.Group>
  )
}
