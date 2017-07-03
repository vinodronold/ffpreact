import cx from 'classnames'
import './Button.scss'

const Button = ({ className, children, onDark = false }) =>
  <button class={cx(className, 'button', { 'on-dark': onDark, 'on-light': !onDark })}>
    <span class="label">
      {children}
    </span>
  </button>

export default Button
