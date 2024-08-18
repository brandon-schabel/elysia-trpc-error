import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useControlStore } from './control-store'
import { useEffect, useRef, useState } from 'react'
import { Button } from './components/ui/button'
import { useHotkeys } from 'react-hotkeys-hook'
import { trpc } from './trpc-client'

function App() {
  const greetingQuery = trpc.greeting.useQuery("test input")
  const testQuery = trpc.test.useQuery()
  console.log({ greetingQuery, testQuery })


  return (
    <div className="max-w-screen-2xl mx-auto">

      <h1>Test Query</h1>
      <pre>
        {JSON.stringify(testQuery, null, 2)}
      </pre>
      <h1>Greeting Query</h1>
      <pre>
        {JSON.stringify(greetingQuery, null, 2)}
      </pre>
    </div>
  )
}

export default App
