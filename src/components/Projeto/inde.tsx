import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkeBotao } from './styled'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefa</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkeBotao>Visualizar</LinkeBotao>
  </Card>
)

export default Projeto
