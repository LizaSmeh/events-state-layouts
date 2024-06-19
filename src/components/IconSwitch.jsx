

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className="icon-switch">
      <button className="btn-store material-icons" onClick={onSwitch}>{icon}</button>
    </div>
  )
}

