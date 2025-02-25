export const NeonCard = ({ href, icon, alt }) => {
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <div className="flex items-center gap-5">
      <a href={href} className="no-underline block" style={{ minWidth: '60px' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          backgroundColor: '#27302A',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #9BFB3B',
          position: 'relative',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 5px #9BFB3B, 0 0 10px #9BFB3B';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <div style={{
            position: 'absolute',
            inset: '4px',
            backgroundColor: '#101813',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 20px #2B4F28, inset 0 0 40px #3D7832'
          }}>
            <img 
              src={`/icons/${icon}.svg`}
              alt={alt}
              style={{ 
                width: '30px',
                height: '30px',
                filter: 'invert(97%) sepia(12%) saturate(346%) hue-rotate(58deg) brightness(103%) contrast(96%)'
              }}
            />
          </div>
        </div>
      </a>
    </div>
  )
} 