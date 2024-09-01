import './styles/spacer.css'

type SpacerProps = {
  className?: React.HTMLAttributes<HTMLHRElement>['className']
}

export default function Spacer({ className = '' }: SpacerProps) {
  return <hr className={`spacer${className ? ` ${className}` : ''}`}></hr>
}
