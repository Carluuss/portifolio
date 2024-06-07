import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Github } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
      nesciunt quibusdam! Accusantium doloribus deserunt, asperiores deleniti
      nemo debitis? Pariatur dolorum possimus ducimus corporis explicabo eius,
      ab et nisi non vitae.
    </Paragrafo>
    <Github>
      <img src="https://github-readme-stats.vercel.app/api?username=carluuss&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=carluuss&layout=compact&langs_count=7&theme=dracula" />
    </Github>
  </section>
)

export default Sobre
