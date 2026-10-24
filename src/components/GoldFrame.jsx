// Bingkai emas tipis dengan efek neon yang berdenyut halus.
export default function GoldFrame({ className = '', children, ...rest }) {
  return (
    <div className={`gold-frame ${className}`} {...rest}>
      <div className="frame-inner">{children}</div>
    </div>
  )
}
