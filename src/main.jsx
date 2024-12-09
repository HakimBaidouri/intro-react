import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Form from './Form.jsx'
import Checkbox_form from './Checkbox_form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Form></Form>
    <Checkbox_form></Checkbox_form>
  </StrictMode>,
)
