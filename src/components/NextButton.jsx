import { ArrowIcon } from './Icons.jsx'

export default function NextButton({ to, title, hint }) {
  return (
    <a className="btn-next" href={`#/${to}`}>
      <span className="btn-next-text">
        <small>{hint}</small>
        <strong>{title}</strong>
      </span>
      <span className="btn-next-arrow">
        <ArrowIcon />
      </span>
    </a>
  )
}
