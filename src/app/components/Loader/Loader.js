import './Loader.scss'
const Loader = () =>
  <div class='loader'>
    <div class="text"> LOADING...</div>
    <div class="container">
      {Array(15).fill(1).map((_, idx) => <div key={idx} class={`item item-${idx + 1}`} />)}
    </div>
  </div>
export default Loader
