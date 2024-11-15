'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Component() {
  const [events, setEvents] = useState([])
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '' })

  const handleCreateEvent = () => {
    setEvents([...events, { ...newEvent, id: Date.now() }])
    setNewEvent({ title: '', description: '', date: '' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">EMP</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-lg font-medium">Home</a>
                <a href="#" className="text-lg font-medium">Events</a>
                <a href="#" className="text-lg font-medium">About</a>
                <a href="#" className="text-lg font-medium">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="text-center mb-8 pt-10">
          <h1 className="text-4xl font-bold text-white mb-2" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>Event Management Platform</h1>
          <div className="hidden md:flex justify-center space-x-4 mb-8">
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">Home</a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">Events</a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">About</a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">Contact</a>
          </div>
          <p className="text-xl text-white">Create and manage your events with ease</p>
        </div>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <Input
                placeholder="Event Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <Button onClick={handleCreateEvent} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded">
                Create Event
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-700">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-sm text-gray-500 mt-2">Date: {event.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Event Management Platform. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}