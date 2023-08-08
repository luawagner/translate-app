
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Form, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants';
import ArrowsIcon from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';

function App (){
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()
return (
  <Container fluid>
    <h1>Google Translate</h1>
<Row>
  <Col>
  <Stack gap={2}>
  <LanguageSelector 
  type={SectionType.From}
  value={fromLanguage}
  onChange={setFromLanguage}/>
  
  <Form.Control
  as='textarea'
  placeholder='Introducir texto'
  autoFocus
  style={{ height: '150px'}}
  />

  </Stack>
  </Col>
  <Col>
  <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={()=> interchangeLanguages()}> 
  <ArrowsIcon />
  </button>
  </Col>
  <Col>
  <Stack gap={2}>
  <LanguageSelector 
  type={SectionType.To}
  value={toLanguage}
  onChange={setToLanguage}/>

<Form.Control
  as='textarea'
  placeholder='Traducción'
  style={{ height: '150px'}}
  />
  </Stack>
  </Col>
</Row>



  </Container>
)
}
export default App;