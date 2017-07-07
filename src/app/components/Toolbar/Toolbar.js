import Button from '../Button'
import './Toolbar.scss'

const Toolbar = () =>
  <div>
    <div class="toolbar">
      <div class="title">Toolbar</div>
      <div class="right">
        <Button onDark>SAVE</Button>
        <Button onDark>LOGOUT</Button>
      </div>
    </div>
    <div class="toolbar-clearspace" />
  </div>

export default Toolbar
