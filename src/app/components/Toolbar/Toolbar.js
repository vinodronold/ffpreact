import Button from '../Button'
import './Toolbar.scss'

const Toolbar = () =>
  <div>
    <div class="toolbar">
      <div class="title">Toolbar</div>
      <div class="right">
        <Button onDark>BUTTON 1</Button>
        <Button onDark>BUTTON 2</Button>
      </div>
    </div>
    <div class="toolbar-clearspace" />
  </div>

export default Toolbar
