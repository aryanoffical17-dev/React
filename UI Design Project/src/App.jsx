import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {

const users = [
  {
    Image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'Already confident with their bank, these customers value dependable everyday service, useful rewards, and a smoother way to manage money.',
    tag: 'Satisfied',
  },
  {
    Image: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'Limited access to branches, credit, or tailored support can make banking harder. Simple digital tools can help bring essential services within reach.',
    tag: 'Underserved',
  },
  {
    Image: 'https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'With limited credit history or reliance on cash, customers need clear fees, flexible ways to save, and tools that build financial confidence.',
    tag: 'Underbanked',
  },
];


  return (
    <div className="overflow-x-hidden">
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
