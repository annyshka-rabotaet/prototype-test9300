import React, { useState } from 'react'
import GoogleSearch from './components/GoogleSearch'
import TemplatePage from './components/TemplatePage'
import DocumentEditor from './components/DocumentEditor'

// PROTOTYPE V1 — Minimal: Google → Template → Editor (no Signup)
function App() {
  const [currentPage, setCurrentPage] = useState('search') // 'search' | 'template' | 'editor'

  const handleResultClick = () => {
    setCurrentPage('template')
  }

  const handleUseTemplate = () => {
    setCurrentPage('editor') // Skip signup, go directly to editor
  }

  // Render current page
  switch (currentPage) {
    case 'template':
      return <TemplatePage onUseTemplate={handleUseTemplate} />
    
    case 'editor':
      return <DocumentEditor />
    
    case 'search':
    default:
      return <GoogleSearch onResultClick={handleResultClick} />
  }
}

export default App
