import { Container, Card, Number, Text, NameNiver, List, LocationIcon, CheckIcon, SpiderBottom, SpiderTop } from './styles'
import khayllerSpider from '../../assets/khayller.png'
import aranhaBottom from '../../assets/spider-bt.png'
import aranhaTop from '../../assets/spider-tp.png'

const Layout = () => {
  return (
    <Container>
      <Card>
        <Number>4</Number>
        <Text>Aniversário</Text>
        <NameNiver>Khayller Velozo Banharoto</NameNiver>
        <img src={khayllerSpider} alt="Khayller Velozo" />
        <Text>Venha comemorar meu 4º aninho!</Text>
        <List>
          <a href="https://www.google.com/maps/place/Alamanda+Espa%C3%A7o+para+Festas/@-24.1810454,-46.8212486,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce2aa9393900fd:0x60b26cf5f3b60ab1!8m2!3d-24.1810469!4d-46.8190616" target="blank"><LocationIcon />Como chegar</a>
          <a href="https://forms.gle/yrqEWu3GaSMi9qP98" target="blank"><CheckIcon />Confirmar Presença</a>
        </List>
      </Card>
      <SpiderBottom src={aranhaBottom} />
      <SpiderTop src={aranhaTop} />
    </Container>
  )
}

export default Layout