import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const statuses = [
    {
      name: 'All',
      value: 'all',
    },
    {
      name: 'Pending',
      value: 'pending',
    },
    {
      name: 'Completed',
      value: 'completed',
    },
  ]

  const [statusFilter, setStatusFilter] = useState('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="mb-7 text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          defaultValue="all"
          orientation="vertical"
          onValueChange={(value) => setStatusFilter(value)}
        >
          <Tabs.List className="space-x-3">
            {statuses.map((status, index) => (
              <Tabs.Trigger
                key={index}
                value={status.value}
                data-status={
                  status.value === statusFilter ? 'active' : 'disabled'
                }
                className=" rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-500 data-[status=active]:bg-gray-700 data-[status=active]:text-white"
              >
                {status.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList statusFilter={statusFilter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
