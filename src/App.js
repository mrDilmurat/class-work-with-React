import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {
  const users = [{
    name: 'Dilmurat',
    lastName: 'Idrisov',
    age: 39,
    id: 1
  }, {
    name: 'Ilia',
    lastName: 'Idrisov',
    age: 39,
    id: 2
  }, {
    name: 'Zamir',
    lastName: 'Idrisov',
    age: 39,
    id: 3
  }, {
    name: 'Urmat',
    lastName: 'Idrisov',
    age: 39,
    id: 4
  }, 
]
  return (
    <>
      <Header />
      <Section users={users}/>
      <Footer />
      
    </>
  )
}

export default App


// В App.js создайте массив users с объектами, у которых есть ключи name, lastName,
// age и id.